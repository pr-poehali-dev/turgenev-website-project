import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'biography', label: 'Биография', icon: 'User' },
    { id: 'works', label: 'Произведения', icon: 'Book' },
    { id: 'gallery', label: 'Галерея', icon: 'ImageIcon' },
    { id: 'quotes', label: 'Цитаты', icon: 'Quote' },
    { id: 'timeline', label: 'Хронология', icon: 'Calendar' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' }
  ];

  const works = [
    { title: 'Отцы и дети', year: 1862, description: 'Роман о конфликте поколений и нигилизме' },
    { title: 'Дворянское гнездо', year: 1859, description: 'Повесть о любви и судьбе русского дворянства' },
    { title: 'Рудин', year: 1856, description: 'Роман о лишнем человеке в русской литературе' },
    { title: 'Накануне', year: 1860, description: 'История о любви и общественном долге' },
    { title: 'Записки охотника', year: 1852, description: 'Цикл рассказов о крестьянской жизни' },
    { title: 'Ася', year: 1858, description: 'Повесть о несбывшейся любви' }
  ];

  const quotes = [
    { text: 'Любовь сильнее смерти и страха смерти. Только ею, только любовью держится и движется жизнь.', work: 'Отцы и дети' },
    { text: 'Если ждать минуты, когда всё, решительно всё будет готово, никогда нельзя будет начать.', work: 'Накануне' },
    { text: 'Человек, который хочет сохранить веру в добро, должен верить в него, как верят дети.', work: 'Записки охотника' },
    { text: 'Природа — не храм, а мастерская, и человек в ней работник.', work: 'Отцы и дети' }
  ];

  const timelineEvents = [
    { year: 1818, event: 'Рождение в Орле' },
    { year: 1833, event: 'Поступление в Московский университет' },
    { year: 1843, event: 'Знакомство с Полиной Виардо' },
    { year: 1852, event: 'Публикация "Записок охотника"' },
    { year: 1862, event: 'Выход романа "Отцы и дети"' },
    { year: 1883, event: 'Смерть в Буживале, Франция' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold text-primary-foreground">
              Иван Тургенев
            </h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-primary-foreground/80'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-sm font-medium text-accent">1818 — 1883</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary">
                Иван Сергеевич Тургенев
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Великий русский писатель, поэт и драматург. Один из классиков русской литературы, 
                внёсший значительный вклад в развитие русского реализма.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('biography')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Узнать больше
                </Button>
                <Button 
                  onClick={() => scrollToSection('works')}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  <Icon name="Library" size={20} className="mr-2" />
                  Произведения
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <Card className="overflow-hidden border-accent/20 shadow-2xl">
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/projects/37b9f668-a0b5-4cbb-916b-aeadd69522a9/files/4ef79607-47a6-45b4-9edb-3bd57f94d751.jpg"
                    alt="Портрет Ивана Тургенева"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="biography" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon name="User" size={28} className="text-accent" />
            </div>
            <h3 className="text-4xl font-display font-bold text-primary">Биография</h3>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Иван Сергеевич Тургенев родился 9 ноября 1818 года в Орле в дворянской семье. 
              Детство провёл в имении Спасское-Лутовиново, где познакомился с жизнью крепостных крестьян, 
              что впоследствии нашло отражение в его творчестве.
            </p>
            <p>
              Образование получил в Московском и Петербургском университетах, затем продолжил обучение 
              в Берлинском университете. Тургенев свободно владел несколькими европейскими языками 
              и был хорошо знаком с западноевропейской культурой.
            </p>
            <p>
              Большую часть жизни провёл за границей, особенно во Франции, где сблизился с выдающимися 
              европейскими писателями. Несмотря на это, в центре его творчества всегда оставалась Россия, 
              её природа, люди и социальные проблемы.
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon name="Book" size={28} className="text-accent" />
            </div>
            <h3 className="text-4xl font-display font-bold text-primary">Произведения</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all hover:scale-105 border-accent/20 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Icon name="BookMarked" size={24} className="text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">{work.year}</span>
                  </div>
                  <h4 className="text-xl font-display font-semibold mb-2 text-primary group-hover:text-accent transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-muted-foreground">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon name="ImageIcon" size={28} className="text-accent" />
            </div>
            <h3 className="text-4xl font-display font-bold text-primary">Галерея</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-accent/20">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/projects/37b9f668-a0b5-4cbb-916b-aeadd69522a9/files/4ef79607-47a6-45b4-9edb-3bd57f94d751.jpg"
                  alt="Тургенев"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Портрет И.С. Тургенева</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-accent/20">
              <CardContent className="p-6 h-full flex flex-col justify-center bg-gradient-to-br from-accent/5 to-accent/10">
                <Icon name="Home" size={48} className="text-accent mb-4" />
                <h4 className="text-2xl font-display font-semibold mb-2 text-primary">
                  Спасское-Лутовиново
                </h4>
                <p className="text-muted-foreground">
                  Родовое имение Тургенева, где он провёл детство и создал многие свои произведения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="quotes" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon name="Quote" size={28} className="text-accent" />
            </div>
            <h3 className="text-4xl font-display font-bold text-primary">Цитаты</h3>
          </div>
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <Card key={index} className="border-l-4 border-l-accent border-accent/20">
                <CardContent className="p-6">
                  <blockquote className="text-xl font-body italic text-foreground mb-3 leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">— {quote.work}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon name="Calendar" size={28} className="text-accent" />
            </div>
            <h3 className="text-4xl font-display font-bold text-primary">Хронология жизни</h3>
          </div>
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-2xl font-display font-bold text-accent">{event.year}</span>
                </div>
                <div className="flex-1">
                  <Card className="border-accent/20 group-hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <p className="text-lg text-foreground">{event.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Icon name="Mail" size={28} className="text-accent" />
            </div>
            <h3 className="text-4xl font-display font-bold text-primary">Контакты</h3>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Для вопросов и предложений о творчестве Тургенева
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Icon name="Send" size={20} className="mr-2" />
            Написать письмо
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <p className="font-body">
            © 2024 Литературный сайт о Тургеневе. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
