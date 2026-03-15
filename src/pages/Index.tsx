import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/1c06ae49-6d29-4ef5-aea5-e928c52f40e4.jpg";

const benefits = [
  {
    icon: "Percent",
    title: "До 100% кешбека",
    desc: "Узнайте реальные схемы возврата от 10 до 100% с покупок в популярных магазинах",
    color: "#FF6B35",
    bg: "#FFF3EE",
  },
  {
    icon: "Gift",
    title: "Бонус 7 000 ₽",
    desc: "Получите дополнительный денежный бонус сразу после прохождения первого модуля",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: "ShieldCheck",
    title: "100% законно",
    desc: "Все методы полностью легальны и проверены тысячами участников",
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    icon: "Zap",
    title: "Результат за 3 дня",
    desc: "Уже через 3 дня после старта вы начнёте получать деньги назад с покупок",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
];

const modules = [
  {
    num: "01",
    title: "Основы кешбека",
    desc: "Как работают системы кешбека, какие карты и приложения дают максимум",
    items: ["Топ-10 кешбек-карт 2024", "Лучшие приложения для возврата денег", "Как совмещать несколько систем"],
  },
  {
    num: "02",
    title: "Стратегии 10–50%",
    desc: "Проверенные схемы для постоянного возврата от 10 до 50% с любых покупок",
    items: ["Оплата через посредников", "Кешбек на ЖКХ и связь", "Возврат с онлайн-покупок"],
  },
  {
    num: "03",
    title: "Схемы до 100%",
    desc: "Продвинутые техники для получения 100% возврата на отдельные категории",
    items: ["Акционные категории банков", "Партнёрские программы", "Кешбек на путешествия"],
  },
  {
    num: "04",
    title: "Бонус 7 000 ₽",
    desc: "Пошаговая инструкция для получения бонуса сразу после регистрации",
    items: ["Активация бонуса за 20 минут", "Вывод на карту или счёт", "Проверенные источники бонусов"],
  },
  {
    num: "05",
    title: "Система автопилот",
    desc: "Настройте процесс один раз и получайте кешбек без лишних усилий",
    items: ["Автоматизация через приложения", "Калькулятор выгоды", "Личный план на месяц"],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Index() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  return (
    <div className="font-golos bg-white min-h-screen overflow-x-hidden">
      {/* Топ-бар */}
      <div className="bg-[#FF6B35] text-white text-center py-2.5 text-sm font-medium tracking-wide">
        🔥 Ограниченное предложение — цена 3 000 ₽ вместо 9 900 ₽
      </div>

      {/* HERO */}
      <section className="relative bg-white pt-12 pb-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFF3EE] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#ECFDF5] opacity-50 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-8 md:py-16">
              <AnimSection>
                <div className="inline-flex items-center gap-2 bg-[#FFF3EE] border border-[#FF6B35]/20 text-[#FF6B35] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <Icon name="TrendingUp" size={16} />
                  Онлайн-курс · Доступ сразу после оплаты
                </div>
              </AnimSection>

              <AnimSection delay={100}>
                <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 uppercase">
                  Получай{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #FF6B35, #FF9500)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    от 10% до 100%
                  </span>
                  {" "}кешбека
                </h1>
              </AnimSection>

              <AnimSection delay={200}>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                  Реальные схемы возврата денег с любых покупок и гарантированный{" "}
                  <strong className="text-[#10B981]">бонус 7 000 ₽</strong>{" "}
                  уже в первый день
                </p>
              </AnimSection>

              <AnimSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a
                    href="#buy"
                    className="group inline-flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a26] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[0_8px_30px_rgba(255,107,53,0.35)]"
                  >
                    Получить курс за 3 000 ₽
                    <Icon name="ArrowRight" size={20} />
                  </a>
                </div>
              </AnimSection>

              <AnimSection delay={400}>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Icon name="Users" size={16} className="text-[#FF6B35]" />
                    3 200+ учеников
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Star" size={16} className="text-[#F59E0B]" />
                    4.9 рейтинг
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="Clock" size={16} className="text-[#10B981]" />
                    5 модулей
                  </span>
                </div>
              </AnimSection>
            </div>

            <AnimSection delay={150}>
              <div className="relative flex justify-center md:justify-end animate-float">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-[#10B981]/20 rounded-3xl blur-2xl scale-110" />
                  <img
                    src={HERO_IMAGE}
                    alt="Кешбек с покупок"
                    className="relative w-full rounded-3xl shadow-2xl object-cover aspect-square"
                  />
                  <div className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 animate-pulse-scale">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="text-xs text-gray-500">Бонус</div>
                      <div className="text-base font-bold text-[#10B981]">+7 000 ₽</div>
                    </div>
                  </div>
                  <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="text-xs text-gray-500">Кешбек</div>
                      <div className="text-base font-bold text-[#FF6B35]">до 100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="bg-gray-900 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: 3200, suffix: "+", label: "Учеников прошли курс" },
              { val: 100, suffix: "%", label: "Максимальный кешбек" },
              { val: 7000, suffix: " ₽", label: "Гарантированный бонус" },
              { val: 3, suffix: " дня", label: "До первого кешбека" },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div>
                  <div className="font-oswald text-4xl md:text-5xl font-bold text-[#FF6B35] mb-1">
                    <CountUp target={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="inline-block bg-[#FFF3EE] text-[#FF6B35] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Почему этот курс
              </div>
              <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                4 причины начать сегодня
              </h2>
            </div>
          </AnimSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <AnimSection key={i} delay={i * 100}>
                <div
                  className="group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-gray-100"
                  style={{ background: b.bg }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ background: b.color }}
                  >
                    <Icon name={b.icon as "Percent"} size={26} className="text-white" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold text-gray-900 mb-2 uppercase">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Содержание курса */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="inline-block bg-[#ECFDF5] text-[#10B981] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Программа обучения
              </div>
              <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                5 модулей к финансовой свободе
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Каждый модуль — конкретные инструкции с реальными примерами и расчётами
              </p>
            </div>
          </AnimSection>

          <div className="space-y-4">
            {modules.map((m, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div
                  className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 cursor-pointer ${openModule === i ? "border-[#FF6B35] shadow-lg" : "border-transparent hover:border-gray-200 hover:shadow-md"}`}
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                >
                  <div className="flex items-center gap-5 p-6">
                    <div
                      className="font-oswald text-4xl font-bold shrink-0"
                      style={{ color: openModule === i ? "#FF6B35" : "#E5E7EB" }}
                    >
                      {m.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-oswald text-xl font-bold text-gray-900 uppercase">{m.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                    </div>
                    <div
                      className="shrink-0 transition-transform duration-300"
                      style={{ transform: openModule === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <Icon name="ChevronDown" size={22} className="text-gray-400" />
                    </div>
                  </div>

                  {openModule === i && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4 bg-[#FFFAF8]">
                      <ul className="space-y-2.5">
                        {m.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-700 text-sm">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center shrink-0">
                              <Icon name="Check" size={12} className="text-white" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimSection>
              <div>
                <div className="inline-block bg-[#EEF2FF] text-[#6366F1] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  Для кого этот курс
                </div>
                <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-8">
                  Вам подойдёт, если вы...
                </h2>
                <div className="space-y-4">
                  {[
                    "Делаете покупки в магазинах или онлайн и хотите возвращать деньги",
                    "Устали от того, что деньги «утекают» без остатка",
                    "Хотите получить реальный бонус 7 000 ₽ уже сегодня",
                    "Ищете простые и законные способы экономии",
                    "Никогда раньше не пользовались кешбеком",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Check" size={14} className="text-[#10B981]" />
                      </div>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

            <AnimSection delay={150}>
              <div className="rounded-3xl p-8 text-white" style={{ background: "linear-gradient(135deg, #FF6B35, #FF9500)" }}>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="font-oswald text-2xl font-bold uppercase mb-4">
                  Результат после курса
                </h3>
                <div className="space-y-4">
                  {[
                    { emoji: "💳", text: "Настроены карты с максимальным кешбеком" },
                    { emoji: "📱", text: "Установлены приложения-автоматы возврата" },
                    { emoji: "💰", text: "Получен бонус 7 000 ₽ на счёт" },
                    { emoji: "📈", text: "Личный план кешбека на каждый месяц" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.2)" }}>
                      <span className="text-2xl">{r.emoji}</span>
                      <span className="text-sm font-medium">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

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
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-gray-400 line-through text-2xl">9 900 ₽</span>
                  <span className="bg-[#10B981] text-white text-sm font-bold px-3 py-1 rounded-full">–70%</span>
                </div>
                <div className="font-oswald text-6xl font-bold text-gray-900">
                  3 000 <span className="text-3xl text-gray-500">₽</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Разовый платёж · Доступ навсегда</p>
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

              <button className="w-full text-white font-bold text-xl py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] font-golos" style={{ background: "#FF6B35", boxShadow: "0 8px 30px rgba(255,107,53,0.4)" }}>
                Купить курс за 3 000 ₽ 🚀
              </button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Оплата картой · Доступ открывается мгновенно
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
            <a
              href="#buy"
              className="inline-flex items-center gap-2 bg-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ color: "#FF6B35" }}
            >
              Получить курс — 3 000 ₽
              <Icon name="ArrowRight" size={22} />
            </a>
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
    </div>
  );
}
