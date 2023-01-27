class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }

  diff() {
    return this.a - this.b;
  }

  product() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

module.exports = Calculator;
