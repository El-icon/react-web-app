export const CounterTwo = (props) => {
    return (
        <div>
            <h1>Counter Two</h1>
            <p>Count: {props.count}</p>
            {props.handleIncrement && (
                <button onClick={props.handleIncrement}>Increment</button>
            )}
            {props.handleDecrement && (
                <button onClick={props.handleDecrement}>Decrement</button>
            )}             
        </div>
    );
};