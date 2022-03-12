import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap CSS
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  
  // Bootstrap JS
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
