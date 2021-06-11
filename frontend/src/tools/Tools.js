export function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}

export function delay() {
  return timeout(500);
}