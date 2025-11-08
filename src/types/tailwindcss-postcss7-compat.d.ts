declare module '@tailwindcss/postcss7-compat' {
  import { Plugin } from 'postcss';
  const plugin: () => Plugin;
  export = plugin;
}
