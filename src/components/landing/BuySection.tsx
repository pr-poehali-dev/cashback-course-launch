import Icon from "@/components/ui/icon";
import { AnimSection } from "./AnimHelpers";

export default function BuySection() {
  return (
    <>
      {/* Блок покупки */}
      <section id="buy" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(255,107,53,0.1)", filter: "blur(60px)" }} />

        <div className="container max-w-2xl mx-auto px-4 relative">
          <AnimSection>
            <div className="text-center mb-10">
              <div className="inline-block text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,107,53,0.2)", color: "#FF6B35" }}>
                Специальное предложение
              </div>
              <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase mb-4">
                Начни зарабатывать на кешбеке
              </h2>
              <p className="text-gray-400 text-lg">
                Полный курс с пожизненным доступом и поддержкой
              </p>
            </div>
          </AnimSection>

          <AnimSection delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <span className="bg-[#10B981] text-white text-sm font-bold px-4 py-2 rounded-full">Бесплатно</span>
                <div className="font-oswald text-6xl font-bold text-gray-900 mt-4">
                  0 <span className="text-3xl text-gray-500">₽</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Полный доступ · Навсегда</p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "5 подробных видео-модулей",
                  "Гарантированный бонус 7 000 ₽",
                  "Пошаговые инструкции с примерами",
                  "Закрытый чат участников",
                  "Обновления курса бесплатно",
                  "Персональная поддержка куратора",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0">
                      <Icon name="Check" size={13} className="text-[#10B981]" />
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white font-bold text-lg py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] font-golos flex items-center justify-center gap-2"
                  style={{ background: "#0077FF", boxShadow: "0 8px 24px rgba(0,119,255,0.35)" }}
                >
                  <Icon name="Users" size={20} />
                  ВКонтакте
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white font-bold text-lg py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] font-golos flex items-center justify-center gap-2"
                  style={{ background: "#26A5E4", boxShadow: "0 8px 24px rgba(38,165,228,0.35)" }}
                >
                  <Icon name="Send" size={20} />
                  Telegram
                </a>
              </div>

              <p className="text-center text-gray-400 text-xs mt-4">
                Присоединяйся к сообществу и получи доступ к курсу
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-12">
              <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                Частые вопросы
              </h2>
            </div>
          </AnimSection>

          <div className="space-y-4">
            {[
              { q: "Это законно?", a: "Да, на 100%. Все методы основаны на официальных программах лояльности банков и магазинов. Вы не нарушаете никаких правил." },
              { q: "Когда я получу бонус 7 000 ₽?", a: "Бонус доступен уже в первом модуле. При точном следовании инструкции вы получите деньги в первый же день." },
              { q: "Мне нужны специальные знания?", a: "Нет. Курс рассчитан на полных новичков. Всё объясняется пошагово с конкретными примерами." },
              { q: "Какой доступ к курсу?", a: "Доступ пожизненный. Вы получаете все материалы сразу после оплаты и все будущие обновления бесплатно." },
            ].map((faq, i) => (
              <AnimSection key={i} delay={i * 60}>
                <div className="border border-gray-100 rounded-2xl p-6 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FFF3EE] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[#FF6B35] font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA финальный */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #FF6B35, #FF9500)" }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              Не откладывай на потом
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
              Каждый день без курса — это деньги, которые уходят без возврата
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ background: "#0077FF", color: "#fff" }}
              >
                <Icon name="Users" size={20} />
                ВКонтакте
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ background: "#26A5E4", color: "#fff" }}
              >
                <Icon name="Send" size={20} />
                Telegram
              </a>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 Курс «Кешбек 10–100%» · Все права защищены</p>
        <p className="mt-2 text-xs text-gray-600">
          Результаты могут отличаться в зависимости от индивидуальных условий
        </p>
      </footer>
    </>
  );
}