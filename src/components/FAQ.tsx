import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "По каким делам вы работаете?",
      answer:
        "Мы ведём как уголовные, так и гражданские дела. Опыт более 20 лет и работа в Следственном комитете позволяют браться даже за самые сложные ситуации.",
    },
    {
      question: "Как проходит первая консультация?",
      answer:
        "На консультации мы обсуждаем вашу ситуацию, оцениваем перспективы дела и предлагаем возможные стратегии защиты. Оставьте заявку — и мы свяжемся с вами в ближайшее время.",
    },
    {
      question: "Вы работаете по договору?",
      answer:
        "Да, работа ведётся исключительно по договору. Это обеспечивает прозрачность, контроль и безопасность для клиента на всех этапах.",
    },
    {
      question: "Гарантируете ли вы конфиденциальность?",
      answer:
        "Безусловно. Мы гарантируем индивидуальный подход, честность и полную конфиденциальность на всех этапах работы.",
    },
    {
      question: "Кто будет вести моё дело?",
      answer:
        "Ваше дело ведёт Елена Сергеевна лично, при поддержке команды юристов и адвокатов с опытом более 8 лет. Это обеспечивает полное сопровождение от консультации до решения вопроса.",
    },
    {
      question: "Сколько стоят услуги?",
      answer:
        "Стоимость зависит от сложности и категории дела. На консультации мы озвучим прозрачную цену, которая фиксируется в договоре — без скрытых комиссий.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}