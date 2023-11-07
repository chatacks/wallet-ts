const getCurrencies = async () => {
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const responseJson = await request.json();
    return responseJson;
  } catch (error: any) {
    return error;
  }
};

export default getCurrencies;
