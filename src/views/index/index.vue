<template>
  <div class="index">
    <el-container>
      <el-header ref="header">
        <div class="logo">
          <!-- <a href=""></a> -->
        </div>
        <div class="center">
          <div class="goback clearfix">
            <span class="active" href>
              <i class="el-icon-arrow-left fl"></i>
            </span>
            <span href>
              <i class="el-icon-arrow-right fl"></i>
            </span>
          </div>
          <div class="search">
            <input type="text" v-model="input" placeholder="搜索" />
            <i class="el-icon-search icon"></i>
          </div>
          <div class="shibie">
            <i class="el-icon-mic"></i>
          </div>
        </div>
        <div class="right">
          <a class="touxiang" href="#">
            <img src="#" alt />
          </a>
          <div class="con">
            <span>wwwwww</span>
            <i class="el-icon-caret-bottom"></i>
            <span>开通VIP</span>
          </div>
          <div class="otherNav">
            <i class="el-icon-setting"></i>
            <i class="el-icon-menu"></i>
            <i class="el-icon-message"></i>
            <p class="tip">
              <span>99+</span>
            </p>
          </div>
        </div>
      </el-header>
      <el-container class="container">
        <el-aside ref="aside" width="200px">
          <div class="wrap">
            <router-link to="/h">
              <h3 class="pstyle">发现音乐</h3>
            </router-link>
            <!-- <h3>发现音乐</h3> -->
            <ul class="list discover_music">
              <li>视频</li>
              <li>朋友</li>
              <li>直播</li>
              <li>私人FM</li>
            </ul>
            <div class="title">
              <h4 class="pstyle">我的音乐</h4>
            </div>
            <ul class="list my_music">
              <li>
                <i class="el-icon-headset"></i>本地音乐
              </li>
              <li>
                <i class="el-icon-download"></i>下载管理
              </li>
              <li>
                <i class="el-icon-cloudy"></i>我的音乐云盘
              </li>
              <li>
                <i class="el-icon-mic"></i>我的电台
              </li>
              <li>
                <i class="el-icon-star-off"></i>我的收藏
              </li>
            </ul>
            <div class="music_pack create_music">
              <div class="title pstyle clearfix">
                <h4 class="fl" @click="openCreate">
                  创建的歌单
                  <!-- 动态class -->
                  <i v-show="!createShow" class="el-icon-caret-right"></i>
                  <i v-show="createShow" class="el-icon-caret-bottom"></i>
                </h4>
                <p class="fr">
                  <i class="add el-icon-plus"></i>
                </p>
              </div>
              <ul v-show="createShow" class="list new_musicpack">
                <li>
                  <i class="el-icon-headset"></i>本地音乐
                </li>
                <li>
                  <i class="el-icon-headset"></i>下载管理
                </li>
                <li>
                  <i class="el-icon-headset"></i>本地音乐
                </li>
                <li>
                  <i class="el-icon-headset"></i>下载管理
                </li>
              </ul>
            </div>
            <div class="music_pack like_music">
              <div class="title pstyle clearfix">
                <h4 class="fl" @click="openLike">
                  收藏的歌单
                  <!-- 动态class -->
                  <i v-show="!likeShow" class="el-icon-caret-right"></i>
                  <i v-show="likeShow" class="el-icon-caret-bottom"></i>
                </h4>
              </div>
              <!-- <ul class="list new_musicpack">
                <li>
                  <i class="el-icon-headset">本地音乐</i>
                </li>
                <li>
                  <i class="el-icon-headset">下载管理</i>
                </li>
              </ul>-->
            </div>
          </div>
          <div class="slide">
            <div class="slideGray"></div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer>
        <div class="footer_wrap">
          <div class="footer_left">
            <div class="pic">
              <img src alt />
            </div>
            <!-- 放歌名 -->
            <p>believer</p>
            <!-- 喜欢 -->
            <span class="iconfont icon-xihuan"></span>
          </div>
          <div class="footer_center">
            <div class="center_top">
              <!-- 使用动态类名 -->
              <span v-for="(item,index) in playicons" :key="item" @click="changePlayIcon">
                <i v-show="playiconIndex === index" :class="'iconfont' +' '+item"></i>
              </span>
              <div class="play_opera">
                <span class="iconfont icon-diyiyeshouyeshangyishou" @click="prev"></span>
                <p class="play">
                  <span
                    :class="isPaused?'el-icon-video-play playaudio':'el-icon-video-pause playaudio'"
                  ></span>
                </p>
                <span class="iconfont icon-zuihouyiyemoyexiayishou" @click="next"></span>
              </div>
              <span>词</span>
            </div>
            <div class="center_bottom">
              <div class="parentAudio">
                <audio id="audio" src></audio>
              </div>
              <span>{{currentTime === ''?'00:00':currentTime}}</span>
              <div class="progress">
                <div class="progresscover"></div>
                <div class="progredss_slide"></div>
              </div>
              <span>{{duration}}</span>
            </div>
          </div>
          <div class="footer_right">
            <span>标准</span>
            <div class="volumn">
              <span v-if="volume === 0" class="iconfont icon-jingyin"></span>
              <span v-else-if="volume <= 0.5" class="iconfont icon-yinliangxiao"></span>
              <span v-else class="iconfont icon-yinliangda"></span>
              <div class="volu-progress">
                <div class="volu-progress-cover"></div>
                <div class="volu-progress-slide"></div>
              </div>
            </div>
            <span>播放列表</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import fn from "@/utils/utilsFunction";
import { Vue, Component, Watch } from "vue-property-decorator";
let believer = require("../../assets/audio/believer.mp3");
let womendouyiyang = require("../../assets/audio/我们都一样.mp3");
let yasugongshang = require("../../assets/audio/雅俗共赏.mp3");
let youhebuke = require("../../assets/audio/有何不可.mp3");
let zhaomo = require("../../assets/audio/着魔.mp3");
let zhiyaopingfan = require("../../assets/audio/只要平凡.mp3");
let zuimeidetaiyang = require("../../assets/audio/最美的太阳.mp3");
@Component({})
export default class Index extends Vue {
  //data
  input: string = "";
  createShow: boolean = false;
  likeShow: boolean = false;
  spanTop: number = 0;
  playicons: Array<string> = [
    "icon-liebiaozhankai",
    "icon-M_xunhuan",
    "icon-hanhan-01-01",
    "icon-xunhuan",
  ];
  playiconIndex: number = 0;
  //音量
  volume: number = 0.5;

  //音乐模拟
  musics: Array<any> = [
    believer,
    womendouyiyang,
    yasugongshang,
    youhebuke,
    zhaomo,
    zhiyaopingfan,
    zuimeidetaiyang,
  ];
  currentMusicIndex: number = 0;

  //判断音乐是否结束
  ended: boolean = false;

  //音乐时长
  duration: string = "";
  currentTime: string = "";

  //音乐
  isPaused: boolean = true;
  playaudio: any = null;
  audio: any = null;
  progress: any = null;
  progresscover: any = null;
  progredss_slide: any = null;

  //侧边栏的滚动条
  slideH: any = null;
  sildeGray: any = null;
  aside: any = null;
  asideH: number = 0;
  sideWrap: any = null;

  //音量
  voluProgress: any = null;
  voluProgressCover: any = null;
  voluProgressSlide: any = null;

  //当前路由
  activeIndex: number = 0;

  mounted() {
    this.init();
  }

  //watch
  @Watch("currentMusic")
  currentmusicplay() {
    console.log("改变了");
    //赋值
    this.audio.load();
  }

  init() {
    //获取元素
    this.slideH = document.querySelector(".slide");
    this.sildeGray = document.querySelector(".slideGray");
    this.aside = this.$refs.aside as any;
    this.asideH = this.aside.$el.offsetHeight;
    this.sideWrap = document.querySelector(".wrap");

    this.playaudio = document.querySelector(".playaudio");
    this.audio = document.querySelector("audio");
    this.progress = document.querySelector(".progress");
    this.progresscover = document.querySelector(".progresscover");
    this.progredss_slide = document.querySelector(".progredss_slide");

    this.voluProgress = document.querySelector(".volu-progress");
    this.voluProgressCover = document.querySelector(".volu-progress-cover");
    this.voluProgressSlide = document.querySelector(".volu-progress-slide");
    //添加事件
    this.useFunction();
  }

  useFunction() {
    this.slideLine();
    this.slideLineScroll();
    if (this.audio) {
      this.audio.src = this.musics[this.currentMusicIndex];
      this.play();
      this.playTimeUpdata();
      this.getTime();
      this.audio.volume = this.volume;
      //实现音乐的拖拽和点击
      let _this = this;
      fn.progressLine(
        this.progredss_slide,
        this.progresscover,
        this.progress,
        (e: any) => {
          _this.audio.currentTime = this.audio.duration * e;
        }
      );
      fn.playclickProgress(
        this.progredss_slide,
        this.progresscover,
        this.progress,
        (e: any) => {
          _this.audio.currentTime = this.audio.duration * e;
        }
      );

      //实现音量的拖拽和点击
      fn.progressLine(
        this.voluProgressSlide,
        this.voluProgressCover,
        this.voluProgress,
        (e: any) => {
          this.audio.volume = e;
          this.volume = e;
        }
      );
      fn.playclickProgress(
        this.voluProgressSlide,
        this.voluProgressCover,
        this.voluProgress,
        (e: any) => {
          this.audio.volume = e;
          this.volume = e;
        }
      );
    }
  }

  //methods
  openCreate(): void {
    this.createShow = !this.createShow;
  }
  openLike(): void {
    this.likeShow = !this.likeShow;
    // this.slideLine();
  }

  //获取slide的
  //事件
  /**
   * 1. 鼠标按下事件
   * 2. 鼠标移动事件
   * 3. 鼠标抬起事件
   */
  setNodeTop() {
    let minTop = 0,
      maxTop = this.slideH.offsetHeight - this.sildeGray.offsetHeight;
    if (this.spanTop <= minTop) {
      this.spanTop = 0;
    } else if (this.spanTop >= maxTop) {
      this.spanTop = maxTop;
    }
    //将top赋值给slideGray
    this.sildeGray.style.top = this.spanTop + "px";
    //计算比例
    let ratio = Math.abs(
      (this.sideWrap.offsetHeight - this.asideH) /
        (this.sildeGray.offsetHeight - this.slideH.offsetHeight)
    );
    this.sideWrap.style.top = -ratio * this.spanTop + "px";
  }
  slideLine(): void {
    //获取元素
    //获取slide  父元素
    //给sildeGray添加鼠标按下事件
    this.sildeGray.onmousedown = (e: any): void => {
      e = e || window.event;
      // console.log(e);
      let y: any = e.offsetY;
      //再给文档添加鼠标移动事件
      document.onmousemove = (e: any): void => {
        e = e || window.event;
        e.preventDefault();
        //计算top值
        let top: number = e.clientY - y - 60;
        this.spanTop = top;
        //判断
        //临界点  top = 0
        this.setNodeTop();
      };
      //鼠标抬起事件
      document.onmouseup = function (e: any) {
        //清除事件
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
  //滚轮事件
  slideLineScroll(): void {
    this.sideWrap.onmousewheel = (e: any) => {
      e.preventDefault();
      //判断滚轮的方向
      if (this.wheelEvent(e) > 0) {
        //在原来的基础上减去5
        this.spanTop -= 30;
      } else {
        //在原来的基础上加上5
        this.spanTop += 30;
      }
      //设置
      this.setNodeTop();
      //赋值
    };
  }
  //判断滚轮的方向
  wheelEvent(e: any): number {
    if (e.wheelDelta) {
      return e.wheelDelta;
    } else {
      return e.detail * 40;
    }
  }

  //点击播放按钮播放音乐
  play() {
    this.playaudio.onclick = (e: any) => {
      //获取音乐的总时长
      if (this.audio.paused) {
        //为true的时候暂停播放  播放
        this.audio.play();
      } else {
        //当为false的时候 正在播放  暂停
        this.audio.pause();
      }
      //设置isPaused为audio.paused
      this.isPaused = this.audio.paused;
    };
  }
  //时间更新的时候
  playTimeUpdata() {
    //添加
    this.audio.ontimeupdate = (e: any) => {
      this.currentTime = this.timeOpera(e.target.currentTime);
      //根据时长让进度条改变
      let ratio = e.target.currentTime / e.target.duration;
      let left = ratio * this.progress.offsetWidth;
      // 根据时长的变化改变进度条
      this.progresscover.style.width = left + "px";
      this.progredss_slide.style.left = left + "px";
      console.log(this.currentMusicIndex);
      if (this.audio.ended) {
        //为true的话
        this.isPaused = true;
        console.log("触发", this.currentMusicIndex);
        if (this.playiconIndex === 3) {
          this.ended = true;
          this.isPaused = false;
          this.randomPlay();
        } else if (this.playiconIndex === 1) {
          //顺序播放
          this.next();
          this.isPaused = false;
        }
      }
    };
  }

  //时间处理
  getTime() {
    this.audio.onloadedmetadata = (e: any) => {
      // console.log(e.target.duration);
      //时间处理
      this.duration = this.timeOpera(e.target.duration);
    };
  }
  timeOpera(time: any) {
    let min = Math.floor(time / 60)
      .toString()
      .padStart(2, "0"); //分
    let s = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${s}`;
  }

  //changePlayIcon
  changePlayIcon() {
    this.audio.loop = false;
    this.playiconIndex++;
    switch (this.playiconIndex) {
      case 0:
        //顺序播放
        break;
      case 1:
        //循环播放
        break;
      case 2:
        //单曲循环
        this.audio.loop = true;
        break;
      case 3:
        //随机播放
        break;
      default:
        this.playiconIndex = 0;
        break;
    }
  }

  //随机播放
  randomPlay() {
    console.log("调用");
    let num = parseInt(Math.random() * this.musics.length + "");
    this.currentMusicIndex = num;
    if (this.ended) {
      this.audio.src = this.musics[this.currentMusicIndex];
      this.audio.play();
    }
  }

  //上一首
  prev() {
    console.log("你点击了上一首");
    //让音乐重新加载
    this.audio.pause();
    this.currentMusicIndex--;
    if (this.currentMusicIndex <= 0) {
      this.currentMusicIndex = this.musics.length - 1;
    }
    console.log(this.currentMusicIndex);
    this.audio.src = this.musics[this.currentMusicIndex];
    //如果当前音乐处于暂停状态那么  如果不处于暂停状态  就让isPaused为false
    if (!this.isPaused) {
      this.audio.play();
    } else {
      this.isPaused = true;
    }
  }
  //下一首
  next() {
    //让音乐重新加载
    this.audio.pause();
    this.currentMusicIndex++;
    if (this.currentMusicIndex > this.musics.length - 1) {
      this.currentMusicIndex = 0;
    }
    this.audio.src = this.musics[this.currentMusicIndex];
    //如果当前音乐处于暂停状态那么  如果不处于暂停状态  就让isPaused为false
    if (!this.isPaused) {
      this.audio.play();
    } else {
      this.isPaused = true;
    }
  }

  //音量的回调
  volumCallback() {}
}
</script>

<style scoped>

.volumn {
  display: flex;
  align-items: center;
}
.volu-progress {
  margin: 0 10px;
  position: relative;
  width: 100px;
  height: 6px;
  background: #ccc;
  border-radius: 10px;
}
.volu-progress .volu-progress-cover {
  height: 100%;
  width: 50%;
  background: red;
}
.volu-progress-slide {
  position: absolute;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-footer .footer_left {
  display: flex;
  width: 400px;
  padding-left: 20px;
  box-sizing: border-box;
}
.el-footer .footer_left .pic {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: pink;
}
.el-footer .footer_center {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer_center .center_top {
  display: flex;
  width: 180px;
  margin: 0 auto;
}
.footer_center .center_top .play_opera {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.footer_center .center_top span {
  font: 15px/30px "微软雅黑";
}
.footer_center .center_top .play_opera span {
  font: 26px/30px "微软雅黑";
}
.footer_center .center_top .play {
  width: 30px;
  height: 30px;
  /* background-color: #ccc; */
  border-radius: 100%;
  text-align: center;
}
.footer_center .center_bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer_center .progress {
  position: relative;
  width: 400px;
  height: 6px;
  /* height: 3px; */
  background: #ccc;
  border-radius: 2px;
  margin: 0 6px;
  cursor: pointer;
  border-radius: 5px;
}
/* .footer_center .progress:hover {
  transition: all 0.3s linear;
  height: 6px;
}
.footer_center .progress:hover .progredss_slide {
  display: block;
} */
.progresscover {
  width: 0;
  height: 100%;
  background: red;
}
.footer_center .progress .progredss_slide {
  /* display: none; */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  line-height: 0;
  border-radius: 100%;
  background: red;
}
.el-footer .footer_right {
  width: 400px;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
}
.el-aside {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.container {
  position: relative;
  max-height: 537px;
}
.wrap {
  position: absolute;
  padding: 10px;
  padding-right: 15px;
}
.pstyle {
  padding: 3px 10px;
  border-radius: 3px;
  line-height: 30px;
}
.wrap h3 {
  user-select: none;
  font: bold 17px/30px "微软雅黑";
  color: #444;
  background: #f6f6f7;
}
.wrap .list li {
  color: #555;
  font: 15px/30px "微软雅黑";
  padding: 3px 10px;
  margin-top: 3px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}
.wrap .list li:hover {
  background: #f6f6f7;
  color: black;
}
.wrap h4 {
  user-select: none;
  color: #999;
}
.wrap li {
  user-select: none;
  font: 14px/30px "微软雅黑";
}
.wrap li i {
  margin-right: 10px;
}

.wrap .music_pack h4 {
  cursor: pointer;
}
.wrap .new_musicpack {
  font: 14px/30px "微软雅黑";
}
.wrap .new_musicpack i {
  margin-right: 10px;
}
.slide {
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
}
.slide .slideGray {
  position: relative;
  width: 100%;
  height: 380px;
  background: #e1e1e1;
  border-radius: 3px;
  cursor: pointer;
  /* display: none; */
}
.is-vertical {
  height: 100vh;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ec4141;
  line-height: 60px;
}
.logo {
  height: 100%;
  width: 180px;
  background: url("../../assets/images/topbar.png") 0px -5px;
}
.center {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: start;
  margin-left: 100px;
}
.goback {
  text-align: center;
}
.goback span {
  display: block;
  float: left;
  width: 25px;
  height: 25px;
  background: #e13e3e;
  border-radius: 100%;
  margin-right: 5px;
}
.goback .active {
  background: #d93b3b;
}
.goback .active i {
  color: #fff;
}
.goback i {
  color: #e66262;
  font: 10px/25px "微软雅黑";
  transform: translateX(50%);
}
.search {
  position: relative;
  background: #e13e3e;
  width: 200px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  vertical-align: middle;
}
.search input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  text-indent: 30px;
  color: #fff;
}
.search input::placeholder {
  color: #e66262;
}
.search .icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #fff;
}
.shibie {
  width: 30px;
  height: 30px;
  background: #e13e3e;
  border-radius: 100%;
  line-height: 30px;
  color: rgb(235, 233, 233);
  text-align: center;
  margin-left: 10px;
  cursor: pointer;
}
.right {
  display: flex;
  align-items: center;
}
.right .touxiang {
  display: block;
  width: 30px;
  height: 30px;
  background: #ccc;
  border-radius: 100%;
  margin-right: 10px;
  overflow: hidden;
  cursor: pointer;
}
.right .touxiang img {
  width: 100%;
}
.right .con {
  color: #fff;
  cursor: pointer;
  margin-right: 20px;
}
.right .con span {
  margin: 0 5px;
}
.right .otherNav {
  position: relative;
}
.right .otherNav i {
  color: #fff;
  font: 15px/30px "微软雅黑";
  margin-right: 20px;
  cursor: pointer;
}
.right .otherNav .tip {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-100%);
  background: #fff;
  padding: 1px 2px;
  height: 12px;
  border-radius: 6px;
  font: 12px/12px "Arial 微软雅黑";
  color: #ec4141;
}
.el-aside {
  height: 100vh - 120px;
  background: #fff;
  border-right: 1px solid #e1e1e1;
}
.router {
  padding-top: 20px;
}
.el-footer {
  border-top: 1px solid #e1e1e1;
  background: #f6f6f8;
  padding: 0;
}
.el-footer .footer_wrap {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>