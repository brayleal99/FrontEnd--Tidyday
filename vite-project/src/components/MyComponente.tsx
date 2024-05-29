interface MyComponentProps {
    name: string
}


const MyComponent = (props: MyComponentProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default MyComponent