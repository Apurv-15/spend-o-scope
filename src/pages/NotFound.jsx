
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oops! Page not found
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center h-10 px-6 font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
