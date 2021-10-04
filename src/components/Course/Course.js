import React from 'react';
import './Course.css'

const Course = (props) => {
    console.log(props.course);
    const { name, module, price, picture } = props.course;
    return (
        <div className="course mx-auto">
            <div>
                <img height="200px" width="300px" src={picture} alt="" />
            </div>
            <div className="btn">
                <h2 className="italic font-medium">Name: {name}</h2>
                <h4 className="font-medium">Module: {module}</h4>
                <h4 className="font-medium">Price: ${price}</h4>
                <button>Enroll</button>
            </div>
        </div>
    );
};

export default Course;