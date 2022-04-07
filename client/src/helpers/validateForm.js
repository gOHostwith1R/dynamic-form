export const validateForm = data => {
  let filteredObj = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== '' && value !== undefined && value.length !== 0) {
      if (Array.isArray(value)) {
        value.forEach(elem => {
          if (elem.name !== '') {
            return (filteredObj[key] = value);
          }
        });
      } else {
        filteredObj[key] = value;
      }
    }
  }
  return filteredObj;
};
