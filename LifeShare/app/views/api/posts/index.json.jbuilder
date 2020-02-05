@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :caption, :user_id
        if post.photo.attached?
            json.photoUrl url_for(post.photo) #if no photo in the post, jbuilder will break. this is why WE NEED TO CHECK!!!!!
        end 
    end
end 





# .set! makes that 1:{}. {1: {post1:{caption, user_id}}, {post2}}