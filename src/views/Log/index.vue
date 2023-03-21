<!--  -->
<template>
  <div class="stu">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="日志"
        name="first"
      >
        <div class="nav">
          <form class="left">
            认证年份：
            <el-date-picker
              v-model="manageform.time"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            />
            学校名称：
            <el-select
              v-model="manageform.schoolName"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in stu_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            入学年份：
            <el-date-picker
              v-model="manageform.addyear"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            />
            性别：
            <el-select
              v-model="manageform.sex"
              class="size"
              placeholder="请选择"
            >
              <el-option
                label="男"
                value="1"
              />
              <el-option
                label="女"
                value="0"
              />
            </el-select>
            姓名：
            <el-input
              v-model="manageform.name"
              class="size"
              size="mini"
              placeholder="请输入内容"
            />
            <el-button
              size="mini"
              type="primary"
              plain
              @click="student_one_select()"
            >
              查询
            </el-button>
            <el-button
              size="mini"
              plain
              @click="clear()"
            >
              重置
            </el-button>
          </form>
          <div class="right">
            <el-button
              id="del_btn"
              size="mini"
              type="danger"
              @click="table_delet()"
            >
              删除
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="table_xlsx()"
            >
              导出
            </el-button>
          </div>
        </div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          empty-text="数据为空!!!"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column
            prop="username"
            label="学校名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="operation"
            label="院系名称"
          />
          <el-table-column
            prop="times"
            label="入学年份"
          />
          <el-table-column
            prop="method"
            label="请求方法"
          />
          <el-table-column
            prop="params"
            label="请求参数"
          />
          <el-table-column
            prop="ip"
            label="ip地址"
          />
          <el-table-column
            prop="createTime"
            label="操作时间"
          />
        </el-table>
        <el-pagination
          background
          :page-size="page.size"
          :pager-count="10"
          layout="prev, pager, next"
          :total="page.count"
          @current-change="handleCurrentChange"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { student_one_select, student_delte, student_false_select, student_update, student_insert } from '@/api/student'
import { getLog } from '@/api/log'
import { export_json_to_excel } from '@/vendor/Export2Excel'
import XLSX from 'xlsx'
export default {
  components: { },
  data() {
    // 这里存放数据
    return {
      wqeqe: [],
      ids: [],
      activeName: 'first',
      tableData: [],
      multipleSelection: [],
      input: '',
      manageform: {
        name: '',
        schoolName: '',
        sex: '',
        addyear: '',
        time: ''
      },
      stu_options: [],
      value: '',
      page: {
        curr: 1,
        size: 10,
        count: 0
      },
      // 已经选择的数据，在右边渲染
      selectedAccount: []
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
  mounted() {
    // this.tableData.forEach(item => {
    //   console.log(item)
    // })
    // console.log()
  },
  // 方法集合
  methods: {
    handleClick(tab, event) {
      console.log(tab)
      tab.index === '0' ? this.tableList() : this.tablefalseList()
      // console.log(new Date())
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    async tableList() {
      const res = await getLog(this.page)
      console.log(res)
      this.tableData = res.data
      if (res.code < 200) {
        this.page.count = res.code
      }
      res.data.forEach(item => {
        console.log(item.schoolName)
        this.stu_options.push(item.schoolName)
      })
      console.log()
    },
    async tablefalseList() {
      const res = await student_false_select(this.page)
      console.log(res)
      this.tableData = res.data
      if (res.code < 200) {
        this.page.count = res.code
      }
      res.data.forEach(item => {
        console.log(item.schoolName)
        this.stu_options.push(item.schoolName)
      })
      console.log()
    },
    async student_one_select() {
      const restable = await student_one_select(this.manageform)
      console.log(restable)
      this.tableData = restable.data
      this.page = {
        curr: 1,
        size: 10,
        count: 1
      }
    },
    clear() {
      this.manageform = {
        name: '',
        schoolName: '',
        sex: '',
        addyear: '',
        time: ''
      }
    },
    async delete_id(e) {
      this.ids.push(e)
      const res = await student_delte({ 'ids': this.ids })
      this.$message({
        type: 'success',
        message: res
      })
      this.ids = []
      this.tableList()
    },
    handleCurrentChange(val) {
      this.page.curr = val
      this.tableList()
    },
    table_delet() {
      this.multipleSelection.forEach(async item => {
        this.ids.push(item.id)
        const res = await student_delte({ 'ids': this.ids })
        this.$message({
          type: 'success',
          message: res
        })
        this.ids = []
        this.tableList()
      })
    },
    async switchChange(e) {
      console.log(e)
      const res = await student_update(e)
      if (res === '修改成功') {
        this.$message({
          type: 'success',
          message: res
        })
        this.tablefalseList()
      } else {
        this.$message({
          type: 'error',
          message: res
        })
      }
    },
    handleExport() {
      window.open('http://rrjgiz15d.hn-bkt.clouddn.com/%E5%AD%A6%E6%A0%A1%E5%AD%A6%E7%94%9F%E8%AE%A4%E8%AF%81%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx')
    },
    table_xlsx() {
      var tHeader = ['学校名称', '院系名称', '入学年份', '班级', '学号', '姓名', '性别', '手机号', '认证状态', '认证时间']
      var filterVal = ['schoolName', 'department', 'addyear', 'stuclass', 'stuNumber', 'name', 'sex', 'phone', 'state', 'time']
      var filename = '学生信息表'
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
    },
    upload(file, fileList) {
      console.log(file, 'file')
      console.log(fileList, 'fileList')
      const files = { 0: file.raw }// 取到File
      this.readExcel(files)
    },
    readExcel(files) { // 表格导入
      // var that = this
      console.log(files)
      if (files.length <= 0) { // 如果没有文件名
        return false
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error('上传格式不正确，请上传xls或者xlsx格式')
        return false
      }

      const fileReader = new FileReader()
      fileReader.onload = async(ev) => {
        try {
          const data = ev.target.result
          const workbook = XLSX.read(data, {
            type: 'binary'
          })
          const wsname = workbook.SheetNames[0]// 取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])// 生成json表格内容
          ws.splice(0, 1)
          const newws = JSON.parse(JSON.stringify(ws)
            .replace(/学校名称/g, 'schoolName')
            .replace(/院系名称/g, 'department')
            .replace(/入学年份/g, 'addyear')
            .replace(/班级/g, 'stuclass')
            .replace(/学号/g, 'stuNumber')
            .replace(/姓名/g, 'name')
            .replace(/性别/g, 'sex')
            .replace(/女/g, '1')
            .replace(/男/g, '0'))
          const newwss = newws.map(item => {
            return { ...item, 'id': Date.now().toString(), 'state': '1' }
          })
          console.log(newwss, 'ws是表格里的数据，且是json格式')
          const res = await student_insert(newwss)
          if (res === '添加成功') {
            this.tablefalseList()
            this.$message({
              type: 'success',
              message: res
            })
          } else {
            this.$message({
              type: 'error',
              message: res
            })
          }
          // this.tabData = ws
          // console.log(this.tabData, 'tabdata')
          // 重写数据
          this.$refs.upload.value = ''
        } catch (e) {
          return false
        }
      }
      fileReader.readAsBinaryString(files[0])
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
    margin-right: 10px;
  }
  .size{
    width: 100px;
    height: 50px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
      width: 185px;
  }
  </style>

