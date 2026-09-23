/* empty css              */import{_ as e,a as o,b as w}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m,e as v}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as x}from"./proxy-BroObIT1.js";const C=[{id:"lb",label:"LB"},{id:"agg",label:"Aggregator"},{id:"info",label:"User Info"},{id:"score",label:"User Score"},{id:"history",label:"User History"}],P={hint:"Один сервис параллельно дёргает несколько других и сам склеивает единый ответ клиенту.",nodes:C,pos:{lb:{x:90,y:130},agg:{x:300,y:130},info:{x:540,y:40},score:{x:540,y:130},history:{x:540,y:220}},edges:[["lb","agg"],["agg","info"],["agg","score"],["agg","history"]],steps:[{id:1,label:"Клиент запрашивает агрегированные данные",legs:[{from:"lb",to:"agg",kind:"write",delayUnits:0}],description:"Один запрос — но клиенту не важно, из скольких источников он будет собран."},{id:2,label:"Агрегатор параллельно запрашивает три сервиса",legs:[{from:"agg",to:"info",kind:"request",delayUnits:0},{from:"agg",to:"score",kind:"request",delayUnits:0},{from:"agg",to:"history",kind:"request",delayUnits:0}],description:"Все три запроса летят ОДНОВРЕМЕННО — не по очереди, иначе ответ ждали бы втрое дольше."},{id:3,label:"Каждый сервис отвечает агрегатору",legs:[{from:"info",to:"agg",kind:"response",delayUnits:0},{from:"score",to:"agg",kind:"response",delayUnits:0},{from:"history",to:"agg",kind:"response",delayUnits:0}],description:"Агрегатор ждёт ответа от всех трёх (или таймаутит того, кто не успел)."},{id:4,label:"Агрегатор возвращает единый ответ",legs:[{from:"agg",to:"lb",kind:"response",delayUnits:0}],description:"Клиент получает один цельный объект — и не знает, что за ним стояло три сервиса."}]},q=[{id:"lb",label:"LB"},{id:"orders",label:"Orders"},{id:"ordersDb",label:"DB"},{id:"payments",label:"Payments"},{id:"paymentsDb",label:"DB"}],A={hint:"Сервисы вызывают друг друга последовательно — каждый решает свою часть и передаёт эстафету дальше.",nodes:q,pos:{lb:{x:80,y:130},orders:{x:280,y:130},ordersDb:{x:280,y:220},payments:{x:500,y:130},paymentsDb:{x:500,y:220}},edges:[["lb","orders"],["orders","ordersDb"],["orders","payments"],["payments","paymentsDb"]],steps:[{id:1,label:"Клиент создаёт заказ",legs:[{from:"lb",to:"orders",kind:"write",delayUnits:0}],description:"Запрос попадает в первое звено цепочки — Orders."},{id:2,label:"Orders пишет в свою БД",legs:[{from:"orders",to:"ordersDb",kind:"write",delayUnits:0}],description:"Orders фиксирует у себя факт создания заказа."},{id:3,label:"Orders вызывает Payments",legs:[{from:"orders",to:"payments",kind:"request",delayUnits:0}],description:"Эстафета передаётся следующему звену — Orders не отвечает клиенту, пока не получит результат от Payments."},{id:4,label:"Payments пишет в свою БД",legs:[{from:"payments",to:"paymentsDb",kind:"write",delayUnits:0}],description:"Payments фиксирует у себя факт списания."},{id:5,label:"Ответ идёт обратно по цепочке",legs:[{from:"payments",to:"orders",kind:"response",delayUnits:0},{from:"orders",to:"lb",kind:"response",delayUnits:1}],description:"Payments отвечает Orders, а тот — клиенту. Вся цепочка синхронна: каждое звено ждёт ответа следующего."}]},R=[{id:"client",label:"Client"},{id:"orders",label:"Orders"},{id:"queue",label:"Queue"},{id:"cafe",label:"Cafe"},{id:"delivery",label:"Delivery"}],I={client:{x:70,y:50},orders:{x:230,y:130},queue:{x:400,y:130},cafe:{x:560,y:60},delivery:{x:560,y:200}},$=[["client","orders"],["orders","queue"],["queue","cafe"],["cafe","delivery"],["delivery","queue"]],S=[{id:"notification",label:"Event Notification",hint:"Сервисы уведомляют друг друга о ФАКТЕ события, но не передают данные — за деталями получатель идёт к источнику сам."},{id:"state-transfer",label:"State Transfer",hint:"Событие несёт с собой ДАННЫЕ — получателю не нужно ничего дополнительно спрашивать у источника."},{id:"collaboration",label:"Event Collaboration",hint:"Нет центрального дирижёра — каждый сервис сам решает, на какие события реагировать и что публиковать дальше."}],D=[{id:1,label:"Клиент создаёт заказ",legs:[{from:"client",to:"orders",kind:"write",delayUnits:0}],description:"Orders принимает запрос."},{id:2,label:"Orders публикует событие и СРАЗУ отпускает клиента",legs:[{from:"orders",to:"queue",kind:"write",delayUnits:0}],description:"Клиент уже получил ответ («заказ принят») — дальше всё происходит асинхронно, клиент об этом не знает и не ждёт."},{id:3,label:"Очередь доставляет событие в Cafe",legs:[{from:"queue",to:"cafe",kind:"response",delayUnits:0}],description:"Cafe узнаёт лишь ФАКТ «заказ создан» — самих деталей заказа в событии нет."},{id:4,label:"Cafe вызывает Delivery напрямую",legs:[{from:"cafe",to:"delivery",kind:"request",delayUnits:0}],description:"Раз событие не принесло нужных данных, Cafe вынуждена сходить за ними сама — прямым вызовом."}],L=[{id:1,label:"Клиент создаёт заказ",legs:[{from:"client",to:"orders",kind:"write",delayUnits:0}],description:"Orders принимает запрос."},{id:2,label:"Orders публикует событие С ДАННЫМИ и отпускает клиента",legs:[{from:"orders",to:"queue",kind:"write",delayUnits:0}],description:"В отличие от Event Notification, событие несёт с собой сами данные заказа."},{id:3,label:"Очередь доставляет событие с данными в Cafe",legs:[{from:"queue",to:"cafe",kind:"response",delayUnits:0}],description:"Cafe сразу получает всё необходимое — ходить за деталями отдельно не нужно."},{id:4,label:"Cafe публикует СВОИ данные обратно в очередь",legs:[{from:"cafe",to:"queue",kind:"write",delayUnits:0}],description:"Теперь Delivery сможет забрать нужные данные из очереди сам, не дёргая Cafe напрямую."},{id:5,label:"Delivery читает данные из очереди",legs:[{from:"delivery",to:"queue",kind:"read",delayUnits:0}],description:"Прямых вызовов между сервисами нет вообще — только чтение из общего потока событий."}],V=[{id:1,label:"Orders публикует Order Requested",legs:[{from:"orders",to:"queue",kind:"write",delayUnits:0}],description:"Orders не знает и не решает, что будет дальше — просто сообщает о своём событии."},{id:2,label:"Cafe слушает шину и реагирует",legs:[{from:"queue",to:"cafe",kind:"response",delayUnits:0}],description:"Cafe сама подписалась на это событие и сама решает, что с ним делать."},{id:3,label:"Cafe публикует Order Prepared",legs:[{from:"cafe",to:"queue",kind:"write",delayUnits:0}],description:"Cafe публикует своё событие — снова не зная и не заботясь, кто на него подпишется."},{id:4,label:"Delivery слушает шину и подхватывает заказ",legs:[{from:"queue",to:"delivery",kind:"response",delayUnits:0}],description:"Никто не дирижирует процессом централизованно — в этом ключевое отличие от Event Notification и State Transfer, где Orders явно инициирует каждый следующий шаг."}];function B(i){switch(i){case"notification":return D;case"state-transfer":return L;case"collaboration":return V}}const K={hint:"Сервисы не вызывают друг друга напрямую, а обмениваются событиями через общую шину/очередь.",nodes:R,pos:I,edges:$,steps:D},G=[{id:"client",label:"Client"},{id:"proxy",label:"Proxy"},{id:"queue",label:"Queue"},{id:"uploader",label:"Video Uploader"}],F={client:{x:80,y:130},proxy:{x:280,y:130},queue:{x:480,y:210},uploader:{x:560,y:60}},N=[{id:"sync",label:"Синхронно",hint:"Клиент держит соединение открытым, пока Video Uploader полностью не обработает файл."},{id:"async",label:"Через очередь",hint:"Proxy сразу отпускает клиента, задача обрабатывается в фоне — когда Video Uploader освободится."}],U=[{id:1,label:"Клиент → Proxy → Video Uploader",legs:[{from:"client",to:"proxy",kind:"write",delayUnits:0},{from:"proxy",to:"uploader",kind:"request",delayUnits:1}],description:"Запрос идёт напрямую до конечного обработчика."},{id:2,label:"Клиент ждёт, пока видео полностью обработается",legs:[{from:"uploader",to:"proxy",kind:"response",delayUnits:0},{from:"proxy",to:"client",kind:"response",delayUnits:1}],description:"Соединение держится открытым всё время обработки — долго, а обрыв связи на середине означает потерянную работу."}],H=[{id:1,label:"Клиент → Proxy",legs:[{from:"client",to:"proxy",kind:"write",delayUnits:0}],description:"Proxy принимает запрос на загрузку."},{id:2,label:"Proxy кладёт задачу в очередь и сразу отвечает клиенту",legs:[{from:"proxy",to:"queue",kind:"write",delayUnits:0},{from:"proxy",to:"client",kind:"response",delayUnits:1}],description:"Клиент отпущен почти мгновенно — ему не нужно ждать реальной обработки видео."},{id:3,label:"Video Uploader сам забирает задачу, когда освобождается",legs:[{from:"uploader",to:"queue",kind:"read",delayUnits:0}],description:"Если Video Uploader упадёт, задача останется в очереди и будет обработана позже, когда он восстановится — работа не теряется."}];function W(i){return i==="sync"?U:H}const X={hint:"Синхронный вызов превращается в постановку в очередь, чтобы не держать клиента во время долгой обработки.",nodes:G,pos:F,edges:[["client","proxy"],["proxy","uploader"],["proxy","queue"],["uploader","queue"]],steps:U},Y=640,j=260,k=120,O=52,u=1;function Q(i){return{x:i.x-k/2,y:i.y-O/2}}function z({legs:i,pos:d,eventKey:l}){const c=u/2;return e(w,{children:i.map((a,g)=>{const n=d[a.from],r=d[a.to],s=a.delayUnits*u;if(a.kind==="read")return o("g",{children:[e(x.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:n.x,cy:n.y,opacity:0},animate:{cx:[n.x,r.x],cy:[n.y,r.y],opacity:[0,1,1,0]},transition:{duration:c,delay:s,ease:"easeInOut"}}),e(x.circle,{r:6,fill:"rgb(56 189 248)",initial:{cx:r.x,cy:r.y,opacity:0},animate:{cx:[r.x,n.x],cy:[r.y,n.y],opacity:[0,1,1,0]},transition:{duration:c,delay:s+c,ease:"easeInOut"}})]},`${l}-leg-${g}`);const p=a.kind==="response"?"rgb(56 189 248)":"rgb(99 102 241)";return e(x.circle,{r:7,fill:p,initial:{cx:n.x,cy:n.y,opacity:0},animate:{cx:[n.x,r.x],cy:[n.y,r.y],opacity:[0,1,1,0]},transition:{duration:u,delay:s,ease:"easeInOut"}},`${l}-leg-${g}`)})})}function J({nodes:i,pos:d,edges:l,step:c,eventKey:a}){const g=new Set(c.legs.flatMap(n=>[n.from,n.to]));return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:o("svg",{viewBox:`0 0 ${Y} ${j}`,className:"h-auto w-full",role:"img","aria-label":"Схема взаимодействия сервисов",children:[l.map(([n,r])=>e("line",{x1:d[n].x,y1:d[n].y,x2:d[r].x,y2:d[r].y,stroke:"rgb(51 65 85)",strokeWidth:2},`edge-${n}-${r}`)),e(z,{legs:c.legs,pos:d,eventKey:a}),i.map(n=>{const r=Q(d[n.id]),s=g.has(n.id);return o("g",{children:[e(x.rect,{x:r.x,y:r.y,width:k,height:O,rx:10,fill:s?"rgb(49 46 129)":"rgb(30 41 59)",stroke:s?"rgb(129 140 248)":"rgb(71 85 105)",strokeWidth:s?2.5:1.5,animate:s?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${d[n.id].x}px ${d[n.id].y}px`},transition:{duration:.4}},`${a}-${n.id}`),e("text",{x:d[n.id].x,y:d[n.id].y+5,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:n.label})]},n.id)})]})})}const Z=900,ee=[{id:"aggregator",label:"Агрегатор"},{id:"chain",label:"Цепочка"},{id:"event-driven",label:"Событийно-ориентированная"},{id:"deferred",label:"Отложенное выполнение задач"}];function ne(){const[i,d]=m("aggregator"),[l,c]=m("notification"),[a,g]=m("sync"),n=i==="aggregator"?P:i==="chain"?A:i==="event-driven"?K:X,r=i==="event-driven"?B(l):i==="deferred"?W(a):n.steps,[s,p]=m(0),[h,y]=m(!1),b=s>=r.length-1;v(()=>{p(0),y(!1)},[i,l,a]),v(()=>{if(!h)return;if(b){y(!1);return}const _=(Math.max(0,...r[s].legs.map(E=>E.delayUnits))+1)*u*1e3+Z,M=setTimeout(()=>p(E=>E+1),_);return()=>clearTimeout(M)},[h,b,s,r]);const f=r[Math.min(s,r.length-1)],T=`${i}-${l}-${a}-${f.id}`;return o("div",{className:"space-y-6",children:[e("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:ee.map(t=>e("button",{onClick:()=>d(t.id),className:["rounded-md px-3 py-1.5 text-sm font-medium transition-colors",t.id===i?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:t.label},t.id))}),i==="event-driven"&&e("div",{className:"flex flex-wrap gap-2",children:S.map(t=>e("button",{onClick:()=>c(t.id),className:["rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",t.id===l?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:t.label},t.id))}),i==="deferred"&&e("div",{className:"flex flex-wrap gap-2",children:N.map(t=>e("button",{onClick:()=>g(t.id),className:["rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",t.id===a?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:t.label},t.id))}),e("p",{className:"text-sm text-slate-400",children:i==="event-driven"?S.find(t=>t.id===l).hint:i==="deferred"?N.find(t=>t.id===a).hint:n.hint}),e(J,{nodes:n.nodes,pos:n.pos,edges:n.edges,step:f,eventKey:T}),o("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:f.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:f.description})]}),o("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{p(0),y(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{y(!1),p(t=>Math.max(0,t-1))},disabled:s===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>y(t=>!t),disabled:b,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:h?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{y(!1),p(t=>Math.min(r.length-1,t+1))},disabled:b,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),o("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[s+1," / ",r.length]})]}),e("input",{type:"range",min:0,max:r.length-1,value:s,onChange:t=>{y(!1),p(Number(t.target.value))},className:"w-full accent-indigo-500"})]})}function te(){return o("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:"Когда для одного ответа клиенту нужно опросить несколько сервисов, есть несколько способов это организовать — они по-разному распределяют, кто кого вызывает и кто несёт ответственность за итоговый результат."}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Агрегатор"}),e("p",{className:"mt-2",children:"Один сервис параллельно опрашивает несколько других и сам склеивает единый ответ. Клиент не знает, что за одним запросом стояло несколько внутренних вызовов. Ключевое — запросы идут ПАРАЛЛЕЛЬНО, иначе выгоды от агрегации почти нет."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Цепочка"}),e("p",{className:"mt-2",children:"Сервисы вызывают друг друга последовательно, каждый решает свою часть задачи и передаёт эстафету дальше. Просто и предсказуемо, но синхронно: если одно звено медленное или упало, вся цепочка ждёт или падает вместе с ним."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Событийно-ориентированная архитектура"}),e("p",{className:"mt-2",children:"Сервисы не вызывают друг друга напрямую, а публикуют события в общую шину/очередь. Общая идея — обработать запрос, отпустить клиента и уже ПОСЛЕ ЭТОГО разобраться с событиями. Три разновидности отличаются тем, что именно летит в событии и кто дирижирует процессом:"}),o("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[o("li",{children:[e("strong",{className:"text-white",children:"Event Notification"})," — событие несёт только факт («что-то произошло»), без данных. Получателю, которому нужны детали, приходится идти за ними к источнику отдельным вызовом."]}),o("li",{children:[e("strong",{className:"text-white",children:"State Transfer"})," — событие несёт с собой данные. Прямых вызовов между сервисами больше не нужно — все читают то, что им нужно, прямо из потока событий."]}),o("li",{children:[e("strong",{className:"text-white",children:"Event Collaboration"})," — никто не дирижирует централизованно: каждый сервис сам решает, на какие события подписаться и что опубликовать в ответ. Итоговый процесс складывается из цепочки независимых реакций, а не из явного сценария в одном месте."]})]})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Отложенное выполнение задач"}),e("p",{className:"mt-2",children:"Частный, но очень частый случай: долгую операцию (обработка видео, генерация отчёта) не обязательно делать в рамках того же HTTP-запроса. Задача кладётся в очередь, клиент получает ответ почти мгновенно, а сама обработка идёт в фоне — воркер заберёт задачу, когда освободится, и переживёт свой собственный рестарт, не потеряв работу."})]})]})}const re=`/**
 * Четыре способа организовать общение между сервисами, когда одного
 * запроса клиента недостаточно — ответ собирается из нескольких мест:
 *  - Агрегатор — один сервис дёргает несколько других ПАРАЛЛЕЛЬНО и сам
 *    склеивает ответ;
 *  - Цепочка — сервисы вызывают друг друга ПОСЛЕДОВАТЕЛЬНО, каждый решает
 *    свою часть и передаёт эстафету дальше;
 *  - Событийно-ориентированная — сервисы не вызывают друг друга напрямую,
 *    а обмениваются событиями через шину/очередь (три разновидности: кто
 *    и что публикует — от «просто уведомил» до «сам решаю, что делать»);
 *  - Отложенное выполнение задач — синхронный вызов превращается в
 *    постановку в очередь, чтобы не держать клиента, пока идёт долгая
 *    обработка.
 */

export interface MsNode {
  id: string;
  label: string;
}

export type MsLegKind = "write" | "read" | "request" | "response";

export interface MsLeg {
  from: string;
  to: string;
  kind: MsLegKind;
  /** В каких "юнитах" (длительностях перегона) стартует импульс — 0 = сразу, вместе с другими. */
  delayUnits: number;
}

export interface MsStep {
  id: number;
  label: string;
  legs: MsLeg[];
  description: string;
}

export interface MsScenario {
  id: string;
  label: string;
  hint: string;
  nodes: MsNode[];
  pos: Record<string, { x: number; y: number }>;
  edges: [string, string][];
  steps: MsStep[];
}

// ---------------------------------------------------------------------------
// Агрегатор
// ---------------------------------------------------------------------------

const AGGREGATOR_NODES: MsNode[] = [
  { id: "lb", label: "LB" },
  { id: "agg", label: "Aggregator" },
  { id: "info", label: "User Info" },
  { id: "score", label: "User Score" },
  { id: "history", label: "User History" },
];

export const aggregatorScenario: MsScenario = {
  id: "aggregator",
  label: "Агрегатор",
  hint: "Один сервис параллельно дёргает несколько других и сам склеивает единый ответ клиенту.",
  nodes: AGGREGATOR_NODES,
  pos: {
    lb: { x: 90, y: 130 },
    agg: { x: 300, y: 130 },
    info: { x: 540, y: 40 },
    score: { x: 540, y: 130 },
    history: { x: 540, y: 220 },
  },
  edges: [
    ["lb", "agg"],
    ["agg", "info"],
    ["agg", "score"],
    ["agg", "history"],
  ],
  steps: [
    {
      id: 1,
      label: "Клиент запрашивает агрегированные данные",
      legs: [{ from: "lb", to: "agg", kind: "write", delayUnits: 0 }],
      description: "Один запрос — но клиенту не важно, из скольких источников он будет собран.",
    },
    {
      id: 2,
      label: "Агрегатор параллельно запрашивает три сервиса",
      legs: [
        { from: "agg", to: "info", kind: "request", delayUnits: 0 },
        { from: "agg", to: "score", kind: "request", delayUnits: 0 },
        { from: "agg", to: "history", kind: "request", delayUnits: 0 },
      ],
      description: "Все три запроса летят ОДНОВРЕМЕННО — не по очереди, иначе ответ ждали бы втрое дольше.",
    },
    {
      id: 3,
      label: "Каждый сервис отвечает агрегатору",
      legs: [
        { from: "info", to: "agg", kind: "response", delayUnits: 0 },
        { from: "score", to: "agg", kind: "response", delayUnits: 0 },
        { from: "history", to: "agg", kind: "response", delayUnits: 0 },
      ],
      description: "Агрегатор ждёт ответа от всех трёх (или таймаутит того, кто не успел).",
    },
    {
      id: 4,
      label: "Агрегатор возвращает единый ответ",
      legs: [{ from: "agg", to: "lb", kind: "response", delayUnits: 0 }],
      description: "Клиент получает один цельный объект — и не знает, что за ним стояло три сервиса.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Цепочка
// ---------------------------------------------------------------------------

const CHAIN_NODES: MsNode[] = [
  { id: "lb", label: "LB" },
  { id: "orders", label: "Orders" },
  { id: "ordersDb", label: "DB" },
  { id: "payments", label: "Payments" },
  { id: "paymentsDb", label: "DB" },
];

export const chainScenario: MsScenario = {
  id: "chain",
  label: "Цепочка",
  hint: "Сервисы вызывают друг друга последовательно — каждый решает свою часть и передаёт эстафету дальше.",
  nodes: CHAIN_NODES,
  pos: {
    lb: { x: 80, y: 130 },
    orders: { x: 280, y: 130 },
    ordersDb: { x: 280, y: 220 },
    payments: { x: 500, y: 130 },
    paymentsDb: { x: 500, y: 220 },
  },
  edges: [
    ["lb", "orders"],
    ["orders", "ordersDb"],
    ["orders", "payments"],
    ["payments", "paymentsDb"],
  ],
  steps: [
    {
      id: 1,
      label: "Клиент создаёт заказ",
      legs: [{ from: "lb", to: "orders", kind: "write", delayUnits: 0 }],
      description: "Запрос попадает в первое звено цепочки — Orders.",
    },
    {
      id: 2,
      label: "Orders пишет в свою БД",
      legs: [{ from: "orders", to: "ordersDb", kind: "write", delayUnits: 0 }],
      description: "Orders фиксирует у себя факт создания заказа.",
    },
    {
      id: 3,
      label: "Orders вызывает Payments",
      legs: [{ from: "orders", to: "payments", kind: "request", delayUnits: 0 }],
      description: "Эстафета передаётся следующему звену — Orders не отвечает клиенту, пока не получит результат от Payments.",
    },
    {
      id: 4,
      label: "Payments пишет в свою БД",
      legs: [{ from: "payments", to: "paymentsDb", kind: "write", delayUnits: 0 }],
      description: "Payments фиксирует у себя факт списания.",
    },
    {
      id: 5,
      label: "Ответ идёт обратно по цепочке",
      legs: [
        { from: "payments", to: "orders", kind: "response", delayUnits: 0 },
        { from: "orders", to: "lb", kind: "response", delayUnits: 1 },
      ],
      description: "Payments отвечает Orders, а тот — клиенту. Вся цепочка синхронна: каждое звено ждёт ответа следующего.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Событийно-ориентированная (3 разновидности)
// ---------------------------------------------------------------------------

const EVENT_NODES: MsNode[] = [
  { id: "client", label: "Client" },
  { id: "orders", label: "Orders" },
  { id: "queue", label: "Queue" },
  { id: "cafe", label: "Cafe" },
  { id: "delivery", label: "Delivery" },
];
const EVENT_POS: Record<string, { x: number; y: number }> = {
  client: { x: 70, y: 50 },
  orders: { x: 230, y: 130 },
  queue: { x: 400, y: 130 },
  cafe: { x: 560, y: 60 },
  delivery: { x: 560, y: 200 },
};
const EVENT_EDGES: [string, string][] = [
  ["client", "orders"],
  ["orders", "queue"],
  ["queue", "cafe"],
  ["cafe", "delivery"],
  ["delivery", "queue"],
];

export type EventDrivenMode = "notification" | "state-transfer" | "collaboration";

export const EVENT_MODES: { id: EventDrivenMode; label: string; hint: string }[] = [
  {
    id: "notification",
    label: "Event Notification",
    hint: "Сервисы уведомляют друг друга о ФАКТЕ события, но не передают данные — за деталями получатель идёт к источнику сам.",
  },
  {
    id: "state-transfer",
    label: "State Transfer",
    hint: "Событие несёт с собой ДАННЫЕ — получателю не нужно ничего дополнительно спрашивать у источника.",
  },
  {
    id: "collaboration",
    label: "Event Collaboration",
    hint: "Нет центрального дирижёра — каждый сервис сам решает, на какие события реагировать и что публиковать дальше.",
  },
];

const NOTIFICATION_STEPS: MsStep[] = [
  {
    id: 1,
    label: "Клиент создаёт заказ",
    legs: [{ from: "client", to: "orders", kind: "write", delayUnits: 0 }],
    description: "Orders принимает запрос.",
  },
  {
    id: 2,
    label: "Orders публикует событие и СРАЗУ отпускает клиента",
    legs: [{ from: "orders", to: "queue", kind: "write", delayUnits: 0 }],
    description:
      "Клиент уже получил ответ («заказ принят») — дальше всё происходит асинхронно, клиент об этом не знает и не ждёт.",
  },
  {
    id: 3,
    label: "Очередь доставляет событие в Cafe",
    legs: [{ from: "queue", to: "cafe", kind: "response", delayUnits: 0 }],
    description: "Cafe узнаёт лишь ФАКТ «заказ создан» — самих деталей заказа в событии нет.",
  },
  {
    id: 4,
    label: "Cafe вызывает Delivery напрямую",
    legs: [{ from: "cafe", to: "delivery", kind: "request", delayUnits: 0 }],
    description: "Раз событие не принесло нужных данных, Cafe вынуждена сходить за ними сама — прямым вызовом.",
  },
];

const STATE_TRANSFER_STEPS: MsStep[] = [
  {
    id: 1,
    label: "Клиент создаёт заказ",
    legs: [{ from: "client", to: "orders", kind: "write", delayUnits: 0 }],
    description: "Orders принимает запрос.",
  },
  {
    id: 2,
    label: "Orders публикует событие С ДАННЫМИ и отпускает клиента",
    legs: [{ from: "orders", to: "queue", kind: "write", delayUnits: 0 }],
    description: "В отличие от Event Notification, событие несёт с собой сами данные заказа.",
  },
  {
    id: 3,
    label: "Очередь доставляет событие с данными в Cafe",
    legs: [{ from: "queue", to: "cafe", kind: "response", delayUnits: 0 }],
    description: "Cafe сразу получает всё необходимое — ходить за деталями отдельно не нужно.",
  },
  {
    id: 4,
    label: "Cafe публикует СВОИ данные обратно в очередь",
    legs: [{ from: "cafe", to: "queue", kind: "write", delayUnits: 0 }],
    description: "Теперь Delivery сможет забрать нужные данные из очереди сам, не дёргая Cafe напрямую.",
  },
  {
    id: 5,
    label: "Delivery читает данные из очереди",
    legs: [{ from: "delivery", to: "queue", kind: "read", delayUnits: 0 }],
    description: "Прямых вызовов между сервисами нет вообще — только чтение из общего потока событий.",
  },
];

const COLLABORATION_STEPS: MsStep[] = [
  {
    id: 1,
    label: "Orders публикует Order Requested",
    legs: [{ from: "orders", to: "queue", kind: "write", delayUnits: 0 }],
    description: "Orders не знает и не решает, что будет дальше — просто сообщает о своём событии.",
  },
  {
    id: 2,
    label: "Cafe слушает шину и реагирует",
    legs: [{ from: "queue", to: "cafe", kind: "response", delayUnits: 0 }],
    description: "Cafe сама подписалась на это событие и сама решает, что с ним делать.",
  },
  {
    id: 3,
    label: "Cafe публикует Order Prepared",
    legs: [{ from: "cafe", to: "queue", kind: "write", delayUnits: 0 }],
    description: "Cafe публикует своё событие — снова не зная и не заботясь, кто на него подпишется.",
  },
  {
    id: 4,
    label: "Delivery слушает шину и подхватывает заказ",
    legs: [{ from: "queue", to: "delivery", kind: "response", delayUnits: 0 }],
    description:
      "Никто не дирижирует процессом централизованно — в этом ключевое отличие от Event Notification и State Transfer, где Orders явно инициирует каждый следующий шаг.",
  },
];

export function getEventSteps(mode: EventDrivenMode): MsStep[] {
  switch (mode) {
    case "notification":
      return NOTIFICATION_STEPS;
    case "state-transfer":
      return STATE_TRANSFER_STEPS;
    case "collaboration":
      return COLLABORATION_STEPS;
  }
}

export const eventDrivenScenario: MsScenario = {
  id: "event-driven",
  label: "Событийно-ориентированная",
  hint: "Сервисы не вызывают друг друга напрямую, а обмениваются событиями через общую шину/очередь.",
  nodes: EVENT_NODES,
  pos: EVENT_POS,
  edges: EVENT_EDGES,
  steps: NOTIFICATION_STEPS,
};

// ---------------------------------------------------------------------------
// Отложенное выполнение задач
// ---------------------------------------------------------------------------

const DEFERRED_NODES: MsNode[] = [
  { id: "client", label: "Client" },
  { id: "proxy", label: "Proxy" },
  { id: "queue", label: "Queue" },
  { id: "uploader", label: "Video Uploader" },
];
const DEFERRED_POS: Record<string, { x: number; y: number }> = {
  client: { x: 80, y: 130 },
  proxy: { x: 280, y: 130 },
  queue: { x: 480, y: 210 },
  uploader: { x: 560, y: 60 },
};

export type DeferredMode = "sync" | "async";

export const DEFERRED_MODES: { id: DeferredMode; label: string; hint: string }[] = [
  {
    id: "sync",
    label: "Синхронно",
    hint: "Клиент держит соединение открытым, пока Video Uploader полностью не обработает файл.",
  },
  {
    id: "async",
    label: "Через очередь",
    hint: "Proxy сразу отпускает клиента, задача обрабатывается в фоне — когда Video Uploader освободится.",
  },
];

const SYNC_STEPS: MsStep[] = [
  {
    id: 1,
    label: "Клиент → Proxy → Video Uploader",
    legs: [
      { from: "client", to: "proxy", kind: "write", delayUnits: 0 },
      { from: "proxy", to: "uploader", kind: "request", delayUnits: 1 },
    ],
    description: "Запрос идёт напрямую до конечного обработчика.",
  },
  {
    id: 2,
    label: "Клиент ждёт, пока видео полностью обработается",
    legs: [
      { from: "uploader", to: "proxy", kind: "response", delayUnits: 0 },
      { from: "proxy", to: "client", kind: "response", delayUnits: 1 },
    ],
    description:
      "Соединение держится открытым всё время обработки — долго, а обрыв связи на середине означает потерянную работу.",
  },
];

const ASYNC_STEPS: MsStep[] = [
  {
    id: 1,
    label: "Клиент → Proxy",
    legs: [{ from: "client", to: "proxy", kind: "write", delayUnits: 0 }],
    description: "Proxy принимает запрос на загрузку.",
  },
  {
    id: 2,
    label: "Proxy кладёт задачу в очередь и сразу отвечает клиенту",
    legs: [
      { from: "proxy", to: "queue", kind: "write", delayUnits: 0 },
      { from: "proxy", to: "client", kind: "response", delayUnits: 1 },
    ],
    description: "Клиент отпущен почти мгновенно — ему не нужно ждать реальной обработки видео.",
  },
  {
    id: 3,
    label: "Video Uploader сам забирает задачу, когда освобождается",
    legs: [{ from: "uploader", to: "queue", kind: "read", delayUnits: 0 }],
    description:
      "Если Video Uploader упадёт, задача останется в очереди и будет обработана позже, когда он восстановится — работа не теряется.",
  },
];

export function getDeferredSteps(mode: DeferredMode): MsStep[] {
  return mode === "sync" ? SYNC_STEPS : ASYNC_STEPS;
}

export const deferredScenario: MsScenario = {
  id: "deferred",
  label: "Отложенное выполнение задач",
  hint: "Синхронный вызов превращается в постановку в очередь, чтобы не держать клиента во время долгой обработки.",
  nodes: DEFERRED_NODES,
  pos: DEFERRED_POS,
  edges: [
    ["client", "proxy"],
    ["proxy", "uploader"],
    ["proxy", "queue"],
    ["uploader", "queue"],
  ],
  steps: SYNC_STEPS,
};
`,ie=`import { motion } from "framer-motion";
import type { MsLeg, MsNode, MsStep } from "./microservices";

const W = 640;
const H = 260;
const BOX_W = 120;
const BOX_H = 52;

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export const PACKET_LEG_DURATION = 1;

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

/**
 * write/request — индиго, вперёд. read — полноценный обмен (индиго туда,
 * голубой обратно). response — голубой, в СВОЁМ направлении (доставка
 * данных без сопутствующего запроса в этом же перегоне).
 * delayUnits — не индекс в массиве, а явный номер "такта": легов с
 * одинаковым delayUnits летят ОДНОВРЕМЕННО (нужно для параллельных
 * вызовов агрегатора).
 */
function LegPulses({
  legs,
  pos,
  eventKey,
}: {
  legs: MsLeg[];
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

        const fill = leg.kind === "response" ? "rgb(56 189 248)" : "rgb(99 102 241)";
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

export function MsDiagram({
  nodes,
  pos,
  edges,
  step,
  eventKey,
}: {
  nodes: MsNode[];
  pos: Record<string, { x: number; y: number }>;
  edges: [string, string][];
  step: MsStep;
  eventKey: string;
}) {
  const touched = new Set(step.legs.flatMap((leg) => [leg.from, leg.to]));

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Схема взаимодействия сервисов">
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
          const rect = rectAt(pos[node.id]);
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
`,se=`import { useEffect, useState } from "react";
import {
  DEFERRED_MODES,
  EVENT_MODES,
  aggregatorScenario,
  chainScenario,
  deferredScenario,
  eventDrivenScenario,
  getDeferredSteps,
  getEventSteps,
  type DeferredMode,
  type EventDrivenMode,
  type MsStep,
} from "./microservices";
import { MsDiagram, PACKET_LEG_DURATION } from "./MsDiagram";

const READ_PAUSE_MS = 900;

type Tab = "aggregator" | "chain" | "event-driven" | "deferred";

const TABS: { id: Tab; label: string }[] = [
  { id: "aggregator", label: "Агрегатор" },
  { id: "chain", label: "Цепочка" },
  { id: "event-driven", label: "Событийно-ориентированная" },
  { id: "deferred", label: "Отложенное выполнение задач" },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("aggregator");
  const [eventMode, setEventMode] = useState<EventDrivenMode>("notification");
  const [deferredMode, setDeferredMode] = useState<DeferredMode>("sync");

  const scenario =
    tab === "aggregator"
      ? aggregatorScenario
      : tab === "chain"
        ? chainScenario
        : tab === "event-driven"
          ? eventDrivenScenario
          : deferredScenario;

  const steps: MsStep[] =
    tab === "event-driven"
      ? getEventSteps(eventMode)
      : tab === "deferred"
        ? getDeferredSteps(deferredMode)
        : scenario.steps;

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [tab, eventMode, deferredMode]);

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
  const eventKey = \`\${tab}-\${eventMode}-\${deferredMode}-\${step.id}\`;

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

      {tab === "event-driven" && (
        <div className="flex flex-wrap gap-2">
          {EVENT_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setEventMode(m.id)}
              className={[
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                m.id === eventMode
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
              ].join(" ")}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
      {tab === "deferred" && (
        <div className="flex flex-wrap gap-2">
          {DEFERRED_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setDeferredMode(m.id)}
              className={[
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                m.id === deferredMode
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
              ].join(" ")}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}

      <p className="text-sm text-slate-400">
        {tab === "event-driven"
          ? EVENT_MODES.find((m) => m.id === eventMode)!.hint
          : tab === "deferred"
            ? DEFERRED_MODES.find((m) => m.id === deferredMode)!.hint
            : scenario.hint}
      </p>

      <MsDiagram nodes={scenario.nodes} pos={scenario.pos} edges={scenario.edges} step={step} eventKey={eventKey} />

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
`,ce={meta:{id:"microservice-patterns",title:"Паттерны коммуникации микросервисов",category:"architectural",summary:"Агрегатор (параллельно), Цепочка (последовательно), событийно-ориентированная (Event Notification / State Transfer / Event Collaboration) и отложенное выполнение задач через очередь."},Demo:ne,Explanation:te,code:[{filename:"microservices.ts",language:"typescript",source:re},{filename:"MsDiagram.tsx",language:"tsx",source:ie},{filename:"Demo.tsx",language:"tsx",source:se}]};export{ce as default};
