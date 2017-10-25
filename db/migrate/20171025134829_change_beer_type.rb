class ChangeBeerType < ActiveRecord::Migration[5.1]
  def change
    rename_column :beers, :type, :beer_type
  end
end
