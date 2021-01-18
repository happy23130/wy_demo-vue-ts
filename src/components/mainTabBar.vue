<template>
  <div class="mainTabbar">
    <div class="main_navbar">
      <router-link v-for="(item) in routers" :key="item.path" to="/home/related">
        <div class="main_navbar_item">
          个性推荐
          <p></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class MainTabBar extends Vue {
  @Prop()
  routers: Array<object> | undefined;
}
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