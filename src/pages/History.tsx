
import React from 'react';
import PageLayout from '@/components/PageLayout';
const History = () => {
  return <PageLayout splitBackground={true}>
      <div className="prose max-w-none">
        <h1 className="text-center">Глава 1: История ММК</h1>
        
        <p className="indent-8 leading-relaxed text-left">ММК — удивительный феномен в отечественной истории, но зарождался он как великий эксперимент. Комбинат строила вся страна.</p>
        
        <div className="flex justify-center my-8">
          <img alt="Вся страна строила Магнитогорск - историческая карта строительства ММК" className="w-full max-w-2xl object-cover" src="/lovable-uploads/0c1a51d8-6eba-4c27-90c3-b2b2cc0164c0.png" />
        </div>
        
        <h2 className="text-center">Строительство и начало работы</h2>
        <p className="indent-8 leading-relaxed">Создание Магнитогорского металлургического комбината было частью индустриализации СССР. Одной из целей было быстрое развитие тяжёлой промышленности, нужной для дальнейшего экономического и военного роста страны.</p>
        
        <p className="indent-8 leading-relaxed">Выбор Магнитогорска как места для строительства комбината был обусловлен близостью к одному из крупнейших месторождений железной руды — Магнитной горы. Тогда Магнитогорск был небольшим посёлком, но с началом строительства сюда начали массово прибывать рабочие, инженеры и строители, что привело к бурному росту населения и его превращению в город.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-5xl mx-auto">
  <div className="text-center">
    <img
      src="/lovable-uploads/mmk1.png"
      alt="Территория будущего комбината, 1929 год"
    />
    <p className="text-sm text-gray-700 mt-3">Территория будущего комбината, 1929 год</p>
  </div>
  <div className="text-center">
    <img
      src="/lovable-uploads/mmk3.png"
      alt="Начало строительных работ"
    />
    <p className="text-sm text-gray-700 mt-3">Начало строительных работ. 1930 год</p>
  </div>
</div>
        <p className="indent-8 leading-relaxed">Строительство ММК официально началось в 1929 году. Проектирование комбината велось при участии советских специалистов, но значительная часть технической документации и оборудования была закуплена в США. Американские специалисты разработали генеральный план комбината, который был увеличенным вариантом аналогичного завода в США. В начале 1931 года проектирование было передано советским проектным организациям. Для возведения предприятия привлекались как профессиональные строители, так и тысячи рабочих со всей страны. Магнитогорск превратился в гигантскую стройку, где трудились как добровольцы, так и мобилизованные по государственным программам крестьяне. Часто использовался и принудительный труд заключённых. Рабочие жили в бараках и палатках, а условия строительства были крайне тяжёлыми. В строительстве было задействовано 46 проектных организаций, 108 учебных заведений, 49 железных дорог – для перевозки грузов, оборудования и рабочих. 158 заводов отправляли на Магнитострой металлоконструкции, технику, специалистов и целые бригады ударников.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-5xl mx-auto">
  <div className="text-center">
    <img
      src="/lovable-uploads/mmk4.png"
      alt="Территория будущего комбината, 1929 год"
    />
    <p className="text-sm text-gray-700 mt-3">Первые строители Магнитки. 1929 год</p>
  </div>
  <div className="text-center">
    <img
      src="/lovable-uploads/mmk5.png"
      alt="Начало строительных работ"
    />
    <p className="text-sm text-gray-700 mt-3">Палатки первостроителей Магнитки. 1930 год</p>
  </div>
</div>        
        <p className="indent-8 leading-relaxed">Несмотря на сложные условия, первый доменный цех был введён в эксплуатацию 3 января 1932 года, но официальным днем рождения комбината считается 1 февраля 1932 года, когда домна №1 выдала первый металл. Это ознаменовало рождение одного из крупнейших металлургических комплексов СССР. Вместе с комбинатом развивался и сам Магнитогорск: строились жилые кварталы, дороги, школы и больницы.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 max-w-6xl mx-auto">
  {/* Левая большая картинка */}
  <div className="md:col-span-2 flex flex-col items-center">
    <div>
      <img
        src="/lovable-uploads/mmk6.png"
        alt="Плавка железа. 1935 г."
      />
    </div>
    <p className="mt-2 text-sm text-gray-700 italic">Плавка железа. 1935 г.</p>
  </div>

  {/* Правая колонка с двумя фото */}
  <div className="flex flex-col gap-6">
   
    {/* Нижнее фото */}
    <div>
      <img
        src="/lovable-uploads/mmk8.png"
        alt="ММК в 1930-е годы"
        className="w-full h-auto object-cover rounded-sm"
      />
    </div>
    <p className="text-sm text-gray-700 italic text-center">ММК в 1930-е годы</p>
  </div>
</div>
 {/* Верхнее фото */}
    <div>
      <img
        src="/lovable-uploads/mmk7.png"
        alt="Выдача стали. 1937 г."
        className="w-full h-auto object-cover rounded-sm"
      />
    </div>
    <p className="text-sm text-gray-700 italic text-center">Выдача стали. 1937 г.</p>

        <h3 className="text-center">Военное время</h3>
        <p className="indent-8 leading-relaxed">ММК сыграл важную роль в победе СССР над нацистской Германией, будучи крупнейшим сталелитейным предприятием в Советском Союзе и находясь вдали от боевых действий. Во время войны комбинат выпускал сталь для брони и снарядов. Первый заказ был получен уже 22 июня 1941 года. Из Мариуполя был эвакуирован самый мощный в СССР толстолистовой броневой стан "4500", который вступил в строй 1 ноября. Около половины брони на советских танках было изготовлено на ММК. Также комбинат обеспечивал производство снарядов: каждый третий снаряд был изготовлен из магнитогорской стали.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 max-w-6xl mx-auto">
  {/* Первая картинка */}
  <div className="flex flex-col items-center">
    <div>
      <img
        src="/lovable-uploads/mmk9.png"
        alt="Плавка железа"
        className="h-full object-contain"
      />
    </div>
    <p className="mt-2 text-sm text-gray-700 italic text-center"></p>
  </div>

  {/* Вторая картинка */}
  <div className="flex flex-col items-center">
    <div>
      <img
        src="/lovable-uploads/mmk10.png"
        alt="Выдача стали"
        className="h-full object-contain"
      />
    </div>
    <p className="mt-2 text-sm text-gray-700 italic text-center"></p>
  </div>

  {/* Третья картинка */}
  <div className="flex flex-col items-center">
    <div>
      <img
        src="/lovable-uploads/mmk11.png"
        alt="ММК в 30-е"
        className="h-full object-contain"
      />
    </div>
    <p className="mt-2 text-sm text-gray-700 italic text-center"></p>
  </div>
</div>
        
        <p className="indent-8 leading-relaxed">Работники комбината трудились в тяжелейших условиях в несколько смен подряд и без выходных. На фронт ушло около 7 тыс. рабочих, на их места пришли женщины, дети, подростки и пожилые люди. Они работали по 10–11 часов в день, иногда оставались на заводе по 10 дней подряд.</p>
        
        <h4 className="text-center">«Комсомольская» домна №6. 1943 год</h4>
        <div className="text-center">
    <img
      src="/lovable-uploads/kmsdom.png"
      alt="Начало строительных работ"
    />
    <p className="text-sm text-gray-700 mt-3"></p>
  </div>
        <p className="indent-8 leading-relaxed">В 1943 году свыше 3 тысяч молодых людей, не достигших призывного возраста, совершили трудовой подвиг, построив доменную печь №6 всего за восемь месяцев вместо запланированных трёх лет.</p>
        
        <h4 className="text-center">ММК в послевоенный период СССР</h4>
        <p className="indent-8 leading-relaxed">После войны ММК продолжил расширяться: строились новые цеха, обновлялось оборудования, увеличивались объемы производства. ММК стал одним из крупнейших металлургических комплексов мира. К 1980-м годам предприятие производило 16 миллионов тонн стали в год.</p>
        <div className="text-center">
    <img
      src="/lovable-uploads/mmk12.png"
      alt="Начало строительных работ"
      className="w-full h-auto object-cover"
    />
    <p className="text-sm text-gray-700 mt-3"></p>
  </div>        
        <h3 className="text-center">Постсоветский период</h3>
        <p className="indent-8 leading-relaxed">С распадом СССР в 1991 году Магнитогорский металлургический комбинат оказался в сложной экономической ситуации. Исчезли централизованные государственные заказы, экономический кризис привёл к снижению спроса на металлопродукцию, производство сократилось, зарплаты выплачивались с задержками, многие специалисты покидали предприятие. В 1996 году производство упало до 5,8 млн тонн стали.</p>
   
        <p className="indent-8 leading-relaxed">Ситуация начала улучшаться, когда комбинат начал активно внедрять новые технологии и выходить на мировые рынки. В 1992 году комбинат прошел приватизацию и стал акционерным обществом открытого типа. В 2000 году Магнитка вышла на фондовый рынок. ММК начал активно экспортировать продукцию в Европу, Азию и Ближний Восток.</p>
        
        <p className="indent-8 leading-relaxed">На сегодняшний день общая площадь предприятия составляет 11835 га, примерно 30% от площади всего Магнитогорска. ММК производит 13 миллионов тонн стали в год, что составляет около 18% от общего объёма производства в России. Завод обеспечивает работой более 50 000 человек, а его налоговые отчисления составляют значительную часть бюджета Магнитогорска и Челябинской области.</p>
        <div className="text-center">
    <img
      src="/lovable-uploads/mmk13.jpg"
      alt="Начало строительных работ"
      className="w-full h-auto rounded-xl shadow-xl object-cover"
    />
    <p className="text-sm text-gray-700 mt-3"></p>
  </div>     
      </div>
    </PageLayout>;
};
export default History;
