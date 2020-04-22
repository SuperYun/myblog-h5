<template>
  <div class="container">
    <div :class="['main', showMain ? 'showMain': '']">
      <!-- <video id="wz-video" class="video-js" controls preload="auto" width="100%" height="99%" muted>
        <source src="http://wz-website-oss.chinaweizheng.com/pc/weizheng-promotional-film.mp4" type='video/mp4'>
      </video> -->
      <h1>没时间搞啊。。。</h1>
      <img src="./img/1.jpg" alt="">
      <img src="./img/3.jpg" alt="">
      <img src="./img/2.jpg" alt="">
      <img src="./img/1.jpg" alt="">
      <img src="./img/3.jpg" alt="">
      <img src="./img/2.jpg" alt="">

      <div class="beianhao">
        <a href="http://www.beian.miit.gov.cn">湘ICP备 19021336号</a>
      </div>
    </div>
  </div>

</template>

<script>
import welcome from '@/components/welcome'
import welcome2 from '@/components/welcome2'
import welcome3 from '@/components/welcome3'

export default {
  layout: 'self',
  components: {},
  data() {
    return {
      showMain: false
    }
  },
  asyncData() {
    return {}
  },
  created() {},
  mounted() {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        welcome({ message: '3', time: 1000 })
        resolve()
      }, 1300)
    }).then(() => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          welcome2({ message: '2', time: 1000 })
          resolve()
        }, 1300)
      }).then(() => {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            welcome3({ message: '1', time: 1000 })
            resolve()
          }, 1300)
        })
      })
    })
    setTimeout(() => {
      this.showMain = true
    }, 5000)
  },
  validate({ params }) {
    console.log('+++++++++++', params)
    return true
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: #7f828b;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  img{
    width: 300px;
    height: 410px;
  }
  .beianhao {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-bottom: 8px;
    a {
     text-decoration: none;
    }
  }
  .main {
    // background-color: #000;
    width: 100%;
    height: 100%;
    transform: translate(100%, 0);
    transition: all 2s;
  }
  .showMain {
    transform: translate(0, 0);
  }
}
</style>
