
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from '@/components/PageLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout splitBackground={true}>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Страница не найдена</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Вернуться на главную
        </a>
      </div>
    </PageLayout>
  );
};

export default NotFound;
