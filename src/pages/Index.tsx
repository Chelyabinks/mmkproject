
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  return <PageLayout splitBackground={true}>
      <div className="max-auto mx-auto p-0">
        <h2>Магнитогорский металлургический комбинат</h2>
        
        <p>Магнитогорский металлургический комбинат (ММК) — одно из крупнейших металлургических предприятий России и градообразующее предприятие Магнитогорска., основанное в 1929 году. Сегодня ММК остаётся ключевым игроком в металлургической отрасли, обеспечивая рабочие места и внося вклад в экономику не только Челябинской области, но и всей страны. ММК — основа экономики Магнитогорска. Без него не было бы ни города в его современном виде, ни тысяч рабочих мест.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-center">Глава 1</h3>
            <p className="first-letter:ml-0">История ММК: строительство, военное время, послевоенный период и современность.</p>
            <div className="mt-4 text-center">
              <Link to="/history" className="text-primary hover:underline font-medium">Читать →</Link>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-center">Глава 2</h3>
            <p className="first-letter:ml-0">Специальности, продукция, устойчивое развитие и влияние на регион.</p>
            <div className="mt-4 text-center">
              <Link to="/specialties" className="text-primary hover:underline font-medium">Читать →</Link>
            </div>
          </Card>
        </div>
        
        <div className="mt-12 bg-steel-50 p-6 rounded-lg">
          <h2 className="text-xs">
        </h2>
          <p>Предприятие способствует созданию рабочих мест, развитию инфраструктуры и оказывает положительное влияние на социально-экономическое развитие Челябинской области.</p>
          
          <p>Магнитогорский металлургический комбинат — это не просто завод, а мощный двигатель экономического и промышленного развития Челябинской области и всей России. Его продукция востребована как на внутреннем рынке, так и за рубежом, а современные технологии позволяют комбинату сохранять лидерские позиции в металлургической отрасли.</p>
          
        </div>
      </div>
    </PageLayout>;
};

export default Index;
