json.owner do 
  json.extract! @user, :id, :username
end
json.repository do 
  json.extract! @repo, :id, :name, :description
end
json.ls @ls.split("\n")




