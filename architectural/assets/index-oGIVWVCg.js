/* empty css              */import{a as s,_ as e}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as h,d as w,e as P}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as _}from"./proxy-BroObIT1.js";const S=[{id:"forward",label:"Forward Proxy",hint:"Стоит на стороне клиента: скрывает клиента от целевого сервера и может обходить ограничения доступа к нему."},{id:"reverse",label:"Reverse Proxy",hint:"Стоит на стороне сервера: скрывает от клиента реальную топологию бэкендов — снаружи виден только сам proxy."}],R={forward:"Target",reverse:"Backend"},T=[{id:1,label:"GET instagram.com",legs:[["client","proxy"],["proxy","target"]],cached:!1,description:"instagram.com заблокирован для прямых обращений — но клиент и не ходит к нему напрямую. Запрос уходит на Forward Proxy, и уже ОТ ЕГО ИМЕНИ летит дальше — для целевого сервера виден только proxy."},{id:2,label:"GET github.com",legs:[["client","proxy"],["proxy","target"]],cached:!1,description:"Обычный, никем не заблокированный сайт — идёт тем же путём. Proxy теперь единственная точка выхода клиента в сеть: через неё удобно логировать трафик, фильтровать или подменять данные."},{id:3,label:"GET internal-tool.corp",legs:[["client","proxy"],["proxy","target"]],cached:!1,description:"Так же работает корпоративный прокси на работе: сотрудник физически не может обратиться в интернет иначе, чем через него."}],I=[{id:1,label:"GET /home",legs:[["client","proxy"],["proxy","target"]],cached:!1,description:"Клиент стучится в Reverse Proxy — для него это выглядит как единственный сервер. Proxy сам решает, на какой backend перенаправить запрос; клиент о реальной топологии не знает."},{id:2,label:"GET /home (повтор)",legs:[["client","proxy"]],cached:!0,description:"Reverse Proxy отдал закэшированный ответ сам — до backend даже не дошли. Снаружи разницы не видно: клиент как обращался к «единственному серверу», так и обращается."},{id:3,label:"GET /profile",legs:[["client","proxy"],["proxy","target"]],cached:!1,description:"Новый путь — в кэше его нет, поэтому proxy идёт на backend как обычно."},{id:4,label:"POST /orders",legs:[["client","proxy"],["proxy","target"]],cached:!1,description:"Запросы на изменение данных Reverse Proxy не кэширует — они всегда доходят до backend."}];function A(n){return n==="forward"?T:I}const D=640,O=200,r={client:{x:80,y:110},proxy:{x:320,y:110},target:{x:560,y:110}},d=130,m=56,v=1.1;function b(n){return{x:n.x-d/2,y:n.y-m/2}}function X(n){const l=[],i=[];for(const[o,c]of n)l.push(r[o].x,r[c].x),i.push(r[o].y,r[c].y);const t=l.map((o,c)=>c===0||c===l.length-1?0:1);return{cx:l,cy:i,opacity:t}}function W({mode:n,step:l}){const i=X(l.legs),t=new Set(l.legs.flat()),o=`${l.id}`,c=R[n],y=n==="forward"?(r.proxy.x+d/2+r.target.x-d/2)/2:(r.client.x+d/2+r.proxy.x-d/2)/2;return s("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[s("svg",{viewBox:`0 0 ${D} ${O}`,className:"h-auto w-full",role:"img","aria-label":"Схема проксирования",children:[e("line",{x1:r.client.x+d/2,y1:r.client.y,x2:r.proxy.x-d/2,y2:r.proxy.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:r.proxy.x+d/2,y1:r.proxy.y,x2:r.target.x-d/2,y2:r.target.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:y,y1:10,x2:y,y2:O-10,stroke:"rgb(251 146 60)",strokeWidth:3,opacity:.7}),e(_.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:i.cx[0],cy:i.cy[0],opacity:0},animate:{cx:i.cx,cy:i.cy,opacity:i.opacity},transition:{duration:v*l.legs.length,ease:"easeInOut"}},`packet-${o}`),e(f,{rect:b(r.client),title:"Client",tone:t.has("client")?"indigo":"slate",flashKey:t.has("client")?o:"idle"}),e(f,{rect:b(r.proxy),title:n==="forward"?"Forward Proxy":"Reverse Proxy",tone:t.has("proxy")?l.cached?"amber":"indigo":"slate",flashKey:t.has("proxy")?o:"idle"}),e(f,{rect:b(r.target),title:c,tone:t.has("target")?"sky":"slate",flashKey:t.has("target")?o:"idle"})]}),e("p",{className:"mt-1 text-center text-[11px] uppercase tracking-wider text-orange-400/80",children:n==="forward"?"барьер: proxy — target (клиент выходит наружу только через proxy)":"барьер: client — proxy (снаружи не видно, что за proxy)"})]})}const B={slate:"rgb(30 41 59)",indigo:"rgb(49 46 129)",sky:"rgb(12 74 110)",amber:"rgb(120 53 15)"},L={slate:"rgb(71 85 105)",indigo:"rgb(129 140 248)",sky:"rgb(56 189 248)",amber:"rgb(251 191 36)"};function f({rect:n,title:l,tone:i,flashKey:t}){return s("g",{children:[e(_.rect,{x:n.x,y:n.y,width:d,height:m,rx:10,fill:B[i],stroke:L[i],strokeWidth:i==="slate"?1.5:2.5,animate:i!=="slate"?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${n.x+d/2}px ${n.y+m/2}px`},transition:{duration:.4}},t),e("text",{x:n.x+d/2,y:n.y+m/2+5,textAnchor:"middle",fill:"white",fontSize:14,fontWeight:600,children:l})]})}const M=1100;function K(){const[n,l]=h("forward"),i=S.find(a=>a.id===n),t=w(()=>A(n),[n]),[o,c]=h(0),[y,x]=h(!1),p=o>=t.length-1;P(()=>{c(0),x(!1)},[n]),P(()=>{var u;if(!y)return;if(p){x(!1);return}const a=((u=t[o])==null?void 0:u.legs.length)??1,E=v*a*1e3+M,N=setTimeout(()=>c(k=>k+1),E);return()=>clearTimeout(N)},[y,p,o,t]);const g=t[Math.min(o,t.length-1)];return s("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:S.map(a=>e("button",{onClick:()=>l(a.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",a.id===n?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:a.label},a.id))}),e("p",{className:"text-sm text-slate-400",children:i.hint}),e(W,{mode:n,step:g}),s("div",{className:"space-y-1.5",children:[e("p",{className:"font-mono text-xs text-slate-500",children:g.label}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:g.description})]}),s("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{c(0),x(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{x(!1),c(a=>Math.max(0,a-1))},disabled:o===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>x(a=>!a),disabled:p,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:y?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{x(!1),c(a=>Math.min(t.length-1,a+1))},disabled:p,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),s("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["запрос ",o+1," / ",t.length]})]}),e("input",{type:"range",min:0,max:t.length-1,value:o,onChange:a=>{x(!1),c(Number(a.target.value))},className:"w-full accent-indigo-500"})]})}function C(){return s("div",{className:"space-y-4 text-slate-300",children:[s("p",{children:[e("strong",{className:"text-white",children:"Proxy"})," — промежуточный узел, через который проходит трафик между двумя сторонами, ничего не зная о конечном получателе или отправителе так, как знали бы они сами друг про друга напрямую. Задач у него много: кэширование, ограничение трафика, обход блокировок, анонимность, сжатие и модификация данных на лету. Но ключевое архитектурное решение — ",e("em",{children:"на чьей он стороне"}),", и от этого зависит, кого именно он скрывает."]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Forward Proxy"}),s("p",{className:"mt-2",children:["Стоит на стороне ",e("strong",{children:"клиента"}),". Клиент обращается не к целевому серверу напрямую, а к proxy — и уже proxy делает запрос от своего имени. Целевой сервер видит proxy, а не настоящего клиента. Так работает корпоративный прокси (весь исходящий трафик сотрудника идёт через него) или обход блокировок: в 2022 году Роскомнадзор заблокировал Instagram в России — доступ напрямую закрыт, но через Forward Proxy за пределами блокировки запрос всё ещё проходит."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Reverse Proxy"}),s("p",{className:"mt-2",children:["Стоит на стороне ",e("strong",{children:"сервера"}),". Клиент обращается к proxy, думая, что это и есть сервер — а тот уже сам решает, на какой из реальных backend-инстансов перенаправить запрос. Клиент никогда не видит настоящую топологию: сколько backend-ов, где они и что с ними происходит. Именно поэтому Reverse Proxy — типичное место, куда вешают ещё и балансировку нагрузки, и кэширование, и терминацию TLS: он и так уже единая точка входа."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Как не перепутать"}),s("p",{className:"mt-2",children:["Forward Proxy ",e("strong",{children:"клиент настраивает сам"})," и явно про него знает (прописывает адрес прокси в настройках). Reverse Proxy клиент вообще не подозревает — с его точки зрения он просто обратился к серверу."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),e("p",{className:"mt-2",children:"Reverse Proxy — nginx / Envoy / Traefik перед пулом бэкендов, CDN перед origin-сервером. Forward Proxy — корпоративные прокси-серверы, VPN-клиенты, анонимайзеры, инструменты обхода гео-блокировок."})]})]})}const F=`/**
 * Reverse / Forward Proxy — в отличие от балансировки и кэширования, тут нет
 * алгоритма выбора: разница между режимами чисто топологическая — на чьей
 * стороне стоит proxy и, соответственно, кого он скрывает. Поэтому вместо
 * симуляции — два готовых сценария запросов, которые эту разницу показывают.
 */

export type ProxyMode = "forward" | "reverse";

export const PROXY_MODES: { id: ProxyMode; label: string; hint: string }[] = [
  {
    id: "forward",
    label: "Forward Proxy",
    hint: "Стоит на стороне клиента: скрывает клиента от целевого сервера и может обходить ограничения доступа к нему.",
  },
  {
    id: "reverse",
    label: "Reverse Proxy",
    hint: "Стоит на стороне сервера: скрывает от клиента реальную топологию бэкендов — снаружи виден только сам proxy.",
  },
];

/** Подпись правого узла на диаграмме — у разных режимов разный смысл. */
export const PROXY_TARGET_LABEL: Record<ProxyMode, string> = {
  forward: "Target",
  reverse: "Backend",
};

export type ProxyNodeId = "client" | "proxy" | "target";

export interface ProxyStep {
  id: number;
  /** Что за запрос — показывается прямо над диаграммой. */
  label: string;
  /** Маршрут запроса. Если он короче полного пути — значит, дальше не пошли. */
  legs: [ProxyNodeId, ProxyNodeId][];
  /** true — reverse proxy ответил из своего кэша, до backend не дошли. */
  cached: boolean;
  description: string;
}

const FORWARD_STEPS: ProxyStep[] = [
  {
    id: 1,
    label: "GET instagram.com",
    legs: [
      ["client", "proxy"],
      ["proxy", "target"],
    ],
    cached: false,
    description:
      "instagram.com заблокирован для прямых обращений — но клиент и не ходит к нему напрямую. Запрос уходит на Forward Proxy, и уже ОТ ЕГО ИМЕНИ летит дальше — для целевого сервера виден только proxy.",
  },
  {
    id: 2,
    label: "GET github.com",
    legs: [
      ["client", "proxy"],
      ["proxy", "target"],
    ],
    cached: false,
    description:
      "Обычный, никем не заблокированный сайт — идёт тем же путём. Proxy теперь единственная точка выхода клиента в сеть: через неё удобно логировать трафик, фильтровать или подменять данные.",
  },
  {
    id: 3,
    label: "GET internal-tool.corp",
    legs: [
      ["client", "proxy"],
      ["proxy", "target"],
    ],
    cached: false,
    description:
      "Так же работает корпоративный прокси на работе: сотрудник физически не может обратиться в интернет иначе, чем через него.",
  },
];

const REVERSE_STEPS: ProxyStep[] = [
  {
    id: 1,
    label: "GET /home",
    legs: [
      ["client", "proxy"],
      ["proxy", "target"],
    ],
    cached: false,
    description:
      "Клиент стучится в Reverse Proxy — для него это выглядит как единственный сервер. Proxy сам решает, на какой backend перенаправить запрос; клиент о реальной топологии не знает.",
  },
  {
    id: 2,
    label: "GET /home (повтор)",
    legs: [["client", "proxy"]],
    cached: true,
    description:
      "Reverse Proxy отдал закэшированный ответ сам — до backend даже не дошли. Снаружи разницы не видно: клиент как обращался к «единственному серверу», так и обращается.",
  },
  {
    id: 3,
    label: "GET /profile",
    legs: [
      ["client", "proxy"],
      ["proxy", "target"],
    ],
    cached: false,
    description:
      "Новый путь — в кэше его нет, поэтому proxy идёт на backend как обычно.",
  },
  {
    id: 4,
    label: "POST /orders",
    legs: [
      ["client", "proxy"],
      ["proxy", "target"],
    ],
    cached: false,
    description:
      "Запросы на изменение данных Reverse Proxy не кэширует — они всегда доходят до backend.",
  },
];

export function getProxySteps(mode: ProxyMode): ProxyStep[] {
  return mode === "forward" ? FORWARD_STEPS : REVERSE_STEPS;
}
`,G=`import { motion } from "framer-motion";
import {
  PROXY_TARGET_LABEL,
  type ProxyMode,
  type ProxyNodeId,
  type ProxyStep,
} from "./scenarios";

// Тот же приём, что в LoadBalancerDiagram/CacheDiagram: фиксированный
// "холст" вместо измерения реальных DOM-координат — у нас всегда ровно
// три узла (Client/Proxy/Target).
const W = 640;
const H = 200;

const POS: Record<ProxyNodeId, { x: number; y: number }> = {
  client: { x: 80, y: 110 },
  proxy: { x: 320, y: 110 },
  target: { x: 560, y: 110 },
};

const BOX_W = 130;
const BOX_H = 56;

/** Сколько секунд пакет летит через ОДИН перегон — и для Demo.tsx тоже. */
export const PACKET_LEG_DURATION = 1.1;

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

function buildPacketKeyframes(legs: [ProxyNodeId, ProxyNodeId][]) {
  const cx: number[] = [];
  const cy: number[] = [];
  for (const [from, to] of legs) {
    cx.push(POS[from].x, POS[to].x);
    cy.push(POS[from].y, POS[to].y);
  }
  const opacity = cx.map((_, i) => (i === 0 || i === cx.length - 1 ? 0 : 1));
  return { cx, cy, opacity };
}

export function ProxyDiagram({
  mode,
  step,
}: {
  mode: ProxyMode;
  step: ProxyStep;
}) {
  const packet = buildPacketKeyframes(step.legs);
  const touched = new Set(step.legs.flat());
  const eventKey = \`\${step.id}\`;
  const targetLabel = PROXY_TARGET_LABEL[mode];

  // Барьер — граница доступа/сети. Forward: клиент+proxy "внутри", target
  // "снаружи" (барьер между proxy и target). Reverse: наоборот — клиент
  // снаружи, proxy+backend внутри (барьер между client и proxy).
  const barrierX =
    mode === "forward"
      ? (POS.proxy.x + BOX_W / 2 + POS.target.x - BOX_W / 2) / 2
      : (POS.client.x + BOX_W / 2 + POS.proxy.x - BOX_W / 2) / 2;

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        className="h-auto w-full"
        role="img"
        aria-label="Схема проксирования"
      >
        <line
          x1={POS.client.x + BOX_W / 2}
          y1={POS.client.y}
          x2={POS.proxy.x - BOX_W / 2}
          y2={POS.proxy.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />
        <line
          x1={POS.proxy.x + BOX_W / 2}
          y1={POS.proxy.y}
          x2={POS.target.x - BOX_W / 2}
          y2={POS.target.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />

        {/* Барьер: граница, которую proxy пересекает "за" одну из сторон. */}
        <line
          x1={barrierX}
          y1={10}
          x2={barrierX}
          y2={H - 10}
          stroke="rgb(251 146 60)"
          strokeWidth={3}
          opacity={0.7}
        />

        <motion.circle
          key={\`packet-\${eventKey}\`}
          r={7}
          fill="rgb(99 102 241)"
          initial={{ cx: packet.cx[0], cy: packet.cy[0], opacity: 0 }}
          animate={{ cx: packet.cx, cy: packet.cy, opacity: packet.opacity }}
          transition={{
            duration: PACKET_LEG_DURATION * step.legs.length,
            ease: "easeInOut",
          }}
        />

        <DiagramNode
          rect={rectAt(POS.client)}
          title="Client"
          tone={touched.has("client") ? "indigo" : "slate"}
          flashKey={touched.has("client") ? eventKey : "idle"}
        />
        <DiagramNode
          rect={rectAt(POS.proxy)}
          title={mode === "forward" ? "Forward Proxy" : "Reverse Proxy"}
          tone={touched.has("proxy") ? (step.cached ? "amber" : "indigo") : "slate"}
          flashKey={touched.has("proxy") ? eventKey : "idle"}
        />
        <DiagramNode
          rect={rectAt(POS.target)}
          title={targetLabel}
          tone={touched.has("target") ? "sky" : "slate"}
          flashKey={touched.has("target") ? eventKey : "idle"}
        />
      </svg>

      <p className="mt-1 text-center text-[11px] uppercase tracking-wider text-orange-400/80">
        {mode === "forward"
          ? "барьер: proxy — target (клиент выходит наружу только через proxy)"
          : "барьер: client — proxy (снаружи не видно, что за proxy)"}
      </p>
    </div>
  );
}

const TONE_FILL: Record<string, string> = {
  slate: "rgb(30 41 59)",
  indigo: "rgb(49 46 129)",
  sky: "rgb(12 74 110)",
  amber: "rgb(120 53 15)",
};
const TONE_STROKE: Record<string, string> = {
  slate: "rgb(71 85 105)",
  indigo: "rgb(129 140 248)",
  sky: "rgb(56 189 248)",
  amber: "rgb(251 191 36)",
};

function DiagramNode({
  rect,
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
        x={rect.x}
        y={rect.y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={TONE_FILL[tone]}
        stroke={TONE_STROKE[tone]}
        strokeWidth={tone === "slate" ? 1.5 : 2.5}
        animate={tone !== "slate" ? { scale: [1, 1.04, 1] } : { scale: 1 }}
        style={{
          transformOrigin: \`\${rect.x + BOX_W / 2}px \${rect.y + BOX_H / 2}px\`,
        }}
        transition={{ duration: 0.4 }}
      />
      <text
        x={rect.x + BOX_W / 2}
        y={rect.y + BOX_H / 2 + 5}
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
`,$=`import { useEffect, useMemo, useState } from "react";
import { PROXY_MODES, getProxySteps, type ProxyMode } from "./scenarios";
import { ProxyDiagram, PACKET_LEG_DURATION } from "./ProxyDiagram";

// Пауза после того, как пакет долетел, — чтобы успеть прочитать описание.
const READ_PAUSE_MS = 1100;

export function Demo() {
  const [mode, setMode] = useState<ProxyMode>("forward");
  const modeInfo = PROXY_MODES.find((m) => m.id === mode)!;

  const steps = useMemo(() => getProxySteps(mode), [mode]);

  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= steps.length - 1;

  // Смена режима — начинаем сценарий заново.
  useEffect(() => {
    setStepIndex(0);
    setPlaying(false);
  }, [mode]);

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    // Ждём, пока пакет долетит по своему маршруту, и даём время прочитать
    // описание — как в Cache-Aside/Cache-Through демо.
    const currentLegs = steps[stepIndex]?.legs.length ?? 1;
    const delay = PACKET_LEG_DURATION * currentLegs * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      {/* Выбор режима. */}
      <div className="flex flex-wrap gap-2">
        {PROXY_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              m.id === mode
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {m.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-400">{modeInfo.hint}</p>

      <ProxyDiagram mode={mode} step={step} />

      <div className="space-y-1.5">
        <p className="font-mono text-xs text-slate-500">{step.label}</p>
        <p className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
      </div>

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
          запрос {stepIndex + 1} / {steps.length}
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
`,j={meta:{id:"proxy",title:"Reverse / Forward Proxy",category:"architectural",summary:"Разница не в технологии, а в направлении: Forward Proxy скрывает клиента от сервера, Reverse Proxy скрывает сервер от клиента."},Demo:K,Explanation:C,code:[{filename:"scenarios.ts",language:"typescript",source:F},{filename:"ProxyDiagram.tsx",language:"tsx",source:G},{filename:"Demo.tsx",language:"tsx",source:$}]};export{j as default};
