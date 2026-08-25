import type { ReactNode } from "react";

interface PageContentLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function PageContentLayout({
  children,
  sidebar,
}: PageContentLayoutProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
      
      <div className="min-w-0">
        {children}
      </div>

      <div className="flex flex-col gap-6">
        {sidebar}
      </div>

    </div>
  );
}