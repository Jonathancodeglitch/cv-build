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

export default function ProgressBar({ currentStep }) {
  /* 
     here is the side Navigation that shows the current step of the form
    it takes in a props that contains the current step of the form
    and use a ternary operator  to check if the form step is equal to any of the bar step
    it then gives a  boolean value to the active props
     */
  return (
    <div className="multistep_progressbar">
      <BarStep
        step={1}
        title="personal info"
        active={currentStep == 1 ? true : false}
      />
      <BarStep
        step={2}
        title="education"
        active={currentStep == 2 ? true : false}
      />
      <BarStep
        step={3}
        title="Experience"
        active={currentStep == 3 ? true : false}
      />
      <BarStep
        step={4}
        title="summary"
        active={currentStep == 4 ? true : false}
      />
    </div>
  );
}
