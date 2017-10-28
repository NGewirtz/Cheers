class UpdateRestraints < ActiveRecord::Migration[5.1]
  def change
    change_column_default :beers, :avg_rating, default: 0
    change_column_null :checkins, :beer_id, null: false
    change_column_null :checkins, :user_id, null: false
    change_column_null :checkins, :body, null: false
    change_column_null :checkins, :rating, null: false
    change_column_null :breweries, :name, null: false
    change_column_null :breweries, :location, null: false
    change_column_null :breweries, :description, null: false
  end
end
