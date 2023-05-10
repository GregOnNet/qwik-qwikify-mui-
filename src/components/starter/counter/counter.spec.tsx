import { createDOM } from "@builder.io/qwik/testing";
import { expect, test, } from "vitest";
import Counter from "./counter";

test('Increases count when "+" is clicked', async () => {
    const {screen, render, userEvent} = await createDOM();

    await render(<Counter/>);

    const countDisplay =  screen.querySelector('[data-test="count-display"]');
    
    expect(countDisplay?.innerHTML).contains('70');

    const increaseButton = screen.querySelector('[data-test="increase-button"]');
    
    await userEvent(increaseButton, 'click');
    
    expect(countDisplay?.innerHTML).contains('71')
});