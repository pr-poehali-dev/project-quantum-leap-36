import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Для кого подходит FitMap?",
      answer:
        "Для всех, кто хочет тренироваться на улице или в городе: новичков, которые только начинают, любителей бега и воркаута, людей, готовящихся к соревнованиям. Вы указываете уровень подготовки при регистрации — и приложение адаптирует рекомендации под вас.",
    },
    {
      question: "Как ИИ составляет план тренировок?",
      answer:
        "ИИ учитывает вашу цель (похудение, набор массы, подготовка к забегу), уровень подготовки, историю тренировок, погоду и расположение ближайших спортивных площадок. На основе этого формируется план на неделю с чередованием видов активности.",
    },
    {
      question: "Откуда берутся данные о площадках?",
      answer:
        "Мы собираем данные из открытых источников, партнёрских баз данных и краудсорсинга — пользователи сами добавляют и обновляют информацию о местах. Каждая площадка проходит модерацию, а отзывы помогают поддерживать актуальность.",
    },
    {
      question: "Можно ли бронировать корты и дорожки в бассейне?",
      answer:
        "Да, для партнёрских объектов доступно бронирование прямо из приложения. Вы выбираете время, получаете подтверждение и можете добавить тренировку в календарь. Список партнёров постоянно расширяется.",
    },
    {
      question: "Какие трекеры и приложения поддерживаются?",
      answer:
        "FitMap синхронизируется с Apple Watch, Fitbit, Xiaomi Mi Band, Garmin, Google Fit и Samsung Health. Данные о пульсе, калориях и шагах учитываются автоматически при формировании рекомендаций.",
    },
    {
      question: "Приложение работает без интернета?",
      answer:
        "Базовые функции — карта, сохранённые маршруты и тренировочный план — доступны офлайн. Для получения новых рекомендаций от ИИ, актуальной погоды и социального функционала нужно подключение к интернету.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать перед началом работы с FitMap.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}