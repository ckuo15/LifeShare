json.extract! @comment, :body, :user_id, :post_id, :id
json.user do 
    json.extract! @comment.user, :username, :id
    if @comment.user.photo.attached?
        json.photoUrl url_for(@comment.user.photo)
    end
end
