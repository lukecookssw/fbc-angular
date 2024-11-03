import React from "react";
import Header from "../components/ui/header";
import NavPanel, { NavPanelProps, Route } from "../components/ui/nav-panel";
import client from "../tina/__generated__/client";
import "./styles.css";

export async function getTableOfContents(): Promise<Route[]> {
  const tableOfContents = await client.queries.tocConnection();
  const tocData =
    tableOfContents.data?.tocConnection?.edges?.[0]?.node?.items?.map(
      (item) => ({
        displayIndex: item?.displayIndex ?? 0,
        text: item?.title ?? "",
        route: item?.route ?? "",
      })
    );
  return tocData?.sort((a, b) => a.displayIndex - b.displayIndex) || [];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = await getTableOfContents();
  const navProps: NavPanelProps = { routes: menuItems };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen relative">
        <div className="flex flex-grow">
          <NavPanel {...navProps} />
          <div className="flex flex-col flex-grow">
            <Header />
            <main className="p-4 flex-grow min-h-[calc(100vh-64px)]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
