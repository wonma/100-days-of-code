import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm2 from './FeedbackForm2';

describe("Feedback Form", () => {

  test("Submission is disabled if score is lower than 5 and there is no feedback.", () => {
    const handleSubmit = jest.fn(); // create a mocking callback function 
    render(<FeedbackForm2 onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Rating:/);
    fireEvent.change(rangeInput, { target: { value: "4" } }); // User filled the input to 4

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton); // User performs clicking on the button

    expect(handleSubmit).not.toHaveBeenCalled(); // onSubmit callback has not been called.
    expect(submitButton).toHaveAttribute("disabled");
  })

  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided.", () => {
    const handleSubmit = jest.fn(); // create a mocking callback function 
    render(<FeedbackForm2 onSubmit={handleSubmit} />); // render the component to test
    
    const rangeInput = screen.getByLabelText(/Rating:/);
    fireEvent.change(rangeInput, { target: {value: "3" }}); // User filled the input to 3

    const commentInput = screen.getByLabelText(/Comment:/);
    fireEvent.change(commentInput, { target: {value: "this pizza crust was too hard to eat." }}); 

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton); // User performs clicking on the button

    expect(handleSubmit).toHaveBeenCalled();
  })

  test("User is able to submit the form if the score is higher than 5, without additional feedback.", () => {
    const handleSubmit = jest.fn(); // create a mocking callback function 
    render(<FeedbackForm2 onSubmit={handleSubmit} />); // render the component to test
    
    const rangeInput = screen.getByLabelText(/Rating:/);
    fireEvent.change(rangeInput, { target: {value: 7 }}); // User filled the input to 3

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton); // User performs clicking on the button

    expect(handleSubmit).toHaveBeenCalled();
  })

})