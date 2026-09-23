/* empty css              */import{_ as e,a as r,b as g}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as y}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{m as h}from"./proxy-BroObIT1.js";const u=[{id:"write",label:"Купить билет (запись)"},{id:"read",label:"Посмотреть список билетов (чтение)"}],N=480,f=200,s={x:80,y:100},o={x:350,y:100},l={x:350,y:50},c={x:350,y:150},b=140,p=46;function C({cqrsEnabled:t,flash:n}){const i=t?{write:l,read:c}:{write:o,read:o};return e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:r("svg",{viewBox:`0 0 ${N} ${f}`,className:"mx-auto h-auto w-full max-w-md",role:"img","aria-label":"CQRS: разделение чтения и записи",children:[t?r(g,{children:[e("line",{x1:s.x,y1:s.y,x2:l.x,y2:l.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:s.x,y1:s.y,x2:c.x,y2:c.y,stroke:"rgb(51 65 85)",strokeWidth:2})]}):e("line",{x1:s.x,y1:s.y,x2:o.x,y2:o.y,stroke:"rgb(51 65 85)",strokeWidth:2}),n&&e(h.circle,{r:7,fill:n.action==="write"?"rgb(99 102 241)":"rgb(56 189 248)",initial:{cx:s.x,cy:s.y,opacity:0},animate:{cx:[s.x,i[n.action].x],cy:[s.y,i[n.action].y],opacity:[0,1,1,0]},transition:{duration:1,ease:"easeInOut"}},n.key),e(d,{pos:s,label:"Client"}),t?r(g,{children:[e(d,{pos:l,label:"Tickets Writer",tone:(n==null?void 0:n.action)==="write"?"indigo":"slate"}),e(d,{pos:c,label:"Tickets Reader",tone:(n==null?void 0:n.action)==="read"?"sky":"slate"})]}):e(d,{pos:o,label:"Tickets",tone:(n==null?void 0:n.action)==="write"?"indigo":(n==null?void 0:n.action)==="read"?"sky":"slate"})]})})}function d({pos:t,label:n,tone:i="slate"}){const m=i==="indigo"?"rgb(49 46 129)":i==="sky"?"rgb(12 74 110)":"rgb(30 41 59)",x=i==="indigo"?"rgb(129 140 248)":i==="sky"?"rgb(56 189 248)":"rgb(71 85 105)";return r("g",{children:[e(h.rect,{x:t.x-b/2,y:t.y-p/2,width:b,height:p,rx:10,fill:m,stroke:x,strokeWidth:i==="slate"?1.5:2.5,animate:i!=="slate"?{scale:[1,1.05,1]}:{scale:1},style:{transformOrigin:`${t.x}px ${t.y}px`},transition:{duration:.4}}),e("text",{x:t.x,y:t.y+5,textAnchor:"middle",fill:"white",fontSize:13,fontWeight:600,children:n})]})}function k(){const[t,n]=y(!1),[i,m]=y(null),x=a=>{m({action:a,key:`${a}-${Date.now()}`})};return r("div",{className:"space-y-6",children:[r("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e("p",{className:"text-sm text-slate-400",children:t?"CQRS включён: запись и чтение идут в разные сервисы — их можно масштабировать и оптимизировать независимо.":"Один и тот же сервис отвечает и за запись, и за чтение — они делят одну и ту же нагрузку и одну и ту же модель данных."}),e("button",{onClick:()=>n(a=>!a),className:["shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",t?"border-indigo-500 bg-indigo-600 text-white hover:bg-indigo-500":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:t?"CQRS: включён":"CQRS: выключен"})]}),e(C,{cqrsEnabled:t,flash:i}),e("div",{className:"flex flex-wrap gap-2",children:u.map(a=>e("button",{onClick:()=>x(a.id),className:"rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white",children:a.label},a.id))}),e("p",{className:"min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:i?t?i.action==="write"?"Запись идёт в Tickets Writer — сервис, оптимизированный под надёжную, строго консистентную запись.":"Чтение идёт в Tickets Reader — отдельный сервис с денормализованной, быстрой для чтения проекцией данных.":"И запись, и чтение идут в один и тот же сервис Tickets — он вынужден быть компромиссом между двумя разными нагрузками сразу.":"Нажми «Купить билет» или «Посмотреть список», чтобы увидеть, куда идёт запрос."})]})}function E(){return r("div",{className:"space-y-4 text-slate-300",children:[r("p",{children:[e("strong",{className:"text-white",children:"CQRS"})," (Command Query Responsibility Segregation) — разделить путь записи (Command) и путь чтения (Query) на разные сервисы, вместо одного сервиса, отвечающего за оба."]}),r("div",{children:[e("h3",{className:"font-semibold text-white",children:"Зачем"}),e("p",{className:"mt-2",children:"Чтение и запись почти всегда нагружены по-разному — обычно читают на порядки чаще, чем пишут, — и требуют разной оптимизации схемы данных. Модель, удобная для записи (нормализованная, с проверками целостности), редко бывает удобна для чтения (денормализованная, готовая к быстрой отдаче)."})]}),r("div",{children:[e("h3",{className:"font-semibold text-white",children:"Что это даёт"}),r("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[r("li",{children:[e("strong",{className:"text-white",children:"Независимое масштабирование"})," — Reader'ов можно поднять в 10 раз больше, чем Writer'ов, если читают в 10 раз чаще, чем пишут."]}),r("li",{children:[e("strong",{className:"text-white",children:"Разные хранилища"})," — Writer может писать в строгую реляционную БД, а Reader — читать из денормализованной проекции или даже из другого движка (например, поисковый индекс)."]}),r("li",{children:[e("strong",{className:"text-white",children:"Разные модели данных"})," — команда на запись и результат чтения не обязаны быть одной и той же структурой."]})]})]}),r("div",{children:[e("h3",{className:"font-semibold text-white",children:"Цена"}),e("p",{className:"mt-2",children:"Если Reader читает из отдельной, реплицируемой проекции — между записью и её появлением в Reader неизбежна задержка (тот же replication lag, что и у обычной репликации). Дополнительная инфраструктурная сложность тоже никуда не девается — двух сервисов вместо одного нужно деплоить, мониторить и поддерживать."})]})]})}const R=`/**
 * CQRS (Command Query Responsibility Segregation) — разделить путь записи
 * и путь чтения на разные сервисы (и часто разные хранилища), вместо
 * одного сервиса, отвечающего за оба.
 *
 * Зачем: чтение и запись почти всегда нагружены по-разному (обычно читают
 * на порядки чаще, чем пишут) и требуют разной оптимизации схемы данных.
 * Разделив их, каждую сторону можно масштабировать и оптимизировать
 * НЕЗАВИСИМО — например, Reader держит денормализованные, быстрые для
 * чтения проекции, а Writer — строгую нормализованную модель для записи.
 */

export type CqrsAction = "write" | "read";

export const ACTIONS: { id: CqrsAction; label: string }[] = [
  { id: "write", label: "Купить билет (запись)" },
  { id: "read", label: "Посмотреть список билетов (чтение)" },
];
`,w=`import { motion } from "framer-motion";
import type { CqrsAction } from "./cqrs";

const W = 480;
const H = 200;
const CLIENT = { x: 80, y: 100 };
const UNIFIED = { x: 350, y: 100 };
const WRITER = { x: 350, y: 50 };
const READER = { x: 350, y: 150 };
const BOX_W = 140;
const BOX_H = 46;

export function CqrsDiagram({
  cqrsEnabled,
  flash,
}: {
  cqrsEnabled: boolean;
  flash: { action: CqrsAction; key: string } | null;
}) {
  const targets = cqrsEnabled ? { write: WRITER, read: READER } : { write: UNIFIED, read: UNIFIED };

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg viewBox={\`0 0 \${W} \${H}\`} className="mx-auto h-auto w-full max-w-md" role="img" aria-label="CQRS: разделение чтения и записи">
        {cqrsEnabled ? (
          <>
            <line x1={CLIENT.x} y1={CLIENT.y} x2={WRITER.x} y2={WRITER.y} stroke="rgb(51 65 85)" strokeWidth={2} />
            <line x1={CLIENT.x} y1={CLIENT.y} x2={READER.x} y2={READER.y} stroke="rgb(51 65 85)" strokeWidth={2} />
          </>
        ) : (
          <line x1={CLIENT.x} y1={CLIENT.y} x2={UNIFIED.x} y2={UNIFIED.y} stroke="rgb(51 65 85)" strokeWidth={2} />
        )}

        {flash && (
          <motion.circle
            key={flash.key}
            r={7}
            fill={flash.action === "write" ? "rgb(99 102 241)" : "rgb(56 189 248)"}
            initial={{ cx: CLIENT.x, cy: CLIENT.y, opacity: 0 }}
            animate={{
              cx: [CLIENT.x, targets[flash.action].x],
              cy: [CLIENT.y, targets[flash.action].y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}

        <Node pos={CLIENT} label="Client" />
        {cqrsEnabled ? (
          <>
            <Node pos={WRITER} label="Tickets Writer" tone={flash?.action === "write" ? "indigo" : "slate"} />
            <Node pos={READER} label="Tickets Reader" tone={flash?.action === "read" ? "sky" : "slate"} />
          </>
        ) : (
          <Node
            pos={UNIFIED}
            label="Tickets"
            tone={flash?.action === "write" ? "indigo" : flash?.action === "read" ? "sky" : "slate"}
          />
        )}
      </svg>
    </div>
  );
}

function Node({
  pos,
  label,
  tone = "slate",
}: {
  pos: { x: number; y: number };
  label: string;
  tone?: "slate" | "indigo" | "sky";
}) {
  const fill = tone === "indigo" ? "rgb(49 46 129)" : tone === "sky" ? "rgb(12 74 110)" : "rgb(30 41 59)";
  const stroke = tone === "indigo" ? "rgb(129 140 248)" : tone === "sky" ? "rgb(56 189 248)" : "rgb(71 85 105)";
  return (
    <g>
      <motion.rect
        x={pos.x - BOX_W / 2}
        y={pos.y - BOX_H / 2}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={fill}
        stroke={stroke}
        strokeWidth={tone === "slate" ? 1.5 : 2.5}
        animate={tone !== "slate" ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        style={{ transformOrigin: \`\${pos.x}px \${pos.y}px\` }}
        transition={{ duration: 0.4 }}
      />
      <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill="white" fontSize={13} fontWeight={600}>
        {label}
      </text>
    </g>
  );
}
`,I=`import { useState } from "react";
import { ACTIONS, type CqrsAction } from "./cqrs";
import { CqrsDiagram } from "./CqrsDiagram";

export function Demo() {
  const [cqrsEnabled, setCqrsEnabled] = useState(false);
  const [flash, setFlash] = useState<{ action: CqrsAction; key: string } | null>(null);

  const trigger = (action: CqrsAction) => {
    setFlash({ action, key: \`\${action}-\${Date.now()}\` });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          {cqrsEnabled
            ? "CQRS включён: запись и чтение идут в разные сервисы — их можно масштабировать и оптимизировать независимо."
            : "Один и тот же сервис отвечает и за запись, и за чтение — они делят одну и ту же нагрузку и одну и ту же модель данных."}
        </p>
        <button
          onClick={() => setCqrsEnabled((v) => !v)}
          className={[
            "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
            cqrsEnabled
              ? "border-indigo-500 bg-indigo-600 text-white hover:bg-indigo-500"
              : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
          ].join(" ")}
        >
          {cqrsEnabled ? "CQRS: включён" : "CQRS: выключен"}
        </button>
      </div>

      <CqrsDiagram cqrsEnabled={cqrsEnabled} flash={flash} />

      <div className="flex flex-wrap gap-2">
        {ACTIONS.map((a) => (
          <button
            key={a.id}
            onClick={() => trigger(a.id)}
            className="rounded-md border border-slate-700 px-4 py-1.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:text-white"
          >
            {a.label}
          </button>
        ))}
      </div>

      <p className="min-h-[3.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
        {!flash
          ? "Нажми «Купить билет» или «Посмотреть список», чтобы увидеть, куда идёт запрос."
          : cqrsEnabled
            ? flash.action === "write"
              ? "Запись идёт в Tickets Writer — сервис, оптимизированный под надёжную, строго консистентную запись."
              : "Чтение идёт в Tickets Reader — отдельный сервис с денормализованной, быстрой для чтения проекцией данных."
            : "И запись, и чтение идут в один и тот же сервис Tickets — он вынужден быть компромиссом между двумя разными нагрузками сразу."}
      </p>
    </div>
  );
}
`,S={meta:{id:"cqrs",title:"CQRS",category:"architectural",summary:"Command Query Responsibility Segregation: разделяем запись и чтение на разные сервисы, чтобы масштабировать и оптимизировать их независимо друг от друга."},Demo:k,Explanation:E,code:[{filename:"cqrs.ts",language:"typescript",source:R},{filename:"CqrsDiagram.tsx",language:"tsx",source:w},{filename:"Demo.tsx",language:"tsx",source:I}]};export{S as default};
