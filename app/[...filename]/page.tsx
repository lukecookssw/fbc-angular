import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));
  return paths || [];
}

export async function getTableOfContents(): Promise<any[]> {
  const tableOfContents = await client.queries.tocConnection();
  const tocData =
    tableOfContents.data?.tocConnection?.edges?.[0]?.node?.items?.map(
      (item) => ({
        title: item?.title ?? "",
        route: item?.page?._sys.filename ?? "",
      })
    );
  return tocData || [];
}

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  let menuItems = await getTableOfContents();
  // find index of current page in menuItems
  const currentIndex = menuItems.findIndex(
    (item) => item.route === params.filename.join("/")
  );
  // set previous and next items
  let previousItem = undefined;
  let nextItem = undefined;
  if(currentIndex > 0)
    previousItem = menuItems[currentIndex - 1];
  if (currentIndex < menuItems.length - 1)
    nextItem = menuItems[currentIndex + 1];
  return <ClientPage {...data } previousItem={previousItem} nextItem={nextItem} />;
}
