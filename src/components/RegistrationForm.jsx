import React from "react";

const RegistrationForm = () => {
  return (
    <section className="mainContainer">
      <form>
        <h1>Rejestracja</h1>

        <div className="filed">
          <label>Imię</label><br></br>
          <input type="text" name="username" placeholder="Username" autocomplete="off"/>
        </div>

        <div className="filed">
          <label>Hasło</label><br></br>
          <input type="password" name="password" placeholder="Password" autocomplete="new-password" />
        </div>

        <div className="filed">
          <input type="checkbox" id=" newsletter" name=" newsletter" value=" newsletter" />
          <label for="newsletter"> Zgoda na newsletter</label>
        </div>

        <div className="filed">
          <label>Email</label><br></br>
          <input type="email" name="email" placeholder="Email" />
        </div>

        <button>Wyślij</button>

      </form>
    </section>
  );
};
export default RegistrationForm;
