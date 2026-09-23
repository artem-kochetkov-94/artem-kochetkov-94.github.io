/* empty css              */import{a as n,_ as e}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as b}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";const u=[{id:"relational",label:"Реляционные",examples:"MySQL, PostgreSQL"},{id:"document",label:"Документные",examples:"MongoDB, CouchDB"},{id:"graph",label:"Графовые",examples:"Neo4j"},{id:"key-value",label:"Key-value",examples:"Redis, Memcached"},{id:"columnar",label:"Колоночные",examples:"ClickHouse, Cassandra"},{id:"time-series",label:"Time series",examples:"InfluxDB"},{id:"blob",label:"Blob store",examples:"S3, Ceph"}],m=[{id:1,prompt:"Баланс счёта пользователя и история операций — важна строгая целостность и связи между таблицами счетов, операций, пользователей.",answer:"relational",explanation:"Нужны ACID-транзакции и предсказуемые JOIN'ы между связанными таблицами — классический случай для реляционной модели."},{id:2,prompt:"Анкета пользователя: у кого-то заполнены хобби и соцсети, у кого-то нет — набор полей от пользователя к пользователю разный.",answer:"document",explanation:"Схема «гибкая и непостоянная» — не нужно заранее фиксировать все столбцы, документ просто хранит те поля, что есть."},{id:3,prompt:"Кто на кого подписан в соцсети — нужно быстро находить «друзей друзей» и строить рекомендации по связям.",answer:"graph",explanation:"Обходы связей произвольной глубины (друзья друзей друзей) — именно то, для чего графовая модель хранит рёбра как данные первого класса."},{id:4,prompt:"Счётчик просмотров под каждым видео — миллионы простых чтений и инкрементов по одному ключу.",answer:"key-value",explanation:"Запрос предельно простой — value по key, скорость важнее выразительности запросов. Идеально для key-value."},{id:5,prompt:"Логи запросов веб-сервера за последний год — нужно строить аналитические отчёты, агрегируя по отдельным полям (статус-коду, региону, времени).",answer:"columnar",explanation:"Аналитика читает не всю строку, а конкретные колонки сразу по миллионам записей — колоночное хранение читает с диска ровно то, что нужно."},{id:6,prompt:"Показания датчика температуры, поступающие раз в секунду с каждого устройства.",answer:"time-series",explanation:"Данные, привязанные к метке времени, пишутся постоянным потоком и почти всегда читаются по диапазону времени, — специализация time-series баз."},{id:7,prompt:"Хранилище фотографий и видео, загруженных пользователями.",answer:"blob",explanation:"Крупные бинарные файлы, которые нужно просто положить и потом отдать целиком по ссылке, — задача object/blob storage, а не БД с запросами внутрь файла."}];function h(){const[s,o]=b({}),d=Object.keys(s).length,r=m.filter(t=>s[t.id]===t.answer).length;return n("div",{className:"space-y-4",children:[n("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[e("p",{className:"text-sm text-slate-400",children:"Для каждого сценария выбери вид базы данных, который ему реально нужен."}),n("span",{className:"rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300",children:["верно: ",r," / ",d||"?"]})]}),e("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:m.map(t=>e(g,{prompt:t.prompt,answer:t.answer,explanation:t.explanation,selected:s[t.id],onSelect:l=>o(i=>({...i,[t.id]:l}))},t.id))})]})}function g({prompt:s,answer:o,explanation:d,selected:r,onSelect:t}){const l=r!==void 0,i=r===o;return n("div",{className:["rounded-lg border p-4 transition-colors",l?i?"border-emerald-500 bg-emerald-950/20":"border-rose-500 bg-rose-950/20":"border-slate-700 bg-slate-900/50"].join(" "),children:[e("p",{className:"text-sm text-slate-200",children:s}),e("div",{className:"mt-3 flex flex-wrap gap-2",children:u.map(a=>{const x=r===a.id,c=a.id===o;let p="border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";return l&&c?p="border-emerald-500 bg-emerald-600/20 text-emerald-300":x&&!c&&(p="border-rose-500 bg-rose-600/20 text-rose-300"),e("button",{onClick:()=>t(a.id),title:a.examples,className:`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${p}`,children:a.label},a.id)})}),l&&n("p",{className:"mt-3 text-xs text-slate-400",children:[i?"✅ ":"❌ ",d]})]})}function w(){return n("div",{className:"space-y-4 text-slate-300",children:[n("p",{children:[e("strong",{className:"text-white",children:"Вид базы данных"})," — это модель хранения: как данные физически организованы и какие запросы к ним естественно задавать. Правильный выбор определяется не модой на технологию, а тем, ",e("em",{children:"как именно"})," к данным будут обращаться."]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Семь видов"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:[e("strong",{children:"Реляционные"})," — таблицы со строгой схемой и связями через внешние ключи; сильны в JOIN'ах и ACID-транзакциях."]}),n("li",{children:[e("strong",{children:"Документные"})," — JSON-подобные документы без жёсткой общей схемы; удобны, когда набор полей у записей разный."]}),n("li",{children:[e("strong",{children:"Графовые"})," — узлы и рёбра как данные первого класса; сильны там, где важны сами связи, а не только сущности."]}),n("li",{children:[e("strong",{children:"Key-value"})," — простейшая модель: значение по ключу. Максимальная скорость там, где не нужна выразительность запросов."]}),n("li",{children:[e("strong",{children:"Колоночные"})," — хранят данные по столбцам, а не по строкам; читают с диска только нужные колонки — то, что нужно аналитике (OLAP) поверх огромных таблиц."]}),n("li",{children:[e("strong",{children:"Time series"})," — специализация под данные, привязанные к метке времени: постоянный поток записи, запросы почти всегда по диапазону времени."]}),n("li",{children:[e("strong",{children:"Blob store"})," — не совсем «база данных» в обычном смысле: просто хранилище крупных бинарных объектов (файлов) по ключу/ссылке, без запросов внутрь содержимого."]})]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"На что смотреть при выборе"}),e("p",{className:"mt-2",children:"Нужны ли транзакции? Насколько стабилен формат данных? Какой характер обращений — точечные чтения по ключу или сканы и агрегации? Достаточно ли зрелое сообщество вокруг технологии? Владеет ли команда этим инструментом? Реальные системы почти всегда используют несколько видов баз одновременно, каждый под свою задачу, а не одну «универсальную» на всё."})]})]})}const y=`/**
 * Виды баз данных — семь моделей хранения из FAQ слайда: у каждой свой
 * "родной" паттерн доступа к данным, и часто именно характер обращений
 * (а не любовь к конкретной технологии) должен определять выбор. Формат —
 * тот же, что и в "Классах БД": сценарий → какой вид базы ему на самом деле
 * нужен.
 */

export type DatabaseType =
  | "relational"
  | "document"
  | "graph"
  | "key-value"
  | "columnar"
  | "time-series"
  | "blob";

export const DATABASE_TYPES: { id: DatabaseType; label: string; examples: string }[] = [
  { id: "relational", label: "Реляционные", examples: "MySQL, PostgreSQL" },
  { id: "document", label: "Документные", examples: "MongoDB, CouchDB" },
  { id: "graph", label: "Графовые", examples: "Neo4j" },
  { id: "key-value", label: "Key-value", examples: "Redis, Memcached" },
  { id: "columnar", label: "Колоночные", examples: "ClickHouse, Cassandra" },
  { id: "time-series", label: "Time series", examples: "InfluxDB" },
  { id: "blob", label: "Blob store", examples: "S3, Ceph" },
];

export interface TypeQuizItem {
  id: number;
  prompt: string;
  answer: DatabaseType;
  explanation: string;
}

export const TYPE_QUIZ: TypeQuizItem[] = [
  {
    id: 1,
    prompt:
      "Баланс счёта пользователя и история операций — важна строгая целостность и связи между таблицами счетов, операций, пользователей.",
    answer: "relational",
    explanation:
      "Нужны ACID-транзакции и предсказуемые JOIN'ы между связанными таблицами — классический случай для реляционной модели.",
  },
  {
    id: 2,
    prompt:
      "Анкета пользователя: у кого-то заполнены хобби и соцсети, у кого-то нет — набор полей от пользователя к пользователю разный.",
    answer: "document",
    explanation:
      "Схема «гибкая и непостоянная» — не нужно заранее фиксировать все столбцы, документ просто хранит те поля, что есть.",
  },
  {
    id: 3,
    prompt:
      "Кто на кого подписан в соцсети — нужно быстро находить «друзей друзей» и строить рекомендации по связям.",
    answer: "graph",
    explanation:
      "Обходы связей произвольной глубины (друзья друзей друзей) — именно то, для чего графовая модель хранит рёбра как данные первого класса.",
  },
  {
    id: 4,
    prompt: "Счётчик просмотров под каждым видео — миллионы простых чтений и инкрементов по одному ключу.",
    answer: "key-value",
    explanation:
      "Запрос предельно простой — value по key, скорость важнее выразительности запросов. Идеально для key-value.",
  },
  {
    id: 5,
    prompt:
      "Логи запросов веб-сервера за последний год — нужно строить аналитические отчёты, агрегируя по отдельным полям (статус-коду, региону, времени).",
    answer: "columnar",
    explanation:
      "Аналитика читает не всю строку, а конкретные колонки сразу по миллионам записей — колоночное хранение читает с диска ровно то, что нужно.",
  },
  {
    id: 6,
    prompt: "Показания датчика температуры, поступающие раз в секунду с каждого устройства.",
    answer: "time-series",
    explanation:
      "Данные, привязанные к метке времени, пишутся постоянным потоком и почти всегда читаются по диапазону времени, — специализация time-series баз.",
  },
  {
    id: 7,
    prompt: "Хранилище фотографий и видео, загруженных пользователями.",
    answer: "blob",
    explanation:
      "Крупные бинарные файлы, которые нужно просто положить и потом отдать целиком по ссылке, — задача object/blob storage, а не БД с запросами внутрь файла.",
  },
];
`,f=`import { useState } from "react";
import { DATABASE_TYPES, TYPE_QUIZ, type DatabaseType } from "./types";

export function Demo() {
  const [answers, setAnswers] = useState<Record<number, DatabaseType>>({});
  const answeredCount = Object.keys(answers).length;
  const correctCount = TYPE_QUIZ.filter((item) => answers[item.id] === item.answer).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-400">
          Для каждого сценария выбери вид базы данных, который ему реально нужен.
        </p>
        <span className="rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300">
          верно: {correctCount} / {answeredCount || "?"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {TYPE_QUIZ.map((item) => (
          <QuizCard
            key={item.id}
            prompt={item.prompt}
            answer={item.answer}
            explanation={item.explanation}
            selected={answers[item.id]}
            onSelect={(value) => setAnswers((prev) => ({ ...prev, [item.id]: value }))}
          />
        ))}
      </div>
    </div>
  );
}

function QuizCard({
  prompt,
  answer,
  explanation,
  selected,
  onSelect,
}: {
  prompt: string;
  answer: DatabaseType;
  explanation: string;
  selected: DatabaseType | undefined;
  onSelect: (value: DatabaseType) => void;
}) {
  const answered = selected !== undefined;
  const isCorrect = selected === answer;

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
      <p className="text-sm text-slate-200">{prompt}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {DATABASE_TYPES.map((opt) => {
          const isSelected = selected === opt.id;
          const isTheAnswer = opt.id === answer;
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
              title={opt.examples}
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
          {explanation}
        </p>
      )}
    </div>
  );
}
`,S={meta:{id:"database-types",title:"Виды баз данных",category:"architectural",summary:"Реляционные, документные, графовые, key-value, колоночные, time series, blob store — семь моделей хранения и к какому сценарию какая реально подходит."},Demo:h,Explanation:w,code:[{filename:"types.ts",language:"typescript",source:y},{filename:"Demo.tsx",language:"tsx",source:f}]};export{S as default};
