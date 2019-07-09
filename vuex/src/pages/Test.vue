<template>
  <div>
    <div>
      {{this.$store.state.count}}
      {{count}}
    </div>
    <div>
      {{this.$store.getters.doneTodos}}
      {{doneTodos}}
    </div>
    <div>
      {{this.$store.getters.doneTodosCount}}
      {{doneTodosCount}}
    </div>
    <div>
      {{this.$store.getters.getTodoById(1)}}
      {{getTodoById(1)}}
    </div>
    <div>
      {{this.$store.getters.getTodoById(2)}}
      {{getTodoById(2)}}
    </div>
    <div>
      {{this.$store.state.test.status}}
      {{this.$store.state.test.item}}
    </div>
    <div>
      {{status}}
      {{item}}
    </div>
    <list v-show="!this.$store.state.isAdd"></list>
    <add v-if="this.$store.state.isAdd"></add>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from "vuex";
  import List from "../components/List.vue";
  import Add from "../components/Add.vue";
  import {TEST_UPDATE_STATUS} from "../store/mutation-types"

  export default {
    components: {
      Add,
      List
    },
    name: 'Test',
    data() {
      return {}
    },
    mounted: function () {
      this.$store.commit('increment');
      this.$store.commit("test/" + TEST_UPDATE_STATUS, {
        status: 1,
        text: "test"
      });
    },
    computed: {
      ...mapState(["count"]),
      ...mapState({}),
      ...mapGetters(["doneTodos", "doneTodosCount", "getTodoById"]),
      ...mapState("test", ["item", "status"]),
    }
//      {
//        count() { 方法一
//          return this.$store.state.count;
//        }
//      }
//      mapState({
//      count: state => state.count, 方法二
//      count: 'count', 方法三
//      count(state) { 方法四
//        return state.count;
//      }
//      })
//      mapState(["count"]) 方法五
  }
</script>

<style scoped>

</style>
