import React, { useReducer } from "react";
import { login } from "./Utils";

//type LoginState = typeof initialState;
interface LoginState {
  username: string;
  password: string;
  error: string;
  isLoading: boolean;
  isLoggedIn: boolean;
  //TODO:
  variant: "login" | "forgetPassword";
}

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const initialState: LoginState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
  variant: "login",
};

function loginReducer(state: LoginState, action: LoginAction) {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password",
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    }
    case "field": {
      return {
        ...state,
        [action.fieldName!]: action.payload,
      };
    }
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={() => dispatch({ type: "logout" })}>Log Out</button>
        </>
      ) : (
        <form className="form" onSubmit={onSubmit}>
          {error && <p className="error">{error}</p>}
          <p>Please Login!</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "username",
                payload: e.currentTarget.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "password",
                payload: e.currentTarget.value,
              })
            }
          />
          <button className="submit" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in.." : "Login"}
          </button>
        </form>
      )}
    </>
  );
}

export default Login;
