import uploadPhoto from '../utils.js';
import createUser from '../utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
    .then(([photo, user]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lasName}`);
    }, () => {
      console.log('Signup system offline');
    });
}
