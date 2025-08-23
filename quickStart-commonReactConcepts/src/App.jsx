
//Creating a react component
function MyButton(){
  return (
    <button>I'm a button</button>
  );
}

//Will nest the MyButton Component into App Component which is our major component in this case
export default function App(){
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}