class User < ApplicationRecord
    has_many :likes
    has_many :gifs, through: :likes
end