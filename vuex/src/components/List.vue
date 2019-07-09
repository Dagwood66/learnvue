<template>
  <div>
    <h1>列表</h1>
    <div>
      <button type="button" @click="addItem">添加</button>
    </div>
    <ul>
      <li v-for="item in list" v-bind:key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        list: []
      }
    },
    mounted: function () {
      for (let i = 0; i < 10; i++) {
        this.list.push({
          id: i,
          name: "name" + i
        });
      }
    },
    methods: {
      addItem: function () {
        this.$store.commit("updateIsAdd", true);
      }
    }
  }
</script>

<style scoped>

</style>
