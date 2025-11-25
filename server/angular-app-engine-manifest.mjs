
export default {
  basePath: 'https://syzlna.github.io/my-resume-angular-version',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
