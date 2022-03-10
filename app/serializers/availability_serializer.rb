class AvailabilitySerializer < ActiveModel::Serializer
  attributes :id, :username, :start, :end, :show
end
