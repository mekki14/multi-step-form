import {useState } from "react";
export default function useMultiStepForm(steps,currentStepIndex) {
    
  
    return {
      
      steps,
      step: steps[currentStepIndex],
      
    };
  }