class User < ApplicationRecord
    has_many :gifs, through: :likes
end