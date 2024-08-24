import { render, screen } from "@testing-library/react";
import About from "./About";
import { expect } from "vitest";


it("checking for about component", () => {
    render(<About />)
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()

})