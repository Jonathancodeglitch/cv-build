import { FormHeader } from "./utilities/Utility";
import { useState, useRef, useEffect } from "react";
import checkIfInputIsEmpty from "./utilities/ValidateEmptyInput";
import validateEmail from "./utilities/ValidateEmail";
import validatePhoneNumber from "./utilities/ValidatePhoneNumber";

export default function PersonalDetails({ step,PersonalDetailsInputs,handlePersonalDetailsInputsChange }) {
 

  return (
    <div style={{ display: step == 1 ? "block" : "none" }}>
      <FormHeader
        title="Personal info"
        desc="Please provide your name, email address, and phone number."
      />
      <div className="personal_info_inputs">
        <label>
          Full Name
          <input
            onChange={handlePersonalDetailsInputsChange}
            value={PersonalDetailsInputs.fullName}
            name="fullName"
            type="text"
            placeholder="e.g Jonathan kendrick"
          />
        </label>
        <label>
          Email Address
          <input
            onChange={handlePersonalDetailsInputsChange}
            value={PersonalDetailsInputs.Email}
            name="email"
            type="email"
            placeholder="e.g codeGlitch@gamil.com"
          />
        </label>
        <label>
          Phone Number
          <input
            onChange={handlePersonalDetailsInputsChange}
            value={PersonalDetailsInputs.phoneNumber}
            name="phoneNumber"
            type="tel"
            placeholder="e.g +234 9012354678"
          />
        </label>
      </div>
    </div>
  );
}
