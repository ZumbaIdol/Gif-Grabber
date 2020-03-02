require 'HttParty'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Gif.delete_all

response = HttParty.get('https://giphy.com/embed/xTiN0CNHgoRf1Ha7CM?api_key=7x3PQolnMLSyWjEZZbWtov3SGXRutNak&q=excited&limit=25&offset=0&rating=G&lang=en', format: :plain)
JSON.parse response, symbolize_names: true

gif_collection = []

gif_name.each do |name|
  gif_collection << Gif.create(name: name)
end

users_name = [
  'Prince',
  'Dick',
  'Garry',
  'Jason',
  'Matt',
  'Noah',
  'Adam',
  'Arthur'
]

user_collection = []

users_name.each do |name|
  user_collection << User.create(name: name)
end

# Before you can display the gifs, you need to instantiate gif objects with your js class that have that embed url in them, and save them in an array in your PageManager object