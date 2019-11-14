class AddRepositoryIdToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :repository_id, :integer
  end
end
