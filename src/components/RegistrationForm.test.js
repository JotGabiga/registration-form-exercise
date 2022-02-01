import RegistrationForm from "./RegistrationForm";
import ReactDOM from "react-dom";
import React from "react";

describe("<RegistrationForm />", () => {
  const root = document.createElement("div");
  ReactDOM.render(<RegistrationForm />, root);

  test("renders the correct content", () => {
    expect(root.querySelector('form')).toBeTruthy()
    expect(root.querySelector("h1").textContent).toBe("Rejestracja");

    let fields = root.getElementsByClassName ("field");
    expect(fields.length).toBe(3);

    expect(fields[0].querySelector("label").textContent).toBe("Imię");
    expect(fields[0].querySelector("input").value).toBe("");

    expect(fields[1].querySelector("label").textContent).toBe("Hasło");
    expect(fields[1].querySelector("input").value).toBe("");

    expect(fields[2].querySelector("label").textContent).toBe(
      "Zgoda na newsletter"
    );
    expect(fields[2].querySelector("input").checked).toEqual(false);

    expect(root.querySelector('button').textContent).toBe("Wyślij")
  });

  // Test 2
  test("", () => {});
});
