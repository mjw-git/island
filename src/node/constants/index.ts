import { join } from 'path';
import { fileURLToPath } from 'url';
export const isProduction = () => process.env.NODE_ENV === 'production';

export const PACKAGE_ROOT_PATH = join(fileURLToPath(import.meta.url), '../..');

export const CLIENT_PATH = join(PACKAGE_ROOT_PATH, 'src/client/app');

export const CLIENT_ENTRY_PATH = join(
  PACKAGE_ROOT_PATH,
  'src/client/app/client-entry.tsx'
);

export const SERVER_ENTRY_PATH = join(
  PACKAGE_ROOT_PATH,
  'src/client/app/ssr-entry.tsx'
);

export const DEFAULT_THEME_PATH = join(PACKAGE_ROOT_PATH, 'src/client/theme');

export const THEME_ISLANDS_PATH = join(
  PACKAGE_ROOT_PATH,
  'src/client/theme/islands.ts'
);

export const TEMP_PATH = 'node_modules/.island';

export const DIST_PATH = 'dist';

export const SERVER_OUTPUT_PATH = join(TEMP_PATH, 'ssr', 'ssr-entry.mjs');

export const ROUTE_PATH = join(TEMP_PATH, 'routes.tsx');

export const DEFAULT_HTML_PATH = join(PACKAGE_ROOT_PATH, 'template.html');

export const MASK_SPLITTER = '!!ISLAND!!';

export const DEFAULT_EXTERNALS = [
  'react',
  'react-dom',
  'react-dom/server',
  'react-dom/client'
];
