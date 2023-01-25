import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];

  const user = signUpUser(firstName, lastName)
    .then((data) => result.push({
      status: 'fulfilled',
      value: data.user,
    }))
    .catch((err) => result.push({
      status: 'rejected',
      value: err.toString(),
    }));

  const upload = uploadPhoto(fileName)
    .then((data) => result.push({
      status: 'fulfilled',
      value: data.upload,
    }))
    .catch((err) => result.push({
      status: 'rejected',
      value: err.toString(),
    }));

  return Promise.all([user, upload]);
}
