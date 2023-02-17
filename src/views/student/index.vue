<!--  -->
<template>
  <div class="stu">
    <el-tabs v-model="activeName" style="transform: translateX(17px) !important;" @tab-click="handleClick">
      <el-tab-pane label="学生管理" name="first">
        <div class="nav">
          <div class="left">
            认证年份：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            院系名称：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            入学年份：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            性别：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            姓名：
            <el-input v-model="input" class="size" size="mini" placeholder="请输入内容" />
            <el-button size="mini" type="primary" plain>查询</el-button>
            <el-button size="mini" plain @click="clear()">重置</el-button>
          </div>
          <div class="right">
            <el-button id="del_btn" size="mini" type="danger">删除</el-button>
            <el-button size="mini" type="primary">导出</el-button>
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
            prop="school_name"
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
            prop="class"
            label="班级"
          />
          <el-table-column
            prop="stu_namber"
            label="学号"
          />
          <el-table-column
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="sex"
            label="性别"
          />
          <el-table-column
            prop="phone"
            label="手机号"
          />
          <el-table-column
            prop="state"
            label="认证状态"
          >
            <template v-slot>
              <el-switch
                v-model="tableData.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
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
            <template v-slot>
              <el-button size="mini" type="text" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="学生认证" name="second">
        <div class="nav">
          <div class="left">
            认证年份：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            院系名称：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            入学年份：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            性别：
            <el-select v-model="value" class="size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            姓名：
            <el-input v-model="input" class="size" size="mini" placeholder="请输入内容" />
            <el-button size="mini" type="primary" plain>查询</el-button>
            <el-button size="mini" plain @click="clear()">重置</el-button>
          </div>
          <div class="right">
            <el-button id="del_btn" size="mini" type="danger">删除</el-button>
            <el-button size="mini" type="primary">导出</el-button>
            <el-button size="mini" type="primary">下载模板</el-button>
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
            prop="school_name"
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
            prop="class"
            label="班级"
          />
          <el-table-column
            prop="stu_namber"
            label="学号"
          />
          <el-table-column
            prop="name"
            label="姓名"
          />
          <el-table-column
            prop="sex"
            label="性别"
          />
          <el-table-column
            prop="phone"
            label="手机号"
          />
          <el-table-column
            prop="state"
            label="认证状态"
          >
            <template v-slot>
              <el-switch
                v-model="tableData.state"
                active-color="#13ce66"
                inactive-color="#ff4949"
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
            <template v-slot>
              <el-button size="mini" type="text" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
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

</style>
