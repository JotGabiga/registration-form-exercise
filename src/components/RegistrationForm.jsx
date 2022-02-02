import React, { useState } from "react";
const RegistrationForm = () => {
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const [submitMessage, setSubmitMessage] = useState();

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  //   wprowadzam osobny state dotyczący błędu dla każdego pola, aby można było w przyszłości pod każdym inputem dodać dla użytkownika informację o błędzie.

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleCheckbox = () => {
    setChecked(!checked);
    if (checked !== false) {
      delete user.email;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    !isFormValid()
      ? setSubmitMessage("Błąd walidacji")
      : setSubmitMessage("Pomyślna rejestracja");
  };
  const isFormValid = () => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user.username.trim() === "") {
      setUsernameError(true);
      return false;
    }
    if (user.password.trim() === "") {
      setPasswordError(true);
      return false;
    }
    if (checked && !emailRegex.test(user.email)) {
      setEmailError(true);
      return false;
    }
    return true;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="username">Imię</label>
        <br></br>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          checked={checked}
          onChange={handleCheckbox}
        />
        <label htmlFor="newsletter">Zgoda na newsletter</label>
      </div>

      {checked && (
        <div className="field">
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
      )}

      <button type="submit">Wyślij</button>
      {submitMessage && <h5>{submitMessage}</h5>}
    </form>
  );
};
export default RegistrationForm;
