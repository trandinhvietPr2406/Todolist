export default function logger(reducer) {
    return (Prestate, action, args) => {
        console.group(action)
        console.log("Prestate: ", Prestate)
        console.log("Action arguments: ", args)
        const nextState = reducer(Prestate, action, args);
        console.log('Next state: ', nextState)
        console.groupEnd()
        return nextState
    }
}