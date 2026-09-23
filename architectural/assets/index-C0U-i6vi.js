/* empty css              */import{a as e,_ as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as b}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";const h=[{id:"oltp",label:"OLTP"},{id:"olap",label:"OLAP"},{id:"htap",label:"HTAP"}],u=[{id:1,prompt:"Списать деньги со счёта при оплате картой на кассе.",answer:"oltp",explanation:"Короткая транзакция, читает и пишет одну-две записи, критична скорость отклика — классический OLTP."},{id:2,prompt:"Построить отчёт «выручка по регионам за последний квартал».",answer:"olap",explanation:"Агрегирует миллионы строк сразу, отклик может занимать секунды — классический OLAP."},{id:3,prompt:"Показать клиенту баланс счёта в приложении банка прямо сейчас — и тут же дать менеджеру дашборд аналитики по всем счетам на тех же свежих данных.",answer:"htap",explanation:"Нужны обе нагрузки поверх одних и тех же свежих данных, без отдельного ETL в аналитическое хранилище, — ровно то, для чего придумали HTAP."},{id:4,prompt:"Поставить лайк под постом в соцсети.",answer:"oltp",explanation:"Точечная быстрая запись одной записи — OLTP."},{id:5,prompt:"Посчитать, сколько уникальных пользователей заходило в приложение каждый день за последний год.",answer:"olap",explanation:"Сканирование большого объёма исторических данных с агрегацией — OLAP."},{id:6,prompt:"Склад: кассир проводит продажу, а через секунду менеджер должен увидеть актуальный остаток на живом дашборде.",answer:"htap",explanation:"Транзакционная запись и почти мгновенная аналитика поверх неё — снова HTAP."}],T=[{id:"persistent",label:"Persistent"},{id:"in-memory",label:"In-memory"}],w=[{id:1,prompt:"Исходный код проекта — должен пережить перезагрузку сервера и жить годами.",answer:"persistent",explanation:"Данные обязаны переживать перезапуск — хранение на диске, с журналом и бэкапами."},{id:2,prompt:"Кэш пользовательских сессий: если сервер перезапустится, пользователи просто перелогинятся — не критично.",answer:"in-memory",explanation:"Скорость важнее, чем переживание перезапуска, — типичный in-memory кейс (Redis)."},{id:3,prompt:"Счётчик активных WebSocket-соединений на конкретном инстансе прямо сейчас.",answer:"in-memory",explanation:"Эфемерные данные, актуальные только пока жив процесс, — диск тут не нужен."},{id:4,prompt:"Баланс банковского счёта.",answer:"persistent",explanation:"Потеря данных недопустима ни при каких обстоятельствах — обязательно на диск."},{id:5,prompt:"Промежуточный результат MapReduce-джобы, который нужен только следующему шагу этой же джобы.",answer:"in-memory",explanation:"Живёт ровно до конца вычисления — переживать перезапуск ему незачем."}],c=[{id:"workload",label:"OLTP / OLAP / HTAP",hint:"Какая нагрузка — много мелких транзакций, тяжёлая аналитика или и то, и другое на одних данных?"},{id:"durability",label:"Persistent / In-memory",hint:"Обязаны ли данные пережить перезапуск процесса, или это не важно?"}];function P(){const[i,a]=b("workload");return e("div",{className:"space-y-6",children:[n("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:c.map(t=>n("button",{onClick:()=>a(t.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",t.id===i?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:t.label},t.id))}),i==="workload"?n(x,{options:h,items:u,hint:c[0].hint},"workload"):n(x,{options:T,items:w,hint:c[1].hint},"durability")]})}function x({options:i,items:a,hint:t}){const[o,l]=b({}),p=Object.keys(o).length,r=a.filter(s=>o[s.id]===s.answer).length;return e("div",{className:"space-y-4",children:[e("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n("p",{className:"text-sm text-slate-400",children:t}),e("span",{className:"rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300",children:["верно: ",r," / ",p||"?"]})]}),n("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:a.map(s=>n(g,{item:s,options:i,selected:o[s.id],onSelect:m=>l(d=>({...d,[s.id]:m}))},s.id))})]})}function g({item:i,options:a,selected:t,onSelect:o}){const l=t!==void 0,p=t===i.answer;return e("div",{className:["rounded-lg border p-4 transition-colors",l?p?"border-emerald-500 bg-emerald-950/20":"border-rose-500 bg-rose-950/20":"border-slate-700 bg-slate-900/50"].join(" "),children:[n("p",{className:"text-sm text-slate-200",children:i.prompt}),n("div",{className:"mt-3 flex flex-wrap gap-2",children:a.map(r=>{const s=t===r.id,m=r.id===i.answer;let d="border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";return l&&m?d="border-emerald-500 bg-emerald-600/20 text-emerald-300":s&&!m&&(d="border-rose-500 bg-rose-600/20 text-rose-300"),n("button",{onClick:()=>o(r.id),className:`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${d}`,children:r.label},r.id)})}),l&&e("p",{className:"mt-3 text-xs text-slate-400",children:[p?"✅ ":"❌ ",i.explanation]})]})}function O(){return e("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:[n("strong",{className:"text-white",children:"Классы баз данных"})," — это не альтернатива «видам» (реляционная, документная, графовая, …), а независимые оси классификации поверх них. Один и тот же вид базы может относиться к разным классам: Redis — in-memory, но при этом обслуживает OLTP-нагрузку; PostgreSQL — persistent OLTP; ClickHouse — persistent OLAP."]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"OLTP / OLAP / HTAP"}),e("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:[n("strong",{children:"OLTP (Online Transaction Processing)"})," — много мелких, быстрых транзакций: прочитать/изменить одну-две записи. Оптимизирован под задержку отклика."]}),e("li",{children:[n("strong",{children:"OLAP (Online Analytical Processing)"})," — редкие, но тяжёлые запросы, сканирующие и агрегирующие огромные объёмы данных. Оптимизирован под пропускную способность, а не задержку."]}),e("li",{children:[n("strong",{children:"HTAP (Hybrid Transactional/Analytical Processing)"})," ","— обе нагрузки одновременно поверх одних и тех же свежих данных, без отдельного ETL в аналитическое хранилище."]})]})]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Где живут данные"}),e("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:[n("strong",{children:"Persistent"})," — данные хранятся на диске и обязаны пережить перезапуск процесса."]}),e("li",{children:[n("strong",{children:"In-memory"})," — данные живут в оперативной памяти. Быстрее на порядки, но по умолчанию не переживает падение процесса — если нужна хоть какая-то надёжность, применяют периодические снимки на диск, журнал операций или репликацию состояния памяти на другие машины."]})]})]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Ещё два узких класса"}),e("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:[n("strong",{children:"Embedded database"})," — база, встроенная прямо в процесс приложения, без отдельного сервера (SQLite, LevelDB)."]}),e("li",{children:[n("strong",{children:"Single file database"})," — частный случай embedded: вся база (схема + данные + индексы) — это один файл на диске."]})]})]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Зачем это знать"}),n("p",{className:"mt-2",children:"Выбор технологии — это компромисс сразу по нескольким осям: транзакции, формат данных, характер обращений (OLTP/OLAP/HTAP), частота изменения схемы, зрелость сообщества, навыки команды. Класс БД — одна из этих осей, и её легко перепутать с «видом», хотя это независимые измерения одного и того же выбора."})]})]})}const y=`/**
 * Классы баз данных — не альтернатива "видам" (реляционная/документная/
 * графовая/…), а ДВЕ ОРТОГОНАЛЬНЫЕ оси классификации поверх них: какая
 * нагрузка (OLTP/OLAP/HTAP) и где физически живут данные (Persistent/
 * In-memory). Redis, например, — in-memory, но при этом обслуживает OLTP-
 * нагрузку; PostgreSQL — persistent OLTP; ClickHouse — persistent OLAP.
 * Формат — не диаграмма, а классификация: сценарий → к какому классу он
 * относится и почему.
 */

export type OltpAxis = "oltp" | "olap" | "htap";

export const OLTP_OPTIONS: { id: OltpAxis; label: string }[] = [
  { id: "oltp", label: "OLTP" },
  { id: "olap", label: "OLAP" },
  { id: "htap", label: "HTAP" },
];

export interface QuizItem<T extends string> {
  id: number;
  prompt: string;
  answer: T;
  explanation: string;
}

export const OLTP_QUIZ: QuizItem<OltpAxis>[] = [
  {
    id: 1,
    prompt: "Списать деньги со счёта при оплате картой на кассе.",
    answer: "oltp",
    explanation:
      "Короткая транзакция, читает и пишет одну-две записи, критична скорость отклика — классический OLTP.",
  },
  {
    id: 2,
    prompt: "Построить отчёт «выручка по регионам за последний квартал».",
    answer: "olap",
    explanation:
      "Агрегирует миллионы строк сразу, отклик может занимать секунды — классический OLAP.",
  },
  {
    id: 3,
    prompt:
      "Показать клиенту баланс счёта в приложении банка прямо сейчас — и тут же дать менеджеру дашборд аналитики по всем счетам на тех же свежих данных.",
    answer: "htap",
    explanation:
      "Нужны обе нагрузки поверх одних и тех же свежих данных, без отдельного ETL в аналитическое хранилище, — ровно то, для чего придумали HTAP.",
  },
  {
    id: 4,
    prompt: "Поставить лайк под постом в соцсети.",
    answer: "oltp",
    explanation: "Точечная быстрая запись одной записи — OLTP.",
  },
  {
    id: 5,
    prompt: "Посчитать, сколько уникальных пользователей заходило в приложение каждый день за последний год.",
    answer: "olap",
    explanation: "Сканирование большого объёма исторических данных с агрегацией — OLAP.",
  },
  {
    id: 6,
    prompt:
      "Склад: кассир проводит продажу, а через секунду менеджер должен увидеть актуальный остаток на живом дашборде.",
    answer: "htap",
    explanation: "Транзакционная запись и почти мгновенная аналитика поверх неё — снова HTAP.",
  },
];

export type DurabilityAxis = "persistent" | "in-memory";

export const DURABILITY_OPTIONS: { id: DurabilityAxis; label: string }[] = [
  { id: "persistent", label: "Persistent" },
  { id: "in-memory", label: "In-memory" },
];

export const DURABILITY_QUIZ: QuizItem<DurabilityAxis>[] = [
  {
    id: 1,
    prompt: "Исходный код проекта — должен пережить перезагрузку сервера и жить годами.",
    answer: "persistent",
    explanation: "Данные обязаны переживать перезапуск — хранение на диске, с журналом и бэкапами.",
  },
  {
    id: 2,
    prompt:
      "Кэш пользовательских сессий: если сервер перезапустится, пользователи просто перелогинятся — не критично.",
    answer: "in-memory",
    explanation: "Скорость важнее, чем переживание перезапуска, — типичный in-memory кейс (Redis).",
  },
  {
    id: 3,
    prompt: "Счётчик активных WebSocket-соединений на конкретном инстансе прямо сейчас.",
    answer: "in-memory",
    explanation: "Эфемерные данные, актуальные только пока жив процесс, — диск тут не нужен.",
  },
  {
    id: 4,
    prompt: "Баланс банковского счёта.",
    answer: "persistent",
    explanation: "Потеря данных недопустима ни при каких обстоятельствах — обязательно на диск.",
  },
  {
    id: 5,
    prompt: "Промежуточный результат MapReduce-джобы, который нужен только следующему шагу этой же джобы.",
    answer: "in-memory",
    explanation: "Живёт ровно до конца вычисления — переживать перезапуск ему незачем.",
  },
];
`,A=`import { useState } from "react";
import {
  DURABILITY_OPTIONS,
  DURABILITY_QUIZ,
  OLTP_OPTIONS,
  OLTP_QUIZ,
  type QuizItem,
} from "./classes";

type Tab = "workload" | "durability";

const TABS: { id: Tab; label: string; hint: string }[] = [
  {
    id: "workload",
    label: "OLTP / OLAP / HTAP",
    hint: "Какая нагрузка — много мелких транзакций, тяжёлая аналитика или и то, и другое на одних данных?",
  },
  {
    id: "durability",
    label: "Persistent / In-memory",
    hint: "Обязаны ли данные пережить перезапуск процесса, или это не важно?",
  },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("workload");

  return (
    <div className="space-y-6">
      <div className="inline-flex flex-wrap rounded-lg border border-slate-700 p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={[
              "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
              t.id === tab
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "workload" ? (
        <Quiz key="workload" options={OLTP_OPTIONS} items={OLTP_QUIZ} hint={TABS[0].hint} />
      ) : (
        <Quiz key="durability" options={DURABILITY_OPTIONS} items={DURABILITY_QUIZ} hint={TABS[1].hint} />
      )}
    </div>
  );
}

function Quiz<T extends string>({
  options,
  items,
  hint,
}: {
  options: { id: T; label: string }[];
  items: QuizItem<T>[];
  hint: string;
}) {
  const [answers, setAnswers] = useState<Record<number, T>>({});
  const answeredCount = Object.keys(answers).length;
  const correctCount = items.filter((item) => answers[item.id] === item.answer).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-400">{hint}</p>
        <span className="rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300">
          верно: {correctCount} / {answeredCount || "?"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <QuizCard key={item.id} item={item} options={options} selected={answers[item.id]} onSelect={(value) => setAnswers((prev) => ({ ...prev, [item.id]: value }))} />
        ))}
      </div>
    </div>
  );
}

function QuizCard<T extends string>({
  item,
  options,
  selected,
  onSelect,
}: {
  item: QuizItem<T>;
  options: { id: T; label: string }[];
  selected: T | undefined;
  onSelect: (value: T) => void;
}) {
  const answered = selected !== undefined;
  const isCorrect = selected === item.answer;

  return (
    <div
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
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          const isTheAnswer = opt.id === item.answer;
          let tone =
            "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";
          if (answered && isTheAnswer) {
            tone = "border-emerald-500 bg-emerald-600/20 text-emerald-300";
          } else if (isSelected && !isTheAnswer) {
            tone = "border-rose-500 bg-rose-600/20 text-rose-300";
          }
          return (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
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
}
`,N={meta:{id:"database-classes",title:"Классы баз данных",category:"architectural",summary:"OLTP / OLAP / HTAP и Persistent / In-memory — две независимые оси классификации поверх «вида» БД. Формат — классификация сценариев, а не поток запросов."},Demo:P,Explanation:O,code:[{filename:"classes.ts",language:"typescript",source:y},{filename:"Demo.tsx",language:"tsx",source:A}]};export{N as default};
