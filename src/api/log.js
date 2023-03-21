import request from '@/utils/request'

export function getLog(data) {
  return request({
    url: '/sys/log_table', // 假地址 自行替换
    method: 'post',
    data
  })
}
