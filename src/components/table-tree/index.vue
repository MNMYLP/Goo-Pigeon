
<template>
  <div>
    <el-table
      ref="tab"
      :show-summary="isShowSum"
      :data="tableData"
      :height="height"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="isShowBox"
        type="selection"
        width="55"
      />
      <template>
        <column-item
          v-for="item in col"
          :key="item.label"
          :col="item"
          v-on="$listeners"
        />
      </template>
      <!-- <template
        v-if="operates"
      >
        <el-table-column
          ref="fixedColumn"
          :width="operates.width"
          :fixed="operates.fixed"
          label="操作"
          :align="operates.align"
        >
          <template slot-scope="scope">

            <div class="operate-group">
              <template v-for="(btn,index) in operates.list">
                <el-button
                  :key="index"
                  :type="btn.type"
                  size="small"
                  :code="btn.code"
                  @click="btn.method(scope.$index, scope.row, $event)"
                >{{ btn.title }}</el-button>
              </template>
            </div>
          </template>
        </el-table-column>
      </template> -->
      <template #empty>
        <div
          class="empty"
          style="height: 200px"
        >
          <span class="empty-desc">暂无数据</span>
        </div>
      </template>
    </el-table>
  </div>
</template>
<script>
import ColumnItem from './column.vue'
export default {
  name: 'TableItem',
  components: {
    ColumnItem
  },
  props: {
    // operates: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // },
    // 表格数据
    tableData: {
      type: Array,
      default: () => []
    },
    // 表头数据
    col: {
      type: Array,
      default: () => []
    },
    // 是否在表格下方显示合计
    isShowSum: {
      type: Boolean,
      default: false
    },
    // 判断单元格文字是居中还是左对齐显示,默认居中
    alignType: {
      type: String,
      default: 'center'
    },
    // 设置表格高度,固定表头
    height: {
      type: String,
      default: null // 默认不固定表头
    },
    // 判断是否显示多选框
    isShowBox: {
      type: Boolean,
      default: false // 默认不展示
    }
  },
  data() {
    return {

    }
  },
  created() {},
  mounted() {
  },
  methods: {
    handleSelectionChange(row) {
      console.log(row)
    }
  }
}
</script>
  <style>

  /* 处理表格表头和内容错位问题 */
  .el-table th.gutter {
    display: table-cell !important;
  }
  .el-table th,
  .el-table td {
    padding: 7px 0 !important;
  }
  </style>
