import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="error flex items-center justify-center">
            <div>
                <h1 className="text-9xl text-red-600 font-black">404</h1>
                <h1 className="text-6xl text-red-600 font-black">PAGE NOT FOUND</h1>
            </div>
        </div>
    );
};

export default NotFound;