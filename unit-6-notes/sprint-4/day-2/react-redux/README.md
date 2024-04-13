preclass codesandbox link
https://codesandbox.io/s/eloquent-noyce-xtnvws?file=/src/Components/TodoInput.jsx

Redux-Redux
we need to install this depency inside in the app

npm i redux
npm i react-redux

3.Core parts of React-Redux
1.Provider and provide my store to the application
-we need to get the value from the store.
store:-
    -dispatch()-->react-redux-->useDispatch() 
    -getState()
    2-getState()-react-redux:->
                    useSelector
                    A hook that allows us to access the data from the Redux store
    -subscribe()--react0redux-->Provider

2(3).useDispatch
    A hook that returns the reference to the dispatch fun from Redux store

    const dispatch=useDispatch();
    dispatch(actionObje ct)
3(2).useSelector-getState()-react-redux:->
                    useSelector
                    A hook that allows us to access the data from the Redux store
    -subscribe()-->react-redux-->useSelector()