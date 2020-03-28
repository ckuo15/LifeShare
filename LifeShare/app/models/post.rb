class Post < ApplicationRecord

    has_one_attached :photo

    has_many :comments,
    foreign_key: :comment_id,
    class_name: :Comment

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
