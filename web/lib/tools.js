import { format } from 'date-fns';

export const checkEmail = (email) => {
  /* eslint-disable no-useless-escape */
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
};

export const formatDate = (date) => {
  return format(new Date(date), 'MMMM d, yyyy');
};

export const changeTheme = (theme) => {
  const { color, background, transparent } = theme;
  document.documentElement.style.setProperty('--color', color);
  document.documentElement.style.setProperty('--color-background', background);
  document.documentElement.style.setProperty(
    '--color-transparent',
    transparent
  );
};
