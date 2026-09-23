/* empty css              */import{a as o,_ as e}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as x,e as f}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as g}from"./proxy-BroObIT1.js";const w=`Welcome to Hadoop
Class Hadoop is
good Hadoop is
bad`,N=["Welcome to Hadoop","Class Hadoop is","good Hadoop is","bad"],S=[[{word:"Welcome",count:1},{word:"to",count:1},{word:"Hadoop",count:1}],[{word:"Class",count:1},{word:"Hadoop",count:1},{word:"is",count:1}],[{word:"good",count:1},{word:"Hadoop",count:1},{word:"is",count:1}],[{word:"bad",count:1}]],b=[{word:"bad",counts:[1]},{word:"Class",counts:[1]},{word:"good",counts:[1]},{word:"Hadoop",counts:[1,1,1]},{word:"is",counts:[1,1]},{word:"to",counts:[1]},{word:"Welcome",counts:[1]}],y=b.map(t=>({word:t.word,count:t.counts.reduce((a,s)=>a+s,0)})),v=[{id:"input",label:"Исходный текст",description:"Один большой текст, который нужно посчитать по словам."},{id:"cut",label:"Cut",description:"Текст режется на независимые куски (строки) — каждый можно обработать на своей машине."},{id:"map",label:"Map",description:"Каждая строка независимо превращается в пары (слово, 1) — Map-задачи не общаются друг с другом."},{id:"shuffle",label:"Shuffle",description:"Все пары перемешиваются и группируются по ключу (слову), собирая вместе результаты с разных машин."},{id:"reduce",label:"Reduce",description:"Каждая группа сворачивается в одно значение — здесь просто суммой. Итог: точное количество каждого слова."}],l=["input","cut","map","shuffle","reduce"];function E(){const[t,a]=x(0),[s,d]=x(!1),u=t>=l.length-1;f(()=>{if(!s)return;if(u){d(!1);return}const n=setTimeout(()=>a(r=>r+1),1600);return()=>clearTimeout(n)},[s,u,t]);const i=new Set(l.slice(0,t+1)),m=v[t];return o("div",{className:"space-y-6",children:[o("div",{className:"flex flex-wrap gap-4 overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[i.has("input")&&e(c,{title:"Input",children:e(p,{children:w.split(`
`).join(" / ")})}),i.has("cut")&&e(c,{title:"Cut",children:N.map((n,r)=>e(p,{children:n},r))}),i.has("map")&&e(c,{title:"Map",children:S.map((n,r)=>e(p,{children:n.map(h=>`${h.word} = ${h.count}`).join(`
`)},r))}),i.has("shuffle")&&e(c,{title:"Shuffle",children:b.map(n=>o(p,{children:[n.word," = ",n.counts.join(", ")]},n.word))}),i.has("reduce")&&e(c,{title:"Reduce",children:y.map(n=>o(p,{highlight:!0,children:[n.word," = ",n.count]},n.word))})]}),o("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:m.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:m.description})]}),o("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{a(0),d(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{d(!1),a(n=>Math.max(0,n-1))},disabled:t===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>d(n=>!n),disabled:u,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:s?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{d(!1),a(n=>Math.min(l.length-1,n+1))},disabled:u,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),o("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[t+1," / ",l.length]})]}),e("input",{type:"range",min:0,max:l.length-1,value:t,onChange:n=>{d(!1),a(Number(n.target.value))},className:"w-full accent-indigo-500"})]})}function c({title:t,children:a}){return o(g.div,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{duration:.35},className:"flex min-w-[140px] flex-1 flex-col gap-2",children:[e("p",{className:"text-center text-xs font-semibold uppercase tracking-wider text-slate-500",children:t}),a]})}function p({children:t,highlight:a}){return e("div",{className:["whitespace-pre-line rounded-md border px-3 py-2 text-center font-mono text-xs",a?"border-emerald-500 bg-emerald-950/30 text-emerald-300":"border-slate-700 bg-slate-800/60 text-slate-300"].join(" "),children:t})}function P(){return o("div",{className:"space-y-4 text-slate-300",children:[o("p",{children:[e("strong",{className:"text-white",children:"MapReduce"})," — модель обработки огромных объёмов данных, которые не помещаются (и не должны обрабатываться) на одной машине. Задача разбивается на фазы, каждая из которых естественно параллелится."]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Map"}),e("p",{className:"mt-2",children:"Входные данные режутся на независимые куски, и каждый кусок обрабатывается ОТДЕЛЬНО, без общения с другими Map-задачами. Результат — набор пар (ключ, значение). В word count ключ — слово, значение — единица (одно вхождение)."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Shuffle"}),e("p",{className:"mt-2",children:"Все пары со всех машин перемешиваются и группируются по ключу — одинаковые ключи собираются вместе, независимо от того, где именно они были посчитаны. Это единственная фаза, где данные реально перемещаются между узлами кластера."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Reduce"}),e("p",{className:"mt-2",children:"Каждая группа сворачивается в одно итоговое значение. В word count — суммой всех единиц по каждому слову, но операция может быть любой ассоциативной: максимум, среднее, конкатенация."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Почему это масштабируется"}),e("p",{className:"mt-2",children:"Map-задачи полностью независимы друг от друга — их можно раскидать по сколь угодно большому кластеру машин без координации между ними. Единственная точка синхронизации — Shuffle, и даже она делается инкрементально, по мере готовности Map-результатов. Hadoop, Spark и большинство систем batch-аналитики построены на этой идее."})]})]})}const C=`/**
 * MapReduce — модель обработки больших объёмов данных, разбитая на три
 * фазы, каждая из которых легко параллелится по множеству машин:
 *  - Map — независимо обрабатываем каждый маленький кусок входных данных,
 *    превращая его в пары (ключ, значение);
 *  - Shuffle — группируем пары по ключу, собирая одинаковые ключи вместе
 *    независимо от того, на какой машине они были посчитаны;
 *  - Reduce — сворачиваем каждую группу в одно итоговое значение.
 * Классический пример — word count: посчитать, сколько раз встречается
 * каждое слово в тексте.
 */

export const INPUT_TEXT = "Welcome to Hadoop\\nClass Hadoop is\\ngood Hadoop is\\nbad";

export const CUT_LINES = ["Welcome to Hadoop", "Class Hadoop is", "good Hadoop is", "bad"];

export interface WordPair {
  word: string;
  count: number;
}

/** Map: каждая строка — независимо превращается в пары (слово, 1). */
export const MAP_OUTPUT: WordPair[][] = [
  [
    { word: "Welcome", count: 1 },
    { word: "to", count: 1 },
    { word: "Hadoop", count: 1 },
  ],
  [
    { word: "Class", count: 1 },
    { word: "Hadoop", count: 1 },
    { word: "is", count: 1 },
  ],
  [
    { word: "good", count: 1 },
    { word: "Hadoop", count: 1 },
    { word: "is", count: 1 },
  ],
  [{ word: "bad", count: 1 }],
];

/** Shuffle: те же пары, но сгруппированные по слову — независимо от того, из какой строки они пришли. */
export const SHUFFLE_GROUPS: { word: string; counts: number[] }[] = [
  { word: "bad", counts: [1] },
  { word: "Class", counts: [1] },
  { word: "good", counts: [1] },
  { word: "Hadoop", counts: [1, 1, 1] },
  { word: "is", counts: [1, 1] },
  { word: "to", counts: [1] },
  { word: "Welcome", counts: [1] },
];

/** Reduce: каждая группа сворачивается суммой в одно значение. */
export const REDUCE_OUTPUT: WordPair[] = SHUFFLE_GROUPS.map((g) => ({
  word: g.word,
  count: g.counts.reduce((a, b) => a + b, 0),
}));

export type MapReducePhase = "input" | "cut" | "map" | "shuffle" | "reduce";

export const PHASES: { id: MapReducePhase; label: string; description: string }[] = [
  {
    id: "input",
    label: "Исходный текст",
    description: "Один большой текст, который нужно посчитать по словам.",
  },
  {
    id: "cut",
    label: "Cut",
    description: "Текст режется на независимые куски (строки) — каждый можно обработать на своей машине.",
  },
  {
    id: "map",
    label: "Map",
    description: "Каждая строка независимо превращается в пары (слово, 1) — Map-задачи не общаются друг с другом.",
  },
  {
    id: "shuffle",
    label: "Shuffle",
    description: "Все пары перемешиваются и группируются по ключу (слову), собирая вместе результаты с разных машин.",
  },
  {
    id: "reduce",
    label: "Reduce",
    description: "Каждая группа сворачивается в одно значение — здесь просто суммой. Итог: точное количество каждого слова.",
  },
];
`,R=`import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  CUT_LINES,
  INPUT_TEXT,
  MAP_OUTPUT,
  PHASES,
  REDUCE_OUTPUT,
  SHUFFLE_GROUPS,
  type MapReducePhase,
} from "./mapreduce";

const PHASE_ORDER: MapReducePhase[] = ["input", "cut", "map", "shuffle", "reduce"];

export function Demo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= PHASE_ORDER.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), 1600);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const visible = new Set(PHASE_ORDER.slice(0, stepIndex + 1));
  const phase = PHASES[stepIndex];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 overflow-x-auto rounded-lg border border-slate-800 bg-slate-900/50 p-4">
        {visible.has("input") && (
          <Column title="Input">
            <Box>{INPUT_TEXT.split("\\n").join(" / ")}</Box>
          </Column>
        )}

        {visible.has("cut") && (
          <Column title="Cut">
            {CUT_LINES.map((line, i) => (
              <Box key={i}>{line}</Box>
            ))}
          </Column>
        )}

        {visible.has("map") && (
          <Column title="Map">
            {MAP_OUTPUT.map((group, i) => (
              <Box key={i}>{group.map((p) => \`\${p.word} = \${p.count}\`).join("\\n")}</Box>
            ))}
          </Column>
        )}

        {visible.has("shuffle") && (
          <Column title="Shuffle">
            {SHUFFLE_GROUPS.map((g) => (
              <Box key={g.word}>
                {g.word} = {g.counts.join(", ")}
              </Box>
            ))}
          </Column>
        )}

        {visible.has("reduce") && (
          <Column title="Reduce">
            {REDUCE_OUTPUT.map((p) => (
              <Box key={p.word} highlight>
                {p.word} = {p.count}
              </Box>
            ))}
          </Column>
        )}
      </div>

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{phase.label}</p>
        <p className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {phase.description}
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
            setStepIndex((i) => Math.min(PHASE_ORDER.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {PHASE_ORDER.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={PHASE_ORDER.length - 1}
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

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="flex min-w-[140px] flex-1 flex-col gap-2"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
      {children}
    </motion.div>
  );
}

function Box({ children, highlight }: { children: ReactNode; highlight?: boolean }) {
  return (
    <div
      className={[
        "whitespace-pre-line rounded-md border px-3 py-2 text-center font-mono text-xs",
        highlight
          ? "border-emerald-500 bg-emerald-950/30 text-emerald-300"
          : "border-slate-700 bg-slate-800/60 text-slate-300",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
`,M={meta:{id:"map-reduce",title:"MapReduce",category:"architectural",summary:"Word count пошагово: Cut → Map → Shuffle → Reduce. Как задача обработки текста разбивается на независимо параллелящиеся фазы."},Demo:E,Explanation:P,code:[{filename:"mapreduce.ts",language:"typescript",source:C},{filename:"Demo.tsx",language:"tsx",source:R}]};export{M as default};
