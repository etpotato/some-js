/*
const limits = { 
 '5000': 4, 
 '1000': 5, 
 '500': 2, 
 '100': 5, 
 '50': 100, 
 '30': 23 
}
 */

class Atm {
  #limits
  #values

  constructor(limits) {
    this.#limits = limits
    this.#values = Object.keys(limits).map(Number).sort((a, b) => b - a)
  }

  get(num) {
    const state = {...this.#limits}
    const log = []
    let reminder = num

    for (const value of this.#values) {
      if (value > reminder || !state[value]) {
        continue
      }

      const amount = Math.floor(reminder / value)
      const possibleAmount = Math.min(amount, state[value])

      reminder -= possibleAmount * value
      log.push(`${value}x${possibleAmount}`)
      state[value] -= possibleAmount
    }

    if (reminder) {
      throw new Error(`Asked amount: ${num} can\'t be given. Reminder: ${reminder}`)
    }

    this.#limits = state
    return log.join(', ')
  }
}

module.exports = { Atm }