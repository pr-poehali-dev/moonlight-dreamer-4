export function Benefits() {
  const benefits = [
    {
      icon: "⚖️",
      title: "Опыт более 20 лет",
      description: "Глубокая экспертиза в уголовных и гражданских делах",
    },
    {
      icon: "🏆",
      title: "Более 1500 выигранных дел",
      description: "Результативность, подтверждённая многолетней практикой",
    },
    {
      icon: "👥",
      title: "Штат профессионалов",
      description: "Команда юристов и адвокатов с опытом более 8 лет",
    },
    {
      icon: "📝",
      title: "Работа по договору",
      description: "Прозрачность, контроль и безопасность для клиента",
    },
    {
      icon: "🎯",
      title: "Индивидуальный подход",
      description: "Разработка эффективной стратегии защиты под вашу ситуацию",
    },
    {
      icon: "🔒",
      title: "Полная конфиденциальность",
      description: "Честность на всех этапах — от консультации до решения вопроса",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему именно нас</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Почему клиенты выбирают нас
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Опыт, профессионализм и индивидуальный подход к каждому делу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}