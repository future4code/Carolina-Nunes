import { performPurchase, User } from "../src/ex1e2"


describe('Exercício 1', () => {

    test('Testing balance greater than value', () => {
        const user: User = {
            name: "Carolina",
            balance: 100
        }
        const result = performPurchase(user,50)

        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })

    test('Testing balance equal to value', () => {
        const user: User = {
            name: "Carolina",
            balance: 100
        }
        const result = performPurchase(user,100)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test('Testing balance less than value', () => {
        const user: User = {
            name: "Carolina",
            balance: 100
        }
        const result = performPurchase(user,120)

        expect(result).toEqual({
            ...user,
            balance: undefined
        })
    })
    
}) 