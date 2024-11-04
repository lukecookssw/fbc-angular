"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import Link from "next/link";
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
      <div className="flex justify-between w-100">
        <div>
          {props.previousItem && (
            <Link href={props.previousItem.route}>
              {props.previousItem.title}
            </Link>
          )}
        </div>
        <div>
          {props.nextItem && (
            <Link href={props.nextItem.route}>{props.nextItem.title}</Link>
          )}
        </div>
      </div>
    </>
  );
}
