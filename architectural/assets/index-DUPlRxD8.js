/* empty css              */import{_ as e,a as s}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as x,e as E}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as g}from"./proxy-BroObIT1.js";const v=[{id:"unsafe",label:"Без защиты (race condition)"},{id:"safe",label:"SET NX PX (правильно)"}],I=[{id:1,label:"Client A: SET file_1 = A",leg:{from:"clientA",to:"redis",kind:"write"},description:"Client A считает, что теперь владеет блокировкой на file_1."},{id:2,label:"Client B: SET file_1 = B (перезаписывает!)",leg:{from:"clientB",to:"redis",kind:"write"},description:"Ничто не помешало Client B перезаписать значение — обычный SET ничего не проверяет. Теперь ОБА клиента уверены, что владеют блокировкой, — гонка (race condition)."}],k=[{id:1,label:"Client A: SET file_1 A NX PX 30000 → true",leg:{from:"clientA",to:"redis",kind:"write"},description:"NX — установить, только если ключа ещё нет. PX — авто-истечение через 30 секунд на случай, если Client A упадёт, не сняв блокировку. Client A получает лок."},{id:2,label:"Client B: SET file_1 B NX PX 30000 → false",leg:{from:"clientB",to:"redis",kind:"error"},description:"Ключ уже существует — NX не даёт перезаписать. Client B не получает блокировку и должен подождать или повторить позже."},{id:3,label:"Client A безопасно снимает блокировку",leg:{from:"clientA",to:"redis",kind:"write"},description:"DEL выполняется Lua-скриптом, который СНАЧАЛА проверяет: значение по ключу всё ещё равно A? Если да — удаляет. Без этой проверки можно было бы случайно удалить чужую (уже новую) блокировку, если наша истекла по PX прямо перед этим."}];function A(t){return t==="unsafe"?I:k}const d={0:"alive",1:"alive",2:"alive",3:"alive",4:"alive",5:"dead"},u=[{id:1,label:"Узел #5 (лидер) падает",legs:[],nodeRoles:d,description:"Прежний лидер (узел с наибольшим id) недоступен — остальные узлы об этом пока не знают."},{id:2,label:"Узел #2 замечает это и начинает выборы",legs:[{from:2,to:3,delayUnits:0},{from:2,to:4,delayUnits:0},{from:2,to:5,delayUnits:0}],nodeRoles:d,description:"Election рассылается ВСЕМ узлам с БОЛЬШИМ id — вдруг кто-то из них жив и должен возглавить."},{id:3,label:"Узлы #3 и #4 отвечают: «я живой, дальше сам»",legs:[{from:3,to:2,delayUnits:0},{from:4,to:2,delayUnits:0}],nodeRoles:d,description:"Узел #5 не отвечает (мёртв). Узлы #3 и #4 подтверждают получение и сами включаются в выборы — узел #2 в них больше не участвует."},{id:4,label:"Узел #4 (старший из отозвавшихся) запускает свои выборы",legs:[{from:4,to:5,delayUnits:0}],nodeRoles:d,description:"По тому же правилу — Election всем, кто старше него. Единственный такой узел — мёртвый #5."},{id:5,label:"Узел #5 молчит — таймаут. Узел #4 объявляет себя лидером",legs:[],nodeRoles:{...d,4:"leader"},description:"Никто старше не отозвался — значит, узел #4 и есть самый старший из живых."},{id:6,label:"Узел #4 рассылает Leader всем остальным",legs:[{from:4,to:0,delayUnits:0},{from:4,to:1,delayUnits:0},{from:4,to:2,delayUnits:0},{from:4,to:3,delayUnits:0}],nodeRoles:{...d,4:"leader"},description:"Все живые узлы теперь знают нового лидера — выборы завершены без единого внешнего арбитра."}],_=420,R=200,m={x:80,y:60},p={x:80,y:160},r={x:330,y:110},y=110,h=46;function C({leg:t,eventKey:i}){const n=(t==null?void 0:t.from)==="clientA"?m:p;return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:s("svg",{viewBox:`0 0 ${_} ${R}`,className:"mx-auto h-auto w-full max-w-sm",role:"img","aria-label":"Клиенты и Redis",children:[e("line",{x1:m.x,y1:m.y,x2:r.x,y2:r.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:p.x,y1:p.y,x2:r.x,y2:r.y,stroke:"rgb(51 65 85)",strokeWidth:2}),t&&e(g.circle,{r:7,fill:t.kind==="error"?"rgb(244 63 94)":"rgb(99 102 241)",initial:{cx:n.x,cy:n.y,opacity:0},animate:{cx:[n.x,r.x],cy:[n.y,r.y],opacity:[0,1,1,0]},transition:{duration:1,ease:"easeInOut"}},i),[{pos:m,label:"Client A"},{pos:p,label:"Client B"},{pos:r,label:"Redis"}].map(({pos:o,label:l})=>s("g",{children:[e("rect",{x:o.x-y/2,y:o.y-h/2,width:y,height:h,rx:10,fill:"rgb(30 41 59)",stroke:"rgb(71 85 105)",strokeWidth:1.5}),e("text",{x:o.x,y:o.y+5,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:l})]},l))]})})}const f=320,S=f/2,L=110,w=[0,1,2,3,4,5];function b(t){const i=(-90+t*60)*Math.PI/180;return{x:S+L*Math.cos(i),y:S+L*Math.sin(i)}}const B={alive:"rgb(30 41 59)",dead:"rgb(76 5 25)",leader:"rgb(6 78 59)"},T={alive:"rgb(100 116 139)",dead:"rgb(244 63 94)",leader:"rgb(52 211 153)"};function P({step:t,eventKey:i}){return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:s("svg",{viewBox:`0 0 ${f} ${f}`,className:"mx-auto h-auto w-full max-w-xs",role:"img","aria-label":"Bully algorithm — выбор лидера",children:[t.legs.map((n,o)=>{const l=b(n.from),a=b(n.to);return e(g.circle,{r:6,fill:"rgb(99 102 241)",initial:{cx:l.x,cy:l.y,opacity:0},animate:{cx:[l.x,a.x],cy:[l.y,a.y],opacity:[0,1,1,0]},transition:{duration:1,delay:n.delayUnits,ease:"easeInOut"}},`${i}-leg-${o}`)}),w.map(n=>{const o=b(n),l=t.nodeRoles[n];return s("g",{children:[e(g.circle,{cx:o.x,cy:o.y,r:22,fill:B[l],stroke:T[l],strokeWidth:2.5,animate:{scale:[1,1.1,1]},style:{transformOrigin:`${o.x}px ${o.y}px`},transition:{duration:.35}},`${i}-${n}-${l}`),e("text",{x:o.x,y:o.y+5,textAnchor:"middle",fill:"white",fontSize:14,fontWeight:700,children:n}),l==="leader"&&e("text",{x:o.x,y:o.y-32,textAnchor:"middle",fill:"rgb(52 211 153)",fontSize:11,fontWeight:600,children:"LEADER"}),l==="dead"&&e("text",{x:o.x,y:o.y-32,textAnchor:"middle",fill:"rgb(244 63 94)",fontSize:16,fontWeight:700,children:"✕"})]},n)})]})})}const U=[{id:"locks",label:"Распределённые блокировки"},{id:"leader",label:"Выбор лидера (Bully algorithm)"}];function D(){const[t,i]=x("locks");return s("div",{className:"space-y-6",children:[e("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:U.map(n=>e("button",{onClick:()=>i(n.id),className:["rounded-md px-3 py-1.5 text-sm font-medium transition-colors",n.id===t?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:n.label},n.id))}),t==="locks"?e(X,{}):e(O,{})]})}function X(){const[t,i]=x("unsafe"),n=A(t),[o,l]=x(0);E(()=>l(0),[t]);const a=n[Math.min(o,n.length-1)];return s("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:v.map(c=>e("button",{onClick:()=>i(c.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",c.id===t?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:c.label},c.id))}),e(C,{leg:a.leg,eventKey:`${t}-${a.id}`}),s("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:a.label}),e("p",{className:"min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:a.description})]}),e(N,{stepIndex:o,setStepIndex:l,total:n.length})]})}function O(){const[t,i]=x(0),n=u[Math.min(t,u.length-1)];return s("div",{className:"space-y-6",children:[e(P,{step:n,eventKey:`${n.id}`}),s("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:n.label}),e("p",{className:"min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:n.description})]}),e(N,{stepIndex:t,setStepIndex:i,total:u.length})]})}function N({stepIndex:t,setStepIndex:i,total:n}){return s("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>i(()=>0),className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>i(o=>Math.max(0,o-1)),disabled:t===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>i(o=>Math.min(n-1,o+1)),disabled:t===n-1,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:"Вперёд ▶"}),s("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[t+1," / ",n]}),e("input",{type:"range",min:0,max:n-1,value:t,onChange:o=>i(()=>Number(o.target.value)),className:"w-full accent-indigo-500 sm:w-auto sm:flex-1"})]})}function $(){return s("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:"Два разных вопроса консенсуса: как гарантировать, что ресурс в моменте занят только одним клиентом (блокировки), и как узлам самим договориться, кто теперь главный (выбор лидера)."}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Распределённые блокировки"}),s("p",{className:"mt-2",children:["Обычный ",e("code",{className:"rounded bg-slate-800 px-1",children:"SET key value"})," ничего не проверяет — если два клиента напишут по очереди, второй молча перезапишет первого, и оба будут уверены, что владеют блокировкой. Правильный вариант —"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"SET key value NX PX 30000"}),":"," ",e("strong",{className:"text-white",children:"NX"})," устанавливает ключ, только если его ещё нет (атомарно), ",e("strong",{className:"text-white",children:"PX"})," — авто-истечение на случай, если владелец блокировки упадёт и не освободит её сам."]}),e("p",{className:"mt-2",children:"Снимать блокировку тоже нужно осторожно: если просто удалить ключ, можно случайно удалить уже НОВУЮ (чужую) блокировку — если наша к этому моменту истекла по PX. Поэтому удаление делают Lua-скриптом, который сначала сверяет, что значение всё ещё «моё»."})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Выбор лидера (Bully algorithm)"}),e("p",{className:"mt-2",children:"Когда лидер пропадает, узлам нужно самим выбрать нового — без внешнего арбитра. Bully algorithm («алгоритм забияки») — один из самых простых способов: узел, заметивший пропажу лидера, шлёт Election всем узлам с БОЛЬШИМ id. Каждый, кто откликнулся, сам инициирует выборы среди тех, кто старше уже его. Если узел не получил ни одного ответа — значит, он самый старший из живых, и объявляет себя лидером всем остальным."})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Raft и Paxos"}),e("p",{className:"mt-2",children:"Более серьёзные протоколы консенсуса (используются внутри etcd, ZooKeeper, множества распределённых БД) решают ту же задачу — выбор лидера и согласование состояния между узлами — но с формальными гарантиями корректности даже при частичных сбоях сети, задержках и одновременных попытках выборов. Raft спроектирован явно понятным для реализации; Paxos старше и считается более сложным для восприятия, хотя математически эквивалентен по гарантиям."})]})]})}const K=`/**
 * Два разных вопроса, которые распределённой системе нужно уметь решать
 * без единой точки правды:
 *  - Распределённые блокировки — как гарантировать, что ресурс в моменте
 *    занят только ОДНИМ клиентом, если клиентов и узлов несколько;
 *  - Выбор лидера — как узлам самим, без внешнего арбитра, договориться,
 *    кто из них теперь главный, если прежний лидер пропал.
 */

// ---------------------------------------------------------------------------
// Распределённые блокировки
// ---------------------------------------------------------------------------

export type LockLegKind = "write" | "error";

export interface LockLeg {
  from: string;
  to: string;
  kind: LockLegKind;
}

export interface LockStep {
  id: number;
  label: string;
  leg: LockLeg | null;
  description: string;
}

export type LockScenarioId = "unsafe" | "safe";

export const LOCK_SCENARIOS: { id: LockScenarioId; label: string }[] = [
  { id: "unsafe", label: "Без защиты (race condition)" },
  { id: "safe", label: "SET NX PX (правильно)" },
];

const UNSAFE_STEPS: LockStep[] = [
  {
    id: 1,
    label: "Client A: SET file_1 = A",
    leg: { from: "clientA", to: "redis", kind: "write" },
    description: "Client A считает, что теперь владеет блокировкой на file_1.",
  },
  {
    id: 2,
    label: "Client B: SET file_1 = B (перезаписывает!)",
    leg: { from: "clientB", to: "redis", kind: "write" },
    description:
      "Ничто не помешало Client B перезаписать значение — обычный SET ничего не проверяет. Теперь ОБА клиента уверены, что владеют блокировкой, — гонка (race condition).",
  },
];

const SAFE_STEPS: LockStep[] = [
  {
    id: 1,
    label: "Client A: SET file_1 A NX PX 30000 → true",
    leg: { from: "clientA", to: "redis", kind: "write" },
    description: "NX — установить, только если ключа ещё нет. PX — авто-истечение через 30 секунд на случай, если Client A упадёт, не сняв блокировку. Client A получает лок.",
  },
  {
    id: 2,
    label: "Client B: SET file_1 B NX PX 30000 → false",
    leg: { from: "clientB", to: "redis", kind: "error" },
    description: "Ключ уже существует — NX не даёт перезаписать. Client B не получает блокировку и должен подождать или повторить позже.",
  },
  {
    id: 3,
    label: "Client A безопасно снимает блокировку",
    leg: { from: "clientA", to: "redis", kind: "write" },
    description:
      "DEL выполняется Lua-скриптом, который СНАЧАЛА проверяет: значение по ключу всё ещё равно A? Если да — удаляет. Без этой проверки можно было бы случайно удалить чужую (уже новую) блокировку, если наша истекла по PX прямо перед этим.",
  },
];

export function getLockSteps(scenario: LockScenarioId): LockStep[] {
  return scenario === "unsafe" ? UNSAFE_STEPS : SAFE_STEPS;
}

// ---------------------------------------------------------------------------
// Выбор лидера — Bully algorithm
// ---------------------------------------------------------------------------

export type NodeRole = "alive" | "dead" | "leader";

export interface BullyStep {
  id: number;
  label: string;
  legs: { from: number; to: number; delayUnits: number }[];
  nodeRoles: Record<number, NodeRole>;
  description: string;
}

const ALL_ALIVE: Record<number, NodeRole> = { 0: "alive", 1: "alive", 2: "alive", 3: "alive", 4: "alive", 5: "dead" };

export const BULLY_STEPS: BullyStep[] = [
  {
    id: 1,
    label: "Узел #5 (лидер) падает",
    legs: [],
    nodeRoles: ALL_ALIVE,
    description: "Прежний лидер (узел с наибольшим id) недоступен — остальные узлы об этом пока не знают.",
  },
  {
    id: 2,
    label: "Узел #2 замечает это и начинает выборы",
    legs: [
      { from: 2, to: 3, delayUnits: 0 },
      { from: 2, to: 4, delayUnits: 0 },
      { from: 2, to: 5, delayUnits: 0 },
    ],
    nodeRoles: ALL_ALIVE,
    description: "Election рассылается ВСЕМ узлам с БОЛЬШИМ id — вдруг кто-то из них жив и должен возглавить.",
  },
  {
    id: 3,
    label: "Узлы #3 и #4 отвечают: «я живой, дальше сам»",
    legs: [
      { from: 3, to: 2, delayUnits: 0 },
      { from: 4, to: 2, delayUnits: 0 },
    ],
    nodeRoles: ALL_ALIVE,
    description: "Узел #5 не отвечает (мёртв). Узлы #3 и #4 подтверждают получение и сами включаются в выборы — узел #2 в них больше не участвует.",
  },
  {
    id: 4,
    label: "Узел #4 (старший из отозвавшихся) запускает свои выборы",
    legs: [{ from: 4, to: 5, delayUnits: 0 }],
    nodeRoles: ALL_ALIVE,
    description: "По тому же правилу — Election всем, кто старше него. Единственный такой узел — мёртвый #5.",
  },
  {
    id: 5,
    label: "Узел #5 молчит — таймаут. Узел #4 объявляет себя лидером",
    legs: [],
    nodeRoles: { ...ALL_ALIVE, 4: "leader" },
    description: "Никто старше не отозвался — значит, узел #4 и есть самый старший из живых.",
  },
  {
    id: 6,
    label: "Узел #4 рассылает Leader всем остальным",
    legs: [
      { from: 4, to: 0, delayUnits: 0 },
      { from: 4, to: 1, delayUnits: 0 },
      { from: 4, to: 2, delayUnits: 0 },
      { from: 4, to: 3, delayUnits: 0 },
    ],
    nodeRoles: { ...ALL_ALIVE, 4: "leader" },
    description: "Все живые узлы теперь знают нового лидера — выборы завершены без единого внешнего арбитра.",
  },
];
`,F=`import { motion } from "framer-motion";
import type { BullyStep, NodeRole } from "./consensus";

const SIZE = 320;
const CENTER = SIZE / 2;
const RADIUS = 110;
const NODE_IDS = [0, 1, 2, 3, 4, 5];

function pointFor(id: number) {
  const rad = ((-90 + id * 60) * Math.PI) / 180;
  return { x: CENTER + RADIUS * Math.cos(rad), y: CENTER + RADIUS * Math.sin(rad) };
}

const ROLE_FILL: Record<NodeRole, string> = {
  alive: "rgb(30 41 59)",
  dead: "rgb(76 5 25)",
  leader: "rgb(6 78 59)",
};
const ROLE_STROKE: Record<NodeRole, string> = {
  alive: "rgb(100 116 139)",
  dead: "rgb(244 63 94)",
  leader: "rgb(52 211 153)",
};

export function BullyDiagram({ step, eventKey }: { step: BullyStep; eventKey: string }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${SIZE} \${SIZE}\`} className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Bully algorithm — выбор лидера">
        {step.legs.map((leg, i) => {
          const a = pointFor(leg.from);
          const b = pointFor(leg.to);
          return (
            <motion.circle
              key={\`\${eventKey}-leg-\${i}\`}
              r={6}
              fill="rgb(99 102 241)"
              initial={{ cx: a.x, cy: a.y, opacity: 0 }}
              animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1, delay: leg.delayUnits, ease: "easeInOut" }}
            />
          );
        })}

        {NODE_IDS.map((id) => {
          const pos = pointFor(id);
          const role = step.nodeRoles[id];
          return (
            <g key={id}>
              <motion.circle
                key={\`\${eventKey}-\${id}-\${role}\`}
                cx={pos.x}
                cy={pos.y}
                r={22}
                fill={ROLE_FILL[role]}
                stroke={ROLE_STROKE[role]}
                strokeWidth={2.5}
                animate={{ scale: [1, 1.1, 1] }}
                style={{ transformOrigin: \`\${pos.x}px \${pos.y}px\` }}
                transition={{ duration: 0.35 }}
              />
              <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill="white" fontSize={14} fontWeight={700}>
                {id}
              </text>
              {role === "leader" && (
                <text x={pos.x} y={pos.y - 32} textAnchor="middle" fill="rgb(52 211 153)" fontSize={11} fontWeight={600}>
                  LEADER
                </text>
              )}
              {role === "dead" && (
                <text x={pos.x} y={pos.y - 32} textAnchor="middle" fill="rgb(244 63 94)" fontSize={16} fontWeight={700}>
                  ✕
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
`,M=`import { useEffect, useState } from "react";
import { BULLY_STEPS, LOCK_SCENARIOS, getLockSteps, type LockScenarioId } from "./consensus";
import { LockDiagram } from "./LockDiagram";
import { BullyDiagram } from "./BullyDiagram";

type Tab = "locks" | "leader";

const TABS: { id: Tab; label: string }[] = [
  { id: "locks", label: "Распределённые блокировки" },
  { id: "leader", label: "Выбор лидера (Bully algorithm)" },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("locks");

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

      {tab === "locks" ? <LocksPanel /> : <LeaderPanel />}
    </div>
  );
}

function LocksPanel() {
  const [scenarioId, setScenarioId] = useState<LockScenarioId>("unsafe");
  const steps = getLockSteps(scenarioId);

  const [stepIndex, setStepIndex] = useState(0);
  useEffect(() => setStepIndex(0), [scenarioId]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {LOCK_SCENARIOS.map((s) => (
          <button
            key={s.id}
            onClick={() => setScenarioId(s.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              s.id === scenarioId
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {s.label}
          </button>
        ))}
      </div>

      <LockDiagram leg={step.leg} eventKey={\`\${scenarioId}-\${step.id}\`} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
      </div>

      <StepControls stepIndex={stepIndex} setStepIndex={setStepIndex} total={steps.length} />
    </div>
  );
}

function LeaderPanel() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = BULLY_STEPS[Math.min(stepIndex, BULLY_STEPS.length - 1)];

  return (
    <div className="space-y-6">
      <BullyDiagram step={step} eventKey={\`\${step.id}\`} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[4.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
      </div>

      <StepControls stepIndex={stepIndex} setStepIndex={setStepIndex} total={BULLY_STEPS.length} />
    </div>
  );
}

function StepControls({
  stepIndex,
  setStepIndex,
  total,
}: {
  stepIndex: number;
  setStepIndex: (updater: (i: number) => number) => void;
  total: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={() => setStepIndex(() => 0)}
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
        onClick={() => setStepIndex((i) => Math.min(total - 1, i + 1))}
        disabled={stepIndex === total - 1}
        className="rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40"
      >
        Вперёд ▶
      </button>
      <span className="ml-auto font-mono text-xs text-slate-500">
        {stepIndex + 1} / {total}
      </span>
      <input
        type="range"
        min={0}
        max={total - 1}
        value={stepIndex}
        onChange={(e) => setStepIndex(() => Number(e.target.value))}
        className="w-full accent-indigo-500 sm:w-auto sm:flex-1"
      />
    </div>
  );
}
`,Z={meta:{id:"locks-leader-election",title:"Консенсус: блокировки и выбор лидера",category:"architectural",summary:"Redis SET NX PX против гонки за блокировку + Bully algorithm: как узлы сами выбирают нового лидера без внешнего арбитра, когда прежний пропал."},Demo:D,Explanation:$,code:[{filename:"consensus.ts",language:"typescript",source:K},{filename:"BullyDiagram.tsx",language:"tsx",source:F},{filename:"Demo.tsx",language:"tsx",source:M}]};export{Z as default};
