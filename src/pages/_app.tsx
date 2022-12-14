import { type AppType } from 'next/app';

import { trpc } from '../utils/trpc';
import '../styles/globals.css';
import DataProvider from '../context/dataContext';
import Layout from '../components/Layout';

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <DataProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </DataProvider>
    );
};

export default trpc.withTRPC(MyApp);
