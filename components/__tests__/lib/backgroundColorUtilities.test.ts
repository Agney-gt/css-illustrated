import { backgroundColorUtilities } from "@/lib/utilities";

describe("backgroundColorUtilities – contract", () => {
  it("exposes a classes array", () => {
    expect(
      Array.isArray(backgroundColorUtilities.classes)
    ).toBe(true);
  });

  it("contains at least one background utility", () => {
    expect(
      backgroundColorUtilities.classes.length
    ).toBeGreaterThan(0);
  });

  it("each class entry has required fields", () => {
    backgroundColorUtilities.classes.forEach((entry) => {
      expect(entry).toMatchObject({
        class: expect.any(String),
        description: expect.any(String),
      });
    });
  });

  it("uses only bg-* Tailwind utility classes", () => {
    backgroundColorUtilities.classes.forEach(({ class: className }) => {
      expect(className).toMatch(/^bg-/);
    });
  });
});
