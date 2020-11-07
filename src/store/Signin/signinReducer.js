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

    default: {
      return state;
    }
  }
};

export default signinReducer;
