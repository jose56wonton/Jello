export const FETCH_BOARD = "fetch_board";
export const FETCH_BOARDS = "fetch_boards";
export const CREATE_BOARD = "create_board";
export const DELETE_BOARD = "delete_board";



export function fetchBoard(){

}

export function fetchBoards(){

}

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