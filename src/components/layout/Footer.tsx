export function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-border/50">
      <div className="container mx-auto text-center text-muted-foreground px-4">
        <p>&copy; {new Date().getFullYear()} Top DSA Questions. All rights reserved.</p>
        <p className="text-sm mt-1">Your personal guide to interview success.</p>
      </div>
    </footer>
  );
}
