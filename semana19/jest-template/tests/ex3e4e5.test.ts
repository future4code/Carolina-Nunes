import { Casino, LOCATION, NACIONALITY, Result, User, verifyAge } from "../src/ex3e4e5";


describe('Exercício 3', () => {
    test('Brazilian allowed', () => {
        const brazilian: User = {
            name: "Carolina",
            age: 37,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const casino: Casino = {
            name:'Casino Copacabana', 
            location: LOCATION.BRAZIL
        }

        const result: Result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Carolina"]);
    })

    test('American allowed', () => {
        const american: User = {
            name: "Mark",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name:'Casino Copacabana', 
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american]);
        expect(result.americans.allowed).toEqual(["Mark"]);
    })

    test('2 american(19) and 2 brazilian(19) - no one allowed', () => {
        const users: User[] = [
            {name: 'Mark', nacionality: NACIONALITY.AMERICAN, age: 19},
            {name: 'Claire', nacionality: NACIONALITY.AMERICAN, age: 19},
            {name: 'Lucas', nacionality: NACIONALITY.BRAZILIAN, age: 19},
            {name: 'João', nacionality: NACIONALITY.BRAZILIAN, age: 19}
        ]

        const casino: Casino = {
            name: "Vegas, vegas",
            location: LOCATION.EUA,
        };

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [], unallowed: [ 'Lucas', 'João' ] },
                americans: { allowed: [], unallowed: [ 'Mark', 'Claire' ] }
            }
        )
    })


    test('2 american(21) - ok and 2 brazilian(19) not allowed', () => {
        const users: User[] = [
            {name: 'Mark', nacionality: NACIONALITY.AMERICAN, age: 21},
            {name: 'Claire', nacionality: NACIONALITY.AMERICAN, age: 21},
            {name: 'Lucas', nacionality: NACIONALITY.BRAZILIAN, age: 19},
            {name: 'João', nacionality: NACIONALITY.BRAZILIAN, age: 19}
        ]

        const casino: Casino = {
            name: "Vegas, vegas",
            location: LOCATION.EUA,
        };

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [], unallowed: [ 'Lucas', 'João' ] },
                americans: { allowed: ['Mark', 'Claire'], unallowed: [] }
            }
        )
    })

    test("1 brazilian allowed", () => {
        const brazilian: User = {
          name: "Carolina",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        }
    
        const casino: Casino = {
            name:'Casino Copacabana', 
            location: LOCATION.BRAZIL
        }
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test("1 american allowed", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        }
    
        const casino: Casino = {
            name:'Casino Copacabana', 
            location: LOCATION.BRAZIL
        }
    
        const result = verifyAge(casino, [brazilian])
        expect(result.americans.unallowed.length).toBe(0)

    })

    test("No one allowed", () => {
        const brazilian: User = {
          name: "Lucas",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "John",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Vegas, vegas",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("Lucas");
        expect(result.americans.unallowed).toContain("John");
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
          name: "João",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Luke",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Vegas, vegas",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
    });

}) 