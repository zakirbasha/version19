
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 515, hash: 'f55638fc2353c540d3f0696cbf0b750db7a98afd61ab34d24ca9f06d5b1f8fbc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1028, hash: '7703249813480d936171a987b02faf65708a7bf4a67e94c3e763e0303715653b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20852, hash: '01dc42d0b1d2d3637fe1050072db48a02d155510bedaa7ce9817ac7a6a8aa07a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
