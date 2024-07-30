class StringBuilder {
  #value; //gizli bir değer.

  constructor(initialValue) {
    this.#value = initialValue; //value 'ya değer atar
  }

  getValue() {
    return this.#value; //value değerini dönderir
  }

  padEnd(str) {
    this.#value += str; //str değerini value'nin sonuna ekler (str concactinate)
  }

  padStart(str) {
    this.#value = str + this.#value; // str değerini value'nin başına ekler.
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
