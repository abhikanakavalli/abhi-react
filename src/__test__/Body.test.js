import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Components/Body"
import { act } from "react-dom/test-utils";
import Mock_data_cards from "../Common/MockDataCards";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import UserContext from "../Common/UserContext";
import "@testing-library/jest-dom";
import AppStore from "../Common/AppStore";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_data_cards);
        }
    })
});
it('Body is rendered', async () => {
    await act(async () => 
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <UserContext.Provider value={() => {}}>
        <Body/>
             

        </UserContext.Provider>
        
        </Provider>
        </BrowserRouter>
    )
    );

    const searchBtn = screen.getByRole('button', {name: 'Search'});

    const cardsBefore= screen.getByTestId("searchInput");
    fireEvent.change(cardsBefore, {target: {value: 'ice'}});

    fireEvent.click(searchBtn);

    //screen should load 3 cards

    const cards = screen.get("resCard");

    console.log(cards);

    expect(cards.length).toBe(3);
})