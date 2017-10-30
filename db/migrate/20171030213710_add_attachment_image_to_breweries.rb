class AddAttachmentImageToBreweries < ActiveRecord::Migration[5.1]
  def self.up
    change_table :breweries do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :breweries, :image
  end
end
