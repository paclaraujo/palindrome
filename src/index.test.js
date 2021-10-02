import palindrome from "./index.js";

describe("Given palindrome function", () => {
  describe("when is a palindrome word", () => {
    describe("when all characters are in lower case", () => {
      it("should return true for “madam”", () => {
        expect(palindrome("madam")).toBeTruthy();
      });

      it("should return true for “bob”", () => {
        expect(palindrome("bob")).toBeTruthy();
      });
    });

    describe("when there are lower case and upper case characters", () => {
      it("should return true for “Rotator”", () => {
        expect(palindrome("Rotator")).toBeTruthy();
      });

      it("should return true for “mAlAyAlam”", () => {
        expect(palindrome("mAlAyAlam")).toBeTruthy();
      });
    });

    describe("when there are special characters", () => {
      it("should return true for “Step on no pets.”", () => {
        expect(palindrome("Step on no pets.")).toBeTruthy();
      });

      it("should return true for “Able was I, ere I saw Elba”", () => {
        expect(palindrome("Able was I, ere I saw Elba")).toBeTruthy();
      });

      it("should return true for “Madam I’m Adam”", () => {
        expect(palindrome("Madam I’m Adam")).toBeTruthy();
      });

      it("should return true for “Top spot!”", () => {
        expect(palindrome("Top spot!")).toBeTruthy();
      });
    });
  });

  describe("when is a palindrome number", () => {
    it("should return true for “1”", () => {
      expect(palindrome("1")).toBeTruthy();
    });

    it("should return true for “1212121”", () => {
      expect(palindrome("1212121")).toBeTruthy();
    });
  });

  describe("when is a palindrome date", () => {
    it("should return true for “02/02/2020”", () => {
      expect(palindrome("02/02/2020")).toBeTruthy();
    });
  });

  describe("when is not a palindrome", () => {
    it("should return false for “xyz”", () => {
      expect(palindrome("xyz")).toBeFalsy();
    });

    it("should return false for “elephant”", () => {
      expect(palindrome("elephant")).toBeFalsy();
    });

    it("should return false for “Country”", () => {
      expect(palindrome("Country")).toBeFalsy();
    });

    it("should return false for “Top . post!”", () => {
      expect(palindrome("Top . post!")).toBeFalsy();
    });

    it("should return false for “Wonderful-fool”", () => {
      expect(palindrome("Wonderful-fool")).toBeFalsy();
    });

    it("should return false for “Wild imagination!”", () => {
      expect(palindrome("Wild imagination!")).toBeFalsy();
    });
  });
});
