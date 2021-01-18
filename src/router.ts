import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => Promise.resolve(import("./views/index/index.vue")),
      children: [
        {
          path: "home",
          component: () => Promise.resolve(import("./views/home/home.vue")),
          children: [
            {
              path: "related",
              component: () => import("@/views/related/related.vue")
            },
            {
              path: "playlist",
              component: () => import("@/views/playlist/playlist.vue")
            },
            {
              path: "newsong",
              component: () => import("./views/newsong/newsong.vue")
            },
            {
              path: "artist",
              component: () => import("./views/artist/artist.vue")
            },
            {
              path: "dj",
              component: () => import("./views/dj/dj.vue")
            },
            {
              path: "toplist",
              component: () => import("./views/toplist/toplist.vue")
            },
          ]
        }
      ]
    }
  ]
})

export default router