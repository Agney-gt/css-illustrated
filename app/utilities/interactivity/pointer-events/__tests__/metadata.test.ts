import { metadata } from "../page";

describe("Pointer Events Page Metadata", () => {
  it("has the correct title", () => {
    expect(metadata.title).toBe("Pointer Events");
  });

  it("has a descriptive description", () => {
    expect(metadata.description).toMatch(/control interaction/i);
  });

  it("defines open graph metadata", () => {
    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        title: "Pointer Events",
        type: "website",
      })
    );
  });
});
