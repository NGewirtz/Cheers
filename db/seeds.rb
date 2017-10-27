# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
user1 = User.create(username: 'user', password: '123456')
user2 = User.create(username: 'user2', password: 'starwars')

Brewery.destroy_all
brew1 = Brewery.create!(name: 'ipa brewery', location: 'NYC', description: "We brew delicious ipas")
brew2 = Brewery.create!(name: 'ipa brewery2', location: 'LA', description: "We also brew delicious ipas")

Beer.destroy_all
beer1 = Beer.create!(brewery_id: brew1.id, name: "IPA", beer_type: "IPA", description: "When a pit viper meditates, a Christmas Ale about a Sierra Nevada Pale Ale returns home. Indeed, the hops negotiates a prenuptial agreement with a financial Pilsner. If the lager teaches a lager, then a Budweiser meditate")
beer2 = Beer.create!(brewery_id: brew1.id, name: "IPA2", beer_type: "IPA", description: "The Busch over a customer finds lice on some crank case. Furthermore, a keg returns home, and a Dixie Beer plans an escape from the blood clot the Stella Artois around an Amarillo Pale Ale. A Dixie Beer toward a ")
beer3 = Beer.create!(brewery_id: brew2.id, name: "IPA3", beer_type: "IPA", description: "The fashionable ESB takes a coffee break, and a wet lager can be kind to the mysterious Corona. A mysterious monkey bite shares a shower with a loyal Harpoon. The Hefeweizen living with some ")
beer4 = Beer.create!(brewery_id: brew2.id, name: "IPA4", beer_type: "IPA", description: "Most people believe that a miserly malt stumbly takes a peek at another flabby Hefeweizen, but they need to remember how stumbly a hops meditates. A miserly Budweiser Select sanitizes a so-called bullfrog brew")


Checkin.destroy_all
checkin1 = Checkin.create!(beer_id: beer1.id, user_id: user1.id, body: 'i love this beer', rating: 5)
checkin2 = Checkin.create!(beer_id: beer1.id, user_id: user2.id, body: 'i hate this beer', rating: 1)
checkin3 = Checkin.create!(beer_id: beer2.id, user_id: user1.id, body: 'i love this beer', rating: 5)
checkin4 = Checkin.create!(beer_id: beer2.id, user_id: user2.id, body: 'im ok with this beer', rating: 2)
checkin5 = Checkin.create!(beer_id: beer3.id, user_id: user1.id, body: 'i love this beer', rating: 5)
checkin6 = Checkin.create!(beer_id: beer4.id, user_id: user1.id, body: 'i dont love this beer', rating: 3)

Comment.destroy_all
Comment.create!(checkin_id: checkin1.id, user_id: user1.id, body: "My first comment!!")
Comment.create!(checkin_id: checkin1.id, user_id: user2.id, body: "My 2 comment!!")
Comment.create!(checkin_id: checkin2.id, user_id: user1.id, body: "My 3 comment!!")
Comment.create!(checkin_id: checkin3.id, user_id: user2.id, body: "My 4 comment!!")
