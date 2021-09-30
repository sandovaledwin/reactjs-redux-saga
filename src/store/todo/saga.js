import {
  TODO_ADD_TASK,
  TODO_UPDATE_TASK,
  TODO_GET_TASKS_LIST
} from "./actionTypes"

import {
  addTaskSuccessful,
  addTaskFailed,
  updateTaskSuccessful,
  updateTaskFailed,
  getTasksListSuccessful,
  getTasksListFailed
} from "./actions"

import { takeEvery, put, call } from "redux-saga/effects"

function addTaskRequest(task) {
    const url = 'http://localhost:8080/task/add'
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(task)     
    }
    return fetch(url, options).then(response => response.json())
}

function updateTaskRequest(task) {
  const url = `http://localhost:8080/task/${task.id}`
  const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)     
  }
  return fetch(url, options).then(response => response.json())
}

function getTasksListRequest() {
  const url = 'http://localhost:8080/task/getAll'
  return fetch(url).then(response => response.json())
}

function* onAddTask({ payload: { task } }) {
  try {
    const response = yield call(addTaskRequest, task)
    yield put(addTaskSuccessful(response))
  } catch (error) {
    yield put(addTaskFailed(error))
  }
}

function* onUpdateTask({ payload: { task } }) {
  try {
    const response = yield call(updateTaskRequest, task)
    yield put(updateTaskSuccessful(response))
  } catch (error) {
    yield put(updateTaskFailed(error))
  }
}

function* onGetTasksList() {
  try {
    const response = yield call(getTasksListRequest)
    yield put(getTasksListSuccessful(response))
  } catch (error) {
    yield put(getTasksListFailed(error))
  }
}

function* todoSaga() {
    yield takeEvery(TODO_ADD_TASK, onAddTask)
    yield takeEvery(TODO_UPDATE_TASK, onUpdateTask)
    yield takeEvery(TODO_GET_TASKS_LIST, onGetTasksList)
}

export default todoSaga