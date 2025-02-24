import React from 'react';
import './Preloader.scss';

interface PreloaderProps {
    isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="preloader">
            <div className="loading"></div>
            <div> &nbsp;&nbsp;&nbsp;EXCLUSIVE Loading....</div>
        </div>
    );
};

export default Preloader;