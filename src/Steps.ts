import { ReactElement, useState } from "react";

export function Steps(steps: ReactElement[]) {

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length) return i;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };
  
  return {
    steps,
    step: steps[currentStepIndex],
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex >= steps.length - 1,
    setCurrentStepIndex,
    next,
    back,
  };
}
