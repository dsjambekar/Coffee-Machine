# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Project idea -

Write a program that offers to buy one cup of coffee or to fill the supplies or to take its money out. Note that the program is supposed to do one of the mentioned actions at a time. It should also calculate how many ingredients and money have left. Display the number of supplies before and after purchase.

First, your program reads one option from the standard input, which can be "buy", "fill", "take". If a user wants to buy some coffee, the input is "buy". If a special worker thinks that it is time to fill out all the supplies for the coffee machine, the input line will be "fill". If another special worker decides that it is time to take out the money from the coffee machine, you'll get the input "take". If the user writes "buy" then they must choose one of three types of coffee that the coffee machine can make: espresso, latte, or cappuccino. For one espresso, the coffee machine needs 250 ml of water and 16 g of coffee beans. It costs $4. For a latte, the coffee machine needs 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7. And for a cappuccino, the coffee machine needs 200 ml of water, 100 ml of milk, and 12 g of coffee. It costs $6. If the user writes "fill", the program should ask them how much water, milk, coffee and how many disposable cups they want to add into the coffee machine. If the user writes "take" the program should give all the money that it earned from selling coffee. If the user types "buy" to buy a cup of coffee and then changes his mind, they should be able to type "back" to return into the main cycle. Program should will work endlessly to make coffee for all interested persons until the shutdown signal is given. Introduce two options: "remaining" and "exit". At the moment, the coffee machine has $550, 400 ml of water, 540 ml of milk, 120 g of coffee beans, and 9 disposable cups.

Do not forget that you can be out of resources for making coffee. If the coffee machine doesn't have enough resources to make coffee, the program should output a message that says it can't make a cup of coffee.

An Example Output:

Write action (buy, fill, take, remaining, exit):

remaining

The coffee machine has: 400 of water 540 of milk 120 of coffee beans 9 of disposable cups $550 of money

Write action (buy, fill, take, remaining, exit):

buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:

2 I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit):

remaining

The coffee machine has: 50 of water 465 of milk 100 of coffee beans 8 of disposable cups $557 of money

Write action (buy, fill, take, remaining, exit):

buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:

2 Sorry, not enough water!

Write action (buy, fill, take, remaining, exit):

fill

Write how many ml of water do you want to add:

1000 Write how many ml of milk do you want to add: 0 Write how many grams of coffee beans do you want to add: 0 Write how many disposable cups of coffee do you want to add: 0

Write action (buy, fill, take, remaining, exit):

remaining

The coffee machine has: 1050 of water 465 of milk 100 of coffee beans 8 of disposable cups $557 of money

Write action (buy, fill, take, remaining, exit):

buy

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:

2 I have enough resources, making you a coffee!

Write action (buy, fill, take, remaining, exit):

remaining

The coffee machine has: 700 of water 390 of milk 80 of coffee beans 7 of disposable cups $564 of money

Write action (buy, fill, take, remaining, exit):

take

I gave you $564

Write action (buy, fill, take, remaining, exit):

remaining

The coffee machine has: 700 of water 390 of milk 80 of coffee beans 7 of disposable cups 0 of money

Write action (buy, fill, take, remaining, exit):

exit
