class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :issue_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :comments, :issue_id
    add_index :comments, :user_id 

  end
end
