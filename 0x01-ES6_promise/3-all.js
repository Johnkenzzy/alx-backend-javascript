import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([p, u]) => {
      console.log(`${p.body} ${u.firstName} ${u.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
