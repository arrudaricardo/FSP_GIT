# == Schema Information
#
# Table name: repositories
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Repository < ApplicationRecord
  validates :name, :owner_id, presence: true
  validates :name, uniqueness: {scope: :owner_id}
  validates :name, length: {minimum: 4, maximum: 15}
  validates :name, format: { with: /\A[a-zA-Z0-9]+\Z/ }
  validates :description, length: {maximum: 35}, allow_blank: true


  belongs_to :user,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id

  has_many :issues,
    class_name: 'Issue',
    foreign_key: :repo_id,
    primary_key: :id

  # initialize a git --bare init at storage/username/reponame/
  # @params username: string, reponame: string
  # @return boolean
  #
  def self.git_init_bare(username, reponame)
      path = "storage/#{username}/#{reponame}/"
      return `git init --bare #{path}`
  end

  def self.git_init(username, reponame)
      path = "storage/#{username}/#{reponame}/"
      return `git init #{path}`
  end

  def self.git_add_readme(username, reponame, readme)
      path = "storage/#{username}/#{reponame}/"
      out = `echo #{readme} >> path#{README.md}`
      out = `git -C #{readme} add README.md`
      out = `git -C #{readme} commit -m 'first commit'`
  end

  def self.delete_repo(username, reponame)
    path = "./storage/#{username}/#{reponame}"
      return `rm -rf #{path}` 
  end

  # return list of directories 
  def self.ls_files_tree(username, reponame)
    path = "./storage/#{username}/#{reponame}"
    `git -C #{path} ls-tree --full-tree -r --name-only HEAD`
  end

end
