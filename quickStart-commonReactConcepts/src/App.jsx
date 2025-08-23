//import css file
import "./App.css";
// import useState from React
import { useState } from "react";

//Create user object
const user = {
	name: "Eria Othieno Pinyi",
	imageUrl: "src/assets/Eria.jpeg",
	imageSize: 90,
};

// creating your first react component
function MyButton({ count, wasClicked }) {
	// declare a state variable
	//const [count, setCount] = useState(0);

	// handleClick function
	/*function handleClick() {
		alert("You clicked me!");
		setCount(count + 1);
	}
	return (
		<button onClick={handleClick}>
			I'm a button.
			<br />I have been clicke {count} times.
		</button>
	);*/
	return <button onClick={wasClicked}>Clicked {count} times</button>;
}

// writing markup with JSX
function AboutPage() {
	return (
		<>
			<h1>About</h1>
			<Profile />
			<p>
				Hello there.
				<br />
				How do you do?
			</p>
		</>
	);
}

// profile component
function Profile() {
	return (
		<>
			<h1>{user.name}</h1>
			<img
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>
		</>
	);
}

// login component
function LoginForm() {
	return <h2>Login Form</h2>;
}

// rendering a list of products
const products = [
	{ title: "Cabbage", isFruit: false, id: 1 },
	{ title: "Garlic", isFruit: false, id: 2 },
	{ title: "Apple", isFruit: true, id: 3 },
];

function Products() {
	const listItems = products.map((product) => (
		<li
			key={product.id}
			style={{
				color: product.isFruit ? "magenta" : "darkgreen",
			}}
		>
			{product.title}
		</li>
	));

	return <ul>{listItems}</ul>;
}

//Will nest the MyButton Component into App Component which is our main component in this file
// will use this for sharing data between components demo | state management code above
export default function App() {
	const [count, setCount] = useState(0);
	const isLoggedIn = true; // vary the value between true and false

	function handleClick() {
		alert("You clicked me!");
		setCount(count + 1);
	}

	return (
		<div>
			<h1>Welcome to my app</h1>
			<AboutPage />
			<div>{isLoggedIn ? <Products /> : <LoginForm />}</div>
			<h1>Counters that update together</h1>
			<MyButton count={count} wasClicked={handleClick} />
			<MyButton count={count} wasClicked={handleClick} />
		</div>
	);
}
