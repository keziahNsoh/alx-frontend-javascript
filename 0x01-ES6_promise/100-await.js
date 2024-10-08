import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user.
 * @returns {Promise<Object>} An object with photo and user responses.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
