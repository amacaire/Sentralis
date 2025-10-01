import { computeScore } from "../scoring";

describe("computeScore", () => {
  it("calculates weighted score correctly", () => {
    const score = computeScore({ ssl: 80, cms: 70, dns: 90, leaks: 50 });
    expect(score).toBeGreaterThan(70);
  });

  it("handles missing values gracefully", () => {
    const score = computeScore({ ssl: 100 });
    expect(score).toBe(40); // 100 * 0.4
  });
});
