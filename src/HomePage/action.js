import { IS_MENU_OPEN } from "./reducer"

export function openMenu() {
  console.log('action')
  return dispatch => {
    const openMenu = {
    type: IS_MENU_OPEN
    }
    dispatch({type: 'IS_OPEN_MENU', payload : openMenu})
  }   
}
