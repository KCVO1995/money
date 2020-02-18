let id: number = parseInt(localStorage.getItem('_idMax') || '4') || 4;
const createId = () => {
  id++;
  localStorage.setItem('_idMax', JSON.stringify(id));
  return id;
};

export default createId;