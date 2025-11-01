import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Bonoshree Talukder Tondra. All Rights Reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
