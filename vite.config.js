/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      base: '/olimpia/',
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@styles': fileURLToPath(
            new URL('./src/assets/styles', import.meta.url),
          ),
          '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@styles/utils/_vars.scss";
        @import '@styles/mixins/_reset-mixins.scss';
        @import '@styles/mixins/_components-mixins.scss';`,
          },
        },
      },
    };
  } else {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@styles': fileURLToPath(
            new URL('./src/assets/styles', import.meta.url),
          ),
          '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
          '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@styles/utils/_vars.scss";
        @import '@styles/mixins/_reset-mixins.scss';
        @import '@styles/mixins/_components-mixins.scss';`,
          },
        },
      },
    };
  }
});
