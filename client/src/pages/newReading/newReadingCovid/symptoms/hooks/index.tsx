import React from 'react';

export const useNewSymptoms = () => {
  const [symptoms, setSymptoms] = React.useState({
    none: true,
    headache: false,
    bleeding: false,
    blurredVision: false,
    feverish: false,
    abdominalPain: false,
    unwell: false,
    other: false,
    cough: false,
    shortnessBreath: false,
    soreThroat: false,
    muscleAche: false,
    fatigue: false,
    lossOfSense: false,
    lossOfTaste: false,
    lossOfSmell: false,
    otherSymptoms: '',
  });
  const handleChangeSymptoms = (e: any) => {
    console.log(e.target.name, e.target.checked);
    if (e.target.name === 'none') {
      setSymptoms({
        ...symptoms,
        none: true,
        headache: false,
        bleeding: false,
        blurredVision: false,
        feverish: false,
        abdominalPain: false,
        unwell: false,
        other: false,
        cough: false,
        shortnessBreath: false,
        soreThroat: false,
        muscleAche: false,
        fatigue: false,
        lossOfSense: false,
        lossOfTaste: false,
        lossOfSmell: false,
        otherSymptoms: '',
      });
    } else {
      if (e.target.name === 'otherSymptoms') {
        setSymptoms({
          ...symptoms,
          [e.target.name]: e.target.value,
          none: false,
        });
      } else {
        setSymptoms({
          ...symptoms,
          [e.target.name]: e.target.checked,
          none: false,
        });
      }
    }

    console.log(symptoms);
  };

  const resetValuesSymptoms = (reset: boolean) => {
    if (reset) {
      setSymptoms({
        none: true,
        headache: false,
        bleeding: false,
        blurredVision: false,
        feverish: false,
        abdominalPain: false,
        unwell: false,
        other: false,
        cough: false,
        shortnessBreath: false,
        soreThroat: false,
        muscleAche: false,
        fatigue: false,
        lossOfSense: false,
        lossOfTaste: false,
        lossOfSmell: false,
        otherSymptoms: '',
      });
    }
  };
  return { symptoms, handleChangeSymptoms, resetValuesSymptoms };
};
