import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise.allSettled(promises)
    .then((result) => result)
    .catch((error) => error);
}
