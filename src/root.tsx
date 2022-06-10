import { Suspense } from 'solid-js';
import { Links, Routes, Scripts } from "solid-start/root";
import Header from './components/Header';
import { Meta } from './components/Root'
import { AppContextProvider } from './AppContext';
import { preventSmoothScrollOnTabbing } from './lib';

export const App = () => {

  preventSmoothScrollOnTabbing();

  return (
    <html style="scroll-behavior: smooth">
      <head>
        <Meta/>
        <link rel="sitemap" href="sitemap.xml" type="application/xml" />
        <link rel="icon" type="image/png" href="/img/favicons/favicon-32x32.png" />
      </head>
      <body class="font-display bg-white text-black dark:bg-solid-darkbg dark:text-white">
        <div id="app">
          <main class="min-h-screen">
              <AppContextProvider>
                <Header />
                {/* two div wrappers to make page animation work and performant */}
                <div id="main-content">
                  <div>
                    {/* <TransitionRoutes> */}
                    <Suspense>
                      <Routes />
                    </Suspense>
                    {/* </TransitionRoutes> */}
                  </div>
                </div>
              </AppContextProvider>
          </main>
        </div>
        <footer id="footer"></footer>
      </body>
    </html>
  );
};
