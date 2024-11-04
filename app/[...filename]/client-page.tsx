"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import NavigationButton from "../../components/ui/navigation-button";
import type { PageQuery } from "../../tina/__generated__/types";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
  previousItem?: {
    route: string;
    title: string;
  };
  nextItem?: {
    route: string;
    title: string;
  };
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <>
      <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div>
      <div className="flex justify-between w-100 py-4 border-t border-gray-300s">
        <div>
          {props.previousItem && (
            <NavigationButton
              title={`< ${props.previousItem.title}`}
              route={props.previousItem.route}
            />
          )}
        </div>
        <div>
          {props.nextItem && (
            <NavigationButton
              title={`${props.nextItem.title} >`}
              route={props.nextItem.route}
            />
          )}
        </div>
      </div>
    </>
  );
}
