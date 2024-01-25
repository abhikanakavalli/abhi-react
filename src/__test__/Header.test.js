import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Components/Header"
import { Provider } from "react-redux"
import AppStore from "../Common/AppStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import UserContext from "../Common/UserContext"

it('should header contains elements', () => {
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <UserContext.Provider value={() => {}}>
        <Header/>        

        </UserContext.Provider>
        
        </Provider>
        </BrowserRouter>
    )

    const textPresent = screen.getByText('Home');

    expect(textPresent).toBeInTheDocument();
})

it('should header contains elements', () => {
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
        <UserContext.Provider value={() => {}}>
        <Header/>        

        </UserContext.Provider>
        
        </Provider>
        </BrowserRouter>
    )

    const LogInBTn = screen.getByRole('button', {name: 'LogIn'});

    fireEvent.click(LogInBTn);

    const logOutBtn = screen.getByText('LogOut');

    expect(logOutBtn).toBeInTheDocument();
})
