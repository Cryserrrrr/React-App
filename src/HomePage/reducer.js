
export const initialState = ({isMenuOpen: false})

export const IS_MENU_OPEN = "IS_MENU_OPEN"

export default function ToDoReducer(state = initialState, action) {
  switch (action.type) {
    case IS_MENU_OPEN:
      console.log('reducer')
      return state.set('isMenuOpen', action.payload)
    default: 
      return state
  }
}
