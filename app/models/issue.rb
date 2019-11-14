# == Schema Information
#
# Table name: issues
#
#  id         :integer          not null, primary key
#  repo_id    :integer          not null
#  author_id  :integer          not null
#  title      :text             not null
#  body       :text             not null
#  open       :boolean          default("true")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Issue < ApplicationRecord
  validates :repo_id, :author_id, :title, :body, presence: true
  validates :title, uniqueness: {scope: :repo_id}

  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :repository,
    class_name: "Repository",
    foreign_key: :repo_id,
    primary_key: :id

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :issue_id,
    primary_key: :id

end
