import request from '@/utils/request'

export function dashboard_select() {
  return request({
    url: '/dashboard/select'
  })
}
export function dashboard_table(data) {
  return request({
    method: 'POST',
    url: '/dashboard/table',
    data
  })
}
