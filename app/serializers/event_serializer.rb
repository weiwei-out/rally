class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :start, :end, :description, :private, :lat, :lng
end
