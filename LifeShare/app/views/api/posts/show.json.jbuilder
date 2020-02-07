json.extract! @post, :caption, :user_id, :id

if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
end 
