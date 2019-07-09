<template>
  <div class="date-input__content">
    <!--<input-->
      <!--v-bind="$attrs"-->
      <!--class="date-input__input"-->
      <!--ref="dateStrControl"-->
      <!--type="text"-->
      <!--title=""-->
      <!--v-model="showValue"-->
      <!--@focus="handleFocus"/>-->
    <el-input  v-bind="$attrs"
               class="date-input__input"
               ref="dateStrControl"
               type="text"
               title=""
               v-model="showValue"
               @focus="handleFocus"></el-input>
    <mt-datetime-picker
      ref="dateControl"
      :type="type"
      v-model="currentDate"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
  </div>
</template>
<script>
  import DayJs from "dayjs"
  /*
  * 基于mint-ui mt-datetime-picker二次封装
  * 自定义类型
  * 自定义显示格式
  * */
  export default {
    name: "DateInput",
    inheritAttrs: false,
//    model: {
//      prop: "value",
//      event: "input"
//    },
    props: {
      value: String,
      type: {
        type: String,
        "default": "date",
        validator: function (value) {
          return ['datetime', 'date', 'time'].indexOf(value) !== -1
        }
      },
      format: {
        type: String,
        "default": function () {
          if (this.type == "datetime") {
            return "YYYY-MM-DD HH:mm";
          }
          if (this.type == "time") {
            return "HH:mm";
          }
          return "YYYY-MM-DD";
        }
      }
    },
    data: function () {
      return {
        currentDate: this.value,
        showValue: ""
      }
    },
    mounted: function () {
      debugger
      if (this.value) {
        this.showValue = DayJs(this.currentDate).format(this.format);
      } else {
        this.currentDate = DayJs().format("YYYY-MM-DD HH:mm");
      }
    },
    computed: {},
    methods: {
      handleFocus() {
        this.$refs.dateStrControl.blur();
        this.$refs.dateControl.open();
      },
      handleConfirm(date) {
        let dayJs = DayJs(date);
        if (this.type == "time") { // 兼容time类型
          dayJs = DayJs(DayJs().format("YYYY-MM-DD ") + date);
        }
        this.showValue = dayJs.format(this.format);
        this.$emit('input', dayJs.format("YYYY-MM-DD HH:mm:ss"));
      }
    }
  }
</script>

<style>
  .date-input__content {
    display: flex;
    align-items: center;
  }

  .date-input__input {
    flex: 1;
  }
</style>
