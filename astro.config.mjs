import { defineConfig } from 'astro/config';

const isGithubPagesPreview = process.env.SITE_TARGET === 'github-pages';

export default defineConfig({
  site: isGithubPagesPreview ? 'https://nensi2003.github.io' : 'https://jmtradegroup.de',
  base: isGithubPagesPreview ? '/JM_trade_group' : '/',
  output: 'static',
});
