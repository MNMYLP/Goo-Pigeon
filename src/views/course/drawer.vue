<!--  -->
<template>
  <div class="">
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
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="报名人员"
          prop="region"
        >
          <el-select
            v-model="ruleForm.participants"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="课程名称"
          prop="region"
        >
          <el-input v-model="ruleForm.courseName" />
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
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="报名时间"
          required
        >
          <el-select
            v-model="value"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="课程时间"
          required
        >
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              />
            </el-form-item>
          </el-col>
          <el-col
            class="line"
            :span="2"
          >
            -
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
                placeholder="选择时间"
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
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
              />
            </el-form-item>
          </el-col>
          <el-col
            class="line"
            :span="2"
          >
            -
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                v-model="ruleForm.date2"
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
            v-model="ruleForm.region"
            placeholder="请选择活动区域"
          >
            <el-option
              label="区域一"
              value="shanghai"
            />
            <el-option
              label="区域二"
              value="beijing"
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
              label="上架"
              name="type"
            />
            <el-checkbox
              label="下架"
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
            v-model="textarea"
            type="textarea"
            placeholder="请输入内容"
            maxlength="30"
            show-word-limit
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
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
export default {
  components: {},
  data() {
    // 这里存放数据
    return {
      direction: 'rtl',
      isShow: false,
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
      StableData: []
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
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style>
.size{
  width: 100px;
  height: 50px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 185px;
}
</style>
