/* eslint-disable no-unused-vars */
import { Button } from './Utility.jsx';
import { EducationalInfo } from './Educational.jsx';
import { PersonalInfoInputs } from './Personal_details.jsx';
import { ExperienceInfo } from './Experience.jsx';
import { Summary } from './Summary.jsx';
import { useState } from 'react';

function BarStep({ step, title, active }) {
  return (
    <div className="progress_bar">
      <span className={active ? 'bar active' : 'bar'}>{step}</span>
      <div className="progress_bar_text">
        <div className="step">step {step}</div>
        <div className="progress_bar_title">{title}</div>
      </div>
    </div>
  );
}

function ProgressBar({ formCurrentStep }) {
  /* 
   here is the side Navigation that shows the current step of the form
  it takes in a props that contains the current step of the form
  and use a ternary operator  to check if the form step is equal to any of the bar step
  it then gives a  boolean value to the active props
   */
  return (
    <div className="multistep_progressbar">
      <BarStep
        step={1}
        title="personal info"
        active={formCurrentStep == 1 ? true : false}
      />
      <BarStep
        step={2}
        title="education"
        active={formCurrentStep == 2 ? true : false}
      />
      <BarStep
        step={3}
        title="Experience"
        active={formCurrentStep == 3 ? true : false}
      />
      <BarStep
        step={4}
        title="summary"
        active={formCurrentStep == 4 ? true : false}
      />
    </div>
  );
}

function FormButtons({ incrementStep, decrementStep, step }) {
  function getNextFormSection() {
    incrementStep();
  }
  function getPreviousFormSection() {
    decrementStep();
  }

  return (
    <div className="btn_container">
      <div className="container">
        {/* when step is greater than one show previous button otherwise
         hide it */}
        {step > 1 ? (
          <Button name="previous" handleClick={getPreviousFormSection} />
        ) : null}
        <Button
          name={step == 4 ? 'Comfirm' : 'Next'}
          handleClick={getNextFormSection}
        />
      </div>
    </div>
  );
}

//unique key value for list
let keyValue = 1;

function Form({ formStep, incrementStep, decrementStep }) {
  /* personal info */
  const [personalInfoInputs, setPersonalInfoInputs] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  function handlePersonalInfoInputChange(e, title) {
    setPersonalInfoInputs({ ...personalInfoInputs, [title]: e.target.value });
  }

  /* education */
  //create an object and get the user inputs for  education
  let [educationInputs, setEducationInputs] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  //store an array to hold the objects containing the user educational info
  const [educations, setEducations] = useState([
    {
      id: 0,
      schoolName: 'University Of Benin',
      degree: 'Education',
      startDate: '1/02/2023',
      endDate: '1/02/2024',
      location: 'benin city,edo state,Nigeria.',
    },
  ]);

  /* func for education section */
  function handleEducationInputChange(e, title) {
    setEducationInputs({
      ...educationInputs,
      [title]: e.target.value,
    });
  }

  //when the user click save add update the education array by adding the new object
  function addEducationInputsToEducationArray() {
    setEducations([...educations, { id: keyValue++, ...educationInputs }]);

    setEducationInputs({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  }

  return (
    <form>
      <div className="form_container">
        <PersonalInfoInputs
          step={formStep}
          personalInfo={personalInfoInputs}
          handlePersonalInfoInputChange={handlePersonalInfoInputChange}
        />
        <EducationalInfo
          step={formStep}
          educationInputs={educationInputs}
          educations={educations}
          handleEducationInputChange={handleEducationInputChange}
          addEducationInputsToEducationArray={
            addEducationInputsToEducationArray
          }
        />
        <ExperienceInfo step={formStep} />
        <Summary
          step={formStep}
          personalInfo={personalInfoInputs}
          educations={educations}
        />
      </div>
      <FormButtons
        incrementStep={incrementStep}
        decrementStep={decrementStep}
        step={formStep}
      />
    </form>
  );
}

export { ProgressBar, Form };
