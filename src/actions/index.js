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

export const CREATE_TASK = "create_list";
export const DELETE_TASK = "delete_list";

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