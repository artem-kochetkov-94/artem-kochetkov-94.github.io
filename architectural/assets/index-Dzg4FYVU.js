/* empty css              */import{a as i,_ as e,b as _}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as C,d as A,e as T}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";import{A as O}from"./index-f9MUpYCc.js";import{m}from"./proxy-BroObIT1.js";const N=[{id:"cache-aside",label:"Cache-Aside",hint:"Сервис сам решает, когда идти в кэш, а когда в БД — вся координация на его стороне."},{id:"cache-through",label:"Cache-Through (Read/Write Through)",hint:"Сервис ходит только в кэш — при промахе кэш сам читает из БД и сохраняет результат; сервис про БД вообще не знает."}],I=3,D=[{id:1,op:"get",key:"user:1"},{id:2,op:"get",key:"user:2"},{id:3,op:"get",key:"user:1"},{id:4,op:"set",key:"user:2",value:"user:2 (обновлён)"},{id:5,op:"get",key:"user:3"},{id:6,op:"get",key:"user:4"},{id:7,op:"get",key:"user:1"},{id:8,op:"get",key:"user:2"}];function P(n,h,o=I){const a=new Map;let s=[];function c(t){s=[t,...s.filter(d=>d!==t)]}function p(){if(s.length<=o)return null;const t=s[s.length-1];return s=s.slice(0,o),t}const y=[];for(const t of h){const d=[];let r=null,g;if(t.op==="get"){const u=s.includes(t.key);if(u)d.push({from:"service",to:"cache",kind:"read"}),c(t.key),g=n==="cache-aside"?`GET ${t.key}: попадание в кэш — сервис получил значение сразу, в БД не ходил.`:`GET ${t.key}: попадание — кэш отдал значение сам, сервис про БД даже не знает.`;else{n==="cache-aside"?(d.push({from:"service",to:"cache",kind:"read"}),d.push({from:"service",to:"db",kind:"read"}),d.push({from:"service",to:"cache",kind:"write"})):(d.push({from:"service",to:"cache",kind:"request"}),d.push({from:"cache",to:"db",kind:"read"}),d.push({from:"cache",to:"service",kind:"response"}));const k=a.get(t.key)??`значение(${t.key})`;a.set(t.key,k),c(t.key),r=p(),g=(n==="cache-aside"?`GET ${t.key}: промах — сервис сам читает БД и сам кладёт результат в кэш.`:`GET ${t.key}: промах — кэш сам сходил в БД и принёс результат сервису.`)+(r?` Кэш переполнен, вытеснили «${r}» (LRU).`:"")}y.push({id:t.id,op:"get",key:t.key,hit:u,legs:d,cacheEntries:[...s],evictedKey:r,description:g});continue}const v=t.value??`значение(${t.key})`;n==="cache-aside"?(d.push({from:"service",to:"db",kind:"write"}),d.push({from:"service",to:"cache",kind:"write"})):(d.push({from:"service",to:"cache",kind:"write"}),d.push({from:"cache",to:"db",kind:"write"})),a.set(t.key,v),c(t.key),r=p(),g=(n==="cache-aside"?`SET ${t.key}: сервис сам пишет в БД, потом сам обновляет кэш.`:`SET ${t.key}: сервис пишет только в кэш, а кэш сам синхронно пишет в БД.`)+(r?` Кэш переполнен, вытеснили «${r}» (LRU).`:""),y.push({id:t.id,op:"set",key:t.key,hit:!1,legs:d,cacheEntries:[...s],evictedKey:r,description:g})}return y}const w=640,L=260,l={service:{x:110,y:80},cache:{x:530,y:80},db:{x:320,y:220}},x=130,f=56,b=1.1;function E(n){return{x:n.x-x/2,y:n.y-f/2}}function R({legs:n,eventKey:h}){const o=b/2;return e(_,{children:n.map((a,s)=>{const c=l[a.from],p=l[a.to],y=s*b;if(a.kind==="read")return i("g",{children:[e(m.circle,{r:7,fill:"rgb(99 102 241)",initial:{cx:c.x,cy:c.y,opacity:0},animate:{cx:[c.x,p.x],cy:[c.y,p.y],opacity:[0,1,1,0]},transition:{duration:o,delay:y,ease:"easeInOut"}}),e(m.circle,{r:6,fill:"rgb(56 189 248)",initial:{cx:p.x,cy:p.y,opacity:0},animate:{cx:[p.x,c.x],cy:[p.y,c.y],opacity:[0,1,1,0]},transition:{duration:o,delay:y+o,ease:"easeInOut"}})]},`${h}-leg-${s}`);const t=a.kind==="response"?"rgb(56 189 248)":"rgb(99 102 241)";return e(m.circle,{r:7,fill:t,initial:{cx:c.x,cy:c.y,opacity:0},animate:{cx:[c.x,p.x],cy:[c.y,p.y],opacity:[0,1,1,0]},transition:{duration:b,delay:y,ease:"easeInOut"}},`${h}-leg-${s}`)})})}function K({step:n}){const h=new Set(n.legs.flatMap(s=>[s.from,s.to])),o=`${n.id}-${n.op}`,a=n.hit?"sky":"amber";return i("div",{className:"space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[i("svg",{viewBox:`0 0 ${w} ${L}`,className:"h-auto w-full",role:"img","aria-label":"Схема прохождения запроса через кэш",children:[e("line",{x1:l.service.x,y1:l.service.y,x2:l.cache.x,y2:l.cache.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:l.cache.x,y1:l.cache.y,x2:l.db.x,y2:l.db.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e("line",{x1:l.service.x,y1:l.service.y,x2:l.db.x,y2:l.db.y,stroke:"rgb(51 65 85)",strokeWidth:2}),e(R,{legs:n.legs,eventKey:o}),e(S,{rect:E(l.service),title:"Service",tone:h.has("service")?"indigo":"slate",flashKey:h.has("service")?o:"idle"}),e(S,{rect:E(l.cache),title:"Cache",tone:h.has("cache")?a:"slate",flashKey:h.has("cache")?o:"idle"}),e(S,{rect:E(l.db),title:"DB",tone:h.has("db")?"rose":"slate",flashKey:h.has("db")?o:"idle"})]}),i("div",{children:[i("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:["Кэш (MRU → LRU, вместимость ",I,")"]}),i("div",{className:"flex min-h-[2.75rem] flex-wrap items-center gap-2",children:[e(O,{initial:!1,children:n.cacheEntries.map(s=>e(m.span,{layout:!0,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},className:["rounded-md border px-2.5 py-1 font-mono text-xs",s===n.key?"border-sky-500 bg-sky-500/15 text-sky-200":"border-slate-700 bg-slate-800 text-slate-300"].join(" "),children:s},s))}),n.cacheEntries.length===0&&e("span",{className:"text-sm text-slate-600",children:"пусто"}),n.evictedKey&&e(m.span,{initial:{opacity:1},animate:{opacity:0},transition:{duration:1.2},className:"rounded-md border border-rose-500/60 bg-rose-950/40 px-2.5 py-1 font-mono text-xs text-rose-400 line-through",children:n.evictedKey},`evicted-${o}`)]})]})]})}const $={slate:"rgb(30 41 59)",indigo:"rgb(49 46 129)",sky:"rgb(12 74 110)",amber:"rgb(120 53 15)",rose:"rgb(80 7 36)"},U={slate:"rgb(71 85 105)",indigo:"rgb(129 140 248)",sky:"rgb(56 189 248)",amber:"rgb(251 191 36)",rose:"rgb(251 113 133)"};function S({rect:n,title:h,tone:o,flashKey:a}){return i("g",{children:[e(m.rect,{x:n.x,y:n.y,width:x,height:f,rx:10,fill:$[o],stroke:U[o],strokeWidth:o==="slate"?1.5:2.5,animate:o!=="slate"?{scale:[1,1.04,1]}:{scale:1},style:{transformOrigin:`${n.x+x/2}px ${n.y+f/2}px`},transition:{duration:.4}},a),e("text",{x:n.x+x/2,y:n.y+f/2+5,textAnchor:"middle",fill:"white",fontSize:15,fontWeight:600,children:h})]})}const M=1100;function H(){const[n,h]=C("cache-aside"),o=N.find(r=>r.id===n),a=A(()=>P(n,D),[n]),[s,c]=C(0),[p,y]=C(!1),t=s>=a.length-1;T(()=>{c(0),y(!1)},[n]),T(()=>{var u;if(!p)return;if(t){y(!1);return}const r=((u=a[s])==null?void 0:u.legs.length)??1,g=b*r*1e3+M,v=setTimeout(()=>c(k=>k+1),g);return()=>clearTimeout(v)},[p,t,s,a]);const d=a[Math.min(s,a.length-1)];return i("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:N.map(r=>e("button",{onClick:()=>h(r.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",r.id===n?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:r.label},r.id))}),e("p",{className:"text-sm text-slate-400",children:o.hint}),e(K,{step:d}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:d.description}),i("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{c(0),y(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{y(!1),c(r=>Math.max(0,r-1))},disabled:s===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>y(r=>!r),disabled:t,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:p?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{y(!1),c(r=>Math.min(a.length-1,r+1))},disabled:t,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),i("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["запрос ",s+1," / ",a.length]})]}),e("input",{type:"range",min:0,max:a.length-1,value:s,onChange:r=>{y(!1),c(Number(r.target.value))},className:"w-full accent-indigo-500"})]})}function W(){return i("div",{className:"space-y-4 text-slate-300",children:[i("p",{children:[e("strong",{className:"text-white",children:"Кэширование"}),' — архитектурный паттерн, при котором результат "дорогого" запроса (в БД, к внешнему сервису, тяжёлое вычисление) сохраняется в быстром хранилище, чтобы повторные обращения не платили ту же цену снова. Задача кэша — ускорить ответ, а не заменить собой способность системы держать нагрузку без него.']}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Основные термины"}),i("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[i("li",{children:[e("strong",{children:"Cache hit / miss"})," — попадание (ключ нашёлся) или промах (не нашёлся, идём к первоисточнику)."]}),i("li",{children:[e("strong",{children:"Hit ratio"})," — доля попаданий; чем выше, тем эффективнее кэш."]}),i("li",{children:[e("strong",{children:"Инвалидация"})," — удаление устаревших данных из кэша; самая сложная часть кэширования на практике."]})]})]}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Cache-Aside vs Cache-Through"}),i("p",{className:"mt-2",children:["Разница не в результате, а в том, ",e("em",{children:"кто"})," ходит в БД. В демо рядом это видно по маршруту запроса на диаграмме:"]}),i("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[i("li",{children:[e("strong",{children:"Cache-Aside"}),' — сервис сам решает: сходил в кэш, не нашёл — сам идёт в БД и сам же кладёт результат в кэш. Кэш "не знает" про БД вообще.']}),i("li",{children:[e("strong",{children:"Cache-Through"})," (Read Through + Write Through) — сервис ходит только в кэш; при промахе кэш сам обращается к БД и сохраняет результат. Сервис про БД не знает вообще."]})]}),i("p",{className:"mt-2",children:["Есть и третий вариант — ",e("strong",{children:"Cache-Ahead"}),": запросы на чтение всегда идут только в кэш, а кэш периодически (не по запросу) сам обновляется из БД в фоне."]})]}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Вытеснение (LRU)"}),i("p",{className:"mt-2",children:["Кэш ограничен по объёму, поэтому нужна стратегия вытеснения. В демо — ",e("strong",{children:"LRU (Least Recently Used)"}),": вытесняется ключ, к которому дольше всего не обращались. Другие частые варианты: ",e("strong",{children:"LFU"})," (реже всего используемый),"," ",e("strong",{children:"MRU"})," (наоборот, самый недавний — для специфичных сценариев), ",e("strong",{children:"TLRU"})," (LRU + TTL)."]})]}),i("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),e("p",{className:"mt-2",children:"Redis / Memcached перед базой данных, HTTP-кэш в браузере и на CDN, кэш вычисленных данных внутри сервиса (in-memory), кэш результатов внешних API-вызовов."})]})]})}const G=`/**
 * Кэширование: два способа взаимодействия сервиса с кэшем и базой —
 * Cache-Aside (сервис сам координирует оба похода) и Cache-Through
 * (сервис ходит только в кэш, а кэш сам умеет читать/писать в БД).
 * Разница видна не в результате, а в МАРШРУТЕ запроса — это и рисует Demo.
 * Плюс LRU-вытеснение: кэш ограничен по размеру.
 */

export type CacheStrategyId = "cache-aside" | "cache-through";

export const CACHE_STRATEGIES: {
  id: CacheStrategyId;
  label: string;
  hint: string;
}[] = [
  {
    id: "cache-aside",
    label: "Cache-Aside",
    hint: "Сервис сам решает, когда идти в кэш, а когда в БД — вся координация на его стороне.",
  },
  {
    id: "cache-through",
    label: "Cache-Through (Read/Write Through)",
    hint: "Сервис ходит только в кэш — при промахе кэш сам читает из БД и сохраняет результат; сервис про БД вообще не знает.",
  },
];

/** Узлы диаграммы, между которыми "путешествует" запрос. */
export type CacheNodeId = "service" | "cache" | "db";

export interface CacheOpDef {
  id: number;
  op: "get" | "set";
  key: string;
  value?: string;
}

/** Ёмкость кэша в демо — специально маленькая, чтобы дожить до вытеснения. */
export const CACHE_CAPACITY = 3;

export const DEFAULT_CACHE_TIMELINE: CacheOpDef[] = [
  { id: 1, op: "get", key: "user:1" },
  { id: 2, op: "get", key: "user:2" },
  { id: 3, op: "get", key: "user:1" },
  { id: 4, op: "set", key: "user:2", value: "user:2 (обновлён)" },
  { id: 5, op: "get", key: "user:3" },
  { id: 6, op: "get", key: "user:4" },
  { id: 7, op: "get", key: "user:1" },
  { id: 8, op: "get", key: "user:2" },
];

/**
 * Один "перегон" маршрута:
 *  - read     — полноценный круговой обмен: запрос летит туда, ответ с
 *               данными сразу же летит обратно (адресат уже знает ответ).
 *  - write    — данные едут только вперёд, отвечать нечем.
 *  - request  — вопрос летит вперёд, но ответа СРАЗУ не будет: адресат сам
 *               ещё не знает ответа (например, кэш при промахе).
 *  - response — ответ с данными едет вперёд САМ ПО СЕБЕ, без парного запроса
 *               в этом же перегоне, — доставка результата, добытого раньше
 *               через другой узел (например, кэш относит сервису то, что
 *               перед этим получил из БД).
 */
export interface CacheLeg {
  from: CacheNodeId;
  to: CacheNodeId;
  kind: "read" | "write" | "request" | "response";
}

/** Один кадр симуляции: один операция (GET/SET) целиком, с маршрутом. */
export interface CacheStep {
  id: number;
  op: "get" | "set";
  key: string;
  hit: boolean;
  /** Маршрут запроса как последовательность перегонов service/cache/db. */
  legs: CacheLeg[];
  /** Содержимое кэша ПОСЛЕ операции, от недавно использованного к давнему. */
  cacheEntries: string[];
  evictedKey: string | null;
  description: string;
}

/**
 * Прогоняет таймлайн операций через выбранную стратегию.
 * "База данных" и "кэш" — просто Map в замыкании; кэш хранит порядок
 * использования (MRU в начале списка) для LRU-вытеснения при переполнении.
 */
export function simulateCaching(
  strategyId: CacheStrategyId,
  ops: CacheOpDef[],
  capacity: number = CACHE_CAPACITY,
): CacheStep[] {
  const db = new Map<string, string>();
  let cacheOrder: string[] = []; // MRU первый

  function touch(key: string) {
    cacheOrder = [key, ...cacheOrder.filter((k) => k !== key)];
  }

  function evictIfNeeded(): string | null {
    if (cacheOrder.length <= capacity) return null;
    const evicted = cacheOrder[cacheOrder.length - 1];
    cacheOrder = cacheOrder.slice(0, capacity);
    return evicted;
  }

  const steps: CacheStep[] = [];

  for (const opDef of ops) {
    const legs: CacheLeg[] = [];
    let evictedKey: string | null = null;
    let description: string;

    if (opDef.op === "get") {
      const hit = cacheOrder.includes(opDef.key);

      if (hit) {
        // Кэш отвечает сразу — обычный круговой обмен "спросил → получил".
        legs.push({ from: "service", to: "cache", kind: "read" });
        touch(opDef.key);
        description =
          strategyId === "cache-aside"
            ? \`GET \${opDef.key}: попадание в кэш — сервис получил значение сразу, в БД не ходил.\`
            : \`GET \${opDef.key}: попадание — кэш отдал значение сам, сервис про БД даже не знает.\`;
      } else {
        if (strategyId === "cache-aside") {
          // Кэш сразу отвечает "нет" (свой круговой обмен) — и сервис САМ идёт в БД.
          legs.push({ from: "service", to: "cache", kind: "read" });
          legs.push({ from: "service", to: "db", kind: "read" });
          // Сервис сам кладёт найденное значение в кэш — это запись, ответа с данными тут не будет.
          legs.push({ from: "service", to: "cache", kind: "write" });
        } else {
          // Cache-Through: сервис спрашивает кэш и ЖДЁТ — ответа сразу нет,
          // потому что кэш ещё не знает ответа. Кэш сам идёт в БД (свой
          // круговой обмен), и только получив данные — относит их сервису
          // отдельным перегоном. Без этого последнего перегона выглядело бы
          // так, будто кэш сходил в БД и данные испарились.
          legs.push({ from: "service", to: "cache", kind: "request" });
          legs.push({ from: "cache", to: "db", kind: "read" });
          legs.push({ from: "cache", to: "service", kind: "response" });
        }
        const value = db.get(opDef.key) ?? \`значение(\${opDef.key})\`;
        db.set(opDef.key, value);
        touch(opDef.key);
        evictedKey = evictIfNeeded();
        description =
          (strategyId === "cache-aside"
            ? \`GET \${opDef.key}: промах — сервис сам читает БД и сам кладёт результат в кэш.\`
            : \`GET \${opDef.key}: промах — кэш сам сходил в БД и принёс результат сервису.\`) +
          (evictedKey ? \` Кэш переполнен, вытеснили «\${evictedKey}» (LRU).\` : "");
      }

      steps.push({
        id: opDef.id,
        op: "get",
        key: opDef.key,
        hit,
        legs,
        cacheEntries: [...cacheOrder],
        evictedKey,
        description,
      });
      continue;
    }

    // SET — оба перегона это запись: данные едут только вперёд, читать тут нечего.
    const value = opDef.value ?? \`значение(\${opDef.key})\`;
    if (strategyId === "cache-aside") {
      legs.push({ from: "service", to: "db", kind: "write" });
      legs.push({ from: "service", to: "cache", kind: "write" });
    } else {
      legs.push({ from: "service", to: "cache", kind: "write" });
      legs.push({ from: "cache", to: "db", kind: "write" });
    }
    db.set(opDef.key, value);
    touch(opDef.key);
    evictedKey = evictIfNeeded();
    description =
      (strategyId === "cache-aside"
        ? \`SET \${opDef.key}: сервис сам пишет в БД, потом сам обновляет кэш.\`
        : \`SET \${opDef.key}: сервис пишет только в кэш, а кэш сам синхронно пишет в БД.\`) +
      (evictedKey ? \` Кэш переполнен, вытеснили «\${evictedKey}» (LRU).\` : "");

    steps.push({
      id: opDef.id,
      op: "set",
      key: opDef.key,
      hit: false,
      legs,
      cacheEntries: [...cacheOrder],
      evictedKey,
      description,
    });
  }

  return steps;
}
`,B=`import { AnimatePresence, motion } from "framer-motion";
import {
  CACHE_CAPACITY,
  type CacheLeg,
  type CacheNodeId,
  type CacheStep,
} from "./strategies";

// Треугольная раскладка вместо линейной: у Service—Cache—DB теперь три
// РЕАЛЬНЫХ ребра (а не одно решётчатое + декоративная дуга-намёк). Cache-Aside
// и Cache-Through буквально ходят по разным сторонам треугольника — это и
// есть наглядная разница между стратегиями.
const W = 640;
const H = 260;

const POS: Record<CacheNodeId, { x: number; y: number }> = {
  service: { x: 110, y: 80 },
  cache: { x: 530, y: 80 },
  db: { x: 320, y: 220 },
};

const BOX_W = 130;
const BOX_H = 56;

/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и плеером
 * (Demo.tsx), чтобы автопрокрутка не переключала шаг раньше, чем все импульсы
 * шага доиграют. */
export const PACKET_LEG_DURATION = 1.1;

function rectAt(center: { x: number; y: number }) {
  return { x: center.x - BOX_W / 2, y: center.y - BOX_H / 2 };
}

/**
 * Каждый перегон — свой независимый импульс, стартующий заново в точке
 * "from". Раньше все перегоны шага соединялись в одно движение, и для
 * несмежных перегонов (service→cache, затем ОПЯТЬ service→db) кружок
 * визуально прыгал через холст. Отдельные импульсы с задержкой друг за
 * другом полностью убирают прыжки — независимо от того, смежные перегоны
 * или нет.
 *
 * Внутри READ-перегона — не один бросок, а полный цикл запрос/ответ: первая
 * половина времени запрос летит к цели (индиго), вторая половина — ответ С
 * ДАННЫМИ летит обратно (голубой) — уместно, когда адресат УЖЕ знает ответ
 * (например, у БД он есть всегда).
 *
 * WRITE и REQUEST едут только вперёд одним импульсом (индиго) — отвечать
 * пока нечем: при записи в принципе нет ответа, а при REQUEST адресат сам
 * ещё не знает результат (кэш при промахе сначала должен сходить в БД).
 *
 * RESPONSE — тоже один импульс, но голубой и в обратную сторону: это
 * доставка результата, добытого ЧЕРЕЗ ДРУГОЙ перегон раньше (кэш относит
 * сервису то, что только что получил из БД). Без него получилось бы, что
 * кэш сходил в БД — и данные никуда не делись.
 */
function LegPulses({ legs, eventKey }: { legs: CacheLeg[]; eventKey: string }) {
  const half = PACKET_LEG_DURATION / 2;
  return (
    <>
      {legs.map((leg, i) => {
        const a = POS[leg.from];
        const b = POS[leg.to];
        const legStart = i * PACKET_LEG_DURATION;

        if (leg.kind === "read") {
          return (
            <g key={\`\${eventKey}-leg-\${i}\`}>
              {/* Запрос: from → to. */}
              <motion.circle
                r={7}
                fill="rgb(99 102 241)"
                initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
                transition={{ duration: half, delay: legStart, ease: "easeInOut" }}
              />
              {/* Ответ с данными: to → from. */}
              <motion.circle
                r={6}
                fill="rgb(56 189 248)"
                initial={{ cx: b.x, cy: b.y, opacity: 0 }}
                animate={{ cx: [b.x, a.x], cy: [b.y, a.y], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: half,
                  delay: legStart + half,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        }

        // write / request — индиго, одним impульсом вперёд.
        // response — голубой (как "ответ" у read), тоже одним импульсом, но
        // это отдельный самостоятельный перегон, а не вторая половина read.
        const fill = leg.kind === "response" ? "rgb(56 189 248)" : "rgb(99 102 241)";
        return (
          <motion.circle
            key={\`\${eventKey}-leg-\${i}\`}
            r={7}
            fill={fill}
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: PACKET_LEG_DURATION,
              delay: legStart,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}

export function CacheDiagram({ step }: { step: CacheStep }) {
  const touched = new Set(step.legs.flatMap((leg) => [leg.from, leg.to]));
  const eventKey = \`\${step.id}-\${step.op}\`;
  const cacheFlash = step.hit ? "sky" : "amber";

  return (
    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        className="h-auto w-full"
        role="img"
        aria-label="Схема прохождения запроса через кэш"
      >
        {/* Три реальных ребра треугольника — все одинаковым сплошным стилем. */}
        <line
          x1={POS.service.x}
          y1={POS.service.y}
          x2={POS.cache.x}
          y2={POS.cache.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />
        <line
          x1={POS.cache.x}
          y1={POS.cache.y}
          x2={POS.db.x}
          y2={POS.db.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />
        <line
          x1={POS.service.x}
          y1={POS.service.y}
          x2={POS.db.x}
          y2={POS.db.y}
          stroke="rgb(51 65 85)"
          strokeWidth={2}
        />

        <LegPulses legs={step.legs} eventKey={eventKey} />

        <DiagramNode
          rect={rectAt(POS.service)}
          title="Service"
          tone={touched.has("service") ? "indigo" : "slate"}
          flashKey={touched.has("service") ? eventKey : "idle"}
        />
        <DiagramNode
          rect={rectAt(POS.cache)}
          title="Cache"
          tone={touched.has("cache") ? cacheFlash : "slate"}
          flashKey={touched.has("cache") ? eventKey : "idle"}
        />
        <DiagramNode
          rect={rectAt(POS.db)}
          title="DB"
          tone={touched.has("db") ? "rose" : "slate"}
          flashKey={touched.has("db") ? eventKey : "idle"}
        />
      </svg>

      {/* Содержимое кэша: слева — самый недавно использованный ключ. */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
          Кэш (MRU → LRU, вместимость {CACHE_CAPACITY})
        </p>
        <div className="flex min-h-[2.75rem] flex-wrap items-center gap-2">
          <AnimatePresence initial={false}>
            {step.cacheEntries.map((key) => (
              <motion.span
                key={key}
                layout
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className={[
                  "rounded-md border px-2.5 py-1 font-mono text-xs",
                  key === step.key
                    ? "border-sky-500 bg-sky-500/15 text-sky-200"
                    : "border-slate-700 bg-slate-800 text-slate-300",
                ].join(" ")}
              >
                {key}
              </motion.span>
            ))}
          </AnimatePresence>
          {step.cacheEntries.length === 0 && (
            <span className="text-sm text-slate-600">пусто</span>
          )}
          {step.evictedKey && (
            <motion.span
              key={\`evicted-\${eventKey}\`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="rounded-md border border-rose-500/60 bg-rose-950/40 px-2.5 py-1 font-mono text-xs text-rose-400 line-through"
            >
              {step.evictedKey}
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}

const TONE_FILL: Record<string, string> = {
  slate: "rgb(30 41 59)",
  indigo: "rgb(49 46 129)",
  sky: "rgb(12 74 110)",
  amber: "rgb(120 53 15)",
  rose: "rgb(80 7 36)",
};
const TONE_STROKE: Record<string, string> = {
  slate: "rgb(71 85 105)",
  indigo: "rgb(129 140 248)",
  sky: "rgb(56 189 248)",
  amber: "rgb(251 191 36)",
  rose: "rgb(251 113 133)",
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
        fontSize={15}
        fontWeight={600}
      >
        {title}
      </text>
    </g>
  );
}
`,F=`import { useEffect, useMemo, useState } from "react";
import {
  CACHE_STRATEGIES,
  DEFAULT_CACHE_TIMELINE,
  simulateCaching,
  type CacheStrategyId,
} from "./strategies";
import { CacheDiagram, PACKET_LEG_DURATION } from "./CacheDiagram";

// Пауза после того, как пакет долетел, — чтобы успеть прочитать описание.
const READ_PAUSE_MS = 1100;

export function Demo() {
  const [strategyId, setStrategyId] = useState<CacheStrategyId>("cache-aside");
  const strategy = CACHE_STRATEGIES.find((s) => s.id === strategyId)!;

  const steps = useMemo(
    () => simulateCaching(strategyId, DEFAULT_CACHE_TIMELINE),
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
    // Ждём, пока пакет долетит по своему маршруту (у разных шагов разное
    // число "перегонов"), и только потом даём время прочитать описание.
    const currentLegs = steps[stepIndex]?.legs.length ?? 1;
    const delay = PACKET_LEG_DURATION * currentLegs * 1000 + READ_PAUSE_MS;
    const timer = setTimeout(() => setStepIndex((i) => i + 1), delay);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex, steps]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  return (
    <div className="space-y-6">
      {/* Выбор стратегии. */}
      <div className="flex flex-wrap gap-2">
        {CACHE_STRATEGIES.map((s) => (
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

      <CacheDiagram step={step} />

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
`,Q={meta:{id:"caching",title:"Кэширование",category:"architectural",summary:"Cache-Aside vs Cache-Through (Read/Write Through): кто ходит в БД — сервис сам или кэш за него. Плюс LRU-вытеснение при переполнении кэша."},Demo:H,Explanation:W,code:[{filename:"strategies.ts",language:"typescript",source:G},{filename:"CacheDiagram.tsx",language:"tsx",source:B},{filename:"Demo.tsx",language:"tsx",source:F}]};export{Q as default};
