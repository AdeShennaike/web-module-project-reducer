# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* Then it goes into the action index where the addone action creator resides.
* From there the action creator passes the action object into the reducer.
* The ADD_ONE action is then executed.
* TotalDisplay shows the total plus 1.
