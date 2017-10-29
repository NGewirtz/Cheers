class CreateCheers < ActiveRecord::Migration[5.1]
  def change
    create_table :cheers do |t|
      t.integer :checkin_id, null: false
      t.integer :user_id, null: false
      t.index :user_id
      t.index :checkin_id
      t.timestamps
    end
    add_index :cheers, [:checkin_id, :user_id], unique: true
  end
end
