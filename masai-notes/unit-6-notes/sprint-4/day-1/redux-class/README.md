Lo's for the week
Redux
-D1
    -What is redux

-we need any tool by which we can track the state management
-we can predict the state in the application.

-Flux Architecture

-What Happened ?Action
-How Happended ?Function:-Login

-->Admission in Masai -->action-->MSAT-->you have cleared MSAt

-Action :-{}-plan JS objects
-functions :-():-pure fuctions

action-->dispatchers-->store-->view

-Redux
it is state management library for js application which is based on Flux architecture 

what is React
react is a UI library it is build over js

global state:-one container where we keep all the states of the application :store


3.principle of Redux
1]Single source of TRUTH
-store where we will keep all the data for your app
-store:-{}-object
-state is read only

const obj={
    name:"Anand"
    age:25
}
obj.name="new_value"]X[
obj['key]='new_value"]X[

2]STATE IS READ ONLY
"The only way to change the state is to emit an action,an object describing what happed"

the state can only be changed/modified,using ACTIONS and REDUCERS

3] Changes are made with pure functions
"To specify how the state tree is transformed by actions we write pure reducers"

Pure fuctions?
predictable & without side-effects

reducers are pure fun that take previous state,and the action object,and return the new state back


Core Parts of Redux
ACTIONS
DISPATCHERS
REDUCERS
STORE

installation 
npm i redux

counter application with redux

Redux
-1]store.js:-this will hold the data:-single source of truth

-states are read only
store.js store is an object:-
initialState.count=10 XXX You can't mutate the object

-state can only be updated by a reducer fun(pure fun);


-D2
    -React-redux
-D3
    -combineReducer
-D4
    -middlewares