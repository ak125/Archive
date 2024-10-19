import { type RemixService } from '@fafa/backend';
import { json, type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from '@remix-run/react';

import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar';
import logo from './routes/_assets/logo-automecanik.png';
import stylesheet from './global.css?url';
import { getOptionalUser } from "./server/auth.server";


export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  if (!context) {
    console.warn("Le contexte est undefined ou null dans le loader");
    return json({
      user: null,
    });
  }

  if (!context.remixService) {
    throw new Error("RemixService is undefined");
  }

  const user = await getOptionalUser({ context });
  return json({
    user: user ?? null,
  });
};

export const useOptionalUser = () => {
  const data = useRouteLoaderData<typeof loader>("root");
  return data?.user ?? null;
};

declare module '@remix-run/node' {
  interface AppLoadContext {
    remixService?: RemixService;
    user?: unknown;
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar logo={logo} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Layout><Outlet /></Layout>;
}
