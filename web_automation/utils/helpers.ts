export const generateTestEmail = (): string => `qa_testing_exercise${dateGenerator()}${randomString(7)}@yopmail.com`
const dateGenerator = (): string => {
  const currentDate = new Date();
  return currentDate.toLocaleDateString().replace(/\//g,"-")
}

export const generateFinalEmail = (): string => `qa_testing_exercise@yopmail.com`

export const randomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
