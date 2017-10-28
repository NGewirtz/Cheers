class Add < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :avg_rating, :integer
  end
end
