<!--  -->
<template>
  <div
    class="run"
    style="width: 98%;
    margin: 0 auto;"
  >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="学生数据" name="first">
        <div>
          <Studata />
        </div>
      </el-tab-pane>
      <el-tab-pane label="跑步明细" name="second">
        <div>
          <Details />
        </div>
      </el-tab-pane>
      <el-tab-pane label="学校院系概况" name="third">
        <Department />
      </el-tab-pane>
      <el-tab-pane label="成绩分布分析" name="fourth">
        <charts />
      </el-tab-pane>
      <el-tab-pane label="有效次数分析" name="cishu">
        <analyse />
      </el-tab-pane>
      <el-tab-pane label="跑步评分分析" name="run">
        <run />
      </el-tab-pane>
      <el-tab-pane label="打卡点设置" name="daka">
        <clock />
      </el-tab-pane>
      <el-tab-pane label="跑步规则设置" name="runguize">
        <rules />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Studata from '@/views/run/component/data.vue'
import Details from '@/views/run/component/details.vue'
import Department from '@/views/run/component/department.vue'
import charts from '@/views/run/component/charts.vue'
import analyse from '@/views/run/component/analyse.vue'
import run from '@/views/run/component/run.vue'
import clock from '@/views/run/component/clock.vue'
import rules from '@/views/run/component/rules.vue'
export default {
  components: {
    Studata, Details, Department, charts, analyse, run, clock, rules
  },
  data() {
    // 这里存放数据
    return {
      activeName: 'first'
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  mounted() {
  },
  // 方法集合
  methods: {
    handleClick(tab, Event) {
      console.log(tab, Event)
    }
  }
}
</script>
<style scoped>
.el-drawer.rtl {
    right: 0;
    width: 50%;
}
</style>
