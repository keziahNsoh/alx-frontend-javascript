import Currency from './3-currency.js';

// Class representing a pricing structure
export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');

    this._amount = amount;
    this._currency = currency;
  }

  // Getters and setters
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw new TypeError('Currency must be an instance of Currency');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

