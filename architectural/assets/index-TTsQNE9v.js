/* empty css              */import{_ as e,a as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c,e as N}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as g}from"./proxy-BroObIT1.js";const d=[{id:1,label:"Клиент отправляет запрос",leg:{kind:"request"},waitMs:null,description:"Обычный запрос — пока всё штатно."},{id:2,label:"Сервер отвечает ошибкой",leg:{kind:"error"},waitMs:null,description:"Таймаут или 5xx — запрос не выполнен. Повторить прямо сейчас — плохая идея: упавший сервис ещё не отдышался."},{id:3,label:"Backoff: ждём 100мс",leg:null,waitMs:100,description:"Фиксированная или растущая пауза перед повтором — чтобы не устроить сервису DDoS собственными ретраями."},{id:4,label:"Повторяем запрос",leg:{kind:"request"},waitMs:null,description:"Тот же запрос уходит снова."},{id:5,label:"Снова ошибка",leg:{kind:"error"},waitMs:null,description:"Сервис всё ещё не оправился."},{id:6,label:"Экспоненциальный backoff: ждём 200мс",leg:null,waitMs:200,description:"При каждой следующей попытке пауза растёт — экспоненциальный backoff снижает нагрузку на и без того страдающий сервис."},{id:7,label:"Повторяем ещё раз",leg:{kind:"request"},waitMs:null,description:"Третья попытка."},{id:8,label:"Успех",leg:{kind:"success"},waitMs:null,description:"Получилось. Но: повторять безопасно только ИДЕМПОТЕНТНЫЕ операции (GET, PUT, DELETE — результат от повтора не меняется). POST без специальной защиты повторять нельзя — можно списать деньги или создать заказ дважды."}],m=[{id:1,label:"t = 0 сек",incomingRate:150,processingRate:100,backlog:0,description:"Service 1 шлёт 150 запросов в секунду, Service 2 успевает обработать только 100."},{id:2,label:"t = 10 сек",incomingRate:150,processingRate:100,backlog:500,description:"Разница в 50 запросов/сек копится в очереди перед Service 2."},{id:3,label:"t = 60 сек",incomingRate:150,processingRate:100,backlog:3e3,description:"За минуту накопилось 3000 необработанных запросов — с этим уже нужно что-то делать."},{id:4,label:"Стратегия: drop",incomingRate:150,processingRate:100,backlog:200,description:"Отбрасываем лишнее (например, самые старые запросы) — backlog не растёт бесконечно, но часть работы теряется."},{id:5,label:"Стратегия: buffer с лимитом",incomingRate:150,processingRate:100,backlog:1e3,description:"Держим очередь ограниченного размера — как только она заполнена, новые запросы получают ошибку 429 (Too Many Requests) вместо тихой потери."},{id:6,label:"Стратегия: signal back (настоящий backpressure)",incomingRate:100,processingRate:100,backlog:0,description:"Service 2 сигнализирует Service 1 «притормози» — тот сам снижает скорость отправки до 100 запросов/сек, очередь не растёт вообще."}],R=[{id:"driver",label:"Driver",critical:!0},{id:"customer",label:"Customer",critical:!0},{id:"calculation",label:"Calculation",critical:!0},{id:"payment",label:"Payment",critical:!0},{id:"navigator",label:"Navigator",critical:!1},{id:"load",label:"Load Balancing",critical:!1},{id:"yplus",label:"YPlus",critical:!1},{id:"advertisement",label:"Advertisement",critical:!1}],S=400,w=160,b={x:90,y:80},p={x:310,y:80},u=110,h=48,E={request:"rgb(99 102 241)",error:"rgb(244 63 94)",success:"rgb(52 211 153)"};function T({leg:t,eventKey:s}){const a=(t==null?void 0:t.kind)==="request",i=a?b:p,l=a?p:b;return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:n("svg",{viewBox:`0 0 ${S} ${w}`,className:"mx-auto h-auto w-full max-w-sm",role:"img","aria-label":"Клиент и сервер",children:[e("line",{x1:b.x,y1:b.y,x2:p.x,y2:p.y,stroke:"rgb(51 65 85)",strokeWidth:2}),t&&e(g.circle,{r:7,fill:E[t.kind],initial:{cx:i.x,cy:i.y,opacity:0},animate:{cx:[i.x,l.x],cy:[i.y,l.y],opacity:[0,1,1,0]},transition:{duration:1,ease:"easeInOut"}},s),[{pos:b,label:"Client"},{pos:p,label:"Server"}].map(({pos:r,label:o})=>n("g",{children:[e("rect",{x:r.x-u/2,y:r.y-h/2,width:u,height:h,rx:10,fill:"rgb(30 41 59)",stroke:"rgb(71 85 105)",strokeWidth:1.5}),e("text",{x:r.x,y:r.y+5,textAnchor:"middle",fill:"white",fontSize:14,fontWeight:600,children:o})]},o))]})})}const P=[{id:"retries",label:"Retries / Backoff"},{id:"backpressure",label:"Backpressure"},{id:"degradation",label:"Graceful Degradation / Fallback"}];function B(){const[t,s]=c("retries");return n("div",{className:"space-y-6",children:[e("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:P.map(a=>e("button",{onClick:()=>s(a.id),className:["rounded-md px-3 py-1.5 text-sm font-medium transition-colors",a.id===t?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:a.label},a.id))}),t==="retries"&&e(C,{}),t==="backpressure"&&e(I,{}),t==="degradation"&&e(_,{})]})}function C(){const[t,s]=c(0),[a,i]=c(!1),l=t>=d.length-1;N(()=>{if(!a)return;if(l){i(!1);return}const o=d[t],y=o.waitMs?o.waitMs*4:1300,v=setTimeout(()=>s(k=>k+1),y);return()=>clearTimeout(v)},[a,l,t]);const r=d[t];return n("div",{className:"space-y-6",children:[e(T,{leg:r.leg,eventKey:`${r.id}`}),r.waitMs&&n("p",{className:"text-center font-mono text-sm text-amber-400",children:["⏱ ждём ",r.waitMs,"мс"]}),n("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:r.label}),e("p",{className:"min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:r.description})]}),n("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{s(0),i(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{i(!1),s(o=>Math.max(0,o-1))},disabled:t===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>i(o=>!o),disabled:l,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:a?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{i(!1),s(o=>Math.min(d.length-1,o+1))},disabled:l,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),n("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[t+1," / ",d.length]})]}),e("input",{type:"range",min:0,max:d.length-1,value:t,onChange:o=>{i(!1),s(Number(o.target.value))},className:"w-full accent-indigo-500"})]})}function I(){const[t,s]=c(0),a=m[t],i=Math.max(...m.map(l=>l.backlog),1);return n("div",{className:"space-y-6",children:[n("div",{className:"flex items-center justify-center gap-6 rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:[e(f,{label:"Service 1",rate:a.incomingRate}),e("span",{className:"text-slate-600",children:"→"}),n("div",{className:"flex flex-col items-center gap-2",children:[e("div",{className:"h-24 w-10 overflow-hidden rounded-md border border-slate-700 bg-slate-800/60",children:e(g.div,{className:"w-full bg-amber-500",initial:!1,animate:{height:`${Math.min(100,a.backlog/i*100)}%`},style:{marginTop:"auto"},transition:{duration:.5}})}),n("span",{className:"font-mono text-xs text-slate-400",children:["backlog: ",a.backlog]})]}),e("span",{className:"text-slate-600",children:"→"}),e(f,{label:"Service 2",rate:a.processingRate})]}),n("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:a.label}),e("p",{className:"min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:a.description})]}),n("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>s(0),className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>s(l=>Math.max(0,l-1)),disabled:t===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>s(l=>Math.min(m.length-1,l+1)),disabled:t===m.length-1,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:"Вперёд ▶"}),n("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[t+1," / ",m.length]})]})]})}function f({label:t,rate:s}){return n("div",{className:"flex flex-col items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3",children:[e("span",{className:"text-sm font-semibold text-white",children:t}),n("span",{className:"font-mono text-xs text-slate-400",children:[s," r/s"]})]})}function _(){const[t,s]=c(!1),[a,i]=c("healthy");return n("div",{className:"space-y-8",children:[n("div",{children:[n("div",{className:"mb-3 flex items-center justify-between",children:[e("p",{className:"text-sm text-slate-400",children:"Graceful Degradation — под пиковой нагрузкой отключаем необязательное."}),e("button",{onClick:()=>s(l=>!l),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",t?"border-rose-500 bg-rose-600 text-white hover:bg-rose-500":"border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500"].join(" "),children:t?"🔥 Пиковая нагрузка":"✅ Обычная нагрузка"})]}),e("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-4",children:R.map(l=>{const r=t&&!l.critical;return n(g.div,{animate:{opacity:r?.35:1},className:["rounded-lg border px-3 py-3 text-center text-sm font-medium transition-colors",r?"border-rose-800 bg-rose-950/20 text-rose-400 line-through":"border-slate-700 bg-slate-800/60 text-white"].join(" "),children:[l.label,!l.critical&&e("div",{className:"mt-1 text-[10px] uppercase text-slate-500",children:"необязательный"})]},l.id)})})]}),n("div",{children:[n("div",{className:"mb-3 flex items-center justify-between",children:[e("p",{className:"text-sm text-slate-400",children:"Fallback — если сервис недоступен, подменяем ответ заглушкой вместо ошибки."}),e("button",{onClick:()=>i(l=>l==="healthy"?"down":"healthy"),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",a==="healthy"?"border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500":"border-rose-500 bg-rose-600 text-white hover:bg-rose-500"].join(" "),children:a==="healthy"?"✅ Recommendation здоров":"✕ Recommendation упал"})]}),n("div",{className:"flex items-center justify-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:[e(x,{label:"Client"}),e("span",{className:"text-slate-600",children:"→"}),e(x,{label:"Proxy"}),e("span",{className:"text-slate-600",children:"→"}),e(x,{label:a==="healthy"?"Recommendation":"Dummy",tone:a==="healthy"?"healthy":"fallback"})]}),e("p",{className:"mt-3 rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:a==="healthy"?"Proxy получает честный, персонализированный ответ от Recommendation.":"Recommendation недоступен — Proxy отдаёт заранее заготовленный дефолтный ответ (Dummy), лишь бы не вернуть клиенту ошибку."})]})]})}function x({label:t,tone:s}){return e("div",{className:`rounded-lg border px-4 py-3 text-center text-sm font-medium ${s==="fallback"?"border-amber-500 bg-amber-950/30 text-amber-300":s==="healthy"?"border-emerald-500 bg-emerald-950/20 text-emerald-300":"border-slate-700 bg-slate-800/60 text-white"}`,children:t})}function D(){return n("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:"Три независимых способа не дать одному сбойному или перегруженному участку положить всю систему целиком."}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Retries, Idempotency, Backoff"}),e("p",{className:"mt-2",children:"Повторить упавший запрос — разумная реакция на временный сбой (таймаут, кратковременная перегрузка). Но есть баланс: «пользовательский запрос — расшибись, но ответь» против «лучше ответить ошибкой, чем добить и без того перегруженный сервис лавиной ретраев»."}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Идемпотентность"})," — свойство операции возвращать тот же результат при повторном применении. GET, PUT, DELETE обычно идемпотентны — повторять безопасно. Голый POST — нет: повторный вызов может создать вторую сущность или списать деньги дважды (без отдельной защиты вроде idempotency key)."]}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Backoff"})," — пауза перед повтором, растущая с каждой попыткой (экспоненциально: 100мс → 200мс → 400мс…). Не даёт множеству клиентов синхронно забомбардировать едва восстановившийся сервис."]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Backpressure"}),e("p",{className:"mt-2",children:"Если Service 1 шлёт 150 запросов в секунду, а Service 2 успевает обработать только 100, разница копится в очереди — и без вмешательства растёт бесконечно. Варианты: отбрасывать лишнее (drop), держать буфер ограниченного размера и отвечать 429 при переполнении, либо настоящий backpressure — сигнал производителю притормозить самому."})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Graceful Degradation и Fallback"}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Graceful Degradation"})," — под нагрузкой система сама отключает необязательные функции (реклама, необязательные плюшки), чтобы сохранить критичный путь (у такси — доехать и оплатить) в рабочем состоянии."]}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Fallback"})," — если конкретная зависимость недоступна, вместо ошибки подставляется заранее заготовленный дефолтный ответ (dummy- рекомендации вместо персонализированных). Пользователь получает рабочий, пусть и менее качественный результат, вместо явного сбоя."]})]})]})}const M=`/**
 * Три способа не дать одному сбойному участку положить всю систему:
 *  - Retries + Backoff — повторяем упавший запрос, но не мгновенно и не
 *    бесконечно (и только если операция идемпотентна — иначе повтор
 *    натворит бед, например, спишет деньги дважды);
 *  - Backpressure — что делать, если один сервис шлёт запросов больше,
 *    чем следующий успевает обработать;
 *  - Graceful Degradation / Fallback — под нагрузкой или при сбое
 *    отключаем необязательное (Degradation) или подменяем ответ заглушкой
 *    (Fallback), лишь бы не упасть целиком.
 */

export type RetryLegKind = "request" | "error" | "success";

export interface RetryStep {
  id: number;
  label: string;
  leg: { kind: RetryLegKind } | null;
  waitMs: number | null;
  description: string;
}

export const RETRY_STEPS: RetryStep[] = [
  {
    id: 1,
    label: "Клиент отправляет запрос",
    leg: { kind: "request" },
    waitMs: null,
    description: "Обычный запрос — пока всё штатно.",
  },
  {
    id: 2,
    label: "Сервер отвечает ошибкой",
    leg: { kind: "error" },
    waitMs: null,
    description: "Таймаут или 5xx — запрос не выполнен. Повторить прямо сейчас — плохая идея: упавший сервис ещё не отдышался.",
  },
  {
    id: 3,
    label: "Backoff: ждём 100мс",
    leg: null,
    waitMs: 100,
    description: "Фиксированная или растущая пауза перед повтором — чтобы не устроить сервису DDoS собственными ретраями.",
  },
  {
    id: 4,
    label: "Повторяем запрос",
    leg: { kind: "request" },
    waitMs: null,
    description: "Тот же запрос уходит снова.",
  },
  {
    id: 5,
    label: "Снова ошибка",
    leg: { kind: "error" },
    waitMs: null,
    description: "Сервис всё ещё не оправился.",
  },
  {
    id: 6,
    label: "Экспоненциальный backoff: ждём 200мс",
    leg: null,
    waitMs: 200,
    description: "При каждой следующей попытке пауза растёт — экспоненциальный backoff снижает нагрузку на и без того страдающий сервис.",
  },
  {
    id: 7,
    label: "Повторяем ещё раз",
    leg: { kind: "request" },
    waitMs: null,
    description: "Третья попытка.",
  },
  {
    id: 8,
    label: "Успех",
    leg: { kind: "success" },
    waitMs: null,
    description:
      "Получилось. Но: повторять безопасно только ИДЕМПОТЕНТНЫЕ операции (GET, PUT, DELETE — результат от повтора не меняется). POST без специальной защиты повторять нельзя — можно списать деньги или создать заказ дважды.",
  },
];

// ---------------------------------------------------------------------------
// Backpressure
// ---------------------------------------------------------------------------

export interface BackpressureStep {
  id: number;
  label: string;
  incomingRate: number;
  processingRate: number;
  backlog: number;
  description: string;
}

export const BACKPRESSURE_STEPS: BackpressureStep[] = [
  {
    id: 1,
    label: "t = 0 сек",
    incomingRate: 150,
    processingRate: 100,
    backlog: 0,
    description: "Service 1 шлёт 150 запросов в секунду, Service 2 успевает обработать только 100.",
  },
  {
    id: 2,
    label: "t = 10 сек",
    incomingRate: 150,
    processingRate: 100,
    backlog: 500,
    description: "Разница в 50 запросов/сек копится в очереди перед Service 2.",
  },
  {
    id: 3,
    label: "t = 60 сек",
    incomingRate: 150,
    processingRate: 100,
    backlog: 3000,
    description: "За минуту накопилось 3000 необработанных запросов — с этим уже нужно что-то делать.",
  },
  {
    id: 4,
    label: "Стратегия: drop",
    incomingRate: 150,
    processingRate: 100,
    backlog: 200,
    description: "Отбрасываем лишнее (например, самые старые запросы) — backlog не растёт бесконечно, но часть работы теряется.",
  },
  {
    id: 5,
    label: "Стратегия: buffer с лимитом",
    incomingRate: 150,
    processingRate: 100,
    backlog: 1000,
    description: "Держим очередь ограниченного размера — как только она заполнена, новые запросы получают ошибку 429 (Too Many Requests) вместо тихой потери.",
  },
  {
    id: 6,
    label: "Стратегия: signal back (настоящий backpressure)",
    incomingRate: 100,
    processingRate: 100,
    backlog: 0,
    description: "Service 2 сигнализирует Service 1 «притормози» — тот сам снижает скорость отправки до 100 запросов/сек, очередь не растёт вообще.",
  },
];

// ---------------------------------------------------------------------------
// Graceful Degradation
// ---------------------------------------------------------------------------

export interface DegradationService {
  id: string;
  label: string;
  critical: boolean;
}

export const DEGRADATION_SERVICES: DegradationService[] = [
  { id: "driver", label: "Driver", critical: true },
  { id: "customer", label: "Customer", critical: true },
  { id: "calculation", label: "Calculation", critical: true },
  { id: "payment", label: "Payment", critical: true },
  { id: "navigator", label: "Navigator", critical: false },
  { id: "load", label: "Load Balancing", critical: false },
  { id: "yplus", label: "YPlus", critical: false },
  { id: "advertisement", label: "Advertisement", critical: false },
];

// ---------------------------------------------------------------------------
// Fallback
// ---------------------------------------------------------------------------

export type RecommendationHealth = "healthy" | "down";
`,L=`import { motion } from "framer-motion";
import type { RetryLegKind } from "./resilience";

const W = 400;
const H = 160;
const CLIENT = { x: 90, y: 80 };
const SERVER = { x: 310, y: 80 };
const BOX_W = 110;
const BOX_H = 48;

const LEG_COLOR: Record<RetryLegKind, string> = {
  request: "rgb(99 102 241)",
  error: "rgb(244 63 94)",
  success: "rgb(52 211 153)",
};

export function RetryDiagram({
  leg,
  eventKey,
}: {
  leg: { kind: RetryLegKind } | null;
  eventKey: string;
}) {
  const forward = leg?.kind === "request";
  const a = forward ? CLIENT : SERVER;
  const b = forward ? SERVER : CLIENT;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label="Клиент и сервер">
        <line x1={CLIENT.x} y1={CLIENT.y} x2={SERVER.x} y2={SERVER.y} stroke="rgb(51 65 85)" strokeWidth={2} />

        {leg && (
          <motion.circle
            key={eventKey}
            r={7}
            fill={LEG_COLOR[leg.kind]}
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}

        {[
          { pos: CLIENT, label: "Client" },
          { pos: SERVER, label: "Server" },
        ].map(({ pos, label }) => (
          <g key={label}>
            <rect
              x={pos.x - BOX_W / 2}
              y={pos.y - BOX_H / 2}
              width={BOX_W}
              height={BOX_H}
              rx={10}
              fill="rgb(30 41 59)"
              stroke="rgb(71 85 105)"
              strokeWidth={1.5}
            />
            <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill="white" fontSize={14} fontWeight={600}>
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
`,A=`import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BACKPRESSURE_STEPS,
  DEGRADATION_SERVICES,
  RETRY_STEPS,
  type RecommendationHealth,
} from "./resilience";
import { RetryDiagram } from "./RetryDiagram";

type Tab = "retries" | "backpressure" | "degradation";

const TABS: { id: Tab; label: string }[] = [
  { id: "retries", label: "Retries / Backoff" },
  { id: "backpressure", label: "Backpressure" },
  { id: "degradation", label: "Graceful Degradation / Fallback" },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("retries");

  return (
    <div className="space-y-6">
      <div className="inline-flex flex-wrap rounded-lg border border-slate-700 p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={[
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              t.id === tab ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "retries" && <RetriesPanel />}
      {tab === "backpressure" && <BackpressurePanel />}
      {tab === "degradation" && <DegradationPanel />}
    </div>
  );
}

function RetriesPanel() {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= RETRY_STEPS.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const step = RETRY_STEPS[stepIndex];
    const delay = step.waitMs ? step.waitMs * 4 : 1300;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const step = RETRY_STEPS[stepIndex];

  return (
    <div className="space-y-6">
      <RetryDiagram leg={step.leg} eventKey={\`\${step.id}\`} />

      {step.waitMs && (
        <p className="text-center font-mono text-sm text-amber-400">⏱ ждём {step.waitMs}мс</p>
      )}

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
      </div>

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
            setStepIndex((i) => Math.min(RETRY_STEPS.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {RETRY_STEPS.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={RETRY_STEPS.length - 1}
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

function BackpressurePanel() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = BACKPRESSURE_STEPS[stepIndex];
  const maxBacklog = Math.max(...BACKPRESSURE_STEPS.map((s) => s.backlog), 1);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-6 rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <RateBox label="Service 1" rate={step.incomingRate} />
        <span className="text-slate-600">→</span>
        <div className="flex flex-col items-center gap-2">
          <div className="h-24 w-10 overflow-hidden rounded-md border border-slate-700 bg-slate-800/60">
            <motion.div
              className="w-full bg-amber-500"
              initial={false}
              animate={{ height: \`\${Math.min(100, (step.backlog / maxBacklog) * 100)}%\` }}
              style={{ marginTop: "auto" }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="font-mono text-xs text-slate-400">backlog: {step.backlog}</span>
        </div>
        <span className="text-slate-600">→</span>
        <RateBox label="Service 2" rate={step.processingRate} />
      </div>

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setStepIndex(0)}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
        >
          ⏮ Сброс
        </button>
        <button
          onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
          disabled={stepIndex === 0}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          ◀ Назад
        </button>
        <button
          onClick={() => setStepIndex((i) => Math.min(BACKPRESSURE_STEPS.length - 1, i + 1))}
          disabled={stepIndex === BACKPRESSURE_STEPS.length - 1}
          className="rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {BACKPRESSURE_STEPS.length}
        </span>
      </div>
    </div>
  );
}

function RateBox({ label, rate }: { label: string; rate: number }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3">
      <span className="text-sm font-semibold text-white">{label}</span>
      <span className="font-mono text-xs text-slate-400">{rate} r/s</span>
    </div>
  );
}

function DegradationPanel() {
  const [peakLoad, setPeakLoad] = useState(false);
  const [health, setHealth] = useState<RecommendationHealth>("healthy");

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-slate-400">Graceful Degradation — под пиковой нагрузкой отключаем необязательное.</p>
          <button
            onClick={() => setPeakLoad((v) => !v)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              peakLoad
                ? "border-rose-500 bg-rose-600 text-white hover:bg-rose-500"
                : "border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500",
            ].join(" ")}
          >
            {peakLoad ? "🔥 Пиковая нагрузка" : "✅ Обычная нагрузка"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DEGRADATION_SERVICES.map((s) => {
            const disabled = peakLoad && !s.critical;
            return (
              <motion.div
                key={s.id}
                animate={{ opacity: disabled ? 0.35 : 1 }}
                className={[
                  "rounded-lg border px-3 py-3 text-center text-sm font-medium transition-colors",
                  disabled
                    ? "border-rose-800 bg-rose-950/20 text-rose-400 line-through"
                    : "border-slate-700 bg-slate-800/60 text-white",
                ].join(" ")}
              >
                {s.label}
                {!s.critical && <div className="mt-1 text-[10px] uppercase text-slate-500">необязательный</div>}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-slate-400">Fallback — если сервис недоступен, подменяем ответ заглушкой вместо ошибки.</p>
          <button
            onClick={() => setHealth((h) => (h === "healthy" ? "down" : "healthy"))}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              health === "healthy"
                ? "border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500"
                : "border-rose-500 bg-rose-600 text-white hover:bg-rose-500",
            ].join(" ")}
          >
            {health === "healthy" ? "✅ Recommendation здоров" : "✕ Recommendation упал"}
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 p-6">
          <FallbackBox label="Client" />
          <span className="text-slate-600">→</span>
          <FallbackBox label="Proxy" />
          <span className="text-slate-600">→</span>
          <FallbackBox
            label={health === "healthy" ? "Recommendation" : "Dummy"}
            tone={health === "healthy" ? "healthy" : "fallback"}
          />
        </div>
        <p className="mt-3 rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {health === "healthy"
            ? "Proxy получает честный, персонализированный ответ от Recommendation."
            : "Recommendation недоступен — Proxy отдаёт заранее заготовленный дефолтный ответ (Dummy), лишь бы не вернуть клиенту ошибку."}
        </p>
      </div>
    </div>
  );
}

function FallbackBox({ label, tone }: { label: string; tone?: "healthy" | "fallback" }) {
  const cls =
    tone === "fallback"
      ? "border-amber-500 bg-amber-950/30 text-amber-300"
      : tone === "healthy"
        ? "border-emerald-500 bg-emerald-950/20 text-emerald-300"
        : "border-slate-700 bg-slate-800/60 text-white";
  return (
    <div className={\`rounded-lg border px-4 py-3 text-center text-sm font-medium \${cls}\`}>{label}</div>
  );
}
`,F={meta:{id:"resilience",title:"Устойчивость к сбоям",category:"architectural",summary:"Retries + идемпотентность + backoff, backpressure и graceful degradation / fallback — три способа не дать одному сбойному участку положить всю систему."},Demo:B,Explanation:D,code:[{filename:"resilience.ts",language:"typescript",source:M},{filename:"RetryDiagram.tsx",language:"tsx",source:L},{filename:"Demo.tsx",language:"tsx",source:A}]};export{F as default};
