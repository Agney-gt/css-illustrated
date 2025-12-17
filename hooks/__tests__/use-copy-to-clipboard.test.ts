import { renderHook, act } from "@testing-library/react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

// Mock the global navigator.clipboard API
const mockWriteText = jest.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

describe("useCopyToClipboard", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockWriteText.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("copies text and sets state temporarily", async () => {
    mockWriteText.mockResolvedValue(undefined);
    const { result } = renderHook(() => useCopyToClipboard());

    // 1. Trigger Copy
    await act(async () => {
      await result.current.copy("cursor-pointer");
    });

    // Assert: API called & state updated
    expect(mockWriteText).toHaveBeenCalledWith("cursor-pointer");
    expect(result.current.copiedText).toBe("cursor-pointer");

    // 2. Fast-forward time (simulate 1.4s delay)
    act(() => {
      jest.advanceTimersByTime(1400);
    });

    // Assert: State reset
    expect(result.current.copiedText).toBeNull();
  });

  it("handles clipboard errors gracefully", async () => {
    // Strategy: "Service functions throw errors" -> Here we ensure the hook catches it
    mockWriteText.mockRejectedValue(new Error("Permission denied"));
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy("fail-text");
    });

    expect(result.current.copiedText).toBeNull(); // State remains null on failure
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
