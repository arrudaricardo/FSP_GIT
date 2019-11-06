class AddDescriptionToRepositories < ActiveRecord::Migration[6.0]
  def change
    add_column :repositories, :description, :string
  end
end
