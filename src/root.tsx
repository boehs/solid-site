import { Suspense } from 'solid-js';
import { Links, Routes, Scripts, Meta } from 'solid-start/root';
import { ErrorBoundary } from "solid-start/error-boundary";
import Header from './components/Header';
import { Meta as DefaultMeta } from './components/Root';
import { AppContextProvider } from './AppContext';
import { preventSmoothScrollOnTabbing } from './lib';

export const App = () => {
  preventSmoothScrollOnTabbing();

  return (
    <html style="scroll-behavior: smooth">
      <head>
        <DefaultMeta />
        <link rel="sitemap" href="sitemap.xml" type="application/xml" />
        <link rel="icon" type="image/png" href="/img/favicons/favicon-32x32.png" />
        <Meta />
        <Links />
      </head>
      <body class="font-display bg-white text-black dark:bg-solid-darkbg dark:text-white">
        <main class="min-h-screen">
          <AppContextProvider>
            <Header />
            {/* two div wrappers to make page animation work and performant */}
            <div id="main-content">
              <div>
                {/* <TransitionRoutes> */}
                <ErrorBoundary>
                  <Suspense>
                    <Routes />
                  </Suspense>
                </ErrorBoundary>
                {/* </TransitionRoutes> */}
              </div>
            </div>
          </AppContextProvider>
        </main>
        <footer id="footer"></footer>
        <Scripts />
      </body>
    </html>
  );
};
