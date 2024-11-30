
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 4299, hash: 'e2620f87d49dc01b30fef1527a87d0fbce407eb340a7ce79699e1bbbd0cd8460', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 3181, hash: '2ae9bafbe96275f0114ee61db85af0e4994042c73d10df114558daa2d680e84d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-ZFFCLQVE.css', {size: 8750, hash: 'DIqrMPV3LYE', text: () => import('./assets-chunks/styles-ZFFCLQVE_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
