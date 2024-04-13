1. need to get data from an external Api
2.render the data on UI
3.Important pointer related to useState();

managing state will be over today
1-setState is kind of async 
:-state update will take some time to be updated in the state variable -->it should be before the next render

2-setState batches updates 
in queue update the UI by virtual DOM it will update UI effectivly

3-setState can take updater functions,which will use the value from the react store internally(will explain with a state diagram)

HTML CSS JS 
-when ever there is a change in the state -->whole application will be re-rendered.

what is most costy operation for dom manipulation
-creating a DOM tree again & again
-Rendering the tree again

Usain bolt
A        5km        B
10mins 
11mins
12mins
-performance

React solves this problem by virtual DOM(Diffing algorithm).

when ever there is a change in the state --> application will be re-rendered effiectivly by Virtual DOM


we need to acces an API
-need to make a fetch request
-we get some response
-extract data from the response
-we need to show the data on to UI


