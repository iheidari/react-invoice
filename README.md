This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Dependencies](./docs/dependencies.md)

Build an invoice editor that allows a user add, edit, or remove line items according to the text-based mockup below. Pricing should be updated on-the-fly as line items are added or edited. Don't worry about persisting invoices.

```
Item                      Qty     Price       Total
--------------------------------------------------------
Widget                   [ 2 ]  [ $10.00 ]  [ $20.00 ] x
Cog                      [ 2 ]  [ $15.99 ]  [ $31.98 ] x
[ New Item ]             [   ]  [        ]  [        ]

                                    --------------------
                                    Subtotal      $51.98
                                    Tax (5%)       $2.60
                                    Total         $54.58
                                    --------------------
```
## Requirements:

  - ReactJS
  - Redux
  - ES6/7 JS
  - Webpack

## Notes:

  - You are free to use any existing React/Redux/Webpack boilerplate starter kit (such as https://github.com/davezuko/react-redux-starter-kit) to save you time
  - While there is no time limit, completion time will be considered against other applicants

## Bonus:

  - Write tests for the Redux reducers using the test framework of your choice
