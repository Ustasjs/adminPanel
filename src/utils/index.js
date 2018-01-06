export function makeId() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomString() {
    let result = '';
    for (let i = 0; i <= 5; i++) {
      result += String.fromCharCode(getRandomInt(65, 90));
    }

    return result;
  }

  return Math.round(Math.random() * 1000) + getRandomString();
}
