import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl my-8 font-medium">Total Courses Here</h1>
            <div className="courses mx-auto mb-8">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;