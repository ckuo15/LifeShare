json.array! @users do |user|
  json.extract! user, :username
  if user.photo.attached?
       json.photoUrl url_for(user.photo)
  else 
    json.photoUrl image_url("defaultPic.png")
  end
end