export const valueStatus = (values = {}) => {
    const emptyValues = [];
    const completeValues = [];
  for (let key in values) {
    (!values[key].trim()) ? emptyValues.push(key) : completeValues.push(key);
  }
  return [emptyValues, completeValues];
};
