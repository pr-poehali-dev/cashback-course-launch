import Icon from "@/components/ui/icon";
import { AnimSection, CountUp } from "./AnimHelpers";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/1c06ae49-6d29-4ef5-aea5-e928c52f40e4.jpg";

export default function HeroSection() {
  return (
    <>
      {/* Топ-бар */}
      <div className="bg-[#FF6B35] text-white text-center py-2.5 text-sm font-medium tracking-wide">
        <img src="https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/9403fce2-cef6-4e64-b193-94a62b41c640.jpg" alt="" className="w-5 h-5 rounded inline-block mr-1 align-middle" />
        Ограниченное предложение — цена 3 000 ₽ вместо 9 900 ₽
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
                    <img src="https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/6c0a0cad-cc2c-4d42-a983-dce1de2e7fdb.jpg" alt="Бонус" className="w-9 h-9 rounded-xl object-cover" />
                    <div>
                      <div className="text-xs text-gray-500">Бонус</div>
                      <div className="text-base font-bold text-[#10B981]">+7 000 ₽</div>
                    </div>
                  </div>
                  <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                    <img src="https://cdn.poehali.dev/projects/e6828564-96b9-4a92-8542-3bdfdbe90b47/files/9403fce2-cef6-4e64-b193-94a62b41c640.jpg" alt="Кешбек" className="w-9 h-9 rounded-xl object-cover" />
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
    </>
  );
}
