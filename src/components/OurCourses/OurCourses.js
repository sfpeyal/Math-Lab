import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './OurCourses.css'


const OurCourses = () => {

    const element = <FontAwesomeIcon icon={faBookOpen} />
    const element2 = <FontAwesomeIcon icon={faArrowRight} />

    return (
        <div className="OurCourses">
            <h1 className="text-7xl">our courses</h1>
            <div className="card-holder mx-auto">
                <div className="card leading-loose">
                    <p className="text-5xl">{element}</p>
                    <p className="text-3xl text-red-500">Algebra</p>
                    <p className="text-2xl text-gray-500">10$</p>
                    <br />
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Access more then 100K online courses</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <br />
                    <button>More {element2}</button>
                </div>
                <div className="card leading-loose">
                    <p className="text-5xl">{element}</p>
                    <p className="text-3xl text-red-500">Trigonometry</p>
                    <p className="text-2xl text-gray-500">6$</p>
                    <br />
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Access more then 100K online courses</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <br />
                    <button>More {element2}</button>
                </div>
                <div className="card leading-loose">
                    <p className="text-5xl">{element}</p>
                    <p className="text-3xl text-red-500">Geometry</p>
                    <p className="text-2xl text-gray-500">7$</p>
                    <br />
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Access more then 100K online courses</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <br />
                    <button>More {element2}</button>
                </div>
                <div className="card leading-loose">
                    <p className="text-5xl">{element}</p>
                    <p className="text-3xl text-red-500">Function</p>
                    <p className="text-2xl text-gray-500">9$</p>
                    <br />
                    <ul>
                        <li>Upskill your organization.</li>
                        <li>Access more then 100K online courses</li>
                        <li>Learn the latest skills</li>
                    </ul>
                    <br />
                    <button>More {element2}</button>
                </div>
            </div>
        </div>
    );
};

export default OurCourses;