import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex relative">
            <Sidebar />
            <main className="flex-1 md:ml-[300px] min-h-screen bg-white">
                {children}
            </main>
        </div>
    );
}
