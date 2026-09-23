/* empty css              */import{_ as e,a as i}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as p,e as S}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as h}from"./proxy-BroObIT1.js";const f={b1:"up",b2:"up",b3:"starting"},b=[{id:1,label:"Backend #3 запускается",backendStates:f,activeLeg:null,description:"Новый инстанс поднялся, но LB о нём ещё ничего не знает."},{id:2,label:"Backend #3 регистрируется в Service Discovery",backendStates:{b1:"up",b2:"up",b3:"starting"},activeLeg:{from:"b3",to:"discovery"},description:"Register: бэкенд сам сообщает о себе реестру — никто не редактирует конфиг LB руками."},{id:3,label:"Service Discovery уведомляет LB",backendStates:{b1:"up",b2:"up",b3:"up"},activeLeg:{from:"discovery",to:"lb"},description:"Notify: реестр сам сообщает LB об изменении состава — Backend #3 теперь в ротации."},{id:4,label:"Backend #2 перестаёт слать heartbeat",backendStates:{b1:"up",b2:"warning",b3:"up"},activeLeg:null,description:"Heartbeat от Backend #2 не приходит — пока не критично, возможно временная задержка."},{id:5,label:"Пропущено несколько heartbeat подряд",backendStates:{b1:"up",b2:"down",b3:"up"},activeLeg:null,description:"Порог пропусков превышен — Backend #2 считается упавшим."},{id:6,label:"Service Discovery убирает Backend #2 из реестра",backendStates:{b1:"up",b2:"down",b3:"up"},activeLeg:{from:"discovery",to:"lb"},description:"LB узнаёт об этом так же — через Notify, а не через собственный опрос бэкендов."}],B=500,k=260,s={x:140,y:60},o={x:140,y:220},x={b1:{x:400,y:50},b2:{x:400,y:130},b3:{x:400,y:210}},y=130,g=46,L={starting:"rgb(30 41 59)",up:"rgb(6 78 59)",warning:"rgb(69 26 3)",down:"rgb(76 5 25)"},u={starting:"rgb(100 116 139)",up:"rgb(52 211 153)",warning:"rgb(245 158 11)",down:"rgb(244 63 94)"},D={starting:"запускается",up:"в ротации",warning:"нет heartbeat",down:"исключён"};function m(r){return{x:r.x-y/2,y:r.y-g/2}}function E({step:r}){const d=`${r.id}`;return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:i("svg",{viewBox:`0 0 ${B} ${k}`,className:"h-auto w-full",role:"img","aria-label":"Service Discovery и Heartbeat",children:[e("line",{x1:s.x,y1:s.y,x2:o.x,y2:o.y,stroke:"rgb(51 65 85)",strokeWidth:2,strokeDasharray:"4 4"}),Object.values(x).map((n,t)=>e("line",{x1:s.x,y1:s.y,x2:n.x,y2:n.y,stroke:"rgb(51 65 85)",strokeWidth:2},`lb-${t}`)),Object.values(x).map((n,t)=>e("line",{x1:o.x,y1:o.y,x2:n.x,y2:n.y,stroke:"rgb(51 65 85)",strokeWidth:1.5,strokeDasharray:"3 3"},`disc-${t}`)),r.activeLeg&&(()=>{const n=r.activeLeg.from==="lb"?s:r.activeLeg.from==="discovery"?o:x[r.activeLeg.from],t=r.activeLeg.to==="lb"?s:r.activeLeg.to==="discovery"?o:x[r.activeLeg.to];return e(h.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:n.x,cy:n.y,opacity:0},animate:{cx:[n.x,t.x],cy:[n.y,t.y],opacity:[0,1,1,0]},transition:{duration:1,ease:"easeInOut"}},d)})(),i("g",{children:[e("rect",{x:m(s).x,y:m(s).y,width:y,height:g,rx:10,fill:"rgb(49 46 129)",stroke:"rgb(129 140 248)",strokeWidth:2}),e("text",{x:s.x,y:s.y+5,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:"Load Balancer"})]}),i("g",{children:[e("rect",{x:m(o).x,y:m(o).y,width:y,height:g,rx:10,fill:"rgb(49 46 129)",stroke:"rgb(129 140 248)",strokeWidth:2}),e("text",{x:o.x,y:o.y+5,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:"Service Discovery"})]}),Object.entries(x).map(([n,t])=>{const a=r.backendStates[n],l=m(t);return i("g",{children:[e(h.rect,{x:l.x,y:l.y,width:y,height:g,rx:10,fill:L[a],stroke:u[a],strokeWidth:2,animate:{scale:[1,1.05,1]},style:{transformOrigin:`${t.x}px ${t.y}px`},transition:{duration:.4}},`${d}-${n}-${a}`),e("text",{x:t.x,y:t.y-2,textAnchor:"middle",fill:"white",fontSize:12,fontWeight:600,children:n==="b1"?"Backend #1":n==="b2"?"Backend #2":"Backend #3"}),e("text",{x:t.x,y:t.y+14,textAnchor:"middle",fill:u[a],fontSize:10,children:D[a]})]},n)})]})})}const N=2e3;function w(){const[r,d]=p(0),[n,t]=p(!1),a=r>=b.length-1;S(()=>{if(!n)return;if(a){t(!1);return}const c=setTimeout(()=>d(v=>v+1),N);return()=>clearTimeout(c)},[n,a,r]);const l=b[Math.min(r,b.length-1)];return i("div",{className:"space-y-6",children:[e("p",{className:"text-sm text-slate-400",children:"Пунктир — канал Service Discovery (регистрация и heartbeat), сплошная линия — маршрутизация LB."}),e(E,{step:l}),i("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:l.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:l.description})]}),i("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{d(0),t(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{t(!1),d(c=>Math.max(0,c-1))},disabled:r===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>t(c=>!c),disabled:a,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:n?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{t(!1),d(c=>Math.min(b.length-1,c+1))},disabled:a,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),i("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[r+1," / ",b.length]})]}),e("input",{type:"range",min:0,max:b.length-1,value:r,onChange:c=>{t(!1),d(Number(c.target.value))},className:"w-full accent-indigo-500"})]})}function _(){return i("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:"Балансировщику нужно знать, какие бэкенды сейчас живы. Жёстко прописать список в конфиге не работает при автоскейлинге и падениях — нужны два механизма, работающие вместе."}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Heartbeat"}),e("p",{className:"mt-2",children:"Каждый узел периодически посылает сигнал «я живой». Пропустил несколько подряд — считается упавшим. Простой и универсальный механизм обнаружения сбоев, применяется не только к бэкендам за LB, но и в репликации, консенсусе, кластерных системах вообще."})]}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Service Discovery"}),i("p",{className:"mt-2",children:["Реестр живых сервисов. Новый инстанс, поднявшись, сам ",e("strong",{className:"text-white",children:"регистрируется"})," в реестре (Register) — никто не правит конфиг LB руками. Реестр, в свою очередь, сам ",e("strong",{className:"text-white",children:"уведомляет"})," LB (Notify) об изменении состава: появился новый бэкенд — добавить в ротацию, пропал (по heartbeat) — убрать."]})]}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Итого"}),e("p",{className:"mt-2",children:"Связка Heartbeat + Service Discovery делает состав бэкендов за LB динамическим: масштабирование вверх и вниз, падения и восстановления обрабатываются автоматически, без ручных изменений конфигурации и без даунтайма на переналадку."})]})]})}const O=`/**
 * Как LB узнаёт, какие бэкенды сейчас живы, — не хардкодом в конфиге, а
 * двумя механизмами, работающими вместе:
 *  - Heartbeat — каждый клиент/бэкенд периодически подтверждает, что жив;
 *    пропустил несколько подтверждений подряд — считается упавшим;
 *  - Service Discovery — реестр, в котором бэкенды сами регистрируются при
 *    запуске (Register) и который сам уведомляет LB (Notify) об изменениях
 *    состава — LB не нужно ничего перезапускать или редеплоить.
 */

export type BackendState = "starting" | "up" | "warning" | "down";

export interface DiscoveryStep {
  id: number;
  label: string;
  backendStates: Record<string, BackendState>;
  /** Активный перегон на этом шаге — для одиночного импульса. */
  activeLeg: { from: string; to: string } | null;
  description: string;
}

const ALL_UP: Record<string, BackendState> = { b1: "up", b2: "up", b3: "starting" };

export const DISCOVERY_STEPS: DiscoveryStep[] = [
  {
    id: 1,
    label: "Backend #3 запускается",
    backendStates: ALL_UP,
    activeLeg: null,
    description: "Новый инстанс поднялся, но LB о нём ещё ничего не знает.",
  },
  {
    id: 2,
    label: "Backend #3 регистрируется в Service Discovery",
    backendStates: { b1: "up", b2: "up", b3: "starting" },
    activeLeg: { from: "b3", to: "discovery" },
    description: "Register: бэкенд сам сообщает о себе реестру — никто не редактирует конфиг LB руками.",
  },
  {
    id: 3,
    label: "Service Discovery уведомляет LB",
    backendStates: { b1: "up", b2: "up", b3: "up" },
    activeLeg: { from: "discovery", to: "lb" },
    description: "Notify: реестр сам сообщает LB об изменении состава — Backend #3 теперь в ротации.",
  },
  {
    id: 4,
    label: "Backend #2 перестаёт слать heartbeat",
    backendStates: { b1: "up", b2: "warning", b3: "up" },
    activeLeg: null,
    description: "Heartbeat от Backend #2 не приходит — пока не критично, возможно временная задержка.",
  },
  {
    id: 5,
    label: "Пропущено несколько heartbeat подряд",
    backendStates: { b1: "up", b2: "down", b3: "up" },
    activeLeg: null,
    description: "Порог пропусков превышен — Backend #2 считается упавшим.",
  },
  {
    id: 6,
    label: "Service Discovery убирает Backend #2 из реестра",
    backendStates: { b1: "up", b2: "down", b3: "up" },
    activeLeg: { from: "discovery", to: "lb" },
    description: "LB узнаёт об этом так же — через Notify, а не через собственный опрос бэкендов.",
  },
];
`,I=`import { motion } from "framer-motion";
import type { BackendState, DiscoveryStep } from "./discovery";

const W = 500;
const H = 260;
const LB = { x: 140, y: 60 };
const DISCOVERY = { x: 140, y: 220 };
const BACKENDS: Record<string, { x: number; y: number }> = {
  b1: { x: 400, y: 50 },
  b2: { x: 400, y: 130 },
  b3: { x: 400, y: 210 },
};
const BOX_W = 130;
const BOX_H = 46;

const STATE_FILL: Record<BackendState, string> = {
  starting: "rgb(30 41 59)",
  up: "rgb(6 78 59)",
  warning: "rgb(69 26 3)",
  down: "rgb(76 5 25)",
};
const STATE_STROKE: Record<BackendState, string> = {
  starting: "rgb(100 116 139)",
  up: "rgb(52 211 153)",
  warning: "rgb(245 158 11)",
  down: "rgb(244 63 94)",
};
const STATE_LABEL: Record<BackendState, string> = {
  starting: "запускается",
  up: "в ротации",
  warning: "нет heartbeat",
  down: "исключён",
};

function box(pos: { x: number; y: number }) {
  return { x: pos.x - BOX_W / 2, y: pos.y - BOX_H / 2 };
}

export function DiscoveryDiagram({ step }: { step: DiscoveryStep }) {
  const eventKey = \`\${step.id}\`;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Service Discovery и Heartbeat">
        <line x1={LB.x} y1={LB.y} x2={DISCOVERY.x} y2={DISCOVERY.y} stroke="rgb(51 65 85)" strokeWidth={2} strokeDasharray="4 4" />
        {Object.values(BACKENDS).map((pos, i) => (
          <line key={\`lb-\${i}\`} x1={LB.x} y1={LB.y} x2={pos.x} y2={pos.y} stroke="rgb(51 65 85)" strokeWidth={2} />
        ))}
        {Object.values(BACKENDS).map((pos, i) => (
          <line key={\`disc-\${i}\`} x1={DISCOVERY.x} y1={DISCOVERY.y} x2={pos.x} y2={pos.y} stroke="rgb(51 65 85)" strokeWidth={1.5} strokeDasharray="3 3" />
        ))}

        {step.activeLeg &&
          (() => {
            const from = step.activeLeg.from === "lb" ? LB : step.activeLeg.from === "discovery" ? DISCOVERY : BACKENDS[step.activeLeg.from];
            const to = step.activeLeg.to === "lb" ? LB : step.activeLeg.to === "discovery" ? DISCOVERY : BACKENDS[step.activeLeg.to];
            return (
              <motion.circle
                key={eventKey}
                r={7}
                fill="rgb(99 102 241)"
                initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                animate={{ cx: [from.x, to.x], cy: [from.y, to.y], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            );
          })()}

        {/* LB и Discovery — фиксированные узлы */}
        <g>
          <rect x={box(LB).x} y={box(LB).y} width={BOX_W} height={BOX_H} rx={10} fill="rgb(49 46 129)" stroke="rgb(129 140 248)" strokeWidth={2} />
          <text x={LB.x} y={LB.y + 5} textAnchor="middle" fill="white" fontSize={13} fontWeight={600}>
            Load Balancer
          </text>
        </g>
        <g>
          <rect x={box(DISCOVERY).x} y={box(DISCOVERY).y} width={BOX_W} height={BOX_H} rx={10} fill="rgb(49 46 129)" stroke="rgb(129 140 248)" strokeWidth={2} />
          <text x={DISCOVERY.x} y={DISCOVERY.y + 5} textAnchor="middle" fill="white" fontSize={13} fontWeight={600}>
            Service Discovery
          </text>
        </g>

        {Object.entries(BACKENDS).map(([id, pos]) => {
          const state = step.backendStates[id];
          const rect = box(pos);
          return (
            <g key={id}>
              <motion.rect
                key={\`\${eventKey}-\${id}-\${state}\`}
                x={rect.x}
                y={rect.y}
                width={BOX_W}
                height={BOX_H}
                rx={10}
                fill={STATE_FILL[state]}
                stroke={STATE_STROKE[state]}
                strokeWidth={2}
                animate={{ scale: [1, 1.05, 1] }}
                style={{ transformOrigin: \`\${pos.x}px \${pos.y}px\` }}
                transition={{ duration: 0.4 }}
              />
              <text x={pos.x} y={pos.y - 2} textAnchor="middle" fill="white" fontSize={12} fontWeight={600}>
                {id === "b1" ? "Backend #1" : id === "b2" ? "Backend #2" : "Backend #3"}
              </text>
              <text x={pos.x} y={pos.y + 14} textAnchor="middle" fill={STATE_STROKE[state]} fontSize={10}>
                {STATE_LABEL[state]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
`,T=`import { useEffect, useState } from "react";
import { DISCOVERY_STEPS } from "./discovery";
import { DiscoveryDiagram } from "./DiscoveryDiagram";

const STEP_INTERVAL_MS = 2000;

export function Demo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= DISCOVERY_STEPS.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), STEP_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const step = DISCOVERY_STEPS[Math.min(stepIndex, DISCOVERY_STEPS.length - 1)];

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-400">
        Пунктир — канал Service Discovery (регистрация и heartbeat), сплошная линия — маршрутизация LB.
      </p>

      <DiscoveryDiagram step={step} />

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
            setStepIndex((i) => Math.min(DISCOVERY_STEPS.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {DISCOVERY_STEPS.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={DISCOVERY_STEPS.length - 1}
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
`,V={meta:{id:"service-discovery",title:"Service Discovery и Heartbeat",category:"architectural",summary:"Как LB узнаёт о новых бэкендах (регистрация) и о падении старых (пропущенный heartbeat) без ручного редактирования конфига."},Demo:w,Explanation:_,code:[{filename:"discovery.ts",language:"typescript",source:O},{filename:"DiscoveryDiagram.tsx",language:"tsx",source:I},{filename:"Demo.tsx",language:"tsx",source:T}]};export{V as default};
