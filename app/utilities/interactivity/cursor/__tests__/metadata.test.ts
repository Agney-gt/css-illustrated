import { metadata } from "../page"; 

describe("Cursor Page Metadata", () => {
  it("exports correct title and description", () => {
    expect(metadata).toMatchObject({
      title: "Cursor & Pointer Utilities",
      description: expect.stringContaining("CSS cursor"),
    });
  });

  it("includes OpenGraph configuration", () => {
    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        type: "website",
      })
    );
  });
});