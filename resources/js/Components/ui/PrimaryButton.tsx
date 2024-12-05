import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `border-transparent focus:bg-gray-700 focus:ring-indigo-500 active:bg-gray-900 inline-flex items-center rounded-md border bg-color-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-color-white transition duration-150 ease-in-out hover:bg-color-succes focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
