class CreateIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :issues do |t|
      t.integer :repo_id, null: false
      t.integer :author_id, null: false
      t.text :title, null: false
      t.text :body, null: false
      t.boolean :open, default: true 

      t.timestamps
    end

    add_index :issues, :repo_id
    add_index :issues, :author_id
    add_index :issues, [:title, :repo_id], unique: true

  end
end
