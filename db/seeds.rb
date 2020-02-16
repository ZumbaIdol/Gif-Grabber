# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

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
