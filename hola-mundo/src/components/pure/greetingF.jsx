import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // *Introduccion a un hook useState 
    // **const [variable, metodo para actualizarlo] = useState[valor inicial]
    const [age, setAge] = useState(29);

    const birthday = () =>{
        // Actualizamos el state
        setAge(age + 1)
    }


    return (
        <div>
            <h1>
                Hello World { props.name }, of Functional Component!
            </h1>
            <h2>
                Your age is: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Birthday
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
