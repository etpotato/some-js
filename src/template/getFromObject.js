const getFromObject = ({ obj, path }) => {
  if (!path || !obj) return undefined;

  let result = obj;
  const properties = path.split('.');

  properties.forEach(prop => {
    if (result) {
      result = result[prop];
    } else {
      result = undefined;
    }
  });

  return result;
};

module.exports = getFromObject;
