# == Schema Information
#
# Table name: repositories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Repository < ApplicationRecord
  validates :name, :owner_id, presence: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id

  has_many :issues,
    class_name: 'Issue',
    foreign_key: :repo_id   
    primary_key: :id

end
