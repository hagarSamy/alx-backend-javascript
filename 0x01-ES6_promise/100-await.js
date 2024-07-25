import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error); // Log the error for debugging
    return {
      photo: null,
      user: null,
    };
  }
}
