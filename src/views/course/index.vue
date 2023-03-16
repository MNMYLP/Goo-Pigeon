<!--  -->
<template>
  <div class="stu">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="课程管理"
        name="first"
      >
        <div class="nav">
          <form class="left">
            学期名称：
            <el-select
              v-model="manageform.semester"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in course_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            授课老师：
            <el-select
              v-model="manageform.teacher"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in course_teacher_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            课程名称：
            <el-input
              v-model="manageform.courseName"
              class="size"
              size="mini"
              placeholder="请输入内容"
            />
            课程状态：
            <el-select
              v-model="manageform.courseStatus"
              class="size"
              placeholder="请选择"
            >
              <el-option
                label="已开课"
                value="1"
              />
              <el-option
                label="已取消"
                value="0"
              />
            </el-select>
            <el-button
              size="mini"
              type="primary"
              plain
              @click="course_one_select()"
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
              @click="isShow = !isShow"
            >
              添加课程
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
            type="index"
            width="55"
          />
          <el-table-column
            prop="semester"
            label="学期名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="courseName"
            label="课程名称"
          />
          <el-table-column
            prop="teacher"
            label="授课老师"
          />
          <el-table-column
            prop="classTime"
            label="上课时间"
          />
          <el-table-column
            prop="admin"
            label="课程管理员"
          />
          <el-table-column
            prop="registrationTime"
            label="报名时间"
          />
          <el-table-column
            prop="participants"
            label="报名人员"
          />
          <el-table-column
            prop="courseCapacity"
            label="课程名额"
          />
          <el-table-column
            prop="registrationNum"
            label="报名人数"
          />
          <el-table-column
            prop="courseStatus"
            label="课程状态"
          />
          <el-table-column
            prop="createdTime"
            label="添加时间"
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
                @click="delect(scope.row.id)"
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
        label="选课明细"
        name="second"
      >
        <div class="nav">
          <form class="left">
            学期名称：
            <el-select
              v-model="manageform.semester"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in course_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            授课老师：
            <el-select
              v-model="manageform.teacher"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in course_teacher_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            课程名称：
            <el-input
              v-model="manageform.courseName"
              class="size"
              size="mini"
              placeholder="请输入内容"
            />
            学生性别：
            <el-select
              v-model="manageform.courseStatus"
              class="size"
              placeholder="请选择"
            >
              <el-option
                label="已开课"
                value="1"
              />
              <el-option
                label="已取消"
                value="0"
              />
            </el-select>
            学生姓名：
            <el-select
              v-model="manageform.courseStatus"
              class="size"
              placeholder="请选择"
            >
              <el-option
                label="已开课"
                value="1"
              />
              <el-option
                label="已取消"
                value="0"
              />
            </el-select>
            <el-button
              size="mini"
              type="primary"
              plain
              @click="course_one_select()"
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
              type="primary"
              @click="table_xlsx()"
            >
              导出
            </el-button>
          </div>
        </div>
        <el-table
          ref="multipleTable"
          :data="student_table"
          tooltip-effect="dark"
          style="width: 100%"
          empty-text="数据为空!!!"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="index"
            width="55"
          />
          <el-table-column
            prop="termName"
            label="学期名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="courseName"
            label="课程名称"
          />
          <el-table-column
            prop="instructorName"
            label="授课老师"
          />
          <el-table-column
            prop="classTime"
            label="上课时间"
          />
          <el-table-column
            prop="enrollmentYear"
            label="入学年份"
          />
          <el-table-column
            prop="facultyName"
            label="院系名称"
          />
          <el-table-column
            prop="studentId"
            label="学号"
          />
          <el-table-column
            prop="studentName"
            label="学生姓名"
          />
          <el-table-column
            prop="gender"
            label="学生性别"
          />
          <el-table-column
            prop="registrationTime"
            label="报名时间"
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
                @click="delect(scope.row.id)"
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
          @current-change="StudenthandleCurrentChange"
        />
      </el-tab-pane>
      <el-tab-pane
        label="选课概况"
        name="name"
      >
        <div class="nav">
          <form class="left">
            学期名称：
            <el-select
              v-model="manageform.semester"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in course_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            授课老师：
            <el-select
              v-model="manageform.teacher"
              class="size"
              placeholder="请选择"
            >
              <el-option
                v-for="(item,index) in course_teacher_options"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
            课程名称：
            <el-input
              v-model="manageform.courseName"
              class="size"
              size="mini"
              placeholder="请输入内容"
            />
            学生性别：
            <el-select
              v-model="manageform.courseStatus"
              class="size"
              placeholder="请选择"
            >
              <el-option
                label="已开课"
                value="1"
              />
              <el-option
                label="已取消"
                value="0"
              />
            </el-select>
            学生姓名：
            <el-select
              v-model="manageform.courseStatus"
              class="size"
              placeholder="请选择"
            >
              <el-option
                label="已开课"
                value="1"
              />
              <el-option
                label="已取消"
                value="0"
              />
            </el-select>
            <el-button
              size="mini"
              type="primary"
              plain
              @click="course_one_select()"
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
              type="primary"
              @click="table_sheet_xlsx()"
            >
              导出
            </el-button>
          </div>
        </div>
        <tableTree
          :col="column1"
          :table-data="table_tree"
        />
        <el-pagination
          background
          :page-size="page.size"
          :pager-count="10"
          layout="prev, pager, next"
          :total="page.count"
          @current-change="SheethandleCurrentChange"
        />
      </el-tab-pane>
    </el-tabs>
    <!-- 弹出层 -->
    <el-drawer
      title="添加课程"
      :visible.sync="isShow"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="学期名称"
          prop="region"
        >
          <el-select
            v-model="ruleForm.semester"
            placeholder="请选择活动区域"
          >
            <el-option
              label="春季学期"
              value="春季学期"
            />
            <el-option
              label="秋季学期"
              value="秋季学期"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="报名人员"
          prop="region"
        >
          <el-input
            v-model="ruleForm.participants"
            placeholder="请选择活动区域"
          />
        </el-form-item>
        <el-form-item
          label="课程名称"
          prop="region"
        >
          <el-select v-model="ruleForm.courseName">
            <el-option
              v-for="(item,index) in tableData"
              :key="index"
              :label="item.courseName"
              :value="item.courseName"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="授课老师"
          prop="region"
        >
          <el-select
            v-model="ruleForm.teacher"
            placeholder="请选择活动区域"
          >
            <el-option
              v-for="(item,index) in tableData"
              :key="index"
              :label="item.teacher"
              :value="item.teacher"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="报名时间"
          required
        >
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.registrationTime"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item
          label="课程时间"
          required
        >
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item
          label="上课时间"
          required
        >
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.classTime"
                value-format="HH:mm"
                placeholder="选择时间"
                style="width: 100%;"
              />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item
          label="课程管理员"
          prop="region"
        >
          <el-select
            v-model="ruleForm.admin"
            placeholder="请选择活动区域"
          >
            <el-option
              v-for="(item,index) in tableData"
              :key="index"
              :label="item.admin"
              :value="item.admin"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="课程名额"
          prop="region"
        >
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item>
          <p style="font-size:13px">
            <b style="font-size:13px">当前学期选课人数：200人；当前学期课程名额：123人</b>
          </p>
        </el-form-item>
        <el-form-item
          label="课程地点"
          prop="type"
        >
          <el-input v-model="value" />
        </el-form-item>
        <el-form-item
          label="课程状态"
          prop="type"
        >
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox
              label="已开课"
              name="type"
            />
            <el-checkbox
              label="已取消"
              name="type"
            />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item
          label="课程图片"
          prop="resource"
        >
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img
              width="100%"
              :src="dialogImageUrl"
              alt=""
            >
          </el-dialog>
        </el-form-item>
        <el-form-item
          label="课程简介"
          prop="desc"
        >
          <el-input
            v-model="ruleForm.textarea"
            type="textarea"
            placeholder="请输入内容"
            maxlength="30"
            show-word-limit
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm()"
          >
            立即创建
          </el-button>
          <el-button @click="resetForm('ruleForm')">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { course_select, course_delte, course_false_select, course_update, course_insert, course_list_select, course_one_select, course_one_insert, course_student_select, course_sheet_select } from '@/api/course'
import { export_json_to_excel } from '@/vendor/Export2Excel'
import XLSX from 'xlsx'
import tableTree from '@/components/table-tree'
import { column1 } from '@/components/table-tree/course_data'
export default {
  components: { tableTree },
  data() {
    // 这里存放数据
    return {
      column1,
      wqeqe: [],
      ids: [],
      activeName: 'first',
      tableData: [],
      multipleSelection: [],
      input: '',
      manageform: {
        semester: '',
        teacher: '',
        courseName: '',
        courseStatus: ''
      },
      course_options: [],
      course_teacher_options: [],
      course_AI_options: [],
      value: '',
      page: {
        curr: 1,
        size: 10,
        count: 0
      },
      selectedAccount: [],
      isShow: false,
      direction: 'rtl',
      dialogImageUrl: '',
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
      student_table: [],
      table_tree: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableList()
    this.select_list()
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
  },
  // 方法集合
  methods: {
    handleClick(tab, event) {
      console.log(tab)
      if (tab.index === '0') {
        this.tableList()
      } else if (tab.index === '1') {
        this.student_tables()
      } else if (tab.index === '2') {
        this.sheet_tables()
      }

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
      const res = await course_select(this.page)
      console.log(res)
      this.tableData = res.data
      if (res.code !== 400 && res.code !== 500) {
        this.page.count = res.code
      }
    },
    async select_list() {
      const res = await course_list_select()
      res.data.forEach(item => {
        this.course_options.push(item.semester)
        this.course_teacher_options.push(item.teacher)
      })
      this.course_options = this.unique(this.course_options)
      this.course_teacher_options = this.unique(this.course_teacher_options)
    },
    async tablefalseList() {
      const res = await course_false_select(this.page)
      console.log(res)
      this.tableData = res.data
      if (res.code < 200) {
        this.page.count = res.code
      }
      console.log()
    },
    async course_one_select() {
      const restable = await course_one_select(this.manageform)
      console.log(restable)
      this.tableData = restable.data
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
      const res = await course_delte({ 'ids': this.ids })
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
    StudenthandleCurrentChange(val) {
      this.page.curr = val
      this.student_tables()
    },
    SheethandleCurrentChange(val) {
      this.page.curr = val
      this.sheet_tables()
    },
    table_delet() {
      this.multipleSelection.forEach(async item => {
        this.ids.push(item.id)
        const res = await course_delte({ 'ids': this.ids })
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
      const res = await course_update(e)
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
      var tHeader = ['学期名称', '课程名称', '授课老师', '上课时间', '入学年份', '院系名称', '学生学号', '学生姓名', '学生性别', '报名时间']
      var filterVal = ['termName', 'courseName', 'instructorName', 'classTime', 'enrollmentYear', 'facultyName', 'studentId', 'studentName', 'gender', 'registrationTime']
      var filename = '学生课程表'
      var data = this.formatJson(filterVal, this.student_table)
      export_json_to_excel({
        header: tHeader,
        data,
        filename
      })
    },
    table_sheet_xlsx() {
      // var tHeader = ['学期名称', '课程名称', '授课老师', '上课时间', '入学年份', '院系名称', '学生学号', '学生姓名', '学生性别', '报名时间']
      // var filterVal = ['termName', 'courseName', 'instructorName', 'classTime', 'enrollmentYear', 'facultyName', 'studentId', 'studentName', 'gender', 'registrationTime']
      // var filename = '学生课程表'
      // const multiHeader = ['', '班级数', '每班人数', '班级数', '每班人数']
      // const multiHeader2 = ['课程', '星期一', '星期二']
      const multiHeader =
          [
            ['课程', '星期一', '', '星期二', '', '星期三', '', '星期四', '', '星期五', '', '星期六', '', '星期天', '']
          ] // 前两行的表头数据，二维数组，不够的用空白补全
      const header = ['', '班级数', '每班人数', '班级数', '每班人数', '班级数', '每班人数', '班级数', '每班人数', '每班人数', '班级数', '每班人数', '班级数', '每班人数', '班级数'] // 最后一行的表头数据
      const filterVal = ['course', 'monNumberClasses', 'monpeopleClass', 'tuesNumberClasses', 'tuespeopleClass', 'wedNumberClasses', 'wedpeopleClass', 'thurNumberClasses', 'thurpeopleClass', 'friNumberClasses', 'fripeopleClass', 'satNumberClasses', 'satpeopleClass', 'sunNumberClasses', 'sunpeopleClass']
      // 这里要注意 header  和 filterVal 的数组长度一定要相等，否则会报错
      const list = this.table_tree
      const data = this.formatJson(filterVal, list)
      const merges = ['A1:A2', 'B1:C1', 'D1:E1', 'F1:G1', 'H1:I1', 'J1:K1', 'L1:M1', 'N1:O1'] // 合并单元格的数据，如何合并参考上面图片讲解
      export_json_to_excel({
        multiHeader,
        header,
        merges,
        data,
        filename: '对账清单'
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
          const res = await course_insert(newwss)
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
    },
    isShowClick() {
      this.$refs.child.isShow = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    unique(arr) {
      return Array.from(new Set(arr))
    },
    async submitForm() {
      this.ruleForm.id = new Date().getTime()
      const rest = await course_one_insert(this.ruleForm)
      this.ruleForm = {
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
      }
      this.isShow = false
      this.$message({
        type: 'success',
        message: rest.msg
      })
      this.isShow = false
    },
    async delect(id) {
      try {
        console.log(id)
        const numberid = await course_delte(id)
        this.$message(numberid.msg)
        this.tableList()
      } catch (error) {
        this.$Message.error(error)
      }
    },
    async student_tables() {
      try {
        const res = await course_student_select(this.page)
        this.student_table = res.data
      } catch (error) {
        this.$message.error(error)
      }
    },
    async sheet_tables() {
      try {
        const res = await course_sheet_select(this.page)
        this.table_tree = res.data
      } catch (error) {
        this.$message.error(error)
      }
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
.el-form-item {
    margin-bottom: 0px;
}
</style>
