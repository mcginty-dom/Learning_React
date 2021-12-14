import React, {useState, useReducer} from 'react';
import { login } from './Utils';
import { toast } from "react-toastify"
import ShoppingList from './ShoppingList'
import CounterExample from './CounterExample'

function loginReducer(state, action) {
    switch (action.type) {
        case 'login': 
        {
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        }
        case 'success': 
        {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
            };
        }
        case 'error': 
        {
            return {
                ...state,
                error: 'Incorrect username or password',
                isLoading: false,
                username: '',
                password: ''
            };
        }
        case 'logout': 
        {
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: ''
            };
        }
        case 'field': 
        {
            return {
                ...state,
                [action.field]: action.value,
            };
        }
        default:
            return state;
    }
}

const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false,
}

function Login() {
    const [state, dispatch] = 
        useReducer(loginReducer, initialState);
    
    const {
        username,
        password,
        isLoading,
        error,
        isLoggedIn
    } = state;

    const onSubmit = async e => {
        e.preventDefault();
        dispatch({type: 'login'});

        try{
            await login({username, password});
            dispatch({type: 'success'});
            toast.success("Success");
        } catch (error) {
            dispatch({type: 'error'});
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <>
                    <h1>Welcome {username}</h1>
                    <CounterExample />
                    <ShoppingList />
                    <button onClick={
                        () => dispatch({type: 'logout'})}>
                        Log Out
                    </button>
                </>
            ) : (
                <form className="form" onSubmit={onSubmit}>
                    {error && <p className="error">{error}</p>}
                    <p>Please Login!</p>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={e => 
                            dispatch({
                                type: 'field',
                                field: 'username',
                                value: e.currentTarget.value,
                            })
                        }
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => 
                            dispatch({
                                type: 'field',
                                field: 'password',
                                value: e.currentTarget.value,
                            })
                        }
                    />
                    <button className="submit" 
                        type="submit" disabled={isLoading}>
                        {isLoading ? "Logging in.." : "Login"}
                    </button>
                </form>
            )}
            {isLoading ? 'TODO: Spinner' : ''}
        </div>
    )
}

export default Login;