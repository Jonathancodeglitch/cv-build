import { useState } from 'react';
import { FormHeader, Button, Modal } from './utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

/* continue from here genius */
function ExperienceInfo() {
  const icon = <FontAwesomeIcon icon={faTrash} />;
  return (
    <>
      <FormHeader
        title="Experience"
        desc="Please provide your work experience."
      />
      <div className="educational-info">
        <div className="info_container">
          <div className="info">
            <span className="name">University of Benin</span>
            <div className="date">
              <span className="state-date">1st Jan 2019 -</span>
              <span className="end-date">1st Jan 2022</span>
            </div>
          </div>
          <span className="trash_icon">{icon}</span>
        </div>
        <div className="info_container">
          <div className="info">
            <span className="name">University of Benin</span>
            <div className="date">
              <span className="state-date">1st Jan 2019 -</span>
              <span className="end-date">1st Jan 2022</span>
            </div>
          </div>
          <span className="trash_icon">{icon}</span>
        </div>
        <div className="info_container">
          <div className="info">
            <span className="name">University of Benin</span>
            <div className="date">
              <span className="state-date">1st Jan 2019 -</span>
              <span className="end-date">1st Jan 2022</span>
            </div>
          </div>
          <span className="trash_icon">{icon}</span>
        </div>

        <Button type="button" name="+ Experience" />
      </div>

      {/* modal */}
    </>
  );
}

export { ExperienceInfo };
