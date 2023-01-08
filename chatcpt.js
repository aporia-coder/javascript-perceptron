class Perceptron {
  constructor(numInputs, learningRate) {
    this.numInputs = numInputs;
    this.learningRate = learningRate;
    this.weights = [];
    for (let i = 0; i < numInputs; i++) {
      this.weights.push(Math.random() * 2 - 1);
    }
  }

  predict(inputs) {
    let sum = 0;
    for (let i = 0; i < this.numInputs; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  train(inputs, target) {
    const prediction = this.predict(inputs);
    const error = target - prediction;
    for (let i = 0; i < this.numInputs; i++) {
      this.weights[i] += error * inputs[i] * this.learningRate;
    }
  }

  activate(x) {
    return x > 0 ? 1 : 0;
  }
}
