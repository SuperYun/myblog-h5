<template>
  <div id="welcome2" class="welcome2">
    <span class="span">{{message}}</span>
  </div>
</template>
<script>
  export default {
    name: 'welcome',
    asyncData () {
      return {
      }
    },
    data () {
      return{
        message: ''
      }
    },
    created () {},
    mounted () {
      setTimeout(() => {
        document.getElementById("welcome2").remove()
      }, 1300)
    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
  @keyframes font {
    from {
      font-size: 90vh;
    }
    to {
      font-size: 13vh;
    }
  }
  .welcome2 {
    position: fixed;
    top:0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #7f828b;
    display: flex;
    justify-content: center;
    align-items: center;
    .span{
      font-size: 15vh;
      font-family: inherit;
      font-weight: bolder;
      animation: font 1s;
    }
  }
</style>
