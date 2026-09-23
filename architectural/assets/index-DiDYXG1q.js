/* empty css              */import{_ as t,a as c}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as I,d as _,e as N}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as w}from"./proxy-BroObIT1.js";const T=[{id:"round-robin",label:"Round Robin",hint:"Каждый следующий запрос уходит следующему инстансу по кругу — без учёта их текущей нагрузки."},{id:"weighted-round-robin",label:"Weighted Round Robin",hint:"Тот же круг, но инстансы с большим весом получают запросы чаще — учитывается их «мощность», а не текущая нагрузка."},{id:"least-connections",label:"Least Connections",hint:"Запрос уходит инстансу с наименьшим числом активных соединений — балансировщик реагирует на реальную нагрузку."}];function B(n,e){var a;return((a=n.find(s=>s.id===e))==null?void 0:a.label)??e}function R(n,e){const a=n[e.i%n.length];return e.i+=1,a}function C(n){const e=new Map(n.map(s=>[s.id,0])),a=n.reduce((s,r)=>s+r.weight,0);return function(){for(const i of n)e.set(i.id,(e.get(i.id)??0)+i.weight);let r=n[0];for(const i of n)(e.get(i.id)??0)>(e.get(r.id)??0)&&(r=i);return e.set(r.id,(e.get(r.id)??0)-a),r}}function W(n){const e={i:0};return function(s){const r=Math.min(...n.map(u=>s[u.id])),i=n.filter(u=>s[u.id]===r),d=i[e.i%i.length];return e.i+=1,d}}function O(n,e,a,s,r){if(n==="round-robin")return`Запрос #${r.id} → «${e.label}» — просто следующий по кругу.`;if(n==="weighted-round-robin")return`Запрос #${r.id} → «${e.label}» (вес ${e.weight}) — с бо́льшим весом инстанс получает запросы чаще остальных.`;const i=a.map(d=>`${d.label}=${s[d.id]}`).join(", ");return`Запрос #${r.id} → «${e.label}» — у него сейчас меньше всего активных соединений (${i}).`}function A(n,e,a){const s=Object.fromEntries(e.map(o=>[o.id,0])),r={i:0},i=C(e),d=W(e),u=[],h=[],f=Math.max(...a.map(o=>o.arrivalTick+o.duration));for(let o=0;o<=f;o++){const y=u.filter(l=>l.tick===o).sort((l,m)=>l.requestId-m.requestId);for(const l of y)s[l.instanceId]-=1,h.push({kind:"finish",tick:o,requestId:l.requestId,instanceId:l.instanceId,connections:{...s},description:`Запрос #${l.requestId} завершён — освобождаем соединение на «${B(e,l.instanceId)}».`});const E=a.filter(l=>l.arrivalTick===o).sort((l,m)=>l.id-m.id);for(const l of E){const m=n==="round-robin"?R(e,r):n==="weighted-round-robin"?i():d(s);s[m.id]+=1,u.push({tick:o+l.duration,requestId:l.id,instanceId:m.id}),h.push({kind:"arrive",tick:o,requestId:l.id,instanceId:m.id,connections:{...s},description:O(n,m,e,s,l)})}}return h}const v=[{id:"i1",label:"Instance #1",weight:3},{id:"i2",label:"Instance #2",weight:1},{id:"i3",label:"Instance #3",weight:1}],$=[{id:1,arrivalTick:0,duration:5},{id:2,arrivalTick:1,duration:1},{id:3,arrivalTick:2,duration:1},{id:4,arrivalTick:3,duration:1},{id:5,arrivalTick:4,duration:1},{id:6,arrivalTick:5,duration:3},{id:7,arrivalTick:6,duration:1},{id:8,arrivalTick:7,duration:1},{id:9,arrivalTick:8,duration:1}],q=640,P=300,x={x:70,y:150},b={x:300,y:150},k=[{x:560,y:50},{x:560,y:150},{x:560,y:250}],g=120,p=56;function L(n){return{x:n.x-g/2,y:n.y-p/2}}function D({strategyId:n,instances:e,step:a}){const s=(()=>{const i=e.findIndex(d=>d.id===a.instanceId);return i>=0?k[i]:b})(),r=`${a.tick}-${a.kind}-${a.requestId}`;return t("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:c("svg",{viewBox:`0 0 ${q} ${P}`,className:"h-auto w-full",role:"img","aria-label":"Схема балансировки нагрузки",children:[t("line",{x1:x.x+g/2,y1:x.y,x2:b.x-g/2,y2:b.y,stroke:"rgb(51 65 85)",strokeWidth:2}),k.map((i,d)=>t("line",{x1:b.x+g/2,y1:b.y,x2:i.x-g/2,y2:i.y,stroke:"rgb(51 65 85)",strokeWidth:2},d)),a.kind==="arrive"&&t(w.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:x.x+g/2,cy:x.y,opacity:0},animate:{cx:[x.x+g/2,b.x,b.x,s.x-g/2],cy:[x.y,b.y,b.y,s.y],opacity:[0,1,1,0]},transition:{duration:2.2,ease:"easeInOut"}},`packet-${r}`),t(S,{rect:L(x),title:"Client",tone:"slate"}),t(S,{rect:L(b),title:"LB",tone:"indigo"}),e.map((i,d)=>{const u=k[d],h=i.id===a.instanceId,f=h?a.kind==="arrive"?"sky":"rose":null;return t(M,{rect:L(u),instance:i,connections:a.connections[i.id]??0,showWeight:n==="weighted-round-robin",flash:f,flashKey:h?r:"idle"},i.id)})]})})}const X={slate:"rgb(30 41 59)",indigo:"rgb(49 46 129)"},F={slate:"rgb(71 85 105)",indigo:"rgb(129 140 248)"};function S({rect:n,title:e,tone:a}){return c("g",{children:[t("rect",{x:n.x,y:n.y,width:g,height:p,rx:10,fill:X[a],stroke:F[a],strokeWidth:1.5}),t("text",{x:n.x+g/2,y:n.y+p/2+5,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:e})]})}function M({rect:n,instance:e,connections:a,showWeight:s,flash:r,flashKey:i}){const d=r==="sky"?"rgb(56 189 248)":r==="rose"?"rgb(251 113 133)":"rgb(71 85 105)";return c("g",{children:[t(w.rect,{x:n.x,y:n.y,width:g,height:p,rx:10,fill:"rgb(30 41 59)",stroke:d,strokeWidth:r?2.5:1.5,animate:r?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${n.x+g/2}px ${n.y+p/2}px`},transition:{duration:.4}},i),t("text",{x:n.x+g/2,y:n.y+p/2-6,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:e.label}),c("text",{x:n.x+g/2,y:n.y+p/2+14,textAnchor:"middle",fill:"rgb(148 163 184)",fontSize:11,children:[s?`w=${e.weight} · `:"","соединений: ",a]})]})}const U=2800;function H(){const[n,e]=I("round-robin"),a=T.find(o=>o.id===n),s=_(()=>A(n,v,$),[n]),[r,i]=I(0),[d,u]=I(!1),h=r>=s.length-1;N(()=>{i(0),u(!1)},[n]),N(()=>{if(!d)return;if(h){u(!1);return}const o=setTimeout(()=>i(y=>y+1),U);return()=>clearTimeout(o)},[d,h,r]);const f=s[Math.min(r,s.length-1)];return c("div",{className:"space-y-6",children:[t("div",{className:"flex flex-wrap gap-2",children:T.map(o=>t("button",{onClick:()=>e(o.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",o.id===n?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:o.label},o.id))}),t("p",{className:"text-sm text-slate-400",children:a.hint}),t(D,{strategyId:n,instances:v,step:f}),t("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:f.description}),c("div",{className:"flex flex-wrap items-center gap-3",children:[t("button",{onClick:()=>{i(0),u(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),t("button",{onClick:()=>{u(!1),i(o=>Math.max(0,o-1))},disabled:r===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),t("button",{onClick:()=>u(o=>!o),disabled:h,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:d?"⏸ Пауза":"▶ Авто"}),t("button",{onClick:()=>{u(!1),i(o=>Math.min(s.length-1,o+1))},disabled:h,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),c("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["событие ",r+1," / ",s.length]})]}),t("input",{type:"range",min:0,max:s.length-1,value:r,onChange:o=>{u(!1),i(Number(o.target.value))},className:"w-full accent-indigo-500"})]})}function K(){return c("div",{className:"space-y-4 text-slate-300",children:[c("p",{children:[t("strong",{className:"text-white",children:"Балансировка нагрузки (Load Balancing)"})," ","— это архитектурный паттерн, который распределяет входящие запросы между несколькими одинаковыми инстансами сервиса. Без неё горизонтальное масштабирование не имеет смысла: можно поднять сколько угодно копий сервиса, но если все запросы идут в одну, толку от копий не будет."]}),c("div",{children:[t("h3",{className:"font-semibold text-white",children:"Клиентская и серверная"}),c("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[c("li",{children:[t("strong",{children:"Клиентская"})," — клиент сам знает список инстансов и выбирает, к какому обратиться. Просто, но клиент должен следить за их живостью."]}),c("li",{children:[t("strong",{children:"Серверная"})," — между клиентом и инстансами стоит отдельный узел (LB / nginx / L4-L7 балансировщик), который и принимает решение. Именно она разобрана в демо рядом."]})]})]}),c("div",{children:[t("h3",{className:"font-semibold text-white",children:"Стратегии выбора инстанса"}),c("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[c("li",{children:[t("strong",{children:"Round Robin"})," — по кругу, инстанс за инстансом. Не учитывает ни вес, ни текущую нагрузку — самый простой вариант."]}),c("li",{children:[t("strong",{children:"Weighted Round Robin"})," — тот же круг, но с весами: более мощный инстанс получает пропорционально больше запросов. Вес задаётся заранее (по ресурсам машины), а не по факту нагрузки."]}),c("li",{children:[t("strong",{children:"Least Connections"})," — запрос уходит инстансу с наименьшим числом активных соединений. Единственная из трёх, что реагирует на фактическую загрузку в реальном времени; есть варианты по response time или bandwidth."]}),c("li",{children:[t("strong",{children:"Sticky Sessions"})," — запросы одного и того же пользователя (по хэшу от его id) всегда идут на один и тот же инстанс — удобно, если сессия хранится в памяти инстанса, а не во внешнем сторе."]})]})]}),c("div",{children:[t("h3",{className:"font-semibold text-white",children:"L4 / L7 балансировка"}),t("p",{className:"mt-2",children:"L4-балансировщик работает на уровне TCP/UDP — просто раскидывает соединения, не заглядывая внутрь запроса, поэтому он быстрее. L7-балансировщик понимает HTTP (путь, заголовки, cookie) и может балансировать умнее — например, направлять разные пути к разным сервисам — но это дороже по ресурсам."})]}),c("div",{children:[t("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),t("p",{className:"mt-2",children:"nginx / HAProxy / Envoy перед пулом бэкендов, облачные Load Balancer (AWS ALB/NLB, GCP Load Balancing), geoDNS-балансировка между дата-центрами в разных регионах, а внутри Kubernetes — Service балансирует между подами."})]})]})}const z=`/**
 * Балансировщик нагрузки: три стратегии выбора инстанса для запроса.
 * Логика полностью отделена от UI — на вход список инстансов и запросов,
 * на выход трасса событий (кто когда пришёл/ушёл), которую уже рисует Demo.
 */

export interface LbInstance {
  /** Уникальный id инстанса. */
  id: string;
  /** Название для отображения, напр. "Instance #1". */
  label: string;
  /** Вес — используется только Weighted Round Robin. */
  weight: number;
}

export interface LbRequestDef {
  /** Порядковый номер запроса (для отображения). */
  id: number;
  /** Условный "тик" времени, на котором запрос приходит. */
  arrivalTick: number;
  /** Сколько тиков запрос держит соединение открытым (имитация обработки). */
  duration: number;
}

export type LbStrategyId =
  | "round-robin"
  | "weighted-round-robin"
  | "least-connections";

export const LB_STRATEGIES: {
  id: LbStrategyId;
  label: string;
  hint: string;
}[] = [
  {
    id: "round-robin",
    label: "Round Robin",
    hint: "Каждый следующий запрос уходит следующему инстансу по кругу — без учёта их текущей нагрузки.",
  },
  {
    id: "weighted-round-robin",
    label: "Weighted Round Robin",
    hint: "Тот же круг, но инстансы с большим весом получают запросы чаще — учитывается их «мощность», а не текущая нагрузка.",
  },
  {
    id: "least-connections",
    label: "Least Connections",
    hint: "Запрос уходит инстансу с наименьшим числом активных соединений — балансировщик реагирует на реальную нагрузку.",
  },
];

/** Один кадр симуляции: запрос либо пришёл, либо завершился. */
export interface LbStep {
  kind: "arrive" | "finish";
  tick: number;
  requestId: number;
  instanceId: string;
  /** Снимок активных соединений по всем инстансам ПОСЛЕ этого события. */
  connections: Record<string, number>;
  description: string;
}

interface FinishEvent {
  tick: number;
  requestId: number;
  instanceId: string;
}

function labelOf(instances: LbInstance[], id: string): string {
  return instances.find((inst) => inst.id === id)?.label ?? id;
}

/** Round Robin: тупо следующий по кругу, без памяти о нагрузке. */
function pickRoundRobin(
  instances: LbInstance[],
  cursor: { i: number },
): LbInstance {
  const chosen = instances[cursor.i % instances.length];
  cursor.i += 1;
  return chosen;
}

/**
 * Smooth Weighted Round Robin — тот же алгоритм, что использует nginx.
 * У каждого инстанса растёт "текущий вес" на величину его "номинального";
 * выбираем максимум и тут же уменьшаем его на сумму всех весов.
 * Так инстансы с большим весом получают запросы чаще, но распределение
 * остаётся равномерным внутри цикла, а не пачками подряд.
 */
function makeWeightedPicker(instances: LbInstance[]) {
  const current = new Map(instances.map((inst) => [inst.id, 0]));
  const totalWeight = instances.reduce((sum, inst) => sum + inst.weight, 0);

  return function pick(): LbInstance {
    for (const inst of instances) {
      current.set(inst.id, (current.get(inst.id) ?? 0) + inst.weight);
    }
    let best = instances[0];
    for (const inst of instances) {
      if ((current.get(inst.id) ?? 0) > (current.get(best.id) ?? 0)) {
        best = inst;
      }
    }
    current.set(best.id, (current.get(best.id) ?? 0) - totalWeight);
    return best;
  };
}

/**
 * Least Connections: выбираем инстанс с минимумом активных соединений.
 * Простаивающие инстансы часто набирают одинаковый минимум (0) — без
 * тай-брейка выбор всегда падал бы на первый по списку, и остальные
 * простаивали бы незаслуженно. Поэтому среди инстансов с равным минимумом
 * дополнительно крутим свой Round Robin.
 */
function makeLeastConnectionsPicker(instances: LbInstance[]) {
  const tieCursor = { i: 0 };

  return function pick(connections: Record<string, number>): LbInstance {
    const min = Math.min(...instances.map((inst) => connections[inst.id]));
    const candidates = instances.filter((inst) => connections[inst.id] === min);
    const chosen = candidates[tieCursor.i % candidates.length];
    tieCursor.i += 1;
    return chosen;
  };
}

function describeChoice(
  strategyId: LbStrategyId,
  chosen: LbInstance,
  instances: LbInstance[],
  connections: Record<string, number>,
  req: LbRequestDef,
): string {
  if (strategyId === "round-robin") {
    return \`Запрос #\${req.id} → «\${chosen.label}» — просто следующий по кругу.\`;
  }
  if (strategyId === "weighted-round-robin") {
    return \`Запрос #\${req.id} → «\${chosen.label}» (вес \${chosen.weight}) — с бо́льшим весом инстанс получает запросы чаще остальных.\`;
  }
  const load = instances
    .map((inst) => \`\${inst.label}=\${connections[inst.id]}\`)
    .join(", ");
  return \`Запрос #\${req.id} → «\${chosen.label}» — у него сейчас меньше всего активных соединений (\${load}).\`;
}

/**
 * Прогоняет все запросы через выбранную стратегию как дискретное
 * событийное моделирование: на каждом тике сначала освобождаются
 * соединения от завершившихся запросов, потом распределяются новые —
 * это гарантирует, что Least Connections видит актуальную нагрузку.
 */
export function simulateLoadBalancing(
  strategyId: LbStrategyId,
  instances: LbInstance[],
  requests: LbRequestDef[],
): LbStep[] {
  const connections: Record<string, number> = Object.fromEntries(
    instances.map((inst) => [inst.id, 0]),
  );
  const rrCursor = { i: 0 };
  const pickWeighted = makeWeightedPicker(instances);
  const pickLeastConnections = makeLeastConnectionsPicker(instances);

  const pendingFinishes: FinishEvent[] = [];
  const steps: LbStep[] = [];

  const lastTick = Math.max(
    ...requests.map((req) => req.arrivalTick + req.duration),
  );

  for (let tick = 0; tick <= lastTick; tick++) {
    const finishesNow = pendingFinishes
      .filter((fin) => fin.tick === tick)
      .sort((a, b) => a.requestId - b.requestId);

    for (const fin of finishesNow) {
      connections[fin.instanceId] -= 1;
      steps.push({
        kind: "finish",
        tick,
        requestId: fin.requestId,
        instanceId: fin.instanceId,
        connections: { ...connections },
        description: \`Запрос #\${fin.requestId} завершён — освобождаем соединение на «\${labelOf(instances, fin.instanceId)}».\`,
      });
    }

    const arrivalsNow = requests
      .filter((req) => req.arrivalTick === tick)
      .sort((a, b) => a.id - b.id);

    for (const req of arrivalsNow) {
      const chosen =
        strategyId === "round-robin"
          ? pickRoundRobin(instances, rrCursor)
          : strategyId === "weighted-round-robin"
            ? pickWeighted()
            : pickLeastConnections(connections);

      connections[chosen.id] += 1;
      pendingFinishes.push({
        tick: tick + req.duration,
        requestId: req.id,
        instanceId: chosen.id,
      });

      steps.push({
        kind: "arrive",
        tick,
        requestId: req.id,
        instanceId: chosen.id,
        connections: { ...connections },
        description: describeChoice(
          strategyId,
          chosen,
          instances,
          connections,
          req,
        ),
      });
    }
  }

  return steps;
}

/** Три инстанса с разными весами — веса заметны только в Weighted RR. */
export const DEFAULT_INSTANCES: LbInstance[] = [
  { id: "i1", label: "Instance #1", weight: 3 },
  { id: "i2", label: "Instance #2", weight: 1 },
  { id: "i3", label: "Instance #3", weight: 1 },
];

/**
 * Таймлайн запросов: длительности подобраны так, чтобы было видно разницу
 * подходов — часть запросов "тяжёлые" (держат соединение дольше), и на
 * Round Robin / Weighted RR это может перегрузить один инстанс, пока
 * Least Connections уводит новые запросы от занятого.
 */
export const DEFAULT_REQUESTS: LbRequestDef[] = [
  { id: 1, arrivalTick: 0, duration: 5 },
  { id: 2, arrivalTick: 1, duration: 1 },
  { id: 3, arrivalTick: 2, duration: 1 },
  { id: 4, arrivalTick: 3, duration: 1 },
  { id: 5, arrivalTick: 4, duration: 1 },
  { id: 6, arrivalTick: 5, duration: 3 },
  { id: 7, arrivalTick: 6, duration: 1 },
  { id: 8, arrivalTick: 7, duration: 1 },
  { id: 9, arrivalTick: 8, duration: 1 },
];
`,j=`import { motion } from "framer-motion";
import type { LbInstance, LbStep, LbStrategyId } from "./strategies";

// Диаграмма рисуется на фиксированном "холсте" (как чертёж), а не мерит
// реальные DOM-координаты — так и проще, и предсказуемее: у нас всегда
// ровно 3 инстанса, поэтому точки просто захардкожены.
const W = 640;
const H = 300;

const CLIENT = { x: 70, y: 150 };
const LB = { x: 300, y: 150 };
const INSTANCES_POS = [
  { x: 560, y: 50 },
  { x: 560, y: 150 },
  { x: 560, y: 250 },
];

const BOX_W = 120;
const BOX_H = 56;

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

export function LoadBalancerDiagram({
  strategyId,
  instances,
  step,
}: {
  strategyId: LbStrategyId;
  instances: LbInstance[];
  step: LbStep;
}) {
  const activeInstancePos = (() => {
    const idx = instances.findIndex((inst) => inst.id === step.instanceId);
    return idx >= 0 ? INSTANCES_POS[idx] : LB;
  })();

  // Ключ, который меняется на каждом новом событии — им мы форсируем
  // повторное монтирование анимированных элементов, чтобы анимация
  // проигрывалась заново (тот же приём, что и scale-пульс в ArrayVisualizer).
  const eventKey = \`\${step.tick}-\${step.kind}-\${step.requestId}\`;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        className="h-auto w-full"
        role="img"
        aria-label="Схема балансировки нагрузки"
      >
        {/* Статичные линии связи: client—LB и веер LB—инстансы. */}
        <line
          x1={CLIENT.x + BOX_W / 2}
          y1={CLIENT.y}
          x2={LB.x - BOX_W / 2}
          y2={LB.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />
        {INSTANCES_POS.map((pos, i) => (
          <line
            key={i}
            x1={LB.x + BOX_W / 2}
            y1={LB.y}
            x2={pos.x - BOX_W / 2}
            y2={pos.y}
            stroke="rgb(51 65 85)"
            strokeWidth={2}
          />
        ))}

        {/* Бегущий "пакет" — виден только для события прихода запроса. */}
        {step.kind === "arrive" && (
          <motion.circle
            key={\`packet-\${eventKey}\`}
            r={7}
            fill="rgb(99 102 241)"
            initial={{
              cx: CLIENT.x + BOX_W / 2,
              cy: CLIENT.y,
              opacity: 0,
            }}
            animate={{
              cx: [CLIENT.x + BOX_W / 2, LB.x, LB.x, activeInstancePos.x - BOX_W / 2],
              cy: [CLIENT.y, LB.y, LB.y, activeInstancePos.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        )}

        {/* Client. */}
        <Node rect={rectAt(CLIENT)} title="Client" tone="slate" />

        {/* Load Balancer — подсвечиваем стратегию под названием. */}
        <Node rect={rectAt(LB)} title="LB" tone="indigo" />

        {/* Инстансы. */}
        {instances.map((inst, i) => {
          const pos = INSTANCES_POS[i];
          const isTarget = inst.id === step.instanceId;
          const flash = isTarget
            ? step.kind === "arrive"
              ? "sky"
              : "rose"
            : null;
          return (
            <InstanceNode
              key={inst.id}
              rect={rectAt(pos)}
              instance={inst}
              connections={step.connections[inst.id] ?? 0}
              showWeight={strategyId === "weighted-round-robin"}
              flash={flash}
              flashKey={isTarget ? eventKey : "idle"}
            />
          );
        })}
      </svg>
    </div>
  );
}

const TONE_FILL: Record<string, string> = {
  slate: "rgb(30 41 59)",
  indigo: "rgb(49 46 129)",
};
const TONE_STROKE: Record<string, string> = {
  slate: "rgb(71 85 105)",
  indigo: "rgb(129 140 248)",
};

function Node({
  rect,
  title,
  tone,
}: {
  rect: { x: number; y: number };
  title: string;
  tone: "slate" | "indigo";
}) {
  return (
    <g>
      <rect
        x={rect.x}
        y={rect.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth={1.5}
      />
      <text
        x={rect.x + BOX_W / 2}
        y={rect.y + BOX_H / 2 + 5}
        textAnchor="middle"
        fill="white"
        fontSize={15}
        fontWeight={600}
      >
        {title}
      </text>
    </g>
  );
}

function InstanceNode({
  rect,
  instance,
  connections,
  showWeight,
  flash,
  flashKey,
}: {
  rect: { x: number; y: number };
  instance: LbInstance;
  connections: number;
  showWeight: boolean;
  flash: "sky" | "rose" | null;
  flashKey: string;
}) {
  const stroke = flash === "sky" ? "rgb(56 189 248)" : flash === "rose" ? "rgb(251 113 133)" : "rgb(71 85 105)";

  return (
    <g>
      <motion.rect
        key={flashKey}
        x={rect.x}
        y={rect.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill="rgb(30 41 59)"
        stroke={stroke}
        strokeWidth={flash ? 2.5 : 1.5}
        animate={flash ? { scale: [1, 1.04, 1] } : { scale: 1 }}
        style={{ transformOrigin: \`\${rect.x + BOX_W / 2}px \${rect.y + BOX_H / 2}px\` }}
        transition={{ duration: 0.4 }}
      />
      <text
        x={rect.x + BOX_W / 2}
        y={rect.y + BOX_H / 2 - 6}
        textAnchor="middle"
        fill="white"
        fontSize={13}
        fontWeight={600}
      >
        {instance.label}
      </text>
      <text
        x={rect.x + BOX_W / 2}
        y={rect.y + BOX_H / 2 + 14}
        textAnchor="middle"
        fill="rgb(148 163 184)"
        fontSize={11}
      >
        {showWeight ? \`w=\${instance.weight} · \` : ""}соединений: {connections}
      </text>
    </g>
  );
}
`,G=`import { useEffect, useMemo, useState } from "react";
import {
  DEFAULT_INSTANCES,
  DEFAULT_REQUESTS,
  LB_STRATEGIES,
  simulateLoadBalancing,
  type LbStrategyId,
} from "./strategies";
import { LoadBalancerDiagram } from "./LoadBalancerDiagram";

const PLAY_INTERVAL = 2800;

export function Demo() {
  const [strategyId, setStrategyId] = useState<LbStrategyId>("round-robin");
  const strategy = LB_STRATEGIES.find((s) => s.id === strategyId)!;

  const steps = useMemo(
    () => simulateLoadBalancing(strategyId, DEFAULT_INSTANCES, DEFAULT_REQUESTS),
    [strategyId],
  );

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  // Смена стратегии — свежая трасса, начинаем показ заново.
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
    const timer = setTimeout(() => setStepIndex((i) => i + 1), PLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      {/* Выбор стратегии. */}
      <div className="flex flex-wrap gap-2">
        {LB_STRATEGIES.map((s) => (
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

      <LoadBalancerDiagram
        strategyId={strategyId}
        instances={DEFAULT_INSTANCES}
        step={step}
      />

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
          событие {stepIndex + 1} / {steps.length}
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
`,Z={meta:{id:"load-balancing",title:"Балансировка нагрузки",category:"architectural",summary:"Round Robin, Weighted Round Robin и Least Connections — как балансировщик распределяет запросы между инстансами и почему это не одно и то же."},Demo:H,Explanation:K,code:[{filename:"strategies.ts",language:"typescript",source:z},{filename:"LoadBalancerDiagram.tsx",language:"tsx",source:j},{filename:"Demo.tsx",language:"tsx",source:G}]};export{Z as default};
