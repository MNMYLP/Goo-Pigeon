<!--  -->
<template>
  <div
    class="dashboard"
    style="width: 98%;
    margin: 0;"
  >
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div v-if="value === 'xxx'">
      <p class="title">
        <b>XXX学校各院校在校学生认证情况</b>
      </p>
      <el-table
        :data="tableData"
        style="width: 100%"
        align="center"
      >
        <el-table-column
          prop="date"
          label="院系"
          width="120"
        />
        <el-table-column label="2019级">
          <el-table-column
            prop="name"
            label="总人数"
          />

          <el-table-column
            prop="province"
            label="已认证人数"
          />
          <el-table-column
            prop="city"
            label="未认证人数"
          />
        </el-table-column>
        <el-table-column label="2020级">
          <el-table-column
            prop="name"
            label="总人数"
          />
          <el-table-column
            prop="province"
            label="已认证人数"
          />
          <el-table-column
            prop="city"
            label="未认证人数"
          />
        </el-table-column>
        <el-table-column label="2021级">
          <el-table-column
            prop="name"
            label="总人数"
          />
          <el-table-column
            prop="province"
            label="已认证人数"
          />
          <el-table-column
            prop="city"
            label="未认证人数"
          />
        </el-table-column>
        <el-table-column label="合计">
          <el-table-column
            prop="name"
            label="总人数"
          />
          <el-table-column
            prop="province"
            label="已认证人数"
          />
          <el-table-column
            prop="city"
            label="未认证人数"
          />
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      options: [{
        value: 'xxx',
        label: 'xxx学校'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
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
  mounted() {},
  // 方法集合
  methods: {}
}
</script>
<style scoped>
.title{
  text-align: center;
}
</style>
