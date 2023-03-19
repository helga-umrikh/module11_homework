import { getMonth } from "./task_2.js";

test('returns error message when wrong number is added', () => {
    expect(getMonth(0)).toBe('Invalid number!');
});

test('returns months name when valid number is added', () => {
    expect(getMonth(1)).toBe('January');
})



describe('returns month name when valid number is added', () => {

    it("returns error message when string added", () => {
        let str = 'a string'
        expect(getMonth(str)).toBe('Invalid parameter, please add number!');
    }),

    it("returns May  when add 5", () => {
        expect(getMonth(5)).toBe('May');
    }),

    it("returns December when add 12", () => {
        expect(getMonth(12)).toBe('December');
    });

});
