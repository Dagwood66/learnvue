<template>
  <div class="hello">
    <date-input v-if="isShow" v-model="test"></date-input>
    <date-input v-if="isShow" type="datetime" v-model="test"></date-input>
    <date-input v-if="isShow" type="date" v-model="test"></date-input>
    <date-input v-if="isShow" type="time" v-model="test"></date-input>
    {{test}}
  </div>
</template>

<script>
  import DateInput from "./DateInput/DateInput.vue";

  export default {
    components: {DateInput},
    name: 'HelloWorld',
    data() {
      return {
        test: "2018-01-01",
        isShow: false,
      }
    },
    mounted: function () {
      setTimeout(() => {
        this.isShow = true;
      }, 3000)
    }
  }
</script>

<style scoped>
  div {
    margin: 20px;
  }
</style>
