/* empty css              */import{_ as n,a as s,b as T}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{d as N,c as k,e as E}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as g}from"./proxy-BroObIT1.js";const w={failureThreshold:3,openDurationTicks:3};function B(e,r=w){let t="closed",c=0,a=-1/0;const o=[];for(const i of e){t==="open"&&i.tick-a>=r.openDurationTicks&&(t="half-open");const u=t;let x,p,m;t==="open"?(x=!1,p="short-circuited",m=`Запрос #${i.id}: цепь разомкнута — мгновенный отказ, backend даже не потревожили.`):t==="half-open"?(x=!0,i.willSucceed?(p="success",t="closed",c=0,m=`Запрос #${i.id}: пробный запрос в half-open прошёл — цепь снова замкнута.`):(p="failure",t="open",a=i.tick,m=`Запрос #${i.id}: пробный запрос в half-open снова упал — backend ещё не восстановился, опять размыкаем.`)):(x=!0,i.willSucceed?(p="success",c=0,m=`Запрос #${i.id}: успех, счётчик отказов сброшен.`):(p="failure",c+=1,c>=r.failureThreshold?(t="open",a=i.tick,m=`Запрос #${i.id}: отказ №${c} подряд — порог (${r.failureThreshold}) достигнут, размыкаем цепь.`):m=`Запрос #${i.id}: отказ №${c} подряд из ${r.failureThreshold} — цепь пока замкнута.`)),o.push({id:i.id,tick:i.tick,stateBefore:u,stateAfter:t,attempted:x,outcome:p,consecutiveFailures:c,description:m})}return o}const v=[{id:1,tick:0,willSucceed:!0},{id:2,tick:1,willSucceed:!0},{id:3,tick:2,willSucceed:!1},{id:4,tick:3,willSucceed:!1},{id:5,tick:4,willSucceed:!1},{id:6,tick:5,willSucceed:!1},{id:7,tick:6,willSucceed:!1},{id:8,tick:7,willSucceed:!0},{id:9,tick:8,willSucceed:!0},{id:10,tick:9,willSucceed:!1},{id:11,tick:10,willSucceed:!1},{id:12,tick:11,willSucceed:!1},{id:13,tick:12,willSucceed:!1},{id:14,tick:13,willSucceed:!1},{id:15,tick:14,willSucceed:!1},{id:16,tick:15,willSucceed:!0},{id:17,tick:16,willSucceed:!0},{id:18,tick:17,willSucceed:!0},{id:19,tick:18,willSucceed:!0}],C=640,A=180,d=150,f=60,l={client:{x:90,y:90},breaker:{x:320,y:90},backend:{x:550,y:90}},L={closed:"CLOSED",open:"OPEN","half-open":"HALF-OPEN"},I={closed:"emerald",open:"rose","half-open":"amber"},b=1.1;function h(e){return{x:e.x-d/2,y:e.y-f/2}}function P({legs:e,eventKey:r}){return n(T,{children:e.map(([t,c],a)=>{const o=l[t],i=l[c];return n(g.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:o.x,cy:o.y,opacity:0},animate:{cx:[o.x,i.x],cy:[o.y,i.y],opacity:[0,1,1,0]},transition:{duration:b,delay:a*b,ease:"easeInOut"}},`${r}-leg-${a}`)})})}function $({step:e}){const r=e.attempted?[["client","breaker"],["breaker","backend"]]:[["client","breaker"]],t=`${e.id}`,c=I[e.stateAfter],a=e.outcome==="success"?"emerald":e.outcome==="failure"?"rose":"slate";return n("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:s("svg",{viewBox:`0 0 ${C} ${A}`,className:"h-auto w-full",role:"img","aria-label":"Схема прохождения запроса через Circuit Breaker",children:[n("line",{x1:l.client.x+d/2,y1:l.client.y,x2:l.breaker.x-d/2,y2:l.breaker.y,stroke:"rgb(51 65 85)",strokeWidth:2}),n("line",{x1:l.breaker.x+d/2,y1:l.breaker.y,x2:l.backend.x-d/2,y2:l.backend.y,stroke:"rgb(51 65 85)",strokeWidth:2}),n(P,{legs:r,eventKey:t}),n(y,{rect:h(l.client),title:"Client",tone:"indigo",flashKey:t}),n(D,{rect:h(l.breaker),tone:c,label:L[e.stateAfter],flashKey:t}),n(y,{rect:h(l.backend),title:"Backend",tone:a,flashKey:e.attempted?t:"idle"})]})})}const S={slate:"rgb(30 41 59)",indigo:"rgb(49 46 129)",emerald:"rgb(6 78 59)",rose:"rgb(80 7 36)",amber:"rgb(120 53 15)"},O={slate:"rgb(71 85 105)",indigo:"rgb(129 140 248)",emerald:"rgb(52 211 153)",rose:"rgb(251 113 133)",amber:"rgb(251 191 36)"};function y({rect:e,title:r,tone:t,flashKey:c}){return s("g",{children:[n(g.rect,{x:e.x,y:e.y,width:d,height:f,rx:10,fill:S[t],stroke:O[t],strokeWidth:t==="slate"?1.5:2.5,animate:t!=="slate"?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${e.x+d/2}px ${e.y+f/2}px`},transition:{duration:.4}},c),n("text",{x:e.x+d/2,y:e.y+f/2+5,textAnchor:"middle",fill:"white",fontSize:14,fontWeight:600,children:r})]})}function D({rect:e,tone:r,label:t,flashKey:c}){return s("g",{children:[n(g.rect,{x:e.x,y:e.y,width:d,height:f,rx:10,fill:S[r],stroke:O[r],strokeWidth:2.5,animate:{scale:[1,1.04,1]},style:{transformOrigin:`${e.x+d/2}px ${e.y+f/2}px`},transition:{duration:.4}},c),n("text",{x:e.x+d/2,y:e.y+f/2-6,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:"Circuit Breaker"}),n("text",{x:e.x+d/2,y:e.y+f/2+14,textAnchor:"middle",fill:"white",fontSize:12,fontWeight:700,children:t})]})}const K=1100,W={success:"успех",failure:"отказ","short-circuited":"быстрый отказ (backend не тронут)"};function F(){const e=N(()=>B(v),[]),[r,t]=k(0),[c,a]=k(!1),o=r>=e.length-1;E(()=>{var m;if(!c)return;if(o){a(!1);return}const u=(m=e[r])!=null&&m.attempted?2:1,x=b*u*1e3+K,p=setTimeout(()=>t(_=>_+1),x);return()=>clearTimeout(p)},[c,o,r,e]);const i=e[Math.min(r,e.length-1)];return s("div",{className:"space-y-6",children:[n($,{step:i}),s("div",{className:"flex flex-wrap items-center gap-3 text-sm",children:[s("span",{className:"rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-slate-300",children:["запрос #",i.id]}),s("span",{className:"rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-slate-300",children:["исход: ",W[i.outcome]]}),s("span",{className:"rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-slate-300",children:["отказов подряд: ",i.consecutiveFailures]})]}),n("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:i.description}),s("div",{className:"flex flex-wrap items-center gap-3",children:[n("button",{onClick:()=>{t(0),a(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),n("button",{onClick:()=>{a(!1),t(u=>Math.max(0,u-1))},disabled:r===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),n("button",{onClick:()=>a(u=>!u),disabled:o,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:c?"⏸ Пауза":"▶ Авто"}),n("button",{onClick:()=>{a(!1),t(u=>Math.min(e.length-1,u+1))},disabled:o,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),s("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[r+1," / ",e.length]})]}),n("input",{type:"range",min:0,max:e.length-1,value:r,onChange:u=>{a(!1),t(Number(u.target.value))},className:"w-full accent-indigo-500"})]})}function R(){return s("div",{className:"space-y-4 text-slate-300",children:[s("p",{children:[n("strong",{className:"text-white",children:"Circuit Breaker (Предохранитель)"})," ",'— паттерн отказоустойчивости: защищает вызывающего от бесполезных обращений к упавшему сервису. Название — прямая метафора электрического автомата: если через него постоянно "бьёт током" (сервис отказывает), он размыкает цепь, чтобы не жечь проводку дальше — то есть не тратить время, потоки и соединения на запросы, которые почти наверняка провалятся.']}),s("div",{children:[n("h3",{className:"font-semibold text-white",children:"Три состояния"}),s("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[s("li",{children:[n("strong",{children:"Closed"})," — обычный режим: запросы идут к сервису, а брейкер считает отказы подряд."]}),s("li",{children:[n("strong",{children:"Open"})," — после N отказов подряд цепь размыкается: все запросы отбиваются мгновенно (fast fail), сервис вообще не трогаем — даём ему время восстановиться."]}),s("li",{children:[n("strong",{children:"Half-Open"})," — по истечении паузы пропускаем ОДИН пробный запрос. Прошёл — закрываем цепь и работаем как обычно. Не прошёл — снова открываем и ждём ещё столько же."]})]})]}),s("div",{children:[n("h3",{className:"font-semibold text-white",children:"Почему не просто ретраить"}),n("p",{className:"mt-2",children:'Без брейкера каждый запрос к упавшему сервису всё равно ждёт таймаут, занимает поток/соединение и в итоге падает — при высокой нагрузке это может уронить и вызывающий сервис тоже (каскадный отказ). Брейкер разрывает эту цепочку: пока сервис лежит, ответ "не сработает" отдаётся мгновенно, без похода к нему.'})]}),s("div",{children:[n("h3",{className:"font-semibold text-white",children:"Что дальше в реальных системах"}),s("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:"Порог обычно считают не по подряд идущим отказам, а по проценту ошибок за скользящее окно времени — устойчивее к редким сбоям."}),n("li",{children:"В half-open часто пускают не один, а несколько пробных запросов, прежде чем закрыть цепь полностью."}),n("li",{children:"Открытая цепь — хорошее место для fallback: отдать закэшированный ответ или деградированную версию функциональности вместо ошибки."})]})]}),s("div",{children:[n("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),n("p",{className:"mt-2",children:"Netflix Hystrix (классика, задавшая паттерн), resilience4j и Polly в Java/.NET-экосистемах, Istio/Envoy на уровне service mesh — настраиваемый circuit breaking без единой строчки кода в сервисе."})]})]})}const U=`/**
 * Circuit Breaker — защищает вызывающего от бесполезных походов к упавшему
 * сервису. Три состояния:
 *  - closed     — всё как обычно, запросы идут к backend, считаем отказы.
 *  - open       — backend признан недоступным, запросы отбиваются сразу
 *                 (fast fail), backend не трогаем вообще.
 *  - half-open  — после паузы пускаем ОДИН пробный запрос: получилось —
 *                 закрываем цепь, снова упал — опять открываем и ждём ещё.
 */

export type CircuitState = "closed" | "open" | "half-open";

export interface CircuitConfig {
  /** Сколько отказов подряд в closed-состоянии размыкают цепь. */
  failureThreshold: number;
  /** Сколько "тиков" цепь остаётся разомкнутой, прежде чем дать пробный запрос. */
  openDurationTicks: number;
}

export const DEFAULT_CONFIG: CircuitConfig = {
  failureThreshold: 3,
  openDurationTicks: 3,
};

/** Заранее известный (авторский) исход запроса — что случится, ЕСЛИ он дойдёт до backend. */
export interface RequestOutcomeDef {
  id: number;
  tick: number;
  willSucceed: boolean;
}

export type RequestOutcome = "success" | "failure" | "short-circuited";

export interface CircuitStep {
  id: number;
  tick: number;
  stateBefore: CircuitState;
  stateAfter: CircuitState;
  /** true — запрос реально дошёл до backend (closed или пробный half-open). */
  attempted: boolean;
  outcome: RequestOutcome;
  consecutiveFailures: number;
  description: string;
}

/**
 * Прогоняет таймлайн запросов через state machine автомата защиты.
 * Переход open → half-open происходит "лениво": проверяется перед
 * обработкой ближайшего запроса, а не по таймеру в реальном времени —
 * этого достаточно для дискретной модели.
 */
export function simulateCircuitBreaker(
  requests: RequestOutcomeDef[],
  config: CircuitConfig = DEFAULT_CONFIG,
): CircuitStep[] {
  let state: CircuitState = "closed";
  let consecutiveFailures = 0;
  let openSinceTick = -Infinity;

  const steps: CircuitStep[] = [];

  for (const req of requests) {
    // "Ленивый" переход open → half-open — проверяем ДО фиксации stateBefore,
    // иначе пробный запрос в UI будет подписан как "open", а не "half-open".
    if (
      state === "open" &&
      req.tick - openSinceTick >= config.openDurationTicks
    ) {
      state = "half-open";
    }
    const stateBefore = state;

    let attempted: boolean;
    let outcome: RequestOutcome;
    let description: string;

    if (state === "open") {
      attempted = false;
      outcome = "short-circuited";
      description = \`Запрос #\${req.id}: цепь разомкнута — мгновенный отказ, backend даже не потревожили.\`;
    } else if (state === "half-open") {
      attempted = true;
      if (req.willSucceed) {
        outcome = "success";
        state = "closed";
        consecutiveFailures = 0;
        description = \`Запрос #\${req.id}: пробный запрос в half-open прошёл — цепь снова замкнута.\`;
      } else {
        outcome = "failure";
        state = "open";
        openSinceTick = req.tick;
        description = \`Запрос #\${req.id}: пробный запрос в half-open снова упал — backend ещё не восстановился, опять размыкаем.\`;
      }
    } else {
      attempted = true;
      if (req.willSucceed) {
        outcome = "success";
        consecutiveFailures = 0;
        description = \`Запрос #\${req.id}: успех, счётчик отказов сброшен.\`;
      } else {
        outcome = "failure";
        consecutiveFailures += 1;
        if (consecutiveFailures >= config.failureThreshold) {
          state = "open";
          openSinceTick = req.tick;
          description = \`Запрос #\${req.id}: отказ №\${consecutiveFailures} подряд — порог (\${config.failureThreshold}) достигнут, размыкаем цепь.\`;
        } else {
          description = \`Запрос #\${req.id}: отказ №\${consecutiveFailures} подряд из \${config.failureThreshold} — цепь пока замкнута.\`;
        }
      }
    }

    steps.push({
      id: req.id,
      tick: req.tick,
      stateBefore,
      stateAfter: state,
      attempted,
      outcome,
      consecutiveFailures,
      description,
    });
  }

  return steps;
}

/**
 * Сценарий: сервис работает → начинает отказывать → цепь размыкается →
 * первая попытка восстановления удаётся → сервис снова ломается → цепь
 * размыкается ещё раз → первая пробная попытка не удаётся (ещё не готов) →
 * вторая пробная попытка удаётся → всё стабильно.
 */
export const DEFAULT_REQUESTS: RequestOutcomeDef[] = [
  { id: 1, tick: 0, willSucceed: true },
  { id: 2, tick: 1, willSucceed: true },
  { id: 3, tick: 2, willSucceed: false },
  { id: 4, tick: 3, willSucceed: false },
  { id: 5, tick: 4, willSucceed: false },
  { id: 6, tick: 5, willSucceed: false },
  { id: 7, tick: 6, willSucceed: false },
  { id: 8, tick: 7, willSucceed: true },
  { id: 9, tick: 8, willSucceed: true },
  { id: 10, tick: 9, willSucceed: false },
  { id: 11, tick: 10, willSucceed: false },
  { id: 12, tick: 11, willSucceed: false },
  { id: 13, tick: 12, willSucceed: false },
  { id: 14, tick: 13, willSucceed: false },
  { id: 15, tick: 14, willSucceed: false },
  { id: 16, tick: 15, willSucceed: true },
  { id: 17, tick: 16, willSucceed: true },
  { id: 18, tick: 17, willSucceed: true },
  { id: 19, tick: 18, willSucceed: true },
];
`,X=`import { motion } from "framer-motion";
import type { CircuitState, CircuitStep } from "./circuitBreaker";

// Один поток запроса Client → Breaker → Backend — тот же визуальный язык,
// что и в остальных диаграммах категории. Раньше состояние автомата
// рисовалось ОТДЕЛЬНОЙ схемой сверху (треугольник с кривыми стрелками) —
// пришлось следить за двумя несвязанными картинками сразу. Теперь состояние —
// это просто постоянный цвет и подпись прямо на узле Breaker.
const W = 640;
const H = 180;
const BOX_W = 150;
const BOX_H = 60;

type NodeId = "client" | "breaker" | "backend";
const POS: Record<NodeId, { x: number; y: number }> = {
  client: { x: 90, y: 90 },
  breaker: { x: 320, y: 90 },
  backend: { x: 550, y: 90 },
};

const STATE_LABEL: Record<CircuitState, string> = {
  closed: "CLOSED",
  open: "OPEN",
  "half-open": "HALF-OPEN",
};

// Светофорная метафора: закрыта — можно ехать, открыта — стоп, половина — осторожно.
const STATE_TONE: Record<CircuitState, "emerald" | "rose" | "amber"> = {
  closed: "emerald",
  open: "rose",
  "half-open": "amber",
};

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export const PACKET_LEG_DURATION = 1.1;

function rect(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

function LegPulses({ legs, eventKey }: { legs: [NodeId, NodeId][]; eventKey: string }) {
  return (
    <>
      {legs.map(([from, to], i) => {
        const a = POS[from];
        const b = POS[to];
        return (
          <motion.circle
            key={\`\${eventKey}-leg-\${i}\`}
            r={7}
            fill="rgb(99 102 241)"
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: PACKET_LEG_DURATION,
              delay: i * PACKET_LEG_DURATION,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}

export function CircuitBreakerDiagram({ step }: { step: CircuitStep }) {
  const legs: [NodeId, NodeId][] = step.attempted
    ? [
        ["client", "breaker"],
        ["breaker", "backend"],
      ]
    : [["client", "breaker"]];

  const eventKey = \`\${step.id}\`;
  const stateTone = STATE_TONE[step.stateAfter];
  const backendTone =
    step.outcome === "success" ? "emerald" : step.outcome === "failure" ? "rose" : "slate";

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        className="h-auto w-full"
        role="img"
        aria-label="Схема прохождения запроса через Circuit Breaker"
      >
        <line
          x1={POS.client.x + BOX_W / 2}
          y1={POS.client.y}
          x2={POS.breaker.x - BOX_W / 2}
          y2={POS.breaker.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />
        <line
          x1={POS.breaker.x + BOX_W / 2}
          y1={POS.breaker.y}
          x2={POS.backend.x - BOX_W / 2}
          y2={POS.backend.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />

        <LegPulses legs={legs} eventKey={eventKey} />

        <Node rect={rect(POS.client)} title="Client" tone="indigo" flashKey={eventKey} />
        <BreakerNode rect={rect(POS.breaker)} tone={stateTone} label={STATE_LABEL[step.stateAfter]} flashKey={eventKey} />
        <Node
          rect={rect(POS.backend)}
          title="Backend"
          tone={backendTone}
          flashKey={step.attempted ? eventKey : "idle"}
        />
      </svg>
    </div>
  );
}

const TONE_FILL: Record<string, string> = {
  slate: "rgb(30 41 59)",
  indigo: "rgb(49 46 129)",
  emerald: "rgb(6 78 59)",
  rose: "rgb(80 7 36)",
  amber: "rgb(120 53 15)",
};
const TONE_STROKE: Record<string, string> = {
  slate: "rgb(71 85 105)",
  indigo: "rgb(129 140 248)",
  emerald: "rgb(52 211 153)",
  rose: "rgb(251 113 133)",
  amber: "rgb(251 191 36)",
};

function Node({
  rect: r,
  title,
  tone,
  flashKey,
}: {
  rect: { x: number; y: number };
  title: string;
  tone: keyof typeof TONE_FILL;
  flashKey: string;
}) {
  return (
    <g>
      <motion.rect
        key={flashKey}
        x={r.x}
        y={r.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth={tone === "slate" ? 1.5 : 2.5}
        animate={tone !== "slate" ? { scale: [1, 1.04, 1] } : { scale: 1 }}
        style={{ transformOrigin: \`\${r.x + BOX_W / 2}px \${r.y + BOX_H / 2}px\` }}
        transition={{ duration: 0.4 }}
      />
      <text
        x={r.x + BOX_W / 2}
        y={r.y + BOX_H / 2 + 5}
        textAnchor="middle"
        fill="white"
        fontSize={14}
        fontWeight={600}
      >
        {title}
      </text>
    </g>
  );
}

/** Узел Breaker всегда окрашен по ТЕКУЩЕМУ состоянию автомата — не только
 * когда через него прошёл запрос, — и всегда подписан этим состоянием. */
function BreakerNode({
  rect: r,
  tone,
  label,
  flashKey,
}: {
  rect: { x: number; y: number };
  tone: keyof typeof TONE_FILL;
  label: string;
  flashKey: string;
}) {
  return (
    <g>
      <motion.rect
        key={flashKey}
        x={r.x}
        y={r.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth={2.5}
        animate={{ scale: [1, 1.04, 1] }}
        style={{ transformOrigin: \`\${r.x + BOX_W / 2}px \${r.y + BOX_H / 2}px\` }}
        transition={{ duration: 0.4 }}
      />
      <text
        x={r.x + BOX_W / 2}
        y={r.y + BOX_H / 2 - 6}
        textAnchor="middle"
        fill="white"
        fontSize={13}
        fontWeight={600}
      >
        Circuit Breaker
      </text>
      <text
        x={r.x + BOX_W / 2}
        y={r.y + BOX_H / 2 + 14}
        textAnchor="middle"
        fill="white"
        fontSize={12}
        fontWeight={700}
      >
        {label}
      </text>
    </g>
  );
}
`,q=`import { useEffect, useMemo, useState } from "react";
import { DEFAULT_REQUESTS, simulateCircuitBreaker } from "./circuitBreaker";
import { CircuitBreakerDiagram, PACKET_LEG_DURATION } from "./CircuitBreakerDiagram";

// Пауза после того, как пакет долетел, — чтобы успеть прочитать описание.
const READ_PAUSE_MS = 1100;

const OUTCOME_LABEL: Record<string, string> = {
  success: "успех",
  failure: "отказ",
  "short-circuited": "быстрый отказ (backend не тронут)",
};

export function Demo() {
  const steps = useMemo(() => simulateCircuitBreaker(DEFAULT_REQUESTS), []);

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const legs = steps[stepIndex]?.attempted ? 2 : 1;
    const delay = PACKET_LEG_DURATION * legs * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      <CircuitBreakerDiagram step={step} />

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-slate-300">
          запрос #{step.id}
        </span>
        <span className="rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-slate-300">
          исход: {OUTCOME_LABEL[step.outcome]}
        </span>
        <span className="rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-slate-300">
          отказов подряд: {step.consecutiveFailures}
        </span>
      </div>

      <p className="min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
        {step.description}
      </p>

      {/* Плеер: сброс / назад / авто / вперёд + перемотка ползунком. */}
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
            setStepIndex((i) => Math.min(steps.length - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          {stepIndex + 1} / {steps.length}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={steps.length - 1}
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
`,Q={meta:{id:"circuit-breaker",title:"Circuit Breaker",category:"architectural",summary:"Автомат closed/open/half-open, который перестаёт беспокоить упавший сервис бесполезными запросами и сам пробует его восстановление."},Demo:F,Explanation:R,code:[{filename:"circuitBreaker.ts",language:"typescript",source:U},{filename:"CircuitBreakerDiagram.tsx",language:"tsx",source:X},{filename:"Demo.tsx",language:"tsx",source:q}]};export{Q as default};
