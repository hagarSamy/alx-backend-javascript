import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      results.forEach((item) => {
        const itemMod = item;
        if (item.status === 'rejected') {
          itemMod.value = `Error: ${item.reason.message}`;
          delete itemMod.reason;
        }
        return (itemMod);
       });
       return results
    });
}
