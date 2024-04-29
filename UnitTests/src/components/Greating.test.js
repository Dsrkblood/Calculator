import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greating from "./Greeting";

describe("Greating component", () => {
	test("renders Hello World as a text", () => {
		//Arrange
		render(<Greating />);

		//Act
		//... nothing

		//Accert
		const helloWorldElement = screen.getByText(/hello world/i);
		expect(helloWorldElement).toBeInTheDocument();
	});

	test("render It's good to see you if the button was NOT clicked", () => {
		render(<Greating />);

		const paragraphElement = screen.getByText(/it's good to see you/i);
		expect(paragraphElement).toBeInTheDocument();
	});

	test("render Changed! if the button was clicked", () => {
		//Arrange
		render(<Greating />);

		//Act
		const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

		const paragraphElement = screen.getByText(/changed/i);
		expect(paragraphElement).toBeInTheDocument();
	});

	test("does not render It's good to see you if the button was clicked", () => {
		//Arrange
		render(<Greating />);

		//Act
		const buttonElement = screen.getByRole("button");
		userEvent.click(buttonElement);

		const paragraphElement = screen.queryByText(/it's good to see you/i);
		expect(paragraphElement).toBeNull()
	});
});
