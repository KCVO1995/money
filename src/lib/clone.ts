// eslint-disable-next-line
const clone = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

export default clone;