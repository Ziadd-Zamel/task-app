declare type SearchParams = string | string[] | undefined;

declare type RouteProps = {
  params: Promise<{ locale: Locale; productSlug: string }>;
  searchParams: SearchParams;
};

declare type MyLayoutProps = {
  children: React.ReactNode;
} & Pick<RouteProps, "params">;
