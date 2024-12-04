import React, { useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface ToasterProps {
    message: string;
    type: 'success' | 'error';
    duration: number;
    onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({
    message,
    type,
    duration,
    onClose,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 transform rounded bg-color-white pt-4 shadow-2xl ${type === 'success' ? 'text-color-succes' : 'text-color-danger'}`}
        >
            <div className="flex items-center px-8 text-lg justify-between gap-4">
                <span>{type === 'success' ? <FaCheck size={24}/> : <FaTimes size={24} />}</span>
                <span>{message}</span>
            </div>
            <div className={`mt-4 h-1 w-full rounded ${type === 'success' ? 'bg-color-succes' : 'bg-color-danger'} overflow-hidden`}>
                <div
                    className={`h-full ${type === 'success' ? 'bg-color-primary' : 'bg-color-dark-danger'}`}
                    style={{ animation: `progress ${duration}ms linear` }}
                ></div>
            </div>
        </div>
    );
};

export default Toaster;
