@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :caption, :user_id
    end
end 



# .set! makes that 1:{}. {1: {post1:{caption, user_id}}, {post2}}