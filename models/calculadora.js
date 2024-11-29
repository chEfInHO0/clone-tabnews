function sum(a, b) {
  if (typeof (a) != 'number' || typeof (b) != 'number') {
    return 'Erro'
  }
  if (isNaN(a) || isNaN(b)) {
    return 'Erro'
  }
  return a + b;
}

function diff(a, b) {
  if (typeof (a) != 'number' || typeof (b) != 'number') {
    return 'Erro'
  }
  if (isNaN(a) || isNaN(b)) {
    return 'Erro'
  }
  return a - b;
}

module.exports = {
  sum,
  diff
}