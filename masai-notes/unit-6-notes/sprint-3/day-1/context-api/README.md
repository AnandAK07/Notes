https://peerabduljabbar.notion.site/CLASS-NOTES-STUDENTS-6df69e3acb9b41b58e50b6b4d74a812c

sprit 1:-
-D1 -create react element/JSX/Babel

-D2
-Comoponent
-Props
-Conditional Rendering
-Map Data in the form of an array
-Global css & module css

D3
-state management
-useState is kind of async
-call back fun

D4
-how to get data from an api
-Need to map the data on the UI

S2:-
D1
-Component communication -props drilling
-Parent to Child
-Child to Parent
-sibling to sibling

D2
useEffect :-what is lifecyle method
-how it is being managed in functional component
-Mount phase:-if we are going on a page what you see on the UI first load
-Update phase:-pagination,filtering,sorting,text search PSC-2

D3
-unmount

D4
-useRef:-
imp-formValidation

s3
D1
C-create a context -import{createContext} from 'react'
export const AppContext=createContext();

P
export const AppContextProvider=({children})=>{
return <AppContext.Provider>{children}</AppContext.Provider>
}
C
