<!--  -->
<template>
  <div
    class="stu"
    style="width: 98%;
    margin: 0;"
  >

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      empty-text="数据为空!!!"
      border
      :default-sort="{prop: 'date', order: 'descending'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        label="新余学校各院系跑步情况"
        width="55"
      >
        <el-table-column
          prop="departmentName"
          sortable
          label="院系"
        >
        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
        </el-table-column>
        <el-table-column
          prop="totalValidity"
          sortable
          label="总有效次数"
        />
        <el-table-column
          prop="totalMiles"
          sortable
          label="总有效里程"
        />
        <el-table-column
          prop="totalNumber"
          sortable
          label="总参与人数"
        />
        <el-table-column
          prop="totalCapital"
          sortable
          label="有效人均次数"
        />
        <el-table-column
          prop="totalMilesCapital"
          sortable
          label="有效人均里程"
        />
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-size="page.size"
      :pager-count="10"
      layout="prev, pager, next"
      :total="page.count"
      @current-change="handleCurrentChange"
    />
    <p class="botoom">默认根据各学院总有效次数从多到小排序</p>
  </div>
</template>

<script>
import { run_clock, run_clock_search, run_clock_delete } from '@/api/run'
import { export_json_to_excel } from '@/vendor/Export2Excel'
export default {
  name: 'StuData',
  components: {},
  data() {
    // 这里存放数据
    return {
      activeName: 'first',
      tableData: [],
      options: [],
      ruleForm: {
        id: '',
        semester: '',
        participants: '',
        courseName: '',
        teacher: '',
        registrationTime: '',
        courseCapacity: '',
        resource: '',
        desc: '',
        textarea: ''
      },
      manageform: {
        departmentName: '',
        enrollmentYear: '',
        termName: '',
        studentName: '',
        gender: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      textarea: '',
      tableData1: [],
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
    handleSelectionChange(e) {
      console.log(e)
    },
    handleCurrentChange(val) {
      this.page.curr = val
      this.tableList()
    },
    async tableList() {
      const res = await run_clock(this.page)
      console.log(res)
      this.tableData = res.data
      if (res.code !== 400 && res.code !== 500) {
        this.page.count = res.code
      }
      this.options = res.data.map(item => {
        return item.departmentName
      })
    },
    async run_table_select() {
      try {
        const res = await run_clock_search(this.manageform)
        this.$message({
          message: '搜索成功',
          type: 'success'
        })
        console.log(res)
        this.tableData = res.data
      } catch (error) {
        this.$message({
          message: '搜索失败',
          type: 'error'
        })
      }
    },
    async delect(id) {
      try {
        const ls = await run_clock_delete(id)
        console.log(ls)
        if (ls.code === 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.tableList()
        }
      } catch (error) {
        this.$message.error(error)
      }
    },
    table_xlsx() {
      var tHeader = ['院系名称', '入学年份', '学期名称', '学号', '姓名', '性别', '有效次数', '有效里程']
      var filterVal = ['departmentName', 'enrollmentYear', 'termName', 'studentId', 'studentName', 'gender', 'validTimes', 'validMileage']
      var filename = '学生运动表'
      var data = this.formatJson(filterVal, this.tableData)
      export_json_to_excel({
        header: tHeader,
        data,
        filename
      })
    },
    formatJson(filterVal, tableData) {
      return tableData.map(v => {
        return filterVal.map(j => {
          return v[j]
        })
      }
      )
    }
  }
}
</script>
<style scoped>
.nav{
  display: flex;
  font-size: 14px;
  justify-content: space-between;
}
.right{
  position: relative;
  left: 94%;
  margin-right: 10px;
}
.size{
  width: 100px;
  height: 50px;
}
.el-form-item {
    margin-bottom: 0px;
}
.el-form-item--medium .el-form-item__content {
    line-height: 20px;
}
p{
  margin: 0 !important;;
}
.title{
    text-align: center;
}
.botoom{
  font-size: 12px;
  color: rgb(144, 147, 153);
  text-align: right;
}
</style>
