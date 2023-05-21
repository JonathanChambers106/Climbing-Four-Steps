function printStepCombinations(steps, currentCombination = []) {
    if (steps === 0) {
      console.log(currentCombination.join(', '));
      return;
    }
  
    if (steps >= 1) {
      currentCombination.push(1);
      printStepCombinations(steps - 1, currentCombination);
      currentCombination.pop();
    }
  
    if (steps >= 2) {
      currentCombination.push(2);
      printStepCombinations(steps - 2, currentCombination);
      currentCombination.pop();
    }
  }
  
  // Call the function to print the combinations for 4 steps
  printStepCombinations(4, []);