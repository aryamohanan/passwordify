function generatePassword(length = 16, options = {}) {
  const lowerCase = options.lowerCase || true;
  const upperCase = options.upperCase || true;
  const numbers = options.numbers || true;

  const characterSet = '';
  if (lowerCase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
  if (upperCase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (numbers) characterSet += '0123456789';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}

module.exports = generatePassword;
