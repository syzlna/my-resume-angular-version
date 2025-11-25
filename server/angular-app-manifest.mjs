
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://syzlna.github.io/my-resume-angular-version/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-resume-angular-version"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular-version/hobbies"
  },
  {
    "renderMode": 2,
    "route": "/my-resume-angular-version/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-resume-angular-version",
    "route": "/my-resume-angular-version/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 770, hash: '67b7dfdd326f1e19934befcd359b9ae28e0c673e5900851706b2fbafad74f918', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1003, hash: 'fd2224f332084ff5863830f8e002ae53722473ba3be4821298208f2195392baa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3168, hash: 'b8a36a05ddc28cd1a1e8431db626ded6cfb9e32429cd60f6415b27fb0b848514', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'hobbies/index.html': {size: 3011, hash: '19d459eb94d74841d9afd52732e4a6533fe6b495178cb3e0f3aea42d403426c0', text: () => import('./assets-chunks/hobbies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 4864, hash: '41cb0ab727dc49a278f34d8813029e16508b740244aa045cc068ee92805e684f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5KS6MTKW.css': {size: 1025, hash: 'g7c/TlUftko', text: () => import('./assets-chunks/styles-5KS6MTKW_css.mjs').then(m => m.default)}
  },
};
