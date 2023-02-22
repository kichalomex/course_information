import { Part } from "./Part";

const Content = (props) =>{
    const parts = props.parts
    console.log(props)
    return (
        <div>
        {parts.map(element =>(
            <Part part={element.name} exercises={element.exercises}/>)
        )}
        </div>
    )
}

export {Content}