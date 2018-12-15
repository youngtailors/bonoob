// Ensure that we have 2 places for each of the date segments.
function padDate(date) {
  const segment = date.toString();
  return segment[1] ? segment : `0${segment}`;
}

function yyyymmddhhmmss() {
  const d = new Date();
  return [d.getFullYear().toString(),
    padDate(d.getMonth() + 1),
    padDate(d.getDate()),
    padDate(d.getHours()),
    padDate(d.getMinutes()),
    padDate(d.getSeconds())].join('');
}

module.exports = {
  yyyymmddhhmmss,
};
