import { Form, ProgressBar } from './multi_step_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

//Application details
//application user interface
// the you UI should include
/* 
1. a section to for the user to add (phone number , email , name )
2. a section to add educational background (school name, course study and the date of study and exit)
3.  a section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
4. add a next/edit button for each section  and a submit button at the end of the form.
5. diplay the user input on a cv template which should have edit and download btn when the edit btn is clicked it should take you to the form with the previous values
6. if the user clicks edit start the form again with the previous value entered by the user
7. when download is clicked the user should be able to download the template in pdf format.

end......
*/

function Header() {
  const logoIcon = <FontAwesomeIcon icon={faScrewdriverWrench} />;
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>Build-a-cv</span>
          {logoIcon}
        </div>
      </div>
    </header>
  );
}

function CvBuilder() {
  return (
    <div className="multistep_form ">
      <ProgressBar />
      <Form />
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <CvBuilder />
    </>
  );
}

export default App;
