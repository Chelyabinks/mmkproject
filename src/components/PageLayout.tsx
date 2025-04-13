import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  backgroundImage
}) => {
  const location = useLocation();

  // Default background images for different routes
  const getDefaultBackgroundImage = () => {
    switch (location.pathname) {
      case '/':
        return '/lovable-uploads/fon.png';
      case '/history':
        return '/lovable-uploads/pfon.png';
      case '/specialties':
        return '/lovable-uploads/fon2.png';
      case '/sources':
        return '/lovable-uploads/pfon.png';
      default:
        return '/lovable-uploads/pfon.png';
    }
  };
  const bgImage = backgroundImage || getDefaultBackgroundImage();
  return <div className="min-h-screen flex flex-col" style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <header className="bg-steel-100 text-black shadow-md">
        <div className="container mx-auto py-2">
          <h1 className="text-3xl font-bold text-center">Магнитогорский металлургический комбинат</h1>
          <nav className="mt-4">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/history" className="hover:text-primary transition-colors">История ММК</Link></li>
              <li><Link to="/specialties" className="hover:text-primary transition-colors">Специальности и продукция</Link></li>
              <li><Link to="/sources" className="hover:text-primary transition-colors">Источники</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        <div className="content-container shadow-md rounded-md my-8 bg-slate-50">
          {children}
        </div>
      </main>
      
      <footer className="bg-steel-100 text-black py-4">
        <div className="container mx-auto text-center">
          <p className="first-letter:ml-0">Предприятия Челябинской области: Магнитогорский металлургический комбинат © 2025</p>
        </div>
      </footer>
    </div>;
};
export default PageLayout;
