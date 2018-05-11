export const RECEIVE_ALL_DOGS   = 'RECEIVE_ALL_DOG';
export const RECEIVE_SINGLE_DOG = 'RECEIVE_SINGLE_DOG';
export const CREATE_DOG         = 'CREATE_DOG';
export const RECEIVE_DOG_ERRORS = 'RECEIVE_DOG_ERRORS';

import * as APIUtil from '../util/dog_util';

export const requestAllDogsForUser = (user_id) => (dispatch) => {
  return APIUtil.fetchAllDogs(user_id)
    .then(dogs => dispatch(receiveAllDogs(dogs)));
};

export const requestAllDogs = () => (dispatch) => {
  return APIUtil.fetchDogFeed()
    .then(dogs => dispatch(receiveAllDogs(dogs)));
};


export const requestSingleDog = (id) => (dispatch) => {
  return APIUtil.fetchSingleDog(id).then(dog => {
    dispatch(receiveSingleDog(dog));
    return dog;
  });
};

export const createDog = dog => dispatch => (
  APIUtil.createDog(dog).then(dog => {
    dispatch(receiveSingleDog(dog));
    return dog;
  }).fail(err => dispatch(receiveDogErrors(err.responseJSON)))
);

export const receiveAllDogs = dog => ({
  type: RECEIVE_ALL_DOGS,
  dog
});

export const receiveSingleDog = payload => ({
  type: RECEIVE_SINGLE_DOG,
  payload
});

export const receiveDogErrors = errors => ({
  type: RECEIVE_DOG_ERRORS,
  errors
});
