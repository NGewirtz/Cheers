class AddAvgToBreweries < ActiveRecord::Migration[5.1]
  def change
    add_column :breweries, :avg_rating, :float
  end
end
