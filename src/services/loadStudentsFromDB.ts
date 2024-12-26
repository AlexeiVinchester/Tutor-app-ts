export const getStudentsFromDB = async () => {
  const response = await fetch('http://localhost:3002/getStudents');
  const data = await response.json();
  return data;
};
