import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 注册并实现 Service Worker
// if ('serviceWorker' in navigator) {


//   // 实现 Service Worker
//   navigator.serviceWorker.addEventListener('fetch', function (event) {
//     const url = new URL(event.request.url);
//     console.log('拦截请求:', event.request.url);

//     // 拦截并修改返回内容
//     event.respondWith(
//       (async function () {
//         const response = await fetch(event.request);
//         const contentType = response.headers.get('content-type');
//         console.log('响应类型:', contentType);

//         // 对于其他类型的响应，直接返回原始响应
//         return response;
//       })()
//     );
//   });
// }