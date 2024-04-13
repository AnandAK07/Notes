state management
-->usestate
-->useref
-->useContext
-->useReducer
-->redux

Flux Architecture

                    {type:"ADD-ONE
                     payload:1
                    }
                  <--Action<--
Action-->Dispatcher-->Store-->View
                    {type:"SUBONE"
                    payload:-1
                    }
core concept of flux 
-->Action
-->Dispatcher
-->Store
-->View
MVC 
Flux

Redux
state management tool based on flux architecture
why-used to have centerlized store to avoid popdriling


3.Principles of Redux
1.Single source of truth store
2.state are read only--only acion will be 
3.changes are made with pure function

redux setup
npm install redux

src
|-redux
    |-action.js
    |-reducer.js
    |-store.js

-create a store