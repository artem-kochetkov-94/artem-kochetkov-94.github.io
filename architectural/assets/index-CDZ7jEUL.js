/* empty css              */import{_ as t,a as n,b as w}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as g}from"./proxy-BroObIT1.js";const b=100500;function _(){return{partitioned:!1,mode:"CP",nodeAValue:b,nodeBValue:b}}function C(e){const o=e.nodeAValue+1;return{...e,nodeAValue:o,nodeBValue:e.partitioned?e.nodeBValue:o}}function v(e){if(!e.partitioned)return{ok:!0,value:e.nodeBValue,stale:!1,message:"Связь есть, узел отвечает актуальным значением."};if(e.mode==="CP")return{ok:!1,stale:!1,message:"Node B недоступна: без связи с Node A она не может гарантировать актуальность — и лучше откажет, чем соврёт."};const o=e.nodeBValue!==e.nodeAValue;return{ok:!0,value:e.nodeBValue,stale:o,message:o?"Node B отвечает тем, что у неё есть — но это уже не совпадает с Node A (stale read).":"Node B отвечает — значения пока совпадают, разрыв ещё не успел ничего испортить."}}function O(e){if(e.partitioned){const o=Math.max(e.nodeAValue,e.nodeBValue);return{...e,partitioned:!1,nodeAValue:o,nodeBValue:o}}return{...e,partitioned:!0}}const k=480,V=200,h=150,p=64,r={x:120,y:100},l={x:360,y:100};function f(e){return{x:e.x-h/2,y:e.y-p/2}}function R({state:e,flashA:o,flashB:a,bTone:s}){const d=f(r),c=f(l),x=s==="down"?"rgb(76 5 25)":s==="stale"?"rgb(69 26 3)":"rgb(30 41 59)",u=s==="down"?"rgb(244 63 94)":s==="stale"?"rgb(245 158 11)":"rgb(71 85 105)";return t("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:n("svg",{viewBox:`0 0 ${k} ${V}`,className:"h-auto w-full",role:"img","aria-label":"Узлы A и B, связь между ними",children:[e.partitioned?n(w,{children:[t("line",{x1:r.x,y1:r.y,x2:l.x,y2:l.y,stroke:"rgb(244 63 94)",strokeWidth:2.5,strokeDasharray:"6 5"}),t("text",{x:(r.x+l.x)/2,y:r.y-16,textAnchor:"middle",fill:"rgb(244 63 94)",fontSize:20,fontWeight:700,children:"✕"})]}):t("line",{x1:r.x,y1:r.y,x2:l.x,y2:l.y,stroke:"rgb(71 85 105)",strokeWidth:2}),n("g",{children:[t(g.rect,{x:d.x,y:d.y,width:h,height:p,rx:10,fill:"rgb(49 46 129)",stroke:"rgb(129 140 248)",strokeWidth:2.5,animate:{scale:[1,1.05,1]},style:{transformOrigin:`${r.x}px ${r.y}px`},transition:{duration:.4}},o),t("text",{x:r.x,y:r.y-6,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:"Node A"}),t("text",{x:r.x,y:r.y+16,textAnchor:"middle",fill:"rgb(199 210 254)",fontSize:13,fontFamily:"monospace",children:e.nodeAValue})]}),n("g",{children:[t(g.rect,{x:c.x,y:c.y,width:h,height:p,rx:10,fill:x,stroke:u,strokeWidth:2.5,animate:{scale:[1,1.05,1]},style:{transformOrigin:`${l.x}px ${l.y}px`},transition:{duration:.4}},a),t("text",{x:l.x,y:l.y-6,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:"Node B"}),t("text",{x:l.x,y:l.y+16,textAnchor:"middle",fill:s==="down"?"rgb(253 164 175)":"rgb(226 232 240)",fontSize:13,fontFamily:"monospace",children:s==="down"?"недоступна":e.nodeBValue})]})]})})}const A=[{id:"CP",label:"CP — жертвуем доступностью",hint:"Пока связи нет, Node B лучше откажет в ответе, чем отдаст то, что может оказаться неактуальным."},{id:"AP",label:"AP — жертвуем согласованностью",hint:"Node B продолжает отвечать даже без связи с Node A — рискуя отдать устаревшее значение."}];function W(){const[e,o]=m(_),[a,s]=m(null),[d,c]=m("idle-a"),[x,u]=m("idle-b"),y=()=>{o(i=>C(i)),s(null),c(`write-${Date.now()}`)},N=()=>{const i=v(e);s(i),u(`read-${Date.now()}`)},B=()=>{o(i=>O(i)),s(null)},S=e.partitioned?a&&!a.ok?"down":a!=null&&a.stale?"stale":"up":"up";return n("div",{className:"space-y-6",children:[t("div",{className:"flex flex-wrap gap-2",children:A.map(i=>t("button",{onClick:()=>o(P=>({...P,mode:i.id})),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",i.id===e.mode?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:i.label},i.id))}),t("p",{className:"text-sm text-slate-400",children:A.find(i=>i.id===e.mode).hint}),t(R,{state:e,flashA:d,flashB:x,bTone:S}),n("div",{className:"flex flex-wrap items-center gap-3",children:[t("button",{onClick:B,className:["rounded-md border px-4 py-1.5 text-sm font-medium transition-colors",e.partitioned?"border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500":"border-rose-500 bg-rose-600 text-white hover:bg-rose-500"].join(" "),children:e.partitioned?"🔌 Восстановить связь":"✂️ Разорвать связь"}),t("button",{onClick:y,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500",children:"Записать в Node A"}),t("button",{onClick:N,className:"rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white",children:"Прочитать с Node B"})]}),t("div",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm",children:a?n("p",{className:a.ok?a.stale?"text-amber-300":"text-emerald-300":"text-rose-300",children:[a.ok?`Node B вернула: ${a.value}. `:"Node B: ошибка. ",a.message]}):t("p",{className:"text-slate-400",children:"Разорви связь, выбери CP или AP, запиши новое значение в Node A и попробуй прочитать с Node B."})})]})}function D(){return n("div",{className:"space-y-4 text-slate-300",children:[n("p",{children:[t("strong",{className:"text-white",children:"CAP-теорема"}),": в любой реализации распределённых вычислений можно обеспечить не более двух из трёх свойств — согласованность (Consistency), доступность (Availability), устойчивость к разделению сети (Partition tolerance)."]}),n("div",{children:[t("h3",{className:"font-semibold text-white",children:"Три буквы по отдельности"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:[t("strong",{className:"text-white",children:"Consistency"})," — данные во всех узлах одинаковы; любой запрос вернёт одно и то же значение независимо от того, к какому узлу он пришёл."]}),n("li",{children:[t("strong",{className:"text-white",children:"Availability"})," — если запрос пришёл на живую ноду, он будет обработан за конечное время (нода не откажет молча)."]}),n("li",{children:[t("strong",{className:"text-white",children:"Partition tolerance"})," — система продолжает работать, несмотря на разрыв связи между частями кластера."]})]})]}),n("div",{children:[t("h3",{className:"font-semibold text-white",children:"Почему выбор на самом деле не из трёх"}),t("p",{className:"mt-2",children:"Наш мир не идеален — сети рвутся сами по себе, без спроса. Значит, P — не то свойство, от которого можно отказаться: раздел сети случится независимо от желания архитектора. Настоящий выбор происходит уже ПОСЛЕ разрыва, между оставшимися двумя:"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:[t("strong",{className:"text-white",children:"CP-система"})," — разрешает читать, но не писать (или вообще отказывает в ответе) на той стороне разрыва, где не может гарантировать актуальность. Жертвует доступностью ради согласованности."]}),n("li",{children:[t("strong",{className:"text-white",children:"AP-система"})," — разрешает и читать, и писать по обе стороны разрыва, рискуя разойтись в данных. Жертвует согласованностью ради доступности."]})]})]}),n("div",{children:[t("h3",{className:"font-semibold text-white",children:"В демо рядом"}),t("p",{className:"mt-2",children:"Пока связь есть — Node B всегда актуальна. Разорви связь, запиши новое значение в Node A и попробуй прочитать с Node B: в режиме CP чтение откажет, в режиме AP — вернёт то, что у узла есть, даже если это уже не совпадает с Node A."})]})]})}const T=`/**
 * CAP-теорема: в любой распределённой системе можно обеспечить не более
 * двух из трёх свойств — Consistency, Availability, Partition tolerance.
 * На практике P выбирать не приходится: сеть рвётся сама по себе, вопрос
 * не "хотим ли мы устойчивость к разделению", а "что делать, когда оно
 * случилось". Поэтому реальный выбор — не из трёх букв, а из двух путей
 * ПОСЛЕ того, как связь между узлами пропала:
 *  - CP — узел без связи с большинством отказывается отвечать, лишь бы не
 *    отдать устаревшие данные (жертвуем доступностью);
 *  - AP — узел продолжает отвечать тем, что у него есть, даже если это
 *    уже не совпадает с тем, что происходит на другой стороне разрыва
 *    (жертвуем согласованностью).
 */

export type CapMode = "CP" | "AP";

export interface CapState {
  partitioned: boolean;
  mode: CapMode;
  nodeAValue: number;
  nodeBValue: number;
}

export const INITIAL_VALUE = 100500;

export function initialCapState(): CapState {
  return { partitioned: false, mode: "CP", nodeAValue: INITIAL_VALUE, nodeBValue: INITIAL_VALUE };
}

/**
 * Запись всегда идёт в Node A. Если связь есть — она СРАЗУ видна на Node B
 * (для наглядности демо не моделирует лаг синхронной репликации отдельно).
 * Если связи нет — Node A уезжает вперёд, Node B остаётся при своём.
 */
export function writeToNodeA(state: CapState): CapState {
  const nextValue = state.nodeAValue + 1;
  return {
    ...state,
    nodeAValue: nextValue,
    nodeBValue: state.partitioned ? state.nodeBValue : nextValue,
  };
}

export interface ReadResult {
  ok: boolean;
  value?: number;
  stale: boolean;
  message: string;
}

/** Чтение всегда идёт с Node B — узла, который может оказаться отрезанным. */
export function readFromNodeB(state: CapState): ReadResult {
  if (!state.partitioned) {
    return {
      ok: true,
      value: state.nodeBValue,
      stale: false,
      message: "Связь есть, узел отвечает актуальным значением.",
    };
  }

  if (state.mode === "CP") {
    return {
      ok: false,
      stale: false,
      message:
        "Node B недоступна: без связи с Node A она не может гарантировать актуальность — и лучше откажет, чем соврёт.",
    };
  }

  const stale = state.nodeBValue !== state.nodeAValue;
  return {
    ok: true,
    value: state.nodeBValue,
    stale,
    message: stale
      ? "Node B отвечает тем, что у неё есть — но это уже не совпадает с Node A (stale read)."
      : "Node B отвечает — значения пока совпадают, разрыв ещё не успел ничего испортить.",
  };
}

export function togglePartition(state: CapState): CapState {
  if (state.partitioned) {
    // Восстановление связи = синхронизация: обе стороны сходятся к более новому значению.
    const merged = Math.max(state.nodeAValue, state.nodeBValue);
    return { ...state, partitioned: false, nodeAValue: merged, nodeBValue: merged };
  }
  return { ...state, partitioned: true };
}
`,$=`import { motion } from "framer-motion";
import type { CapState } from "./cap";

const W = 480;
const H = 200;
const BOX_W = 150;
const BOX_H = 64;
const POS_A = { x: 120, y: 100 };
const POS_B = { x: 360, y: 100 };

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

export function CapDiagram({
  state,
  flashA,
  flashB,
  bTone,
}: {
  state: CapState;
  flashA: string;
  flashB: string;
  /** "up" (обычный ответ), "stale" (устарел), "down" (недоступен) — только для Node B. */
  bTone: "up" | "stale" | "down";
}) {
  const rectA = rectAt(POS_A);
  const rectB = rectAt(POS_B);
  const bFill = bTone === "down" ? "rgb(76 5 25)" : bTone === "stale" ? "rgb(69 26 3)" : "rgb(30 41 59)";
  const bStroke = bTone === "down" ? "rgb(244 63 94)" : bTone === "stale" ? "rgb(245 158 11)" : "rgb(71 85 105)";

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Узлы A и B, связь между ними">
        {state.partitioned ? (
          <>
            <line x1={POS_A.x} y1={POS_A.y} x2={POS_B.x} y2={POS_B.y} stroke="rgb(244 63 94)" strokeWidth={2.5} strokeDasharray="6 5" />
            <text x={(POS_A.x + POS_B.x) / 2} y={POS_A.y - 16} textAnchor="middle" fill="rgb(244 63 94)" fontSize={20} fontWeight={700}>
              ✕
            </text>
          </>
        ) : (
          <line x1={POS_A.x} y1={POS_A.y} x2={POS_B.x} y2={POS_B.y} stroke="rgb(71 85 105)" strokeWidth={2} />
        )}

        <g>
          <motion.rect
            key={flashA}
            x={rectA.x}
            y={rectA.y}
            width={BOX_W}
            height={BOX_H}
            rx={10}
            fill="rgb(49 46 129)"
            stroke="rgb(129 140 248)"
            strokeWidth={2.5}
            animate={{ scale: [1, 1.05, 1] }}
            style={{ transformOrigin: \`\${POS_A.x}px \${POS_A.y}px\` }}
            transition={{ duration: 0.4 }}
          />
          <text x={POS_A.x} y={POS_A.y - 6} textAnchor="middle" fill="white" fontSize={15} fontWeight={600}>
            Node A
          </text>
          <text x={POS_A.x} y={POS_A.y + 16} textAnchor="middle" fill="rgb(199 210 254)" fontSize={13} fontFamily="monospace">
            {state.nodeAValue}
          </text>
        </g>

        <g>
          <motion.rect
            key={flashB}
            x={rectB.x}
            y={rectB.y}
            width={BOX_W}
            height={BOX_H}
            rx={10}
            fill={bFill}
            stroke={bStroke}
            strokeWidth={2.5}
            animate={{ scale: [1, 1.05, 1] }}
            style={{ transformOrigin: \`\${POS_B.x}px \${POS_B.y}px\` }}
            transition={{ duration: 0.4 }}
          />
          <text x={POS_B.x} y={POS_B.y - 6} textAnchor="middle" fill="white" fontSize={15} fontWeight={600}>
            Node B
          </text>
          <text x={POS_B.x} y={POS_B.y + 16} textAnchor="middle" fill={bTone === "down" ? "rgb(253 164 175)" : "rgb(226 232 240)"} fontSize={13} fontFamily="monospace">
            {bTone === "down" ? "недоступна" : state.nodeBValue}
          </text>
        </g>
      </svg>
    </div>
  );
}
`,F=`import { useState } from "react";
import {
  initialCapState,
  readFromNodeB,
  togglePartition,
  writeToNodeA,
  type CapMode,
  type ReadResult,
} from "./cap";
import { CapDiagram } from "./CapDiagram";

const MODES: { id: CapMode; label: string; hint: string }[] = [
  {
    id: "CP",
    label: "CP — жертвуем доступностью",
    hint: "Пока связи нет, Node B лучше откажет в ответе, чем отдаст то, что может оказаться неактуальным.",
  },
  {
    id: "AP",
    label: "AP — жертвуем согласованностью",
    hint: "Node B продолжает отвечать даже без связи с Node A — рискуя отдать устаревшее значение.",
  },
];

export function Demo() {
  const [state, setState] = useState(initialCapState);
  const [lastRead, setLastRead] = useState<ReadResult | null>(null);
  const [flashA, setFlashA] = useState("idle-a");
  const [flashB, setFlashB] = useState("idle-b");

  const handleWrite = () => {
    setState((s) => writeToNodeA(s));
    setLastRead(null);
    setFlashA(\`write-\${Date.now()}\`);
  };

  const handleRead = () => {
    const result = readFromNodeB(state);
    setLastRead(result);
    setFlashB(\`read-\${Date.now()}\`);
  };

  const handleTogglePartition = () => {
    setState((s) => togglePartition(s));
    setLastRead(null);
  };

  const bTone = !state.partitioned
    ? "up"
    : lastRead && !lastRead.ok
      ? "down"
      : lastRead?.stale
        ? "stale"
        : "up";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setState((s) => ({ ...s, mode: m.id }))}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              m.id === state.mode
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-400">{MODES.find((m) => m.id === state.mode)!.hint}</p>

      <CapDiagram state={state} flashA={flashA} flashB={flashB} bTone={bTone} />

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleTogglePartition}
          className={[
            "rounded-md border px-4 py-1.5 text-sm font-medium transition-colors",
            state.partitioned
              ? "border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-500"
              : "border-rose-500 bg-rose-600 text-white hover:bg-rose-500",
          ].join(" ")}
        >
          {state.partitioned ? "🔌 Восстановить связь" : "✂️ Разорвать связь"}
        </button>
        <button
          onClick={handleWrite}
          className="rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Записать в Node A
        </button>
        <button
          onClick={handleRead}
          className="rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white"
        >
          Прочитать с Node B
        </button>
      </div>

      <div className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm">
        {lastRead ? (
          <p className={lastRead.ok ? (lastRead.stale ? "text-amber-300" : "text-emerald-300") : "text-rose-300"}>
            {lastRead.ok ? \`Node B вернула: \${lastRead.value}. \` : "Node B: ошибка. "}
            {lastRead.message}
          </p>
        ) : (
          <p className="text-slate-400">
            Разорви связь, выбери CP или AP, запиши новое значение в Node A и попробуй прочитать
            с Node B.
          </p>
        )}
      </div>
    </div>
  );
}
`,X={meta:{id:"cap-theorem",title:"CAP-теорема",category:"architectural",summary:"Разорви связь между узлами, выбери CP или AP и попробуй прочитать с отрезанного узла — теорема не про формулу, а про то, чем жертвовать во время разрыва сети."},Demo:W,Explanation:D,code:[{filename:"cap.ts",language:"typescript",source:T},{filename:"CapDiagram.tsx",language:"tsx",source:$},{filename:"Demo.tsx",language:"tsx",source:F}]};export{X as default};
