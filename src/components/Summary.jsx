import { FormHeader, Button } from "./utilities/Utility";

function Summary({
  step,
  PersonalDetailsInputs,
  listOfEducation,
  listOfExperience,
}) {
  return (
    <div style={{ display: step == 4 ? "block" : "none" }}>
      <FormHeader
        title="Finishing Up"
        desc="Double-check everything looks OK before Confirming"
      />
      <div className="summary">
        {/* personal details  section */}
        <div className="personal_details_section">
          <h4 className="section_header">Personal Details</h4>
          <div className="personal_details">
            <div className="name">
              <span className="label">Name:</span>
              {PersonalDetailsInputs.fullName}
            </div>
            <div className="number">
              <span className="label">Phone Number:</span>
              {PersonalDetailsInputs.phoneNumber}
            </div>
            <div className="email">
              <span className="label"> Email: </span>
              {PersonalDetailsInputs.email}
            </div>
          </div>
          <Button name="Edit" />
        </div>
        {/* education section */}
        <div className="education_section">
          <h4 className="section_header">Education</h4>

          <ol>
            {listOfEducation.map((education) => {
              return (
                <li key={education.id} className="education">
                  <div className="date">
                    <span className="label">Date Of Study/Exit: </span>
                    {`${education.startDate} - ${education.endDate}`}
                  </div>
                  <div className="school_name">
                    <span className="label">Name Of Institution: </span>
                    {education.instituteName}
                  </div>
                  <div className="field_of_study">
                    <span className="label">Field Of Study: </span>
                    {education.fieldOfStudy}
                  </div>
                  <div className="degree">
                    <span className="label">Qualification: </span>
                    {education.qualifications}
                  </div>
                  <div className="school_location">
                    <span className="label">Location: </span>
                    {education.country}
                  </div>
                </li>
              );
            })}
          </ol>

          <Button name="Edit" />
        </div>
        {/* experience section */}
        <div className="experience_section">
          <h4 className="section_header">Experience</h4>
          <ol>
            {listOfExperience.map((experience) => {
              return (
                <li key={experience.id} className="experience">
                  <div className="date">
                    <span className="label">Date Of Entry/Exit: </span>
                    {`${experience.startDate} - ${experience.endDate}`}
                  </div>
                  <div className="company_name">
                    <span className="label">Company Name: </span>{" "}
                    {experience.employer}
                  </div>
                  <div className="job_Position">
                    <span className="label">Position Title: </span>
                    {experience.jobTitle}
                  </div>
                  <div className="job_location">
                    <span className="label">Location: </span>
                    {experience.country}
                  </div>
                  <div className="job_desc">
                    <span className="label">Job Responsibilities: </span>
                    {experience.jobDescription}
                  </div>
                </li>
              );
            })}
          </ol>

          <Button name="Edit" />
        </div>
      </div>
    </div>
  );
}

export { Summary };
