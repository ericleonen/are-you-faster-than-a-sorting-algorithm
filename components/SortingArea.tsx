import React from 'react';

const SortingArea = ({ children }: any) => {
    return (
        <div className="flex items-center h-52 mt-10">
            {children}
        </div>
    );
};

export default SortingArea;