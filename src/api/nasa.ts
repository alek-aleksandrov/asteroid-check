async function queryNEOs(): Promise<Response> {
  return fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=b2BLHhQvWMAjuoQdMHmNfyoSbdthWaYoRKUM1Suo');
}

export { queryNEOs };
