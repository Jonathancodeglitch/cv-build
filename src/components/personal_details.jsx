import { FormHeader } from './Utility';

/* personal details */
function PersonalInfoInputs() {
  return (
    <>
      <FormHeader
        title="Personal info"
        desc="Please provide your name, email address, and phone number."
      />
      <div className="personal_info_inputs">
        <label>
          Full Name
          <span className="error-msg">This field is required</span>
          <input type="text" placeholder="e.g Jonathan kendrick" required />
        </label>
        <label>
          Email Address
          <span className="error-msg">This field is required</span>
          <input type="email" placeholder="e.g codeGlitch@gamil.com" />
        </label>
        <label>
          Phone Number
          <span className="error-msg">This field is required</span>
          <input type="text" placeholder="e.g +234 9012354678" />
        </label>
        <label>
          Address
          <span className="error-msg">This field is required</span>
          <input type="text" placeholder="e.g +234 9012354678" />
        </label>
      </div>
    </>
  );
}

export { PersonalInfoInputs };
