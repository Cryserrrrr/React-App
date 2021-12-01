import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMenu = state => state.get('menu', initialState);

console.log('selectors', initialState)
const makeSelectIsMenuOpen = () =>
  createSelector(
    selectMenu,
    homeState => homeState.isMenuOpen,
  );

export { selectMenu, makeSelectIsMenuOpen };