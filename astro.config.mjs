import { defineConfig } from 'astro/config';

const isGithubPages = process.env.SITE_TARGET === 'github-pages';

export default defineConfig({
  site: isGithubPages ? 'https://nensi2003.github.io' : 'https://jmtradegroup.de',
  base: isGithubPages ? '/JM_trade_group' : '/',
  output: 'static',
});
