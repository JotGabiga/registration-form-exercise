import React from "react";

const RegistrationForm = () => {
  return (
      <form>
        <h1>Rejestracja</h1>

        <div className="field">
          <label htmlFor="username">Imię</label><br></br>
          <input type="text" name="username" placeholder="Username"/>
        </div>

        <div className="field">
          <label htmlFor="password">Hasło</label><br></br>
          <input type="password" name="password" placeholder="Password" autoComplete="off" />
        </div>

        <div className="field">
          <input type="checkbox" id="newsletter" name="newsletter"/>
          <label htmlFor="newsletter">Zgoda na newsletter</label>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label><br></br>
          <input type="email" name="email" placeholder="Email" />
        </div>

        <button>Wyślij</button>

      </form>
  );
};
export default RegistrationForm;
