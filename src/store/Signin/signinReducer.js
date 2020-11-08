const initialState = {
  loginSuccess: false,
  user: {},
};

const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": {
      return {
        ...state,
        loginSuccess: true,
        user: { ...action.payload },
      };
    }
    case "LOGIN_USER_FROM_TOKEN": {
      return {
        ...state,
        loginSuccess: true,
        user: { ...action.payload },
      };
    }
    case "LOGOUT_USER": {
      console.log("INSIDE LOGOUT USER?", action.payload);
      return {
        ...state,
        loginSuccess: false,
        user: {},
      };
    }

    default: {
      return state;
    }
  }
};

export default signinReducer;
