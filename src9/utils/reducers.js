import { TOGGLE_THEME,INCREASE_COUNT} from './actions';

export const reducer = (state, { type }) => {
  const newDarkTheme = !state.darkTheme;
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: newDarkTheme,
      };
    }
    case INCREASE_COUNT:{
      return {
        ...state,
        count:state.count+1
      }
    }
    default:
      return state;
  }
};
