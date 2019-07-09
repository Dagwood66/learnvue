<template>
  <div class="hello">
    <mt-header title="选择人员">
      <mt-button slot="left" icon="back"></mt-button>
    </mt-header>
    <mt-index-list>
      <mt-index-section v-for="(item,index) in list" :index="item.letter" v-bind:key="index">
        <mt-cell v-for="(obj,index) in item.data" :title="obj.name" v-bind:key="index"
                 @click.native="selectItem(obj)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import getFirstPY from "../utils/py"

  export default {
    name: 'HelloWorld',
    data() {
      return {
        arr: [],
        list: [],
        value: ""
      }
    },
    mounted: function () {
      this.arr = [{
        name: "啊"
      }, {
        name: "波"
      }, {
        name: "副"
      }, {
        name: "级安守本分看几把上来看"
      }, {
        name: "安守本分看几把上来看"
      }, {
        name: "安守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }, {
        name: "守本分看几把上来看"
      }];

      this.list = this.groupBy(this.arr, "name");
    },
    methods: {
      groupBy: function (arr, keyName) {
        let newArr = [];
        arr.forEach(function (item) {
          let firstPY = getFirstPY(item[keyName]);
          let findObj = newArr.find(function ({letter}) {
            return letter == firstPY;
          });
          if (findObj) {
            findObj.data.push(item);
          } else {
            newArr.push({letter: firstPY, data: [item]})
          }
        });
        return newArr;
      },
      selectItem(item) {
        console.log(item);
      }
    }
  }
</script>

<style scoped>

</style>
