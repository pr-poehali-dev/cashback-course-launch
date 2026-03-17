import Icon from "@/components/ui/icon";
import { AnimSection } from "./AnimHelpers";

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

interface CourseSectionProps {
  openModule: number | null;
  setOpenModule: (i: number | null) => void;
}

export default function CourseSection({ openModule, setOpenModule }: CourseSectionProps) {
  return (
    <>
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
                <img src="https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/f27d06f0-0028-446b-9560-826338165796.jpg" alt="Результат" className="w-16 h-16 rounded-2xl object-cover mb-4" />
                <h3 className="font-oswald text-2xl font-bold uppercase mb-4">
                  Результат после курса
                </h3>
                <div className="space-y-4">
                  {[
                    { img: "https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/e08a132e-d243-401e-ada6-8344bd8dc668.jpg", text: "Настроены карты с максимальным кешбеком" },
                    { img: "https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/a95d44cd-1961-4f1a-9634-4ff632061f24.jpg", text: "Установлены приложения-автоматы возврата" },
                    { img: "https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/6c0a0cad-cc2c-4d42-a983-dce1de2e7fdb.jpg", text: "Получен бонус 7 000 ₽ на счёт" },
                    { img: "https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/6e5e0575-671c-4877-b958-8578dcc5356d.jpg", text: "Личный план кешбека на каждый месяц" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.2)" }}>
                      <img src={r.img} alt="" className="w-9 h-9 rounded-xl object-cover shrink-0" />
                      <span className="text-sm font-medium">{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>
    </>
  );
}
