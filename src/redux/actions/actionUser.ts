export const USER_EMAIL = 'USER_EMAIL';

export const userEmail = (email: string) => ({
  type: USER_EMAIL,
  payload: email,
});
