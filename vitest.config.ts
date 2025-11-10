import { mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';
import { defineConfig } from 'vite';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
    },
  }),
);
