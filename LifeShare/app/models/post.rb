class Post < ApplicationRecord

    has_one_attached :photo

    has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy #if someone deletes a post all comments get removed

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
