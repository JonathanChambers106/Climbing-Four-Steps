import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
//Installing Helmet
const StepCombinations = () => {
  const [combinations, setCombinations] = useState([]);
// This function uses recursion to illustrate the 5 patterns of reaching fourth step similar to fibanocci sequence
  // printStepCombinations generats the empty arrays for 1 and 2 patterns
  const printStepCombinations = (steps, currentCombination = []) => {
    if (steps === 0) {
      setCombinations(prevCombinations => [...prevCombinations, currentCombination]);
      return;
    }
// Intializes taking one step in order to reach the fourth step for pattern
    if (steps >= 1) {
      currentCombination.push(1);
      printStepCombinations(steps - 1, currentCombination);
      currentCombination.pop();
    }
//Initializes taking 2 steps to reach forth step
    if (steps >= 2) {
      currentCombination.push(2);
      printStepCombinations(steps - 2, currentCombination);
      currentCombination.pop();
    }
  };
// Using useEffect hook, I am able render the patterns for the steps
  useEffect(() => {
    // Reaching fourth step
    printStepCombinations(4);
  }, []);

  return (
    // Using a React Helmet, I am able to render both server-side and client side
    <div>
      <Helmet>
        <title>Step Combinations Example</title>
      </Helmet>
      <h1>Step Combinations</h1>
      <ul>
        {combinations.map((combination, index) => (
          <li key={index}>{combination.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default StepCombinations;

