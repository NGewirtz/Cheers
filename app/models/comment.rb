class Comment < ApplicationRecord
  validates :body, presence: true
  validates :body, length: { maximum: 140 }
  belongs_to :user
  belongs_to :checkin
end
