
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/components/home/home.component.ts": [
    "chunk-NKEOTNKR.js",
    "chunk-HHR2LUHR.js"
  ],
  "src/app/components/list-cites/list-cites.component.ts": [
    "chunk-AKZJRJKX.js",
    "chunk-3NCNARNJ.js",
    "chunk-HHR2LUHR.js"
  ],
  "src/app/components/list-authors/list-authors.component.ts": [
    "chunk-U3UJAD3I.js",
    "chunk-3NCNARNJ.js",
    "chunk-HHR2LUHR.js"
  ],
  "src/app/components/list-cites-by-authors/list-cites-by-authors.component.ts": [
    "chunk-NOFH3SHK.js",
    "chunk-3NCNARNJ.js"
  ],
  "src/app/components/random/random.component.ts": [
    "chunk-P5LKB6JI.js",
    "chunk-HHR2LUHR.js"
  ],
  "src/app/components/pageNotFound/page-not-found.component.ts": [
    "chunk-B33Q45NB.js"
  ]
},
  assets: {
    'index.csr.html': {size: 4343, hash: '2ce450edc5babb6647578ff1de700f0f8b2b583cdae0b06a4986b1d046962016', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3181, hash: 'aa5351171705ef4953a2afe1db31a90e6603982b0e34d47ade68517d37eb8461', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DCLCEWXX.css': {size: 8905, hash: 'DMmkLeYjqHI', text: () => import('./assets-chunks/styles-DCLCEWXX_css.mjs').then(m => m.default)}
  },
};
