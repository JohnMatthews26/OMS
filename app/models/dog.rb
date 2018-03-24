class Dog < ApplicationRecord
  validates :user_id, presence: true
  validates :photo_url, presence: true
  validates :breed, presence: true
  validates :name, presence: true
  belongs_to :user
end
