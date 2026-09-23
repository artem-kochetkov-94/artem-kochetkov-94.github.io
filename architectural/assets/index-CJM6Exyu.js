/* empty css              */import{a as r,_ as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m,h as R,e as k}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as w}from"./proxy-BroObIT1.js";const b=[{id:10,price:30,zone:101},{id:20,price:57,zone:202},{id:30,price:64,zone:101},{id:50,price:123,zone:303}];function I(t){return t.price<50?"Shard #1 (0…50)":t.price<100?"Shard #2 (50…100)":"Shard #3 (100+)"}const C={10:"Shard #1",20:"Shard #2",30:"Shard #1",50:"Shard #2"};function H(t){return C[t.id]}const _={101:"Shard #1",202:"Shard #2",303:"Shard #3"};function E(t){return _[t.zone]}const x=[{id:"s1",label:"Shard #1",angle:40},{id:"s2",label:"Shard #2",angle:130},{id:"s3",label:"Shard #3",angle:230},{id:"s4",label:"Shard #4",angle:320}],g=[{id:"key-A",angle:10},{id:"key-B",angle:65},{id:"key-C",angle:100},{id:"key-D",angle:160},{id:"key-E",angle:200},{id:"key-F",angle:265},{id:"key-G",angle:300},{id:"key-H",angle:345}];function S(t){const i=x.filter(o=>t.has(o.id)).sort((o,e)=>o.angle-e.angle),s={};for(const o of g){const e=i.find(c=>c.angle>=o.angle)??i[0];s[o.id]=(e==null?void 0:e.id)??"—"}return s}function f(t){const i={};for(const s of g){const o=s.angle%t;i[s.id]=`mod-${o}`}return i}const N=320,u=N/2,p=120,y={s1:{fill:"rgb(49 46 129)",stroke:"rgb(129 140 248)"},s2:{fill:"rgb(6 78 59)",stroke:"rgb(52 211 153)"},s3:{fill:"rgb(69 26 3)",stroke:"rgb(245 158 11)"},s4:{fill:"rgb(12 74 110)",stroke:"rgb(56 189 248)"}};function v(t,i){const s=(t-90)*Math.PI/180;return{x:u+i*Math.cos(s),y:u+i*Math.sin(s)}}function A({activeShardIds:t,assignment:i,movedKeys:s,onToggleShard:o}){return r("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[r("svg",{viewBox:`0 0 ${N} ${N}`,className:"mx-auto h-auto w-full max-w-xs",role:"img","aria-label":"Кольцо consistent hashing",children:[n("circle",{cx:u,cy:u,r:p,fill:"none",stroke:"rgb(51 65 85)",strokeWidth:2}),g.map(e=>{const c=v(e.angle,p),a=i[e.id],d=y[a]??{fill:"rgb(30 41 59)",stroke:"rgb(100 116 139)"},l=s.has(e.id);return n(w.circle,{cx:c.x,cy:c.y,r:l?8:6,fill:d.fill,stroke:l?"rgb(244 63 94)":d.stroke,strokeWidth:l?3:2,animate:l?{scale:[1,1.3,1]}:{scale:1},style:{transformOrigin:`${c.x}px ${c.y}px`},transition:{duration:.5}},`${e.id}-${a}`)}),x.map(e=>{const c=v(e.angle,p),a=t.has(e.id),d=y[e.id],l=v(e.angle,p+34);return r("g",{className:"cursor-pointer",onClick:()=>o(e.id),children:[n("circle",{cx:c.x,cy:c.y,r:12,fill:a?d.fill:"rgb(15 23 42)",stroke:a?d.stroke:"rgb(71 85 105)",strokeWidth:a?3:2,strokeDasharray:a?void 0:"3 3"}),n("text",{x:l.x,y:l.y,textAnchor:"middle",fill:a?"white":"rgb(100 116 139)",fontSize:11,fontWeight:600,children:e.label})]},e.id)})]}),n("p",{className:"mt-2 text-center text-xs text-slate-500",children:"Клик по узлу шарда — включить/выключить его в кольце."})]})}const D=[{id:"methods",label:"Способы шардирования"},{id:"hashing",label:"Hashing vs Consistent Hashing"}];function O(){const[t,i]=m("methods");return r("div",{className:"space-y-6",children:[n("div",{className:"inline-flex flex-wrap rounded-lg border border-slate-700 p-1",children:D.map(s=>n("button",{onClick:()=>i(s.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",s.id===t?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:s.label},s.id))}),t==="methods"?n(z,{}):n(K,{})]})}function z(){const[t,i]=m(b[0].id),s=b.find(e=>e.id===t),o=[{label:"Range-based",hint:"по диапазону значения",value:I(s),basedOn:`price = ${s.price}`},{label:"Key-based",hint:"по hash(id)",value:H(s),basedOn:`id = ${s.id}`},{label:"Directory-based",hint:"по справочнику zone → shard",value:E(s),basedOn:`zone = ${s.zone}`}];return r("div",{className:"space-y-4",children:[n("p",{className:"text-sm text-slate-400",children:"Одна и та же строка — три независимых способа решить, в каком шарде ей место. Выбери строку и посмотри: способы не синонимы, для одной строки они вполне могут разойтись."}),n("div",{className:"flex flex-wrap gap-2",children:b.map(e=>r("button",{onClick:()=>i(e.id),className:["rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",e.id===t?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:["id=",e.id," price=",e.price," zone=",e.zone]},e.id))}),n("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-3",children:o.map(e=>r("div",{className:"rounded-lg border border-slate-700 bg-slate-900/50 p-4",children:[n("p",{className:"font-semibold text-white",children:e.label}),n("p",{className:"mt-1 text-xs text-slate-500",children:e.hint}),n("p",{className:"mt-3 font-mono text-xs text-slate-400",children:e.basedOn}),r("p",{className:"mt-1 rounded-md bg-indigo-950/40 px-3 py-1.5 text-center font-mono text-sm text-indigo-300",children:["→ ",e.value]})]},e.label))})]})}function K(){return r("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[n(M,{}),n(T,{})]})}function M(){const[t,i]=m(3),s=R(3),[o,e]=m(new Set);k(()=>{const a=f(s.current),d=f(t);e(new Set(g.filter(l=>a[l.id]!==d[l.id]).map(l=>l.id))),s.current=t},[t]);const c=f(t);return r("div",{className:"space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[n("p",{className:"font-semibold text-white",children:"Hashing: F(key) = hash(key) % N"}),n("p",{className:"text-xs text-slate-500",children:"Бакет ключа зависит от ЧИСЛА шардов N. Меняем N — у почти всех ключей меняется остаток."}),n("div",{className:"flex gap-2",children:[3,4].map(a=>r("button",{onClick:()=>i(a),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",a===t?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:["N = ",a]},a))}),n("div",{className:"flex flex-wrap gap-1.5",children:g.map(a=>r("span",{className:["rounded-md border px-2 py-1 font-mono text-xs transition-colors",o.has(a.id)?"border-rose-500 bg-rose-950/40 text-rose-300":"border-slate-700 bg-slate-800/60 text-slate-400"].join(" "),children:[a.id," → ",c[a.id]]},a.id))}),r("p",{className:"font-mono text-xs text-slate-500",children:["переехало: ",n("span",{className:"text-rose-400",children:o.size})," / ",g.length]})]})}function T(){const[t,i]=m(()=>new Set(x.map(d=>d.id))),s=R(new Set(x.map(d=>d.id))),[o,e]=m(new Set);k(()=>{const d=S(s.current),l=S(t);e(new Set(g.filter(h=>d[h.id]!==l[h.id]).map(h=>h.id))),s.current=new Set(t)},[t]);const c=S(t);return r("div",{className:"space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[n("p",{className:"font-semibold text-white",children:"Consistent Hashing"}),n("p",{className:"text-xs text-slate-500",children:"Ключ достаётся первому активному шарду по часовой стрелке. Добавление/удаление шарда задевает только его соседей по кольцу."}),n(A,{activeShardIds:t,assignment:c,movedKeys:o,onToggleShard:d=>{i(l=>{const h=new Set(l);if(h.has(d)){if(h.size===1)return l;h.delete(d)}else h.add(d);return h})}}),r("p",{className:"font-mono text-xs text-slate-500",children:["переехало: ",n("span",{className:"text-rose-400",children:o.size})," / ",g.length]})]})}function G(){return r("div",{className:"space-y-4 text-slate-300",children:[r("p",{children:[n("strong",{className:"text-white",children:"Партиционирование"})," — метод разделения больших таблиц на много маленьких секций, желательно прозрачно для приложения. Бывает"," ",n("strong",{className:"text-white",children:"вертикальным"})," (режем по столбцам — например, редко используемые большие поля вроде фото выносим в отдельную секцию) и"," ",n("strong",{className:"text-white",children:"горизонтальным"})," (режем по строкам — например, по диапазону id). Пока все секции лежат на одном инстансе БД — это просто партиционирование."]}),r("div",{children:[n("h3",{className:"font-semibold text-white",children:"Шардирование"}),n("p",{className:"mt-2",children:"Как только каждая секция переезжает на СВОЙ ОТДЕЛЬНЫЙ инстанс базы данных — это уже шардирование: горизонтальное партиционирование, разнесённое по независимым машинам. Каждый шард обычно держит и собственную реплику — шардирование и репликация работают вместе, а не вместо друг друга."})]}),r("div",{children:[n("h3",{className:"font-semibold text-white",children:"Routing: как понять, куда идти"}),r("ul",{className:"mt-2 list-disc space-y-2 pl-5",children:[r("li",{children:[n("strong",{className:"text-white",children:"Клиентский"})," — логика маршрутизации живёт в самом клиенте. Плюс — нет лишнего сетевого узла; минусы — код дублируется в каждом клиенте, и обновление списка хостов усложняется."]}),r("li",{children:[n("strong",{className:"text-white",children:"Proxy"})," — между клиентом и шардами появляется прозрачный узел, который сам решает, куда шёл запрос. Плюс — приложение не знает о шардинге вообще; минусы — лишний сетевой хоп, потеря части функциональности БД (например, транзакций поперёк шардов), единая точка отказа."]}),r("li",{children:[n("strong",{className:"text-white",children:"Coordinator"})," — как Proxy, но ещё и умеет кэшировать. Плюсы те же плюс кэш; минусы — та же инфраструктурная сложность плюс дополнительная нагрузка на сам координатор."]})]})]}),r("div",{children:[n("h3",{className:"font-semibold text-white",children:"Rendezvous Hashing"}),n("p",{className:"mt-2",children:"Альтернатива кольцу: для ключа считаем F(key, shard) для КАЖДОГО шарда и выбираем шард с максимальным значением. При выпадении шарда пересчитывать нужно только его ключи — свойство минимальной переброски сохраняется, но без кольца и виртуальных узлов."})]}),r("div",{children:[n("h3",{className:"font-semibold text-white",children:"Перебалансировка"}),n("p",{className:"mt-2",children:"Перенос данных с одного шарда на другой без остановки системы — отдельная задача. Подходы: временно уйти в read-only; сделать данные неизменяемыми (пишем только в новый шард (tgt), читаем из старого (src) и нового сразу); настроить логическую репликацию src → tgt и переключиться на tgt, когда она догонит; либо смешанный подход из перечисленного."})]}),r("div",{children:[n("h3",{className:"font-semibold text-white",children:"Resharding"}),n("p",{className:"mt-2",children:"Отдельно от рутинной перебалансировки стоит решардинг — изменение самой СТРАТЕГИИ шардирования: добавление/удаление шардов или исправление ошибок в изначальном выборе способа шардирования. Именно здесь разница между обычным hash % N и consistent hashing (демо рядом) становится критичной: первый при любом решардинге перемешивает почти все ключи, второй — только соседей изменённого узла."})]})]})}const $=`/**
 * Партиционирование — режем большие таблицы на маленькие куски (секции).
 * Пока эти секции лежат на одном инстансе БД — это "просто" партиционирование
 * (вертикальное — по столбцам, горизонтальное — по строкам). Как только
 * каждый кусок переезжает на СВОЙ ОТДЕЛЬНЫЙ инстанс — это уже шардирование:
 * горизонтальное партиционирование, разнесённое по независимым базам.
 *
 * Вопрос "как распределить строки между шардами" решается тремя разными
 * способами — ниже они применены к ОДНОМУ И ТОМУ ЖЕ набору строк, чтобы
 * было видно: это не синонимы, а самостоятельные, независимые стратегии,
 * которые для одной и той же строки могут дать разные ответы.
 */

export interface ShardRow {
  id: number;
  price: number;
  zone: number;
}

export const ROWS: ShardRow[] = [
  { id: 10, price: 30, zone: 101 },
  { id: 20, price: 57, zone: 202 },
  { id: 30, price: 64, zone: 101 },
  { id: 50, price: 123, zone: 303 },
];

/** Range-based: диапазон значения определяет шард — границы совпадают со слайдом. */
export function rangeShard(row: ShardRow): string {
  if (row.price < 50) return "Shard #1 (0…50)";
  if (row.price < 100) return "Shard #2 (50…100)";
  return "Shard #3 (100+)";
}

/** Key-based: результат hash(id) — независим от значения price или zone. */
const KEY_HASH_SHARD: Record<number, string> = {
  10: "Shard #1",
  20: "Shard #2",
  30: "Shard #1",
  50: "Shard #2",
};
export function keyShard(row: ShardRow): string {
  return KEY_HASH_SHARD[row.id];
}

/** Directory-based: явная таблица "зона → шард", строки одной зоны всегда вместе. */
const DIRECTORY: Record<number, string> = {
  101: "Shard #1",
  202: "Shard #2",
  303: "Shard #3",
};
export function directoryShard(row: ShardRow): string {
  return DIRECTORY[row.zone];
}

// ---------------------------------------------------------------------------
// Hashing vs Consistent Hashing — кольцо
// ---------------------------------------------------------------------------

export interface RingShard {
  id: string;
  label: string;
  /** Позиция на кольце в градусах — используется и в consistent hashing, и как "хэш" для mod-N. */
  angle: number;
}

export const RING_SHARDS: RingShard[] = [
  { id: "s1", label: "Shard #1", angle: 40 },
  { id: "s2", label: "Shard #2", angle: 130 },
  { id: "s3", label: "Shard #3", angle: 230 },
  { id: "s4", label: "Shard #4", angle: 320 },
];

export interface RingKey {
  id: string;
  angle: number;
}

export const RING_KEYS: RingKey[] = [
  { id: "key-A", angle: 10 },
  { id: "key-B", angle: 65 },
  { id: "key-C", angle: 100 },
  { id: "key-D", angle: 160 },
  { id: "key-E", angle: 200 },
  { id: "key-F", angle: 265 },
  { id: "key-G", angle: 300 },
  { id: "key-H", angle: 345 },
];

/**
 * Consistent hashing: ключ достаётся ПЕРВОМУ активному шарду по часовой
 * стрелке от своей позиции на кольце (с переносом через 360°). Добавление
 * или удаление шарда двигает границу только у его ближайших соседей —
 * остальные ключи не замечают изменений.
 */
export function assignConsistentHashing(
  activeShardIds: ReadonlySet<string>,
): Record<string, string> {
  const active = RING_SHARDS.filter((s) => activeShardIds.has(s.id)).sort(
    (a, b) => a.angle - b.angle,
  );
  const result: Record<string, string> = {};
  for (const key of RING_KEYS) {
    const target = active.find((s) => s.angle >= key.angle) ?? active[0];
    result[key.id] = target?.id ?? "—";
  }
  return result;
}

/**
 * Обычный hash % N: у каждого ключа есть псевдо-хэш (его позиция на
 * кольце), и бакет — это остаток от деления на ЧИСЛО шардов. Как только N
 * меняется, у подавляющего большинства ключей меняется и остаток —
 * переезжает почти всё, а не только соседи изменённого шарда.
 */
export function assignModHashing(shardCount: number): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of RING_KEYS) {
    const bucket = key.angle % shardCount;
    result[key.id] = \`mod-\${bucket}\`;
  }
  return result;
}
`,Y=`import { motion } from "framer-motion";
import { RING_KEYS, RING_SHARDS } from "./sharding";

const SIZE = 320;
const CENTER = SIZE / 2;
const RADIUS = 120;

const SHARD_COLORS: Record<string, { fill: string; stroke: string }> = {
  s1: { fill: "rgb(49 46 129)", stroke: "rgb(129 140 248)" }, // indigo
  s2: { fill: "rgb(6 78 59)", stroke: "rgb(52 211 153)" }, // emerald
  s3: { fill: "rgb(69 26 3)", stroke: "rgb(245 158 11)" }, // amber
  s4: { fill: "rgb(12 74 110)", stroke: "rgb(56 189 248)" }, // sky
};

function pointOnRing(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

export function ShardRing({
  activeShardIds,
  assignment,
  movedKeys,
  onToggleShard,
}: {
  activeShardIds: ReadonlySet<string>;
  assignment: Record<string, string>;
  movedKeys: ReadonlySet<string>;
  onToggleShard: (id: string) => void;
}) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${SIZE} \${SIZE}\`} className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Кольцо consistent hashing">
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgb(51 65 85)" strokeWidth={2} />

        {RING_KEYS.map((key) => {
          const pos = pointOnRing(key.angle, RADIUS);
          const shardId = assignment[key.id];
          const color = SHARD_COLORS[shardId] ?? { fill: "rgb(30 41 59)", stroke: "rgb(100 116 139)" };
          const moved = movedKeys.has(key.id);
          return (
            <motion.circle
              key={\`\${key.id}-\${shardId}\`}
              cx={pos.x}
              cy={pos.y}
              r={moved ? 8 : 6}
              fill={color.fill}
              stroke={moved ? "rgb(244 63 94)" : color.stroke}
              strokeWidth={moved ? 3 : 2}
              animate={moved ? { scale: [1, 1.3, 1] } : { scale: 1 }}
              style={{ transformOrigin: \`\${pos.x}px \${pos.y}px\` }}
              transition={{ duration: 0.5 }}
            />
          );
        })}

        {RING_SHARDS.map((shard) => {
          const pos = pointOnRing(shard.angle, RADIUS);
          const active = activeShardIds.has(shard.id);
          const color = SHARD_COLORS[shard.id];
          const labelPos = pointOnRing(shard.angle, RADIUS + 34);
          return (
            <g key={shard.id} className="cursor-pointer" onClick={() => onToggleShard(shard.id)}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={12}
                fill={active ? color.fill : "rgb(15 23 42)"}
                stroke={active ? color.stroke : "rgb(71 85 105)"}
                strokeWidth={active ? 3 : 2}
                strokeDasharray={active ? undefined : "3 3"}
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                fill={active ? "white" : "rgb(100 116 139)"}
                fontSize={11}
                fontWeight={600}
              >
                {shard.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        Клик по узлу шарда — включить/выключить его в кольце.
      </p>
    </div>
  );
}
`,P=`import { useEffect, useRef, useState } from "react";
import {
  ROWS,
  RING_KEYS,
  RING_SHARDS,
  assignConsistentHashing,
  assignModHashing,
  directoryShard,
  keyShard,
  rangeShard,
} from "./sharding";
import { ShardRing } from "./ShardRing";

type Tab = "methods" | "hashing";

const TABS: { id: Tab; label: string }[] = [
  { id: "methods", label: "Способы шардирования" },
  { id: "hashing", label: "Hashing vs Consistent Hashing" },
];

export function Demo() {
  const [tab, setTab] = useState<Tab>("methods");

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

      {tab === "methods" ? <MethodsPanel /> : <HashingPanel />}
    </div>
  );
}

function MethodsPanel() {
  const [rowId, setRowId] = useState<number>(ROWS[0].id);
  const row = ROWS.find((r) => r.id === rowId)!;

  const results: { label: string; hint: string; value: string; basedOn: string }[] = [
    {
      label: "Range-based",
      hint: "по диапазону значения",
      value: rangeShard(row),
      basedOn: \`price = \${row.price}\`,
    },
    {
      label: "Key-based",
      hint: "по hash(id)",
      value: keyShard(row),
      basedOn: \`id = \${row.id}\`,
    },
    {
      label: "Directory-based",
      hint: "по справочнику zone → shard",
      value: directoryShard(row),
      basedOn: \`zone = \${row.zone}\`,
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">
        Одна и та же строка — три независимых способа решить, в каком шарде ей место. Выбери
        строку и посмотри: способы не синонимы, для одной строки они вполне могут разойтись.
      </p>

      <div className="flex flex-wrap gap-2">
        {ROWS.map((r) => (
          <button
            key={r.id}
            onClick={() => setRowId(r.id)}
            className={[
              "rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
              r.id === rowId
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            id={r.id} price={r.price} zone={r.zone}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {results.map((res) => (
          <div key={res.label} className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
            <p className="font-semibold text-white">{res.label}</p>
            <p className="mt-1 text-xs text-slate-500">{res.hint}</p>
            <p className="mt-3 font-mono text-xs text-slate-400">{res.basedOn}</p>
            <p className="mt-1 rounded-md bg-indigo-950/40 px-3 py-1.5 text-center font-mono text-sm text-indigo-300">
              → {res.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HashingPanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ModHashingCard />
      <ConsistentHashingCard />
    </div>
  );
}

function ModHashingCard() {
  const [shardCount, setShardCount] = useState(3);
  const prevCountRef = useRef(3);
  const [moved, setMoved] = useState<Set<string>>(new Set());

  useEffect(() => {
    const prev = assignModHashing(prevCountRef.current);
    const next = assignModHashing(shardCount);
    setMoved(
      new Set(RING_KEYS.filter((k) => prev[k.id] !== next[k.id]).map((k) => k.id)),
    );
    prevCountRef.current = shardCount;
  }, [shardCount]);

  const assignment = assignModHashing(shardCount);

  return (
    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <p className="font-semibold text-white">Hashing: F(key) = hash(key) % N</p>
      <p className="text-xs text-slate-500">
        Бакет ключа зависит от ЧИСЛА шардов N. Меняем N — у почти всех ключей меняется остаток.
      </p>

      <div className="flex gap-2">
        {[3, 4].map((n) => (
          <button
            key={n}
            onClick={() => setShardCount(n)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              n === shardCount
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            N = {n}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {RING_KEYS.map((key) => (
          <span
            key={key.id}
            className={[
              "rounded-md border px-2 py-1 font-mono text-xs transition-colors",
              moved.has(key.id)
                ? "border-rose-500 bg-rose-950/40 text-rose-300"
                : "border-slate-700 bg-slate-800/60 text-slate-400",
            ].join(" ")}
          >
            {key.id} → {assignment[key.id]}
          </span>
        ))}
      </div>

      <p className="font-mono text-xs text-slate-500">
        переехало: <span className="text-rose-400">{moved.size}</span> / {RING_KEYS.length}
      </p>
    </div>
  );
}

function ConsistentHashingCard() {
  const [activeShardIds, setActiveShardIds] = useState<Set<string>>(
    () => new Set(RING_SHARDS.map((s) => s.id)),
  );
  const prevActiveRef = useRef<Set<string>>(new Set(RING_SHARDS.map((s) => s.id)));
  const [moved, setMoved] = useState<Set<string>>(new Set());

  useEffect(() => {
    const prev = assignConsistentHashing(prevActiveRef.current);
    const next = assignConsistentHashing(activeShardIds);
    setMoved(
      new Set(RING_KEYS.filter((k) => prev[k.id] !== next[k.id]).map((k) => k.id)),
    );
    prevActiveRef.current = new Set(activeShardIds);
  }, [activeShardIds]);

  const assignment = assignConsistentHashing(activeShardIds);

  const toggleShard = (id: string) => {
    setActiveShardIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size === 1) return prev; // хотя бы один шард должен остаться
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <p className="font-semibold text-white">Consistent Hashing</p>
      <p className="text-xs text-slate-500">
        Ключ достаётся первому активному шарду по часовой стрелке. Добавление/удаление шарда
        задевает только его соседей по кольцу.
      </p>

      <ShardRing
        activeShardIds={activeShardIds}
        assignment={assignment}
        movedKeys={moved}
        onToggleShard={toggleShard}
      />

      <p className="font-mono text-xs text-slate-500">
        переехало: <span className="text-rose-400">{moved.size}</span> / {RING_KEYS.length}
      </p>
    </div>
  );
}
`,F={meta:{id:"sharding",title:"Шардирование",category:"architectural",summary:"Range/key/directory-based — три независимых способа выбрать шард. Плюс главный контраст: hash % N перемешивает почти всё при решардинге, consistent hashing — только соседей изменённого узла."},Demo:O,Explanation:G,code:[{filename:"sharding.ts",language:"typescript",source:$},{filename:"ShardRing.tsx",language:"tsx",source:Y},{filename:"Demo.tsx",language:"tsx",source:P}]};export{F as default};
