<template>
  <div class="home">
    <div class="main_navbar">
      <router-link to="/home/related">
        <div class="main_navbar_item">
          个性推荐
          <p></p>
        </div>
      </router-link>

      <router-link to="/home/playlist">
        歌单
        <div class="main_navbar_item">
          <p></p>
        </div>
      </router-link>

      <router-link to="/home/dj">
        主播电台
        <div class="main_navbar_item">
          <p></p>
        </div>
      </router-link>

      <router-link to="/home/toplist">
        排行榜
        <div class="main_navbar_item">
          <p></p>
        </div>
      </router-link>

      <router-link to="/home/artist">
        歌手
        <div class="main_navbar_item">
          <p></p>
        </div>
      </router-link>
      <router-link to="/home/newsong">
        最新音乐
        <div class="main_navbar_item">
          <p></p>
        </div>
      </router-link>
    </div>
    <div>
      home
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {}
</script>

<style scoped>
.main_navbar {
  display: flex;
}
.main_navbar a {
  font: 18px/40px "微软雅黑";
  color: #000;
  text-align: center;
  margin-right: 20px;
}
.main_navbar .router-link-active {
  font-size: 22px;
  font-weight: bold;
}
.router-link-active p {
  max-width: 80%;
  border-bottom: 3px solid #dd001b;
  margin: 0 auto;
}
</style>