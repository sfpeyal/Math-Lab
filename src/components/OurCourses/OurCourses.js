import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './OurCourses.css'


const OurCourses = () => {
    const element = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div className="OurCourses">
            <h1 className="text-7xl">our courses</h1>
            <div className="card-holder mx-auto">
                <div className="card leading-loose">
                    <p><img width="180px" src="https://i.ytimg.com/vi/B_WCI_A944E/maxresdefault.jpg" alt="" /></p>
                    <p className="text-3xl text-gray-500">Algebra</p>
                    <p className="text-2xl text-gray-500">10$</p>
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <button>Details {element}</button>
                </div>
                <div className="card leading-loose">
                    <p><img width="180px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dwu1K0Qcr4o-Z6CbgGYgfZ8ZWVuuAlIlDw&usqp=CAU" alt="" /></p>

                    <p className="text-3xl text-gray-500">Trigonometry</p>
                    <p className="text-2xl text-gray-500">6$</p>
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <button>Details {element}</button>
                </div>
                <div className="card leading-loose">
                    <p><img width="180px" src="https://cdn01.alison-static.net/courses/1845/alison_courseware_intro_1845.jpg" alt="" /></p>
                    <p className="text-3xl text-gray-500">Geometry</p>
                    <p className="text-2xl text-gray-500">7$</p>
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <button>Details {element}</button>
                </div>
                <div className="card leading-loose">
                    <p><img width="180px" src="https://cdn01.alison-static.net/courses/1817/alison_courseware_intro_1817.jpg" alt="" /></p>
                    <p className="text-3xl text-gray-500">Function</p>
                    <p className="text-2xl text-gray-500">9$</p>
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <button>Details {element}</button>
                </div>
            </div>
        </div>
    );
};

export default OurCourses;