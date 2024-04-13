Component Comminication/Data flow b/w components

Score board App

-score board
-Player -batting
-Player -balling

-0,1,2,3,4,5,6
-one ball at a time 
overs/balls


Data flow
1-Parent to Child component (Prop Drilling)
2-Child to Parent component (Uplifting) steps
    -1 We need to Define/create a fun inside the Parent component
    -2 we need to pass this fun as props in Child component
    -3 receive the fun as props in Child Component
    -4 we need to call same fun inside Child component & pass the value which you want to receive in the parent componet
    -5 then we can utilize the value inside the parent component

    3.Sibling to Sibling component
    1.Child to Parent 
    via fun 
    2.Parent to Child
    pros will be passed