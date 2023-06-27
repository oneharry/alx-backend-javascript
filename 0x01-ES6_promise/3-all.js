import { uploadPhoto, createUser } from '../utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log('Signup system offline');
      throw err;
    });
}
