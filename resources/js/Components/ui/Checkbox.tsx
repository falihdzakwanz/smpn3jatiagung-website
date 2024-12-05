import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'text-color-600 focus:ring-indigo-500 rounded border-color-gray shadow-sm ' +
                className
            }
        />
    );
}
