import React, { useEffect, useState } from "react";
import FormInput from "./formInput.component";
import "./sign-in.styles.scss";
import DisplayAll from './displayall.component';
import Editable from './editable.component'


const FormInputContainer = () => {
  const handleSubmit = event => {
    event.preventDefault();

    console.log("on submit");
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCountry({ ...country, [name]: value });
  };

  const [country, setCountry] = useState({
    countryCode: "",
    description: ""
  });

  return (
    <div className="parent">
      <div className="sign-in">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="countryCode"
            type="text"
            handleChange={handleChange}
            value={country.countryCode}
            label="countryCode"
            required
          />

          <FormInput
            name="description"
            type="text"
            handleChange={handleChange}
            value={country.description}
            label="description"
            required
          />
          <button>click me</button>
        </form>
      </div>

      {/* <DisplayAll /> */}

      <Editable />
    </div>
  );
};

export default FormInputContainer;
