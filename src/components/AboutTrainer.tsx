export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="https://cdn.poehali.dev/projects/dc481425-d53f-4db4-96c3-c3c1839aef7a/files/f7462b1b-517c-474e-8a30-c9f5c53fde0b.jpg" alt="Адвокат Мамедова Елена Сергеевна" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">Об адвокате</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Мамедова Елена Сергеевна
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Адвокат с опытом в сфере юридических услуг более 20 лет. До получения статуса адвоката
              успешно работала в Следственном комитете, что дало уникальный опыт в решении самых
              сложных дел.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              За годы практики Елена Сергеевна зарекомендовала себя как надёжный и результативный
              специалист. Под её руководством работает команда юристов и адвокатов с опытом более
              8 лет, готовая помочь в любой ситуации.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Опыт в Следственном комитете</p>
                  <p className="text-sm text-muted-foreground">Глубокое знание всех нюансов дел</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">1500+ выигранных дел</p>
                  <p className="text-sm text-muted-foreground">Результат, подтверждённый практикой</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Работа по договору</p>
                  <p className="text-sm text-muted-foreground">Прозрачность и конфиденциальность</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}