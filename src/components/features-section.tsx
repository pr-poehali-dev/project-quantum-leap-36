import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "ИИ-тренер в кармане",
    description: "Персональный план тренировок на неделю с чередованием активностей, площадок и нагрузки — на основе ваших целей, расписания и погоды.",
    icon: "Brain",
    badge: "ИИ",
  },
  {
    title: "Карта спортивных мест",
    description: "Тысячи площадок, залов, парков и маршрутов на одной карте с фильтрами, фото, отзывами и графиком работы.",
    icon: "MapPin",
    badge: "Навигация",
  },
  {
    title: "Маршруты для бега и велосипеда",
    description: "Оптимальные маршруты разной длины и сложности с учётом рельефа, загруженности и мест для отдыха по пути.",
    icon: "Route",
    badge: "Маршруты",
  },
  {
    title: "Календарь и прогресс",
    description: "Планируйте занятия, получайте напоминания и следите за прогрессом — калории, дистанция, время и графики роста.",
    icon: "CalendarDays",
    badge: "Статистика",
  },
  {
    title: "Сообщества и челленджи",
    description: "Группы по интересам, совместные тренировки, еженедельные челленджи и таблица лидеров для мотивации.",
    icon: "Users",
    badge: "Социальность",
  },
  {
    title: "Синхронизация с трекерами",
    description: "Подключите Apple Watch, Garmin, Xiaomi, Google Fit или Samsung Health — данные учитываются автоматически.",
    icon: "Smartphone",
    badge: "Интеграция",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для тренировок — в одном месте</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            FitMap объединяет карту, планирование, ИИ-рекомендации и социальный функционал в едином приложении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500">
                    <Icon name={feature.icon} size={32} fallback="Star" />
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}