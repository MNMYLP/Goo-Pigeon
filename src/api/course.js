import request from '@/utils/request'

export function course_select(data) {
  return request({
    method: 'POST',
    url: '/course/table',
    data
  })
}

export function course_student_select(data) {
  return request({
    method: 'POST',
    url: '/course/student_table',
    data
  })
}

export function course_sheet_select(data) {
  return request({
    method: 'POST',
    url: '/course/sheet_table',
    data
  })
}

export function course_false_select(data) {
  return request({
    method: 'POST',
    url: '/course/table_false',
    data
  })
}

export function course_update(data) {
  return request({
    method: 'POST',
    url: '/course/table_update',
    headers: { 'content-type': 'application/json' },
    data: data
  })
}

export function course_list_select() {
  return request({
    url: '/course/select'
  })
}
export function course_one_select(data) {
  return request({
    method: 'post',
    url: '/course/select_one',
    data
  })
}

export function course_one_insert(data) {
  return request({
    method: 'POST',
    url: '/course/select_add',
    data
  })
}

export function course_delte(id) {
  return request({
    method: 'POST',
    url: '/course/select_delete',
    headers: { 'content-type': 'application/json' },
    data: id
  })
}

export function course_insert(data) {
  return request({
    method: 'POST',
    url: '/course/table_insert',
    data
  })
}
