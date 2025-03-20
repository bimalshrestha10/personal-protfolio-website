
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <div className="absolute top-6 right-6">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      <div className="text-center max-w-md w-full glassmorphism rounded-2xl p-12 animate-fade-in">
        <h1 className="text-8xl font-bold mb-4 highlight-text">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center justify-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
