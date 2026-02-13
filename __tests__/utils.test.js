import { add, divide, capitalize } from "../src/utils.js";

describe("add function", () => {

  test("multiple additions", ()=>{
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 5)).toBe(3);
    expect(add(0, 0)).toBe(0);
  })

  test("throws TypeError for non-numbers", () => {
    expect(() => add("2", 3)).toThrow(TypeError);
  });

  test("handles NaN input", () => {
    expect(add(NaN, 5)).toBeNaN();
  });

});

describe("divide function", () => {

  test("basic tests", ()=>{
    expect(divide(10, 2)).toBe(5);
    expect(divide(3, 2)).toBe(1.5);
  })

  test("to throw an error" ,() => {
        expect(() =>{
            divide(1,0) 
        }).toThrow(Error);

        expect(() =>{
            divide("10",2) 
        }).toThrow(TypeError);
  });

  test("divides by a negative number", () => {
    expect(divide(10, -2)).toBe(-5);
  });
});

describe("capitalize function", () => {

  test("basic tests", ()=>{
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("")).toBe("");
  })

  test("to throw an error" ,() => {
        expect(() =>{ capitalize(123) }).toThrow(TypeError);
  });

  test("handles strings starting with symbols", () => {
    expect(capitalize("!hello")).toBe("!hello");
  });
});