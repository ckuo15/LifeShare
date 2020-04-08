json.extract! @post, :caption, :user_id, :id, :created_at
json.comment_ids @post.comment_ids
if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
end 
