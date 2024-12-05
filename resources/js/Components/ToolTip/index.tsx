import React from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    return (
        <div className="group relative">
            {children}
            <div className="absolute bottom-full left-1/2 z-10 mb-2 hidden w-max -translate-x-1/2 transform rounded bg-color-gray px-2 py-1 text-sm text-color-white opacity-0 transition-opacity duration-500 group-hover:block group-hover:opacity-100">
                {text}
                <div className="absolute left-1/2 top-full -mt-1 h-3 w-3 -translate-x-1/2 rotate-45 transform bg-color-gray"></div>
            </div>
        </div>
    );
};

export default Tooltip;
