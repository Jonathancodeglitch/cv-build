import Header from './Header';
import CvBuilder from './CvBuilder';
import Exp from './exp';

//when the next button is clicked show the  next step of the form
//when the previous button is clicked show the previous section of the form
// outline the current step on the progress bar
// validate input forms
// for personal inputs check if the name form was field if its not display an error
// check if other inputs are field correctly
// when a user clicks on add education/experience a modal should pop up
// validate the form is not empty and is correctly field before allowing the user save the modal
// show the data gotten from the user on the summary section
// when the user click edit

function App() {
  return (
    <>
      <Header />
      <CvBuilder />
    </>
  );
}

export default App;
