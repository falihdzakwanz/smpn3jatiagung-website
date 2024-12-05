import { PropsWithChildren } from 'react';

interface AuthLayoutProps extends PropsWithChildren {
    title?: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center scroll-smooth bg-color-secondary">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-color-accent px-16 pb-12 pt-8 font-roboto text-color-secondary">
                <h1 className="mb-2 font-libre-bold text-3xl">{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
