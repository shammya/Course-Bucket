export function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}

export function delay() {
  return timeout(500);
}

export function getURLLastPart(url) {
  const result = url.split('/');
  return result[result.length - 1];
}