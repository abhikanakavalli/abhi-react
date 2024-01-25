import { render, screen } from "@testing-library/react";
import ResCard from "../Components/ResCard";
import { withPromotedLabel } from "../Components/ResCard";
import Mock_data_cards from "../Common/MockDataCards";
import "@testing-library/jest-dom";


it('should res Cards loaded', () => {
    render(<ResCard resData={Mock_data_cards}/>);

    const name = screen.getByText("Shah Ghouse Hotel & Restaurant");

    expect(name).toBeInTheDocument();
});

// it('should HOC res Cards loaded', () => {
//     render(<withPromotedLabel resData={Mock_data_cards}/>);

//     const name = screen.getByText("Shah Ghouse Hotel & Restaurant");

//     expect(name).toBeInTheDocument();
// });
