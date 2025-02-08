export const getCorrectCurrentMonth = () => {
  const jsMonth = new Date().getMonth();
  return jsMonth + 1 < 10 ? '0' + String(jsMonth + 1) : String(jsMonth + 1);
};