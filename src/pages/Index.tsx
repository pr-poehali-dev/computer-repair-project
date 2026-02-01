import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Smartphone',
      title: 'Ремонт телефонов',
      description: 'Ремонт смартфонов любых марок. Замена экранов, аккумуляторов, восстановление после воды.',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: 'Laptop',
      title: 'Ремонт ноутбуков',
      description: 'Диагностика и ремонт ноутбуков любых производителей. Замена комплектующих, чистка, установка ПО.',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: 'Monitor',
      title: 'Ремонт компьютеров',
      description: 'Профессиональный ремонт настольных компьютеров. Апгрейд, сборка новых систем, устранение неисправностей.',
      gradient: 'from-accent to-primary'
    },
    {
      icon: 'HardDrive',
      title: 'Восстановление данных',
      description: 'Восстановление информации с неисправных носителей. Работаем с любыми типами накопителей.',
      gradient: 'from-primary to-accent'
    },
    {
      icon: 'Wifi',
      title: 'Настройка сети',
      description: 'Настройка локальных сетей, Wi-Fi роутеров, подключение к интернету. Быстро и надежно.',
      gradient: 'from-secondary to-primary'
    },
    {
      icon: 'Settings',
      title: 'Установка ПО',
      description: 'Установка операционных систем и программного обеспечения. Настройка под ваши задачи.',
      gradient: 'from-accent to-secondary'
    },
    {
      icon: 'Shield',
      title: 'Удаление вирусов',
      description: 'Комплексная очистка от вирусов и вредоносного ПО. Установка защитных программ.',
      gradient: 'from-primary to-secondary'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Новая заявка с сайта');
    const body = encodeURIComponent(
      `Имя: ${formData.name}\nТелефон: ${formData.phone}\n\nСообщение:\n${formData.message}`
    );
    
    window.location.href = `mailto:help@xn--52-6kc3bfr2e.xn--p1ai?subject=${subject}&body=${body}`;
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/d456422a-543c-4d46-bee9-2e279764b9a7.png" 
              alt="Дрим Тим" 
              className="h-12 w-auto"
            />
            <div>
              <h2 className="text-xl font-bold text-primary">Дрим Тим</h2>
              <p className="text-xs text-muted-foreground">Сервисный центр</p>
            </div>
          </div>
          <Button variant="default" size="lg" asChild>
            <a href="tel:+79966596511">
              <Icon name="Phone" className="mr-2" size={18} />
              +7 (996) 659-65-11
            </a>
          </Button>
        </div>
      </header>
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ремонт компьютеров и ноутбуков
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Профессиональный ремонт любой сложности. Быстро, качественно, с гарантией.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="text-lg font-semibold" asChild>
                  <a href="tel:+79966596511">
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 (996) 659-65-11
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:bg-green-600/20" asChild>
                  <a href="https://wa.me/79966596511" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:bg-blue-500/20" asChild>
                  <a href="https://t.me/+79966596511" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/06c2bbe0-6f63-4c93-a805-6ae61d2aaae9/files/743ed822-f91b-4a6d-8cf3-ebfde5a6b312.jpg" 
                alt="Ремонт компьютеров"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground">Комплексное обслуживание компьютерной техники</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличный сервис! Быстро починили ноутбук, вернули в тот же день. Цены адекватные, мастера профессионалы."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div>
                    <p className="font-medium">Александр</p>
                    <p className="text-sm text-muted-foreground">2 недели назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Спасибо за восстановление данных! Думала всё потеряла, но ребята смогли всё вытащить с жесткого диска."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div>
                    <p className="font-medium">Мария</p>
                    <p className="text-sm text-muted-foreground">1 месяц назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Обращался для чистки и замены термопасты. Всё сделали качественно, компьютер перестал шуметь и греться."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                    Д
                  </div>
                  <div>
                    <p className="font-medium">Дмитрий</p>
                    <p className="text-sm text-muted-foreground">3 недели назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Icon name="MapPin" size={32} className="text-primary" />
                Наш адрес
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-lg">Нижегородская обл., п. Ильиногорск</p>
                  <p className="text-muted-foreground">ул. Спортивная, д. 1, ТЦ "Космос", 2 этаж</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="Phone" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+79966596511" className="font-medium text-lg hover:text-primary transition-colors">
                    +7 (996) 659-65-11
                  </a>
                  <a href="tel:+79991376048" className="text-muted-foreground text-sm hover:text-primary transition-colors block mt-1">
                    +7 (999) 137-60-48
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="Clock" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Понедельник - Суббота</p>
                  <p className="text-muted-foreground">с 9:00 до 18:00</p>
                  <p className="font-medium mt-2">Воскресенье</p>
                  <p className="text-muted-foreground">Выходной</p>
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <Button className="w-full" size="lg" asChild>
                  <a href="https://yandex.ru/maps/?text=Нижегородская обл., п. Ильиногорск, ул. Спортивная, д. 1" target="_blank" rel="noopener noreferrer">
                    <Icon name="Navigation" className="mr-2" size={20} />
                    Построить маршрут
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Оставьте заявку</CardTitle>
              <CardDescription className="text-lg">Мы свяжемся с вами в течение 15 минут</CardDescription>
            </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите проблему"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 text-base"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg font-semibold">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              <img 
                src="https://cdn.poehali.dev/files/d456422a-543c-4d46-bee9-2e279764b9a7.png" 
                alt="Дрим Тим" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="text-white text-center md:text-left">
                <h3 className="font-bold text-lg">Дрим Тим</h3>
                <p className="text-sm text-white/80">Сервисный центр</p>
              </div>
            </div>
            <div className="text-white text-center md:text-left">
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-white/90">
                <p>+7 (996) 659-65-11</p>
                <p className="text-sm text-white/70">+7 (999) 137-60-48</p>
                <p className="text-sm">Нижегородская обл., п. Ильиногорск</p>
                <p className="text-sm">ул. Спортивная, д. 1, ТЦ "Космос", 2 этаж</p>
              </div>
            </div>
            <div className="text-white text-center md:text-left">
              <h4 className="font-bold mb-3">Режим работы</h4>
              <p className="text-white/90">Ежедневно</p>
              <p className="text-white/90">с 9:00 до 18:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-white/80">
            <p>© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;