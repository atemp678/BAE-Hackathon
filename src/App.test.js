import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.js";

describe("Input Field Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("allows for typing in First Name input", () => {
    userEvent.type(screen.getByPlaceholderText("Joanne"), "Valerio");
    expect(screen.getByPlaceholderText("Joanne")).toHaveValue("Valerio");
  });

  it("allows for typing in Last Name Initial input", () => {
    userEvent.type(screen.getByPlaceholderText("S"), "C");
    expect(screen.getByPlaceholderText("S")).toHaveValue("C");
  });

  it("allows for typing in Last Contact Date", () => {
    userEvent.type(screen.getByPlaceholderText("2022-03-16"), "2022-03-28");
    expect(screen.getByPlaceholderText("2022-03-16")).toHaveValue("2022-03-28");
  });

  it("allows for typing in Notes", () => {
    userEvent.type(
      screen.getByPlaceholderText("Last time we spoke..."),
      "Valerio is starting to learn Python!"
    );
    expect(screen.getByPlaceholderText("Last time we spoke...")).toHaveValue(
      "Valerio is starting to learn Pyhon!"
    );
  });
});
