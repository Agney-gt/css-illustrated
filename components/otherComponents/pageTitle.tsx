import React from "react";

type PageTitleProps = {
  title: string;
  description: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="text-lg text-muted-foreground max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default PageTitle;
