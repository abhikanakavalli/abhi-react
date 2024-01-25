import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

describe('contact page all test case in a group', () => {
    test('Should component is loaded', () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test('inputs present or not', () => {
        render(<Contact/>);
    
        const inpEl = screen.getAllByRole("textbox");
    
        expect(inpEl.length).toBeGreaterThan(1);
    });
})
