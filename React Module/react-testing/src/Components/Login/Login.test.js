// if username input is rendered
// if password input is rendered
// if submit button is rendered
// check if form inputs are filled on then submit button is enabled
// onchange event if we are able to update state

import { render, screen, fireEvent } from "@testing-library/react"
import Login from "./Login"

test('Check for UserName', () => {
    render(<Login />)
    const userNameEle = screen.getByPlaceholderText(/enter username/i);
    expect(userNameEle).toBeInTheDocument();
    expect(userNameEle.value).toBe('');
})

test('Check for PassWord', () => {
    render(<Login />)
    const passwordElem = screen.getByPlaceholderText(/enter password/i)
    expect(passwordElem).toBeInTheDocument();
    expect(passwordElem.value).toBe('');
})

test('Check for Submit Button', () => {
    render(<Login />)
    const submitElem = screen.getByRole('button')
    expect(submitElem).toBeInTheDocument();
    expect(submitElem).toBeDisabled();
})

test('Check for username event', () => {
    render(<Login />)
    const userNameEle = screen.getByPlaceholderText(/enter username/i);
    const submitElem = screen.getByRole('button')
    const usernameInfo = 'uttam'
    fireEvent.change(userNameEle, {target: {value : usernameInfo}});
    expect(submitElem).toBeDisabled();
    expect(userNameEle).toHaveValue('uttam');
})

test('Check for password event', () => {
    render(<Login />)
    const passwordElem = screen.getByPlaceholderText(/enter password/i)
    const submitElem = screen.getByRole('button')
    const passwordInfo = 'uttam'
    fireEvent.change(passwordElem, {target: {value : passwordInfo}});
    expect(submitElem).toBeDisabled();
    expect(passwordElem).toHaveValue("uttam");
})

test('Check for submit event', () => {
    render(<Login />)
    const userNameEle = screen.getByPlaceholderText(/enter username/i);
    const passwordElem = screen.getByPlaceholderText(/enter password/i)
    const submitElem = screen.getByRole('button')
    const usernameInfo = 'uttam'
    const passwordInfo = '12345'
    fireEvent.change(userNameEle, {target: {value : usernameInfo}})
    fireEvent.change(passwordElem, {target: {value : passwordInfo}})
    expect(userNameEle).toHaveValue('uttam');
    expect(passwordElem).toHaveValue('12345');
    expect(submitElem).toBeEnabled();
})
