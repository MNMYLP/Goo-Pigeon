import request from '@/utils/request'

export function student_select(data) {
  return request({
    method: 'POST',
    url: '/teacher/table',
    data
  })
}

export function student_false_select(data) {
  return request({
    method: 'POST',
    url: '/teacher/table_false',
    data
  })
}

export function student_update(data) {
  return request({
    method: 'POST',
    url: '/teacher/table_update',
    headers: { 'content-type': 'application/json' },
    data: data
  })
}

export function student_one_select(data) {
  return request({
    method: 'POST',
    url: '/teacher/table_select',
    data
  })
}

export function student_delte(data) {
  return request({
    method: 'POST',
    url: '/teacher/table_del',
    data
  })
}

export function student_insert(data) {
  return request({
    method: 'POST',
    url: '/teacher/table_insert',
    data
  })
}
