import { defineConfig } from "vite";

import path from 'node:path';
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [react(), svgr(), dts({ insertTypesEntry: true, exclude: ["**/*.stories.ts", "**/*.test.tsx"] })],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ugly-ui',
      fileName: (format) => `ugly-ui.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM', 'styled-components': 'styled-components' } },
    }
  },
})
