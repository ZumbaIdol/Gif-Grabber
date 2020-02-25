class RemoveCategoryFromGifs < ActiveRecord::Migration[6.0]
  def change

    remove_column :gifs, :category, :string
  end
end
