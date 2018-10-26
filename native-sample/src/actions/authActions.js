import firebase from 'firebase';
import * as actions from '../actions/types';

export const emailChanged = (text) => {
  return {
    type: actions.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: actions.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = (payload, navigation) => {
  const { email, password } = payload;
  return (dispatch) => {
    dispatch({ type: actions.LOGIN_START });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => loginUserSuccess(dispatch, data.user, navigation))
      .catch((error) => loginUserFail(dispatch, error));
  };
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: actions.LOGIN_USER_FAIL, payload: error });
};

const loginUserSuccess = (dispatch, user, navigation) => {
  dispatch({ type: actions.LOGIN_USER_SUCCESS, payload: user });
  navigation.navigate('Main');
};

export const signupUser = (payload, navigation) => {
  const { email, password } = payload;
  return (dispatch) => {
    dispatch({ type: actions.SIGNUP_START });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(data => signupUserSuccess(dispatch, data.user, navigation))
      .catch((error) => signupUserFail(dispatch, error));
  };
};

const signupUserFail = (dispatch, error) => {
  dispatch({ type: actions.SIGNUP_USER_FAIL, payload: error });
};

const signupUserSuccess = (dispatch, user, navigation) => {
  dispatch({ type: actions.SIGNUP_USER_SUCCESS, payload: user });
  navigation.navigate('Main');
};

// Sign out and then mark the result in the store
export function signoutUser(navigation) {
  navigation.navigate('Welcome');

  return (dispatch => {
    firebase.auth().signOut()
      .then(() => {
        dispatch({
          type: actions.SIGN_OUT_ALL
        });
      });
  });
}

// Check if user is signed in
export function verifyAuth() {
  return (dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => {
          dispatch(authUser(user));
        }, 1000);
      } else {
        setTimeout(() => {
          dispatch(noAuthUser());
        }, 1000);
      }
    });
  });
}

// Mark sign-in in the store
export function authUser(user) {
  return {
    type: actions.AUTH_USER,
    payload: user
  };
}

// Mark sign-out in the store
export function noAuthUser() {
  return {
    type: actions.SIGN_OUT
  };
}
