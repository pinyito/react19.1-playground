//import css file
import "./App.css";

//Create user object
const user = {
	name: "Eria Othieno Pinyi",
	imageUrl: "src/assets/Eria.jpeg",
	imageSize: 90,
};

// creating your first react component
function MyButton() {
	return <button>I'm a button</button>;
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

//Will nest the MyButton Component into App Component which is our main component in this file
export default function App() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<AboutPage />
			<MyButton />
		</div>
	);
}
