# Build Real Web App with Remchi
Based on the AWESOME tutorial-series by Rem Zolotykh
Youtube link: [Here](https://www.youtube.com/watch?v=NO2DaxhoWHk)

using:
- React
- Eslint
- React-router... v4
- semantic-ui
- validator
- prop-types@15.6.1
- Redux
- redux-thunk
- redux-devtools-extension

## Part1 setup react project, eslint, react-router and implement Login Form with client-side validation. 

App Component is going to be like a route dispatcher. It is going to render depending on the route. 

Semantic-ui is like bootstrap, but comes with React support, and it does not use any jQuery. Install semantic-ui-react. Can also use its own css by semantic-ui-css, instead of linking it to a CDN in the HTML page. After install, include the minified CSS files in the index.js file. 
```javascript
import 'semantic-ui-css/semantic.min.css';
```

In this app, we will use Redux. Especially with forms, it is not good to store form states in Redux. Store form state only when needed.

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
```javascript
({a, b} = {a: 1, b: 2})
```
`onChange` we get event (e), and we wil do `=>` setState, and to set state, we need to change `data`. But first of all, we need to save everything that we already have in `data`, so we use spread `...this.state.data` here.
```javascript
onChange = e => {
  this.setState({
    data: {...this.state.data, [e.target.name]: e.target.value }
  });
}
```

in the `<label>` tag, there is Label htmlFor Property. `labelObject.htmlFor` returns the htmlFor property.

When we submit the form, and onSubmit, it is going to call this function:
```javascript
  validate = (sth) => {
    const errors = {}; //empty object
    if (!Validator.isEmail(sth.email)) {
      errors.email = "Invalid email";
    }
    if (!sth.password) {
      errors.password = "Cant be blank password";
    }
    return errors;
  }
```
If all the form field is corret, the `errors` object will be empty. If not, render a InlineError Component and display the errors properties.

If you add `.isRequired` to a `propType`, then you will get a console warning if that `prop` isn't sent.

```javascript
{errors.email && <InlineError text={errors.email} />}
```
if `errors.email` has something in it, so it is not `undefined`... then InlineError Component will be rendered.

In semantic-ui's Form.Field component, there is an in-built error boolean indicator, deciding if error is true.
`!!obj` converts a value to a boolean and **ensures a boolean type**.
`!!` is not an operator, it's just the `!` operator twice.
```
<Form.Field error={!!errors.email}>
```

With `onSubmit`, first validate the form fields, then call the submit() in the parent component, LoginPage.
```
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({
      errors
    });
    // after validation, pass the data onSubmit
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }
```
if `errors` is empty, means there is no error, and proceed to pass `this.state.data` to the parent's submit().

## Part2 

- setup Redux and create our first reducer and thunk action
- make async request to server
- setup backend server with ExpressJS and use babel to use latest and greatest JS

To make async request to server, we need Redux Thunk

createStore creates a Redux store, and that is the most important thing, store. 
applyMiddleware allows us to use thunk and middle ware. 
provider is a high-order component from react-redux.

rootReducer is the whole TREE, the whole state object.

