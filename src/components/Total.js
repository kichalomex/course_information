const Total = (props) => {
    const total = props.exercises.reduce((s, p) => s + p)
    console.log(props)
    return (
        <div><p>
            Number of exercises {total}
        </p></div>
    )
}

export {Total}