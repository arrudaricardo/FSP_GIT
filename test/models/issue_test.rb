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

require 'test_helper'

class IssueTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
