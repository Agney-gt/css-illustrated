import { metadata } from "../page";

describe("Min-width Page Metadata", () => {
  it("has the correct title", () => {
    expect(metadata.title).toBe("Min-Width");
  });

  it("has a descriptive description", () => {
    expect(metadata.description).toMatch(/control sizing/i);
  });

  it("defines open graph metadata", () => {
    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        title: "Min-width",
        type: "website",
      })
    );
  });
});
