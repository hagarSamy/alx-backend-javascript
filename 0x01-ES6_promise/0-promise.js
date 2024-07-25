export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('func');
    reject(new Error(' '));
  });
}
