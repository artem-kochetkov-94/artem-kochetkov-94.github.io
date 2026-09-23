/* empty css              */import{_ as n,a as d,b as P}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as x,e as T}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as S}from"./proxy-BroObIT1.js";const U=[{id:"service",label:"Service"},{id:"db1",label:"DB #1"},{id:"db2",label:"DB #2"}],k={service:{x:90,y:130},db1:{x:400,y:60},db2:{x:400,y:200}},N=[["service","db1"],["service","db2"]],A=[{id:"success",label:"Успешный сценарий"},{id:"prepare-fails",label:"Сбой на Prepare"}],I=[{id:1,label:"Фаза 1 — Prepare",legs:[{from:"service",to:"db1",kind:"request",delayUnits:0},{from:"service",to:"db2",kind:"request",delayUnits:0}],description:"Координатор спрашивает у ОБЕИХ баз: «готовы зафиксировать?» — но ещё не фиксирует."},{id:2,label:"Обе базы подтверждают готовность",legs:[{from:"db1",to:"service",kind:"response",delayUnits:0},{from:"db2",to:"service",kind:"response",delayUnits:0}],description:"Каждая база заблокировала нужные строки и готова закоммитить по первому сигналу."},{id:3,label:"Фаза 2 — Commit",legs:[{from:"service",to:"db1",kind:"write",delayUnits:0},{from:"service",to:"db2",kind:"write",delayUnits:0}],description:"Раз ВСЕ ответили «да» — координатор даёт команду зафиксировать обеим сразу."},{id:4,label:"Обе базы подтверждают commit",legs:[{from:"db1",to:"service",kind:"response",delayUnits:0},{from:"db2",to:"service",kind:"response",delayUnits:0}],description:"Транзакция зафиксирована на обеих базах — либо обе, либо (как в другом сценарии) ни одна."}],w=[{id:1,label:"Фаза 1 — Prepare",legs:[{from:"service",to:"db1",kind:"request",delayUnits:0},{from:"service",to:"db2",kind:"request",delayUnits:0}],description:"Координатор спрашивает у обеих баз, готовы ли они зафиксировать транзакцию."},{id:2,label:"DB #1 — ОК, DB #2 — отказ",legs:[{from:"db1",to:"service",kind:"response",delayUnits:0},{from:"db2",to:"service",kind:"error",delayUnits:0}],description:"DB #2 не может гарантировать фиксацию (например, конфликт блокировок) и отвечает отказом."},{id:3,label:"Координатор шлёт Rollback ОБЕИМ",legs:[{from:"service",to:"db1",kind:"error",delayUnits:0},{from:"service",to:"db2",kind:"error",delayUnits:0}],description:"Раз хотя бы одна база не готова — откатываются ОБЕ. Частичная фиксация недопустима, даже если DB #1 была готова."}];function D(r){return r==="success"?I:w}const B={nodes:U,pos:k,edges:N},G=[{id:"orders",label:"Order Service"},{id:"bus",label:"Event Bus"},{id:"customer",label:"Customer Service"}],R={orders:{x:90,y:130},bus:{x:300,y:130},customer:{x:510,y:130}},$=[["orders","bus"],["bus","customer"]],L=[{id:"success",label:"Успех"},{id:"compensation",label:"Сбой → компенсация"}],X=[{id:1,label:"Create Order → публикует Order Created",legs:[{from:"orders",to:"bus",kind:"write",delayUnits:0}],description:"Order Service выполняет свою ЛОКАЛЬНУЮ транзакцию и публикует событие о результате."},{id:2,label:"Customer Service реагирует на событие",legs:[{from:"bus",to:"customer",kind:"response",delayUnits:0}],description:"Customer Service сам подписан на Order Created — никто его не вызывал напрямую."},{id:3,label:"Update Customer → публикует Customer Updated",legs:[{from:"customer",to:"bus",kind:"write",delayUnits:0}],description:"Ещё одна локальная транзакция, ещё одно событие о результате."},{id:4,label:"Order Service завершает сагу",legs:[{from:"bus",to:"orders",kind:"response",delayUnits:0}],description:"Finish — все локальные шаги выполнены успешно, распределённая операция завершена."}],K=[{id:1,label:"Create Order → публикует Order Created",legs:[{from:"orders",to:"bus",kind:"write",delayUnits:0}],description:"Первый локальный шаг прошёл успешно."},{id:2,label:"Customer Service реагирует — и падает",legs:[{from:"bus",to:"customer",kind:"response",delayUnits:0}],description:"Например, у клиента не хватает лимита — обновить его данные не получилось."},{id:3,label:"Customer Service публикует Customer Failed",legs:[{from:"customer",to:"bus",kind:"error",delayUnits:0}],description:"Событие о неудаче — такое же событие, как и об успехе, просто другого типа."},{id:4,label:"Order Service запускает компенсацию",legs:[{from:"bus",to:"orders",kind:"error",delayUnits:0}],description:"Вместо отката единой распределённой транзакции (её просто не существует) — запускается КОМПЕНСИРУЮЩАЯ операция, отменяющая эффект уже выполненного шага (например, отменяет заказ)."}];function M(r){return r==="success"?X:K}const q={nodes:G,pos:R,edges:$},W=[{id:"user",label:"User"},{id:"controller",label:"Controller"},{id:"entity",label:"Entity"},{id:"outbox",label:"Outbox"},{id:"publisher",label:"Publisher"},{id:"mq",label:"MQ"}],F={user:{x:60,y:130},controller:{x:220,y:130},entity:{x:400,y:70},outbox:{x:400,y:190},publisher:{x:560,y:190},mq:{x:560,y:70}},H=[["user","controller"],["controller","entity"],["controller","outbox"],["publisher","outbox"],["publisher","mq"]],j=[{id:1,label:"User → Controller: создать заказ",legs:[{from:"user",to:"controller",kind:"write",delayUnits:0}],description:"Обычный запрос на создание сущности."},{id:2,label:"Controller пишет Entity и Outbox ОДНОЙ транзакцией",legs:[{from:"controller",to:"entity",kind:"write",delayUnits:0},{from:"controller",to:"outbox",kind:"write",delayUnits:0}],description:'Ключевой момент: запись в Entity (бизнес-данные) и в Outbox ("нужно опубликовать это событие") происходят в ОДНОЙ локальной транзакции БД — либо обе, либо ни одна.'},{id:3,label:"Publisher опрашивает таблицу Outbox",legs:[{from:"publisher",to:"outbox",kind:"read",delayUnits:0}],description:"Отдельный процесс регулярно вычитывает ещё не отправленные строки из Outbox."},{id:4,label:"Publisher публикует событие в MQ",legs:[{from:"publisher",to:"mq",kind:"write",delayUnits:0}],description:"Только теперь событие реально уходит в очередь. Если Publisher упадёт до этого шага — строка останется в Outbox и будет отправлена повторно при перезапуске (at-least-once)."}],Q={nodes:W,pos:F,edges:H},z=640,J=260,v=120,O=52,y=1,V={write:"rgb(99 102 241)",request:"rgb(99 102 241)",response:"rgb(56 189 248)",read:"rgb(99 102 241)",error:"rgb(244 63 94)"};function Y({legs:r,pos:i,eventKey:l}){const c=y/2;return n(P,{children:r.map((a,p)=>{const e=i[a.from],t=i[a.to],o=a.delayUnits*y;return a.kind==="read"?d("g",{children:[n(S.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:e.x,cy:e.y,opacity:0},animate:{cx:[e.x,t.x],cy:[e.y,t.y],opacity:[0,1,1,0]},transition:{duration:c,delay:o,ease:"easeInOut"}}),n(S.circle,{r:6,fill:"rgb(56 189 248)",initial:{cx:t.x,cy:t.y,opacity:0},animate:{cx:[t.x,e.x],cy:[t.y,e.y],opacity:[0,1,1,0]},transition:{duration:c,delay:o+c,ease:"easeInOut"}})]},`${l}-leg-${p}`):n(S.circle,{r:7,fill:V[a.kind],initial:{cx:e.x,cy:e.y,opacity:0},animate:{cx:[e.x,t.x],cy:[e.y,t.y],opacity:[0,1,1,0]},transition:{duration:y,delay:o,ease:"easeInOut"}},`${l}-leg-${p}`)})})}function Z({nodes:r,pos:i,edges:l,step:c,eventKey:a}){const p=new Set(c.legs.flatMap(e=>[e.from,e.to]));return n("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:d("svg",{viewBox:`0 0 ${z} ${J}`,className:"h-auto w-full",role:"img","aria-label":"Схема транзакции",children:[l.map(([e,t])=>n("line",{x1:i[e].x,y1:i[e].y,x2:i[t].x,y2:i[t].y,stroke:"rgb(51 65 85)",strokeWidth:2},`edge-${e}-${t}`)),n(Y,{legs:c.legs,pos:i,eventKey:a}),r.map(e=>{const t={x:i[e.id].x-v/2,y:i[e.id].y-O/2},o=p.has(e.id);return d("g",{children:[n(S.rect,{x:t.x,y:t.y,width:v,height:O,rx:10,fill:o?"rgb(49 46 129)":"rgb(30 41 59)",stroke:o?"rgb(129 140 248)":"rgb(71 85 105)",strokeWidth:o?2.5:1.5,animate:o?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${i[e.id].x}px ${i[e.id].y}px`},transition:{duration:.4}},`${a}-${e.id}`),n("text",{x:i[e.id].x,y:i[e.id].y+5,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:e.label})]},e.id)})]})})}const ee=900,ne=[{id:"2pc",label:"2PC"},{id:"saga",label:"Saga"},{id:"outbox",label:"Transaction Outbox"}];function te(){const[r,i]=x("2pc"),[l,c]=x("success"),[a,p]=x("success"),e=r==="2pc"?B:r==="saga"?q:Q,t=r==="2pc"?D(l):r==="saga"?M(a):j,[o,m]=x(0),[f,b]=x(!1),u=o>=t.length-1;T(()=>{m(0),b(!1)},[r,l,a]),T(()=>{if(!f)return;if(u){b(!1);return}const _=(Math.max(0,...t[o].legs.map(h=>h.delayUnits))+1)*y*1e3+ee,E=setTimeout(()=>m(h=>h+1),_);return()=>clearTimeout(E)},[f,u,o,t]);const g=t[Math.min(o,t.length-1)],C=`${r}-${l}-${a}-${g.id}`;return d("div",{className:"space-y-6",children:[n("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:ne.map(s=>n("button",{onClick:()=>i(s.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",s.id===r?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:s.label},s.id))}),r==="2pc"&&n("div",{className:"flex flex-wrap gap-2",children:A.map(s=>n("button",{onClick:()=>c(s.id),className:["rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",s.id===l?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:s.label},s.id))}),r==="saga"&&n("div",{className:"flex flex-wrap gap-2",children:L.map(s=>n("button",{onClick:()=>p(s.id),className:["rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",s.id===a?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:s.label},s.id))}),n(Z,{nodes:e.nodes,pos:e.pos,edges:e.edges,step:g,eventKey:C}),d("div",{className:"space-y-1.5",children:[n("p",{className:"font-mono text-xs text-slate-500",children:g.label}),n("p",{className:"min-h-[4rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:g.description})]}),d("div",{className:"flex flex-wrap items-center gap-3",children:[n("button",{onClick:()=>{m(0),b(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),n("button",{onClick:()=>{b(!1),m(s=>Math.max(0,s-1))},disabled:o===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),n("button",{onClick:()=>b(s=>!s),disabled:u,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:f?"⏸ Пауза":"▶ Авто"}),n("button",{onClick:()=>{b(!1),m(s=>Math.min(t.length-1,s+1))},disabled:u,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),d("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[o+1," / ",t.length]})]}),n("input",{type:"range",min:0,max:t.length-1,value:o,onChange:s=>{b(!1),m(Number(s.target.value))},className:"w-full accent-indigo-500"})]})}function se(){return d("div",{className:"space-y-4 text-slate-300",children:[n("p",{children:"Одна бизнес-операция иногда должна изменить данные сразу в нескольких независимых местах — и либо это должно случиться везде, либо нигде. Три разных решения этой задачи."}),d("div",{children:[n("h3",{className:"font-semibold text-white",children:"2PC (Two-Phase Commit)"}),n("p",{className:"mt-2",children:"Координатор сначала спрашивает «готовы?» у всех участников (фаза Prepare), и только если ВСЕ ответили «да», даёт команду зафиксировать (фаза Commit). Если хоть один против — Rollback у всех. Строго консистентно, но участники блокируют нужные ресурсы на всё время голосования — а если координатор упадёт между Prepare и Commit, участники могут зависнуть в неопределённом состоянии (in-doubt transaction) до его восстановления."})]}),d("div",{children:[n("h3",{className:"font-semibold text-white",children:"Saga"}),n("p",{className:"mt-2",children:"Вместо одной распределённой транзакции — набор ЛОКАЛЬНЫХ транзакций, каждая из которых публикует событие, запускающее следующий шаг. Если шаг падает, отката единой транзакции не существует — вместо него запускается КОМПЕНСИРУЮЩАЯ операция, которая отменяет эффект уже выполненных шагов (например, отмена ранее созданного заказа). Никто не блокируется на время всей саги — цена за это: между шагами система временно находится в промежуточном, не до конца согласованном состоянии."})]}),d("div",{children:[n("h3",{className:"font-semibold text-white",children:"Transaction Outbox"}),d("p",{className:"mt-2",children:["Решает смежную, но другую проблему: ",n("strong",{className:"text-white",children:"dual write"})," — запись в БД и публикация события в очередь — это два разных ресурса, обычная транзакция не может атомарно охватить оба сразу. Решение — писать не напрямую в очередь, а в отдельную таблицу Outbox, ВНУТРИ ТОЙ ЖЕ локальной транзакции, что и бизнес-данные. Отдельный процесс (Publisher) затем надёжно перекладывает записи из Outbox в очередь — at-least-once, с гарантией, что событие не потеряется, даже если Publisher упадёт посередине."]})]})]})}const re=`/**
 * Одна бизнес-операция иногда должна изменить данные сразу в НЕСКОЛЬКИХ
 * независимых местах (базах, сервисах) — и либо это должно случиться
 * везде, либо нигде. Три способа добиться этого:
 *  - 2PC (Two-Phase Commit) — координатор сначала спрашивает "готовы?"
 *    (Prepare) у всех участников, и только если ВСЕ ответили "да", даёт
 *    команду зафиксировать (Commit); если хоть один против — Rollback
 *    у всех. Строго консистентно, но участники блокируются на время
 *    голосования.
 *  - Saga — вместо одной распределённой транзакции — цепочка ЛОКАЛЬНЫХ
 *    транзакций, каждая публикует событие, запускающее следующую. Если
 *    шаг падает — не откат, а КОМПЕНСИРУЮЩАЯ операция, отменяющая эффект
 *    уже выполненных шагов.
 *  - Transaction Outbox — решает другую, но смежную проблему: как
 *    атомарно записать в БД И опубликовать событие в очередь, если это
 *    два разных ресурса, между которыми нет общей транзакции.
 */

export type TxLegKind = "request" | "response" | "write" | "read" | "error";

export interface TxLeg {
  from: string;
  to: string;
  kind: TxLegKind;
  delayUnits: number;
}

export interface TxStep {
  id: number;
  label: string;
  legs: TxLeg[];
  description: string;
}

export interface TxNode {
  id: string;
  label: string;
}

export interface TxScenario {
  nodes: TxNode[];
  pos: Record<string, { x: number; y: number }>;
  edges: [string, string][];
  steps: TxStep[];
}

// ---------------------------------------------------------------------------
// 2PC
// ---------------------------------------------------------------------------

const TPC_NODES: TxNode[] = [
  { id: "service", label: "Service" },
  { id: "db1", label: "DB #1" },
  { id: "db2", label: "DB #2" },
];
const TPC_POS: Record<string, { x: number; y: number }> = {
  service: { x: 90, y: 130 },
  db1: { x: 400, y: 60 },
  db2: { x: 400, y: 200 },
};
const TPC_EDGES: [string, string][] = [
  ["service", "db1"],
  ["service", "db2"],
];

export type TpcScenarioId = "success" | "prepare-fails";

export const TPC_SCENARIOS: { id: TpcScenarioId; label: string }[] = [
  { id: "success", label: "Успешный сценарий" },
  { id: "prepare-fails", label: "Сбой на Prepare" },
];

const TPC_SUCCESS_STEPS: TxStep[] = [
  {
    id: 1,
    label: "Фаза 1 — Prepare",
    legs: [
      { from: "service", to: "db1", kind: "request", delayUnits: 0 },
      { from: "service", to: "db2", kind: "request", delayUnits: 0 },
    ],
    description: "Координатор спрашивает у ОБЕИХ баз: «готовы зафиксировать?» — но ещё не фиксирует.",
  },
  {
    id: 2,
    label: "Обе базы подтверждают готовность",
    legs: [
      { from: "db1", to: "service", kind: "response", delayUnits: 0 },
      { from: "db2", to: "service", kind: "response", delayUnits: 0 },
    ],
    description: "Каждая база заблокировала нужные строки и готова закоммитить по первому сигналу.",
  },
  {
    id: 3,
    label: "Фаза 2 — Commit",
    legs: [
      { from: "service", to: "db1", kind: "write", delayUnits: 0 },
      { from: "service", to: "db2", kind: "write", delayUnits: 0 },
    ],
    description: "Раз ВСЕ ответили «да» — координатор даёт команду зафиксировать обеим сразу.",
  },
  {
    id: 4,
    label: "Обе базы подтверждают commit",
    legs: [
      { from: "db1", to: "service", kind: "response", delayUnits: 0 },
      { from: "db2", to: "service", kind: "response", delayUnits: 0 },
    ],
    description: "Транзакция зафиксирована на обеих базах — либо обе, либо (как в другом сценарии) ни одна.",
  },
];

const TPC_PREPARE_FAILS_STEPS: TxStep[] = [
  {
    id: 1,
    label: "Фаза 1 — Prepare",
    legs: [
      { from: "service", to: "db1", kind: "request", delayUnits: 0 },
      { from: "service", to: "db2", kind: "request", delayUnits: 0 },
    ],
    description: "Координатор спрашивает у обеих баз, готовы ли они зафиксировать транзакцию.",
  },
  {
    id: 2,
    label: "DB #1 — ОК, DB #2 — отказ",
    legs: [
      { from: "db1", to: "service", kind: "response", delayUnits: 0 },
      { from: "db2", to: "service", kind: "error", delayUnits: 0 },
    ],
    description: "DB #2 не может гарантировать фиксацию (например, конфликт блокировок) и отвечает отказом.",
  },
  {
    id: 3,
    label: "Координатор шлёт Rollback ОБЕИМ",
    legs: [
      { from: "service", to: "db1", kind: "error", delayUnits: 0 },
      { from: "service", to: "db2", kind: "error", delayUnits: 0 },
    ],
    description: "Раз хотя бы одна база не готова — откатываются ОБЕ. Частичная фиксация недопустима, даже если DB #1 была готова.",
  },
];

export function getTpcSteps(scenario: TpcScenarioId): TxStep[] {
  return scenario === "success" ? TPC_SUCCESS_STEPS : TPC_PREPARE_FAILS_STEPS;
}

export const tpcScenario: TxScenario = {
  nodes: TPC_NODES,
  pos: TPC_POS,
  edges: TPC_EDGES,
  steps: TPC_SUCCESS_STEPS,
};

// ---------------------------------------------------------------------------
// Saga
// ---------------------------------------------------------------------------

const SAGA_NODES: TxNode[] = [
  { id: "orders", label: "Order Service" },
  { id: "bus", label: "Event Bus" },
  { id: "customer", label: "Customer Service" },
];
const SAGA_POS: Record<string, { x: number; y: number }> = {
  orders: { x: 90, y: 130 },
  bus: { x: 300, y: 130 },
  customer: { x: 510, y: 130 },
};
const SAGA_EDGES: [string, string][] = [
  ["orders", "bus"],
  ["bus", "customer"],
];

export type SagaScenarioId = "success" | "compensation";

export const SAGA_SCENARIOS: { id: SagaScenarioId; label: string }[] = [
  { id: "success", label: "Успех" },
  { id: "compensation", label: "Сбой → компенсация" },
];

const SAGA_SUCCESS_STEPS: TxStep[] = [
  {
    id: 1,
    label: "Create Order → публикует Order Created",
    legs: [{ from: "orders", to: "bus", kind: "write", delayUnits: 0 }],
    description: "Order Service выполняет свою ЛОКАЛЬНУЮ транзакцию и публикует событие о результате.",
  },
  {
    id: 2,
    label: "Customer Service реагирует на событие",
    legs: [{ from: "bus", to: "customer", kind: "response", delayUnits: 0 }],
    description: "Customer Service сам подписан на Order Created — никто его не вызывал напрямую.",
  },
  {
    id: 3,
    label: "Update Customer → публикует Customer Updated",
    legs: [{ from: "customer", to: "bus", kind: "write", delayUnits: 0 }],
    description: "Ещё одна локальная транзакция, ещё одно событие о результате.",
  },
  {
    id: 4,
    label: "Order Service завершает сагу",
    legs: [{ from: "bus", to: "orders", kind: "response", delayUnits: 0 }],
    description: "Finish — все локальные шаги выполнены успешно, распределённая операция завершена.",
  },
];

const SAGA_COMPENSATION_STEPS: TxStep[] = [
  {
    id: 1,
    label: "Create Order → публикует Order Created",
    legs: [{ from: "orders", to: "bus", kind: "write", delayUnits: 0 }],
    description: "Первый локальный шаг прошёл успешно.",
  },
  {
    id: 2,
    label: "Customer Service реагирует — и падает",
    legs: [{ from: "bus", to: "customer", kind: "response", delayUnits: 0 }],
    description: "Например, у клиента не хватает лимита — обновить его данные не получилось.",
  },
  {
    id: 3,
    label: "Customer Service публикует Customer Failed",
    legs: [{ from: "customer", to: "bus", kind: "error", delayUnits: 0 }],
    description: "Событие о неудаче — такое же событие, как и об успехе, просто другого типа.",
  },
  {
    id: 4,
    label: "Order Service запускает компенсацию",
    legs: [{ from: "bus", to: "orders", kind: "error", delayUnits: 0 }],
    description:
      "Вместо отката единой распределённой транзакции (её просто не существует) — запускается КОМПЕНСИРУЮЩАЯ операция, отменяющая эффект уже выполненного шага (например, отменяет заказ).",
  },
];

export function getSagaSteps(scenario: SagaScenarioId): TxStep[] {
  return scenario === "success" ? SAGA_SUCCESS_STEPS : SAGA_COMPENSATION_STEPS;
}

export const sagaScenario: TxScenario = {
  nodes: SAGA_NODES,
  pos: SAGA_POS,
  edges: SAGA_EDGES,
  steps: SAGA_SUCCESS_STEPS,
};

// ---------------------------------------------------------------------------
// Transaction Outbox
// ---------------------------------------------------------------------------

const OUTBOX_NODES: TxNode[] = [
  { id: "user", label: "User" },
  { id: "controller", label: "Controller" },
  { id: "entity", label: "Entity" },
  { id: "outbox", label: "Outbox" },
  { id: "publisher", label: "Publisher" },
  { id: "mq", label: "MQ" },
];
const OUTBOX_POS: Record<string, { x: number; y: number }> = {
  user: { x: 60, y: 130 },
  controller: { x: 220, y: 130 },
  entity: { x: 400, y: 70 },
  outbox: { x: 400, y: 190 },
  publisher: { x: 560, y: 190 },
  mq: { x: 560, y: 70 },
};
const OUTBOX_EDGES: [string, string][] = [
  ["user", "controller"],
  ["controller", "entity"],
  ["controller", "outbox"],
  ["publisher", "outbox"],
  ["publisher", "mq"],
];

export const OUTBOX_STEPS: TxStep[] = [
  {
    id: 1,
    label: "User → Controller: создать заказ",
    legs: [{ from: "user", to: "controller", kind: "write", delayUnits: 0 }],
    description: "Обычный запрос на создание сущности.",
  },
  {
    id: 2,
    label: "Controller пишет Entity и Outbox ОДНОЙ транзакцией",
    legs: [
      { from: "controller", to: "entity", kind: "write", delayUnits: 0 },
      { from: "controller", to: "outbox", kind: "write", delayUnits: 0 },
    ],
    description:
      "Ключевой момент: запись в Entity (бизнес-данные) и в Outbox (\\"нужно опубликовать это событие\\") происходят в ОДНОЙ локальной транзакции БД — либо обе, либо ни одна.",
  },
  {
    id: 3,
    label: "Publisher опрашивает таблицу Outbox",
    legs: [{ from: "publisher", to: "outbox", kind: "read", delayUnits: 0 }],
    description: "Отдельный процесс регулярно вычитывает ещё не отправленные строки из Outbox.",
  },
  {
    id: 4,
    label: "Publisher публикует событие в MQ",
    legs: [{ from: "publisher", to: "mq", kind: "write", delayUnits: 0 }],
    description:
      "Только теперь событие реально уходит в очередь. Если Publisher упадёт до этого шага — строка останется в Outbox и будет отправлена повторно при перезапуске (at-least-once).",
  },
];

export const outboxScenario: TxScenario = {
  nodes: OUTBOX_NODES,
  pos: OUTBOX_POS,
  edges: OUTBOX_EDGES,
  steps: OUTBOX_STEPS,
};
`,ie=`import { motion } from "framer-motion";
import type { TxLeg, TxNode, TxStep } from "./transactions";

const W = 640;
const H = 260;
const BOX_W = 120;
const BOX_H = 52;

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export const PACKET_LEG_DURATION = 1;

const LEG_COLOR: Record<TxLeg["kind"], string> = {
  write: "rgb(99 102 241)",
  request: "rgb(99 102 241)",
  response: "rgb(56 189 248)",
  read: "rgb(99 102 241)",
  error: "rgb(244 63 94)",
};

function LegPulses({
  legs,
  pos,
  eventKey,
}: {
  legs: TxLeg[];
  pos: Record<string, { x: number; y: number }>;
  eventKey: string;
}) {
  const half = PACKET_LEG_DURATION / 2;
  return (
    <>
      {legs.map((leg, i) => {
        const a = pos[leg.from];
        const b = pos[leg.to];
        const legStart = leg.delayUnits * PACKET_LEG_DURATION;

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
                transition={{ duration: half, delay: legStart + half, ease: "easeInOut" }}
              />
            </g>
          );
        }

        return (
          <motion.circle
            key={\`\${eventKey}-leg-\${i}\`}
            r={7}
            fill={LEG_COLOR[leg.kind]}
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{ duration: PACKET_LEG_DURATION, delay: legStart, ease: "easeInOut" }}
          />
        );
      })}
    </>
  );
}

export function TxDiagram({
  nodes,
  pos,
  edges,
  step,
  eventKey,
}: {
  nodes: TxNode[];
  pos: Record<string, { x: number; y: number }>;
  edges: [string, string][];
  step: TxStep;
  eventKey: string;
}) {
  const touched = new Set(step.legs.flatMap((leg) => [leg.from, leg.to]));

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Схема транзакции">
        {edges.map(([from, to]) => (
          <line
            key={\`edge-\${from}-\${to}\`}
            x1={pos[from].x}
            y1={pos[from].y}
            x2={pos[to].x}
            y2={pos[to].y}
            stroke="rgb(51 65 85)"
            strokeWidth={2}
          />
        ))}

        <LegPulses legs={step.legs} pos={pos} eventKey={eventKey} />

        {nodes.map((node) => {
          const rect = { x: pos[node.id].x - BOX_W / 2, y: pos[node.id].y - BOX_H / 2 };
          const isTouched = touched.has(node.id);
          return (
            <g key={node.id}>
              <motion.rect
                key={\`\${eventKey}-\${node.id}\`}
                x={rect.x}
                y={rect.y}
                width={BOX_W}
                height={BOX_H}
                rx={10}
                fill={isTouched ? "rgb(49 46 129)" : "rgb(30 41 59)"}
                stroke={isTouched ? "rgb(129 140 248)" : "rgb(71 85 105)"}
                strokeWidth={isTouched ? 2.5 : 1.5}
                animate={isTouched ? { scale: [1, 1.04, 1] } : { scale: 1 }}
                style={{ transformOrigin: \`\${pos[node.id].x}px \${pos[node.id].y}px\` }}
                transition={{ duration: 0.4 }}
              />
              <text
                x={pos[node.id].x}
                y={pos[node.id].y + 5}
                textAnchor="middle"
                fill="white"
                fontSize={13}
                fontWeight={600}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
`,oe=`import { useEffect, useState } from "react";
import {
  OUTBOX_STEPS,
  SAGA_SCENARIOS,
  TPC_SCENARIOS,
  getSagaSteps,
  getTpcSteps,
  outboxScenario,
  sagaScenario,
  tpcScenario,
  type SagaScenarioId,
  type TpcScenarioId,
  type TxStep,
} from "./transactions";
import { PACKET_LEG_DURATION, TxDiagram } from "./TxDiagram";

const READ_PAUSE_MS = 900;

type Tab = "2pc" | "saga" | "outbox";

const TABS: { id: Tab; label: string }[] = [
  { id: "2pc", label: "2PC" },
  { id: "saga", label: "Saga" },
  { id: "outbox", label: "Transaction Outbox" },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("2pc");
  const [tpcScenarioId, setTpcScenarioId] = useState<TpcScenarioId>("success");
  const [sagaScenarioId, setSagaScenarioId] = useState<SagaScenarioId>("success");

  const scenario = tab === "2pc" ? tpcScenario : tab === "saga" ? sagaScenario : outboxScenario;
  const steps: TxStep[] =
    tab === "2pc" ? getTpcSteps(tpcScenarioId) : tab === "saga" ? getSagaSteps(sagaScenarioId) : OUTBOX_STEPS;

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [tab, tpcScenarioId, sagaScenarioId]);

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const maxUnit = Math.max(0, ...steps[stepIndex].legs.map((l) => l.delayUnits));
    const delay = (maxUnit + 1) * PACKET_LEG_DURATION * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const eventKey = \`\${tab}-\${tpcScenarioId}-\${sagaScenarioId}-\${step.id}\`;

  return (
    <div className="space-y-6">
      <div className="inline-flex flex-wrap rounded-lg border border-slate-700 p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={[
              "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
              t.id === tab ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "2pc" && (
        <div className="flex flex-wrap gap-2">
          {TPC_SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setTpcScenarioId(s.id)}
              className={[
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                s.id === tpcScenarioId
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
              ].join(" ")}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
      {tab === "saga" && (
        <div className="flex flex-wrap gap-2">
          {SAGA_SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSagaScenarioId(s.id)}
              className={[
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                s.id === sagaScenarioId
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
              ].join(" ")}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <TxDiagram nodes={scenario.nodes} pos={scenario.pos} edges={scenario.edges} step={step} eventKey={eventKey} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[4rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
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
`,be={meta:{id:"distributed-transactions",title:"Консенсус: распределённые транзакции",category:"architectural",summary:"2PC (Prepare/Commit, с сценарием сбоя), Saga (локальные транзакции + компенсация вместо отката) и Transaction Outbox (атомарная запись в БД + надёжная публикация в очередь)."},Demo:te,Explanation:se,code:[{filename:"transactions.ts",language:"typescript",source:re},{filename:"TxDiagram.tsx",language:"tsx",source:ie},{filename:"Demo.tsx",language:"tsx",source:oe}]};export{be as default};
