import { BarStep, FormButtons } from './utility';
import { PersonalInfoInputs } from './personal_details';
import { EducationalInfo } from './educational';
import { ExperienceInfo } from './experience';

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

function Form() {
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
