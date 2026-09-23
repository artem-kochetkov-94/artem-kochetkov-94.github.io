/* empty css              */import{a as n,_ as e}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as u}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";const h=[{id:"push",label:"Push"},{id:"pull",label:"Pull"}],b=[{id:1,prompt:"PostgreSQL: мастер сам отправляет WAL-сегменты каждой подключённой реплике.",answer:"push",explanation:"Мастер инициирует передачу и должен знать обо всех подписанных репликах."},{id:2,prompt:"MySQL: реплика периодически сама спрашивает у мастера новые события из бинлога.",answer:"pull",explanation:"Инициатива у реплики — она сама решает, когда и что забрать."},{id:3,prompt:"Реплика была отключена, снова появилась в сети — и сама, без чьей-либо помощи, продолжает читать бинлог с того места, где остановилась.",answer:"pull",explanation:"При pull реплика сама хранит свой прогресс — мастеру не нужно ничего помнить про её состояние."},{id:4,prompt:"Чтобы подключить новую реплику, мастер нужно донастроить — добавить её в список получателей.",answer:"push",explanation:"Мастер явно держит список подписчиков и рассылает изменения именно им."}],w=[{id:"statement",label:"Statement-based"},{id:"row",label:"Row-based"},{id:"mixed",label:"Mixed"}],g=[{id:1,prompt:"Реплицируем запрос UPDATE users SET last_seen = NOW() WHERE id = 5 как есть — но NOW() на реплике выполнится в другой момент и даст другое значение.",answer:"statement",explanation:"Классическая проблема SBR: недетерминированные функции (NOW(), random(), unix_timestamp()) на разных нодах дают разный результат."},{id:2,prompt:"Одним UPDATE изменили миллион строк — вместо запроса передаём уже готовый бинарный список изменённых строк.",answer:"row",explanation:"RBR всегда корректен (передаётся результат, а не инструкция), но трафика при массовых изменениях будет намного больше."},{id:3,prompt:"База сама выбирает: детерминированные запросы шлёт компактным SQL-текстом, а как только видит недетерминированную функцию — на этот запрос переключается и шлёт готовые строки.",answer:"mixed",explanation:"Mixed берёт компактность SBR там, где это безопасно, и надёжность RBR — где нет."},{id:4,prompt:"Изменили только одно поле в одной строке, но по сети целиком уезжает вся строка (minimal-режим смягчает это, передавая только изменённые столбцы).",answer:"row",explanation:"RBR передаёт готовую сущность целиком (или почти целиком) — это и плата за надёжность."}],S=[{id:"logical",label:"Логическая"},{id:"physical",label:"Физическая"}],f=[{id:1,prompt:"Реплика — это побайтовая копия страниц мастера; slave = master, версия СУБД обязана совпадать.",answer:"physical",explanation:"Физическая репликация работает со страницами на диске, а не с содержимым строк."},{id:2,prompt:"Репликация работает с кортежами (строками, SBR/RBR), не зная, как физически устроены страницы на диске.",answer:"logical",explanation:"Логическая репликация абстрагирована от формата хранения — благодаря этому можно реплицировать между разными версиями или даже между разными СУБД."},{id:3,prompt:"Хотим реплицировать только одну таблицу из всей базы, а не всю базу целиком.",answer:"logical",explanation:"Фильтрация (реплицировать частично) возможна именно на логическом уровне — физическая репликация всегда копирует всё целиком, байт в байт."}],p=[{id:"source",label:"Push / Pull",hint:"Кто инициирует передачу изменения — мастер сам рассылает, или реплика сама забирает?"},{id:"format",label:"Statement / Row / Mixed",hint:"Что именно едет по сети — готовый SQL-запрос или уже готовые изменённые строки?"},{id:"level",label:"Логическая / Физическая",hint:"На каком уровне работает репликация — с содержимым строк, или со страницами на диске?"}];function N(){const[t,l]=u("source");return n("div",{className:"space-y-6",children:[e("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:p.map(s=>e("button",{onClick:()=>l(s.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",s.id===t?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:s.label},s.id))}),t==="source"&&e(x,{options:h,items:b,hint:p[0].hint},"source"),t==="format"&&e(x,{options:w,items:g,hint:p[1].hint},"format"),t==="level"&&e(x,{options:S,items:f,hint:p[2].hint},"level")]})}function x({options:t,items:l,hint:s}){const[r,o]=u({}),m=Object.keys(r).length,a=l.filter(i=>r[i.id]===i.answer).length;return n("div",{className:"space-y-4",children:[n("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e("p",{className:"text-sm text-slate-400",children:s}),n("span",{className:"rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300",children:["верно: ",a," / ",m||"?"]})]}),e("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:l.map(i=>e(v,{item:i,options:t,selected:r[i.id],onSelect:c=>o(d=>({...d,[i.id]:c}))},i.id))})]})}function v({item:t,options:l,selected:s,onSelect:r}){const o=s!==void 0,m=s===t.answer;return n("div",{className:["rounded-lg border p-4 transition-colors",o?m?"border-emerald-500 bg-emerald-950/20":"border-rose-500 bg-rose-950/20":"border-slate-700 bg-slate-900/50"].join(" "),children:[e("p",{className:"text-sm text-slate-200",children:t.prompt}),e("div",{className:"mt-3 flex flex-wrap gap-2",children:l.map(a=>{const i=s===a.id,c=a.id===t.answer;let d="border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";return o&&c?d="border-emerald-500 bg-emerald-600/20 text-emerald-300":i&&!c&&(d="border-rose-500 bg-rose-600/20 text-rose-300"),e("button",{onClick:()=>r(a.id),className:`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${d}`,children:a.label},a.id)})}),o&&n("p",{className:"mt-3 text-xs text-slate-400",children:[m?"✅ ":"❌ ",t.explanation]})]})}function R(){return n("div",{className:"space-y-4 text-slate-300",children:[n("p",{children:["Топология отвечает «кто пишет», синхронность — «когда клиент получает ACK». Этот паттерн — про третий, независимый вопрос: ",e("strong",{className:"text-white",children:"как именно"})," ","изменение физически доезжает с мастера до реплики."]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Источник инициативы: Push vs Pull"}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Push"})," — мастер сам рассылает данные репликам (так делает PostgreSQL). Мастер обязан знать обо всех подписчиках."," ",e("strong",{className:"text-white",children:"Pull"})," — реплики сами стягивают данные, когда им удобно (так делает MySQL). Реплика сама хранит свою позицию — если она отвалилась и вернулась, продолжит с того же места без вмешательства мастера."]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Что передаётся: SBR / RBR / Mixed"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:[e("strong",{className:"text-white",children:"Statement-based (SBR)"})," — передаются сами SQL-запросы, каждый заново исполняется на каждой ноде. Компактно, но опасно: недетерминированные функции (",e("code",{className:"rounded bg-slate-800 px-1",children:"random()"}),", ",e("code",{className:"rounded bg-slate-800 px-1",children:"unix_timestamp()"}),") дадут на разных нодах разный результат."]}),n("li",{children:[e("strong",{className:"text-white",children:"Row-based (RBR)"})," — передаются уже изменённые строки в бинарном виде. Надёжно (передаётся результат, а не инструкция), но тяжелее по трафику — особенно если запрос затронул сразу миллион строк. Можно настраивать"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"full"})," (вся строка) или"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"minimal"})," (только изменённые столбцы) режим."]}),n("li",{children:[e("strong",{className:"text-white",children:"Mixed"})," — база сама переключается между SBR и RBR в зависимости от того, безопасен ли конкретный запрос для statement-based репликации."]})]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Уровень: логическая vs физическая"}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Логическая репликация"})," работает с кортежами (тем же SBR/RBR) — она абстрагирована от формата хранения на диске. За счёт этого можно реплицировать между разными версиями СУБД и даже частично — только нужные таблицы (фильтрация)."]}),n("p",{className:"mt-2",children:[e("strong",{className:"text-white",children:"Физическая репликация"})," работает со страницами: slave — побайтовая копия master. Быстрее и надёжнее (движку не нужно ничего интерпретировать), но версии на обеих сторонах обязаны совпадать, и реплицируется всегда всё целиком."]})]})]})}const T=`/**
 * Топология — "кто пишет". Синхронность — "когда клиент получает ACK".
 * Этот паттерн — третья, независимая ось: КАК ИМЕННО изменение физически
 * передаётся с мастера на реплику. Три отдельных вопроса:
 *  - кто инициирует передачу (push/pull);
 *  - что именно передаётся — готовые запросы или готовые строки
 *    (statement-based / row-based / mixed);
 *  - на каком уровне работает репликация — с кортежами или со страницами
 *    на диске (логическая / физическая).
 * Формат — классификация сценариев, а не диаграмма с движением пакетов:
 * тут нечего анимировать, есть только "какой вариант к какой ситуации".
 */

export interface QuizItem<T extends string> {
  id: number;
  prompt: string;
  answer: T;
  explanation: string;
}

// ---------------------------------------------------------------------------
// Источник инициативы: push vs pull
// ---------------------------------------------------------------------------

export type SourceAxis = "push" | "pull";

export const SOURCE_OPTIONS: { id: SourceAxis; label: string }[] = [
  { id: "push", label: "Push" },
  { id: "pull", label: "Pull" },
];

export const SOURCE_QUIZ: QuizItem<SourceAxis>[] = [
  {
    id: 1,
    prompt: "PostgreSQL: мастер сам отправляет WAL-сегменты каждой подключённой реплике.",
    answer: "push",
    explanation: "Мастер инициирует передачу и должен знать обо всех подписанных репликах.",
  },
  {
    id: 2,
    prompt: "MySQL: реплика периодически сама спрашивает у мастера новые события из бинлога.",
    answer: "pull",
    explanation: "Инициатива у реплики — она сама решает, когда и что забрать.",
  },
  {
    id: 3,
    prompt:
      "Реплика была отключена, снова появилась в сети — и сама, без чьей-либо помощи, продолжает читать бинлог с того места, где остановилась.",
    answer: "pull",
    explanation:
      "При pull реплика сама хранит свой прогресс — мастеру не нужно ничего помнить про её состояние.",
  },
  {
    id: 4,
    prompt:
      "Чтобы подключить новую реплику, мастер нужно донастроить — добавить её в список получателей.",
    answer: "push",
    explanation: "Мастер явно держит список подписчиков и рассылает изменения именно им.",
  },
];

// ---------------------------------------------------------------------------
// Что передаётся: statement-based / row-based / mixed
// ---------------------------------------------------------------------------

export type FormatAxis = "statement" | "row" | "mixed";

export const FORMAT_OPTIONS: { id: FormatAxis; label: string }[] = [
  { id: "statement", label: "Statement-based" },
  { id: "row", label: "Row-based" },
  { id: "mixed", label: "Mixed" },
];

export const FORMAT_QUIZ: QuizItem<FormatAxis>[] = [
  {
    id: 1,
    prompt:
      "Реплицируем запрос UPDATE users SET last_seen = NOW() WHERE id = 5 как есть — но NOW() на реплике выполнится в другой момент и даст другое значение.",
    answer: "statement",
    explanation:
      "Классическая проблема SBR: недетерминированные функции (NOW(), random(), unix_timestamp()) на разных нодах дают разный результат.",
  },
  {
    id: 2,
    prompt:
      "Одним UPDATE изменили миллион строк — вместо запроса передаём уже готовый бинарный список изменённых строк.",
    answer: "row",
    explanation:
      "RBR всегда корректен (передаётся результат, а не инструкция), но трафика при массовых изменениях будет намного больше.",
  },
  {
    id: 3,
    prompt:
      "База сама выбирает: детерминированные запросы шлёт компактным SQL-текстом, а как только видит недетерминированную функцию — на этот запрос переключается и шлёт готовые строки.",
    answer: "mixed",
    explanation: "Mixed берёт компактность SBR там, где это безопасно, и надёжность RBR — где нет.",
  },
  {
    id: 4,
    prompt:
      "Изменили только одно поле в одной строке, но по сети целиком уезжает вся строка (minimal-режим смягчает это, передавая только изменённые столбцы).",
    answer: "row",
    explanation: "RBR передаёт готовую сущность целиком (или почти целиком) — это и плата за надёжность.",
  },
];

// ---------------------------------------------------------------------------
// Уровень репликации: логическая vs физическая
// ---------------------------------------------------------------------------

export type LevelAxis = "logical" | "physical";

export const LEVEL_OPTIONS: { id: LevelAxis; label: string }[] = [
  { id: "logical", label: "Логическая" },
  { id: "physical", label: "Физическая" },
];

export const LEVEL_QUIZ: QuizItem<LevelAxis>[] = [
  {
    id: 1,
    prompt: "Реплика — это побайтовая копия страниц мастера; slave = master, версия СУБД обязана совпадать.",
    answer: "physical",
    explanation: "Физическая репликация работает со страницами на диске, а не с содержимым строк.",
  },
  {
    id: 2,
    prompt:
      "Репликация работает с кортежами (строками, SBR/RBR), не зная, как физически устроены страницы на диске.",
    answer: "logical",
    explanation:
      "Логическая репликация абстрагирована от формата хранения — благодаря этому можно реплицировать между разными версиями или даже между разными СУБД.",
  },
  {
    id: 3,
    prompt: "Хотим реплицировать только одну таблицу из всей базы, а не всю базу целиком.",
    answer: "logical",
    explanation:
      "Фильтрация (реплицировать частично) возможна именно на логическом уровне — физическая репликация всегда копирует всё целиком, байт в байт.",
  },
];
`,O=`import { useState } from "react";
import {
  FORMAT_OPTIONS,
  FORMAT_QUIZ,
  LEVEL_OPTIONS,
  LEVEL_QUIZ,
  SOURCE_OPTIONS,
  SOURCE_QUIZ,
  type QuizItem,
} from "./format";

type Tab = "source" | "format" | "level";

const TABS: { id: Tab; label: string; hint: string }[] = [
  {
    id: "source",
    label: "Push / Pull",
    hint: "Кто инициирует передачу изменения — мастер сам рассылает, или реплика сама забирает?",
  },
  {
    id: "format",
    label: "Statement / Row / Mixed",
    hint: "Что именно едет по сети — готовый SQL-запрос или уже готовые изменённые строки?",
  },
  {
    id: "level",
    label: "Логическая / Физическая",
    hint: "На каком уровне работает репликация — с содержимым строк, или со страницами на диске?",
  },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("source");

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

      {tab === "source" && (
        <Quiz key="source" options={SOURCE_OPTIONS} items={SOURCE_QUIZ} hint={TABS[0].hint} />
      )}
      {tab === "format" && (
        <Quiz key="format" options={FORMAT_OPTIONS} items={FORMAT_QUIZ} hint={TABS[1].hint} />
      )}
      {tab === "level" && (
        <Quiz key="level" options={LEVEL_OPTIONS} items={LEVEL_QUIZ} hint={TABS[2].hint} />
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
          <QuizCard
            key={item.id}
            item={item}
            options={options}
            selected={answers[item.id]}
            onSelect={(value) => setAnswers((prev) => ({ ...prev, [item.id]: value }))}
          />
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
          let tone = "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";
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
`,Q={meta:{id:"replication-transfer-format",title:"Репликация: формат передачи данных",category:"architectural",summary:"Push vs pull (кто инициирует), statement-based vs row-based vs mixed (что едет по сети), логическая vs физическая (на каком уровне) — три независимых оси того, как изменение физически доезжает до реплики."},Demo:N,Explanation:R,code:[{filename:"format.ts",language:"typescript",source:T},{filename:"Demo.tsx",language:"tsx",source:O}]};export{Q as default};
