@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :body, :user_id, :post_id, :created_at, :id
    end
end 