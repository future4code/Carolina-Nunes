import { performAttack } from "../src/performAttack";
import { Character } from "../src/validateCharacter";

describe("Testing performAttack", () => {
    const validatorMockTrue = jest.fn(() => {
      return true;
    });
  
    const validatorMockFalse = jest.fn(() => {
      return false;
    });
  
    test("Should perform attack", () => {
      const attacker: Character = {
        name: "Harry Potter",
        life: 1000,
        strength: 600,
        defense: 300
      };
  
      const defender: Character = {
        name: "Voldemort",
        life: 1000,
        strength: 500,
        defense: 400
      };
  
      performAttack(attacker, defender, validatorMockTrue as any);
  
      expect(defender.life).toEqual(800);
      expect(validatorMockTrue).toBeCalled();
      expect(validatorMockTrue).toBeCalledTimes(2);
      expect(validatorMockTrue).toHaveReturnedTimes(2);
    });
  
    test("Should return invalid character error", () => {
      const attacker: Character = {
        name: "Dino",
        life: 1200,
        strength: 200,
        defense: 600
      };
  
      const defender: Character = {
        name: "Charge",
        life: 1200,
        strength: 400,
        defense: 800
      };
      try {
        performAttack(attacker, defender, validatorMockFalse as any);
      } catch (error) {
        expect(error.message).toBe("Invalid Character");
        expect(validatorMockFalse).toBeCalled();
        expect(validatorMockFalse).toBeCalledTimes(1);
        expect(validatorMockFalse).toHaveReturnedTimes(1);
      }
    });
  