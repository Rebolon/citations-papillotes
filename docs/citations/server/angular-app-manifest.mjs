
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/home/home.component.ts": [
    "chunk-3NPK73PV.js",
    "chunk-OSTB4PJW.js"
  ],
  "src/app/components/list-cites/list-cites.component.ts": [
    "chunk-KO64DIUF.js",
    "chunk-VWBF3JJ4.js",
    "chunk-OSTB4PJW.js"
  ],
  "src/app/components/list-authors/list-authors.component.ts": [
    "chunk-EUXEF3DS.js",
    "chunk-VWBF3JJ4.js",
    "chunk-OSTB4PJW.js"
  ],
  "src/app/components/list-cites-by-authors/list-cites-by-authors.component.ts": [
    "chunk-X6BVLXV3.js",
    "chunk-VWBF3JJ4.js"
  ],
  "src/app/components/random/random.component.ts": [
    "chunk-3RYGNIWL.js",
    "chunk-OSTB4PJW.js"
  ],
  "src/app/components/pageNotFound/page-not-found.component.ts": [
    "chunk-X4PAPP5N.js"
  ]
},
  assets: {
    'index.csr.html': {size: 4284, hash: '21c1ff8ef188bc26d8023f109a3b7cb10b3b7fac5d8bb362a66251de312773a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3122, hash: '1bfe0a73da18184f1df002fb2d04b9590d1806c3d05149f432596fcc75258820', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DCLCEWXX.css': {size: 8905, hash: 'DMmkLeYjqHI', text: () => import('./assets-chunks/styles-DCLCEWXX_css.mjs').then(m => m.default)}
  },
};
