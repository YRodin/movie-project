import { UNAUTH_USER, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
  authenticated: localStorage.getItem("token") || "",
  errorMessage: "",
  email: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: null,
        email: null,
      };
    default:
      return state;
  }
}