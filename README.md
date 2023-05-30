# electricity-app

* [widget](./widget/index.html)
* [tests](./test/index.html)

Create a widget that allows a user to keep track of electricity usage.

A user can:

* top-up electricity units for a selected amount. 
* and select an appliance to use. 

Note:

* Each appliance use a different amount of units. 
* Users can take an electricity advance. 
* The advance will need to be paid back on subsequent top-ups.

## Instructions

The widget should allow a user to top-up electricity:

* R10 buys 7 units
* R20 buys 14 units
* R50 buys 35 units
* And advance of R30 buys 21 units - can only be used once. Must then be paid back to use again.
    
The widget support the appliances below.

Supported appliances:

* The TV uses 3 units at a time (1 button click)
* The Kettle uses 5 units at a time
* The Fridge uses  13 units at a time
* The Stove uses 10 units at a time

Don't allow appliance usage if there is not enough electricity available to use the appliance in question.

Show a total of electricity units available - the topup and using of electricity should reflect accordingly at **Units available**. 

Keep track of the total units bought and the total amount spent on electricity.

If the advance has been used show a green tick. An advance can only be used once, and can only be used again when the whole advance has been paid back. Ensure the total amount spent calculation take the advance amounts into account correctly.

## Files 

* Make all the unit tests pass in `electricity.test.js`. Run test from `test/index.html`
* Fix failing unit tests by implementing the `Electricity` Factory Function in `electricity.js`. 
* Implement the DOM functionality in the `electricity.dom.js` file that is needed to make the widget in `index.html` functional.

## Add localStorage

Use localStorage to ensure that the numbers/data shown in the middle section shows correctly after a refresh. 

## Fork & clone 

Fork and clone this repo. And deploy to GitHub pages.
Share the source code & deployed link in the Feedback system link emailed to you.

## Work submission 

Check your EMAIL for the links to submit your GitHub Pages URL and the URL to your GitHub repository on feedback.projectcodex.co. 

## Loadshedding

If you are working remotely and you are experiencing load shedding please let us know in advance. 

## Planning

Spend the first 30 minutes of your assessment on planning. Read through all the different scenarios & create a Kanban Board with the tasks you think you need to complete. Email a link to your Kanban board to `mentors@projectcodex.co`. Create pseudo code using code comments to help you think through what you need to do. 

## Ask

**Ask** for **help** if needed - via slack in the `#awd-assessments` or email `mentors@projectcodex.co`.

**Ask** if you need help or clarity. 

## Be done by 16h00

And make sure you submit your final links by latest 16h00.

Enjoy! :tada:
