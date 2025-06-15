export function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-border/50">
      <div className="container mx-auto text-center text-muted-foreground px-4">
        <p>&copy; {new Date().getFullYear()} FitFuel AI. All rights reserved.</p>
        <p className="text-sm mt-1">Fueling your fitness journey, one meal at a time.</p>
      </div>
    </footer>
  );
}
