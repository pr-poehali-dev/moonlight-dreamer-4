import { Button } from "@/components/ui/button"

export function Booking() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы начать?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Запишитесь на консультацию</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Оставьте заявку — и Елена Сергеевна свяжется с вами, чтобы обсудить вашу ситуацию
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                required
                placeholder="Телефон"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <select
                required
                defaultValue=""
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="" disabled>Категория дела</option>
                <option value="criminal">Уголовное дело</option>
                <option value="civil">Гражданское дело</option>
                <option value="other">Другое / консультация</option>
              </select>
              <textarea
                rows={4}
                placeholder="Кратко опишите вашу ситуацию"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                ✓ Конфиденциальность • ✓ Работаем по договору • ✓ Быстрый ответ
              </p>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Как мы работаем</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-foreground">1. Консультация</p>
                  <p className="text-sm text-muted-foreground">Обсуждаем вашу ситуацию и оцениваем перспективы дела</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📝</span>
                <div>
                  <p className="font-semibold text-foreground">2. Договор</p>
                  <p className="text-sm text-muted-foreground">Заключаем договор — прозрачно и без скрытых условий</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">⚖️</span>
                <div>
                  <p className="font-semibold text-foreground">3. Стратегия защиты</p>
                  <p className="text-sm text-muted-foreground">Разрабатываем индивидуальный план действий по делу</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-foreground">4. Полное сопровождение</p>
                  <p className="text-sm text-muted-foreground">Ведём дело до окончательного решения вопроса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}