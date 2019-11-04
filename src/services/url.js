export const host = 'http://127.0.0.1';
export const port = '5000';

const urlCreator = route => {
  let url = `${host}:${port}${route}`;
  return url;
};

export const login = urlCreator('/add');
