in term of which the meaning is understood-general language

1.useState --hook used to manage state in react app
2.useEffect --manages side effects

3.data passing through components
-props 

-->
     -p1
         -c1
         -c2

     -p2
         -c3
         -c4
            -c1c4
            -c2c4 -- what if? nexting data present 50 components

p-c
c-p
s-s

-->if we are passing data through multiple components then prop drilling is not good idea.
-->if we are missed any single level of data to pass down as props in the component then UI will broken

C-P-C[Create-Provide-]