/* empty css              */import{a as e,_ as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as h}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";const b=[{id:"btree",label:"BTree",hint:"сбалансированное дерево, хранит порядок"},{id:"hash",label:"Hash",hint:"хэш ключа → указатель на запись"},{id:"bitmap",label:"Bitmap",hint:"битовая карта на каждое значение"},{id:"spatial",label:"Spatial",hint:"дерево по пространственным координатам"},{id:"reversed",label:"Reversed",hint:"слово → список документов (инвертированный)"}],m=[{id:1,prompt:"Найти все заказы, созданные за последнюю неделю (диапазон дат).",answer:"btree",explanation:"BTree хранит ключи упорядоченными, поэтому умеет отвечать на диапазонные запросы (от…до), а не только на точное совпадение."},{id:2,prompt:"Найти пользователя по точному значению email при логине.",answer:"hash",explanation:"Точное совпадение ключа, порядок и диапазоны не нужны — хэш-индекс даёт O(1) без лишних накладных расходов BTree."},{id:3,prompt:"Отфильтровать 50 миллионов пользователей по полю «пол» — всего 2 уникальных значения на всю таблицу.",answer:"bitmap",explanation:"При низкой кардинальности (мало уникальных значений) битовая карта на значение работает и компактнее, и быстрее, чем BTree с кучей одинаковых ключей."},{id:4,prompt:"Найти все кофейни в радиусе 2 км от текущих координат пользователя.",answer:"spatial",explanation:"Запрос по двумерным координатам и близости — то, для чего нужна пространственная структура (R-tree/quad-tree), а не линейный порядок BTree."},{id:5,prompt:"Найти все документы, в тексте которых встречается слово «рекомендация».",answer:"reversed",explanation:"Полнотекстовый поиск слова по документам — классический инвертированный индекс: слово → список ID документов, где оно встречается."},{id:6,prompt:"Отсортировать каталог товаров по цене от дешёвых к дорогим.",answer:"btree",explanation:"Сортировка и диапазоны — сильная сторона упорядоченного BTree."}];function u(){const[s,l]=h({}),o=Object.keys(s).length,a=m.filter(t=>s[t.id]===t.answer).length;return e("div",{className:"space-y-4",children:[e("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n("p",{className:"text-sm text-slate-400",children:"Для каждого запроса выбери тип индекса, который реально его ускорит."}),e("span",{className:"rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300",children:["верно: ",a," / ",o||"?"]})]}),n("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:m.map(t=>n(w,{prompt:t.prompt,answer:t.answer,explanation:t.explanation,selected:s[t.id],onSelect:i=>l(d=>({...d,[t.id]:i}))},t.id))})]})}function w({prompt:s,answer:l,explanation:o,selected:a,onSelect:t}){const i=a!==void 0,d=a===l;return e("div",{className:["rounded-lg border p-4 transition-colors",i?d?"border-emerald-500 bg-emerald-950/20":"border-rose-500 bg-rose-950/20":"border-slate-700 bg-slate-900/50"].join(" "),children:[n("p",{className:"text-sm text-slate-200",children:s}),n("div",{className:"mt-3 flex flex-wrap gap-2",children:b.map(r=>{const x=a===r.id,c=r.id===l;let p="border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";return i&&c?p="border-emerald-500 bg-emerald-600/20 text-emerald-300":x&&!c&&(p="border-rose-500 bg-rose-600/20 text-rose-300"),n("button",{onClick:()=>t(r.id),title:r.hint,className:`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${p}`,children:r.label},r.id)})}),i&&e("p",{className:"mt-3 text-xs text-slate-400",children:[d?"✅ ":"❌ ",o]})]})}function g(){return e("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:[n("strong",{className:"text-white",children:"Индекс"})," — дополнительная структура данных, которая ускоряет чтение ценой более медленной записи (индекс тоже нужно обновлять при каждом INSERT/UPDATE) и лишней памяти на диске. Индекс — не универсальное «сделать быстрее», а конкретная структура под конкретный характер запроса."]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Пять типов из демо"}),e("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:[n("strong",{children:"BTree"})," — сбалансированное дерево, хранит ключи упорядоченными. Единственный из пяти, кто умеет диапазоны («от … до») и сортировку, а не только точное совпадение."]}),e("li",{children:[n("strong",{children:"Hash"})," — хэш ключа указывает прямо на запись. Только точное совпадение, зато быстрее BTree там, где диапазоны не нужны."]}),e("li",{children:[n("strong",{children:"Bitmap"})," — по биту на каждое возможное значение колонки. Выгоден при низкой кардинальности (мало уникальных значений на много строк) — пол, статус заказа, булевы флаги."]}),e("li",{children:[n("strong",{children:"Spatial"})," — структура вроде R-tree/quad-tree под двумерные (и более) координаты — запросы «что рядом» и «что внутри области»."]}),e("li",{children:[n("strong",{children:"Reversed (инвертированный)"})," — слово → список документов, где оно встречается. Основа полнотекстового поиска (Elasticsearch и внутри самих БД)."]})]})]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Кластерные и некластерные"}),e("p",{className:"mt-2",children:["При наличии ",n("strong",{children:"кластерного"})," индекса строки таблицы физически хранятся в том же порядке, что и значения его ключа — поэтому кластерный индекс может быть только один. Если его нет, таблица — просто неупорядоченная «куча», а любой некластерный индекс на ней хранит лишь указатели на нужные строки, а не сами данные."]})]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Покрывающий индекс"}),e("p",{className:"mt-2",children:["Некластерный индекс называют ",n("strong",{children:"покрывающим"}),", если он сам содержит все колонки, нужные запросу, — тогда ответ отдаётся прямо из индекса, без обращения к самой таблице."]})]}),e("div",{children:[n("h3",{className:"font-semibold text-white",children:"Разряженный индекс"}),e("p",{className:"mt-2",children:[n("strong",{children:"Разряженный (sparse) индекс"})," хранит указатель не на каждую запись, а на блок отсортированного файла данных — компромисс между размером индекса и скоростью: до нужной записи придётся немного досканировать блок, зато сам индекс кратно меньше."]})]})]})}const f=`/**
 * Индексы ускоряют чтение ценой более медленной записи и лишней памяти —
 * поэтому важно понимать не "индекс — это всегда хорошо", а какой ТИП
 * индекса реально решает конкретный характер запроса.
 */

export type IndexType = "btree" | "hash" | "bitmap" | "spatial" | "reversed";

export const INDEX_TYPES: { id: IndexType; label: string; hint: string }[] = [
  { id: "btree", label: "BTree", hint: "сбалансированное дерево, хранит порядок" },
  { id: "hash", label: "Hash", hint: "хэш ключа → указатель на запись" },
  { id: "bitmap", label: "Bitmap", hint: "битовая карта на каждое значение" },
  { id: "spatial", label: "Spatial", hint: "дерево по пространственным координатам" },
  { id: "reversed", label: "Reversed", hint: "слово → список документов (инвертированный)" },
];

export interface IndexQuizItem {
  id: number;
  prompt: string;
  answer: IndexType;
  explanation: string;
}

export const INDEX_QUIZ: IndexQuizItem[] = [
  {
    id: 1,
    prompt: "Найти все заказы, созданные за последнюю неделю (диапазон дат).",
    answer: "btree",
    explanation:
      "BTree хранит ключи упорядоченными, поэтому умеет отвечать на диапазонные запросы (от…до), а не только на точное совпадение.",
  },
  {
    id: 2,
    prompt: "Найти пользователя по точному значению email при логине.",
    answer: "hash",
    explanation:
      "Точное совпадение ключа, порядок и диапазоны не нужны — хэш-индекс даёт O(1) без лишних накладных расходов BTree.",
  },
  {
    id: 3,
    prompt:
      "Отфильтровать 50 миллионов пользователей по полю «пол» — всего 2 уникальных значения на всю таблицу.",
    answer: "bitmap",
    explanation:
      "При низкой кардинальности (мало уникальных значений) битовая карта на значение работает и компактнее, и быстрее, чем BTree с кучей одинаковых ключей.",
  },
  {
    id: 4,
    prompt: "Найти все кофейни в радиусе 2 км от текущих координат пользователя.",
    answer: "spatial",
    explanation:
      "Запрос по двумерным координатам и близости — то, для чего нужна пространственная структура (R-tree/quad-tree), а не линейный порядок BTree.",
  },
  {
    id: 5,
    prompt: "Найти все документы, в тексте которых встречается слово «рекомендация».",
    answer: "reversed",
    explanation:
      "Полнотекстовый поиск слова по документам — классический инвертированный индекс: слово → список ID документов, где оно встречается.",
  },
  {
    id: 6,
    prompt: "Отсортировать каталог товаров по цене от дешёвых к дорогим.",
    answer: "btree",
    explanation: "Сортировка и диапазоны — сильная сторона упорядоченного BTree.",
  },
];
`,v=`import { useState } from "react";
import { INDEX_QUIZ, INDEX_TYPES, type IndexType } from "./indexes";

export function Demo() {
  const [answers, setAnswers] = useState<Record<number, IndexType>>({});
  const answeredCount = Object.keys(answers).length;
  const correctCount = INDEX_QUIZ.filter((item) => answers[item.id] === item.answer).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-400">
          Для каждого запроса выбери тип индекса, который реально его ускорит.
        </p>
        <span className="rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300">
          верно: {correctCount} / {answeredCount || "?"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {INDEX_QUIZ.map((item) => (
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
  answer: IndexType;
  explanation: string;
  selected: IndexType | undefined;
  onSelect: (value: IndexType) => void;
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
        {INDEX_TYPES.map((opt) => {
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
              title={opt.hint}
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
`,y={meta:{id:"db-indexes",title:"Индексы",category:"architectural",summary:"BTree, Hash, Bitmap, Spatial, Reversed — пять типов индексов и к какому характеру запроса какой реально подходит."},Demo:u,Explanation:g,code:[{filename:"indexes.ts",language:"typescript",source:f},{filename:"Demo.tsx",language:"tsx",source:v}]};export{y as default};
