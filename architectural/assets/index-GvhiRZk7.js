/* empty css              */import{_ as e,a as t,b as E}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as g,e as N}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as v}from"./proxy-BroObIT1.js";const w=[{id:"sync",label:"Синхронная",hint:"Клиент ждёт, пока реплика ПРИМЕНИТ изменение. Самый надёжный вариант — и самый медленный."},{id:"async",label:"Асинхронная",hint:"Клиент получает ACK сразу после мастера, не дожидаясь реплик вообще. Быстро, но реплики могут отстать."},{id:"semisync",label:"Полусинхронная",hint:"Мастер ждёт подтверждения ПОЛУЧЕНИЯ от реплики (не применения) — компромисс между sync и async."},{id:"loseless-semisync",label:"Lose-less semisync",hint:"Как semisync, но данные сначала долетают до реплики — и только потом применяются в движке мастера."}],_=[{id:1,label:"1. Запись транзакции в журнал",legs:[{from:"client",to:"master",kind:"write"}],description:"Клиент отправляет INSERT — мастер сначала фиксирует его в журнале (WAL)."},{id:2,label:"2. Применение транзакции в движке",legs:[],description:"Мастер применяет изменение у себя — данные видны локальным читателям мастера."},{id:3,label:"3. Отправка данных на реплику",legs:[{from:"master",to:"replica",kind:"replicate"}],description:"Изменение уезжает на реплику."},{id:4,label:"4. Реплика применяет и подтверждает",legs:[{from:"replica",to:"master",kind:"ack"}],description:"Реплика применяет изменение у себя и только ПОСЛЕ ЭТОГО шлёт подтверждение."},{id:5,label:"5. Возвращение подтверждения клиенту",legs:[{from:"master",to:"client",kind:"ack"}],description:"Только теперь клиент получает ACK — он гарантированно применён и на реплике тоже."}],O=[{id:1,label:"1. Запись транзакции в журнал",legs:[{from:"client",to:"master",kind:"write"}],description:"Клиент отправляет INSERT."},{id:2,label:"2. Применение транзакции в движке",legs:[],description:"Мастер применяет изменение у себя."},{id:3,label:"3. Возвращение подтверждения клиенту",legs:[{from:"master",to:"client",kind:"ack"}],description:"Клиент получает ACK СРАЗУ — реплика ещё ни о чём не знает."},{id:4,label:"4. Отправка данных на реплику",legs:[{from:"master",to:"replica",kind:"replicate"}],description:"Только теперь изменение уезжает на реплику — с задержкой, это и есть replication lag."}],T=[{id:1,label:"1. Запись транзакции в журнал",legs:[{from:"client",to:"master",kind:"write"}],description:"Клиент отправляет INSERT."},{id:2,label:"2. Применение транзакции в движке",legs:[],description:"Мастер применяет изменение у себя."},{id:3,label:"3. Отправка данных на реплику",legs:[{from:"master",to:"replica",kind:"replicate"}],description:"Изменение уезжает на реплику."},{id:4,label:"4. Реплика подтверждает ПОЛУЧЕНИЕ",legs:[{from:"replica",to:"master",kind:"ack"}],description:"Реплика подтверждает, что данные долетели, — но ещё не факт, что она успела их применить (применит «когда-то потом»)."},{id:5,label:"5. Возвращение подтверждения клиенту",legs:[{from:"master",to:"client",kind:"ack"}],description:"Клиент получает ACK — данные точно не потеряются, но на реплике они пока «в пути»."}],I=[{id:1,label:"1. Запись транзакции в журнал",legs:[{from:"client",to:"master",kind:"write"}],description:"Клиент отправляет INSERT — но в движке мастера транзакция ЕЩЁ НЕ применена."},{id:2,label:"2. Отправка данных на реплику",legs:[{from:"master",to:"replica",kind:"replicate"}],description:"Данные уезжают на реплику ДО применения у себя — если мастер упадёт прямо сейчас, данные всё равно не потеряны."},{id:3,label:"3. Реплика подтверждает получение",legs:[{from:"replica",to:"master",kind:"ack"}],description:"Реплика подтверждает, что данные долетели."},{id:4,label:"4. Применение транзакции в движке",legs:[],description:"Только теперь мастер применяет изменение у себя — порядок шагов 2↔4 и отличает этот режим от обычного semisync."},{id:5,label:"5. Возвращение подтверждения клиенту",legs:[{from:"master",to:"client",kind:"ack"}],description:"Клиент получает ACK."}];function P(s){switch(s){case"sync":return _;case"async":return O;case"semisync":return T;case"loseless-semisync":return I}}const A=[{id:"strong",label:"Strong Consistency"},{id:"eventual",label:"Eventual Consistency"},{id:"read-your-writes",label:"Read Your Writes"},{id:"monotonic-reads",label:"Monotonic Reads"},{id:"consistent-prefix",label:"Consistent Prefix Reads"}],C=[{id:1,prompt:"Пользователь опубликовал твит с телефона, тут же открыл ленту с компьютера — а своего твита не видит, хотя запись точно прошла.",answer:"read-your-writes",explanation:"Нужно отследить, когда пользователь в последний раз писал, и на какое-то время слать ЕГО чтения на мастер (или заведомо свежую реплику)."},{id:2,prompt:"Пользователь обновил страницу и увидел свой новый пост. Обновил ещё раз — и пост снова пропал.",answer:"monotonic-reads",explanation:"Каждый пользователь должен читать с одного и того же узла-последователя — тогда «назад во времени» он не уедет (разные пользователи при этом могут читать с разных реплик)."},{id:3,prompt:"Пользователь Б ответил комплиментом на фото собаки пользователя А. Третий читатель увидел ответ Б раньше, чем сам исходный пост А с фото, — бессмыслица без контекста.",answer:"consistent-prefix",explanation:"Причинно-следственно связанные записи должны применяться на всех узлах в одном порядке — обычно это достигается тем, что связанные события пишут в одну и ту же секцию/партицию."},{id:4,prompt:"Пока в базу ничего не пишут, через какое-то время после последнего обновления ЛЮБОЙ запрос на чтение вернёт одно и то же, последнее записанное значение.",answer:"eventual",explanation:"«В конечном счёте» — самая слабая гарантия из моделей: не обещает мгновенности, только то, что расхождение не будет длиться вечно."},{id:5,prompt:"Любая операция чтения с ЛЮБОГО узла базы данных возвращает результат последней операции записи.",answer:"strong",explanation:"Самая сильная и самая дорогая гарантия — по сути требует синхронной репликации или обращения к единственному источнику правды."}],M=640,K=220,b=130,u=56,c={client:{x:90,y:110},master:{x:330,y:110},replica:{x:560,y:110}},S=1.1;function R(s){return{x:s.x-b/2,y:s.y-u/2}}function Y({legs:s,eventKey:m}){return e(E,{children:s.map((l,i)=>{const n=c[l.from],a=c[l.to],p=i*S,o=l.kind==="ack"?"rgb(56 189 248)":l.kind==="replicate"?"rgb(168 85 247)":"rgb(99 102 241)";return e(v.circle,{r:7,fill:o,initial:{cx:n.x,cy:n.y,opacity:0},animate:{cx:[n.x,a.x],cy:[n.y,a.y],opacity:[0,1,1,0]},transition:{duration:S,delay:p,ease:"easeInOut"}},`${m}-leg-${i}`)})})}const D=[{id:"client",label:"Client"},{id:"master",label:"Master"},{id:"replica",label:"Replica"}];function L({step:s}){const m=new Set(s.legs.flatMap(i=>[i.from,i.to])),l=`${s.id}`;return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:t("svg",{viewBox:`0 0 ${M} ${K}`,className:"h-auto w-full",role:"img","aria-label":"Порядок ACK при репликации",children:[e("line",{x1:c.client.x,y1:c.client.y,x2:c.master.x,y2:c.master.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:c.master.x,y1:c.master.y,x2:c.replica.x,y2:c.replica.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e(Y,{legs:s.legs,eventKey:l}),D.map(i=>{const n=R(c[i.id]),a=m.has(i.id);return t("g",{children:[e(v.rect,{x:n.x,y:n.y,width:b,height:u,rx:10,fill:a?"rgb(49 46 129)":"rgb(30 41 59)",stroke:a?"rgb(129 140 248)":"rgb(71 85 105)",strokeWidth:a?2.5:1.5,animate:a?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${n.x+b/2}px ${n.y+u/2}px`},transition:{duration:.4}},`${l}-${i.id}`),e("text",{x:n.x+b/2,y:n.y+u/2+5,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:i.label})]},i.id)})]})})}const W=1100,$=[{id:"sync",label:"Синхронность"},{id:"consistency",label:"Модели консистентности"}];function B(){const[s,m]=g("sync");return t("div",{className:"space-y-6",children:[e("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:$.map(l=>e("button",{onClick:()=>m(l.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",l.id===s?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:l.label},l.id))}),s==="sync"?e(U,{}):e(X,{})]})}function U(){const[s,m]=g("sync"),l=w.find(r=>r.id===s),i=P(s),[n,a]=g(0),[p,o]=g(!1),d=n>=i.length-1;N(()=>{a(0),o(!1)},[s]),N(()=>{var f;if(!p)return;if(d){o(!1);return}const r=((f=i[n])==null?void 0:f.legs.length)||1,y=S*r*1e3+W,h=setTimeout(()=>a(k=>k+1),y);return()=>clearTimeout(h)},[p,d,n,i]);const x=i[Math.min(n,i.length-1)];return t("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:w.map(r=>e("button",{onClick:()=>m(r.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",r.id===s?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:r.label},r.id))}),e("p",{className:"text-sm text-slate-400",children:l.hint}),e(L,{step:x}),t("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:x.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:x.description})]}),t("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{a(0),o(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{o(!1),a(r=>Math.max(0,r-1))},disabled:n===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>o(r=>!r),disabled:d,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:p?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{o(!1),a(r=>Math.min(i.length-1,r+1))},disabled:d,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),t("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[n+1," / ",i.length]})]}),e("input",{type:"range",min:0,max:i.length-1,value:n,onChange:r=>{o(!1),a(Number(r.target.value))},className:"w-full accent-indigo-500"})]})}function X(){const[s,m]=g({}),l=Object.keys(s).length,i=C.filter(n=>s[n.id]===n.answer).length;return t("div",{className:"space-y-4",children:[t("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e("p",{className:"text-sm text-slate-400",children:"По сценарию — с твитом и его читателями — угадай, какую гарантию консистентности он иллюстрирует."}),t("span",{className:"rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300",children:["верно: ",i," / ",l||"?"]})]}),e("div",{className:"grid grid-cols-1 gap-4",children:C.map(n=>{const a=s[n.id],p=a!==void 0,o=a===n.answer;return t("div",{className:["rounded-lg border p-4 transition-colors",p?o?"border-emerald-500 bg-emerald-950/20":"border-rose-500 bg-rose-950/20":"border-slate-700 bg-slate-900/50"].join(" "),children:[e("p",{className:"text-sm text-slate-200",children:n.prompt}),e("div",{className:"mt-3 flex flex-wrap gap-2",children:A.map(d=>{const x=a===d.id,r=d.id===n.answer;let y="border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";return p&&r?y="border-emerald-500 bg-emerald-600/20 text-emerald-300":x&&!r&&(y="border-rose-500 bg-rose-600/20 text-rose-300"),e("button",{onClick:()=>m(h=>({...h,[n.id]:d.id})),className:`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${y}`,children:d.label},d.id)})}),p&&t("p",{className:"mt-3 text-xs text-slate-400",children:[o?"✅ ":"❌ ",n.explanation]})]},n.id)})})]})}function j(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:["Топология (Master-Slave / Master-Master / Master-less) отвечает на вопрос «кто пишет». Этот паттерн — про другой вопрос: ",e("strong",{className:"text-white",children:"в какой момент клиент получает подтверждение записи"}),", и что к этому моменту успело произойти на репликах."]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Синхронная"}),e("p",{className:"mt-2",children:"Мастер отвечает клиенту только после того, как реплика ПРИМЕНИЛА изменение у себя. Самая надёжная гарантия — данные точно есть в двух местах, прежде чем клиент об этом узнает. Плата — задержка: приходится ждать сеть + работу реплики."})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Асинхронная"}),t("p",{className:"mt-2",children:["Мастер отвечает клиенту сразу после применения у себя, не дожидаясь реплик вообще. Быстро, но реплика может отстать —"," ",e("strong",{className:"text-white",children:"replication lag"}),": временной разрыв между тем, что видно на мастере, и тем, что уже успело доехать до реплики."]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Полусинхронная (semisync)"}),e("p",{className:"mt-2",children:"Компромисс: мастер ждёт подтверждения не ПРИМЕНЕНИЯ, а только ПОЛУЧЕНИЯ данных репликой. Применит она их «когда-то потом» — но раз данные уже физически долетели, при падении мастера их можно будет забрать с реплики."})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Lose-less semisync"}),e("p",{className:"mt-2",children:"Та же идея, что у semisync, но в другом порядке: данные сначала отправляются на реплику и только ПОТОМ применяются в движке самого мастера. Если мастер упадёт в промежутке между отправкой и применением у себя — данные всё равно не потеряны, они уже на реплике."})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Модели консистентности"}),e("p",{className:"mt-2",children:"Раз реплики могут отставать, возникает вопрос: какие гарантии чтения вообще можно дать пользователю? Несколько устоявшихся моделей — от самой сильной (и дорогой) до самой слабой (и дешёвой):"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{className:"text-white",children:"Strong Consistency"})," — любое чтение с любого узла видит последнюю запись."]}),t("li",{children:[e("strong",{className:"text-white",children:"Eventual Consistency"})," — «в конечном счёте», через какое-то время после последнего обновления, все реплики сойдутся к одному значению."]}),t("li",{children:[e("strong",{className:"text-white",children:"Read Your Writes"})," — пользователь всегда видит СВОИ собственные записи, даже если реплики отстают для остальных."]}),t("li",{children:[e("strong",{className:"text-white",children:"Monotonic Reads"})," — если пользователь один раз увидел новое значение, он больше никогда не увидит более старое (достигается тем, что каждый пользователь закреплён за одной и той же репликой)."]}),t("li",{children:[e("strong",{className:"text-white",children:"Consistent Prefix Reads"})," — причинно связанные записи (пост → ответ на него) видны в правильном порядке, а не вразнобой."]})]})]})]})}const Q=`/**
 * Топология отвечает "кто пишет". Этот паттерн — про другой вопрос: "когда
 * клиент получает ACK на запись, и что к этому моменту успело произойти на
 * реплике". Четыре режима — это четыре разных момента, в который master
 * решает "готово, можно отвечать клиенту":
 *  - sync — только после того, как реплика ПРИМЕНИЛА изменение;
 *  - async — сразу после применения у себя, не дожидаясь реплики вообще;
 *  - semisync — после того, как реплика ПОЛУЧИЛА данные (не обязательно
 *    применила);
 *  - lose-less semisync — то же самое, но данные сначала долетают до
 *    реплики, и только потом применяются в движке мастера — так при
 *    падении мастера сразу после отправки данные не теряются.
 */

export type SyncMode = "sync" | "async" | "semisync" | "loseless-semisync";

export const SYNC_MODES: { id: SyncMode; label: string; hint: string }[] = [
  {
    id: "sync",
    label: "Синхронная",
    hint: "Клиент ждёт, пока реплика ПРИМЕНИТ изменение. Самый надёжный вариант — и самый медленный.",
  },
  {
    id: "async",
    label: "Асинхронная",
    hint: "Клиент получает ACK сразу после мастера, не дожидаясь реплик вообще. Быстро, но реплики могут отстать.",
  },
  {
    id: "semisync",
    label: "Полусинхронная",
    hint: "Мастер ждёт подтверждения ПОЛУЧЕНИЯ от реплики (не применения) — компромисс между sync и async.",
  },
  {
    id: "loseless-semisync",
    label: "Lose-less semisync",
    hint: "Как semisync, но данные сначала долетают до реплики — и только потом применяются в движке мастера.",
  },
];

export type SyncLegKind = "write" | "replicate" | "ack";

export interface SyncLeg {
  from: string;
  to: string;
  kind: SyncLegKind;
}

export interface SyncStep {
  id: number;
  label: string;
  /** Пустой массив — шаг чисто внутренний (например, "применили в движке"), без анимации. */
  legs: SyncLeg[];
  description: string;
}

const SYNC_STEPS: SyncStep[] = [
  {
    id: 1,
    label: "1. Запись транзакции в журнал",
    legs: [{ from: "client", to: "master", kind: "write" }],
    description: "Клиент отправляет INSERT — мастер сначала фиксирует его в журнале (WAL).",
  },
  {
    id: 2,
    label: "2. Применение транзакции в движке",
    legs: [],
    description: "Мастер применяет изменение у себя — данные видны локальным читателям мастера.",
  },
  {
    id: 3,
    label: "3. Отправка данных на реплику",
    legs: [{ from: "master", to: "replica", kind: "replicate" }],
    description: "Изменение уезжает на реплику.",
  },
  {
    id: 4,
    label: "4. Реплика применяет и подтверждает",
    legs: [{ from: "replica", to: "master", kind: "ack" }],
    description: "Реплика применяет изменение у себя и только ПОСЛЕ ЭТОГО шлёт подтверждение.",
  },
  {
    id: 5,
    label: "5. Возвращение подтверждения клиенту",
    legs: [{ from: "master", to: "client", kind: "ack" }],
    description: "Только теперь клиент получает ACK — он гарантированно применён и на реплике тоже.",
  },
];

const ASYNC_STEPS: SyncStep[] = [
  {
    id: 1,
    label: "1. Запись транзакции в журнал",
    legs: [{ from: "client", to: "master", kind: "write" }],
    description: "Клиент отправляет INSERT.",
  },
  {
    id: 2,
    label: "2. Применение транзакции в движке",
    legs: [],
    description: "Мастер применяет изменение у себя.",
  },
  {
    id: 3,
    label: "3. Возвращение подтверждения клиенту",
    legs: [{ from: "master", to: "client", kind: "ack" }],
    description: "Клиент получает ACK СРАЗУ — реплика ещё ни о чём не знает.",
  },
  {
    id: 4,
    label: "4. Отправка данных на реплику",
    legs: [{ from: "master", to: "replica", kind: "replicate" }],
    description: "Только теперь изменение уезжает на реплику — с задержкой, это и есть replication lag.",
  },
];

const SEMISYNC_STEPS: SyncStep[] = [
  {
    id: 1,
    label: "1. Запись транзакции в журнал",
    legs: [{ from: "client", to: "master", kind: "write" }],
    description: "Клиент отправляет INSERT.",
  },
  {
    id: 2,
    label: "2. Применение транзакции в движке",
    legs: [],
    description: "Мастер применяет изменение у себя.",
  },
  {
    id: 3,
    label: "3. Отправка данных на реплику",
    legs: [{ from: "master", to: "replica", kind: "replicate" }],
    description: "Изменение уезжает на реплику.",
  },
  {
    id: 4,
    label: "4. Реплика подтверждает ПОЛУЧЕНИЕ",
    legs: [{ from: "replica", to: "master", kind: "ack" }],
    description:
      "Реплика подтверждает, что данные долетели, — но ещё не факт, что она успела их применить (применит «когда-то потом»).",
  },
  {
    id: 5,
    label: "5. Возвращение подтверждения клиенту",
    legs: [{ from: "master", to: "client", kind: "ack" }],
    description: "Клиент получает ACK — данные точно не потеряются, но на реплике они пока «в пути».",
  },
];

const LOSELESS_SEMISYNC_STEPS: SyncStep[] = [
  {
    id: 1,
    label: "1. Запись транзакции в журнал",
    legs: [{ from: "client", to: "master", kind: "write" }],
    description: "Клиент отправляет INSERT — но в движке мастера транзакция ЕЩЁ НЕ применена.",
  },
  {
    id: 2,
    label: "2. Отправка данных на реплику",
    legs: [{ from: "master", to: "replica", kind: "replicate" }],
    description:
      "Данные уезжают на реплику ДО применения у себя — если мастер упадёт прямо сейчас, данные всё равно не потеряны.",
  },
  {
    id: 3,
    label: "3. Реплика подтверждает получение",
    legs: [{ from: "replica", to: "master", kind: "ack" }],
    description: "Реплика подтверждает, что данные долетели.",
  },
  {
    id: 4,
    label: "4. Применение транзакции в движке",
    legs: [],
    description:
      "Только теперь мастер применяет изменение у себя — порядок шагов 2↔4 и отличает этот режим от обычного semisync.",
  },
  {
    id: 5,
    label: "5. Возвращение подтверждения клиенту",
    legs: [{ from: "master", to: "client", kind: "ack" }],
    description: "Клиент получает ACK.",
  },
];

export function getSyncSteps(mode: SyncMode): SyncStep[] {
  switch (mode) {
    case "sync":
      return SYNC_STEPS;
    case "async":
      return ASYNC_STEPS;
    case "semisync":
      return SEMISYNC_STEPS;
    case "loseless-semisync":
      return LOSELESS_SEMISYNC_STEPS;
  }
}

// ---------------------------------------------------------------------------
// Модели консистентности — узнать гарантию по сценарию (формат: квиз).
// ---------------------------------------------------------------------------

export type ConsistencyModel =
  | "strong"
  | "eventual"
  | "read-your-writes"
  | "monotonic-reads"
  | "consistent-prefix";

export const CONSISTENCY_OPTIONS: { id: ConsistencyModel; label: string }[] = [
  { id: "strong", label: "Strong Consistency" },
  { id: "eventual", label: "Eventual Consistency" },
  { id: "read-your-writes", label: "Read Your Writes" },
  { id: "monotonic-reads", label: "Monotonic Reads" },
  { id: "consistent-prefix", label: "Consistent Prefix Reads" },
];

export interface ConsistencyQuizItem {
  id: number;
  prompt: string;
  answer: ConsistencyModel;
  explanation: string;
}

export const CONSISTENCY_QUIZ: ConsistencyQuizItem[] = [
  {
    id: 1,
    prompt:
      "Пользователь опубликовал твит с телефона, тут же открыл ленту с компьютера — а своего твита не видит, хотя запись точно прошла.",
    answer: "read-your-writes",
    explanation:
      "Нужно отследить, когда пользователь в последний раз писал, и на какое-то время слать ЕГО чтения на мастер (или заведомо свежую реплику).",
  },
  {
    id: 2,
    prompt:
      "Пользователь обновил страницу и увидел свой новый пост. Обновил ещё раз — и пост снова пропал.",
    answer: "monotonic-reads",
    explanation:
      "Каждый пользователь должен читать с одного и того же узла-последователя — тогда «назад во времени» он не уедет (разные пользователи при этом могут читать с разных реплик).",
  },
  {
    id: 3,
    prompt:
      "Пользователь Б ответил комплиментом на фото собаки пользователя А. Третий читатель увидел ответ Б раньше, чем сам исходный пост А с фото, — бессмыслица без контекста.",
    answer: "consistent-prefix",
    explanation:
      "Причинно-следственно связанные записи должны применяться на всех узлах в одном порядке — обычно это достигается тем, что связанные события пишут в одну и ту же секцию/партицию.",
  },
  {
    id: 4,
    prompt:
      "Пока в базу ничего не пишут, через какое-то время после последнего обновления ЛЮБОЙ запрос на чтение вернёт одно и то же, последнее записанное значение.",
    answer: "eventual",
    explanation:
      "«В конечном счёте» — самая слабая гарантия из моделей: не обещает мгновенности, только то, что расхождение не будет длиться вечно.",
  },
  {
    id: 5,
    prompt: "Любая операция чтения с ЛЮБОГО узла базы данных возвращает результат последней операции записи.",
    answer: "strong",
    explanation:
      "Самая сильная и самая дорогая гарантия — по сути требует синхронной репликации или обращения к единственному источнику правды.",
  },
];
`,H=`import { motion } from "framer-motion";
import type { SyncLeg, SyncStep } from "./consistency";

const W = 640;
const H = 220;
const BOX_W = 130;
const BOX_H = 56;

const POS = {
  client: { x: 90, y: 110 },
  master: { x: 330, y: 110 },
  replica: { x: 560, y: 110 },
};

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export const PACKET_LEG_DURATION = 1.1;

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

/**
 * write — клиент шлёт запрос (индиго, вперёд). replicate — данные едут с
 * мастера на реплику (фиолетовый, вперёд). ack — подтверждение едет НАЗАД,
 * от того, кто ответил, к тому, кто спрашивал (голубой, вперёд по своему
 * направлению — from/to уже указывают направление ack).
 */
function LegPulses({ legs, eventKey }: { legs: SyncLeg[]; eventKey: string }) {
  return (
    <>
      {legs.map((leg, i) => {
        const a = POS[leg.from as keyof typeof POS];
        const b = POS[leg.to as keyof typeof POS];
        const legStart = i * PACKET_LEG_DURATION;
        const fill =
          leg.kind === "ack"
            ? "rgb(56 189 248)"
            : leg.kind === "replicate"
              ? "rgb(168 85 247)"
              : "rgb(99 102 241)";
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

const NODES: { id: keyof typeof POS; label: string }[] = [
  { id: "client", label: "Client" },
  { id: "master", label: "Master" },
  { id: "replica", label: "Replica" },
];

export function SyncDiagram({ step }: { step: SyncStep }) {
  const touched = new Set(step.legs.flatMap((leg) => [leg.from, leg.to]));
  const eventKey = \`\${step.id}\`;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Порядок ACK при репликации">
        <line x1={POS.client.x} y1={POS.client.y} x2={POS.master.x} y2={POS.master.y} stroke="rgb(51 65 85)" strokeWidth={2} />
        <line x1={POS.master.x} y1={POS.master.y} x2={POS.replica.x} y2={POS.replica.y} stroke="rgb(51 65 85)" strokeWidth={2} />

        <LegPulses legs={step.legs} eventKey={eventKey} />

        {NODES.map((node) => {
          const rect = rectAt(POS[node.id]);
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
                style={{ transformOrigin: \`\${rect.x + BOX_W / 2}px \${rect.y + BOX_H / 2}px\` }}
                transition={{ duration: 0.4 }}
              />
              <text x={rect.x + BOX_W / 2} y={rect.y + BOX_H / 2 + 5} textAnchor="middle" fill="white" fontSize={15} fontWeight={600}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
`,z=`import { useEffect, useState } from "react";
import {
  CONSISTENCY_OPTIONS,
  CONSISTENCY_QUIZ,
  SYNC_MODES,
  getSyncSteps,
  type ConsistencyModel,
  type SyncMode,
} from "./consistency";
import { PACKET_LEG_DURATION, SyncDiagram } from "./SyncDiagram";

const READ_PAUSE_MS = 1100;

type Tab = "sync" | "consistency";

const TABS: { id: Tab; label: string }[] = [
  { id: "sync", label: "Синхронность" },
  { id: "consistency", label: "Модели консистентности" },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("sync");

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

      {tab === "sync" ? <SyncPlayer /> : <ConsistencyQuiz />}
    </div>
  );
}

function SyncPlayer() {
  const [mode, setMode] = useState<SyncMode>("sync");
  const modeInfo = SYNC_MODES.find((m) => m.id === mode)!;
  const steps = getSyncSteps(mode);

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
    const legs = steps[stepIndex]?.legs.length || 1;
    const delay = PACKET_LEG_DURATION * legs * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {SYNC_MODES.map((m) => (
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

      <SyncDiagram step={step} />

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

function ConsistencyQuiz() {
  const [answers, setAnswers] = useState<Record<number, ConsistencyModel>>({});
  const answeredCount = Object.keys(answers).length;
  const correctCount = CONSISTENCY_QUIZ.filter((item) => answers[item.id] === item.answer).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-400">
          По сценарию — с твитом и его читателями — угадай, какую гарантию консистентности он иллюстрирует.
        </p>
        <span className="rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300">
          верно: {correctCount} / {answeredCount || "?"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CONSISTENCY_QUIZ.map((item) => {
          const selected = answers[item.id];
          const answered = selected !== undefined;
          const isCorrect = selected === item.answer;
          return (
            <div
              key={item.id}
              className={[
                "rounded-lg border p-4 transition-colors",
                !answered
                  ? "border-slate-700 bg-slate-900/50"
                  : isCorrect
                    ? "border-emerald-500 bg-emerald-950/20"
                    : "border-rose-500 bg-rose-950/20",
              ].join(" ")}
            >
              <p className="text-sm text-slate-200">{item.prompt}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {CONSISTENCY_OPTIONS.map((opt) => {
                  const isSelected = selected === opt.id;
                  const isTheAnswer = opt.id === item.answer;
                  let tone = "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";
                  if (answered && isTheAnswer) {
                    tone = "border-emerald-500 bg-emerald-600/20 text-emerald-300";
                  } else if (isSelected && !isTheAnswer) {
                    tone = "border-rose-500 bg-rose-600/20 text-rose-300";
                  }
                  return (
                    <button
                      key={opt.id}
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [item.id]: opt.id }))
                      }
                      className={\`rounded-full border px-3 py-1 text-xs font-medium transition-colors \${tone}\`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <p className="mt-3 text-xs text-slate-400">
                  {isCorrect ? "✅ " : "❌ "}
                  {item.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,J={meta:{id:"replication-consistency",title:"Репликация: синхронность и согласованность",category:"architectural",summary:"Sync / async / semisync / lose-less semisync — в какой момент клиент получает ACK. Плюс модели консистентности: strong, eventual, read-your-writes, monotonic reads, consistent prefix."},Demo:B,Explanation:j,code:[{filename:"consistency.ts",language:"typescript",source:Q},{filename:"SyncDiagram.tsx",language:"tsx",source:H},{filename:"Demo.tsx",language:"tsx",source:z}]};export{J as default};
