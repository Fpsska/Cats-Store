import {
  headerState,
  headerActionTypes,
  headerAction,
} from "../../Types/headerType";

const initialState: headerState = {
  headerLinks: [
    {
      id: 1,
      text: "Main",
      link: "/Cats-Store/",
    },
    {
      id: 2,
      text: "Gallery",
      link: "Gallery",
    },
    {
      id: 3,
      text: "News",
      link: "News",
    },
    {
      id: 4,
      text: "Profile",
      link: "Profile",
    },
  ],
  catsCount: "",
  isBurgerHidden: true,
  isBurgerOpen: false,
  isBodyScrolling: true,
  isHomePage: true,
  emailValue: "",
};

const headerReducer = (
  state = initialState,
  action: headerAction
): headerState => {
  switch (action.type) {
    case headerActionTypes.ACTION_GET_CATS_COUNT:
      return {
        ...state,
        catsCount: (state.catsCount = action.payload),
      };
    case headerActionTypes.ACTION_CHANGE_NAV_DISPLAY:
      return {
        ...state,
        isBurgerHidden: action.payload,
      };
    case headerActionTypes.ACTION_GET_INPUT_VALUE:
      return {
        ...state,
        emailValue: action.payload,
      };
    case headerActionTypes.ACTION_CHANGE_PAGE_STATUS:
      return {
        ...state,
        isHomePage: action.payload,
      };
    case headerActionTypes.ACTION_CHANGE_BURGER_STATUS:
      return {
        ...state,
        isBurgerOpen: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
