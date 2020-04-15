json.extract! @post, :caption, :user_id, :id, :created_at
json.comment_ids @post.comment_ids
if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
end 
json.user do 
    json.extract! @post.user, :username, :id
    if @post.user.photo.attached?
        json.photoUrl url_for(@post.user.photo)
    else 
        json.photoUrl image_url("defaultPic.png")
    end
end
