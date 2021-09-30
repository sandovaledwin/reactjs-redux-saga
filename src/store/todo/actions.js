import {
  TODO_ADD_TASK,
  TODO_ADD_TASK_SUCCESSFUL,
  TODO_ADD_TASK_FAILED,
  TODO_UPDATE_TASK,
  TODO_UPDATE_TASK_SUCCESSFUL,
  TODO_UPDATE_TASK_FAILED,
  TODO_GET_TASKS_LIST,
  TODO_GET_TASKS_LIST_SUCCESSFUL,
  TODO_GET_TASKS_LIST_FAILED,
} from "./actionTypes"

export const addTask = task => {
  return {
    type: TODO_ADD_TASK,
    payload: { task },
  }
}

export const addTaskSuccessful = task => {
  return {
    type: TODO_ADD_TASK_SUCCESSFUL,
    payload: task,
  }
}

export const addTaskFailed = error => {
  return {
    type: TODO_ADD_TASK_FAILED,
    payload: error,
  }
}

export const updateTask = task => {
  return {
    type: TODO_UPDATE_TASK,
    payload: { task },
  }
}

export const updateTaskSuccessful = task => {
  return {
    type: TODO_UPDATE_TASK_SUCCESSFUL,
    payload: task,
  }
}

export const updateTaskFailed = error => {
  return {
    type: TODO_UPDATE_TASK_FAILED,
    payload: error,
  }
}

export const getTasksList = task => {
  return {
    type: TODO_GET_TASKS_LIST,
    payload: { task },
  }
}

export const getTasksListSuccessful = task => {
  return {
    type: TODO_GET_TASKS_LIST_SUCCESSFUL,
    payload: task,
  }
}

export const getTasksListFailed = error => {
  return {
    type: TODO_GET_TASKS_LIST_FAILED,
    payload: error,
  }
}

