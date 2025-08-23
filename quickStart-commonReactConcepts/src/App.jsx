//Creating a react component
function MyButton() {
	return <button>I'm a button</button>;
}

//Writing markup with JSX
function AboutPage() {
	return (
		<>
			<h1>About</h1>
			<p>
				Hello there.
				<br />
				How do you do?
			</p>
		</>
	);
}

//Will nest the MyButton Component into App Component which is our main component in this file
export default function App() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton />
		</div>
	);
}
