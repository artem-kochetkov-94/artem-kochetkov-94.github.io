/* empty css              */import{a as t,_ as e,b as P}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as f,d as w,e as k}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{A as O}from"./index-f9MUpYCc.js";import{m as p}from"./proxy-BroObIT1.js";const v=[{id:"kafka",label:"Kafka",hint:"Pull: consumer сам решает, когда забрать следующую порцию сообщений из партиции — брокер ничего не проталкивает."},{id:"rabbitmq",label:"RabbitMQ",hint:"Push: как только сообщение попало в очередь, брокер сам доставляет его consumer'у — тому не нужно ничего спрашивать."}],K={kafka:[{id:"producer",label:"Producer"},{id:"topic",label:"Topic"},{id:"consumer",label:"Consumer"}],rabbitmq:[{id:"producer",label:"Producer"},{id:"exchange",label:"Exchange"},{id:"queue",label:"Queue"},{id:"consumer",label:"Consumer"}]},R=[{id:1,label:"Producer публикует message #1",legs:[{from:"producer",to:"topic",kind:"write"}],brokerState:[{id:"#1",delivered:!1}],description:"Producer пишет сообщение в конец лога партиции и не ждёт, пока его кто-то прочитает."},{id:2,label:"Producer публикует message #2",legs:[{from:"producer",to:"topic",kind:"write"}],brokerState:[{id:"#1",delivered:!1},{id:"#2",delivered:!1}],description:"Ещё одно сообщение — лог растёт независимо от того, читает ли его кто-то."},{id:3,label:"Consumer запрашивает следующую порцию",legs:[{from:"consumer",to:"topic",kind:"read"}],brokerState:[{id:"#1",delivered:!0},{id:"#2",delivered:!0}],description:"Consumer сам решает, когда ему удобно, и запрашивает у топика сообщения начиная со своего оффсета — получает #1 и #2 разом. Сами сообщения из лога никуда не делись."},{id:4,label:"Producer публикует message #3",legs:[{from:"producer",to:"topic",kind:"write"}],brokerState:[{id:"#1",delivered:!0},{id:"#2",delivered:!0},{id:"#3",delivered:!1}],description:"Producer продолжает писать — consumer прямо сейчас ничего не получает."},{id:5,label:"Consumer запрашивает снова",legs:[{from:"consumer",to:"topic",kind:"read"}],brokerState:[{id:"#1",delivered:!0},{id:"#2",delivered:!0},{id:"#3",delivered:!0}],description:"Только когда consumer снова обратится сам, он получит message #3 — и ни секундой раньше."}],M=[{id:1,label:"Producer публикует message #1",legs:[{from:"producer",to:"exchange",kind:"write"},{from:"exchange",to:"queue",kind:"write"}],brokerState:[{id:"#1",delivered:!1}],description:"Producer отправляет сообщение в exchange, тот по правилам маршрутизации кладёт его в очередь."},{id:2,label:"Брокер сам доставляет message #1",legs:[{from:"queue",to:"consumer",kind:"response"}],brokerState:[],description:"Consumer ничего не спрашивал — брокер сам протолкнул сообщение, как только оно оказалось в очереди. Из очереди оно тут же исчезает."},{id:3,label:"Producer публикует message #2",legs:[{from:"producer",to:"exchange",kind:"write"},{from:"exchange",to:"queue",kind:"write"}],brokerState:[{id:"#2",delivered:!1}],description:"Новое сообщение снова проходит через exchange в очередь."},{id:4,label:"Брокер сам доставляет message #2",legs:[{from:"queue",to:"consumer",kind:"response"}],brokerState:[],description:"И снова push: момент доставки решает брокер, а не consumer."}];function A(r){return r==="kafka"?R:M}const N=720,I=180,g=130,b=56,S=100,T=90,x=1.1;function C(r){const d=r.length,s=d>1?(N-2*S)/(d-1):0,m=new Map;return r.forEach((i,n)=>{m.set(i.id,{x:S+s*n,y:T})}),m}function D(r){return{x:r.x-g/2,y:r.y-b/2}}function L({legs:r,pos:d,eventKey:s}){const m=x/2;return e(P,{children:r.map((i,n)=>{const o=d.get(i.from),l=d.get(i.to),c=n*x;if(i.kind==="read")return t("g",{children:[e(p.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:o.x,cy:o.y,opacity:0},animate:{cx:[o.x,l.x],cy:[o.y,l.y],opacity:[0,1,1,0]},transition:{duration:m,delay:c,ease:"easeInOut"}}),e(p.circle,{r:6,fill:"rgb(56 189 248)",initial:{cx:l.x,cy:l.y,opacity:0},animate:{cx:[l.x,o.x],cy:[l.y,o.y],opacity:[0,1,1,0]},transition:{duration:m,delay:c+m,ease:"easeInOut"}})]},`${s}-leg-${n}`);const u=i.kind==="response"?"rgb(56 189 248)":"rgb(99 102 241)";return e(p.circle,{r:7,fill:u,initial:{cx:o.x,cy:o.y,opacity:0},animate:{cx:[o.x,l.x],cy:[o.y,l.y],opacity:[0,1,1,0]},transition:{duration:x,delay:c,ease:"easeInOut"}},`${s}-leg-${n}`)})})}function $({nodes:r,step:d}){const s=C(r),m=new Set(d.legs.flatMap(n=>[n.from,n.to])),i=`${d.id}`;return t("div",{className:"space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[t("svg",{viewBox:`0 0 ${N} ${I}`,className:"h-auto w-full",role:"img","aria-label":"Схема прохождения сообщения через брокер",children:[r.slice(0,-1).map((n,o)=>{const l=s.get(n.id),c=s.get(r[o+1].id);return e("line",{x1:l.x,y1:l.y,x2:c.x,y2:c.y,stroke:"rgb(51 65 85)",strokeWidth:2},`edge-${n.id}`)}),e(L,{legs:d.legs,pos:s,eventKey:i}),r.map(n=>e(Q,{rect:D(s.get(n.id)),title:n.label,tone:m.has(n.id)?"indigo":"slate",flashKey:m.has(n.id)?i:"idle"},n.id))]}),t("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"У брокера сейчас"}),t("div",{className:"flex min-h-[2.75rem] flex-wrap items-center gap-2",children:[e(O,{initial:!1,children:d.brokerState.map(n=>t(p.span,{layout:!0,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},className:["rounded-md border px-2.5 py-1 font-mono text-xs",n.delivered?"border-slate-700 bg-slate-800/60 text-slate-500":"border-amber-500 bg-amber-950/40 text-amber-300"].join(" "),children:[n.id,n.delivered?" ✓":""]},n.id))}),d.brokerState.length===0&&e("span",{className:"text-sm text-slate-600",children:"пусто"})]})]})]})}const W={slate:"rgb(30 41 59)",indigo:"rgb(49 46 129)"},q={slate:"rgb(71 85 105)",indigo:"rgb(129 140 248)"};function Q({rect:r,title:d,tone:s,flashKey:m}){return t("g",{children:[e(p.rect,{x:r.x,y:r.y,width:g,height:b,rx:10,fill:W[s],stroke:q[s],strokeWidth:s==="slate"?1.5:2.5,animate:s!=="slate"?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${r.x+g/2}px ${r.y+b/2}px`},transition:{duration:.4}},m),e("text",{x:r.x+g/2,y:r.y+b/2+5,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:d})]})}const X=1100;function G(){const[r,d]=f("kafka"),s=v.find(a=>a.id===r),m=K[r],i=w(()=>A(r),[r]),[n,o]=f(0),[l,c]=f(!1),u=n>=i.length-1;k(()=>{o(0),c(!1)},[r]),k(()=>{var y;if(!l)return;if(u){c(!1);return}const a=((y=i[n])==null?void 0:y.legs.length)??1,_=x*a*1e3+X,E=setTimeout(()=>o(B=>B+1),_);return()=>clearTimeout(E)},[l,u,n,i]);const h=i[Math.min(n,i.length-1)];return t("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:v.map(a=>e("button",{onClick:()=>d(a.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",a.id===r?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:a.label},a.id))}),e("p",{className:"text-sm text-slate-400",children:s.hint}),e($,{nodes:m,step:h}),t("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:h.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:h.description})]}),t("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{o(0),c(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{c(!1),o(a=>Math.max(0,a-1))},disabled:n===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>c(a=>!a),disabled:u,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:l?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{c(!1),o(a=>Math.min(i.length-1,a+1))},disabled:u,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),t("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[n+1," / ",i.length]})]}),e("input",{type:"range",min:0,max:i.length-1,value:n,onChange:a=>{c(!1),o(Number(a.target.value))},className:"w-full accent-indigo-500"})]})}function U(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[e("strong",{className:"text-white",children:"Брокер сообщений"})," — узел между отправителем (producer) и получателем (consumer), который принимает сообщение и хранит его до доставки. Это даёт буферизацию (producer не ждёт, пока consumer освободится), асинхронную связь, слабое связывание (стороны не знают друг о друге напрямую) и независимое масштабирование обеих сторон."]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Главный водораздел: кто инициирует доставку"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Kafka — pull"}),". Consumer сам приходит и запрашивает следующую порцию сообщений начиная со своего оффсета, когда ему удобно. Сообщения в партиции при этом не удаляются — это лог, а не очередь: несколько разных consumer'ов могут читать один и тот же топик каждый со своей скоростью."]}),t("li",{children:[e("strong",{children:"RabbitMQ — push"}),". Как только сообщение попало в очередь через exchange, брокер сам толкает его подписанному consumer'у. Прочитанное сообщение из очереди исчезает."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Термины Kafka"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Producer"})," / ",e("strong",{children:"Consumer"})," — писатель и читатель."]}),t("li",{children:[e("strong",{children:"Broker"})," — один узел кластера Kafka."]}),t("li",{children:[e("strong",{children:"Topic"})," — логическая очередь; физически состоит из ",e("strong",{children:"Partition"})," — независимых, упорядоченных частей топика, за счёт которых Kafka параллелит чтение и запись."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Data retention и гарантии доставки"}),t("p",{className:"mt-2",children:[e("strong",{children:"Data retention"})," определяет, сколько времени (или места) брокер хранит сообщения, прежде чем их удалить, — политика, которую задаёт команда, а не техническое ограничение."]}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"At least once"})," — сообщение доставится хотя бы один раз (возможны дубли при повторной отправке после сбоя)."]}),t("li",{children:[e("strong",{children:"At most once"})," — доставится не более одного раза (возможна потеря, зато без дублей)."]}),t("li",{children:[e("strong",{children:"Exactly once"})," — доставится ровно один раз; самая дорогая гарантия, обычно требует идемпотентности на стороне consumer'а."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),e("p",{className:"mt-2",children:"Kafka — event sourcing, стриминг аналитики, лог всех событий системы, когда важно, чтобы разные consumer'ы читали одну и ту же историю независимо. RabbitMQ — классические очереди задач (отправка email, обработка платежей), где важна именно доставка конкретному обработчику, а не хранение истории."})]})]})}const H=`/**
 * Брокеры сообщений: Kafka и RabbitMQ решают одну и ту же задачу
 * (буферизация, асинхронная связь, слабое связывание producer/consumer),
 * но КТО инициирует финальную доставку — принципиально разный вопрос.
 *  - Kafka — pull: consumer сам приходит и забирает следующую порцию,
 *    когда ему удобно; лог партиции при этом не удаляется (retention).
 *  - RabbitMQ — push: как только сообщение долетело до очереди, брокер
 *    сам толкает его consumer'у; из очереди сообщение при этом исчезает.
 */

export type BrokerMode = "kafka" | "rabbitmq";

export const BROKER_MODES: { id: BrokerMode; label: string; hint: string }[] = [
  {
    id: "kafka",
    label: "Kafka",
    hint: "Pull: consumer сам решает, когда забрать следующую порцию сообщений из партиции — брокер ничего не проталкивает.",
  },
  {
    id: "rabbitmq",
    label: "RabbitMQ",
    hint: "Push: как только сообщение попало в очередь, брокер сам доставляет его consumer'у — тому не нужно ничего спрашивать.",
  },
];

export interface BrokerNode {
  id: string;
  label: string;
}

export const BROKER_NODES: Record<BrokerMode, BrokerNode[]> = {
  kafka: [
    { id: "producer", label: "Producer" },
    { id: "topic", label: "Topic" },
    { id: "consumer", label: "Consumer" },
  ],
  rabbitmq: [
    { id: "producer", label: "Producer" },
    { id: "exchange", label: "Exchange" },
    { id: "queue", label: "Queue" },
    { id: "consumer", label: "Consumer" },
  ],
};

/**
 * Тот же словарь перегонов, что и в кэшировании: read — полноценный обмен
 * запрос/ответ (consumer сам спросил и сам получил данные); write — данные
 * едут только вперёд; response — данные едут вперёд САМИ ПО СЕБЕ, без
 * запроса в этом же перегоне, — то есть ровно то, что делает push.
 */
export type BrokerLegKind = "read" | "write" | "response";

export interface BrokerLeg {
  from: string;
  to: string;
  kind: BrokerLegKind;
}

export interface BrokerMessage {
  id: string;
  /** true — сообщение уже доставлено consumer'у (Kafka: прочитано; RabbitMQ: вытолкнуто). */
  delivered: boolean;
}

export interface BrokerStep {
  id: number;
  label: string;
  legs: BrokerLeg[];
  /** Что физически лежит у брокера ПОСЛЕ этого шага. */
  brokerState: BrokerMessage[];
  description: string;
}

const KAFKA_STEPS: BrokerStep[] = [
  {
    id: 1,
    label: "Producer публикует message #1",
    legs: [{ from: "producer", to: "topic", kind: "write" }],
    brokerState: [{ id: "#1", delivered: false }],
    description:
      "Producer пишет сообщение в конец лога партиции и не ждёт, пока его кто-то прочитает.",
  },
  {
    id: 2,
    label: "Producer публикует message #2",
    legs: [{ from: "producer", to: "topic", kind: "write" }],
    brokerState: [
      { id: "#1", delivered: false },
      { id: "#2", delivered: false },
    ],
    description: "Ещё одно сообщение — лог растёт независимо от того, читает ли его кто-то.",
  },
  {
    id: 3,
    label: "Consumer запрашивает следующую порцию",
    legs: [{ from: "consumer", to: "topic", kind: "read" }],
    brokerState: [
      { id: "#1", delivered: true },
      { id: "#2", delivered: true },
    ],
    description:
      "Consumer сам решает, когда ему удобно, и запрашивает у топика сообщения начиная со своего оффсета — получает #1 и #2 разом. Сами сообщения из лога никуда не делись.",
  },
  {
    id: 4,
    label: "Producer публикует message #3",
    legs: [{ from: "producer", to: "topic", kind: "write" }],
    brokerState: [
      { id: "#1", delivered: true },
      { id: "#2", delivered: true },
      { id: "#3", delivered: false },
    ],
    description: "Producer продолжает писать — consumer прямо сейчас ничего не получает.",
  },
  {
    id: 5,
    label: "Consumer запрашивает снова",
    legs: [{ from: "consumer", to: "topic", kind: "read" }],
    brokerState: [
      { id: "#1", delivered: true },
      { id: "#2", delivered: true },
      { id: "#3", delivered: true },
    ],
    description:
      "Только когда consumer снова обратится сам, он получит message #3 — и ни секундой раньше.",
  },
];

const RABBITMQ_STEPS: BrokerStep[] = [
  {
    id: 1,
    label: "Producer публикует message #1",
    legs: [
      { from: "producer", to: "exchange", kind: "write" },
      { from: "exchange", to: "queue", kind: "write" },
    ],
    brokerState: [{ id: "#1", delivered: false }],
    description: "Producer отправляет сообщение в exchange, тот по правилам маршрутизации кладёт его в очередь.",
  },
  {
    id: 2,
    label: "Брокер сам доставляет message #1",
    legs: [{ from: "queue", to: "consumer", kind: "response" }],
    brokerState: [],
    description:
      "Consumer ничего не спрашивал — брокер сам протолкнул сообщение, как только оно оказалось в очереди. Из очереди оно тут же исчезает.",
  },
  {
    id: 3,
    label: "Producer публикует message #2",
    legs: [
      { from: "producer", to: "exchange", kind: "write" },
      { from: "exchange", to: "queue", kind: "write" },
    ],
    brokerState: [{ id: "#2", delivered: false }],
    description: "Новое сообщение снова проходит через exchange в очередь.",
  },
  {
    id: 4,
    label: "Брокер сам доставляет message #2",
    legs: [{ from: "queue", to: "consumer", kind: "response" }],
    brokerState: [],
    description: "И снова push: момент доставки решает брокер, а не consumer.",
  },
];

export function getBrokerSteps(mode: BrokerMode): BrokerStep[] {
  return mode === "kafka" ? KAFKA_STEPS : RABBITMQ_STEPS;
}
`,F=`import { AnimatePresence, motion } from "framer-motion";
import type { BrokerLeg, BrokerNode, BrokerStep } from "./brokers";

// Тот же приём, что и в остальных диаграммах категории, но раскладка не
// фиксированная: у Kafka 3 узла (Producer/Topic/Consumer), у RabbitMQ — 4
// (Producer/Exchange/Queue/Consumer), поэтому позиции считаются по числу
// узлов, а не жёстко прописаны.
const W = 720;
const H = 180;
const BOX_W = 130;
const BOX_H = 56;
const MARGIN = 100;
const Y = 90;

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export const PACKET_LEG_DURATION = 1.1;

function nodePositions(nodes: BrokerNode[]): Map<string, { x: number; y: number }> {
  const n = nodes.length;
  const spacing = n > 1 ? (W - 2 * MARGIN) / (n - 1) : 0;
  const map = new Map<string, { x: number; y: number }>();
  nodes.forEach((node, i) => {
    map.set(node.id, { x: MARGIN + spacing * i, y: Y });
  });
  return map;
}

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

/**
 * read — полноценный круговой обмен (consumer сам спросил и сам получил
 * данные, индиго+голубой). write — данные едут только вперёд (индиго),
 * отвечать нечем. response — данные едут вперёд САМИ ПО СЕБЕ (голубой),
 * без запроса в этом же перегоне, — то есть push: брокер доставляет не
 * дожидаясь, пока его попросят.
 */
function LegPulses({
  legs,
  pos,
  eventKey,
}: {
  legs: BrokerLeg[];
  pos: Map<string, { x: number; y: number }>;
  eventKey: string;
}) {
  const half = PACKET_LEG_DURATION / 2;
  return (
    <>
      {legs.map((leg, i) => {
        const a = pos.get(leg.from)!;
        const b = pos.get(leg.to)!;
        const legStart = i * PACKET_LEG_DURATION;

        if (leg.kind === "read") {
          return (
            <g key={\`\${eventKey}-leg-\${i}\`}>
              <motion.circle
                r={7}
                fill="rgb(99 102 241)"
                initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
                transition={{ duration: half, delay: legStart, ease: "easeInOut" }}
              />
              <motion.circle
                r={6}
                fill="rgb(56 189 248)"
                initial={{ cx: b.x, cy: b.y, opacity: 0 }}
                animate={{ cx: [b.x, a.x], cy: [b.y, a.y], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: half,
                  delay: legStart + half,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        }

        const fill = leg.kind === "response" ? "rgb(56 189 248)" : "rgb(99 102 241)";
        return (
          <motion.circle
            key={\`\${eventKey}-leg-\${i}\`}
            r={7}
            fill={fill}
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: PACKET_LEG_DURATION,
              delay: legStart,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}

export function BrokerDiagram({
  nodes,
  step,
}: {
  nodes: BrokerNode[];
  step: BrokerStep;
}) {
  const pos = nodePositions(nodes);
  const touched = new Set(step.legs.flatMap((leg) => [leg.from, leg.to]));
  const eventKey = \`\${step.id}\`;

  return (
    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        className="h-auto w-full"
        role="img"
        aria-label="Схема прохождения сообщения через брокер"
      >
        {nodes.slice(0, -1).map((node, i) => {
          const a = pos.get(node.id)!;
          const b = pos.get(nodes[i + 1].id)!;
          return (
            <line
              key={\`edge-\${node.id}\`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgb(51 65 85)"
              strokeWidth={2}
            />
          );
        })}

        <LegPulses legs={step.legs} pos={pos} eventKey={eventKey} />

        {nodes.map((node) => (
          <DiagramNode
            key={node.id}
            rect={rectAt(pos.get(node.id)!)}
            title={node.label}
            tone={touched.has(node.id) ? "indigo" : "slate"}
            flashKey={touched.has(node.id) ? eventKey : "idle"}
          />
        ))}
      </svg>

      {/* Что физически лежит у брокера прямо сейчас. */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
          У брокера сейчас
        </p>
        <div className="flex min-h-[2.75rem] flex-wrap items-center gap-2">
          <AnimatePresence initial={false}>
            {step.brokerState.map((msg) => (
              <motion.span
                key={msg.id}
                layout
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className={[
                  "rounded-md border px-2.5 py-1 font-mono text-xs",
                  msg.delivered
                    ? "border-slate-700 bg-slate-800/60 text-slate-500"
                    : "border-amber-500 bg-amber-950/40 text-amber-300",
                ].join(" ")}
              >
                {msg.id}
                {msg.delivered ? " ✓" : ""}
              </motion.span>
            ))}
          </AnimatePresence>
          {step.brokerState.length === 0 && (
            <span className="text-sm text-slate-600">пусто</span>
          )}
        </div>
      </div>
    </div>
  );
}

const TONE_FILL: Record<string, string> = {
  slate: "rgb(30 41 59)",
  indigo: "rgb(49 46 129)",
};
const TONE_STROKE: Record<string, string> = {
  slate: "rgb(71 85 105)",
  indigo: "rgb(129 140 248)",
};

function DiagramNode({
  rect,
  title,
  tone,
  flashKey,
}: {
  rect: { x: number; y: number };
  title: string;
  tone: keyof typeof TONE_FILL;
  flashKey: string;
}) {
  return (
    <g>
      <motion.rect
        key={flashKey}
        x={rect.x}
        y={rect.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth={tone === "slate" ? 1.5 : 2.5}
        animate={tone !== "slate" ? { scale: [1, 1.04, 1] } : { scale: 1 }}
        style={{
          transformOrigin: \`\${rect.x + BOX_W / 2}px \${rect.y + BOX_H / 2}px\`,
        }}
        transition={{ duration: 0.4 }}
      />
      <text
        x={rect.x + BOX_W / 2}
        y={rect.y + BOX_H / 2 + 5}
        textAnchor="middle"
        fill="white"
        fontSize={15}
        fontWeight={600}
      >
        {title}
      </text>
    </g>
  );
}
`,j=`import { useEffect, useMemo, useState } from "react";
import {
  BROKER_MODES,
  BROKER_NODES,
  getBrokerSteps,
  type BrokerMode,
} from "./brokers";
import { BrokerDiagram, PACKET_LEG_DURATION } from "./BrokerDiagram";

// Пауза после того, как импульсы доиграли, — чтобы успеть прочитать описание.
const READ_PAUSE_MS = 1100;

export function Demo() {
  const [mode, setMode] = useState<BrokerMode>("kafka");
  const modeInfo = BROKER_MODES.find((m) => m.id === mode)!;
  const nodes = BROKER_NODES[mode];

  const steps = useMemo(() => getBrokerSteps(mode), [mode]);

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  // Смена брокера — начинаем сценарий заново.
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
    const legs = steps[stepIndex]?.legs.length ?? 1;
    const delay = PACKET_LEG_DURATION * legs * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      {/* Выбор брокера. */}
      <div className="flex flex-wrap gap-2">
        {BROKER_MODES.map((m) => (
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

      <BrokerDiagram nodes={nodes} step={step} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
      </div>

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
`,ee={meta:{id:"message-brokers",title:"Брокеры сообщений",category:"architectural",summary:"Kafka (pull, consumer сам забирает из лога партиции) vs RabbitMQ (push, брокер сам толкает сообщение в consumer'а) — разница в том, кто инициирует доставку."},Demo:G,Explanation:U,code:[{filename:"brokers.ts",language:"typescript",source:H},{filename:"BrokerDiagram.tsx",language:"tsx",source:F},{filename:"Demo.tsx",language:"tsx",source:j}]};export{ee as default};
