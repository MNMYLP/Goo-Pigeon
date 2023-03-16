<template>
  <div
    class="clock_from"
    style="display: flex"
  >
    <div>
      <div>
        <el-select
          v-model="keywords"
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          :clearable="true"
          size="mini"
          style="width: 500px"
          @change="currentSelect"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item"
            class="one-text"
          >
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{
              item.district
            }}</span>
          </el-option>
        </el-select>
      </div>
      <div
        id="container"
        class="container"
      />
    </div>
    <!-- <div class="info-box">
      纬度：{{ form.34 }}
      <br>
      经度：{{ form.lng }}
      <p>详细地址：{{ form.address }}</p>
    </div> -->
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
// import AMap from 'vue-amap'
window._AMapSecurityConfig = {
  // 安全密钥
  securityJsCode: '66c796322a809f51a06508f8b8b48952'
}
export default {
  name: 'TestIndex',
  data() {
    return {
      // 地图实例
      map: null,
      // 标记点
      marker: '',
      // 地址逆解析
      geoCoder: null,
      // 搜索提示
      AutoComplete: null,
      // 搜索关键字
      keywords: '',
      // 位置信息
      form: {
        lng: '114.996112',
        lat: '27.849285',
        address: '',
        adcode: '' // 地区编码
      },
      // 搜索节流阀
      loading: false,
      // 搜索提示信息
      options: []
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      AMapLoader.load({
        // 你申请的Key
        key: '7205d765fbde8ccaa34e11da65e0a8d8',
        version: '2.0',
        // 需要用到的插件
        plugins: ['AMap.Geocoder', 'AMap.AutoComplete', // 按照你的需要，引入地图的哪些功能，不需要下面这么多
          'AMap.Autocomplete', // 输入提示插件
          'AMap.PlaceSearch', // POI搜索插件
          'AMap.Scale', // 右下角缩略图插件 比例尺
          'AMap.OverView', // 地图鹰眼插件
          'AMap.ToolBar', // 地图工具条
          'AMap.MapType', // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
          'AMap.PolyEditor', // 编辑 折线多，边形
          'AMap.CircleEditor', // 圆形编辑器插件
          'AMap.Geolocation', // 定位控件，用来获取和展示用户主机所在的经纬度位置
          'AMap.ControlBar',
          'AMap.DistrictSearch'] })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            viewMode: '3D', // 是否为3D地图模式
            zoom: 6, // 初始化地图级别
            center: [114.996112, 27.849285] // 初始化地图中心点位置
          })
          // 地址逆解析插件
          this.geoCoder = new AMap.Geocoder({
            city: '010', // 城市设为北京，默认：“全国”
            radius: 1000 // 范围，默认：500
          })
          // 搜索提示插件
          this.AutoComplete = new AMap.AutoComplete({ city: '全国' })
          // 点击获取经纬度;
          this.map.on('click', (e) => {
            // 获取经纬度
            this.form.lng = e.lnglast.lng
            this.form.lat = e.lnglast.lat
            // 清除点
            this.removeMarker()
            // 标记点
            this.setMapMarker()
          })
        })
        .catch((err) => {
          // 错误
          console.log(err)
        })
    },
    // 标记点
    setMapMarker() {
      // 自动适应显示想显示的范围区域
      this.map.setFitView()
      setTimeout(() => {
        this.marker = new AMap.Marker({
          map: this.map,
          position: [this.form.lng, this.form.lat]
        })
      })
      // 逆解析地址
      this.toGeoCoder()
      this.map.setFitView()
      // this.map.add(this.marker)
    },
    // 清除点
    removeMarker() {
      if (this.marker) {
        this.map.remove(this.marker)
      }
    },
    // 逆解析地址
    toGeoCoder() {
      const lnglat = [this.form.lng, this.form.lat]
      this.geoCoder.getAddress(lnglat, (status, result) => {
        if (status === 'complete' && result.regeocode) {
          this.form.address = result.regeocode.formattedAddress
        }
      })
    },
    // 搜索
    remoteMethod(query) {
      console.log(query)
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.AutoComplete.search(query, (status, result) => {
            this.options = result.tips
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    // 选中提示
    currentSelect(val) {
      // // 清空时不执行后面代码
      // if (!val) {
      //   return
      // }
      this.form = {
        lng: val.location.lng,
        lat: val.location.lat,
        address: val.district + val.address,
        adcode: val.adcode
      }
      this.keywords = this.form.address
      console.log(this.form)
      // this.$emit()
      // 清除点
      this.removeMarker()
      // 标记点
      this.setMapMarker()
    }
  }
}
</script>

<style>
.container {
  width: 500px;
  height: 300px;
}
</style>
