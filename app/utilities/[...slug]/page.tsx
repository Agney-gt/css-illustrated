import { allUtilities } from "@/app/lib/utilities-data";
import { UtilityContent } from "@/app/utilities/utility-content";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// This runs on the server at build time to generate paths
export async function generateStaticParams() {
  return allUtilities.map((page) => ({
    slug: page.slug,
  }));
}

// This is the Server Component Entry Point
export default async function DynamicUtilityPage({ params }: PageProps) {
  // 1. Await params (Next.js 15 requirement)
  const { slug } = await params;

  // 2. Pass ONLY the slug (simple text) to the client component.
  // We do NOT pass the 'pageData' object here because it contains functions.
  return <UtilityContent slug={slug} />;
}
