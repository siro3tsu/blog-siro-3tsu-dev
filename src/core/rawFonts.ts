import fs from 'fs';
import type { Plugin } from 'vite';
export const rawFonts = (): Plugin => {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (['.ttf', '.woff'].some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
};
