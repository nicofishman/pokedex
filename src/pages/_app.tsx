import { type AppType } from 'next/app';

import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import DataProvider from '../context/dataContext';

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <DataProvider>
            <Component {...pageProps} />
        </DataProvider>
    );
};

export default trpc.withTRPC(MyApp);
