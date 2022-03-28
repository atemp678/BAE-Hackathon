import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNewContact from "./AddNewContact";

describe("Add New Contact component text", () => {
  beforeEach(() => {
    render(<AddNewContact />);
  });

  it("renders correct label text for first name", () => {
    const inputField = screen.getByText("First name:");
    expect(inputField).toBeVisible();
  });

  it("renders correct label text for surname initial", () => {
    const inputField = screen.getByText("Last name Initial:");
    expect(inputField).toBeVisible();
  });

  it("renders correct label text for last contact date", () => {
    const inputField = screen.getByText("Last Contact Date:");
    expect(inputField).toBeVisible();
  });

  it("renders correct label text for notes", () => {
    const inputField = screen.getByText("Notes:");
    expect(inputField).toBeVisible();
  });
});
