export const createDog = (dog) => {
  console.log(dog);
  return $.ajax({
    method: 'POST',
    url: 'api/dogs/',
    data: {dog}
  });
};

export const deleteDog = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/dogs/${id}`,

  });
};

export const fetchSingleDog = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/dogs/${id}`
  });
};

export const fetchAllDogs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/dogs'
  });
};

export const fetchAllDogsForUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/dogs',
    data: {userId}
  });
};
