import React from 'react';

export const useNewVitals = () => {
  const [vitals, setVitals] = React.useState({
    dateTimeTaken: null,
    bpSystolic: '',
    bpDiastolic: '',
    heartRateBPM: '',
    bpSystolicError: false,
    bpDiastolicError: false,
    heartRateBPMError: false,
    respiratoryRate: '',
    oxygenSaturation: '',
    temperature: '',
    dateRecheckVitalsNeeded: null,
    isFlaggedForFollowup: false,
  });
  const validate = (name: string, value: number) => {
    if (name === 'bpSystolic') {
      if (value < 50 || value > 300) {
        return true;
      }
    }
    if (name === 'bpDiastolic') {
      if (value < 30 || value > 200) {
        return true;
      }
    }
    if (name === 'heartRateBPM') {
      if (value < 30 || value > 250) {
        return true;
      }
    }
    return false;
  };
  const handleChangeVitals = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    const validation = validate(name, value);
    console.log('validation', validation);
    // sys 50-300
    // 30-200 di
    // 30-250 hear
    if (name == 'bpSystolic') {
      setVitals({
        ...vitals,
        [e.target.name]: e.target.value,
        bpSystolicError: validation,
      });
    }
    if (name === 'bpDiastolic') {
      setVitals({
        ...vitals,
        [e.target.name]: e.target.value,
        bpDiastolicError: validation,
      });
    }
    if (name === 'heartRateBPM') {
      setVitals({
        ...vitals,
        [e.target.name]: e.target.value,
        heartRateBPMError: validation,
      });
    }
    if (name === 'respiratoryRate') {
      //add validation here
      setVitals({
        ...vitals,
        [e.target.name]: e.target.value,
      });
    }
    if (name === 'oxygenSaturation') {
      //add validation here

      setVitals({
        ...vitals,
        [e.target.name]: e.target.value,
      });
    }
    if (name === 'temperature') {
      //add validation here

      setVitals({
        ...vitals,
        [e.target.name]: e.target.value,
      });
    }

    console.log('vitals', vitals);
  };
  return { vitals, handleChangeVitals };
};