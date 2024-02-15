import { FormHeader } from './Utility';

/* personal details */
function PersonalInfoInputs({
  step,
  personalInfo,
  handlePersonalInfoInputChange,
}) {
  return (
    <div style={{ display: step == 1 ? 'block' : 'none' }}>
      <FormHeader
        title="Personal info"
        desc="Please provide your name, email address, and phone number."
      />
      <div className="personal_info_inputs">
        <label>
          Full Name
          <span className="error-msg">This field is required</span>
          <input
            onChange={(e) => handlePersonalInfoInputChange(e, 'fullName')}
            type="text"
            value={personalInfo.fullName}
            placeholder="e.g Jonathan kendrick"
            required
          />
        </label>
        <label>
          Email Address
          <span className="error-msg">This field is required</span>
          <input
            onChange={(e) => handlePersonalInfoInputChange(e, 'email')}
            type="email"
            value={personalInfo.email}
            placeholder="e.g codeGlitch@gamil.com"
          />
        </label>
        <label>
          Phone Number
          <span className="error-msg">This field is required</span>
          <input
            onChange={(e) => handlePersonalInfoInputChange(e, 'phoneNumber')}
            type="tel"
            value={personalInfo.phoneNumber}
            placeholder="e.g +234 9012354678"
          />
        </label>
      </div>
    </div>
  );
}

export { PersonalInfoInputs };
