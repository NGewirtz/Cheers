class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.integer :beer_id
      t.integer :user_id
      t.text :body
      t.integer :rating
      t.index :beer_id
      t.index :user_id
      t.timestamps
    end
    add_index :checkins, [:beer_id, :user_id], unique: true
  end
end
