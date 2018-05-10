@dogs.each do |dog|
  json.set! dog.id do
    json.extract! dog, :id, :user_id, :photo_url, :breed, :name
  end
end
