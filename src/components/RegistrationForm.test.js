import RegistrationForm from "./RegistrationForm";
import ReactDOM from "react-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<RegistrationForm />", () => {
 

  test("renders the correct content", () => {
    const { container } = render(<RegistrationForm />);
    expect(container.querySelector("form")).toBeTruthy();
    expect(container.querySelector("h1").textContent).toBe("Rejestracja");

    const fields = container.getElementsByClassName("field");
    expect(fields.length).toBe(3);

    expect(fields[0].querySelector("label").textContent).toBe("Imię");
    expect(fields[0].querySelector("input").value).toBe("");

    expect(fields[1].querySelector("label").textContent).toBe("Hasło");
    expect(fields[1].querySelector("input").value).toBe("");

    expect(fields[2].querySelector("label").textContent).toBe(
      "Zgoda na newsletter"
    );
    expect(fields[2].querySelector("input").checked).toEqual(false);

    expect(container.querySelector("button").textContent).toBe("Wyślij");
  });

  test("check if email field appears", () => {
    const { container } = render(<RegistrationForm />);
    const checkbox = screen.getByLabelText('Zgoda na newsletter');
    const fields = container.getElementsByClassName("field");

    expect(checkbox.checked).toEqual(false);
    expect(fields.length).toBe(3);

    fireEvent.click(checkbox)

    expect(checkbox.checked).toEqual(true);
    expect(fields.length).toBe(4);
    expect(screen.getByLabelText('Email')).toBeTruthy();
  });
});
