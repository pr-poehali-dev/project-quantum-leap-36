import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Найди место для тренировки",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Открой карту и найди ближайшие спортивные площадки, парки, залы или маршруты для бега.
            Фильтруй по типу, расстоянию и доступному инвентарю — и сразу получи детальную информацию о месте.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Уличные тренажёры, стадионы, бассейны, скалодромы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Фото, отзывы, инвентарь, душ, расписание работы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Навигация до места и внутри комплексов
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Получи план от ИИ",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Укажи свои цели — похудение, набор массы, подготовка к забегу — и ИИ составит персональный план
            тренировок на неделю с учётом уровня подготовки, погоды и ближайших площадок.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Планы для новичков, среднего и продвинутого уровня
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Советы по разминке, питанию и восстановлению
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Голосовой аудиогид прямо во время тренировки
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Тренируйся вместе",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Находи людей с похожими целями рядом с тобой, вступай в сообщества, участвуй в челленджах
            и делись результатами — тренировки превращаются в образ жизни.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Функция «Найти напарника» по уровню и целям
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Еженедельные и ежемесячные челленджи с наградами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Лента активности, фотоотчёты, таблица лидеров
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как работает FitMap</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три шага от идеи тренировки до результата — приложение ведёт вас на каждом этапе.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}