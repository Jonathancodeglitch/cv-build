import { useRef, useState } from "react";
import PersonalDetails from "./PersonalDetails.jsx";
import EducationDetails from "./EducationDetails.jsx";
import ExperienceDetails from "./ExperienceDetails.jsx";
import { Summary } from "./Summary.jsx";
import { v4 as uuidv4 } from "uuid";
import FormButtons from "./FormButton.jsx";

export default function MultiStepForm({
  step,
  handleStepDecrement,
  handleStepIncrement,
}) {
  //personal details
  const [PersonalDetailsInputs, setPersonalDetailsInputs] = useState({
    fullName: "jonathan ohwevwo",
    email: "jnathankendrick697@gmail.com",
    phoneNumber: "09076110369",
  });

  function handlePersonalDetailsInputsChange(e) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setPersonalDetailsInputs({
      ...PersonalDetailsInputs,
      [name]: value,
    });
  }

  //education details
  const [listOfEducation, setListOfEducation] = useState([
    {
      id: "000-000-000",
      instituteName: "University Of Benin",
      fieldOfStudy: "Computer Science",
      qualifications: "Bachelor Of Science",
      startDate: "10/2018",
      endDate: "10/2024",
      country: "Uyo",
    },
    {
      id: "000-000-001",
      instituteName: "University Of Benin",
      fieldOfStudy: "Computer Science",
      qualifications: "Bachelor Of Science",
      startDate: "10/2018",
      endDate: "10/2024",
      country: "Uyo",
    },
  ]);

  function handleSetListOfEducation(value) {
    setListOfEducation(value);
  }

  /* experience */
  //Hold state for the list of user experience
  const [listOfExperience, setListOfExperience] = useState([
    {
      id: "000",
      employer: "Brinicon",
      jobTitle: "Fullstack developer",
      startDate: "01/2024",
      endDate: "01/2025",
      location: "London",
      jobDescription: ` Designed and prototyped user interface patterns for various
                clients in various industries, ranging from self-service apps
                within the telecommunications-sector to mobile games for IOS and
                Android`,
    },
  ]);

  function handleSetListOfExperience(value) {
    setListOfExperience(value);
  }

  return (
    <div className="main_form">
      <div className="form_container">
        <PersonalDetails
          step={step}
          handlePersonalDetailsInputsChange={handlePersonalDetailsInputsChange}
          PersonalDetailsInputs={PersonalDetailsInputs}
        />
        <EducationDetails
          step={step}
          listOfEducation={listOfEducation}
          handleSetListOfEducation={handleSetListOfEducation}
        />
        <ExperienceDetails
          step={step}
          handleSetListOfExperience={handleSetListOfExperience}
          listOfExperience={listOfExperience}
        />
        <Summary
          step={step}
          PersonalDetailsInputs={PersonalDetailsInputs}
          listOfEducation={listOfEducation}
          listOfExperience={listOfExperience}
        />
      </div>
      <FormButtons
        step={step}
        handleStepDecrement={handleStepDecrement}
        handleStepIncrement={handleStepIncrement}
      />
    </div>
  );
}
