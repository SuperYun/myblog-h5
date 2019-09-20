import Vue from 'vue'

const Mixin= {
  data () {
    return {
    	// 静态资源调用
    	ossUri: process.env.ossUri || '/'
    }
  }
}

Vue.mixin(Mixin);
