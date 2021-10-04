import React from 'react';
import './Support.css'

const Support = () => {
    return (
        <div className="support-container  flex items-center justify-center">
            <div className="w-4/5">
                <h1 className="text-6xl text-green-600">SUPPORT</h1>
                <br />
                <p className="text-center text-lg">In this online course, you will be goning through lot of diffculties. To solve this issue our suppting team are always open here. Just contact one below options</p>
                <br />
                <p className="font-bold ">Mobile:</p>
                <ul>
                    <li>+88013264*****</li>
                    <li>+88013285*****</li>
                    <li>+88013278*****</li>
                </ul>
                <br />
                <p className="font-bold ">Email:</p>
                <ul>
                    <li>MATHLAB@g_mail.com</li>
                    <li>MATHLAB@g_1mail.com</li>
                    <li>MATHLAB@g_2mail.com</li>
                </ul>
            </div>
        </div>
    );
};
export default Support;