<style>
.chat_box {
  width: 100px;
  height: 200px;
  background-color: blue;
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>

<template>
<div>
  <button></button>
  <div class="chat_box"></div>
</div>
</template>

<script>

export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      config: {
      },
    }
  },

  computed: {
  },

  created() {
  },
}
</script>
