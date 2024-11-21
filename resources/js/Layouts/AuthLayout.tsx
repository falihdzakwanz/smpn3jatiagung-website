import { PropsWithChildren } from 'react';

interface AuthLayoutProps extends PropsWithChildren {
    title?: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center scroll-smooth bg-color-secondary">
            <div className="bg-color-accent px-16 pt-8 pb-12 flex flex-col justify-center items-center text-color-secondary font-roboto rounded-xl overflow-hidden">
            <h1 className="text-3xl font-libre-bold mb-2">{title}</h1>
            {children}
            </div>
        </div>
    );
};

export default AuthLayout;
