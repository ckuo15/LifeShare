json.posts do 
    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :caption, :user_id, :created_at, :id
            json.comment_ids post.comment_ids
            if post.photo.attached?
                json.photoUrl url_for(post.photo) #if no photo in the post, jbuilder will break. this is why WE NEED TO CHECK!!!!!
            end 
            json.user do 
                json.extract! post.user, :username, :id
                if post.user.photo.attached?
                    json.photoUrl url_for(post.user.photo)
                else 
                    json.photoUrl image_url("defaultPic.png")
                end
            end
        end
    end
end

json.comments do
    
    @posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do #key is the id, which points to the actual info
                json.extract! comment, :body, :user_id, :post_id, :id
                json.user do 
                    json.extract! comment.user, :username, :id
                    if comment.user.photo.attached?
                        json.photoUrl url_for(comment.user.photo)
                    else 
                        json.photoUrl image_url("defaultPic.png")
                    end
                end
            end
        end
    end
end




# .set! makes that 1:{}. {1: {post1:{caption, user_id}}, {post2}}