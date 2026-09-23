/* empty css              */import{_ as e,a}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m,e as h}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as S}from"./proxy-BroObIT1.js";const E=[{id:1,label:"До обновления",instances:[{id:"i1",role:"old",traffic:"live"},{id:"i2",role:"old",traffic:"live"},{id:"i3",role:"old",traffic:"live"}],description:"Все три инстанса на старой версии, router шлёт трафик на все три."},{id:2,label:"Заменили первый инстанс",instances:[{id:"i1",role:"new",traffic:"live"},{id:"i2",role:"old",traffic:"live"},{id:"i3",role:"old",traffic:"live"}],description:"i1 обновлён и снова в строю — router продолжает слать трафик на все живые инстансы, включая уже обновлённый."},{id:3,label:"Заменили второй инстанс",instances:[{id:"i1",role:"new",traffic:"live"},{id:"i2",role:"new",traffic:"live"},{id:"i3",role:"old",traffic:"live"}],description:"Два из трёх уже на новой версии — старая и новая версии обслуживают трафик ОДНОВРЕМЕННО."},{id:4,label:"Готово",instances:[{id:"i1",role:"new",traffic:"live"},{id:"i2",role:"new",traffic:"live"},{id:"i3",role:"new",traffic:"live"}],description:"Все инстансы обновлены по очереди — в моменте выкатки никогда не было простоя, но старая и новая версии какое-то время работали бок о бок."}],w=[{id:1,label:"Держим два полных комплекта",instances:[{id:"b1",role:"old",traffic:"live"},{id:"b2",role:"old",traffic:"live"},{id:"g1",role:"new",traffic:"idle"},{id:"g2",role:"new",traffic:"idle"}],description:"Blue (старая версия) обслуживает весь трафик. Green (новая версия) уже полностью развёрнут и прогрет, но не получает ни одного запроса."},{id:2,label:"Переключаем router",instances:[{id:"b1",role:"old",traffic:"idle"},{id:"b2",role:"old",traffic:"idle"},{id:"g1",role:"new",traffic:"live"},{id:"g2",role:"new",traffic:"live"}],description:"Router переключается на Green одномоментно, целиком. Blue остаётся развёрнутым — если что-то пошло не так, можно откатиться так же мгновенно."}],_=[{id:1,label:"0% на новую версию",instances:[{id:"i1",role:"old",traffic:"live"},{id:"i2",role:"old",traffic:"live"},{id:"n1",role:"new",traffic:"idle"},{id:"n2",role:"new",traffic:"idle"}],description:"Новая версия развёрнута, но трафика на неё пока нет вообще."},{id:2,label:"95% / 5%",instances:[{id:"i1",role:"old",traffic:"live"},{id:"i2",role:"old",traffic:"live"},{id:"n1",role:"new",traffic:"live"},{id:"n2",role:"new",traffic:"live"}],trafficLabels:{old:"95%",new:"5%"},description:"На новую версию пускают маленький «канареечный» процент трафика — если она сломана, пострадает не вся аудитория."},{id:3,label:"70% / 30%",instances:[{id:"i1",role:"old",traffic:"live"},{id:"i2",role:"old",traffic:"live"},{id:"n1",role:"new",traffic:"live"},{id:"n2",role:"new",traffic:"live"}],trafficLabels:{old:"70%",new:"30%"},description:"Метрики новой версии в порядке — постепенно увеличиваем её долю трафика."},{id:4,label:"100% на новую версию",instances:[{id:"i1",role:"old",traffic:"hidden"},{id:"i2",role:"old",traffic:"hidden"},{id:"n1",role:"new",traffic:"live"},{id:"n2",role:"new",traffic:"live"}],description:"Старая версия выводится из ротации — раскатка завершена."}],y=[{id:"rolling",label:"Rolling Release",hint:"Заменяем инстансы по одному — router всегда шлёт трафик на все живые, старые и уже обновлённые вперемешку.",steps:E},{id:"blue-green",label:"Blue/Green Release",hint:"Два полных комплекта одновременно — переключение router мгновенное и полностью обратимое.",steps:w},{id:"canary",label:"Canary Release",hint:"Новая версия получает только процент трафика — увеличиваем долю постепенно, наблюдая за метриками.",steps:_}];function N(i){return y.find(t=>t.id===i)}const I=640,T=220,d={x:320,y:50},u=110,p=48,f=170;function v(i,t){return 320-(t-1)*150/2+i*150}const O={old:"rgb(30 41 59)",new:"rgb(49 22 89)"},b={old:"rgb(100 116 139)",new:"rgb(168 85 247)"};function L({step:i}){const t=i.instances.filter(n=>n.traffic!=="hidden");return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:a("svg",{viewBox:`0 0 ${I} ${T}`,className:"h-auto w-full",role:"img","aria-label":"Схема раскатки новой версии",children:[t.map((n,l)=>{var c;const s=v(l,t.length);if(!(n.traffic==="live"))return null;const o=(c=i.trafficLabels)==null?void 0:c[n.role];return a("g",{children:[e("line",{x1:d.x,y1:d.y+20,x2:s,y2:f-p/2,stroke:b[n.role],strokeWidth:2}),o&&e("text",{x:(d.x+s)/2,y:(d.y+20+f-p/2)/2-6,textAnchor:"middle",fill:b[n.role],fontSize:12,fontWeight:600,children:o})]},`edge-${n.id}`)}),a("g",{children:[e("rect",{x:d.x-60,y:d.y-20,width:120,height:40,rx:10,fill:"rgb(30 41 59)",stroke:"rgb(129 140 248)",strokeWidth:2}),e("text",{x:d.x,y:d.y+5,textAnchor:"middle",fill:"white",fontSize:14,fontWeight:600,children:"Router"})]}),t.map((n,l)=>{const s=v(l,t.length);return e(B,{x:s,inst:n},n.id)})]})})}function B({x:i,inst:t}){const n=t.traffic==="live",l={x:i-u/2,y:f-p/2};return a("g",{children:[e(S.rect,{x:l.x,y:l.y,width:u,height:p,rx:10,fill:O[t.role],stroke:b[t.role],strokeWidth:n?2.5:1.5,strokeDasharray:n?void 0:"4 4",initial:{opacity:0,scale:.9},animate:{opacity:n?1:.55,scale:1},transition:{duration:.35}},`${t.id}-${t.role}-${t.traffic}`),e("text",{x:i,y:f-2,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:t.role==="old"?"Old":"New"}),e("text",{x:i,y:f+14,textAnchor:"middle",fill:n?"rgb(203 213 225)":"rgb(100 116 139)",fontSize:10,children:n?"получает трафик":"простаивает"})]})}const k=2200;function A(){const[i,t]=m("rolling"),n=N(i),[l,s]=m(0),[g,o]=m(!1),c=l>=n.steps.length-1;h(()=>{s(0),o(!1)},[i]),h(()=>{if(!g)return;if(c){o(!1);return}const r=setTimeout(()=>s(R=>R+1),k);return()=>clearTimeout(r)},[g,c,l]);const x=n.steps[Math.min(l,n.steps.length-1)];return a("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:y.map(r=>e("button",{onClick:()=>t(r.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",r.id===i?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:r.label},r.id))}),e("p",{className:"text-sm text-slate-400",children:n.hint}),e(L,{step:x}),a("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:x.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:x.description})]}),a("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{s(0),o(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{o(!1),s(r=>Math.max(0,r-1))},disabled:l===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>o(r=>!r),disabled:c,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:g?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{o(!1),s(r=>Math.min(n.steps.length-1,r+1))},disabled:c,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),a("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[l+1," / ",n.steps.length]})]}),e("input",{type:"range",min:0,max:n.steps.length-1,value:l,onChange:r=>{o(!1),s(Number(r.target.value))},className:"w-full accent-indigo-500"})]})}function W(){return a("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:"Обновить прод так, чтобы не сломать его для живых пользователей, — отдельная задача. Три стратегии решают её по-разному: разница в том, что происходит с трафиком, пока обновление идёт."}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Rolling Release"}),e("p",{className:"mt-2",children:"Инстансы обновляются по одному: снял с ротации → обновил → вернул → взял следующий. Простоя нет никогда, но какое-то время старая и новая версии обслуживают трафик ОДНОВРЕМЕННО — если между версиями несовместимый формат данных или API, это может привести к неожиданным багам."})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Blue/Green Release"}),e("p",{className:"mt-2",children:"Держим два ПОЛНЫХ комплекта инфраструктуры одновременно — старый (Blue) и новый (Green). Переключение router — мгновенное и атомарное: либо весь трафик на Blue, либо весь на Green, смешанного состояния не бывает. Откат — тоже мгновенный, обратным переключением. Цена — двойной расход ресурсов на время раскатки."})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Canary Release"}),e("p",{className:"mt-2",children:"Новая версия получает только небольшой процент реального трафика — «канарейка в шахте». Если метрики (ошибки, задержка) в порядке, процент постепенно увеличивают, пока не дойдёт до 100%. Если нет — откатывают, но пострадала лишь малая доля пользователей, а не вся аудитория сразу."})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Итого"}),e("p",{className:"mt-2",children:"Rolling — самый дешёвый по ресурсам, но с окном смешанных версий. Blue/Green — мгновенный и предсказуемый откат ценой двойной инфраструктуры. Canary — самый осторожный: минимизирует blast radius (сколько пользователей затронет проблема), но требует мониторинга и постепенного увеличения трафика."})]})]})}const G=`/**
 * Три способа выкатить новую версию так, чтобы не положить продакшен.
 * Разница — в том, ЧТО происходит с трафиком, пока обновление идёт:
 *  - Rolling — заменяем инстансы по одному, router всегда шлёт трафик на
 *    ВСЕ живые инстансы сразу (и старые, и уже обновлённые).
 *  - Blue/Green — держим ДВА полных комплекта (старый и новый), router
 *    переключается на новый комплект одномоментно, целиком.
 *  - Canary — router постепенно переносит ПРОЦЕНТ трафика на новую версию,
 *    остальное продолжает идти на старую.
 */

export type ReleaseStrategyId = "rolling" | "blue-green" | "canary";

export type InstanceRole = "old" | "new";
export type InstanceTraffic = "live" | "idle" | "hidden";

export interface InstanceState {
  id: string;
  role: InstanceRole;
  traffic: InstanceTraffic;
}

export interface ReleaseStep {
  id: number;
  label: string;
  instances: InstanceState[];
  /** Подпись у стрелки router→инстанс (используется в Canary: "95%", "5%"…). */
  trafficLabels?: Record<string, string>;
  description: string;
}

export interface ReleaseStrategyDef {
  id: ReleaseStrategyId;
  label: string;
  hint: string;
  steps: ReleaseStep[];
}

const ROLLING_STEPS: ReleaseStep[] = [
  {
    id: 1,
    label: "До обновления",
    instances: [
      { id: "i1", role: "old", traffic: "live" },
      { id: "i2", role: "old", traffic: "live" },
      { id: "i3", role: "old", traffic: "live" },
    ],
    description: "Все три инстанса на старой версии, router шлёт трафик на все три.",
  },
  {
    id: 2,
    label: "Заменили первый инстанс",
    instances: [
      { id: "i1", role: "new", traffic: "live" },
      { id: "i2", role: "old", traffic: "live" },
      { id: "i3", role: "old", traffic: "live" },
    ],
    description:
      "i1 обновлён и снова в строю — router продолжает слать трафик на все живые инстансы, включая уже обновлённый.",
  },
  {
    id: 3,
    label: "Заменили второй инстанс",
    instances: [
      { id: "i1", role: "new", traffic: "live" },
      { id: "i2", role: "new", traffic: "live" },
      { id: "i3", role: "old", traffic: "live" },
    ],
    description: "Два из трёх уже на новой версии — старая и новая версии обслуживают трафик ОДНОВРЕМЕННО.",
  },
  {
    id: 4,
    label: "Готово",
    instances: [
      { id: "i1", role: "new", traffic: "live" },
      { id: "i2", role: "new", traffic: "live" },
      { id: "i3", role: "new", traffic: "live" },
    ],
    description:
      "Все инстансы обновлены по очереди — в моменте выкатки никогда не было простоя, но старая и новая версии какое-то время работали бок о бок.",
  },
];

const BLUE_GREEN_STEPS: ReleaseStep[] = [
  {
    id: 1,
    label: "Держим два полных комплекта",
    instances: [
      { id: "b1", role: "old", traffic: "live" },
      { id: "b2", role: "old", traffic: "live" },
      { id: "g1", role: "new", traffic: "idle" },
      { id: "g2", role: "new", traffic: "idle" },
    ],
    description:
      "Blue (старая версия) обслуживает весь трафик. Green (новая версия) уже полностью развёрнут и прогрет, но не получает ни одного запроса.",
  },
  {
    id: 2,
    label: "Переключаем router",
    instances: [
      { id: "b1", role: "old", traffic: "idle" },
      { id: "b2", role: "old", traffic: "idle" },
      { id: "g1", role: "new", traffic: "live" },
      { id: "g2", role: "new", traffic: "live" },
    ],
    description:
      "Router переключается на Green одномоментно, целиком. Blue остаётся развёрнутым — если что-то пошло не так, можно откатиться так же мгновенно.",
  },
];

const CANARY_STEPS: ReleaseStep[] = [
  {
    id: 1,
    label: "0% на новую версию",
    instances: [
      { id: "i1", role: "old", traffic: "live" },
      { id: "i2", role: "old", traffic: "live" },
      { id: "n1", role: "new", traffic: "idle" },
      { id: "n2", role: "new", traffic: "idle" },
    ],
    description: "Новая версия развёрнута, но трафика на неё пока нет вообще.",
  },
  {
    id: 2,
    label: "95% / 5%",
    instances: [
      { id: "i1", role: "old", traffic: "live" },
      { id: "i2", role: "old", traffic: "live" },
      { id: "n1", role: "new", traffic: "live" },
      { id: "n2", role: "new", traffic: "live" },
    ],
    trafficLabels: { old: "95%", new: "5%" },
    description:
      "На новую версию пускают маленький «канареечный» процент трафика — если она сломана, пострадает не вся аудитория.",
  },
  {
    id: 3,
    label: "70% / 30%",
    instances: [
      { id: "i1", role: "old", traffic: "live" },
      { id: "i2", role: "old", traffic: "live" },
      { id: "n1", role: "new", traffic: "live" },
      { id: "n2", role: "new", traffic: "live" },
    ],
    trafficLabels: { old: "70%", new: "30%" },
    description: "Метрики новой версии в порядке — постепенно увеличиваем её долю трафика.",
  },
  {
    id: 4,
    label: "100% на новую версию",
    instances: [
      { id: "i1", role: "old", traffic: "hidden" },
      { id: "i2", role: "old", traffic: "hidden" },
      { id: "n1", role: "new", traffic: "live" },
      { id: "n2", role: "new", traffic: "live" },
    ],
    description: "Старая версия выводится из ротации — раскатка завершена.",
  },
];

export const RELEASE_STRATEGIES: ReleaseStrategyDef[] = [
  {
    id: "rolling",
    label: "Rolling Release",
    hint: "Заменяем инстансы по одному — router всегда шлёт трафик на все живые, старые и уже обновлённые вперемешку.",
    steps: ROLLING_STEPS,
  },
  {
    id: "blue-green",
    label: "Blue/Green Release",
    hint: "Два полных комплекта одновременно — переключение router мгновенное и полностью обратимое.",
    steps: BLUE_GREEN_STEPS,
  },
  {
    id: "canary",
    label: "Canary Release",
    hint: "Новая версия получает только процент трафика — увеличиваем долю постепенно, наблюдая за метриками.",
    steps: CANARY_STEPS,
  },
];

export function getReleaseStrategy(id: ReleaseStrategyId): ReleaseStrategyDef {
  return RELEASE_STRATEGIES.find((s) => s.id === id)!;
}
`,C=`import { motion } from "framer-motion";
import type { InstanceState, ReleaseStep } from "./strategies";

const W = 640;
const H = 220;
const ROUTER = { x: 320, y: 50 };
const BOX_W = 110;
const BOX_H = 48;
const ROW_Y = 170;

function slotX(index: number, total: number) {
  const spacing = 150;
  const start = 320 - ((total - 1) * spacing) / 2;
  return start + index * spacing;
}

const ROLE_FILL: Record<string, string> = {
  old: "rgb(30 41 59)",
  new: "rgb(49 22 89)",
};
const ROLE_STROKE: Record<string, string> = {
  old: "rgb(100 116 139)",
  new: "rgb(168 85 247)",
};

export function ReleaseDiagram({ step }: { step: ReleaseStep }) {
  const visible = step.instances.filter((i) => i.traffic !== "hidden");

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="h-auto w-full" role="img" aria-label="Схема раскатки новой версии">
        {visible.map((inst, i) => {
          const x = slotX(i, visible.length);
          const live = inst.traffic === "live";
          if (!live) return null;
          const label = step.trafficLabels?.[inst.role];
          return (
            <g key={\`edge-\${inst.id}\`}>
              <line
                x1={ROUTER.x}
                y1={ROUTER.y + 20}
                x2={x}
                y2={ROW_Y - BOX_H / 2}
                stroke={ROLE_STROKE[inst.role]}
                strokeWidth={2}
              />
              {label && (
                <text
                  x={(ROUTER.x + x) / 2}
                  y={(ROUTER.y + 20 + ROW_Y - BOX_H / 2) / 2 - 6}
                  textAnchor="middle"
                  fill={ROLE_STROKE[inst.role]}
                  fontSize={12}
                  fontWeight={600}
                >
                  {label}
                </text>
              )}
            </g>
          );
        })}

        <g>
          <rect
            x={ROUTER.x - 60}
            y={ROUTER.y - 20}
            width={120}
            height={40}
            rx={10}
            fill="rgb(30 41 59)"
            stroke="rgb(129 140 248)"
            strokeWidth={2}
          />
          <text x={ROUTER.x} y={ROUTER.y + 5} textAnchor="middle" fill="white" fontSize={14} fontWeight={600}>
            Router
          </text>
        </g>

        {visible.map((inst, i) => {
          const x = slotX(i, visible.length);
          return (
            <InstanceBox
              key={inst.id}
              x={x}
              inst={inst}
            />
          );
        })}
      </svg>
    </div>
  );
}

function InstanceBox({ x, inst }: { x: number; inst: InstanceState }) {
  const live = inst.traffic === "live";
  const rect = { x: x - BOX_W / 2, y: ROW_Y - BOX_H / 2 };
  return (
    <g>
      <motion.rect
        key={\`\${inst.id}-\${inst.role}-\${inst.traffic}\`}
        x={rect.x}
        y={rect.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={ROLE_FILL[inst.role]}
        stroke={ROLE_STROKE[inst.role]}
        strokeWidth={live ? 2.5 : 1.5}
        strokeDasharray={live ? undefined : "4 4"}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: live ? 1 : 0.55, scale: 1 }}
        transition={{ duration: 0.35 }}
      />
      <text
        x={x}
        y={ROW_Y - 2}
        textAnchor="middle"
        fill="white"
        fontSize={13}
        fontWeight={600}
      >
        {inst.role === "old" ? "Old" : "New"}
      </text>
      <text
        x={x}
        y={ROW_Y + 14}
        textAnchor="middle"
        fill={live ? "rgb(203 213 225)" : "rgb(100 116 139)"}
        fontSize={10}
      >
        {live ? "получает трафик" : "простаивает"}
      </text>
    </g>
  );
}
`,P=`import { useEffect, useState } from "react";
import { RELEASE_STRATEGIES, getReleaseStrategy, type ReleaseStrategyId } from "./strategies";
import { ReleaseDiagram } from "./ReleaseDiagram";

const STEP_INTERVAL_MS = 2200;

export function Demo() {
  const [strategyId, setStrategyId] = useState<ReleaseStrategyId>("rolling");
  const strategy = getReleaseStrategy(strategyId);

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= strategy.steps.length - 1;

  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [strategyId]);

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), STEP_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const step = strategy.steps[Math.min(stepIndex, strategy.steps.length - 1)];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {RELEASE_STRATEGIES.map((s) => (
          <button
            key={s.id}
            onClick={() => setStrategyId(s.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              s.id === strategyId
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-400">{strategy.hint}</p>

      <ReleaseDiagram step={step} />

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
            setStepIndex((i) => Math.min(strategy.steps.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {strategy.steps.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={strategy.steps.length - 1}
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
`,Y={meta:{id:"release-strategies",title:"Стратегии релизов",category:"architectural",summary:"Rolling / Blue-Green / Canary — что происходит с трафиком, пока новая версия раскатывается, и чем платим за скорость или безопасность выкатки."},Demo:A,Explanation:W,code:[{filename:"strategies.ts",language:"typescript",source:G},{filename:"ReleaseDiagram.tsx",language:"tsx",source:C},{filename:"Demo.tsx",language:"tsx",source:P}]};export{Y as default};
