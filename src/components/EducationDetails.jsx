import { useState, useRef } from "react";
import { FormHeader, Button } from "./utilities/Utility";
import Modal from "./utilities/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

/* this is responsible for displaying the educational background of the user */
export default function EducationDetails({
  step,
  listOfEducation,
  handleSetListOfEducation,
}) {
  //for unique key value
  let uuid = self.crypto.randomUUID();

  const [educationInputValues, setEducationalInputValues] = useState({
    instituteName: "",
    fieldOfStudy: "",
    qualifications: "",
    startDate: "",
    endDate: "",
    country: "",
  });

  //update education inputs state when user is typing..
  function handleEducationInputValueChange(e) {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    setEducationalInputValues({
      ...educationInputValues,
      [inputName]: inputValue,
    });
  }

  function handleAddingEducationToListOfEducation() {
    //Check if an Id exist in the education obj
    if (educationInputValues.id) {
      //If so, its for editing
      handleSetListOfEducation(
        listOfEducation.map((education) => {
          //Replace the education obj with the edited values if it matches the Id
          if (education.id === educationInputValues.id) {
            return educationInputValues;
          } else {
            return education;
          }
        })
      );
    } else {
      //Else its a new entry and should be added to the list of education for display with a unique Id
      handleSetListOfEducation([
        ...listOfEducation,
        { ...educationInputValues, id: uuid },
      ]);
    }

    //close modal
    handleCloseModal();
  }

  //delete education from education List
  function handleDeletingEducation(deletedId) {
    handleSetListOfEducation(
      listOfEducation.filter((education) => {
        return education.id !== deletedId;
      })
    );
  }

  //Edit education
  function handleEditingEducation(editingId) {
    //open modal with inputs that holds the current value that wants to be changed.
    handleOpenModal();
    // Get the education that wants to be edited from the list of education with the [editingId]
    const [education] = listOfEducation.filter((education) => {
      return education.id === editingId;
    });
    // Update the modal inputs with the current value of the education being edited
    setEducationalInputValues({
      id: education.id,
      instituteName: education.instituteName,
      fieldOfStudy: education.fieldOfStudy,
      qualifications: education.qualifications,
      startDate: education.startDate,
      endDate: education.endDate,
      country: education.country,
    });
  }

  /* Modal */
  const modalRef = useRef(null);

  function handleOpenModal() {
    modalRef.current.showModal();
  }

  function handleCloseModal() {
    modalRef.current.close();

    //Clear inputs
    setEducationalInputValues({
      instituteName: "",
      fieldOfStudy: "",
      qualifications: "",
      startDate: "",
      endDate: "",
      country: "",
    });
  }

  return (
    <div style={{ display: step == 2 ? "block" : "none" }}>
      <FormHeader
        title="Education summary"
        desc="Please provide your educational background."
      />

      {/*educatonal background infomation */}
      <ul>
        {listOfEducation.map((education) => {
          return (
            <EducationItemList
              handleDeletingEducation={handleDeletingEducation}
              handleEditingEducation={handleEditingEducation}
              key={education.id}
              id={education.id}
              instituteName={education.instituteName}
              fieldOfStudy={education.fieldOfStudy}
              country={education.country}
              qualifications={education.qualifications}
              stateDate={education.startDate}
              endDate={education.endDate}
            />
          );
        })}
      </ul>

      {/*Modal to display inputs to get data on user education */}
      <Modal
        handleCloseModal={handleCloseModal}
        modalRef={modalRef}
        title="Tell us about your education"
        description="List universities, colleges or institutions where you studied. If
            you didn't attend further education, then list your school or any
            other place of training, particularly if it corresponds to the
            position sought."
      >
        <EducationInputs
          handleAddingEducationToListOfEducation={
            handleAddingEducationToListOfEducation
          }
          educationInputValues={educationInputValues}
          handleEducationInputValueChange={handleEducationInputValueChange}
        />
      </Modal>
      <Button type="button" name="+ Education" onClick={handleOpenModal} />
    </div>
  );
}

function EducationInputs({
  educationInputValues,
  handleEducationInputValueChange,
  handleAddingEducationToListOfEducation,
}) {
  return (
    <form>
      <label>
        INSTITUTION NAME
        <input
          value={educationInputValues.instituteName}
          onChange={handleEducationInputValueChange}
          name="instituteName"
          type="text"
          placeholder="University Of Benin"
          autoFocus
        />
      </label>
      <label>
        FIELD OF STUDY
        <input
          value={educationInputValues.fieldOfStudy}
          onChange={handleEducationInputValueChange}
          name="fieldOfStudy"
          type="text"
          placeholder="e.g Computer science"
        />
      </label>
      <label>
        QUALIFICATION
        <input
          onChange={handleEducationInputValueChange}
          value={educationInputValues.qualifications}
          name="qualifications"
          type="text"
          placeholder="e.g Bachelors in Education"
        />
      </label>
      <div className="date_container">
        <label>
          START DATE
          <input
            onChange={handleEducationInputValueChange}
            value={educationInputValues.startDate}
            name="startDate"
            type="date"
          />
        </label>
        <label>
          END DATE
          <input
            onChange={handleEducationInputValueChange}
            value={educationInputValues.endDate}
            name="endDate"
            type="date"
          />
        </label>
      </div>
      <label>
        CITY / COUNTRY
        <input
          onChange={handleEducationInputValueChange}
          value={educationInputValues.country}
          name="country"
          type="text"
          placeholder="e.g Benin City, Edo State Nigeria"
        />
      </label>
      <Button
        onClick={handleAddingEducationToListOfEducation}
        name="Save"
        type="button"
      />
    </form>
  );
}

function EducationItemList({
  instituteName,
  fieldOfStudy,
  country,
  qualifications,
  stateDate,
  endDate,
  handleDeletingEducation,
  handleEditingEducation,
  id,
}) {
  const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
  const editIcon = <FontAwesomeIcon icon={faPen} />;

  return (
    <li className="item_container">
      <div className="item">
        <p>
          <span className="qualification">{qualifications},</span>{" "}
          <span className="field_of_study">{fieldOfStudy}</span>
        </p>
        <p>
          <span className="institute_name">
            {instituteName} | {country}{" "}
          </span>

          <span className="date">
            {stateDate} / {endDate}
          </span>
        </p>
      </div>
      {/* icons */}
      <div className="icon">
        <span
          onClick={() => {
            handleEditingEducation(id);
          }}
          className="trash_icon"
        >
          {editIcon}
        </span>
        <span
          onClick={() => {
            handleDeletingEducation(id);
          }}
          className="trash_icon"
        >
          {deleteIcon}
        </span>
      </div>
    </li>
  );
}
