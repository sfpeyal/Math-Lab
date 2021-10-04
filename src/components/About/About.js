import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about-container flex items-center justify-center">
            <div className="w-4/5">
                <h1 className="text-6xl text-purple-600">ABOUT</h1>
                <br />
                <p className="text-center text-lg">Math lab is not a online learning platform. It is more than that. Because we provide the top-notch qualiy full content in our course modules. Also it's not finished yet. There are categories wise mathematics course. So that student can choose thier needed categorie and purchased that. We desing our courses that way, so that student can easily gets it.</p>
                <br />
                <p className="text-center text-lg italic font-medium">
                    "Education is in our DNA. Our 100 percent online MATHLAb's in education programs are uniquely designed to be affordable, flexible and relevant to your career right now. Wherever you want to go next, MATHLAb is here to get you there."
                </p>
            </div>
        </div>
    );
};

export default About;