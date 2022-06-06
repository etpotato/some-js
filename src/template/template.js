const getFromObject = require('./getFromObject');

const template = ({ text, data }) => {
  const regex = /{\w+(.\w+)+?}/g;

  return text.replace(regex, (match) => {
    const path = match.slice(1, -1);
    const insertion = getFromObject({ obj: data, path });
    return insertion ?? '';
  });
};

module.exports = template;
