export const CREATE_BOARD = "create_board";
export const DELETE_BOARD = "delete_board";
export function createBoard(values){
  return{
    type: CREATE_BOARD,
    payload: values
  }
}
export function deleteBoard(values){
  return{
    type: DELETE_BOARD,
    payload: values
  }
} 

export const CREATE_LIST = "create_list";
export const DELETE_LIST = "delete_list";

export function createList(values){  
  return {
    type: CREATE_LIST,
    payload: values
  }
}
export function deleteList(values) {
  return {
    type: DELETE_LIST,
    payload: values
  }
}

export const CREATE_TASK = "create_task";
export const DELETE_TASK = "delete_task";
export const DELETE_TASKS = "delete_tasks";
export const TOGGLE_TASK = "toggle_task";

export function createTask(values){  
  return {
    type: CREATE_TASK,
    payload: values
  }
}
export function deleteTask(values) {
  return {
    type: DELETE_TASK,
    payload: values
  }
}
export function deleteTasks(values){
  return {
    type: DELETE_TASKS,
    payload: values
  }
}
export function toggleTask(values){
  return {
    type: TOGGLE_TASK,
    payload: values
  }
}

export const LOGIN = "login";

export function login(values){
  return{
    type: LOGIN,
    payload:values
  }
}