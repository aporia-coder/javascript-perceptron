class Perceptron {
  constructor() {
    this.weights = new Array(2);
    this.learningRate = 0.01

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] = random(-1, 1);
    }
  }

  feedForward(input) {
    let weightedSum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      weightedSum += this.weights[i] * input[i];
    }
    return this.activate(weightedSum)
  }

  activate(n) {
    if (n > 0) {
      return 1
    } else {
      return -1
    }
  }

  train(input, target) {
    let guess = this.feedForward(input)
    let error = target - guess

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * input[i] * this.learningRate
    }
  }
}
