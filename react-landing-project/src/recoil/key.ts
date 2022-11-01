const tabIndex = [1, 2, 3] as const;

export type TabRecoilKey = typeof tabIndex[number];
