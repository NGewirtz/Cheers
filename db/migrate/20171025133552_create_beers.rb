class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.integer :brewery_id, null: false
      t.integer :abv
      t.integer :ibu
      t.string :type, null: false
      t.text :description, null: false
      t.index :brewery_id
      t.timestamps
    end
  end
end
