import React, {useState} from 'react';
import Tweet from './Tweet';
import BlogPost from './blogPost';

//React Tutorial For Beginners

function App(){ 

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { name: 'Joy', message: 'Life is miss.'},
    { name: 'John', message: 'Hey I am John.'},
    { name: 'Dev', message: 'I had a life and that is very beautiful.'},
    { name: 'Kevin', message: 'Love Jesus so much.'} 
  ]);
 
  const increment = () => {
      setCount(count+1);
      setRed(!isRed);
  } 
  return (
      <div> 
        <div className="userStateFirstExample">
            <h1 className={isRed ? 'red' : ''}>Change my color</h1>
            <button onClick={increment}>Increment</button>
            <h3>{count}</h3> 
        </div> 

        <div className="userStateSecondExample">
            {users.map(user=>(
                <BlogPost name={user.name} message={user.message} />
              ))}
        </div> 

        <div className="app">
          <Tweet name="Mike" message="It's nice to learn reactjs"/> 
          <Tweet name="Michael" message="React js is so amazing"/> 
          <Tweet name="Andrew" message="How can I learn react js without crash course?"/> 
          <Tweet name="Lovely" message="There are lot of tutorial from youtube"/> 
        </div>
      </div>
  );
}

export default App;

