import { render, screen } from "@testing-library/react";
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
});
