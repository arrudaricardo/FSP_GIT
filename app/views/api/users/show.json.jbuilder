json.user do
  json.information do
  json.extract! @user, :id, :username
  end

  json.repositories do
  json.array! @user.repositories do |repo|
    json.extract! repo, :id, :name, :description 
    end
  end
end
