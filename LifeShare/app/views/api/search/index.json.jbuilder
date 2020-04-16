json.array! @users do |user|
  json.extract! user, :username, :fullname, :id
  if user.photo.attached?
       json.photoUrl url_for(user.photo)
  else 
    json.photoUrl image_url("defaultPic.png")
  end
end