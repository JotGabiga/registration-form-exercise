import RegistrationForm from "./RegistrationForm";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<RegistrationForm />", () => {
  test("renders the correct content", () => {
    const { container } = render(<RegistrationForm />);
    expect(container.querySelector("form")).toBeTruthy();

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
    const checkbox = screen.getByLabelText("Zgoda na newsletter");
    const fields = container.getElementsByClassName("field");

    expect(checkbox.checked).toEqual(false);
    expect(fields.length).toBe(3);

    fireEvent.click(checkbox);

    expect(checkbox.checked).toEqual(true);
    expect(fields.length).toBe(4);
    expect(screen.getByLabelText("Email")).toBeTruthy();
  });

  test("check if validation was successful", () => {
    const { container } = render(<RegistrationForm />);
    const usernameInput = screen.getByLabelText("Imię");
    const passwordInput = screen.getByLabelText("Hasło");

    fireEvent.change(usernameInput, { target: { value: "John" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(container.querySelector("button"));

    expect(container.querySelector("h5").textContent).toEqual(
      "Pomyślna rejestracja"
    );
  });

  test("check if validation with email was successful", () => {
    const { container } = render(<RegistrationForm />);
    const usernameInput = screen.getByLabelText("Imię");
    const passwordInput = screen.getByLabelText("Hasło");
    fireEvent.click(screen.getByLabelText("Zgoda na newsletter"));
    const emailInput = screen.getByLabelText("Email");

    fireEvent.change(usernameInput, { target: { value: "John" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(emailInput, { target: { value: "john@doe.com" } });
    fireEvent.click(container.querySelector("button"));

    expect(container.querySelector("h5").textContent).toEqual(
      "Pomyślna rejestracja"
    );
  });
  test("check if validation failed when username is empty", () => {
    const { container } = render(<RegistrationForm />);
    const usernameInput = screen.getByLabelText("Imię");
    const passwordInput = screen.getByLabelText("Hasło");

    fireEvent.change(usernameInput, { target: { value: " " } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(container.querySelector("button"));

    expect(container.querySelector("h5").textContent).toEqual("Błąd walidacji");
  });
  test("check if validation failed when password is empty", () => {
    const { container } = render(<RegistrationForm />);
    const usernameInput = screen.getByLabelText("Imię");
    const passwordInput = screen.getByLabelText("Hasło");

    fireEvent.change(usernameInput, { target: { value: "John" } });
    fireEvent.change(passwordInput, { target: { value: " " } });
    fireEvent.click(container.querySelector("button"));

    expect(container.querySelector("h5").textContent).toEqual("Błąd walidacji");
  });
  test("check if validation failed when email is invalid", () => {
    ["john@doe", "johndoe.com", "john@@doe.com"].map((email, i) => {
      const { container } = render(<RegistrationForm />);
      const usernameInput = screen.getByLabelText("Imię");
      const passwordInput = screen.getByLabelText("Hasło");
      if (i === 0) {
        fireEvent.click(screen.getByLabelText("Zgoda na newsletter"));
      }
      const emailInput = screen.getByLabelText("Email");

      fireEvent.change(usernameInput, { target: { value: "John" } });
      fireEvent.change(passwordInput, { target: { value: "password" } });
      fireEvent.change(emailInput, { target: { value: { email } } });
      fireEvent.click(container.querySelector("button"));

      expect(container.querySelector("h5").textContent).toEqual(
        "Błąd walidacji"
      );
    });
  });
});
