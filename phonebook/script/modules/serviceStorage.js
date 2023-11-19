export const getStorage = key => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const setStorage = (key, obj) => {
  const data = getStorage(key);
  data.push(obj);
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (phone) => {
  let data = getStorage('contacts');
  data = data.filter((item) => item.phone !== phone);

  localStorage.removeItem('contacts');
  localStorage.setItem('contacts', JSON.stringify(data));
};
