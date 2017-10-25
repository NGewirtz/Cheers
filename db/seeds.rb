# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Beer.destroy_all
Beer.create!(brewery_id: 1, name: "IPA", beer_type: "IPA", description: "delicious IPA")
Beer.create!(brewery_id: 1, name: "IPA2", beer_type: "IPA", description: "delicious IPA")
Beer.create!(brewery_id: 1, name: "IPA3", beer_type: "IPA", description: "delicious IPA")
Beer.create!(brewery_id: 1, name: "IPA4", beer_type: "IPA", description: "delicious IPA")
