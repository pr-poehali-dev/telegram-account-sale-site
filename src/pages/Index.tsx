import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const accounts = [
  {
    id: 1,
    title: 'Премиум аккаунт Казахстан',
    price: 4500,
    verified: true,
    premium: true,
    age: '2 года',
    followers: '1.2К',
    country: 'kz',
    countryName: '🇰🇿 Казахстан',
    features: ['Telegram Premium', 'Верифицирован', 'Активность высокая']
  },
  {
    id: 2,
    title: 'Бизнес аккаунт Беларусь',
    price: 6800,
    verified: true,
    premium: true,
    age: '3 года',
    followers: '5.8К',
    country: 'by',
    countryName: '🇧🇾 Беларусь',
    features: ['Telegram Premium', 'Верифицирован', 'История сообщений']
  },
  {
    id: 3,
    title: 'Старый аккаунт Финляндия',
    price: 12200,
    verified: false,
    premium: false,
    age: '5 лет',
    followers: '320',
    country: 'fi',
    countryName: '🇫🇮 Финляндия',
    features: ['Старая регистрация', 'Чистая история', 'Без банов']
  },
  {
    id: 4,
    title: 'Премиум аккаунт Украина',
    price: 5200,
    verified: true,
    premium: true,
    age: '1.5 года',
    followers: '890',
    country: 'ua',
    countryName: '🇺🇦 Украина',
    features: ['Telegram Premium', 'Верифицирован', 'Активные подписки']
  },
  {
    id: 5,
    title: 'Бизнес аккаунт Польша',
    price: 8500,
    verified: true,
    premium: true,
    age: '4 года',
    followers: '12К',
    country: 'pl',
    countryName: '🇵🇱 Польша',
    features: ['Telegram Premium', 'Верифицирован', 'Большая аудитория']
  },
  {
    id: 6,
    title: 'Старый аккаунт Великобритания',
    price: 18000,
    verified: false,
    premium: false,
    age: '7 лет',
    followers: '150',
    country: 'gb',
    countryName: '🇬🇧 Великобритания',
    features: ['Раритетный', 'Оригинальная регистрация', 'Без блокировок']
  },
  {
    id: 7,
    title: 'Премиум аккаунт Германия',
    price: 9800,
    verified: true,
    premium: true,
    age: '3 года',
    followers: '2.5К',
    country: 'de',
    countryName: '🇩🇪 Германия',
    features: ['Telegram Premium', 'Верифицирован', 'Европейский номер']
  },
  {
    id: 8,
    title: 'Бизнес аккаунт Турция',
    price: 7200,
    verified: true,
    premium: false,
    age: '2.5 года',
    followers: '4.1К',
    country: 'tr',
    countryName: '🇹🇷 Турция',
    features: ['Верифицирован', 'История переписок', 'Активные группы']
  },
  {
    id: 9,
    title: 'Старый аккаунт Литва',
    price: 11500,
    verified: false,
    premium: true,
    age: '6 лет',
    followers: '580',
    country: 'lt',
    countryName: '🇱🇹 Литва',
    features: ['Telegram Premium', 'Старая регистрация', 'Чистая история']
  }
];

const countries = [
  { value: 'all', label: 'Все страны', icon: 'Globe' },
  { value: 'kz', label: '🇰🇿 Казахстан', icon: 'MapPin' },
  { value: 'by', label: '🇧🇾 Беларусь', icon: 'MapPin' },
  { value: 'fi', label: '🇫🇮 Финляндия', icon: 'MapPin' },
  { value: 'ua', label: '🇺🇦 Украина', icon: 'MapPin' },
  { value: 'pl', label: '🇵🇱 Польша', icon: 'MapPin' },
  { value: 'gb', label: '🇬🇧 Великобритания', icon: 'MapPin' },
  { value: 'de', label: '🇩🇪 Германия', icon: 'MapPin' },
  { value: 'tr', label: '🇹🇷 Турция', icon: 'MapPin' },
  { value: 'lt', label: '🇱🇹 Литва', icon: 'MapPin' }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || account.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <header className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Send" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TG Market
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex">
              <Icon name="Heart" className="mr-2" size={18} />
              Избранное
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="User" className="mr-2" size={18} />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Icon name="Shield" className="mr-2" size={16} />
              Безопасная сделка
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary/90 to-secondary bg-clip-text text-transparent leading-tight">
              Аккаунты Telegram
              <br />
              с гарантией
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Верифицированные аккаунты с историей. Полная проверка, безопасная передача, поддержка 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Icon name="Search" className="mr-2" size={20} />
                Каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-lg px-8">
                <Icon name="Info" className="mr-2" size={20} />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      <section className="py-12 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', label: 'Гарантия безопасности', value: '100%' },
              { icon: 'Users', label: 'Довольных клиентов', value: '5000+' },
              { icon: 'CheckCircle', label: 'Проверенных аккаунтов', value: '1200+' },
              { icon: 'Clock', label: 'Поддержка', value: '24/7' }
            ].map((stat, i) => (
              <Card key={i} className="text-center border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon name={stat.icon} className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Каталог аккаунтов</h3>
            <p className="text-muted-foreground">Выберите подходящий аккаунт из нашей коллекции</p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по аккаунтам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card/50 border-border/50"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full md:w-[240px] h-12 bg-card/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    <div className="flex items-center gap-2">
                      <Icon name={country.icon} size={16} />
                      {country.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccounts.map((account, i) => (
              <Card key={account.id} className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary">
                      <Icon name="MapPin" className="mr-1" size={14} />
                      {account.countryName}
                    </Badge>
                    {account.verified && (
                      <Badge variant="outline" className="border-green-500/50 text-green-400">
                        <Icon name="CheckCircle" className="mr-1" size={14} />
                        Верифицирован
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {account.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {account.age}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {account.followers}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {account.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {account.price.toLocaleString()}₽
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас?</h3>
            <p className="text-muted-foreground mb-12">Мы гарантируем безопасность и качество каждого аккаунта</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Shield', title: 'Безопасность', text: 'Полная проверка и гарантия на каждый аккаунт' },
                { icon: 'Zap', title: 'Быстро', text: 'Моментальная передача после оплаты' },
                { icon: 'HeadphonesIcon', title: 'Поддержка', text: 'Помощь 24/7 на всех этапах' }
              ].map((item, i) => (
                <div key={i} className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 bg-background/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Send" className="text-white" size={18} />
              </div>
              <span className="font-bold">TG Market</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 TG Market. Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;