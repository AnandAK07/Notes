Redux:-state management library which is based on flux arcitecture

-Frontend
View-->btn on a btn -->+ - reset-->

type -->action-->dispatcher-->dispatcher fun take action obj to reducer-->Reducer identify the action-->as per received action -->logic state updation happen

---React is UI library
---redux is state management library
all state mgt will be taken care by redux
this are independent

so-->react-redux (binding library for react and redux)

react-redux
--dispatch()-->useDispatch()
--get the data from UI -->useSelector()
-->subscribe to the changes happening in the store-->Provider

E-commerce website

-->Login page
-->Home page
-->product page 
-->product detail page-->Add to cart,Buy now
-->Cart page-->One ite added {1} navbar
-->checkout -->total page
-->payment

Redux-->reducers

--Authentication status-->every pages Yes->you can make this a reducer
-->Product data -->this can be a reducer
-->Cart page-->cart reducer

How we can manage multiple reducers 

-->Agenda 
-->Application

    -->fetch data from an Api -->Product Listing
    -->json-server
    -->productReducer
    -->authReducer
    -->we need combine these two reducers

    -->Dependencies
        -->redux
        -->react-redux
        -->json-server
        -->axios
        -->react-router-dom

    react-redux
        ->Provider in index.js wrapper of App component

-Provider in the index.js & we need to wrap the app

