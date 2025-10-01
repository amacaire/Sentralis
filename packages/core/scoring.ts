export type ScanResult = {
    ssl?: number; // 0-100
    cms?: number;
    dns?: number;
    leaks?: number;
  };
  
  export function computeScore(results: ScanResult): number {
    const weights = { ssl: 0.4, cms: 0.3, dns: 0.2, leaks: 0.1 };
    let score = 0;
  
    for (const [key, value] of Object.entries(results)) {
      if (value !== undefined) {
        score += value * (weights[key as keyof typeof weights] || 0);
      }
    }
  
    return Math.round(score);
  }
  