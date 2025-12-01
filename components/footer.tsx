export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3">About</h3>
            <p className="text-sm text-muted-foreground">
              Comprehensive interactive guide to all Tailwind CSS utilities for modern web development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  Tailwind CSS Docs
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition"
                >
                  Tailwind UI Components
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Built with</h3>
            <p className="text-sm text-muted-foreground">Next.js, React, and Tailwind CSS</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Created to help developers master Tailwind CSS utilities</p>
        </div>
      </div>
    </footer>
  )
}
