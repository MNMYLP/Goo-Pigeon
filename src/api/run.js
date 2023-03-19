import request from '@/utils/request'

export function run_LTable(data) {
  return request({
    method: 'POST',
    url: '/run/run_table',
    data
  })
}

export function run_search(data) {
  return request({
    method: 'POST',
    url: '/run/run_table_search',
    data
  })
}

export function run_coke_delete(id) {
  return request({
    method: 'POST',
    url: '/run/run_table_delete',
    headers: { 'content-type': 'application/json' },
    data: id
  })
}
export function run_clock(data) {
  return request({
    method: 'POST',
    url: '/run/run_clock',
    data
  })
}

export function run_clock_search(data) {
  return request({
    method: 'POST',
    url: '/run/run_clock_search',
    data
  })
}

export function run_clock_delete(id) {
  return request({
    method: 'POST',
    url: '/run/run_clock_delete',
    headers: { 'content-type': 'application/json' },
    data: id
  })
}

