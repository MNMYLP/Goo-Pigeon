import request from '@/utils/request'

export function student_select(data) {
  return request({
    method: 'POST',
    url: '/student/table',
    data
  })
}

export function student_false_select(data) {
  return request({
    method: 'POST',
    url: '/student/table_false',
    data
  })
}

export function student_update(data) {
  return request({
    method: 'POST',
    url: '/student/table_update',
    headers: { 'content-type': 'application/json' },
    data: data
  })
}

export function student_one_select(data) {
  return request({
    method: 'POST',
    url: '/student/table_select',
    data
  })
}

export function student_delte(data) {
  return request({
    method: 'POST',
    url: '/student/table_del',
    data
  })
}

export function student_insert(data) {
  return request({
    method: 'POST',
    url: '/student/table_insert',
    data
  })
}
