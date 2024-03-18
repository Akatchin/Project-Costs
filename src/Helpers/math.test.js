import { plus, minus, multiply, divide } from "./math"

describe("testing math functions", () => {

    it("should add correctly", () => {
        let result = plus(5, 8)
        expect(result).toBe(13)
    }) 
    
    it("should reduce correctly", () => {
        let result = minus(9,5)
        let result2 = minus (30, 5)
        let result3 = minus (7,2)

        expect(result).toBe(4)
        expect(result2).toBe(25)
        expect(result3).toBe(5)
    })

    it("should multiply correctly", () => {
        let result = multiply(5, 4)

        expect(result).toBe(20)
    })

    it("should divide correctly", () => {
        let result = divide(10, 5)

        expect(result).toBe(2)
    })
})

export {}