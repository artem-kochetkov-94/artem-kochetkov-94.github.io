/* empty css              */import{_ as e,a as s,b as L}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as N,d as O,e as v}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as f}from"./proxy-BroObIT1.js";const r=n=>Object.fromEntries(n.map(t=>[t.id,"up"])),p=[{id:"client",label:"Client"},{id:"master",label:"Master"},{id:"slave1",label:"Slave"},{id:"slave2",label:"Slave"}],E=[{id:1,label:"Клиент пишет в мастер",legs:[{from:"client",to:"master",kind:"write"}],nodeStates:r(p),description:"Все записи идут только в master — единственная точка правды на запись во всей топологии."},{id:2,label:"Мастер реплицирует на слейвы",legs:[{from:"master",to:"slave1",kind:"replicate"},{from:"master",to:"slave2",kind:"replicate"}],nodeStates:r(p),description:"Slave-узлы подтягивают изменения асинхронно, с задержкой — это и есть replication lag."},{id:3,label:"Клиент читает со слейва",legs:[{from:"client",to:"slave2",kind:"read"}],nodeStates:r(p),description:"Чтение можно развести по слейвам, чтобы разгрузить мастер — ценой риска прочитать не самые свежие данные."},{id:4,label:"Мастер падает",legs:[],nodeStates:{...r(p),master:"down"},description:"Мастер недоступен. Слейвы всё ещё отдают данные на чтение, но писать больше некуда."},{id:5,label:"Запись недоступна — downtime",legs:[],blockedWrite:{from:"client",to:"master"},nodeStates:{...r(p),master:"down"},description:"Любая попытка записи будет падать, пока кто-то не станет новым мастером — это и есть downtime на запись у master-slave."},{id:6,label:"Failover: Slave повышается до мастера",legs:[],nodeStates:{...r(p),master:"down",slave1:"promoted"},description:"Slave1 выбран новым мастером — вручную или автоматически, по кворуму живых узлов. С этого момента он принимает записи (Hot Standby)."},{id:7,label:"Клиент пишет в нового мастера",legs:[{from:"client",to:"slave1",kind:"write"}],nodeStates:{...r(p),master:"down",slave1:"promoted"},description:"Запись снова доступна — но клиенту (или proxy/DNS перед ним) нужно было узнать адрес нового мастера."}],g=[{id:"client",label:"Client"},{id:"master1",label:"Master #1"},{id:"master2",label:"Master #2"}],R=[{id:1,label:"Клиент пишет в Master #1",legs:[{from:"client",to:"master1",kind:"write"}],nodeStates:r(g),description:"Запись пришла в Master #1 — для ключа user_1 значение 500."},{id:2,label:"Master #1 реплицирует на Master #2",legs:[{from:"master1",to:"master2",kind:"replicate"}],nodeStates:r(g),description:"Изменение уезжает на второй мастер — тоже асинхронно."},{id:3,label:"Параллельно клиент пишет в Master #2",legs:[{from:"client",to:"master2",kind:"write"}],nodeStates:r(g),description:"Почти одновременно кто-то записал в Master #2 другое значение для того же ключа user_1 — конфликт."},{id:4,label:"Master #2 реплицирует на Master #1",legs:[{from:"master2",to:"master1",kind:"replicate"}],nodeStates:r(g),description:"Обе версии расходятся по кластеру — у каждого мастера была своя правда."},{id:5,label:"Конфликт разрешается",legs:[],nodeStates:r(g),description:"Кластер выбирает победителя одним из способов: last write wins (по времени), ранг реплики, разрешение на клиенте, либо CRDT — структура данных, которая умеет сливаться сама, без выбора «победителя»."},{id:6,label:"Master #1 падает",legs:[],nodeStates:{...r(g),master1:"down"},description:"В отличие от master-slave, второй мастер как был готов принимать запись, так и остался."},{id:7,label:"Клиент пишет в Master #2 — без downtime",legs:[{from:"client",to:"master2",kind:"write"}],nodeStates:{...r(g),master1:"down"},description:"Downtime на запись не возникает — цена за это уже была заплачена раньше, в виде риска конфликтов."}],b=[{id:"client",label:"Client"},{id:"node1",label:"Node #1"},{id:"node2",label:"Node #2"},{id:"node3",label:"Node #3"}],D=[{id:1,label:"Запись с W = 2: пишем в Node #1 и Node #2",legs:[{from:"client",to:"node1",kind:"write"},{from:"client",to:"node2",kind:"write"}],nodeStates:r(b),description:"W = 2 — клиент ждёт подтверждения от двух узлов из трёх (N = 3). Node #3 запись пока не получил."},{id:2,label:"Чтение с R = 2: читаем с Node #2 и Node #3",legs:[{from:"client",to:"node2",kind:"read"},{from:"client",to:"node3",kind:"read"}],nodeStates:r(b),description:"R = 2 — читаем с двух узлов. Node #2 уже знает новое значение, Node #3 — ещё нет."},{id:3,label:"W + R = 4 > N = 3 — пересечение гарантировано",legs:[],nodeStates:r(b),description:"Сравнив версии двух ответов, клиент берёт свежую — хотя бы один из отвеченных узлов точно видел последнюю запись. Это и есть строгая согласованность через кворум."},{id:4,label:"Тот же пример, но W = 1",legs:[{from:"client",to:"node1",kind:"write"}],nodeStates:r(b),description:"Теперь пишем только в Node #1 — быстрая запись, но более рискованная."},{id:5,label:"Читаем с R = 1: Node #3",legs:[{from:"client",to:"node3",kind:"read"}],nodeStates:r(b),description:"W + R = 2 ≤ N = 3 — пересечение уже не гарантировано. Node #3 мог не получить репликацию — клиент рискует прочитать устаревшее значение."}],w=[{id:"master-slave",label:"Master – Slave",hint:"Один узел пишет, остальные читают. Просто и предсказуемо — но при падении мастера запись встаёт (downtime).",nodes:p,pos:{client:{x:90,y:130},master:{x:330,y:130},slave1:{x:560,y:60},slave2:{x:560,y:200}},edges:[["client","master"],["master","slave1"],["master","slave2"]],steps:E},{id:"master-master",label:"Master – Master",hint:"Пишут несколько узлов сразу. Downtime на запись не грозит — но появляются конфликты, которые нужно разрешать.",nodes:g,pos:{client:{x:90,y:130},master1:{x:400,y:60},master2:{x:400,y:200}},edges:[["client","master1"],["client","master2"],["master1","master2"]],steps:R},{id:"master-less",label:"Master-less",hint:"Нет выделенной роли «мастер» — пишем и читаем сразу в несколько узлов, а гарантии определяет кворум W + R против N.",nodes:b,pos:{client:{x:110,y:130},node1:{x:430,y:50},node2:{x:520,y:130},node3:{x:430,y:210}},edges:[["client","node1"],["client","node2"],["client","node3"]],steps:D}];function W(n){return w.find(t=>t.id===n)}const T=640,I=260,y=130,h=56,S=1.1;function A(n){return{x:n.x-y/2,y:n.y-h/2}}function P({legs:n,pos:t,eventKey:i}){const l=S/2;return e(L,{children:n.map((o,m)=>{const a=t[o.from],d=t[o.to],x=m*S;if(o.kind==="read")return s("g",{children:[e(f.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:a.x,cy:a.y,opacity:0},animate:{cx:[a.x,d.x],cy:[a.y,d.y],opacity:[0,1,1,0]},transition:{duration:l,delay:x,ease:"easeInOut"}}),e(f.circle,{r:6,fill:"rgb(56 189 248)",initial:{cx:d.x,cy:d.y,opacity:0},animate:{cx:[d.x,a.x],cy:[d.y,a.y],opacity:[0,1,1,0]},transition:{duration:l,delay:x+l,ease:"easeInOut"}})]},`${i}-leg-${m}`);const c=o.kind==="replicate"?"rgb(168 85 247)":"rgb(99 102 241)";return e(f.circle,{r:7,fill:c,initial:{cx:a.x,cy:a.y,opacity:0},animate:{cx:[a.x,d.x],cy:[a.y,d.y],opacity:[0,1,1,0]},transition:{duration:S,delay:x,ease:"easeInOut"}},`${i}-leg-${m}`)})})}const $={slate:"rgb(30 41 59)",indigo:"rgb(49 46 129)",rose:"rgb(76 5 25)",emerald:"rgb(6 78 59)"},U={slate:"rgb(71 85 105)",indigo:"rgb(129 140 248)",rose:"rgb(244 63 94)",emerald:"rgb(52 211 153)"};function C(n,t,i){const l=t[n];return l==="down"?"rose":l==="promoted"?"emerald":i.has(n)?"indigo":"slate"}function K({rect:n,title:t,tone:i,down:l,flashKey:o}){return s("g",{children:[e(f.rect,{x:n.x,y:n.y,width:y,height:h,rx:10,fill:$[i],stroke:U[i],strokeWidth:i==="slate"?1.5:2.5,animate:i!=="slate"?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${n.x+y/2}px ${n.y+h/2}px`},transition:{duration:.4}},o),e("text",{x:n.x+y/2,y:n.y+h/2+5,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:t}),l&&e("text",{x:n.x+y-14,y:n.y+18,textAnchor:"middle",fill:"rgb(244 63 94)",fontSize:16,fontWeight:700,children:"✕"})]})}function B({topology:n,step:t}){const i=new Set(t.legs.flatMap(o=>[o.from,o.to])),l=`${n.id}-${t.id}`;return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:s("svg",{viewBox:`0 0 ${T} ${I}`,className:"h-auto w-full",role:"img","aria-label":`Схема топологии ${n.label}`,children:[n.edges.map(([o,m])=>{const a=n.pos[o],d=n.pos[m];return e("line",{x1:a.x,y1:a.y,x2:d.x,y2:d.y,stroke:"rgb(51 65 85)",strokeWidth:2},`edge-${o}-${m}`)}),t.blockedWrite&&s("g",{children:[e("line",{x1:n.pos[t.blockedWrite.from].x,y1:n.pos[t.blockedWrite.from].y,x2:n.pos[t.blockedWrite.to].x,y2:n.pos[t.blockedWrite.to].y,stroke:"rgb(244 63 94)",strokeWidth:2.5,strokeDasharray:"6 5"}),e("text",{x:(n.pos[t.blockedWrite.from].x+n.pos[t.blockedWrite.to].x)/2,y:(n.pos[t.blockedWrite.from].y+n.pos[t.blockedWrite.to].y)/2-10,textAnchor:"middle",fill:"rgb(244 63 94)",fontSize:18,fontWeight:700,children:"✕"})]}),e(P,{legs:t.legs,pos:n.pos,eventKey:l}),n.nodes.map(o=>e(K,{rect:A(n.pos[o.id]),title:o.label,tone:C(o.id,t.nodeStates,i),down:t.nodeStates[o.id]==="down",flashKey:`${l}-${o.id}-${t.nodeStates[o.id]}`},o.id))]})})}const X=1100;function G(){const[n,t]=N("master-slave"),i=O(()=>W(n),[n]),[l,o]=N(0),[m,a]=N(!1),d=l>=i.steps.length-1;v(()=>{o(0),a(!1)},[n]),v(()=>{var u;if(!m)return;if(d){a(!1);return}const c=((u=i.steps[l])==null?void 0:u.legs.length)||1,_=S*c*1e3+X,M=setTimeout(()=>o(k=>k+1),_);return()=>clearTimeout(M)},[m,d,l,i]);const x=i.steps[Math.min(l,i.steps.length-1)];return s("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:w.map(c=>e("button",{onClick:()=>t(c.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",c.id===n?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:c.label},c.id))}),e("p",{className:"text-sm text-slate-400",children:i.hint}),e(B,{topology:i,step:x}),s("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:x.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:x.description})]}),s("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{o(0),a(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{a(!1),o(c=>Math.max(0,c-1))},disabled:l===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>a(c=>!c),disabled:d,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:m?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{a(!1),o(c=>Math.min(i.steps.length-1,c+1))},disabled:d,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),s("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[l+1," / ",i.steps.length]})]}),e("input",{type:"range",min:0,max:i.steps.length-1,value:l,onChange:c=>{a(!1),o(Number(c.target.value))},className:"w-full accent-indigo-500"})]})}function H(){return s("div",{className:"space-y-4 text-slate-300",children:[s("p",{children:[e("strong",{className:"text-white",children:"Репликация"})," — создание клона базы данных, чтобы он мог быстро подхватить функции повреждённой системы. Это не то же самое, что"," ",e("strong",{className:"text-white",children:"бэкап"}),": бэкап — снятая копия для восстановления после потери, репликация — живой, постоянно обновляемый клон."]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Зачем нужна"}),s("p",{className:"mt-2",children:["Две независимые причины: ",e("strong",{className:"text-white",children:"надёжность"})," (если основная база умрёт, есть готовая копия) и"," ",e("strong",{className:"text-white",children:"масштабирование чтения"})," (часть запросов на чтение можно увести на реплики, разгрузив основной узел)."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Master-Slave"}),s("p",{className:"mt-2",children:["Пишем только в мастер, читаем из слейвов или из мастера. При падении мастера — downtime на запись, пока кто-то не станет новым мастером (failover). Slave, который держат готовым к быстрому переключению, называют"," ",e("strong",{className:"text-white",children:"hot standby"}),": он либо асинхронный (мог немного отстать), либо синхронный (гарантированно не отстал)."]}),s("p",{className:"mt-2",children:["Опасный сценарий — ",e("strong",{className:"text-white",children:"split brain"}),": старый мастер «ожил» после failover, и в кластере оказалось два мастера одновременно, каждый со своей версией правды."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Master-Master"}),s("p",{className:"mt-2",children:["Пишем в несколько мастеров сразу — падение одного не создаёт downtime на запись. Плата за это — конфликты, когда два мастера приняли разные значения для одного ключа. Разрешают их одним из способов: ",e("strong",{className:"text-white",children:"LWW"})," (last write wins — побеждает запись с более поздним таймстемпом),"," ",e("strong",{className:"text-white",children:"ранг реплик"})," (у одной реплики приоритет выше), решение на клиенте, либо ",e("strong",{className:"text-white",children:"CRDT"})," (Conflict-free Replicated Data Type — структура данных, которая умеет мержиться сама, без выбора «победителя»)."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Master-less"}),e("p",{className:"mt-2",children:"Нет выделенной роли «мастер» — пишем в W узлов из N, читаем с R узлов из N. Формула решает, гарантирована ли согласованность:"}),s("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[s("li",{children:[e("strong",{className:"text-white",children:"W + R > N"})," — гарантируется строгая согласованность: набор записи и набор чтения обязаны пересечься хотя бы в одном узле."]}),s("li",{children:[e("strong",{className:"text-white",children:"W + R ≤ N"})," — согласованность не гарантируется, чтение может не увидеть последнюю запись."]}),s("li",{children:[e("strong",{className:"text-white",children:"R = 1, W = N"})," — оптимизация под быстрое чтение (читаем с любого узла)."]}),s("li",{children:[e("strong",{className:"text-white",children:"W = 1, R = N"})," — оптимизация под быструю запись."]})]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Итого"}),e("p",{className:"mt-2",children:"Master-Slave — просто и предсказуемо, но с downtime на запись при падении мастера. Master-Master убирает этот downtime ценой конфликтов. Master-less вообще уходит от понятия «мастер» и превращает вопрос согласованности в настройку двух чисел — W и R."})]})]})}const z=`/**
 * Репликация — это не один способ, а выбор: КТО принимает запись и ЧТО
 * происходит, когда этот "кто" падает. Три топологии отвечают на этот
 * вопрос по-разному:
 *  - master-slave — один узел пишет, остальные только читают; при падении
 *    мастера запись недоступна, пока кто-то не станет новым мастером
 *    (downtime на запись).
 *  - master-master — пишут несколько узлов сразу; платим за это
 *    конфликтами (два мастера могли принять разные значения для одного
 *    ключа), но зато при падении одного из них downtime на запись не
 *    возникает — прочие мастера как принимали записи, так и принимают.
 *  - master-less — нет выделенной роли "мастер", пишем/читаем сразу в
 *    несколько узлов и решаем через кворум (W + R против N), гарантирует
 *    ли комбинация строгую согласованность.
 */

export type TopologyId = "master-slave" | "master-master" | "master-less";

export interface ReplicationNode {
  id: string;
  label: string;
}

export type NodeState = "up" | "down" | "promoted";

export type ReplicationLegKind = "write" | "read" | "replicate";

export interface ReplicationLeg {
  from: string;
  to: string;
  kind: ReplicationLegKind;
}

export interface ReplicationStep {
  id: number;
  label: string;
  legs: ReplicationLeg[];
  /** Состояние КАЖДОГО узла на этом шаге (полный снимок, не дельта). */
  nodeStates: Record<string, NodeState>;
  /** Статичная (без анимации) отметка "запись сорвалась" — для downtime-шагов. */
  blockedWrite?: { from: string; to: string };
  description: string;
}

export interface TopologyDef {
  id: TopologyId;
  label: string;
  hint: string;
  nodes: ReplicationNode[];
  pos: Record<string, { x: number; y: number }>;
  edges: [string, string][];
  steps: ReplicationStep[];
}

const ALL_UP = (nodes: ReplicationNode[]): Record<string, NodeState> =>
  Object.fromEntries(nodes.map((n) => [n.id, "up" as NodeState]));

// ---------------------------------------------------------------------------
// Master-Slave
// ---------------------------------------------------------------------------

const MS_NODES: ReplicationNode[] = [
  { id: "client", label: "Client" },
  { id: "master", label: "Master" },
  { id: "slave1", label: "Slave" },
  { id: "slave2", label: "Slave" },
];

const masterSlaveSteps: ReplicationStep[] = [
  {
    id: 1,
    label: "Клиент пишет в мастер",
    legs: [{ from: "client", to: "master", kind: "write" }],
    nodeStates: ALL_UP(MS_NODES),
    description:
      "Все записи идут только в master — единственная точка правды на запись во всей топологии.",
  },
  {
    id: 2,
    label: "Мастер реплицирует на слейвы",
    legs: [
      { from: "master", to: "slave1", kind: "replicate" },
      { from: "master", to: "slave2", kind: "replicate" },
    ],
    nodeStates: ALL_UP(MS_NODES),
    description:
      "Slave-узлы подтягивают изменения асинхронно, с задержкой — это и есть replication lag.",
  },
  {
    id: 3,
    label: "Клиент читает со слейва",
    legs: [{ from: "client", to: "slave2", kind: "read" }],
    nodeStates: ALL_UP(MS_NODES),
    description:
      "Чтение можно развести по слейвам, чтобы разгрузить мастер — ценой риска прочитать не самые свежие данные.",
  },
  {
    id: 4,
    label: "Мастер падает",
    legs: [],
    nodeStates: { ...ALL_UP(MS_NODES), master: "down" },
    description:
      "Мастер недоступен. Слейвы всё ещё отдают данные на чтение, но писать больше некуда.",
  },
  {
    id: 5,
    label: "Запись недоступна — downtime",
    legs: [],
    blockedWrite: { from: "client", to: "master" },
    nodeStates: { ...ALL_UP(MS_NODES), master: "down" },
    description:
      "Любая попытка записи будет падать, пока кто-то не станет новым мастером — это и есть downtime на запись у master-slave.",
  },
  {
    id: 6,
    label: "Failover: Slave повышается до мастера",
    legs: [],
    nodeStates: { ...ALL_UP(MS_NODES), master: "down", slave1: "promoted" },
    description:
      "Slave1 выбран новым мастером — вручную или автоматически, по кворуму живых узлов. С этого момента он принимает записи (Hot Standby).",
  },
  {
    id: 7,
    label: "Клиент пишет в нового мастера",
    legs: [{ from: "client", to: "slave1", kind: "write" }],
    nodeStates: { ...ALL_UP(MS_NODES), master: "down", slave1: "promoted" },
    description:
      "Запись снова доступна — но клиенту (или proxy/DNS перед ним) нужно было узнать адрес нового мастера.",
  },
];

// ---------------------------------------------------------------------------
// Master-Master
// ---------------------------------------------------------------------------

const MM_NODES: ReplicationNode[] = [
  { id: "client", label: "Client" },
  { id: "master1", label: "Master #1" },
  { id: "master2", label: "Master #2" },
];

const masterMasterSteps: ReplicationStep[] = [
  {
    id: 1,
    label: "Клиент пишет в Master #1",
    legs: [{ from: "client", to: "master1", kind: "write" }],
    nodeStates: ALL_UP(MM_NODES),
    description: "Запись пришла в Master #1 — для ключа user_1 значение 500.",
  },
  {
    id: 2,
    label: "Master #1 реплицирует на Master #2",
    legs: [{ from: "master1", to: "master2", kind: "replicate" }],
    nodeStates: ALL_UP(MM_NODES),
    description: "Изменение уезжает на второй мастер — тоже асинхронно.",
  },
  {
    id: 3,
    label: "Параллельно клиент пишет в Master #2",
    legs: [{ from: "client", to: "master2", kind: "write" }],
    nodeStates: ALL_UP(MM_NODES),
    description:
      "Почти одновременно кто-то записал в Master #2 другое значение для того же ключа user_1 — конфликт.",
  },
  {
    id: 4,
    label: "Master #2 реплицирует на Master #1",
    legs: [{ from: "master2", to: "master1", kind: "replicate" }],
    nodeStates: ALL_UP(MM_NODES),
    description: "Обе версии расходятся по кластеру — у каждого мастера была своя правда.",
  },
  {
    id: 5,
    label: "Конфликт разрешается",
    legs: [],
    nodeStates: ALL_UP(MM_NODES),
    description:
      "Кластер выбирает победителя одним из способов: last write wins (по времени), ранг реплики, разрешение на клиенте, либо CRDT — структура данных, которая умеет сливаться сама, без выбора «победителя».",
  },
  {
    id: 6,
    label: "Master #1 падает",
    legs: [],
    nodeStates: { ...ALL_UP(MM_NODES), master1: "down" },
    description:
      "В отличие от master-slave, второй мастер как был готов принимать запись, так и остался.",
  },
  {
    id: 7,
    label: "Клиент пишет в Master #2 — без downtime",
    legs: [{ from: "client", to: "master2", kind: "write" }],
    nodeStates: { ...ALL_UP(MM_NODES), master1: "down" },
    description:
      "Downtime на запись не возникает — цена за это уже была заплачена раньше, в виде риска конфликтов.",
  },
];

// ---------------------------------------------------------------------------
// Master-less
// ---------------------------------------------------------------------------

const ML_NODES: ReplicationNode[] = [
  { id: "client", label: "Client" },
  { id: "node1", label: "Node #1" },
  { id: "node2", label: "Node #2" },
  { id: "node3", label: "Node #3" },
];

const masterLessSteps: ReplicationStep[] = [
  {
    id: 1,
    label: "Запись с W = 2: пишем в Node #1 и Node #2",
    legs: [
      { from: "client", to: "node1", kind: "write" },
      { from: "client", to: "node2", kind: "write" },
    ],
    nodeStates: ALL_UP(ML_NODES),
    description:
      "W = 2 — клиент ждёт подтверждения от двух узлов из трёх (N = 3). Node #3 запись пока не получил.",
  },
  {
    id: 2,
    label: "Чтение с R = 2: читаем с Node #2 и Node #3",
    legs: [
      { from: "client", to: "node2", kind: "read" },
      { from: "client", to: "node3", kind: "read" },
    ],
    nodeStates: ALL_UP(ML_NODES),
    description:
      "R = 2 — читаем с двух узлов. Node #2 уже знает новое значение, Node #3 — ещё нет.",
  },
  {
    id: 3,
    label: "W + R = 4 > N = 3 — пересечение гарантировано",
    legs: [],
    nodeStates: ALL_UP(ML_NODES),
    description:
      "Сравнив версии двух ответов, клиент берёт свежую — хотя бы один из отвеченных узлов точно видел последнюю запись. Это и есть строгая согласованность через кворум.",
  },
  {
    id: 4,
    label: "Тот же пример, но W = 1",
    legs: [{ from: "client", to: "node1", kind: "write" }],
    nodeStates: ALL_UP(ML_NODES),
    description: "Теперь пишем только в Node #1 — быстрая запись, но более рискованная.",
  },
  {
    id: 5,
    label: "Читаем с R = 1: Node #3",
    legs: [{ from: "client", to: "node3", kind: "read" }],
    nodeStates: ALL_UP(ML_NODES),
    description:
      "W + R = 2 ≤ N = 3 — пересечение уже не гарантировано. Node #3 мог не получить репликацию — клиент рискует прочитать устаревшее значение.",
  },
];

export const TOPOLOGIES: TopologyDef[] = [
  {
    id: "master-slave",
    label: "Master – Slave",
    hint: "Один узел пишет, остальные читают. Просто и предсказуемо — но при падении мастера запись встаёт (downtime).",
    nodes: MS_NODES,
    pos: {
      client: { x: 90, y: 130 },
      master: { x: 330, y: 130 },
      slave1: { x: 560, y: 60 },
      slave2: { x: 560, y: 200 },
    },
    edges: [
      ["client", "master"],
      ["master", "slave1"],
      ["master", "slave2"],
    ],
    steps: masterSlaveSteps,
  },
  {
    id: "master-master",
    label: "Master – Master",
    hint: "Пишут несколько узлов сразу. Downtime на запись не грозит — но появляются конфликты, которые нужно разрешать.",
    nodes: MM_NODES,
    pos: {
      client: { x: 90, y: 130 },
      master1: { x: 400, y: 60 },
      master2: { x: 400, y: 200 },
    },
    edges: [
      ["client", "master1"],
      ["client", "master2"],
      ["master1", "master2"],
    ],
    steps: masterMasterSteps,
  },
  {
    id: "master-less",
    label: "Master-less",
    hint: "Нет выделенной роли «мастер» — пишем и читаем сразу в несколько узлов, а гарантии определяет кворум W + R против N.",
    nodes: ML_NODES,
    pos: {
      client: { x: 110, y: 130 },
      node1: { x: 430, y: 50 },
      node2: { x: 520, y: 130 },
      node3: { x: 430, y: 210 },
    },
    edges: [
      ["client", "node1"],
      ["client", "node2"],
      ["client", "node3"],
    ],
    steps: masterLessSteps,
  },
];

export function getTopology(id: TopologyId): TopologyDef {
  return TOPOLOGIES.find((t) => t.id === id)!;
}
`,F=`import { motion } from "framer-motion";
import type {
  NodeState,
  ReplicationLeg,
  ReplicationNode,
  ReplicationStep,
  TopologyDef,
} from "./topologies";

const W = 640;
const H = 260;
const BOX_W = 130;
const BOX_H = 56;

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export const PACKET_LEG_DURATION = 1.1;

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

/**
 * write — клиентская запись, летит вперёд (индиго). read — полноценный
 * обмен запрос/ответ (индиго туда, голубой обратно). replicate — трафик
 * МЕЖДУ базами, а не от клиента, — визуально отличаем фиолетовым, чтобы не
 * путать с клиентским write.
 */
function LegPulses({
  legs,
  pos,
  eventKey,
}: {
  legs: ReplicationLeg[];
  pos: Record<string, { x: number; y: number }>;
  eventKey: string;
}) {
  const half = PACKET_LEG_DURATION / 2;
  return (
    <>
      {legs.map((leg, i) => {
        const a = pos[leg.from];
        const b = pos[leg.to];
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
                transition={{ duration: half, delay: legStart + half, ease: "easeInOut" }}
              />
            </g>
          );
        }

        const fill = leg.kind === "replicate" ? "rgb(168 85 247)" : "rgb(99 102 241)";
        return (
          <motion.circle
            key={\`\${eventKey}-leg-\${i}\`}
            r={7}
            fill={fill}
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{ duration: PACKET_LEG_DURATION, delay: legStart, ease: "easeInOut" }}
          />
        );
      })}
    </>
  );
}

const TONE_FILL: Record<string, string> = {
  slate: "rgb(30 41 59)",
  indigo: "rgb(49 46 129)",
  rose: "rgb(76 5 25)",
  emerald: "rgb(6 78 59)",
};
const TONE_STROKE: Record<string, string> = {
  slate: "rgb(71 85 105)",
  indigo: "rgb(129 140 248)",
  rose: "rgb(244 63 94)",
  emerald: "rgb(52 211 153)",
};

function nodeTone(id: string, states: Record<string, NodeState>, touched: Set<string>) {
  const state = states[id];
  if (state === "down") return "rose";
  if (state === "promoted") return "emerald";
  return touched.has(id) ? "indigo" : "slate";
}

function DiagramNode({
  rect,
  title,
  tone,
  down,
  flashKey,
}: {
  rect: { x: number; y: number };
  title: string;
  tone: keyof typeof TONE_FILL;
  down: boolean;
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
        style={{ transformOrigin: \`\${rect.x + BOX_W / 2}px \${rect.y + BOX_H / 2}px\` }}
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
      {down && (
        <text
          x={rect.x + BOX_W - 14}
          y={rect.y + 18}
          textAnchor="middle"
          fill="rgb(244 63 94)"
          fontSize={16}
          fontWeight={700}
        >
          ✕
        </text>
      )}
    </g>
  );
}

export function ReplicationDiagram({
  topology,
  step,
}: {
  topology: TopologyDef;
  step: ReplicationStep;
}) {
  const touched = new Set(step.legs.flatMap((leg) => [leg.from, leg.to]));
  const eventKey = \`\${topology.id}-\${step.id}\`;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        className="h-auto w-full"
        role="img"
        aria-label={\`Схема топологии \${topology.label}\`}
      >
        {topology.edges.map(([from, to]) => {
          const a = topology.pos[from];
          const b = topology.pos[to];
          return (
            <line
              key={\`edge-\${from}-\${to}\`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgb(51 65 85)"
              strokeWidth={2}
            />
          );
        })}

        {step.blockedWrite && (
          <g>
            <line
              x1={topology.pos[step.blockedWrite.from].x}
              y1={topology.pos[step.blockedWrite.from].y}
              x2={topology.pos[step.blockedWrite.to].x}
              y2={topology.pos[step.blockedWrite.to].y}
              stroke="rgb(244 63 94)"
              strokeWidth={2.5}
              strokeDasharray="6 5"
            />
            <text
              x={(topology.pos[step.blockedWrite.from].x + topology.pos[step.blockedWrite.to].x) / 2}
              y={(topology.pos[step.blockedWrite.from].y + topology.pos[step.blockedWrite.to].y) / 2 - 10}
              textAnchor="middle"
              fill="rgb(244 63 94)"
              fontSize={18}
              fontWeight={700}
            >
              ✕
            </text>
          </g>
        )}

        <LegPulses legs={step.legs} pos={topology.pos} eventKey={eventKey} />

        {topology.nodes.map((node: ReplicationNode) => (
          <DiagramNode
            key={node.id}
            rect={rectAt(topology.pos[node.id])}
            title={node.label}
            tone={nodeTone(node.id, step.nodeStates, touched)}
            down={step.nodeStates[node.id] === "down"}
            flashKey={\`\${eventKey}-\${node.id}-\${step.nodeStates[node.id]}\`}
          />
        ))}
      </svg>
    </div>
  );
}
`,j=`import { useEffect, useMemo, useState } from "react";
import { TOPOLOGIES, getTopology, type TopologyId } from "./topologies";
import { PACKET_LEG_DURATION, ReplicationDiagram } from "./ReplicationDiagram";

const READ_PAUSE_MS = 1100;

export function Demo() {
  const [topologyId, setTopologyId] = useState<TopologyId>("master-slave");
  const topology = useMemo(() => getTopology(topologyId), [topologyId]);

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= topology.steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [topologyId]);

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const legs = topology.steps[stepIndex]?.legs.length || 1;
    const delay = PACKET_LEG_DURATION * legs * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, topology]);

  const step = topology.steps[Math.min(stepIndex, topology.steps.length - 1)];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {TOPOLOGIES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTopologyId(t.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              t.id === topologyId
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-400">{topology.hint}</p>

      <ReplicationDiagram topology={topology} step={step} />

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
            setStepIndex((i) => Math.min(topology.steps.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {topology.steps.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={topology.steps.length - 1}
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
`,Y={meta:{id:"replication-topologies",title:"Репликация: топологии",category:"architectural",summary:"Master-Slave, Master-Master, Master-less — кто пишет, кто читает и что происходит с записью, когда узел падает."},Demo:G,Explanation:H,code:[{filename:"topologies.ts",language:"typescript",source:z},{filename:"ReplicationDiagram.tsx",language:"tsx",source:F},{filename:"Demo.tsx",language:"tsx",source:j}]};export{Y as default};
