<!--  -->
<template>
  <div
    class="stu"
    style="width: 98%;
    margin: 0;"
  >
    <!-- echerts图表 -->
    <div id="main_echerts_run" style="width: 900px; height: 400px;" />
    <!-- 弹层 -->
    <el-dialog
      title="设置统计颗粒度"
      :visible.sync="dialogVisibleShow"
      width="70%"
      :before-close="handleClose1"
    >
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="统计名称" style="width:400px" prop="name" label-width="200px">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="活动性质" prop="type" label-width="200px">
          <el-radio v-model="radio" label="1">
            统计值大于等于<el-input v-model="ruleForm.name" style="width:50px" width="50px" />次
          </el-radio>
          <el-radio v-model="radio" label="2">
            统计值小于等于<el-input v-model="ruleForm.name" style="width:50px" width="50px" />次
          </el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="tableData"
        border
        style="width: 80%;margin: 0 auto;"
      >
        <el-table-column
          type="index"
          label="序号"
        />
        <el-table-column
          prop="name"
          label="名称"
        />
        <el-table-column
          prop="address"
          label="统计范围"
        />
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleShow = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleShow = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    // 这里存放数据
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: '',
      activeName: 'first',
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
      }],
      radio: '1',
      dialogVisibleShow: false,
      eacherts: {
        title: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
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
  mounted() {
    this.initCharts()
  },
  // 方法集合
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    //   console.log(new Date())
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
    //   console.log('submit!')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    formatter(row, column) {
      return row.address
    },
    initCharts() {
      var myChart = this.$echarts.init(document.getElementById('main_echerts_run'))
      var option = {
        backgroundColor: 'black',
        tooltip: {
          trigger: 'axis'
        },
        textStyle: {
          color: 'rgb(222,222,222)'
        },
        calculable: true,
        xAxis: [{
          show: true,
          type: 'category',
          boundaryGap: false,
          data: [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'
          ],
          axisLine: {
            show: false
          },
          // 刻度线是否显示
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            show: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#49bdff']
            }
          }
        }],
        yAxis: [{
          type: 'value',
          // 刻度线是否显示
          axisLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#49bdff']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          name: '',
          type: 'line',
          stack: '总量',
          symbol: 'none',
          itemStyle: {
            normal: {
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [
                    { offset: 0, color: 'rgb(73,189,255,0.01)' },
                    { offset: 0.5, color: 'rgb(73,189,255,0.2)' },
                    { offset: 1, color: 'rgb(73,189,255)' }
                  ]
                )
              },
              lineStyle: {
                color: '#49bdff'
              }
            }
          },
          data: [
            120,
            132,
            101,
            134,
            90,
            230,
            210
          ],
          markLine: {
            symbol: 'none',
            itemStyle: {
              normal: {
                lineStyle: {
                  type: 'dashed',
                  color: '#ea3338'
                },
                label: {
                  show: true,
                  position: 'left'
                }
              }
            },
            large: true,
            effect: {
              show: false,
              loop: true,
              period: 0,
              scaleSize: 2,
              color: null,
              shadowColor: null,
              shadowBlur: null
            },
            data: [
              [{
                name: '',
                xAxis: '周一',
                yAxis: '60'
              },
              {
                name: '',
                xAxis: '周日',
                yAxis: '60'
              }
              ]
            ]
          }
        }]
      }
      // 绘制图表
      myChart.setOption(option)
    },
    handleClose1(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
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
.title{
    text-align: center;
}
.botoom{
  font-size: 12px;
  color: rgb(144, 147, 153);
  text-align: right;
}
#main {
    width: 900px;
    height: 400px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
    margin: 0 auto;
}
</style>
