/* empty css              */import{_ as r,a as i}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as p,d as u}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as g}from"./proxy-BroObIT1.js";const l=[{id:"root",label:"",parentId:null,leaf:null,pos:{x:300,y:30}},{id:"p",label:"п",parentId:"root",leaf:null,pos:{x:190,y:100}},{id:"privet",label:"ривет",parentId:"p",leaf:{word:"привет",count:10},pos:{x:90,y:180}},{id:"po",label:"о",parentId:"p",leaf:null,pos:{x:280,y:180}},{id:"pochta",label:"чта",parentId:"po",leaf:{word:"почта",count:5},pos:{x:220,y:250}},{id:"poka",label:"ка",parentId:"po",leaf:{word:"пока",count:4},pos:{x:340,y:250}},{id:"may",label:"май",parentId:"root",leaf:{word:"май",count:2},pos:{x:460,y:100}}];function c(o){return l.find(e=>e.id===o)}function m(o){let e=o;const n=[];for(;e&&e.id!=="root";)n.unshift(e.label),e=e.parentId?c(e.parentId):void 0;return n.join("")}function x(o){const e=o.trim().toLowerCase(),n=new Set,t=[];if(!e)return{highlightedNodeIds:n,suggestions:t};for(const a of l){if(!a.leaf)continue;const s=m(a);if(s.startsWith(e)){t.push({word:s,count:a.leaf.count});let d=a;for(;d;)n.add(d.id),d=d.parentId?c(d.parentId):void 0}}return t.sort((a,s)=>s.count-a.count),{highlightedNodeIds:n,suggestions:t}}const f=540,h=290;function b({highlighted:o}){return r("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:i("svg",{viewBox:`0 0 ${f} ${h}`,className:"h-auto w-full",role:"img","aria-label":"Сжатое префиксное дерево",children:[l.filter(e=>e.parentId).map(e=>{const n=c(e.parentId),t=o.has(e.id)&&o.has(n.id);return r("line",{x1:n.pos.x,y1:n.pos.y,x2:e.pos.x,y2:e.pos.y,stroke:t?"rgb(129 140 248)":"rgb(51 65 85)",strokeWidth:t?2.5:2},`edge-${e.id}`)}),l.map(e=>{const n=o.has(e.id),t=!!e.leaf,a=e.id==="root",s=a?6:20;return i("g",{children:[r(g.circle,{cx:e.pos.x,cy:e.pos.y,r:s,fill:a?"rgb(71 85 105)":n?"rgb(49 46 129)":"rgb(30 41 59)",stroke:n?"rgb(129 140 248)":t?"rgb(100 116 139)":"rgb(71 85 105)",strokeWidth:n?2.5:1.5,strokeDasharray:t&&!n?"3 3":void 0,animate:n?{scale:[1,1.15,1]}:{scale:1},style:{transformOrigin:`${e.pos.x}px ${e.pos.y}px`},transition:{duration:.35}}),!a&&r("text",{x:e.pos.x,y:e.pos.y-s-8,textAnchor:"middle",fill:n?"white":"rgb(148 163 184)",fontSize:13,fontWeight:600,children:e.label}),e.leaf&&i("text",{x:e.pos.x,y:e.pos.y+s+16,textAnchor:"middle",fill:n?"rgb(199 210 254)":"rgb(100 116 139)",fontSize:11,fontFamily:"monospace",children:["×",e.leaf.count]})]},e.id)})]})})}const y=["п","по","прив","май"];function N(){const[o,e]=p("п"),n=u(()=>x(o),[o]);return i("div",{className:"space-y-6",children:[r("p",{className:"text-sm text-slate-400",children:"Начни вводить слово — подсветится путь по дереву, а ниже появятся подсказки, отсортированные по популярности."}),i("div",{className:"flex flex-wrap items-center gap-2",children:[r("input",{value:o,onChange:t=>e(t.target.value),placeholder:"Введи префикс, напр. «п»",className:"w-56 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"}),r("div",{className:"flex flex-wrap gap-1.5",children:y.map(t=>r("button",{onClick:()=>e(t),className:"rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-300 hover:border-slate-500 hover:text-white",children:t},t))})]}),r(b,{highlighted:n.highlightedNodeIds}),i("div",{children:[r("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"Подсказки (по убыванию популярности)"}),n.suggestions.length===0?r("p",{className:"text-sm text-slate-600",children:"Совпадений нет."}):r("div",{className:"flex flex-wrap gap-2",children:n.suggestions.map(t=>i("span",{className:"rounded-md border border-indigo-500 bg-indigo-950/40 px-3 py-1.5 font-mono text-sm text-indigo-200",children:[t.word," ",i("span",{className:"text-indigo-400",children:["×",t.count]})]},t.word))})]})]})}function v(){return i("div",{className:"space-y-4 text-slate-300",children:[r("p",{children:"Автодополнение — поиск по префиксу: пользователь ввёл несколько символов, нужно за миллисекунды вернуть список слов, начинающихся с них, отсортированный по популярности. Перебирать все слова на каждый ввод символа — слишком медленно при большом словаре."}),i("div",{children:[r("h3",{className:"font-semibold text-white",children:"Trie (префиксное дерево)"}),r("p",{className:"mt-2",children:"Структура, где путь от корня до узла — это префикс. Все слова с общим началом делят общий путь в дереве, поэтому поиск по префиксу — это просто спуск по дереву на длину префикса, а не сравнение с каждым словом словаря по отдельности."})]}),i("div",{children:[r("h3",{className:"font-semibold text-white",children:"Сжатие (radix tree)"}),r("p",{className:"mt-2",children:"Наивный trie хранит один символ на узел — для длинных слов с уникальными хвостами это расточительно по памяти. Сжатая версия схлопывает цепочки узлов с единственным потомком в одно ребро с несколькими символами (как «ривет» на ребре, а не р-и-в-е-т по узлу на букву) — в демо рядом используется именно она."})]}),i("div",{children:[r("h3",{className:"font-semibold text-white",children:"Как индекс обновляется"}),r("p",{className:"mt-2",children:"Пул автодополнения — это отдельный, оптимизированный только под чтение сервис. Он не обновляется в реальном времени на каждый чих: запросы пользователей логируются через очередь в Analytics/OLAP, а сам индекс (trie с частотами) пересобирается из OLAP пакетно — например, раз в день. Пользователь ищет по вчерашней статистике популярности, зато сам поиск — за микросекунды и без нагрузки на основную базу."})]})]})}const w=`/**
 * Автодополнение — классическая задача поиска по префиксу, и классическая
 * структура для неё — Trie (префиксное дерево), точнее — его сжатая
 * версия (radix tree): общие последовательности символов схлопываются в
 * одно ребро, а не хранятся по символу на узел.
 *
 * На каждом листе — счётчик популярности (сколько раз это слово реально
 * искали), чтобы подсказки сортировались по частоте, а не по алфавиту.
 */

export interface TrieNode {
  id: string;
  /** Символы на этом ребре (может быть несколько — "ривет", а не по одной букве). */
  label: string;
  parentId: string | null;
  /** Заполнено только у листьев — итоговое слово целиком и его популярность. */
  leaf: { word: string; count: number } | null;
  pos: { x: number; y: number };
}

export const TRIE_NODES: TrieNode[] = [
  { id: "root", label: "", parentId: null, leaf: null, pos: { x: 300, y: 30 } },
  { id: "p", label: "п", parentId: "root", leaf: null, pos: { x: 190, y: 100 } },
  { id: "privet", label: "ривет", parentId: "p", leaf: { word: "привет", count: 10 }, pos: { x: 90, y: 180 } },
  { id: "po", label: "о", parentId: "p", leaf: null, pos: { x: 280, y: 180 } },
  { id: "pochta", label: "чта", parentId: "po", leaf: { word: "почта", count: 5 }, pos: { x: 220, y: 250 } },
  { id: "poka", label: "ка", parentId: "po", leaf: { word: "пока", count: 4 }, pos: { x: 340, y: 250 } },
  { id: "may", label: "май", parentId: "root", leaf: { word: "май", count: 2 }, pos: { x: 460, y: 100 } },
];

export function getNode(id: string): TrieNode {
  return TRIE_NODES.find((n) => n.id === id)!;
}

/** Полное слово по пути от корня до узла (конкатенация меток по пути). */
function wordUpTo(node: TrieNode): string {
  let cur: TrieNode | undefined = node;
  const parts: string[] = [];
  while (cur && cur.id !== "root") {
    parts.unshift(cur.label);
    cur = cur.parentId ? getNode(cur.parentId) : undefined;
  }
  return parts.join("");
}

export interface PrefixMatch {
  /** id узлов на пути, покрывающих введённый префикс (для подсветки). */
  highlightedNodeIds: Set<string>;
  suggestions: { word: string; count: number }[];
}

/** Ищем все листья, чьё слово начинается с введённого префикса, и путь до них для подсветки. */
export function matchPrefix(prefix: string): PrefixMatch {
  const normalized = prefix.trim().toLowerCase();
  const highlightedNodeIds = new Set<string>();
  const suggestions: { word: string; count: number }[] = [];

  if (!normalized) {
    return { highlightedNodeIds, suggestions };
  }

  for (const node of TRIE_NODES) {
    if (!node.leaf) continue;
    const word = wordUpTo(node);
    if (word.startsWith(normalized)) {
      suggestions.push({ word, count: node.leaf.count });
      // подсвечиваем путь от корня до этого листа
      let cur: TrieNode | undefined = node;
      while (cur) {
        highlightedNodeIds.add(cur.id);
        cur = cur.parentId ? getNode(cur.parentId) : undefined;
      }
    }
  }

  suggestions.sort((a, b) => b.count - a.count);
  return { highlightedNodeIds, suggestions };
}
`,I=`import { motion } from "framer-motion";
import { TRIE_NODES, getNode } from "./trie";

const W = 540;
const H = 290;

export function TrieDiagram({ highlighted }: { highlighted: Set<string> }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Сжатое префиксное дерево">
        {TRIE_NODES.filter((n) => n.parentId).map((n) => {
          const parent = getNode(n.parentId!);
          const active = highlighted.has(n.id) && highlighted.has(parent.id);
          return (
            <line
              key={\`edge-\${n.id}\`}
              x1={parent.pos.x}
              y1={parent.pos.y}
              x2={n.pos.x}
              y2={n.pos.y}
              stroke={active ? "rgb(129 140 248)" : "rgb(51 65 85)"}
              strokeWidth={active ? 2.5 : 2}
            />
          );
        })}

        {TRIE_NODES.map((n) => {
          const active = highlighted.has(n.id);
          const isLeaf = !!n.leaf;
          const isRoot = n.id === "root";
          const r = isRoot ? 6 : 20;
          return (
            <g key={n.id}>
              <motion.circle
                cx={n.pos.x}
                cy={n.pos.y}
                r={r}
                fill={isRoot ? "rgb(71 85 105)" : active ? "rgb(49 46 129)" : isLeaf ? "rgb(30 41 59)" : "rgb(30 41 59)"}
                stroke={active ? "rgb(129 140 248)" : isLeaf ? "rgb(100 116 139)" : "rgb(71 85 105)"}
                strokeWidth={active ? 2.5 : 1.5}
                strokeDasharray={isLeaf && !active ? "3 3" : undefined}
                animate={active ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                style={{ transformOrigin: \`\${n.pos.x}px \${n.pos.y}px\` }}
                transition={{ duration: 0.35 }}
              />
              {!isRoot && (
                <text
                  x={n.pos.x}
                  y={n.pos.y - r - 8}
                  textAnchor="middle"
                  fill={active ? "white" : "rgb(148 163 184)"}
                  fontSize={13}
                  fontWeight={600}
                >
                  {n.label}
                </text>
              )}
              {n.leaf && (
                <text
                  x={n.pos.x}
                  y={n.pos.y + r + 16}
                  textAnchor="middle"
                  fill={active ? "rgb(199 210 254)" : "rgb(100 116 139)"}
                  fontSize={11}
                  fontFamily="monospace"
                >
                  ×{n.leaf.count}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
`,T=`import { useMemo, useState } from "react";
import { matchPrefix } from "./trie";
import { TrieDiagram } from "./TrieDiagram";

const PRESETS = ["п", "по", "прив", "май"];

export function Demo() {
  const [prefix, setPrefix] = useState("п");
  const match = useMemo(() => matchPrefix(prefix), [prefix]);

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-400">
        Начни вводить слово — подсветится путь по дереву, а ниже появятся подсказки, отсортированные по популярности.
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <input
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          placeholder="Введи префикс, напр. «п»"
          className="w-56 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
        />
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => setPrefix(p)}
              className="rounded-full border border-slate-700 px-3 py-1 font-mono text-xs text-slate-300 hover:border-slate-500 hover:text-white"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <TrieDiagram highlighted={match.highlightedNodeIds} />

      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">Подсказки (по убыванию популярности)</p>
        {match.suggestions.length === 0 ? (
          <p className="text-sm text-slate-600">Совпадений нет.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {match.suggestions.map((s) => (
              <span
                key={s.word}
                className="rounded-md border border-indigo-500 bg-indigo-950/40 px-3 py-1.5 font-mono text-sm text-indigo-200"
              >
                {s.word} <span className="text-indigo-400">×{s.count}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
`,D={meta:{id:"autocomplete-trie",title:"Автодополнение: Trie",category:"architectural",summary:"Сжатое префиксное дерево (radix tree) с частотами на листьях — вводишь префикс, видишь путь по дереву и подсказки, отсортированные по популярности."},Demo:N,Explanation:v,code:[{filename:"trie.ts",language:"typescript",source:w},{filename:"TrieDiagram.tsx",language:"tsx",source:I},{filename:"Demo.tsx",language:"tsx",source:T}]};export{D as default};
