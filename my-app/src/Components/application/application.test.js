// Import testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";
// Import the Application component being tested
import { Application } from "./application";

// Test suite for the Application component
describe("Application", () => {
  // Test case: verifies that Application renders all expected elements
  test("renders correctly", () => {
    // Render the Application component
    render(<Application />);

    // Find and verify the main page heading (h1)
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    // Find and verify the section heading (h2)
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // Find and verify paragraph text by its content
    const paragraphElement = screen.getByText("All field are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // Find and verify image by its alt text
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    // Find and verify element by data-testid attribute
    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    // Find and verify element by its title attribute
    const closeElement = screen.getByTitle("Close");
    expect(closeElement).toBeInTheDocument();

    // Find and verify text input by its accessible role and name
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // Alternative: Find input by associated label text
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    // Alternative: Find input by placeholder text
    const nameElement3 = screen.getByPlaceholderText("Full Name");
    expect(nameElement3).toBeInTheDocument();

    // Alternative: Find input by its current value
    const nameElement4 = screen.getByDisplayValue("Boy");
    expect(nameElement4).toBeInTheDocument();    

    // Find and verify textarea by its accessible role and name
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    // Find and verify select dropdown by its combobox role
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    // Find and verify checkbox by its checkbox role
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    // Alternative: Find checkbox by its associated label text
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElement2).toBeInTheDocument();

    // Find and verify submit button by its button role
    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});