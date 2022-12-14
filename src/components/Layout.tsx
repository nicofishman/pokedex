import type { FC } from 'react';

import Head from 'next/head';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name="description" content="Proyecto frontend pokedex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="backgroundBlur relative flex min-h-screen flex-row items-center justify-center overflow-hidden bg-background bg-cover bg-center bg-no-repeat">
                {children}
            </main>
        </>
    );
};

export default Layout;
