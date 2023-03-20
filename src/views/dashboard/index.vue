<!--  -->
<template>
  <div
    class="dashboard"
    style="width: 98%;
    margin: 0;"
  >
    <el-select
      v-model="value"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.id"
        :label="item.selectName"
        :value="item.selectValue"
      />
    </el-select>
    <div v-if="value === 'school'">
      <p class="title">
        <b>学校各院校在校学生认证情况</b>
      </p>
      <!-- :operates="operates" @postArr="postArr" -->
      <tableTree
        :col="column1"
        :table-data="tableData"
      />
      <el-pagination
        background
        :page-size="page.size"
        :pager-count="10"
        layout="prev, pager, next"
        :total="page.count"
        @current-change="handleCurrentChange"
      />
    </div>
    <div v-if="value === '选项2'">
      <p class="title">
        <b>XXX学校各院校在校学生认证情况11111</b>
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
        <el-table-column label="2022级">
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
    <div v-if="value === 'run_video'">
      <!-- <h2 style="text-align: center;">校园运动宣讲视频</h2> -->
      <Video />
    </div>
  </div>
</template>

<script>
import Video from '@/components/video/index.vue'
import { dashboard_select, dashboard_table } from '@/api/dashboard'
import tableTree from '@/components/table-tree'
import { column1 } from '@/components/table-tree/data'
export default {
  components: { Video, tableTree },
  data() {
    return {
      column1,
      options: [],
      value: 'run_video',
      tableData: [],
      page: {
        curr: 1,
        size: 10,
        count: 0
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.selectList()
    this.tableList()
  },
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
  methods: {
    // postArr(row) {
    //   this.$message({
    //     type: 'success',
    //     message: '修改成功!'
    //   })
    // },
    // deleteRole(row) {
    //   this.$message({
    //     type: 'success',
    //     message: '删除成功!'
    //   })
    // },
    // editRole(row) {
    //   this.$message({
    //     type: 'success',
    //     message: '编辑成功!'
    //   })
    // },
    async selectList() {
      try {
        const res = await dashboard_select()
        console.log(res.data)
        this.options = res.data
      } catch (error) {
        this.$message.error(error)
      }
    },
    async tableList() {
      try {
        const res = await dashboard_table(this.page)
        // console.log(res.data)
        this.tableData = res.data
        if (res.code < 200) {
          this.page.count = res.code
        }
        const lwt = {
          'id': '213',
          'data1': '合计',
          'sales1': 0,
          'sales2': 0,
          'sales3': 0,
          'sales11': 0,
          'sales22': 0,
          'sales33': 0,
          'sales111': 0,
          'sales222': 0,
          'sales333': 0,
          'sales1111': 0,
          'sales2222': 0,
          'sales3333': 0,
          'sales11111': 0,
          'sales22222': 0,
          'sales33333': 0
        }
        this.tableData.forEach(item => {
          lwt.sales1 += item.sales1
          lwt.sales2 += item.sales2
          lwt.sales3 += item.sales3
          lwt.sales11 += item.sales11
          lwt.sales22 += item.sales22
          lwt.sales33 += item.sales33
          lwt.sales111 += item.sales111
          lwt.sales222 += item.sales222
          lwt.sales333 += item.sales333
          lwt.sales1111 += item.sales1111
          lwt.sales2222 += item.sales2222
          lwt.sales3333 += item.sales3333
          lwt.sales11111 += item.sales11111
          lwt.sales22222 += item.sales22222
          lwt.sales33333 += item.sales33333
        })
        this.tableData.push(lwt)
        this.tableData = this.tableData.map(item => {
          return { ...item,
            sales_sum: item.sales1 + item.sales11 + item.sales111 + item.sales1111 + item.sales11111,
            sales_sum_certified: item.sales2 + item.sales22 + item.sales222 + item.sales2222 + item.sales22222,
            sales_sum_no_certified: item.sales3 + item.sales33 + item.sales333 + item.sales3333 + item.sales33333 }
        })
      } catch (error) {
        this.$message.error(error)
      }
    },
    handleCurrentChange(val) {
      this.page.curr = val
      this.tableList()
    }
  }
}
</script>
<style scoped>
.title{
  text-align: center;
}
</style>
