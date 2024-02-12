const generateRandomId = (): string => {
  const numbers = "0123456789";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 4; i++)
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  for (let i = 0; i < 2; i++)
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  return result;
};

export { generateRandomId };
