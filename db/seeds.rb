# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.create(username: 'user', password: '123456')
User.create(username: 'user2', password: 'starwars')

Brewery.destroy_all
brew1 = Brewery.create!(name: 'ipa brewery', location: 'NYC', description: "We brew delicious ipas")
brew2 = Brewery.create!(name: 'ipa brewery2', location: 'LA', description: "We also brew delicious ipas")

Beer.destroy_all
Beer.create!(brewery_id: brew1.id, name: "IPA", beer_type: "IPA", description: "When a pit viper meditates, a Christmas Ale about a Sierra Nevada Pale Ale returns home. Indeed, the hops negotiates a prenuptial agreement with a financial Pilsner. If the lager teaches a lager, then a Budweiser meditate")
Beer.create!(brewery_id: brew1.id, name: "IPA2", beer_type: "IPA", description: "The Busch over a customer finds lice on some crank case. Furthermore, a keg returns home, and a Dixie Beer plans an escape from the blood clot the Stella Artois around an Amarillo Pale Ale. A Dixie Beer toward a ")
Beer.create!(brewery_id: brew2.id, name: "IPA3", beer_type: "IPA", description: "The fashionable ESB takes a coffee break, and a wet lager can be kind to the mysterious Corona. A mysterious monkey bite shares a shower with a loyal Harpoon. The Hefeweizen living with some ")
Beer.create!(brewery_id: brew2.id, name: "IPA4", beer_type: "IPA", description: "Most people believe that a miserly malt stumbly takes a peek at another flabby Hefeweizen, but they need to remember how stumbly a hops meditates. A miserly Budweiser Select sanitizes a so-called bullfrog brew")
