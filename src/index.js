import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () =>{
  const course = 'Half Stack application development'
  const parts = [
  {
    name:'Fundamentals of React',
    exercises: 10
  },
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  } 
  ]
  return(
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total exercises={parts.map(x => x['exercises'])} />
    </div>
  )
}

const Header = (props) =>{
  console.log(props)
  return (<div><h1>{props.course}</h1></div>)
}

const Content = (props) =>{
  const parts = props.parts
  console.log(props)
return (<div>
  { parts.map(element =>(
    <Part part={element.name} exercises={element.exercises}/>)
  )}
</div>)
}

const Part = (props) =>{
  console.log(props)
return (<div><p>{props.part} {props.exercises}</p></div>)
}

const Total = (props) => {
  const exercises = props.exercises
  console.log(props)
return (<div><p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p></div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

