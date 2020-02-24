class User < ApplicationRecord
    has_many :gifs
    validates :username, uniqueness: :true
end