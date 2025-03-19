import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";
import { glob } from "fast-glob";

export async function generateStaticParams() {
  try {
    const contentDir = './content/page/';
    const files = await glob(`${contentDir}**/*.mdx`);
    console.log('🤐🤐🤐')
    console.log(files);
    const files2 = files
    .filter((file) => !file.endsWith('index.mdx'))
    .map((file) => {
      const path = file.substring(contentDir.length, file.length - 4); // Remove "./content/docs/" and ".mdx"
      return { filename: path.split('/') };
    });
    console.log(files2);
    return files2;
      
  } catch (error) {
    console.error(error);
  }
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
  console.log('🤔🤔🤔 slugs')
  console.log(params.filename);
  const filename = params.filename.join('/');
  const data = await client.queries.page({
    relativePath: `${filename}.mdx`,
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
