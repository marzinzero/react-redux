import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const App = () => {

    const { name, status } = useSelector(state => state);
    const dispatch = useDispatch();
    function updateName(name) {
        dispatch({ type: "UPDATE_NAME", payload: name })
    }
    // console.log(data);
    return (
        <div>
            <h3>React my first app</h3>
            <h4>My name is {name}</h4>
            <h4>My status is {status}</h4>
            <button onClick={() => updateName("Mohammad ibne Nayem")}>Update Name</button>
        </div>
    )
}

export default App