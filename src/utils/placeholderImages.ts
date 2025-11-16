export const generatePlaceholderImage = (title: string, color: string = '#FF6B35'): string => {
  const width = 1200;
  const height = 800;
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.05" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="white"/>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <circle cx="${width / 2}" cy="${height / 2 - 80}" r="100" fill="${color}" opacity="0.15"/>
      <circle cx="${width / 2 - 150}" cy="${height / 2 - 100}" r="60" fill="${color}" opacity="0.1"/>
      <circle cx="${width / 2 + 150}" cy="${height / 2 + 50}" r="80" fill="${color}" opacity="0.08"/>
      <text x="${width / 2}" y="${height / 2}" font-size="48" font-weight="bold" text-anchor="middle" fill="${color}" opacity="0.3">
        ${title}
      </text>
      <text x="${width / 2}" y="${height / 2 + 80}" font-size="24" text-anchor="middle" fill="${color}" opacity="0.2">
        Traffic Management Documentation
      </text>
      <rect x="${width / 2 - 150}" y="${height - 100}" width="300" height="60" fill="${color}" opacity="0.08" rx="8"/>
      <text x="${width / 2}" y="${height - 70}" font-size="16" text-anchor="middle" fill="${color}" opacity="0.4">
        Professional Traffic Safety Solutions
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const trafficImages = {
  ttm: generatePlaceholderImage('TTM Equipment Catalog', '#FF6B35'),
  tmp: generatePlaceholderImage('Traffic Management Plan', '#FF8C00'),
  wz: generatePlaceholderImage('Work Zone Safety', '#FF7722'),
};
