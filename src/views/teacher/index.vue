<!--  -->
<template>
  <div class="stu">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="教师管理"
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
            prop="schoolName"
            label="学校名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="department"
            label="院系机构"
          />
          <el-table-column
            prop="addyear"
            label="入学年份"
          />
          <el-table-column
            prop="stuNumber"
            label="工号"
          />
          <el-table-column
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="sex"
            label="性别"
          >
            <template v-slot="scope">
              {{ scope.row.sex === '0' ? "女" : "男" }}
            </template>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号"
          />
          <el-table-column
            prop="state"
            label="认证状态"
          >
            <template v-slot>
              <i
                style="font-size: 2rem;"
                class="el-icon-check"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="认证时间"
          />
          <el-table-column
            prop="operate"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                plain
                @click="delete_id(scope.row.id)"
              >
                删除
              </el-button>
            </template>
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
      </el-tab-pane>
      <el-tab-pane
        label="教师认证"
        name="second"
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
            <!-- <el-button size="mini" type="primary" @click="table_xlsx()">导入</el-button> -->
            <el-upload
              ref="upload"
              class="upload-demo"
              accept=".xls,.xlsx"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="upload"
              :show-file-list="false"
              :auto-upload="false"
            >
              导入
            </el-upload>
            <el-button
              size="mini"
              type="primary"
              @click="handleExport()"
            >
              下载模板
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
            prop="schoolName"
            label="学校名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="department"
            label="院系名称"
          />
          <el-table-column
            prop="addyear"
            label="入学年份"
          />
          <el-table-column
            prop="stuclass"
            label="班级"
          />
          <el-table-column
            prop="stuNumber"
            label="学号"
          />
          <el-table-column
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="sex"
            label="性别"
          >
            <template v-slot="scope">
              {{ scope.row.sex === '0' ? "女" : "男" }}
            </template>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号"
          />
          <el-table-column
            prop="state"
            label="认证状态"
          >
            <template v-slot="scope">
              <el-switch
                v-model="scope.row.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="switchChange(scope.row.id)"
              />
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="认证时间"
          />
          <el-table-column
            prop="operate"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                plain
                @click="delete_id(scope.row.id)"
              >
                删除
              </el-button>
            </template>
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { student_select, student_one_select, student_delte, student_false_select, student_update, student_insert } from '@/api/teacher'
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
      const res = await student_select(this.page)
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
      window.open('https://i21.lanzoug.com:446/03111200105566262bb/2023/03/11/ad3cdad59dc6a0e913c889ba9f9bcd5d.xlsx?st=dXKIcbpPlqAtivU5DupS8Q&e=1678509472&b=VOMArVD2AuBSkwTNA7cHvFKmWeMEhAuiB7wLp13yV3sHLQxgUCNZJA_c_c&fi=105566262&pid=58-17-66-19&up=2&mp=0&co=1')
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
