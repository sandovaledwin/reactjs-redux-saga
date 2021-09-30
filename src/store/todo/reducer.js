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

const initialState = {
    error: null,
    loading: false,
    tasks: [],
}

const todo = (state = initialState, action) => {
    switch (action.type) {
      case TODO_ADD_TASK:
        state = {
          ...state,
          loading: true,
          error: null,
        }
        break
      case TODO_ADD_TASK_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          tasks: [...state.tasks, action.payload],
          error: null,
        }
        break
      case TODO_ADD_TASK_FAILED:
        state = {
          ...state,
          loading: false,
          error: action.payload,
        }
        break
      case TODO_UPDATE_TASK:
        state = {
          ...state,
          loading: true,
          error: null,
        }
        break
      case TODO_UPDATE_TASK_SUCCESSFUL:
        const index = state.tasks.findIndex(
          o => o.id == action.payload.id
        )
        const newTasks = [
          ...state.tasks.slice(0, index),
          action.payload,
          ...state.tasks.slice(index + 1),
        ]
        state = {
          ...state,
          loading: false,
          tasks: newTasks,
          error: null,
        }
        break
      case TODO_UPDATE_TASK_FAILED:
        state = {
          ...state,
          loading: false,
          error: action.payload,
        }
        break
      case TODO_GET_TASKS_LIST:
        state = {
          ...state,
          loading: true,
          error: null,
        }
        break
      case TODO_GET_TASKS_LIST_SUCCESSFUL:
        state = {
          ...state,
          loading: false,
          tasks: [ ...action.payload ],
          error: null,
        }
        break
      case TODO_GET_TASKS_LIST_FAILED:
        state = {
          ...state,
          loading: false,
          error: action.payload,
        }
        break
      default:
        state = { ...state }
        break
    }
    return state
  }
  
  export default todo
  