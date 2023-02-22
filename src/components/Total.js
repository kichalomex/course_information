const Total = (props) => {
    const total = props.exercises.reduce((s, p) => s + p)
    console.log(props)
    return (
        <div><b>
            Total of {total} exercises
        </b></div>
    )
}

export {Total}