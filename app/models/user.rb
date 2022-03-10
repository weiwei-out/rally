class User < ApplicationRecord
    has_secure_password
    has_many :availabilities
    #checks if username exists && if already in db
    validates :username, presence: true, uniqueness: true
end