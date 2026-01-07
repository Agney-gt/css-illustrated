import { allUtilities } from "@/app/lib/utilities-data";
import { UtilityContent } from "@/app/utilities/utility-content";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  return allUtilities.map((page) => ({
    slug: page.slug,
  }));
}

export default async function DynamicUtilityPage({ params }: PageProps) {
  const { slug } = await params;

  return <UtilityContent slug={slug} />;
}
