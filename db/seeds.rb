# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lorems = ["If a Stella Artois wastedly recognizes the Sam Adams inside the spudgun, then a raspy Coors starts reminiscing about a lost buzz. Now and then, another incinerated Hops Alligator Ale competes with a fashionable Bacardi Silver. Most people believe that a Budweiser Select near the booze befriends a Hoptoberfest over a Harpoon, but they need to remember how overwhelmingly the often optimal bar tab sweeps the floor. The gratifying sake bomb is fried. A mug about the miller, another mating ritual toward the bottle, and a somewhat radioactive Miller are what made America great!",

"The St. Pauli Girl of the Budweiser Select brainwashes the Heineken. Any grizzly beer can figure out the Dixie Beer, but it takes a real Lone Star to buy an expensive drink for the stein defined by some blood clot. The Guiness inside a Brewers Reserve is linguistic. Some Budweiser Select cooks cheese grits for a jersey cow for the Luna Sea ESB, but the steam engine around the shot greedily takes a peek at the overwhelmingly mysterious Home brew.",

"The often childlike Imperial Stout steals women from some Christmas Ale. When you see an ESB for a Pilsner, it means that the blotched line dancer prays. A bud dry near a Hops Alligator Ale drunkenly caricatures another corona light. A sake bomb meditates, and the muddy ESB goes to sleep",

"An Alaskan blood clot avoids contact with a St. Pauli Girl. Most people believe that a rude Left Hand Milk Stout caricatures a lazily so-called bottle, but they need to remember how lazily an eagerly treacherous sake bomb prays.", "The often childlike Imperial Stout steals women from some Christmas Ale.",

"When you see an ESB for a Pilsner, it means that the blotched line dancer prays. A bud dry near a Hops Alligator Ale drunkenly caricatures another corona light. A sake bomb meditates, and the muddy ESB goes to sleep; however, an Alaskan blood clot avoids contact with a St. Pauli Girl. Most people believe that a rude Left Hand Milk Stout caricatures a lazily so-called bottle, but they need to remember how lazily an eagerly treacherous sake bomb prays.",

"For example, the Hoptoberfest indicates that the ice house eats a micro brew inside a dude. Now and then, the Busch related to the Dixie Beer overwhelmingly dances with a micro brew living with the Corona. When the bar tab is vaporized, the crank case defined by another Mango Beer ignores the tornado brew. Now and then, the mating ritual over the Sam Adams knows a pit viper.", "For example, the grizzly beer indicates that a blue moon caricatures a Wolverine Beer over some mating ritual. A frozen bud light graduates from some so-called Red Stripe, but the Honey Brown about a steam engine completely organizes the most difficult micro brew.",

"Most people believe that the fried Home brew often buries a chain saw, but they need to remember how seldom an Ipswich Ale defined by a Rolling Rock takes a coffee break. A Fosters about an ice house plays pinochle with a gentle Home brew. Most people believe that the monkey bite defined by the bar stool goes deep sea fishing with a college-educated Avery IPA, but they need to remember how secretly a Hoptoberfest earns enough for a beer.",

"Most people believe that a keg from a mating ritual slurly requires assistance from some booze toward a Yuengling, but they need to remember how greedily a raspy Stella Artois hibernates. A Full Sail IPA unwisely negotiates a prenuptial agreement with a cantankerous lover. A dry Miller, the crazy Hoptoberfest, and a blotched Harpoon are what made America great!",

"Sometimes a lager toward a satellite brewery beams with joy, but a colt 45 always satiates the false bull ice! A whacked pin ball machine prays, or some Long Trail Ale operates a small bar with the drunk Lone Star.",

"A tattered ice house goes deep sea fishing with a green air hocky table. Sometimes a Rolling Rock feels nagging remorse, but the bud dry beyond a Guiness always hesitantly competes with another dude!",

"The Bacardi Silver of a Hoptoberfest rejoices, and the dumbly gentle satellite brewery gets stinking drunk; however, some PBR over the power drill drink slurly operates a small bar with a Bridgeport ESB. Furthermore, a precise booze flies into a rage, and the Coors negotiates a prenuptial agreement with an ice house for the sake bomb.",

"A customer of the Imperial Stout plays pinochle with a keg about a Sam Adams. A slow Fraoch Heather Ale caricatures a blue moon. Indeed, the pit viper derives perverse satisfaction from the wasted blood clot. The accidentally psychotic chain saw goes to sleep, and a Budweiser Select behind an Octoberfest flies into a rage.",

"However, a loyal Yuengling buys an expensive drink for a dry change. A gentle Full Sail IPA requires assistance from a pin ball machine for some Hoptoberfest, because the treacherous Keystone light takes a peek at the Ellis Island IPA from the corona light.",

"When a Pilsner is mysterious, a Honey Brown living with a Wolverine Beer takes a peek at a power drill drink beyond a Hoptoberfest. When a Honey Brown goes to sleep, a lazily moronic Sam Adams trembles. If the Corona Extra competes with a Full Sail IPA over a Hazed and Infused, then a Labatts feels nagging remorse. When you see a Heineken, it means that the Left Hand Milk Stout near a Miller reads a magazine.",

"A salty broken bottle plays pinochle with a Dos Equis beyond the grizzly beer. A mysterious Rolling Rock secretly bestows great honor upon an Ellis Island IPA. Indeed, a pompous micro brew falls in love with the change defined by some broken bottle. The booze knows a pool table. A Yuengling sweeps the floor, and the Lone Star prays; however, the Dos Equis plans an escape from the pathetic Heineken another Fosters living with a Fraoch Heather Ale."
]
def beer_defaults
  "app/assets/images/beers/beer#{(1..25).to_a.sample}.jpeg"
end

User.destroy_all
users = []
10.times do |x|
  image = "app/assets/images/users/user#{x}.jpeg"
  user = User.create(username: Faker::Name.unique.name, password: 'starwars', image: File.open(image))
  users << user
end
10.times do
  user = User.create(username: Faker::Name.unique.name, password: 'starwars')
  users << user
end
users << User.create(username: "Guest", password: 'starwars', image: File.open("app/assets/images/users/guest.jpeg"))

Brewery.destroy_all
breweries = []
10.times do
  brewery = Brewery.create!(name: "#{Faker::Coffee.blend_name} Brewery", location: Faker::Address.city, description: lorems.sample)
  breweries << brewery
end

Beer.destroy_all
beers = []
100.times do
  beer = Beer.new(brewery_id: breweries.sample.id, name: Faker::Beer.name, beer_type: Faker::Beer.style, description: lorems.sample, image: File.open(beer_defaults))
  if beer.save
    beers << beer
  end
end


Checkin.destroy_all
checkins = []
400.times do
  checkin = Checkin.new(beer_id: beers.sample.id, user_id: users.sample.id, body: Faker::Coffee.notes, rating: (0..5).to_a.sample)
  if checkin.save
    checkins << checkin
  end
end

Comment.destroy_all
