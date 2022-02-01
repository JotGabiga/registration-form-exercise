import React, { useState } from "react";
const RegistrationForm = () => {
  const [checked, setChecket] = useState(false);
  const handleChange = () => {
    setChecket(!checked);
  };
  return (
    <form>
      <h1>Rejestracja</h1>

      <div className="field">
        <label htmlFor="username">Imię</label>
        <br></br>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>

      <div className="field">
        <label htmlFor="password">Hasło</label>
        <br></br>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
      </div>

      <div className="field">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor="newsletter">Zgoda na newsletter</label>
      </div>

      {checked && (
        <div className="field">
          <label htmlFor="email">Email</label>
          <br></br>
          <input id="email" type="email" name="email" placeholder="Email" />
        </div>
      )}

      <button>Wyślij</button>
    </form>
  );
};
export default RegistrationForm;
