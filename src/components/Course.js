import { Content } from "./Content"
import { Header } from "./Header"
const Course = (props) => {
    const {course} = props
    return(
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />            
        </div>
    )
}
/*<Total exercises={course.parts.map(x => x['exercises'])} />*/
/*
const Total = (props) => {
  const exercises = props.exercises
  console.log(props)
return (<div><p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p></div>)
}*/
export {Course}