# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brewery.destroy_all
brew1 = Brewery.create!(name: 'ipa brewery', location: 'NYC', description: "We brew delicious ipas")
brew2 = Brewery.create!(name: 'ipa brewery2', location: 'LA', description: "We also brew delicious ipas")



Beer.destroy_all
Beer.create!(brewery_id: brew1.id, name: "IPA", beer_type: "IPA", description: "delicious IPA")
Beer.create!(brewery_id: brew1.id, name: "IPA2", beer_type: "IPA", description: "delicious IPA")
Beer.create!(brewery_id: brew2.id, name: "IPA3", beer_type: "IPA", description: "delicious IPA")
Beer.create!(brewery_id: brew2.id, name: "IPA4", beer_type: "IPA", description: "delicious IPA")
