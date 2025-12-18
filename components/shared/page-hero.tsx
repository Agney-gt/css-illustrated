import React from "react";

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
    </div>
  );
}
