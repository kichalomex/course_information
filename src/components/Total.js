const Total = (props) => {
    const exercises = props.exercises
    console.log(props)
    return (
        <div><p>
            Number of exercises {exercises[0] + exercises[1] + exercises[2]+ exercises[3]}
        </p></div>
    )
}

export {Total}