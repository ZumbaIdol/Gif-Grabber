class GifSerializer < ApplicationModel::Serializer
    attributes :category, :name, :user_id
end