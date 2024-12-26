export const getLessonsFromApi = async () => {
  const response = await fetch('http://localhost:3002/getLessons');
  const data = await response.json();
  return data;
};
