json.partial! "api/users/user", user: @user

if @user.photo.attached?
    json.photoUrl url_for(@user.photo)
end 

# have top level user key and post key(which will have the actual post with the user)
#user info and all the posts user has