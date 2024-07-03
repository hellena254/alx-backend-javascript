export default class Currency {
  constructor() {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name() {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
q}
