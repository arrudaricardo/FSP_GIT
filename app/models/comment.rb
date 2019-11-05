# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  issue_id   :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :issue_id, :user_id, :body, presence: true

  belongs_to :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :issue,
    class_name: 'Issue',
    foreign_key: :issue_id,
    primary_key: :id

end
