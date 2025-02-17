export default function ProgressBar({ step }) {
  return (
    <div className="multistep_progressbar">
      <BarStep step={1} cvCurrentStep={step} title="personal info" />
      <BarStep step={2} cvCurrentStep={step} title="education" />
      <BarStep step={3} cvCurrentStep={step} title="Experience" />
      <BarStep step={4} cvCurrentStep={step} title="summary" />
    </div>
  );
}

function BarStep({ step, title, cvCurrentStep }) {
  return (
    <div className="progress_bar">
      <span className={cvCurrentStep === step ? "bar active" : "bar"}>
        {step}
      </span>
      <div className="progress_bar_text">
        <div className="step">step {step}</div>
        <div className="progress_bar_title">{title}</div>
      </div>
    </div>
  );
}
