
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4299, hash: 'bad9f08d32072a2c3783eb90d386219f5c6a4561997f2c62a80ff178f665d14d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 3181, hash: 'c2229826f0a06058a62c821a0daa5f7beff9b2834655c50583befb8480726a6b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-ZFFCLQVE.css', {size: 8750, hash: 'DIqrMPV3LYE', text: () => import('./assets-chunks/styles-ZFFCLQVE_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
