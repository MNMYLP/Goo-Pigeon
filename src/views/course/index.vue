<!--  -->
<template>
  <div
    class="stu"
    style="width: 98%;
    margin: 0;"
  >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程管理" name="first">
        <div class="nav">
          <div class="left">
            学期名称：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            授课老师：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            课程名称：
            <el-input v-model="input" class="size" size="mini" placeholder="请输入内容" />
            课程状态：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button size="mini" type="primary" plain>查询</el-button>
            <el-button size="mini" plain @click="clear()">重置</el-button>
          </div>
          <div class="right">
            <el-button type="primary" style="margin-left: 16px;" @click="drawer = true">
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
            label="序号"
            width="55"
          />
          <el-table-column
            prop="school_name"
            label="学期名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="department"
            label="课程名称"
          />
          <el-table-column
            prop="addyear"
            label="授课老师"
          />
          <el-table-column
            prop="class"
            label="上课时间"
          />
          <el-table-column
            prop="stu_namber"
            label="课程管理员"
          />
          <el-table-column
            prop="name"
            label="报名时间"
          />
          <el-table-column
            prop="sex"
            label="报名人员"
          />
          <el-table-column
            prop="phone"
            label="课程名额"
          />
          <el-table-column
            prop="state"
            label="报名人数"
          />
          <el-table-column
            prop="time"
            label="认证时间"
          />
          <el-table-column
            prop="operate"
            label="操作"
            width="120"
          >
            <template v-slot>
              <el-button size="mini" type="text" plain>下架</el-button>
              <el-button size="mini" type="text" plain>编辑</el-button>
              <el-button size="mini" type="text" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="选课明细">
        <div class="nav">
          <div class="left">
            学期名称：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            授课老师：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            课程名称：
            <el-input v-model="input" class="size" size="mini" placeholder="请输入内容" />
            课程状态：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button size="mini" type="primary" plain>查询</el-button>
            <el-button size="mini" plain @click="clear()">重置</el-button>
          </div>
          <div class="right">
            <el-button size="mini" type="primary">添加课程</el-button>
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
            label="序号"
            width="55"
          />
          <el-table-column
            prop="school_name"
            label="学期名称"
          >
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
          </el-table-column>
          <el-table-column
            prop="department"
            label="课程名称"
          />
          <el-table-column
            prop="addyear"
            label="授课老师"
          />
          <el-table-column
            prop="class"
            label="上课时间"
          />
          <el-table-column
            prop="stu_namber"
            label="课程管理员"
          />
          <el-table-column
            prop="name"
            label="报名时间"
          />
          <el-table-column
            prop="sex"
            label="报名人员"
          />
          <el-table-column
            prop="phone"
            label="课程名额"
          />
          <el-table-column
            prop="state"
            label="报名人数"
          />
          <el-table-column
            prop="time"
            label="认证时间"
          />
          <el-table-column
            prop="operate"
            label="操作"
          >
            <template v-slot>
              <el-button size="mini" type="text" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="选课概况">
        <div class="nav">
          <div class="left">
            学期名称：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            授课老师：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            课程名称：
            <el-input v-model="input" class="size" size="mini" placeholder="请输入内容" />
            课程状态：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-button size="mini" type="primary" plain>查询</el-button>
            <el-button size="mini" plain @click="clear()">重置</el-button>
          </div>
          <div class="right">
            <el-button type="primary" style="margin-right: 16px;">
              导出
            </el-button>

          </div>
        </div>
        <div>
          <el-table
            :data="tableData1"
            style="width: 100%"
            align="center"
          >
            <el-table-column
              prop="date"
              label="课程"
              width="120"
            />
            <el-table-column label="星期一">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
            <el-table-column label="星期二">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
            <el-table-column label="星期三">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
            <el-table-column label="星期四">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
            <el-table-column label="星期五">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
            <el-table-column label="星期六">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
            <el-table-column label="星期日">
              <el-table-column
                prop="name"
                label="班级数"
              />

              <el-table-column
                prop="province"
                label="每班人数"
              />
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 弹出层 -->
    <el-drawer
      title="添加课程"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="学期名称" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="报名人员" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名称" prop="region">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="授课老师" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="报名时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="课程时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="上课时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="课程管理员" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名额" prop="region">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item>
          <p style="font-size:13px">
            <b style="font-size:13px">当前学期选课人数：200人；当前学期课程名额：123人</b>
          </p>
        </el-form-item>
        <el-form-item label="课程地点" prop="type">
          <el-input v-model="value" />
        </el-form-item>
        <el-form-item label="课程状态" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="上架" name="type" />
            <el-checkbox label="下架" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="课程图片" prop="resource">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="课程简介" prop="desc">
          <el-input
            v-model="textarea"
            type="textarea"
            placeholder="请输入内容"
            maxlength="30"
            show-word-limit
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item></el-form>
    </el-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      activeName: 'first',
      tableData: [{
        school_name: '山东大学',
        department: '黑人系',
        addyear: '2020-1-1',
        class: '刚果金',
        stu_namber: '114514',
        name: '小黑',
        sex: '男',
        phone: '114514114514',
        state: 0,
        time: '2020-1-2'
      }],
      multipleSelection: [],
      input: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
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
      value: '',
      drawer: false,
      direction: 'rtl',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
      tableData1: [{
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
      }]
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
      console.log(new Date())
    },
    clear() {
      this.value = ''
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
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    onSubmit() {
      console.log('submit!')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
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
.el-form-item {
    margin-bottom: 0px;
}
.el-form-item--medium .el-form-item__content {
    line-height: 20px;
}
p{
  margin: 0 !important;;
}

</style>
