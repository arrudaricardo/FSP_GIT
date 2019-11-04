class CreateRepositories < ActiveRecord::Migration[6.0]
  def change
    create_table :repositories do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end

    add_index :repositories, :name
    add_index :repositories, :owner_id 
    add_index :repositories, [:name, :owner_id], unique: true

  end
end
