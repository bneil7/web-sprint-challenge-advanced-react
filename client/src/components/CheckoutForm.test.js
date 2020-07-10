import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
// Arrange //
    render(<CheckoutForm />);
// Act //
    const header = screen.getByText(/checkout form/i);
// Assert //
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
// type into all inputs
//      1. query for all inputs
//      2. run the change event to add text
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    // events with RTL!
    fireEvent.change(firstNameInput, {target: {value: 'Wade'} });
    fireEvent.change(lastNameInput, {target: {value: 'Boggs'} });
    fireEvent.change(addressInput, {target: {value: '123 Main St'} });
    fireEvent.change(cityInput, {target: {value: 'Freedomland'} });
    fireEvent.change(stateInput, {target: {value: 'NY'} });
    fireEvent.change(zipInput, {target: {value: 42069} });
    

// click checkout! button
//      1. query for the button
//      2. run the click event on the button
    const checkoutButton = screen.getByText(/checkout!/i)
    fireEvent.click(checkoutButton);

// assert checkout 
//      1. query 
//      2. assert inputs rendering
    const newFirst = screen.getByText(/wade/i);
    expect(newFirst).toBeInTheDocument();

    const newLast = screen.getByText(/boggs/i);
    expect(newLast).toBeInTheDocument();

    const newAddress = screen.getByText(/123 main st/i);
    expect(newAddress).toBeInTheDocument();

    const newCity = screen.getByText(/freedomland/i);
    expect(newCity).toBeInTheDocument();

    const newState = screen.getByText(/ny/i);
    expect(newState).toBeInTheDocument();

    const newZip = screen.getByText(/42069/i);
    expect(newZip).toBeInTheDocument();
});
