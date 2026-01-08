import Link from "next/link";
import { categories } from "../data/utilities"; 

export default function UtilitiesIndex() {

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1 px-4 py-12 max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Utility Reference
            </h1>
            <p className="text-muted-foreground">
              Browse all Tailwind CSS utilities by category
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.utilities.map((util) => (
                    <Link
                      key={util.name}
                      href={util.href}
                      className="p-3 border border-border rounded hover:bg-card hover:border-accent transition group"
                    >
                      <span className="text-foreground group-hover:text-accent transition">
                        {util.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
