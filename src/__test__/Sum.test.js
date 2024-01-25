import { Sum } from "../Components/Sum"


test('Sum should be a function which return the sum of the values', () => {
    const result = Sum(12, 6);

    //Assertion
    expect(result).toBe(18);
})