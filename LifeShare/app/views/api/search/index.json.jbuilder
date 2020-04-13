json.array! @users do |user|
  json.extract! user, :username
  if user.photo.attached?
       json.photoUrl url_for(user.photo)
  end
end