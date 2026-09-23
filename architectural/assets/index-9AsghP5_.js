/* empty css              */import{a as t,_ as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as T,d as I,e as x}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as E}from"./proxy-BroObIT1.js";import{A as w}from"./index-f9MUpYCc.js";const N=[{id:"read-uncommitted",label:"READ UNCOMMITTED"},{id:"read-committed",label:"READ COMMITTED"},{id:"repeatable-read",label:"REPEATABLE READ"},{id:"serializable",label:"SERIALIZABLE"}],h=[{id:"dirty-read",label:"Грязное чтение",hint:"T2 читает данные, которые T1 ещё не закоммитил и может откатить."},{id:"non-repeatable-read",label:"Неповторяющееся чтение",hint:"T2 дважды читает одни и те же данные — а между чтениями T1 их успел изменить и закоммитить."},{id:"phantom-read",label:"Фантомное чтение",hint:"T2 дважды выполняет один и тот же агрегирующий запрос — а между разами T1 добавил новую подходящую строку."},{id:"lost-update",label:"Потерянное обновление",hint:"T1 и T2 читают одно и то же значение и оба его увеличивают — одно из увеличений «теряется»."}],A={"dirty-read":["read-committed","repeatable-read","serializable"],"non-repeatable-read":["repeatable-read","serializable"],"lost-update":["repeatable-read","serializable"],"phantom-read":["serializable"]};function S(e,o){return A[e].includes(o)}function V(e){return[{id:1,actor:"t1",sql:"START TRANSACTION;",t1View:null,t2View:null,dbState:"balance = 1500",reveal:!1,anomaly:!1,description:"T1 начинает транзакцию. Начальное состояние: balance = 1500."},{id:2,actor:"t1",sql:"UPDATE account SET balance = balance - 500 WHERE user_id = 111;",t1View:"balance = 1000 (ещё не закоммичено)",t2View:null,dbState:null,reveal:!1,anomaly:!1,description:"T1 списывает 500 — изменение видно только внутри T1, в базе оно ещё не зафиксировано."},{id:3,actor:"t2",sql:"SELECT balance FROM account WHERE user_id = 111;",t1View:null,t2View:e?"balance = 1500 (последнее закоммиченное значение)":"balance = 1000 (чужие незакоммиченные данные!)",dbState:null,reveal:!0,anomaly:!e,description:e?"Уровень изоляции не даёт T2 увидеть незафиксированные изменения T1 — грязное чтение предотвращено. Значение T2 совпадает с реальным состоянием БД.":"T2 прочитал изменение T1, которое ещё не закоммичено и может быть откачено, — это и есть грязное чтение. Значение T2 разошлось с реальным состоянием БД."},{id:4,actor:"t1",sql:"ROLLBACK;",t1View:"balance = 1500 (транзакция отменена)",t2View:null,dbState:"balance = 1500",reveal:!1,anomaly:!1,description:"T1 откатывает транзакцию — списания 500 фактически не произошло."},{id:5,actor:"system",sql:"Итог",t1View:null,t2View:null,dbState:null,reveal:!1,anomaly:!e,description:e?"T2 всё это время видел только реальные данные — противоречий нет.":"T2 успел поработать со значением 1000, которого официально никогда не существовало, — возможна порча данных."}]}function R(e){return[{id:1,actor:"t2",sql:"START TRANSACTION;",t1View:null,t2View:null,dbState:"sum = 4000",reveal:!1,anomaly:!1,description:"T2 начинает транзакцию. Начальное состояние: sum = 4000."},{id:2,actor:"t2",sql:"SELECT SUM(balance) FROM account;",t1View:null,t2View:"sum = 4000",dbState:null,reveal:!1,anomaly:!1,description:"T2 читает сумму в первый раз."},{id:3,actor:"t1",sql:"UPDATE account SET balance = balance + 500 WHERE user_id = 111; COMMIT;",t1View:"sum = 4500 (после своего обновления)",t2View:null,dbState:"sum = 4500",reveal:!1,anomaly:!1,description:"T1 целиком выполняет и коммитит свою транзакцию, пока T2 ещё не завершилась."},{id:4,actor:"t2",sql:"SELECT SUM(balance) FROM account;  -- повторно",t1View:null,t2View:e?"sum = 4000 (как и в первый раз)":"sum = 4500 (изменилось!)",dbState:null,reveal:!0,anomaly:!e,description:e?"Уровень изоляции удерживает для T2 тот же снимок данных, что и при первом чтении, — неповторяющегося чтения нет.":"В рамках ОДНОЙ транзакции T2 дважды прочитал разные значения одного и того же — неповторяющееся чтение. Сравни два значения T2 в колонке слева."}]}function L(e){return[{id:1,actor:"t2",sql:"START TRANSACTION;",t1View:null,t2View:null,dbState:"sum = 4000",reveal:!1,anomaly:!1,description:"T2 начинает транзакцию. Начальное состояние: sum = 4000."},{id:2,actor:"t2",sql:"SELECT SUM(balance) FROM account;",t1View:null,t2View:"sum = 4000",dbState:null,reveal:!1,anomaly:!1,description:"T2 читает сумму в первый раз."},{id:3,actor:"t1",sql:"INSERT INTO account(user_id, balance) VALUES (333, 1000); COMMIT;",t1View:"новая строка добавлена",t2View:null,dbState:"sum = 5000 (появилась новая строка)",reveal:!1,anomaly:!1,description:"T1 добавляет новую строку и коммитит, пока T2 ещё не завершилась."},{id:4,actor:"t2",sql:"SELECT SUM(balance) FROM account;  -- повторно",t1View:null,t2View:e?"sum = 4000 (новая строка не видна)":"sum = 5000 (появилась чужая строка!)",dbState:null,reveal:!0,anomaly:!e,description:e?"На SERIALIZABLE T2 не видит строк, появившихся после начала его транзакции, — фантома нет.":"T2 увидел строку, которой не было в начале его транзакции, — фантомное чтение. Сравни два значения T2 в колонке слева."}]}function M(e){return[{id:1,actor:"t1",sql:"SELECT count FROM view WHERE video_id = 10;",t1View:"count = 100",t2View:null,dbState:"count = 100",reveal:!1,anomaly:!1,description:"T1 читает текущее число просмотров."},{id:2,actor:"t2",sql:"SELECT count FROM view WHERE video_id = 10;",t1View:null,t2View:"count = 100",dbState:null,reveal:!1,anomaly:!1,description:"T2 читает то же значение — обе транзакции стартовали от одного count."},{id:3,actor:"t1",sql:"UPDATE view SET count = 101 WHERE video_id = 10; COMMIT;",t1View:"count = 101 (после своего обновления)",t2View:null,dbState:"count = 101",reveal:!1,anomaly:!1,description:"T1 увеличивает count на основе своего прочитанного значения и коммитит."},{id:4,actor:"t2",sql:"UPDATE view SET count = 101 WHERE video_id = 10; COMMIT;",t1View:null,t2View:e?"count = 102 (пересчитал от актуального значения)":"count = 101 (перезаписал вслепую)",dbState:e?"count = 102 (T2 пересчитал от актуального значения)":"count = 101 (обновление T1 потеряно!)",reveal:!0,anomaly:!e,description:e?"Уровень изоляции не даёт T2 обновить данные вслепую поверх чужого коммита — T2 либо блокируется и пересчитывает, либо получает ошибку сериализации.":"T2 вычислил 101 ещё ДО коммита T1 и просто перезаписал результат — инкремент T1 потерян, на деле просмотров должно быть 102."}]}function C(e,o){const a=S(e,o);switch(e){case"dirty-read":return V(a);case"non-repeatable-read":return R(a);case"phantom-read":return L(a);case"lost-update":return M(a)}}function v(e,o,a){const s=[];for(let m=0;m<=o;m++){const d=e[m],l=a(d);l!==null&&s.push({stepId:d.id,value:l,reveal:d.reveal,anomaly:d.anomaly,isCurrent:m===o})}return s}function O({steps:e,stepIndex:o}){const a=e[o],s=v(e,o,r=>r.t1View),m=v(e,o,r=>r.t2View),d=v(e,o,r=>r.dbState),l=d[d.length-1],c=a.reveal&&(l==null?void 0:l.stepId)===a.id;return t("div",{className:"space-y-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[t("div",{className:["rounded-md border px-4 py-2 text-center transition-colors",c?a.anomaly?"border-rose-500 bg-rose-950/40":"border-emerald-500 bg-emerald-950/40":"border-slate-700 bg-slate-800/60"].join(" "),children:[n("p",{className:"text-[10px] uppercase tracking-wider text-slate-500",children:"База данных (реальное состояние)"}),n(E.p,{initial:{opacity:.4},animate:{opacity:1},transition:{duration:.3},className:["mt-1 font-mono text-sm",c?a.anomaly?"text-rose-300":"text-emerald-300":"text-slate-200"].join(" "),children:(l==null?void 0:l.value)??"…"},(l==null?void 0:l.stepId)??"initial")]}),t("div",{className:"grid grid-cols-2 gap-4",children:[n(f,{title:"T1",active:a.actor==="t1",history:s}),n(f,{title:"T2",active:a.actor==="t2",history:m})]})]})}function f({title:e,active:o,history:a}){return t("div",{className:["rounded-md border p-3 transition-colors",o?"border-indigo-500 bg-indigo-500/10":"border-slate-700"].join(" "),children:[t("p",{className:["text-xs font-bold uppercase tracking-wider",o?"text-indigo-300":"text-slate-500"].join(" "),children:[e,o?" ← сейчас":""]}),n("div",{className:"mt-2 space-y-1.5",children:t(w,{initial:!1,children:[a.length===0&&n("p",{className:"text-xs text-slate-600",children:"ещё ничего не читал(а)"}),a.map(s=>n(E.div,{layout:!0,initial:{opacity:0,y:-6},animate:{opacity:1,y:0,scale:s.isCurrent?[1,1.03,1]:1},transition:{duration:.3},className:["rounded border px-2 py-1 font-mono text-xs",s.reveal?s.anomaly?"border-rose-500 bg-rose-950/40 text-rose-300":"border-emerald-500 bg-emerald-950/40 text-emerald-300":"border-slate-700 bg-slate-800/60 text-slate-300"].join(" "),children:s.value},s.stepId))]})})]})}const _=2200;function D(){const[e,o]=T("dirty-read"),[a,s]=T("read-uncommitted"),m=h.find(i=>i.id===e),d=S(e,a),l=I(()=>C(e,a),[e,a]),[c,r]=T(0),[y,u]=T(!1),p=c>=l.length-1;x(()=>{r(0),u(!1)},[e,a]),x(()=>{if(!y)return;if(p){u(!1);return}const i=setTimeout(()=>r(g=>g+1),_);return()=>clearTimeout(i)},[y,p,c]);const b=l[Math.min(c,l.length-1)];return t("div",{className:"space-y-6",children:[n("div",{className:"flex flex-wrap gap-2",children:h.map(i=>n("button",{onClick:()=>o(i.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",i.id===e?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:i.label},i.id))}),n("p",{className:"text-sm text-slate-400",children:m.hint}),n("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:N.map(i=>n("button",{onClick:()=>s(i.id),className:["rounded-md px-3 py-1.5 text-xs font-mono font-medium transition-colors",i.id===a?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:i.label},i.id))}),t("div",{className:["flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium",d?"bg-emerald-950/40 text-emerald-300":"bg-rose-950/40 text-rose-300"].join(" "),children:[d?"🟢":"🔴",d?"На этом уровне изоляции аномалия предотвращена.":"На этом уровне изоляции аномалия происходит."]}),n(O,{steps:l,stepIndex:Math.min(c,l.length-1)}),t("div",{className:"space-y-1.5",children:[t("p",{className:"font-mono text-xs text-slate-500",children:[b.actor==="t1"?"T1 → ":b.actor==="t2"?"T2 → ":"",b.sql]}),n("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:b.description})]}),t("div",{className:"flex flex-wrap items-center gap-3",children:[n("button",{onClick:()=>{r(0),u(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),n("button",{onClick:()=>{u(!1),r(i=>Math.max(0,i-1))},disabled:c===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),n("button",{onClick:()=>u(i=>!i),disabled:p,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:y?"⏸ Пауза":"▶ Авто"}),n("button",{onClick:()=>{u(!1),r(i=>Math.min(l.length-1,i+1))},disabled:p,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),t("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[c+1," / ",l.length]})]}),n("input",{type:"range",min:0,max:l.length-1,value:c,onChange:i=>{u(!1),r(Number(i.target.value))},className:"w-full accent-indigo-500"})]})}function P(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[n("strong",{className:"text-white",children:"Изоляция"})," — одна из четырёх гарантий ACID: представление базы данных, которое транзакция видит в своём начале, должно меняться только ею самой до её завершения. На практике полная изоляция каждой транзакции от каждой — дорогая по производительности штука, поэтому большинство СУБД дают выбор: разменять часть строгости на скорость через"," ",n("strong",{className:"text-white",children:"уровень изоляции"}),"."]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Четыре аномалии"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[n("strong",{children:"Грязное чтение"})," — читаем ещё не закоммиченные (и потенциально откатываемые) данные другой транзакции."]}),t("li",{children:[n("strong",{children:"Неповторяющееся чтение"})," — дважды читаем одну и ту же строку в рамках одной транзакции и получаем разные значения, потому что между чтениями кто-то её изменил и закоммитил."]}),t("li",{children:[n("strong",{children:"Фантомное чтение"})," — то же самое, но с набором строк: повторный агрегирующий запрос видит новую строку, которой не было при первом запросе."]}),t("li",{children:[n("strong",{children:"Потерянное обновление"})," — две транзакции читают одно значение и обе пишут результат на его основе; та, что закоммитила позже, вслепую затирает работу первой."]})]})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Четыре уровня изоляции"}),n("p",{className:"mt-2",children:"Каждый следующий уровень закрывает на одну аномалию больше предыдущего — это видно в демо рядом по переключателю:"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[n("strong",{children:"READ UNCOMMITTED"})," — не закрывает ничего, все четыре аномалии возможны."]}),t("li",{children:[n("strong",{children:"READ COMMITTED"})," — закрывает грязное чтение (значение по умолчанию в PostgreSQL и большинстве СУБД)."]}),t("li",{children:[n("strong",{children:"REPEATABLE READ"})," — дополнительно закрывает неповторяющееся чтение и потерянное обновление."]}),t("li",{children:[n("strong",{children:"SERIALIZABLE"})," — закрывает всё, включая фантомы; транзакции ведут себя так, будто выполняются строго по очереди."]})]})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Как это реализовано"}),t("p",{className:"mt-2",children:["Два основных механизма: ",n("strong",{children:"2PL"})," (two-phase locking) — транзакция на фазе расширения набирает блокировки и не отпускает их до самого конца, на фазе сжатия отпускает все разом; и ",n("strong",{children:"MVCC"})," (multiversion concurrency control) — вместо блокировок каждая строка хранит несколько версий с идентификаторами создавшей и удалившей её транзакции, и каждая транзакция читает свой согласованный снимок без блокировки читателей писателями. PostgreSQL использует MVCC."]})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"За пределами ACID"}),t("p",{className:"mt-2",children:["NoSQL-базы часто вместо ACID предлагают"," ",n("strong",{children:"BASE"})," (Basically Available, Soft State, Eventual Consistency) — доступность и масштабируемость важнее строгой согласованности, а ответственность за неё частично перекладывается на разработчика приложения."]})]})]})}const q=`/**
 * Уровни изоляции транзакций. Одни и те же четыре аномалии параллельного
 * доступа к данным (грязное чтение, неповторяющееся чтение, фантомное
 * чтение, потерянное обновление) — но каждый уровень изоляции закрывает
 * их постепенно, от READ UNCOMMITTED (ничего не закрыто) до SERIALIZABLE
 * (закрыто всё). Сценарии двух конкурентных транзакций T1/T2 фиксированы,
 * от уровня изоляции зависит только то, что видно на "переломном" шаге.
 */

export type IsolationLevel =
  | "read-uncommitted"
  | "read-committed"
  | "repeatable-read"
  | "serializable";

export const ISOLATION_LEVELS: { id: IsolationLevel; label: string }[] = [
  { id: "read-uncommitted", label: "READ UNCOMMITTED" },
  { id: "read-committed", label: "READ COMMITTED" },
  { id: "repeatable-read", label: "REPEATABLE READ" },
  { id: "serializable", label: "SERIALIZABLE" },
];

export type AnomalyId =
  | "dirty-read"
  | "non-repeatable-read"
  | "phantom-read"
  | "lost-update";

export const ANOMALIES: { id: AnomalyId; label: string; hint: string }[] = [
  {
    id: "dirty-read",
    label: "Грязное чтение",
    hint: "T2 читает данные, которые T1 ещё не закоммитил и может откатить.",
  },
  {
    id: "non-repeatable-read",
    label: "Неповторяющееся чтение",
    hint: "T2 дважды читает одни и те же данные — а между чтениями T1 их успел изменить и закоммитить.",
  },
  {
    id: "phantom-read",
    label: "Фантомное чтение",
    hint: "T2 дважды выполняет один и тот же агрегирующий запрос — а между разами T1 добавил новую подходящую строку.",
  },
  {
    id: "lost-update",
    label: "Потерянное обновление",
    hint: "T1 и T2 читают одно и то же значение и оба его увеличивают — одно из увеличений «теряется».",
  },
];

/** Какие уровни изоляции ПРЕДОТВРАЩАЮТ данную аномалию. */
const PREVENTED_AT: Record<AnomalyId, IsolationLevel[]> = {
  "dirty-read": ["read-committed", "repeatable-read", "serializable"],
  "non-repeatable-read": ["repeatable-read", "serializable"],
  "lost-update": ["repeatable-read", "serializable"],
  "phantom-read": ["serializable"],
};

export function isPrevented(anomaly: AnomalyId, level: IsolationLevel): boolean {
  return PREVENTED_AT[anomaly].includes(level);
}

export type Actor = "t1" | "t2" | "system";

export interface IsolationStep {
  id: number;
  actor: Actor;
  /** Короткая SQL-подобная строка операции — показывается моноширинным шрифтом. */
  sql: string;
  /** Что T1 сейчас знает/видит — null, если этот шаг не меняет его картину мира. */
  t1View: string | null;
  /** Что T2 сейчас знает/видит — null, если этот шаг не меняет его картину мира. */
  t2View: string | null;
  /** РЕАЛЬНОЕ состояние в базе (после commit/rollback) — null, если не менялось. */
  dbState: string | null;
  /** true на самом "переломном" шаге сценария — том, где аномалия либо проявляется, либо нет. */
  reveal: boolean;
  /** true — если на этом шаге аномалия НЕ предотвращена (т.е. реально произошла). */
  anomaly: boolean;
  description: string;
}

function dirtyReadScenario(prevented: boolean): IsolationStep[] {
  return [
    {
      id: 1,
      actor: "t1",
      sql: "START TRANSACTION;",
      t1View: null,
      t2View: null,
      dbState: "balance = 1500",
      reveal: false,
      anomaly: false,
      description: "T1 начинает транзакцию. Начальное состояние: balance = 1500.",
    },
    {
      id: 2,
      actor: "t1",
      sql: "UPDATE account SET balance = balance - 500 WHERE user_id = 111;",
      t1View: "balance = 1000 (ещё не закоммичено)",
      t2View: null,
      dbState: null,
      reveal: false,
      anomaly: false,
      description:
        "T1 списывает 500 — изменение видно только внутри T1, в базе оно ещё не зафиксировано.",
    },
    {
      id: 3,
      actor: "t2",
      sql: "SELECT balance FROM account WHERE user_id = 111;",
      t1View: null,
      t2View: prevented
        ? "balance = 1500 (последнее закоммиченное значение)"
        : "balance = 1000 (чужие незакоммиченные данные!)",
      dbState: null,
      reveal: true,
      anomaly: !prevented,
      description: prevented
        ? "Уровень изоляции не даёт T2 увидеть незафиксированные изменения T1 — грязное чтение предотвращено. Значение T2 совпадает с реальным состоянием БД."
        : "T2 прочитал изменение T1, которое ещё не закоммичено и может быть откачено, — это и есть грязное чтение. Значение T2 разошлось с реальным состоянием БД.",
    },
    {
      id: 4,
      actor: "t1",
      sql: "ROLLBACK;",
      t1View: "balance = 1500 (транзакция отменена)",
      t2View: null,
      dbState: "balance = 1500",
      reveal: false,
      anomaly: false,
      description: "T1 откатывает транзакцию — списания 500 фактически не произошло.",
    },
    {
      id: 5,
      actor: "system",
      sql: "Итог",
      t1View: null,
      t2View: null,
      dbState: null,
      reveal: false,
      anomaly: !prevented,
      description: prevented
        ? "T2 всё это время видел только реальные данные — противоречий нет."
        : "T2 успел поработать со значением 1000, которого официально никогда не существовало, — возможна порча данных.",
    },
  ];
}

function nonRepeatableReadScenario(prevented: boolean): IsolationStep[] {
  return [
    {
      id: 1,
      actor: "t2",
      sql: "START TRANSACTION;",
      t1View: null,
      t2View: null,
      dbState: "sum = 4000",
      reveal: false,
      anomaly: false,
      description: "T2 начинает транзакцию. Начальное состояние: sum = 4000.",
    },
    {
      id: 2,
      actor: "t2",
      sql: "SELECT SUM(balance) FROM account;",
      t1View: null,
      t2View: "sum = 4000",
      dbState: null,
      reveal: false,
      anomaly: false,
      description: "T2 читает сумму в первый раз.",
    },
    {
      id: 3,
      actor: "t1",
      sql: "UPDATE account SET balance = balance + 500 WHERE user_id = 111; COMMIT;",
      t1View: "sum = 4500 (после своего обновления)",
      t2View: null,
      dbState: "sum = 4500",
      reveal: false,
      anomaly: false,
      description:
        "T1 целиком выполняет и коммитит свою транзакцию, пока T2 ещё не завершилась.",
    },
    {
      id: 4,
      actor: "t2",
      sql: "SELECT SUM(balance) FROM account;  -- повторно",
      t1View: null,
      t2View: prevented
        ? "sum = 4000 (как и в первый раз)"
        : "sum = 4500 (изменилось!)",
      dbState: null,
      reveal: true,
      anomaly: !prevented,
      description: prevented
        ? "Уровень изоляции удерживает для T2 тот же снимок данных, что и при первом чтении, — неповторяющегося чтения нет."
        : "В рамках ОДНОЙ транзакции T2 дважды прочитал разные значения одного и того же — неповторяющееся чтение. Сравни два значения T2 в колонке слева.",
    },
  ];
}

function phantomReadScenario(prevented: boolean): IsolationStep[] {
  return [
    {
      id: 1,
      actor: "t2",
      sql: "START TRANSACTION;",
      t1View: null,
      t2View: null,
      dbState: "sum = 4000",
      reveal: false,
      anomaly: false,
      description: "T2 начинает транзакцию. Начальное состояние: sum = 4000.",
    },
    {
      id: 2,
      actor: "t2",
      sql: "SELECT SUM(balance) FROM account;",
      t1View: null,
      t2View: "sum = 4000",
      dbState: null,
      reveal: false,
      anomaly: false,
      description: "T2 читает сумму в первый раз.",
    },
    {
      id: 3,
      actor: "t1",
      sql: "INSERT INTO account(user_id, balance) VALUES (333, 1000); COMMIT;",
      t1View: "новая строка добавлена",
      t2View: null,
      dbState: "sum = 5000 (появилась новая строка)",
      reveal: false,
      anomaly: false,
      description: "T1 добавляет новую строку и коммитит, пока T2 ещё не завершилась.",
    },
    {
      id: 4,
      actor: "t2",
      sql: "SELECT SUM(balance) FROM account;  -- повторно",
      t1View: null,
      t2View: prevented
        ? "sum = 4000 (новая строка не видна)"
        : "sum = 5000 (появилась чужая строка!)",
      dbState: null,
      reveal: true,
      anomaly: !prevented,
      description: prevented
        ? "На SERIALIZABLE T2 не видит строк, появившихся после начала его транзакции, — фантома нет."
        : "T2 увидел строку, которой не было в начале его транзакции, — фантомное чтение. Сравни два значения T2 в колонке слева.",
    },
  ];
}

function lostUpdateScenario(prevented: boolean): IsolationStep[] {
  return [
    {
      id: 1,
      actor: "t1",
      sql: "SELECT count FROM view WHERE video_id = 10;",
      t1View: "count = 100",
      t2View: null,
      dbState: "count = 100",
      reveal: false,
      anomaly: false,
      description: "T1 читает текущее число просмотров.",
    },
    {
      id: 2,
      actor: "t2",
      sql: "SELECT count FROM view WHERE video_id = 10;",
      t1View: null,
      t2View: "count = 100",
      dbState: null,
      reveal: false,
      anomaly: false,
      description: "T2 читает то же значение — обе транзакции стартовали от одного count.",
    },
    {
      id: 3,
      actor: "t1",
      sql: "UPDATE view SET count = 101 WHERE video_id = 10; COMMIT;",
      t1View: "count = 101 (после своего обновления)",
      t2View: null,
      dbState: "count = 101",
      reveal: false,
      anomaly: false,
      description: "T1 увеличивает count на основе своего прочитанного значения и коммитит.",
    },
    {
      id: 4,
      actor: "t2",
      sql: "UPDATE view SET count = 101 WHERE video_id = 10; COMMIT;",
      t1View: null,
      t2View: prevented
        ? "count = 102 (пересчитал от актуального значения)"
        : "count = 101 (перезаписал вслепую)",
      dbState: prevented
        ? "count = 102 (T2 пересчитал от актуального значения)"
        : "count = 101 (обновление T1 потеряно!)",
      reveal: true,
      anomaly: !prevented,
      description: prevented
        ? "Уровень изоляции не даёт T2 обновить данные вслепую поверх чужого коммита — T2 либо блокируется и пересчитывает, либо получает ошибку сериализации."
        : "T2 вычислил 101 ещё ДО коммита T1 и просто перезаписал результат — инкремент T1 потерян, на деле просмотров должно быть 102.",
    },
  ];
}

export function buildIsolationScenario(
  anomaly: AnomalyId,
  level: IsolationLevel,
): IsolationStep[] {
  const prevented = isPrevented(anomaly, level);
  switch (anomaly) {
    case "dirty-read":
      return dirtyReadScenario(prevented);
    case "non-repeatable-read":
      return nonRepeatableReadScenario(prevented);
    case "phantom-read":
      return phantomReadScenario(prevented);
    case "lost-update":
      return lostUpdateScenario(prevented);
  }
}
`,H=`import { AnimatePresence, motion } from "framer-motion";
import type { IsolationStep } from "./isolation";

/**
 * Раньше тут была SVG-схема "T1 — БД — T2" с бегающим кружком, которая
 * подсвечивала КТО сходил в базу, но нигде не показывала КАКОЕ значение он
 * увидел, — а вся суть аномалий изоляции именно в разнице значений. Поэтому
 * вместо схемы потока — прямое сравнение состояний: полоса "реальное
 * состояние БД" сверху и две колонки T1/T2 с растущей историей того, что
 * каждая транзакция успела прочитать/узнать. Расхождение видно напрямую,
 * без необходимости расшифровывать цвет узла.
 */

interface HistoryEntry {
  stepId: number;
  value: string;
  reveal: boolean;
  anomaly: boolean;
  isCurrent: boolean;
}

function buildHistory(
  steps: IsolationStep[],
  upToIndex: number,
  pick: (step: IsolationStep) => string | null,
): HistoryEntry[] {
  const entries: HistoryEntry[] = [];
  for (let i = 0; i <= upToIndex; i++) {
    const step = steps[i];
    const value = pick(step);
    if (value !== null) {
      entries.push({
        stepId: step.id,
        value,
        reveal: step.reveal,
        anomaly: step.anomaly,
        isCurrent: i === upToIndex,
      });
    }
  }
  return entries;
}

export function IsolationDiagram({
  steps,
  stepIndex,
}: {
  steps: IsolationStep[];
  stepIndex: number;
}) {
  const step = steps[stepIndex];
  const t1History = buildHistory(steps, stepIndex, (s) => s.t1View);
  const t2History = buildHistory(steps, stepIndex, (s) => s.t2View);
  const dbHistory = buildHistory(steps, stepIndex, (s) => s.dbState);
  const dbCurrent = dbHistory[dbHistory.length - 1];

  // На переломном шаге не у всех сценариев меняется dbState — но там, где
  // меняется (потерянное обновление: реальное значение в БД перезаписывается
  // прямо на этом шаге), сама БД и есть место аномалии, и полоса должна это
  // показывать тем же цветом, что и карточка транзакции.
  const dbIsReveal = step.reveal && dbCurrent?.stepId === step.id;

  return (
    <div className="space-y-4 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      {/* Реальное состояние БД — общая истина, к которой должны сходиться обе транзакции. */}
      <div
        className={[
          "rounded-md border px-4 py-2 text-center transition-colors",
          dbIsReveal
            ? step.anomaly
              ? "border-rose-500 bg-rose-950/40"
              : "border-emerald-500 bg-emerald-950/40"
            : "border-slate-700 bg-slate-800/60",
        ].join(" ")}
      >
        <p className="text-[10px] uppercase tracking-wider text-slate-500">
          База данных (реальное состояние)
        </p>
        <motion.p
          key={dbCurrent?.stepId ?? "initial"}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={[
            "mt-1 font-mono text-sm",
            dbIsReveal
              ? step.anomaly
                ? "text-rose-300"
                : "text-emerald-300"
              : "text-slate-200",
          ].join(" ")}
        >
          {dbCurrent?.value ?? "…"}
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TransactionColumn title="T1" active={step.actor === "t1"} history={t1History} />
        <TransactionColumn title="T2" active={step.actor === "t2"} history={t2History} />
      </div>
    </div>
  );
}

function TransactionColumn({
  title,
  active,
  history,
}: {
  title: string;
  active: boolean;
  history: HistoryEntry[];
}) {
  return (
    <div
      className={[
        "rounded-md border p-3 transition-colors",
        active ? "border-indigo-500 bg-indigo-500/10" : "border-slate-700",
      ].join(" ")}
    >
      <p
        className={[
          "text-xs font-bold uppercase tracking-wider",
          active ? "text-indigo-300" : "text-slate-500",
        ].join(" ")}
      >
        {title}
        {active ? " ← сейчас" : ""}
      </p>
      <div className="mt-2 space-y-1.5">
        <AnimatePresence initial={false}>
          {history.length === 0 && (
            <p className="text-xs text-slate-600">ещё ничего не читал(а)</p>
          )}
          {history.map((entry) => (
            <motion.div
              key={entry.stepId}
              layout
              initial={{ opacity: 0, y: -6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: entry.isCurrent ? [1, 1.03, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
              className={[
                "rounded border px-2 py-1 font-mono text-xs",
                entry.reveal
                  ? entry.anomaly
                    ? "border-rose-500 bg-rose-950/40 text-rose-300"
                    : "border-emerald-500 bg-emerald-950/40 text-emerald-300"
                  : "border-slate-700 bg-slate-800/60 text-slate-300",
              ].join(" ")}
            >
              {entry.value}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
`,U=`import { useEffect, useMemo, useState } from "react";
import {
  ANOMALIES,
  ISOLATION_LEVELS,
  buildIsolationScenario,
  isPrevented,
  type AnomalyId,
  type IsolationLevel,
} from "./isolation";
import { IsolationDiagram } from "./IsolationDiagram";

// Тут нет анимации "полёта пакета" — только смена значений, поэтому шаг
// плеера ждёт фиксированную паузу, а не считает время анимации отдельно.
const PLAY_INTERVAL = 2200;

export function Demo() {
  const [anomalyId, setAnomalyId] = useState<AnomalyId>("dirty-read");
  const [level, setLevel] = useState<IsolationLevel>("read-uncommitted");

  const anomaly = ANOMALIES.find((a) => a.id === anomalyId)!;
  const prevented = isPrevented(anomalyId, level);

  const steps = useMemo(
    () => buildIsolationScenario(anomalyId, level),
    [anomalyId, level],
  );

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  // Смена аномалии или уровня изоляции — начинаем сценарий заново.
  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [anomalyId, level]);

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), PLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      {/* Выбор аномалии. */}
      <div className="flex flex-wrap gap-2">
        {ANOMALIES.map((a) => (
          <button
            key={a.id}
            onClick={() => setAnomalyId(a.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              a.id === anomalyId
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {a.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-400">{anomaly.hint}</p>

      {/* Выбор уровня изоляции. */}
      <div className="inline-flex flex-wrap rounded-lg border border-slate-700 p-1">
        {ISOLATION_LEVELS.map((l) => (
          <button
            key={l.id}
            onClick={() => setLevel(l.id)}
            className={[
              "rounded-md px-3 py-1.5 text-xs font-mono font-medium transition-colors",
              l.id === level
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div
        className={[
          "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium",
          prevented
            ? "bg-emerald-950/40 text-emerald-300"
            : "bg-rose-950/40 text-rose-300",
        ].join(" ")}
      >
        {prevented ? "🟢" : "🔴"}
        {prevented
          ? "На этом уровне изоляции аномалия предотвращена."
          : "На этом уровне изоляции аномалия происходит."}
      </div>

      <IsolationDiagram steps={steps} stepIndex={Math.min(stepIndex, steps.length - 1)} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">
          {step.actor === "t1" ? "T1 → " : step.actor === "t2" ? "T2 → " : ""}
          {step.sql}
        </p>
        <p className="min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
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
`,z={meta:{id:"isolation-levels",title:"Уровни изоляции транзакций",category:"architectural",summary:"Грязное чтение, неповторяющееся чтение, фантомы и потерянное обновление — какие из этих аномалий закрывает каждый уровень изоляции, на примере двух конкурентных транзакций."},Demo:D,Explanation:P,code:[{filename:"isolation.ts",language:"typescript",source:q},{filename:"IsolationDiagram.tsx",language:"tsx",source:H},{filename:"Demo.tsx",language:"tsx",source:U}]};export{z as default};
