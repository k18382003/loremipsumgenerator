# Birtday List

### Learning Goal

Using <form> to understand onSumbit, event.preventDefault works

## Steps

#### Create title and form

In App.jsx, create a <h2> tag for the component's title and setting up a form by using <form>, <label>, and <input> tags.

#### Setup State Variable

```jsx
const [paragraphs, setParagraphs] = useState(['']);
const [amount, setAmount] = useState('');
```

Then, set up the paragraphs and amount as state variables using the useState hook.
The default values for both variables will be empty strings, the values should be update while the clicking or typing event occurs.

The server is used to be stateless, however, if we use useState hook which allows us
to memorize and update the state of a variable. Also, it triggers re-render eveytime we update the state.

#### Input onChange event

```jsx
<input
  type="number"
  name="amount"
  min={1}
  max={10}
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
```

We can update our input value by setting value property to amount state variable, and setting up onChange function to set the value as above.

#### Create a submit button and handleSubmit function

```jsx
const handleSubmit = (e: any | null) => {
  e.preventDefault();
  if (amount !== '') {
    setParagraphs(data.slice(0, Number(amount)));
  }
};
<form className="form" onSubmit={handleSubmit}>
  // some codes here
  <button type="submit">Generate</button>
</form>;
```

Then, we create a submit button and set the onSubmit attribute to a handleSubmit function.
Because the submit will trigger re-render which it's not necessary in our case, we can use **e.preventDefault** to avoid it.

#### Import data array and slice the array depends on user's need

```jsx
import { data } from './data';
setParagraphs(data.slice(0, Number(amount)));
```

#### Iterate and Render and diplay by nested components

Display the number of items in the list by using the length property of the state variable. To render the list of paragraphs, iterate over the data array using the map method. And finally, we can display the paragraphs on the page.

##### Learning source

https://www.udemy.com/course/react-tutorial-and-projects-course/?kw=React+18+tu&src=sac#
