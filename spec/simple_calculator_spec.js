const{add, multiply}=require("../src/simple_calculator.js");

describe("add", function(){
    it("should add numbers", function(){
        expect(add(-1,-2)).toEqual(-3)
    })

    it("should add numbers", function(){
        expect(add(1, 2, 3, 4, 5)).toEqual(15)
    })
});

describe("Multiply", function(){
    it("should multipy numbers", function(){
        expect(multiply(2,4)).toEqual(8)
    })

    it("should multiply more than 2 numbers", function(){
        expect(multiply(1, 2, 3, 4, 5)).toEqual(120)
    })
});