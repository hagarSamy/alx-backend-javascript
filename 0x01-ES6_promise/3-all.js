import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then((values) => (
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`)))
    .catch(() => new Error('Signup system offline'));
}
