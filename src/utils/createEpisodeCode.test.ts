import { createEpisodeCode } from "./createEpisodeCode";

test("returns code with format S02E07 given season and episode number", () => {
  expect(createEpisodeCode(1, 1)).toBe("S01E01");
  expect(createEpisodeCode(1, 2)).toBe("S01E02");
  expect(createEpisodeCode(1, 12)).toBe("S01E12");
  expect(createEpisodeCode(12, 12)).toBe("S12E12");
});
