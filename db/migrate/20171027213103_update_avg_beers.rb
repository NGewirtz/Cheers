class UpdateAvgBeers < ActiveRecord::Migration[5.1]
  def change
    change_column :beers, :avg_rating, :float
  end
end
