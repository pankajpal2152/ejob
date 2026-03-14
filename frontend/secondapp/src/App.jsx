import Hello from "./components/Hello";
import Hii from "./components/Hii";

const App = () => {
  const user={id:1,name:"Pankaj",age:23};
  const users= [
    {id:1,name:"Saikat",sal:12000},
    {id:2,name:"Nisha",sal:14000}
  ];
  return (
    <>
      <h2>APP Parent Component</h2>
      {/* This is the child Component Inside the App Component */}
      <Hello users={users} user={user} message="hello world" />
    </>
  );
};

export default App;