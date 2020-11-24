import { validateCharacter } from "../src/validateCharacter";


describe("Testing validateCharacter", () => {
    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 10,
            strength: 500,
            defense: 600
        });

        expect(result).toBe(false);
    });

    test("Should return false for life 0", () => {
        const result = validateCharacter({
            name: "Dino",
            life: 0,
            strength: 1700,
            defense: 400
        });

        expect(result).toBe(false);
    });

    test("Should return false if strength is equal to 0", () => {
        const result = validateCharacter({
            name: "Dino",
            life: 170,
            strength: 0,
            defense: 400
        });

        expect(result).toBe(false);
    });

    test("Should return false if defense is equal to 0", () => {
        const result = validateCharacter({
            name: "Dino",
            life: 600,
            strength: 500,
            defense: 0
        });

        expect(result).toBe(false);
    });

    test("Should return false if life or strength or defense is a negative value", () => {
        const result = validateCharacter({
            name: "Dino",
            life: -300,
            strength: 200,
            defense: 400
        });

        expect(result).toBe(false);
    });

    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
            name: "Dino",
            life: 1600,
            strength: 2400,
            defense: 600
        });

        expect(result).toBe(true);
    });
}); 