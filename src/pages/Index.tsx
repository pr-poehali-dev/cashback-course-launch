import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

/* ─── Scroll-reveal hook ─── */
function useSR() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let frame = 0;
        const total = 70;
        const tick = () => {
          frame++;
          setN(Math.round(to * (frame / total)));
          if (frame < total) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ─── Module accordion ─── */
function ModuleItem({ num, title, desc, items, open, onToggle }: {
  num: string; title: string; desc: string; items: string[];
  open: boolean; onToggle: () => void;
}) {
  return (
    <div
      className="border-b cursor-pointer group"
      style={{ borderColor: "rgba(201,168,76,0.2)" }}
      onClick={onToggle}
    >
      <div className="flex items-center gap-5 py-6 px-1 select-none">
        <span className="font-oswald text-5xl font-bold w-16 shrink-0 leading-none"
          style={{ color: open ? "var(--gold)" : "rgba(255,255,255,0.08)" }}>
          {num}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-oswald text-xl md:text-2xl font-bold uppercase tracking-wide text-white transition-colors"
            style={{ color: open ? "var(--gold-light)" : undefined }}>
            {title}
          </p>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</p>
        </div>
        <div className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: open ? "var(--gold)" : "rgba(255,255,255,0.15)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: open ? "var(--gold)" : "rgba(255,255,255,0.4)"
          }}>
          <Icon name="Plus" size={16} />
        </div>
      </div>
      <div className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}>
        <div className="pb-6 px-1 pl-[84px] space-y-2.5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const MODULES = [
  { num: "01", title: "Основы кешбека", desc: "Как работают системы возврата и что реально приносит деньги",
    items: ["Топ-10 кешбек-карт 2024", "Лучшие приложения для возврата", "Как совмещать несколько систем"] },
  { num: "02", title: "Стратегии 10–50%", desc: "Проверенные схемы постоянного возврата с любых покупок",
    items: ["Оплата через посредников", "Кешбек на ЖКХ и связь", "Возврат с онлайн-покупок"] },
  { num: "03", title: "Схемы до 100%", desc: "Продвинутые техники полного возврата на отдельные категории",
    items: ["Акционные категории банков", "Партнёрские программы", "Кешбек на путешествия"] },
  { num: "04", title: "Бонус 7 000 ₽", desc: "Пошаговая инструкция активации бонуса в первый день",
    items: ["Активация за 20 минут", "Вывод на карту или счёт", "Проверенные источники бонусов"] },
  { num: "05", title: "Система автопилот", desc: "Настройте один раз — получайте без лишних усилий",
    items: ["Автоматизация через приложения", "Калькулятор выгоды", "Личный план на месяц"] },
];

const MARQUEE = [
  "До 100% кешбека", "Законно", "Бонус 7 000 ₽", "Результат за 3 дня",
  "3 200+ учеников", "Рейтинг 4.9", "Пожизненный доступ", "Без опыта"
];

export default function Index() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  /* Global scroll-reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".sr");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r1 = useSR(), r2 = useSR(), r3 = useSR(), r4 = useSR(), r5 = useSR(), r6 = useSR();

  return (
    <div className="grain font-golos overflow-x-hidden" style={{ background: "var(--ink)", color: "var(--cream)" }}>

      {/* ── TOP BAR ── */}
      <div className="text-center py-2.5 text-xs font-semibold tracking-widest uppercase"
        style={{ background: "var(--gold)", color: "var(--ink)" }}>
        ограниченная цена — 3 000 ₽ вместо 9 900 ₽ · осталось мест: 27
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 pb-0">
        {/* Ambient glows */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
        {/* Vertical rule */}
        <div className="absolute top-0 right-[40%] w-px h-full pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.06), transparent)" }} />

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">

          {/* Eyebrow */}
          <div ref={r1} className="sr mb-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold px-4 py-2 rounded-full border"
              style={{ borderColor: "rgba(201,168,76,0.3)", color: "var(--gold)", background: "rgba(201,168,76,0.06)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
              Онлайн-курс · Доступ сразу после оплаты
            </div>
          </div>

          {/* Headline */}
          <div className="sr sr-delay-1 mb-6 max-w-5xl">
            <h1 className="font-oswald font-bold uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(52px, 9vw, 120px)" }}>
              <span style={{ color: "rgba(255,255,255,0.92)" }}>Получай</span>{" "}
              <br className="hidden sm:block" />
              <span className="animate-shimmer">от 10% до 100%</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.92)" }}>кешбека</span>
            </h1>
          </div>

          {/* Sub + CTA */}
          <div className="sr sr-delay-2 grid md:grid-cols-2 gap-8 items-end mb-16">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
              Реальные схемы возврата денег с любых покупок.{" "}
              <span style={{ color: "var(--gold-light)" }}>Бонус&nbsp;7&nbsp;000&nbsp;₽</span>{" "}
              гарантированно уже в первый день
            </p>
            <div className="flex md:justify-end">
              <a href="#buy"
                className="group inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{ background: "var(--gold)", color: "var(--ink)", boxShadow: "0 0 40px rgba(201,168,76,0.22)" }}>
                Получить курс — 3 000 ₽
                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="sr sr-delay-3 grid grid-cols-2 md:grid-cols-4"
            style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
            {[
              { val: 3200, suf: "+", label: "учеников" },
              { val: 100, suf: "%", label: "макс. кешбек" },
              { val: 7000, suf: "₽", label: "гарантированный бонус" },
              { val: 3, suf: " дня", label: "до первого результата" },
            ].map((s, i) => (
              <div key={i} className="py-8 px-2 md:px-6"
                style={{ borderRight: i < 3 ? "1px solid rgba(201,168,76,0.12)" : "none" }}>
                <div className="font-oswald font-bold text-3xl md:text-4xl mb-1" style={{ color: "var(--gold)" }}>
                  <Counter to={s.val} suffix={s.suf} />
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden py-4 border-y"
        style={{ borderColor: "rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.02)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-8 text-xs uppercase tracking-widest font-semibold"
              style={{ color: i % 2 === 0 ? "var(--gold)" : "rgba(255,255,255,0.2)" }}>
              {item}
              <span style={{ color: "rgba(201,168,76,0.25)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY ── */}
      <section className="py-28 md:py-36" style={{ background: "var(--ink-soft)" }}>
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div ref={r2} className="sr flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "var(--gold)" }}>— Почему этот курс</p>
              <h2 className="font-oswald font-bold uppercase text-4xl md:text-6xl leading-tight text-white">
                4 причины<br />начать сегодня
              </h2>
            </div>
            <p className="md:max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Всё что нужно — в одном месте. Без воды, только рабочие инструменты
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl"
            style={{ background: "rgba(201,168,76,0.07)" }}>
            {[
              { n: "01", icon: "Percent", title: "До 100%\nкешбека", desc: "Реальные схемы возврата от 10 до 100% с покупок в популярных магазинах" },
              { n: "02", icon: "Gift", title: "Бонус\n7 000 ₽", desc: "Гарантированный денежный бонус уже после первого модуля курса" },
              { n: "03", icon: "ShieldCheck", title: "100%\nзаконно", desc: "Все методы основаны на официальных программах лояльности банков" },
              { n: "04", icon: "Zap", title: "Результат\nза 3 дня", desc: "Уже через 3 дня вы начнёте получать деньги назад с любых покупок" },
            ].map((b, i) => (
              <div key={i} className="group p-8 md:p-10 transition-colors duration-500"
                style={{ background: "var(--ink-soft)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.05)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--ink-soft)")}>
                <div className="flex justify-between items-start mb-10">
                  <span className="font-oswald text-sm font-bold" style={{ color: "rgba(255,255,255,0.1)" }}>{b.n}</span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}>
                    <Icon name={b.icon as "Percent"} size={18} />
                  </div>
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase leading-tight mb-4 text-white whitespace-pre-line">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-28 md:py-36" style={{ background: "var(--ink)" }}>
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div ref={r3} className="sr grid md:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "var(--gold)" }}>— Программа обучения</p>
              <h2 className="font-oswald font-bold uppercase text-4xl md:text-6xl leading-tight text-white">
                5 модулей<br />к результату
              </h2>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Каждый модуль — конкретные инструкции с реальными примерами. Без теории ради теории.
            </p>
          </div>
          <div className="sr sr-delay-1">
            {MODULES.map((m, i) => (
              <ModuleItem key={i} {...m} open={openModule === i} onToggle={() => setOpenModule(openModule === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="py-28 md:py-36" style={{ background: "var(--ink-soft)" }}>
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div ref={r4} className="sr grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "var(--gold)" }}>— Для кого</p>
              <h2 className="font-oswald font-bold uppercase text-4xl md:text-5xl leading-tight text-white mb-12">
                Вам подойдёт,<br />если вы...
              </h2>
              <div className="space-y-5">
                {[
                  "Делаете покупки и хотите возвращать реальные деньги",
                  "Устали от того, что деньги утекают без остатка",
                  "Хотите получить бонус 7 000 ₽ уже сегодня",
                  "Ищете простые и законные способы экономии",
                  "Никогда раньше не пользовались кешбеком",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-5 group cursor-default">
                    <div className="shrink-0 mt-1.5 w-px transition-all duration-300 group-hover:opacity-100"
                      style={{ height: "16px", background: "var(--gold)", opacity: 0.5 }} />
                    <p className="text-base leading-relaxed transition-colors duration-300"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl p-8 md:p-10 border"
                style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 100%)", borderColor: "rgba(201,168,76,0.18)" }}>
                <p className="text-xs uppercase tracking-[0.25em] mb-6" style={{ color: "var(--gold)" }}>— Результат после курса</p>
                <div className="space-y-5">
                  {[
                    { e: "💳", t: "Настроены карты с максимальным кешбеком" },
                    { e: "📱", t: "Установлены приложения-автоматы возврата" },
                    { e: "💰", t: "Получен бонус 7 000 ₽ на счёт" },
                    { e: "📈", t: "Личный план кешбека на каждый месяц" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-5 py-4 border-b last:border-0"
                      style={{ borderColor: "rgba(201,168,76,0.08)" }}>
                      <span className="text-3xl">{r.e}</span>
                      <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.72)" }}>{r.t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-14 h-14 border-t-2 border-r-2 rounded-tr-2xl opacity-25"
                style={{ borderColor: "var(--gold)" }} />
              <div className="absolute -bottom-3 -left-3 w-14 h-14 border-b-2 border-l-2 rounded-bl-2xl opacity-25"
                style={{ borderColor: "var(--gold)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section id="buy" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

        <div className="container max-w-3xl mx-auto px-4 md:px-8 relative">
          <div ref={r5} className="sr text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] mb-5" style={{ color: "var(--gold)" }}>— Специальное предложение</p>
            <h2 className="font-oswald font-bold uppercase text-4xl md:text-6xl leading-tight text-white mb-4">
              Начни зарабатывать<br />на кешбеке
            </h2>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.38)" }}>
              Полный курс · Пожизненный доступ · Поддержка куратора
            </p>
          </div>

          <div ref={r6} className="sr sr-delay-1 rounded-2xl p-8 md:p-12 border"
            style={{ background: "var(--ink-soft)", borderColor: "rgba(201,168,76,0.18)", boxShadow: "0 0 80px rgba(201,168,76,0.04)" }}>
            {/* Price */}
            <div className="text-center mb-10 pb-10 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-xl line-through" style={{ color: "rgba(255,255,255,0.22)" }}>9 900 ₽</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: "rgba(45,158,107,0.18)", color: "var(--green-light)" }}>−70%</span>
              </div>
              <div className="font-oswald font-bold leading-none mb-2" style={{ fontSize: "80px", color: "var(--gold)" }}>
                3 000 <span className="text-3xl" style={{ color: "rgba(255,255,255,0.35)" }}>₽</span>
              </div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.28)" }}>
                Разовый платёж · Доступ навсегда
              </p>
            </div>

            {/* Includes */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {["5 подробных видео-модулей", "Гарантированный бонус 7 000 ₽", "Пошаговые инструкции с примерами",
                "Закрытый чат участников", "Обновления курса бесплатно", "Поддержка куратора"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(45,158,107,0.15)", color: "var(--green-light)" }}>
                    <Icon name="Check" size={11} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              className="w-full font-oswald font-bold text-xl uppercase tracking-wider py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
              style={{ background: "var(--gold)", color: "var(--ink)", boxShadow: "0 8px 40px rgba(201,168,76,0.28)" }}>
              Купить курс за 3 000 ₽
            </button>
            <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.22)" }}>
              Оплата картой · Доступ открывается мгновенно
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28" style={{ background: "var(--ink-soft)" }}>
        <div className="container max-w-3xl mx-auto px-4 md:px-8">
          <div className="sr text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "var(--gold)" }}>— FAQ</p>
            <h2 className="font-oswald font-bold uppercase text-4xl md:text-5xl text-white">Частые вопросы</h2>
          </div>
          <div className="sr sr-delay-1 space-y-0">
            {[
              { q: "Это законно?", a: "Да, на 100%. Все методы основаны на официальных программах лояльности банков и магазинов." },
              { q: "Когда я получу бонус 7 000 ₽?", a: "Бонус доступен уже в первом модуле. При точном следовании инструкции вы получите деньги в первый же день." },
              { q: "Нужны ли специальные знания?", a: "Нет. Курс рассчитан на полных новичков. Всё объясняется пошагово с конкретными примерами." },
              { q: "Какой доступ к курсу?", a: "Пожизненный. Все материалы сразу после оплаты и все будущие обновления — бесплатно." },
            ].map((f, i) => (
              <details key={i} className="group border-b" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
                <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none select-none">
                  <span className="font-medium text-base" style={{ color: "rgba(255,255,255,0.82)" }}>{f.q}</span>
                  <Icon name="Plus" size={16} className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                    style={{ color: "var(--gold)" } as React.CSSProperties} />
                </summary>
                <p className="pb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 text-center relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div className="container max-w-2xl mx-auto px-4">
          <div className="sr">
            <p className="font-oswald font-bold uppercase text-4xl md:text-5xl text-white mb-4 leading-tight">
              Не откладывай на потом
            </p>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.38)" }}>
              Каждый день без курса — деньги, которые уходят без возврата
            </p>
            <a href="#buy"
              className="inline-flex items-center gap-3 font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ background: "var(--gold)", color: "var(--ink)", boxShadow: "0 0 60px rgba(201,168,76,0.18)" }}>
              Получить курс — 3 000 ₽
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 border-t text-center" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.18)" }}>
          © 2024 Курс «Кешбек 10–100%» · Все права защищены
        </p>
      </footer>
    </div>
  );
}
