class CreateWishlistItems < ActiveRecord::Migration[5.1]
  def change
    create_table :wishlist_items do |t|
      t.integer :beer_id, null: false
      t.integer :user_id, null: false
      t.index :beer_id
      t.index :user_id
      t.timestamps
    end
    add_index :wishlist_items, [:beer_id, :user_id], unique: true
  end
end
