/* empty css              */import{a as t,_ as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m,e as b}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as f}from"./proxy-BroObIT1.js";const E={gateway:"API Gateway",auth:"Auth",orders:"Orders",db:"DB"},T={gateway:"indigo",auth:"sky",orders:"amber",db:"rose"},p=[{id:"root",parentId:null,service:"gateway",operation:"GET /checkout",startMs:0,durationMs:180},{id:"auth",parentId:"root",service:"auth",operation:"POST /verify-token",startMs:10,durationMs:40},{id:"orders",parentId:"root",service:"orders",operation:"GET /orders/:id",startMs:15,durationMs:150},{id:"orders-db",parentId:"orders",service:"db",operation:"SELECT * FROM orders WHERE id = ?",startMs:25,durationMs:130}],c=Math.max(...p.map(s=>s.startMs+s.durationMs));function S(s){let e=0,r=s;for(;r.parentId;){const a=p.find(o=>o.id===r.parentId);if(!a)break;e+=1,r=a}return e}const d=[{id:1,spanId:"root",description:"Запрос GET /checkout приходит на API Gateway — открывается корневой спан трейса."},{id:2,spanId:"auth",description:"Gateway параллельно вызывает Auth-сервис, чтобы проверить токен запроса."},{id:3,spanId:"orders",description:"И одновременно, не дожидаясь ответа Auth, вызывает Orders-сервис за составом заказа."},{id:4,spanId:"orders-db",description:"Orders-сервис идёт в базу за данными. Auth уже давно ответил за 40мс — а этот вложенный запрос к БД растягивается на 130мс и оказывается настоящим узким местом всей цепочки в 180мс."}];function y(s){const e=p.find(r=>r.id===s);if(!e)throw new Error(`Unknown span: ${s}`);return e}const A={indigo:"bg-indigo-500",sky:"bg-sky-500",amber:"bg-amber-500",rose:"bg-rose-500"},v={indigo:"text-indigo-300",sky:"text-sky-300",amber:"text-amber-300",rose:"text-rose-300"},u=.6;function _({spans:s}){return t("div",{className:"space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[t("div",{className:"flex justify-between font-mono text-[10px] text-slate-600",children:[n("span",{children:"0мс"}),t("span",{children:[Math.round(c/2),"мс"]}),t("span",{children:[c,"мс"]})]}),n("div",{className:"space-y-2",children:s.map(e=>{const r=S(e),a=e.startMs/c*100,o=e.durationMs/c*100,l=T[e.service];return t("div",{className:"flex items-center gap-3",children:[n("div",{className:"flex w-48 shrink-0 items-center gap-1.5 overflow-hidden",style:{paddingLeft:r*16},children:n("span",{className:`shrink-0 text-[10px] font-bold uppercase ${v[l]}`,children:E[e.service]})}),t("div",{className:"relative h-6 flex-1 rounded bg-slate-800/60",children:[n(f.div,{className:`absolute top-0 h-full rounded ${A[l]}`,style:{left:`${a}%`},initial:{width:0},animate:{width:`${o}%`},transition:{duration:u,ease:"easeOut"}}),t("span",{className:"absolute top-0 flex h-full items-center whitespace-nowrap px-2 font-mono text-[10px] text-slate-300",style:{left:`${Math.min(a+o,60)}%`},children:[e.operation," · ",e.durationMs,"мс"]})]})]},e.id)})})]})}const N=1200;function R(){const[s,e]=m(0),[r,a]=m(!1),o=s>=d.length-1;b(()=>{if(!r)return;if(o){a(!1);return}const i=u*1e3+N,x=setTimeout(()=>e(g=>g+1),i);return()=>clearTimeout(x)},[r,o]);const l=d[Math.min(s,d.length-1)],h=d.slice(0,s+1).map(i=>y(i.spanId));return t("div",{className:"space-y-6",children:[n(_,{spans:h}),n("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:l.description}),t("div",{className:"flex flex-wrap items-center gap-3",children:[n("button",{onClick:()=>{e(0),a(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),n("button",{onClick:()=>{a(!1),e(i=>Math.max(0,i-1))},disabled:s===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),n("button",{onClick:()=>a(i=>!i),disabled:o,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:r?"⏸ Пауза":"▶ Авто"}),n("button",{onClick:()=>{a(!1),e(i=>Math.min(d.length-1,i+1))},disabled:o,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),t("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[s+1," / ",d.length]})]}),n("input",{type:"range",min:0,max:d.length-1,value:s,onChange:i=>{a(!1),e(Number(i.target.value))},className:"w-full accent-indigo-500"})]})}function w(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[n("strong",{className:"text-white",children:"Observability"}),' — способность понять, что происходит внутри системы, по тому, что она "выдаёт наружу": логам, метрикам и трейсам. В микросервисах один пользовательский запрос проходит через десяток сервисов — и логов каждого сервиса по отдельности недостаточно, чтобы понять, что вообще происходило с запросом целиком.']}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Трейсинг"}),t("p",{className:"mt-2",children:[n("strong",{children:"Трейс"})," — вся история одного запроса от входа до выхода. Состоит из ",n("strong",{children:"спанов"})," — отдельных операций (вызов сервиса, запрос к БД, поход в кэш), у каждого есть начало, длительность и ссылка на родительский спан — так строится дерево вложенности, а не просто плоский список событий."]}),t("p",{className:"mt-2",children:["Главная польза не в том, что трейс показывает ",n("em",{children:"путь"})," ","запроса — это умеют и логи с request ID. Трейс показывает"," ",n("strong",{children:"время"}),": сколько заняла каждая операция относительно других, включая параллельные. В демо рядом Auth укладывается в 40мс, но общая длительность всё равно 180мс — из waterfall сразу видно, что тормозит не Auth, а поход Orders-сервиса в базу."]})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Мониторинг"}),n("p",{className:"mt-2",children:"Метрики — агрегированные числовые показатели во времени: RPS, response time, error rate, загрузка CPU/RAM. Prometheus стал негласным стандартом: сервис сам отдаёт метрики на HTTP-эндпоинте в текстовом формате, а Prometheus периодически их собирает (pull-модель) и хранит как time-series."})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Логирование"}),n("p",{className:"mt-2",children:"С ростом числа инстансов логи каждого по отдельности бесполезны — нужна централизация: демон на каждой машине собирает локальные логи и стримит их в общее хранилище с полнотекстовым поиском (стек ELK: Elasticsearch + Logstash + Kibana, или Graylog)."})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Анализ сбоев и профилирование"}),t("p",{className:"mt-2",children:["Отдельные инструменты (Sentry и подобные) ловят необработанные исключения прямо с контекстом стека вызовов и окружения — без необходимости искать нужную ошибку среди миллионов строк лога."," ",n("strong",{children:"Непрерывное профилирование"})," (Pyroscope, Parca) идёт ещё глубже: постоянно снимает, на что именно тратит время CPU каждая функция в проде, — а не только на тестовом стенде во время локального профилирования."]})]})]})}const I=`/**
 * Распределённый трейсинг: один запрос проходит через несколько сервисов,
 * каждый "спан" — операция с началом и длительностью, вложенная в спан
 * родителя. Главная польза трейса — не в том, что он показывает путь
 * запроса (это умеют и логи), а в том, что он показывает ВРЕМЯ каждого
 * шага относительно других, включая параллельные — и сразу видно, кто из
 * параллельных вызовов реально определяет итоговую задержку.
 */

export interface TraceSpan {
  id: string;
  parentId: string | null;
  service: string;
  operation: string;
  startMs: number;
  durationMs: number;
}

export const SERVICE_LABELS: Record<string, string> = {
  gateway: "API Gateway",
  auth: "Auth",
  orders: "Orders",
  db: "DB",
};

export const SERVICE_TONE: Record<string, "indigo" | "sky" | "amber" | "rose"> = {
  gateway: "indigo",
  auth: "sky",
  orders: "amber",
  db: "rose",
};

/**
 * Gateway параллельно дёргает Auth и Orders. Auth укладывается в 40мс — не
 * узкое место. А вот Orders сам идёт в БД, и именно этот вложенный запрос
 * (25→155мс) оказывается самым долгим звеном всей цепочки в 180мс.
 */
export const TRACE_SPANS: TraceSpan[] = [
  {
    id: "root",
    parentId: null,
    service: "gateway",
    operation: "GET /checkout",
    startMs: 0,
    durationMs: 180,
  },
  {
    id: "auth",
    parentId: "root",
    service: "auth",
    operation: "POST /verify-token",
    startMs: 10,
    durationMs: 40,
  },
  {
    id: "orders",
    parentId: "root",
    service: "orders",
    operation: "GET /orders/:id",
    startMs: 15,
    durationMs: 150,
  },
  {
    id: "orders-db",
    parentId: "orders",
    service: "db",
    operation: "SELECT * FROM orders WHERE id = ?",
    startMs: 25,
    durationMs: 130,
  },
];

export const TRACE_TOTAL_MS = Math.max(
  ...TRACE_SPANS.map((s) => s.startMs + s.durationMs),
);

/** Глубина вложенности спана — для отступа строки в waterfall. */
export function spanDepth(span: TraceSpan): number {
  let depth = 0;
  let current = span;
  while (current.parentId) {
    const parent = TRACE_SPANS.find((s) => s.id === current.parentId);
    if (!parent) break;
    depth += 1;
    current = parent;
  }
  return depth;
}

export interface TraceStep {
  id: number;
  spanId: string;
  description: string;
}

export const TRACE_STEPS: TraceStep[] = [
  {
    id: 1,
    spanId: "root",
    description:
      "Запрос GET /checkout приходит на API Gateway — открывается корневой спан трейса.",
  },
  {
    id: 2,
    spanId: "auth",
    description: "Gateway параллельно вызывает Auth-сервис, чтобы проверить токен запроса.",
  },
  {
    id: 3,
    spanId: "orders",
    description: "И одновременно, не дожидаясь ответа Auth, вызывает Orders-сервис за составом заказа.",
  },
  {
    id: 4,
    spanId: "orders-db",
    description:
      "Orders-сервис идёт в базу за данными. Auth уже давно ответил за 40мс — а этот вложенный запрос к БД растягивается на 130мс и оказывается настоящим узким местом всей цепочки в 180мс.",
  },
];

export function getSpan(spanId: string): TraceSpan {
  const span = TRACE_SPANS.find((s) => s.id === spanId);
  if (!span) throw new Error(\`Unknown span: \${spanId}\`);
  return span;
}
`,M=`import { motion } from "framer-motion";
import {
  SERVICE_LABELS,
  SERVICE_TONE,
  TRACE_TOTAL_MS,
  spanDepth,
  type TraceSpan,
} from "./tracing";

const TONE_BAR: Record<string, string> = {
  indigo: "bg-indigo-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
};
const TONE_TEXT: Record<string, string> = {
  indigo: "text-indigo-300",
  sky: "text-sky-300",
  amber: "text-amber-300",
  rose: "text-rose-300",
};

/** Столько секунд идёт анимация "роста" одного бара — нужно и Demo.tsx. */
export const BAR_GROW_DURATION = 0.6;

/**
 * Водопадная диаграмма (как в Jaeger): каждая строка — спан, отступ слева
 * по глубине вложенности, ширина и позиция бара пропорциональны реальному
 * времени начала/длительности относительно всего трейса. Спаны появляются
 * по одному — именно ЭТО плеер в Demo.tsx и листает.
 */
export function Waterfall({ spans }: { spans: TraceSpan[] }) {
  return (
    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      {/* Шкала времени. */}
      <div className="flex justify-between font-mono text-[10px] text-slate-600">
        <span>0мс</span>
        <span>{Math.round(TRACE_TOTAL_MS / 2)}мс</span>
        <span>{TRACE_TOTAL_MS}мс</span>
      </div>

      <div className="space-y-2">
        {spans.map((span) => {
          const depth = spanDepth(span);
          const leftPct = (span.startMs / TRACE_TOTAL_MS) * 100;
          const widthPct = (span.durationMs / TRACE_TOTAL_MS) * 100;
          const tone = SERVICE_TONE[span.service];

          return (
            <div key={span.id} className="flex items-center gap-3">
              <div
                className="flex w-48 shrink-0 items-center gap-1.5 overflow-hidden"
                style={{ paddingLeft: depth * 16 }}
              >
                <span className={\`shrink-0 text-[10px] font-bold uppercase \${TONE_TEXT[tone]}\`}>
                  {SERVICE_LABELS[span.service]}
                </span>
              </div>
              <div className="relative h-6 flex-1 rounded bg-slate-800/60">
                <motion.div
                  className={\`absolute top-0 h-full rounded \${TONE_BAR[tone]}\`}
                  style={{ left: \`\${leftPct}%\` }}
                  initial={{ width: 0 }}
                  animate={{ width: \`\${widthPct}%\` }}
                  transition={{ duration: BAR_GROW_DURATION, ease: "easeOut" }}
                />
                <span
                  className="absolute top-0 flex h-full items-center whitespace-nowrap px-2 font-mono text-[10px] text-slate-300"
                  style={{ left: \`\${Math.min(leftPct + widthPct, 60)}%\` }}
                >
                  {span.operation} · {span.durationMs}мс
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,P=`import { useEffect, useState } from "react";
import { TRACE_STEPS, getSpan } from "./tracing";
import { Waterfall, BAR_GROW_DURATION } from "./Waterfall";

// Пауза после того, как бар доигрался, — чтобы успеть прочитать описание.
const READ_PAUSE_MS = 1200;

export function Demo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= TRACE_STEPS.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const delay = BAR_GROW_DURATION * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd]);

  const step = TRACE_STEPS[Math.min(stepIndex, TRACE_STEPS.length - 1)];
  const visibleSpans = TRACE_STEPS.slice(0, stepIndex + 1).map((s) => getSpan(s.spanId));

  return (
    <div className="space-y-6">
      <Waterfall spans={visibleSpans} />

      <p className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
        {step.description}
      </p>

      {/* Плеер: сброс / назад / авто / вперёд + перемотка ползунком. */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => {
            setStepIndex(0);
            setPlaying(false);
          }}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
        >
          ⏮ Сброс
        </button>
        <button
          onClick={() => {
            setPlaying(false);
            setStepIndex((i) => Math.max(0, i - 1));
          }}
          disabled={stepIndex === 0}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          ◀ Назад
        </button>
        <button
          onClick={() => setPlaying((p) => !p)}
          disabled={atEnd}
          className="rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40"
        >
          {playing ? "⏸ Пауза" : "▶ Авто"}
        </button>
        <button
          onClick={() => {
            setPlaying(false);
            setStepIndex((i) => Math.min(TRACE_STEPS.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {TRACE_STEPS.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={TRACE_STEPS.length - 1}
        value={stepIndex}
        onChange={(e) => {
          setPlaying(false);
          setStepIndex(Number(e.target.value));
        }}
        className="w-full accent-indigo-500"
      />
    </div>
  );
}
`,D={meta:{id:"distributed-tracing",title:"Observability: распределённый трейсинг",category:"architectural",summary:"Один запрос — дерево вложенных спанов с началом и длительностью. Waterfall-диаграмма (как в Jaeger) сразу показывает, какой из параллельных вызовов реально определяет итоговую задержку."},Demo:R,Explanation:w,code:[{filename:"tracing.ts",language:"typescript",source:I},{filename:"Waterfall.tsx",language:"tsx",source:M},{filename:"Demo.tsx",language:"tsx",source:P}]};export{D as default};
