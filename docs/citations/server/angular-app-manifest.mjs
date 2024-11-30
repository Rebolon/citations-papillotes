
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4299, hash: '4596ad17db417f406416405bbbbc1df4a40710aa36124060e7f583a3682658be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 3181, hash: 'aaf16e5ddc5a873a7cddcd2756306d3b06f1595be4d21914f85c223566e6d1b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-ZFFCLQVE.css', {size: 8750, hash: 'DIqrMPV3LYE', text: () => import('./assets-chunks/styles-ZFFCLQVE_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
