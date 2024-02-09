import { Button } from './Utility';
import { PersonalInfoInputs } from './Personal_details';
import { EducationalInfo } from './Educational';
import { ExperienceInfo } from './Experience';

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

// this component is in charge of displaying the progress bar of the multistep form
function ProgressBar() {
  return (
    <div className="multistep_progressbar">
      <BarStep step={1} title="personal info" active={true} />
      <BarStep step={2} title="education" active={false} />
      <BarStep step={3} title="Experience" active={false} />
      <BarStep step={4} title="summary" active={false} />
    </div>
  );
}

function FormButtons() {
  return (
    <div className="btn_container">
      <div className="container">
        <Button name="previous" />
        <Button name="Next" type="submit" />
      </div>
    </div>
  );
}

function Form() {
  console.log('8888iiiiii7777777777');
  return (
    <form>
      <div className="form_container">
        <ExperienceInfo />
      </div>
      <FormButtons />
    </form>
  );
}

export { ProgressBar, Form };
