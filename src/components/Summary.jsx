import { FormHeader, Button } from './Utility';

function Summary({ step, personalInfo, educations }) {
  return (
    <div style={{ display: step == 4 ? 'block' : 'none' }}>
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
              {personalInfo.fullName !== '' ? personalInfo.fullName : 'NIL'}
            </div>
            <div className="number">
              <span className="label">Phone Number:</span>
              {personalInfo.phoneNumber !== ''
                ? personalInfo.phoneNumber
                : 'NIL'}
            </div>
            <div className="email">
              <span className="label"> Email: </span>
              {personalInfo.email !== '' ? personalInfo.email : 'NIL'}
            </div>
          </div>
          <Button name="Edit" />
        </div>
        {/* education section */}
        <div className="education_section">
          <h4 className="section_header">Education</h4>
          <ol>
            {educations.map((education) => {
              return (
                <li className="education" key={education.id}>
                  <div className="date">
                    <span className="label">Date Of Study/Exit: </span>
                    {education.startDate}-{education.endDate}
                  </div>
                  <div className="school_name">
                    <span className="label">Name Of Institution: </span>
                    {education.schoolName}
                  </div>
                  <div className="degree">
                    <span className="label">Degree: </span>
                    {education.degree}
                  </div>
                  <div className="school_location">
                    <span className="label">Location: </span>
                    {education.location}
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
            <li className="experience">
              <div className="date">
                <span className="label">Date Of Entry/Exit: </span> 2017 -
                present
              </div>
              <div className="company_name">
                <span className="label">Company Name: </span> Netwalkers.ng
              </div>
              <div className="job_Position">
                <span className="label">Position Title: </span>
                Frontend Dev
              </div>
              <div className="job_location">
                <span className="label">Location: </span>
                Benin City, Edo State
              </div>
              <div className="job_desc">
                <span className="label">Job Responsibilities: </span>
                Designed and prototyped user interface patterns for various
                clients in various industries, ranging from self-service apps
                within the telecommunications-sector to mobile games for IOS and
                Android
              </div>
            </li>
            <li className="experience">
              <div className="date">
                <span className="label">Date Of Entry/Exit: </span> 2017 -
                present
              </div>
              <div className="company_name">
                <span className="label">Company Name: </span> Netwalkers.ng
              </div>
              <div className="job_Position">
                <span className="label">Position Title: </span>
                Frontend Dev
              </div>
              <div className="job_location">
                <span className="label">Location: </span>
                Benin City, Edo State
              </div>
              <div className="job_desc">
                <span className="label">Job Responsibilities: </span>
                Designed and prototyped user interface patterns for various
                clients in various industries, ranging from self-service apps
                within the telecommunications-sector to mobile games for IOS and
                Android
              </div>
            </li>
          </ol>

          <Button name="Edit" />
        </div>
      </div>
    </div>
  );
}

export { Summary };
