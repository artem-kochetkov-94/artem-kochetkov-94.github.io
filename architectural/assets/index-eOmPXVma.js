/* empty css              */import{a as l,_ as e}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as x,e as b}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as S}from"./proxy-BroObIT1.js";const u=[{id:"polling",label:"Polling",hint:"Клиент сам спрашивает каждые N секунд — просто, но чаще всего впустую, а данные могут устареть на целый интервал."},{id:"long-polling",label:"Long Polling",hint:"Клиент спрашивает один раз, сервер держит соединение открытым, пока не появятся данные."},{id:"streaming",label:"Streaming",hint:"Одно долгоживущее соединение — сервер сам решает, когда что-то прислать, без повторных запросов."}],E=[{id:1,label:"Клиент запрашивает обновления",leg:{kind:"request"},waiting:!1,description:"Обычный запрос — «есть что-то новое?»."},{id:2,label:"Сервер отвечает сразу",leg:{kind:"response"},waiting:!1,description:"Чаще всего ответ — «нет, ничего нового» — запрос потрачен впустую."},{id:3,label:"Клиент ждёт N секунд",leg:null,waiting:!0,description:"Всё это время новые данные (если появились) клиенту неизвестны."},{id:4,label:"Клиент запрашивает снова",leg:{kind:"request"},waiting:!1,description:"Цикл повторяется — независимо от того, изменилось что-то или нет."},{id:5,label:"На этот раз есть данные",leg:{kind:"response"},waiting:!1,description:"Данные дошли до клиента с задержкой до N секунд — ровно столько, сколько длится интервал опроса."}],v=[{id:1,label:"Клиент запрашивает обновления",leg:{kind:"request"},waiting:!1,description:"Запрос уходит один раз."},{id:2,label:"Сервер НЕ отвечает сразу",leg:null,waiting:!0,description:"Соединение остаётся открытым — сервер ждёт, пока появятся новые данные (или таймаут)."},{id:3,label:"Появились новые данные — сервер отвечает",leg:{kind:"response"},waiting:!1,description:"Ответ приходит почти сразу, как только событие произошло — а не по расписанию."},{id:4,label:"Клиент сразу переподключается",leg:{kind:"request"},waiting:!1,description:"Новый долгий запрос уходит немедленно — цикл начинается заново."}],k=[{id:1,label:"Клиент открывает соединение один раз",leg:{kind:"request"},waiting:!1,description:"Единственный запрос за весь сеанс — дальше соединение просто остаётся открытым."},{id:2,label:"Сервер шлёт событие",leg:{kind:"response"},waiting:!1,description:"Никакого нового запроса от клиента не требовалось."},{id:3,label:"Сервер шлёт ещё одно событие",leg:{kind:"response"},waiting:!1,description:"И ещё одно — по тому же самому соединению."},{id:4,label:"И ещё одно",leg:{kind:"response"},waiting:!1,description:"Сервер сам решает, когда и что прислать — клиент только слушает."}];function R(t){switch(t){case"polling":return E;case"long-polling":return v;case"streaming":return k}}const I=400,_=160,g={x:90,y:80},p={x:310,y:80},h=110,f=48;function L({leg:t,waiting:d,eventKey:s}){const o=(t==null?void 0:t.kind)==="request",a=o?g:p,c=o?p:g;return l("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[l("svg",{viewBox:`0 0 ${I} ${_}`,className:"mx-auto h-auto w-full max-w-sm",role:"img","aria-label":"Клиент и сервер",children:[e("line",{x1:g.x,y1:g.y,x2:p.x,y2:p.y,stroke:d?"rgb(245 158 11)":"rgb(51 65 85)",strokeWidth:d?2.5:2,strokeDasharray:d?"5 4":void 0}),t&&e(S.circle,{r:7,fill:t.kind==="request"?"rgb(99 102 241)":"rgb(56 189 248)",initial:{cx:a.x,cy:a.y,opacity:0},animate:{cx:[a.x,c.x],cy:[a.y,c.y],opacity:[0,1,1,0]},transition:{duration:1,ease:"easeInOut"}},s),[{pos:g,label:"Client"},{pos:p,label:"Server"}].map(({pos:i,label:r})=>l("g",{children:[e("rect",{x:i.x-h/2,y:i.y-f/2,width:h,height:f,rx:10,fill:"rgb(30 41 59)",stroke:"rgb(71 85 105)",strokeWidth:1.5}),e("text",{x:i.x,y:i.y+5,textAnchor:"middle",fill:"white",fontSize:14,fontWeight:600,children:r})]},r))]}),d&&e("p",{className:"mt-1 text-center text-xs text-amber-400",children:"⏱ соединение открыто, ожидание…"})]})}function P(){const[t,d]=x("polling"),s=R(t),[o,a]=x(0),[c,i]=x(!1),r=o>=s.length-1;b(()=>{a(0),i(!1)},[t]),b(()=>{if(!c)return;if(r){i(!1);return}const n=s[o].waiting?1400:1200,w=setTimeout(()=>a(N=>N+1),n);return()=>clearTimeout(w)},[c,r,o,s]);const m=s[Math.min(o,s.length-1)],y=u.find(n=>n.id===t);return l("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:u.map(n=>e("button",{onClick:()=>d(n.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",n.id===t?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:n.label},n.id))}),e("p",{className:"text-sm text-slate-400",children:y.hint}),e(L,{leg:m.leg,waiting:m.waiting,eventKey:`${t}-${m.id}`}),l("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:m.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:m.description})]}),l("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{a(0),i(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{i(!1),a(n=>Math.max(0,n-1))},disabled:o===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>i(n=>!n),disabled:r,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:c?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{i(!1),a(n=>Math.min(s.length-1,n+1))},disabled:r,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),l("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[o+1," / ",s.length]})]}),e("input",{type:"range",min:0,max:s.length-1,value:o,onChange:n=>{i(!1),a(Number(n.target.value))},className:"w-full accent-indigo-500"})]})}function T(){return l("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:"HTTP по умолчанию — модель «запрос-ответ», где инициатор всегда клиент. Если клиенту нужно узнавать об изменениях на сервере, не дожидаясь, пока сам об этом спросит, есть три стандартных обходных пути."}),l("div",{children:[e("h3",{className:"font-semibold text-white",children:"Polling"}),e("p",{className:"mt-2",children:"Клиент сам спрашивает «есть что-то новое?» каждые N секунд. Самый простой вариант — но два минуса сразу: большинство запросов впустую (ответ «нет»), а данные, появившиеся сразу после опроса, клиент увидит только через целый интервал."})]}),l("div",{children:[e("h3",{className:"font-semibold text-white",children:"Long Polling"}),e("p",{className:"mt-2",children:"Клиент спрашивает один раз, но сервер не отвечает сразу — держит соединение открытым, пока не появятся данные (или не истечёт таймаут). Как только событие произошло, ответ уходит немедленно, а клиент сразу открывает новый долгий запрос. Задержка минимальна, но сервер вынужден держать много одновременно открытых соединений."})]}),l("div",{children:[e("h3",{className:"font-semibold text-white",children:"Streaming"}),e("p",{className:"mt-2",children:"Одно долгоживущее соединение на весь сеанс — сервер сам решает, когда и что прислать, не дожидаясь новых запросов вообще (Server-Sent Events, WebSocket). Самый отзывчивый и самый эффективный по трафику вариант, но и самый требовательный к инфраструктуре — нужно уметь держать много долгих соединений и корректно переживать разрывы связи."})]}),l("div",{children:[e("h3",{className:"font-semibold text-white",children:"Итого"}),e("p",{className:"mt-2",children:"Polling — просто, но с задержкой и лишним трафиком. Long Polling — компромисс: меньше задержки, чуть больше сложности на сервере. Streaming — минимальная задержка и трафик ценой самой высокой инфраструктурной сложности."})]})]})}const M=`/**
 * Три способа для клиента узнавать об изменениях на сервере — разница в
 * том, КТО и КОГДА инициирует передачу:
 *  - Polling — клиент сам спрашивает каждые N секунд, есть ли что-то новое
 *    (в большинстве случаев ответ — «нет»);
 *  - Long Polling — клиент спрашивает один раз, но сервер не отвечает
 *    сразу, а держит соединение открытым, пока не появятся данные;
 *  - Streaming — одно долгоживущее соединение, сервер сам решает, когда
 *    что-то прислать, без повторных запросов вообще.
 */

export type RealtimeMode = "polling" | "long-polling" | "streaming";

export const REALTIME_MODES: { id: RealtimeMode; label: string; hint: string }[] = [
  {
    id: "polling",
    label: "Polling",
    hint: "Клиент сам спрашивает каждые N секунд — просто, но чаще всего впустую, а данные могут устареть на целый интервал.",
  },
  {
    id: "long-polling",
    label: "Long Polling",
    hint: "Клиент спрашивает один раз, сервер держит соединение открытым, пока не появятся данные.",
  },
  {
    id: "streaming",
    label: "Streaming",
    hint: "Одно долгоживущее соединение — сервер сам решает, когда что-то прислать, без повторных запросов.",
  },
];

export type RealtimeLegKind = "request" | "response";

export interface RealtimeStep {
  id: number;
  label: string;
  leg: { kind: RealtimeLegKind } | null;
  waiting: boolean;
  description: string;
}

const POLLING_STEPS: RealtimeStep[] = [
  {
    id: 1,
    label: "Клиент запрашивает обновления",
    leg: { kind: "request" },
    waiting: false,
    description: "Обычный запрос — «есть что-то новое?».",
  },
  {
    id: 2,
    label: "Сервер отвечает сразу",
    leg: { kind: "response" },
    waiting: false,
    description: "Чаще всего ответ — «нет, ничего нового» — запрос потрачен впустую.",
  },
  {
    id: 3,
    label: "Клиент ждёт N секунд",
    leg: null,
    waiting: true,
    description: "Всё это время новые данные (если появились) клиенту неизвестны.",
  },
  {
    id: 4,
    label: "Клиент запрашивает снова",
    leg: { kind: "request" },
    waiting: false,
    description: "Цикл повторяется — независимо от того, изменилось что-то или нет.",
  },
  {
    id: 5,
    label: "На этот раз есть данные",
    leg: { kind: "response" },
    waiting: false,
    description: "Данные дошли до клиента с задержкой до N секунд — ровно столько, сколько длится интервал опроса.",
  },
];

const LONG_POLLING_STEPS: RealtimeStep[] = [
  {
    id: 1,
    label: "Клиент запрашивает обновления",
    leg: { kind: "request" },
    waiting: false,
    description: "Запрос уходит один раз.",
  },
  {
    id: 2,
    label: "Сервер НЕ отвечает сразу",
    leg: null,
    waiting: true,
    description: "Соединение остаётся открытым — сервер ждёт, пока появятся новые данные (или таймаут).",
  },
  {
    id: 3,
    label: "Появились новые данные — сервер отвечает",
    leg: { kind: "response" },
    waiting: false,
    description: "Ответ приходит почти сразу, как только событие произошло — а не по расписанию.",
  },
  {
    id: 4,
    label: "Клиент сразу переподключается",
    leg: { kind: "request" },
    waiting: false,
    description: "Новый долгий запрос уходит немедленно — цикл начинается заново.",
  },
];

const STREAMING_STEPS: RealtimeStep[] = [
  {
    id: 1,
    label: "Клиент открывает соединение один раз",
    leg: { kind: "request" },
    waiting: false,
    description: "Единственный запрос за весь сеанс — дальше соединение просто остаётся открытым.",
  },
  {
    id: 2,
    label: "Сервер шлёт событие",
    leg: { kind: "response" },
    waiting: false,
    description: "Никакого нового запроса от клиента не требовалось.",
  },
  {
    id: 3,
    label: "Сервер шлёт ещё одно событие",
    leg: { kind: "response" },
    waiting: false,
    description: "И ещё одно — по тому же самому соединению.",
  },
  {
    id: 4,
    label: "И ещё одно",
    leg: { kind: "response" },
    waiting: false,
    description: "Сервер сам решает, когда и что прислать — клиент только слушает.",
  },
];

export function getRealtimeSteps(mode: RealtimeMode): RealtimeStep[] {
  switch (mode) {
    case "polling":
      return POLLING_STEPS;
    case "long-polling":
      return LONG_POLLING_STEPS;
    case "streaming":
      return STREAMING_STEPS;
  }
}
`,O=`import { motion } from "framer-motion";
import type { RealtimeLegKind } from "./realtime";

const W = 400;
const H = 160;
const CLIENT = { x: 90, y: 80 };
const SERVER = { x: 310, y: 80 };
const BOX_W = 110;
const BOX_H = 48;

export function RealtimeDiagram({
  leg,
  waiting,
  eventKey,
}: {
  leg: { kind: RealtimeLegKind } | null;
  waiting: boolean;
  eventKey: string;
}) {
  const forward = leg?.kind === "request";
  const a = forward ? CLIENT : SERVER;
  const b = forward ? SERVER : CLIENT;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label="Клиент и сервер">
        <line
          x1={CLIENT.x}
          y1={CLIENT.y}
          x2={SERVER.x}
          y2={SERVER.y}
          stroke={waiting ? "rgb(245 158 11)" : "rgb(51 65 85)"}
          strokeWidth={waiting ? 2.5 : 2}
          strokeDasharray={waiting ? "5 4" : undefined}
        />

        {leg && (
          <motion.circle
            key={eventKey}
            r={7}
            fill={leg.kind === "request" ? "rgb(99 102 241)" : "rgb(56 189 248)"}
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
      {waiting && <p className="mt-1 text-center text-xs text-amber-400">⏱ соединение открыто, ожидание…</p>}
    </div>
  );
}
`,C=`import { useEffect, useState } from "react";
import { REALTIME_MODES, getRealtimeSteps, type RealtimeMode } from "./realtime";
import { RealtimeDiagram } from "./RealtimeDiagram";

export function Demo() {
  const [mode, setMode] = useState<RealtimeMode>("polling");
  const steps = getRealtimeSteps(mode);

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [mode]);

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const delay = steps[stepIndex].waiting ? 1400 : 1200;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const modeInfo = REALTIME_MODES.find((m) => m.id === mode)!;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {REALTIME_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              m.id === mode
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {m.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-400">{modeInfo.hint}</p>

      <RealtimeDiagram leg={step.leg} waiting={step.waiting} eventKey={\`\${mode}-\${step.id}\`} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
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
            setStepIndex((i) => Math.min(steps.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {steps.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={steps.length - 1}
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
`,A={meta:{id:"realtime-updates",title:"Реалтайм-обновления",category:"architectural",summary:"Polling / Long Polling / Streaming — три способа узнать об изменениях на сервере, отличающиеся тем, кто и когда инициирует передачу данных."},Demo:P,Explanation:T,code:[{filename:"realtime.ts",language:"typescript",source:M},{filename:"RealtimeDiagram.tsx",language:"tsx",source:O},{filename:"Demo.tsx",language:"tsx",source:C}]};export{A as default};
