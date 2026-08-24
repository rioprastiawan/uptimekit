import { describe, expect, it } from "vitest";
import { formatDuration } from "./duration";

describe("formatDuration", () => {
    it("formats sub-minute durations as 0m", () => {
        expect(formatDuration(20_000)).toBe("0m");
    });

    it("formats minutes only", () => {
        expect(formatDuration(45 * 60_000)).toBe("45m");
    });

    it("formats hours and minutes", () => {
        expect(formatDuration(2 * 3_600_000 + 15 * 60_000)).toBe("2h 15m");
    });

    it("omits minutes when exactly on the hour", () => {
        expect(formatDuration(3 * 3_600_000)).toBe("3h");
    });

    it("formats days, hours, and minutes", () => {
        expect(
            formatDuration(1 * 86_400_000 + 2 * 3_600_000 + 5 * 60_000),
        ).toBe("1d 2h 5m");
    });

    it("clamps negative durations to 0m", () => {
        expect(formatDuration(-5000)).toBe("0m");
    });
});
