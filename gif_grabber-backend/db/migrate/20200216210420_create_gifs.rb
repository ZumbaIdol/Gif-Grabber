class CreateGifs < ActiveRecord::Migration[6.0]
  def change
    create_table :gifs do |t|
      t.string :category
      t.string :name
      t.references :user

      t.timestamps null: false
    end
  end
end
