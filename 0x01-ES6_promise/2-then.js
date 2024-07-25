export default function handleResponseFromAPI(promise) {
  return promise.then((result) => {
    const response = {
      status: 200,
      body: result,
    };
    console.log('Got a response from the API');
    return response;
  }).catch(() => {
    console.log('');
  });
}
