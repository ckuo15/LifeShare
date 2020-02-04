json.partial! "api/users/user", user: @user

if @user.photo.attached?
    json.photoUrl url_for(@user.photo)
end 