import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useState, useRef, useEffect } from "react";
import { FormHeader, Button } from "./utilities/Utility";
import Modal from "./utilities/modal";
import { Item } from "./utilities/Utility";

export default function ExperienceDetails({
  step,
  listOfExperience,
  handleSetListOfExperience,
}) {
  //for unique key value
  let uuid = self.crypto.randomUUID();

  //Hold the state of all th experience input values
  const [experienceInputs, setExperienceInputs] = useState({
    employer: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    jobDescription: "",
  });

  function handleExperienceInputsChange(e) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setExperienceInputs({ ...experienceInputs, [name]: value });
  }

  //handle adding job description value change
  function handleJobDescriptionInputChange(jobDescriptionValue) {
    setExperienceInputs({
      ...experienceInputs,
      jobDescription: jobDescriptionValue,
    });
  }
  /* Hold State for job descriptions modal */
  const [isJobDescriptionModal, setIsJobDescriptionModal] = useState(false);

  /*  */
  function handleAddingExperienceToList() {
    //Check if an Id exist in the education obj
    if (experienceInputs.id) {
      //If so, its for editing
      handleSetListOfExperience(
        listOfExperience.map((experience) => {
          //Replace the education obj with the edited values if it matches the Id
          if (experience.id === experienceInputs.id) {
            return experienceInputs;
          } else {
            return experience;
          }
        })
      );
    } else {
      //Else its a new entry and should be added to the list of education for display with a unique Id
      handleSetListOfExperience([
        ...listOfExperience,
        {
          ...experienceInputs,
          id: uuid,
        },
      ]);
    }

    handleCloseModal();
  }

  /* handle delete experience from the list of experience */
  function handleDeleteButtonClick(id) {
    handleSetListOfExperience(
      listOfExperience.filter((experience) => {
        return experience.id !== id;
      })
    );
  }

  /*handle Editing already existing experience on the experience List  */
  function handleEditButtonClick(id) {
    //show modal
    handleOpenModal();
    /* get the values of the experience that needs to be edited */
    const [experience] = listOfExperience.filter(
      (experience) => experience.id === id
    );

    //display values in inputs
    setExperienceInputs({ ...experience });
  
    console.log("editing....");
  }

  /* Modal */
  const modalRef = useRef(null);

  function handleOpenModal() {
    modalRef.current.showModal();
  }

  function handleCloseModal() {
    modalRef.current.close();
    //when the modal is close, hide the job description modal
    setIsJobDescriptionModal(false);
    //Clear inputs
    setExperienceInputs({
      employer: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      jobDescription: "",
    });
  }

  //Display the job descrption section
  function handleModalNextButtonClick() {
    setIsJobDescriptionModal(true);
  }

  return (
    <div style={{ display: step == 3 ? "block" : "none" }}>
      <FormHeader
        title="Experience Summary"
        desc="Please provide your work experience."
      />
      {/* experience infomation */}
      <ul>
        {listOfExperience.map((experience) => {
          return (
            <Item
              key={experience.id}
              handleDeleteButtonClick={handleDeleteButtonClick}
              handleEditButtonClick={handleEditButtonClick}
              id={experience.id}
            >
              {" "}
              <p>
                <span className="item__title">{experience.jobTitle},</span>{" "}
                <span className="item__subtitle">{experience.employer}</span>
              </p>
              <p>
                <span className="item__location">{experience.location} | </span>{" "}
                <span className="item__date">
                  {experience.startDate} / {experience.endDate}
                </span>
              </p>
              {/*  */}
              <div className="item__description">
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: experience.jobDescription,
                    }}
                  />
                }
              </div>
            </Item>
          );
        })}
      </ul>

      {/*Modal to display inputs to get data on user education */}
      <Modal
        handleCloseModal={handleCloseModal}
        modalRef={modalRef}
        title={
          isJobDescriptionModal ? "Describe your experience" : "Work History"
        }
        description={
          isJobDescriptionModal
            ? "Tell us your responsibilities, achievements and job details"
            : "Start with your most recent job and work backwards"
        }
      >
        {/* modal content  begins*/}
        {isJobDescriptionModal ? (
          <JobDescriptionInputs
            experienceInputs={experienceInputs}
            handleJobDescriptionInputChange={handleJobDescriptionInputChange}
            handleAddingExperienceToList={handleAddingExperienceToList}
          />
        ) : (
          <ExperienceInputs
            experienceInputs={experienceInputs}
            handleExperienceInputsChange={handleExperienceInputsChange}
            handleModalNextButtonClick={handleModalNextButtonClick}
          />
        )}

        {/* the sumbit button for the modal,
         only show when the modal is in its final section*/}
        {isJobDescriptionModal && (
          <Button
            onClick={handleAddingExperienceToList}
            type="button"
            name="Save"
          />
        )}
      </Modal>

      {/* button to open modal where user can input experinces */}
      <Button type="button" name="+ Experience" onClick={handleOpenModal} />

      {/* modal content  ends*/}
    </div>
  );
}

function ExperienceInputs({
  handleModalNextButtonClick,
  handleExperienceInputsChange,
  experienceInputs,
}) {
  return (
    <form>
      <label>
        Employer
        <input
          name="employer"
          value={experienceInputs.employer}
          onChange={handleExperienceInputsChange}
          type="text"
          placeholder="Enter Company Name"
        />
      </label>
      <label>
        Job Title
        <input
          name="jobTitle"
          value={experienceInputs.jobTitle}
          onChange={handleExperienceInputsChange}
          type="text"
          placeholder="enter Job Title"
        />
      </label>
      <label>
        Start Date
        <input
          name="startDate"
          value={experienceInputs.startDate}
          onChange={handleExperienceInputsChange}
          type="date"
        />
      </label>
      <label>
        End Date
        <input
          name="endDate"
          value={experienceInputs.endDate}
          onChange={handleExperienceInputsChange}
          type="date"
        />
      </label>
      <label>
        City/Town
        <input
          name="location"
          value={experienceInputs.location}
          onChange={handleExperienceInputsChange}
          type="text"
          placeholder="Enter Company Location"
        />
      </label>
      <Button onClick={handleModalNextButtonClick} name="Next" type="button" />
    </form>
  );
}

/*  */
function JobDescriptionInputs({
  handleAddingExperienceToList,
  handleJobDescriptionInputChange,
  experienceInputs,
}) {
  let quillRef = useRef(null);
  const editorRef = useRef(null);
  let editorCursorIndexRef = useRef(0);
  const quilContainerRef = useRef(null);

  //updating text editor
  function handleQuillEditorTextChange(quill) {
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source == "user") {
        const range = quill.getSelection();
        if (range.length == 0) {
          let cursorIndex = range.index;
          /* console.log(cursorIndex);
          quill.setSelection(cursorIndex); */
        }
        const HTML = quill.getSemanticHTML();
        handleJobDescriptionInputChange(HTML);
      }
    });
  }

  //handle getting the editor cursor index
  function handleGettingCursorIndex() {
    if (quillRef.current) {
      //Update Editor cursor...
      const range = quillRef.current.getSelection();
      if (range) {
        if (range.length == 0) {
          let cursorIndex = range.index;
          editorCursorIndexRef.current = cursorIndex;
        }
      }
    }
  }

  function handleUpdatingQuillEditorValue() {
    //update the content of the editor
    if (quillRef.current) {
      handleGettingCursorIndex();
      //update editor content
      quillRef.current.clipboard.dangerouslyPasteHTML(
        experienceInputs.jobDescription
      );

      //update the editor cursor to the last place the user used the cursor before the content was updated
      quillRef.current.setSelection(editorCursorIndexRef.current);
    }
  }

  handleUpdatingQuillEditorValue();

  useEffect(() => {
    const options = {
      bounds: "#editor",
      placeholder:
        "Type in your responsibilities, achievements and job details",
      theme: "snow",
    };

    quillRef.current = new Quill(editorRef.current, options);

    //Update editor values
    handleUpdatingQuillEditorValue();

    //Get the value of the editor when ever the user type
    handleQuillEditorTextChange(quillRef.current);
    //clean up when component unmount....
    return () => {
      if (quilContainerRef.current && editorRef.current) {
        editorRef.current.innerHTML = "";
        const toolbar = quilContainerRef.current.querySelector(".ql-toolbar");
        if (toolbar) {
          toolbar.remove();
        }
      }
    };
  }, []);

  return (
    <div ref={quilContainerRef} className="quil_container">
      <div
        style={{ minHeight: "200px", border: "1px solid red" }}
        ref={editorRef}
        id="editor"
        className="editor"
      ></div>
    </div>
  );
}

{
  /* Job descriptions */
}
/*   {isJobResponsibilitiesEmpty ? (
    <p style={{ textAlign: "center", margin: "20px 0px" }}>
      You have not added any job role
    </p>
  ) : (
    <ol className="job_description">
      {jobResponsibilities.map((jobResponsibility) => {
        return (
          <li key={jobResponsibilities.id}>{jobResponsibility.role}</li>
        );
      })}
    </ol>
  )}
  <label>
    <textarea
      onChange={handleExperienceInputsChange}
      value={experienceInputs.jobDescription}
      placeholder="Type in your job responsibilities"
      name="jobDescription"
    ></textarea>
  </label>
  <Button
    onClick={handleAddingJobResposibilty}
    type="button"
    name="+ Job Responsibilities"
  /> */
