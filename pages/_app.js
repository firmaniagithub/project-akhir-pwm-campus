import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(error => {
                console.log('Service Worker registration failed:', error);
            });
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
