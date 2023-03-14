function compose(...funcs) {
  return function(arg) {
    let result = arg

    for (let i = funcs.length - 1; i >= 0; i--) {
      result = funcs[i].apply(this, [result])
    }

    return result
  }
}

function pipe(...funcs) {
  return function(arg) {
    let result = arg

    for (let i = 0; i < funcs.length; i++) {
      result = funcs[i].apply(this, [result])
    }

    return result
  }
}

module.exports = { compose, pipe }
