import{m as y}from"./proxy-CG6_1RCV.js";import{a as n,_ as e}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as f,d as $,e as E}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react__loadShare__.js-C3muBDPt.js";function N(o){return String.fromCharCode(65+o)}function T(o){const s=[];for(const l of o)s.push({time:l.start,delta:1,intervalId:l.id,edge:"start"}),s.push({time:l.end,delta:-1,intervalId:l.id,edge:"end"});return s.sort((l,c)=>l.time-c.time||l.delta-c.delta),s}function L(o){const s=[],l=T(o);if(l.length===0)return s.push({eventIndex:-1,time:0,delta:0,active:0,maxActive:0,activeIds:[],intervalId:null,edge:null,description:"Встреч нет — комнат не нужно.",done:!0}),s;s.push({eventIndex:-1,time:l[0].time,delta:0,active:0,maxActive:0,activeIds:[],intervalId:null,edge:null,description:`Разбили ${o.length} встреч(и) на ${l.length} событий (начало +1, конец −1) и отсортировали по времени. Ведём линию слева направо и считаем активные встречи.`,done:!1});const c=new Set;let r=0;return l.forEach((d,p)=>{const a=N(d.intervalId);d.delta===1?c.add(d.intervalId):c.delete(d.intervalId);const v=c.size,t=d.delta===1&&v>r;r=Math.max(r,v);let m;d.delta===1?(m=`t = ${d.time}: началась встреча ${a}. Активных стало ${v}.`,t&&(m+=` Это новый пик — нужно уже ${r} комнат(ы).`)):m=`t = ${d.time}: закончилась встреча ${a}. Освободилась комната, активных ${v}.`;const u=p===l.length-1;u&&(m+=` Все события разобраны — ответ: ${r} комнат(ы).`),s.push({eventIndex:p,time:d.time,delta:d.delta,active:v,maxActive:r,activeIds:[...c].sort((g,x)=>g-x),intervalId:d.intervalId,edge:d.edge,description:m,done:u})}),s}function R(o){const s=[];if(o.length===0)return s.push({cursor:-1,intervalId:null,merged:[],action:"init",description:"Отрезков нет — сливать нечего.",done:!0}),s;const l=[...o].sort((r,d)=>r.start-d.start);s.push({cursor:-1,intervalId:null,merged:[],action:"init",description:"Отсортировали отрезки по началу. Идём слева направо и склеиваем каждый следующий с последним островом, пока они перекрываются.",done:!1});const c=[];return l.forEach((r,d)=>{const p=N(r.id),a=c[c.length-1],v=d===l.length-1;let t,m;if(a&&r.start<=a.end){const u=r.end>a.end;a.end=Math.max(a.end,r.end),a.sourceIds.push(r.id),t="extend",m=u?`${p} [${r.start}, ${r.end}] перекрывает остров — расширяем его конец до ${a.end}.`:`${p} [${r.start}, ${r.end}] целиком внутри острова — он не меняется.`}else c.push({start:r.start,end:r.end,sourceIds:[r.id]}),t="push",m=a?`${p} [${r.start}, ${r.end}] начинается после конца острова (${a.end}) — это новый остров.`:`${p} [${r.start}, ${r.end}] — первый остров.`;v&&(m+=` Готово: ${c.length} остров(а/ов).`),s.push({cursor:d,intervalId:r.id,merged:c.map(u=>({...u,sourceIds:[...u.sourceIds]})),action:t,description:m,done:v})}),s}function j(o){return[...o].sort((s,l)=>s.start-l.start)}function A({intervals:o,step:s}){const l=Math.min(...o.map(a=>a.start)),c=Math.max(...o.map(a=>a.end)),r=Math.max(1,c-l),d=a=>(a-l)/r*100,p=new Set(s.activeIds);return n("div",{className:"space-y-6",children:[n("div",{className:"flex flex-wrap gap-3",children:[e(S,{label:"Активно сейчас",value:s.active,tone:"sky"}),e(S,{label:"Пик = нужно комнат",value:s.maxActive,tone:"emerald",big:!0})]}),e("div",{className:"relative overflow-x-auto",children:n("div",{className:"relative min-w-[480px] py-2",children:[e(y.div,{className:"absolute top-0 bottom-6 z-10 w-0.5 bg-amber-400",style:{left:`${d(s.time)}%`},animate:{left:`${d(s.time)}%`},transition:{type:"spring",stiffness:260,damping:30},children:n("span",{className:"absolute -top-1 left-1 whitespace-nowrap rounded bg-amber-400 px-1.5 text-[10px] font-bold text-slate-900",children:["t = ",s.time]})}),e("div",{className:"space-y-2",children:o.map(a=>{const v=p.has(a.id),t=a.id===s.intervalId,m=s.time>=a.end&&!v;return n("div",{className:"relative h-9",children:[e("div",{className:"absolute inset-0 rounded bg-slate-900"}),n(y.div,{className:["absolute top-0 flex h-9 items-center justify-center rounded border text-xs font-semibold",v?"border-sky-400 bg-sky-500/25 text-white":m?"border-slate-800 bg-slate-800/40 text-slate-600":"border-slate-700 bg-slate-800 text-slate-300",t?"ring-2 ring-amber-400":""].join(" "),style:{left:`${d(a.start)}%`,width:`${d(a.end)-d(a.start)}%`},animate:t?{scale:[1,1.06,1]}:{scale:1},transition:{duration:.3},children:[N(a.id)," [",a.start,", ",a.end,")"]})]},a.id)})}),n("div",{className:"mt-1 flex justify-between font-mono text-[10px] text-slate-600",children:[e("span",{children:l}),e("span",{children:c})]})]})})]})}function S({label:o,value:s,tone:l,big:c=!1}){return n("div",{className:["rounded-lg border px-4 py-2",{sky:"border-sky-700 bg-sky-950/40 text-sky-300",emerald:"border-emerald-600 bg-emerald-950/40 text-emerald-300"}[l],c?"min-w-[10rem]":""].join(" "),children:[e("p",{className:"text-[10px] uppercase tracking-wider opacity-70",children:o}),e("p",{className:["font-mono font-bold tabular-nums",c?"text-2xl text-white":"text-xl"].join(" "),children:s})]})}function P({intervals:o,step:s}){const l=j(o),c=Math.min(...o.map(t=>t.start)),r=Math.max(...o.map(t=>t.end)),d=Math.max(1,r-c),p=t=>(t-c)/d*100,a=new Set(s.merged.flatMap(t=>t.sourceIds)),v=s.merged.length-1;return n("div",{className:"space-y-6",children:[n("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"отрезки, отсортированные по началу"}),e("div",{className:"relative overflow-x-auto",children:e("div",{className:"relative min-w-[480px] space-y-2 py-1",children:l.map(t=>{const m=t.id===s.intervalId,u=a.has(t.id)&&!m;return n("div",{className:"relative h-9",children:[e("div",{className:"absolute inset-0 rounded bg-slate-900"}),n(y.div,{className:["absolute top-0 flex h-9 items-center justify-center rounded border text-xs font-semibold",m?"border-amber-400 bg-amber-500/25 text-white ring-2 ring-amber-400":u?"border-slate-800 bg-slate-800/40 text-slate-600":"border-slate-700 bg-slate-800 text-slate-300"].join(" "),style:{left:`${p(t.start)}%`,width:`${p(t.end)-p(t.start)}%`},animate:m?{scale:[1,1.06,1]}:{scale:1},transition:{duration:.3},children:[N(t.id)," [",t.start,", ",t.end,"]"]})]},t.id)})})})]}),n("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"результат — слитые острова"}),e("div",{className:"relative overflow-x-auto",children:n("div",{className:"relative min-w-[480px] py-1",children:[n("div",{className:"relative h-9",children:[e("div",{className:"absolute inset-0 rounded bg-slate-900"}),s.merged.map((t,m)=>{const u=m===v;return n(y.div,{layout:!0,className:["absolute top-0 flex h-9 items-center justify-center rounded border text-xs font-semibold",u?"border-emerald-400 bg-emerald-500/25 text-white":"border-emerald-700 bg-emerald-900/40 text-emerald-200"].join(" "),style:{left:`${p(t.start)}%`,width:`${p(t.end)-p(t.start)}%`},transition:{type:"spring",stiffness:260,damping:30},children:["[",t.start,", ",t.end,"]"]},m)})]}),n("div",{className:"mt-1 flex justify-between font-mono text-[10px] text-slate-600",children:[e("span",{children:c}),e("span",{children:r})]})]})})]})]})}const I={rooms:[{label:"Классика (3 комнаты)",intervals:[[0,30],[5,10],[10,20],[15,25],[16,40]]},{label:"Встык — не пересекаются",intervals:[[0,10],[10,20],[20,30]]},{label:"Всё внахлёст (4)",intervals:[[1,8],[2,9],[3,7],[4,6]]},{label:"Две комнаты",intervals:[[0,5],[3,9],[6,12]]}],merge:[{label:"Классика (LC 56)",intervals:[[1,3],[2,6],[8,10],[15,18]]},{label:"Касание сливается",intervals:[[1,4],[4,5]]},{label:"Один поглощает всех",intervals:[[1,20],[3,5],[7,9],[12,15]]},{label:"Без пересечений",intervals:[[1,2],[4,6],[8,10]]}]},k={rooms:"Meeting Rooms · метод точек",merge:"Merge Intervals · слияние"},_=900,z=o=>o.map(([s,l],c)=>({id:c,start:s,end:l}));function D(){const[o,s]=f("rooms"),[l,c]=f(I.rooms[0].intervals),[r,d]=f(I.rooms[0].intervals.map(i=>i.join("-")).join(", ")),[p,a]=f(0),[v,t]=f(!1),m=$(()=>z(l),[l]),u=$(()=>o==="rooms"?L(m):R(m),[o,m]),g=u[Math.min(p,u.length-1)],x=p>=u.length-1;E(()=>{if(!v)return;if(x){t(!1);return}const i=setTimeout(()=>a(b=>b+1),_);return()=>clearTimeout(i)},[v,x,p]);const w=i=>{c(i),d(i.map(b=>b.join("-")).join(", ")),a(0),t(!1)},C=i=>{i!==o&&(s(i),w(I[i][0].intervals))},M=()=>{const i=r.split(",").map(b=>b.trim().split(/[\s-]+/).map(Number)).filter(([b,h])=>b!==void 0&&h!==void 0&&Number.isFinite(b)&&Number.isFinite(h)&&b<h).map(([b,h])=>[b,h]);i.length>0&&w(i)};return n("div",{className:"space-y-6",children:[e("div",{className:"inline-flex rounded-lg border border-slate-700 p-1",children:Object.keys(k).map(i=>e("button",{onClick:()=>C(i),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",o===i?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:k[i]},i))}),e("div",{className:"flex flex-wrap gap-2",children:I[o].map(i=>{const b=JSON.stringify(i.intervals)===JSON.stringify(l);return e("button",{onClick:()=>w(i.intervals),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",b?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:i.label},i.label)})}),n("div",{className:"flex flex-wrap items-center gap-2",children:[e("input",{value:r,onChange:i=>d(i.target.value),onKeyDown:i=>i.key==="Enter"&&M(),placeholder:"отрезки: 1-3, 2-6, 8-10",className:"w-72 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"}),e("button",{onClick:M,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"Применить"}),e("span",{className:"text-xs text-slate-500",children:"пары «начало-конец» через запятую"})]}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:o==="rooms"?e(A,{intervals:m,step:g}):e(P,{intervals:m,step:g})}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:g.description}),n("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{a(0),t(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{t(!1),a(i=>Math.max(0,i-1))},disabled:p===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>t(i=>!i),disabled:x,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:v?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{t(!1),a(i=>Math.min(u.length-1,i+1))},disabled:x,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),n("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["шаг ",p+1," / ",u.length]})]}),e("input",{type:"range",min:0,max:u.length-1,value:p,onChange:i=>{t(!1),a(Number(i.target.value))},className:"w-full accent-indigo-500"})]})}function O(){return n("div",{className:"space-y-4 text-slate-300",children:[n("p",{children:[e("strong",{className:"text-white",children:"Интервалы (Intervals)"})," — большой класс задач, где данные — это отрезки"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[start, end]"}),": встречи, бронирования, отрезки на прямой. Почти все они решаются после одной подготовки — ",e("strong",{children:"сортировки"})," отрезков по началу или по концу, — после чего достаточно одного прохода."]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Задача: Meeting Rooms II (LeetCode 253)"}),n("p",{className:"mt-2",children:["Дан список встреч, каждая — отрезок времени"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[start, end)"}),". Сколько минимум переговорок нужно, чтобы провести их все, не пересекая две встречи в одной комнате?"]}),n("p",{className:"mt-2",children:["Ключ к задаче: минимальное число комнат равно"," ",e("strong",{children:"максимальному числу встреч, идущих одновременно"})," — то есть «пику загруженности» на временной оси."]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Метод развёртки / метод точек (sweep line)"}),e("p",{className:"mt-2",children:"Именно его показывает демо рядом:"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:["Каждый отрезок разбиваем на два ",e("strong",{children:"события"}),":"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"+1"})," в точке начала и"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"−1"})," в точке конца."]}),n("li",{children:["Все события ",e("strong",{children:"сортируем по времени"})," и идём слева направо, поддерживая счётчик активных встреч."]}),n("li",{children:[e("strong",{children:"Максимум"})," этого счётчика за весь проход и есть ответ."]}),n("li",{children:["Тонкость стыков: при равном времени «конец» обрабатываем раньше «начала», иначе встреча"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[0,10]"})," ложно «пересечётся» с ",e("code",{className:"rounded bg-slate-800 px-1",children:"[10,20]"}),"."]})]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Другие способы той же задачи"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:[e("strong",{children:"Куча (min-heap):"})," сортируем встречи по началу и держим в куче времена окончания занятых комнат. Перед каждой новой встречей выкидываем из кучи все комнаты, что уже освободились; размер кучи — текущее число комнат, а её максимум — ответ."]}),n("li",{children:[e("strong",{children:"Два массива:"})," отдельно сортируем все начала и все концы, затем двумя указателями шагаем по ним — это та же развёртка, записанная иначе."]})]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Метод слияния (merge)"}),n("p",{className:"mt-2",children:["Второй режим демо (переключатель сверху) — задача «Merge Intervals» (LeetCode 56): отрезки сортируют по началу и идут по списку,"," ",e("strong",{children:"сливая"})," каждый следующий с предыдущим, если они перекрываются или касаются (",e("code",{className:"rounded bg-slate-800 px-1",children:"next.start ≤ cur.end"}),"), расширяя конец. Так из множества пересекающихся отрезков получают непрерывные «острова»."]}),n("p",{className:"mt-2",children:["Обрати внимание на разницу со стыками: в Meeting Rooms касание"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[0,10]"})," и"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[10,20]"})," —"," ",e("strong",{children:"не"})," пересечение (условие строгое), а в Merge —"," ",e("strong",{children:"сливается"})," (условие нестрогое). Тот же шаблон лежит в основе «Insert Interval» и «Interval List Intersections»."]})]}),n("div",{children:[e("h3",{className:"font-semibold text-white",children:"Сложность"}),n("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[n("li",{children:["Время —"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n·log n)"})," на сортировку событий; сам проход линейный."]}),n("li",{children:["Память — ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"})," на события (или на кучу)."]})]})]})]})}const V=`// Чистый алгоритм без обвязки для пошаговой визуализации — ровно то, что
// писали бы на собеседовании или в проде. Рядом лежит intervals.ts: это
// тот же алгоритм, но дополнительно складывающий каждый шаг в массив, чтобы
// плеер мог его прокрутить. Здесь — только суть.

export type Interval = [start: number, end: number];

/**
 * Meeting Rooms II (LeetCode 253) — метод точек (он же развёртка / sweep line).
 * Минимум переговорок = максимальное число встреч, идущих одновременно.
 *
 * Каждую встречу разбиваем на две точки на оси времени: +1 в начале и −1
 * в конце. Сортируем все точки по времени и идём слева направо, держа
 * текущий счётчик занятых комнат; его максимум за проход и есть ответ.
 *
 * Время O(n·log n) на сортировку, память O(n).
 */
export function minMeetingRooms(intervals: Interval[]): number {
  // Точка = [время, дельта]: +1 — встреча началась, −1 — закончилась.
  const points: [time: number, delta: number][] = [];
  for (const [start, end] of intervals) {
    points.push([start, 1]);
    points.push([end, -1]);
  }

  // Сортируем по времени; при равном времени −1 (конец) идёт раньше +1
  // (начала), иначе встреча [0,10] ложно «пересечётся» с [10,20].
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let currentRooms = 0;
  let maxRooms = 0;

  for (const [, delta] of points) {
    currentRooms += delta;
    maxRooms = Math.max(maxRooms, currentRooms);
  }

  return maxRooms;
}

/**
 * Merge Intervals (LeetCode 56) — соседний приём «слияния».
 * Сортируем по началу и склеиваем каждый следующий отрезок с предыдущим,
 * пока они перекрываются. Возвращает непрерывные «острова».
 *
 * Время O(n·log n), память O(n).
 */
export function mergeIntervals(intervals: Interval[]): Interval[] {
  if (intervals.length === 0) return [];

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const merged: Interval[] = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const last = merged[merged.length - 1];

    if (start <= last[1]) {
      // Перекрытие — расширяем конец последнего «острова».
      last[1] = Math.max(last[1], end);
    } else {
      // Разрыв — начинаем новый остров.
      merged.push([start, end]);
    }
  }

  return merged;
}
`,B=`// Работа с интервалами на задаче LeetCode 253 — «Meeting Rooms II».
//
// ВАЖНО: чистый, «боевой» вариант алгоритма лежит в solution.ts — читать
// лучше с него. Этот файл намеренно «шумный»: он складывает КАЖДЫЙ шаг
// развёртки в массив, чтобы пошаговый плеер мог его прокрутить вперёд/назад.
//
// Дано: список встреч, каждая задана отрезком [start, end). Нужно понять,
// какое МИНИМАЛЬНОЕ число переговорок необходимо, чтобы провести их все.
//
// Ключевое наблюдение: минимум комнат равен МАКСИМАЛЬНОМУ числу встреч,
// которые пересекаются в один и тот же момент времени. То есть задача
// сводится к поиску «пика загруженности».
//
// Наивно: для каждого момента считать, сколько встреч его накрывают —
// дорого. Приём «развёртка событий» (sweep line) решает за O(n·log n):
// каждый отрезок превращаем в два события — +1 в точке начала и −1 в точке
// конца, сортируем все события по времени и идём слева направо, держа
// счётчик активных встреч. Максимум этого счётчика и есть ответ.
//
// Тонкость стыковки: встреча [10, 20] и встреча [0, 10] НЕ пересекаются —
// одна заканчивается ровно тогда, когда вторая начинается. Поэтому при
// равном времени событие «конец» (−1) обрабатываем раньше, чем «начало» (+1).

/** Одна встреча: полуинтервал [start, end). \`id\` — для подсветки в UI. */
export interface Interval {
  id: number;
  start: number;
  end: number;
}

/** Точечное событие развёртки: +1 в начале встречи, −1 в её конце. */
export interface SweepEvent {
  /** Момент времени, в котором происходит событие. */
  time: number;
  /** +1 — открылась встреча, −1 — закрылась. */
  delta: 1 | -1;
  /** id встречи, породившей событие. */
  intervalId: number;
  /** Это «начало» или «конец» отрезка. */
  edge: "start" | "end";
}

/**
 * Один «снимок» состояния алгоритма — всё, что нужно UI для отрисовки кадра.
 * Логика отделена от отображения: трейсер возвращает массив шагов, а плеер
 * просто листает их вперёд/назад.
 */
export interface IntervalStep {
  /** Индекс события, которое только что обработали (−1 — стартовый кадр). */
  eventIndex: number;
  /** Позиция «линии развёртки» на временной оси. */
  time: number;
  /** Что произошло на этом шаге: открытие (+1), закрытие (−1) или старт (0). */
  delta: 1 | -1 | 0;
  /** Сколько встреч активно ПОСЛЕ обработки события (текущая загрузка). */
  active: number;
  /** Бегущий максимум загрузки — это и есть искомое число комнат. */
  maxActive: number;
  /** id активных в данный момент встреч (для подсветки баров). */
  activeIds: number[];
  /** id встречи, чьё событие обработали (для акцента). */
  intervalId: number | null;
  /** Сработала граница начала или конца. */
  edge: "start" | "end" | null;
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном кадре, когда все события разобраны. */
  done: boolean;
}

/** Подпись встречи буквой: 0 → "A", 1 → "B" … (для текста пояснений). */
export function intervalLabel(id: number): string {
  return String.fromCharCode(65 + id);
}

/**
 * Превращает список встреч в отсортированный поток событий развёртки.
 * Вынесено отдельно, чтобы визуализация могла показать «ленту событий».
 */
export function buildEvents(intervals: Interval[]): SweepEvent[] {
  const events: SweepEvent[] = [];
  for (const it of intervals) {
    events.push({ time: it.start, delta: 1, intervalId: it.id, edge: "start" });
    events.push({ time: it.end, delta: -1, intervalId: it.id, edge: "end" });
  }
  // Сортируем по времени; при равенстве «конец» (delta = −1) идёт раньше
  // «начала» (delta = +1), иначе встык стоящие встречи ложно «пересекутся».
  events.sort((a, b) => a.time - b.time || a.delta - b.delta);
  return events;
}

/**
 * Прогоняет алгоритм развёртки и возвращает ПОЛНУЮ историю его шагов.
 * Это «ядро» приёма: чистая функция без React и сайд-эффектов —
 * её легко протестировать и переиспользовать.
 */
export function minMeetingRooms(intervals: Interval[]): IntervalStep[] {
  const steps: IntervalStep[] = [];
  const events = buildEvents(intervals);

  if (events.length === 0) {
    steps.push({
      eventIndex: -1,
      time: 0,
      delta: 0,
      active: 0,
      maxActive: 0,
      activeIds: [],
      intervalId: null,
      edge: null,
      description: "Встреч нет — комнат не нужно.",
      done: true,
    });
    return steps;
  }

  // Стартовый кадр: линия развёртки слева, никто ещё не активен.
  steps.push({
    eventIndex: -1,
    time: events[0].time,
    delta: 0,
    active: 0,
    maxActive: 0,
    activeIds: [],
    intervalId: null,
    edge: null,
    description:
      \`Разбили \${intervals.length} встреч(и) на \${events.length} событий \` +
      "(начало +1, конец −1) и отсортировали по времени. " +
      "Ведём линию слева направо и считаем активные встречи.",
    done: false,
  });

  const active = new Set<number>();
  let maxActive = 0;

  events.forEach((event, i) => {
    const label = intervalLabel(event.intervalId);

    if (event.delta === 1) {
      active.add(event.intervalId);
    } else {
      active.delete(event.intervalId);
    }

    const activeNow = active.size;
    const isNewPeak = event.delta === 1 && activeNow > maxActive;
    maxActive = Math.max(maxActive, activeNow);

    let description: string;
    if (event.delta === 1) {
      description =
        \`t = \${event.time}: началась встреча \${label}. Активных стало \${activeNow}.\`;
      if (isNewPeak) {
        description += \` Это новый пик — нужно уже \${maxActive} комнат(ы).\`;
      }
    } else {
      description =
        \`t = \${event.time}: закончилась встреча \${label}. Освободилась комната, активных \${activeNow}.\`;
    }

    const done = i === events.length - 1;
    if (done) {
      description += \` Все события разобраны — ответ: \${maxActive} комнат(ы).\`;
    }

    steps.push({
      eventIndex: i,
      time: event.time,
      delta: event.delta,
      active: activeNow,
      maxActive,
      activeIds: [...active].sort((a, b) => a - b),
      intervalId: event.intervalId,
      edge: event.edge,
      description,
      done,
    });
  });

  return steps;
}
`,F=`// Merge Intervals (LeetCode 56) — приём «слияния».
//
// Дано: список отрезков. Нужно склеить все перекрывающиеся в непрерывные
// «острова» и вернуть их. Например, [1,3],[2,6],[8,10],[15,18] → [1,6],[8,10],[15,18].
//
// Идея: сортируем отрезки по НАЧАЛУ и идём слева направо, держа «последний
// собранный остров». Если очередной отрезок начинается не позже конца острова
// (start ≤ end) — они пересекаются (или касаются), и мы просто РАСШИРЯЕМ конец
// острова. Иначе между ними разрыв — начинаем новый остров.
//
// Отличие от Meeting Rooms: здесь касание (end === start) СЧИТАЕТСЯ слиянием
// (отрезки замкнутые), поэтому условие нестрогое: start ≤ end.
//
// Чистый вариант — в solution.ts (\`mergeIntervals\`). Здесь алгоритм
// дополнительно складывает каждый шаг в массив для пошагового плеера.

import type { Interval } from "./intervals";
import { intervalLabel } from "./intervals";

/** Один собранный «остров»: его границы и id впитанных в него встреч. */
export interface MergedIsland {
  start: number;
  end: number;
  /** id исходных отрезков, слитых в этот остров (для подсветки). */
  sourceIds: number[];
}

/** Один «снимок» состояния слияния — всё, что нужно UI для отрисовки кадра. */
export interface MergeStep {
  /** Индекс текущего отрезка в порядке сортировки (−1 — стартовый кадр). */
  cursor: number;
  /** id отрезка, который рассматриваем (для акцента). */
  intervalId: number | null;
  /** Снимок уже собранных островов. */
  merged: MergedIsland[];
  /** Что сделали на шаге: расширили остров или начали новый. */
  action: "init" | "extend" | "push";
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном кадре. */
  done: boolean;
}

/**
 * Прогоняет слияние и возвращает ПОЛНУЮ историю шагов.
 * Чистая функция без React: трейсер для плеера.
 */
export function mergeIntervalsTrace(intervals: Interval[]): MergeStep[] {
  const steps: MergeStep[] = [];

  if (intervals.length === 0) {
    steps.push({
      cursor: -1,
      intervalId: null,
      merged: [],
      action: "init",
      description: "Отрезков нет — сливать нечего.",
      done: true,
    });
    return steps;
  }

  // Сортируем по началу — это вся подготовка, которая нужна приёму.
  const sorted = [...intervals].sort((a, b) => a.start - b.start);

  steps.push({
    cursor: -1,
    intervalId: null,
    merged: [],
    action: "init",
    description:
      "Отсортировали отрезки по началу. Идём слева направо и склеиваем " +
      "каждый следующий с последним островом, пока они перекрываются.",
    done: false,
  });

  const merged: MergedIsland[] = [];

  sorted.forEach((cur, i) => {
    const label = intervalLabel(cur.id);
    const last = merged[merged.length - 1];
    const done = i === sorted.length - 1;

    let action: "extend" | "push";
    let description: string;

    if (last && cur.start <= last.end) {
      // Перекрытие или касание — расширяем конец последнего острова.
      const grew = cur.end > last.end;
      last.end = Math.max(last.end, cur.end);
      last.sourceIds.push(cur.id);
      action = "extend";
      description = grew
        ? \`\${label} [\${cur.start}, \${cur.end}] перекрывает остров — расширяем его конец до \${last.end}.\`
        : \`\${label} [\${cur.start}, \${cur.end}] целиком внутри острова — он не меняется.\`;
    } else {
      // Разрыв — начинаем новый остров.
      merged.push({ start: cur.start, end: cur.end, sourceIds: [cur.id] });
      action = "push";
      description = last
        ? \`\${label} [\${cur.start}, \${cur.end}] начинается после конца острова (\${last.end}) — это новый остров.\`
        : \`\${label} [\${cur.start}, \${cur.end}] — первый остров.\`;
    }

    if (done) {
      description += \` Готово: \${merged.length} остров(а/ов).\`;
    }

    steps.push({
      cursor: i,
      intervalId: cur.id,
      // Глубокая копия островов, иначе все кадры будут ссылаться на один объект.
      merged: merged.map((isl) => ({ ...isl, sourceIds: [...isl.sourceIds] })),
      action,
      description,
      done,
    });
  });

  return steps;
}

/** Порядок отрезков после сортировки по началу (для отрисовки верхней ленты). */
export function sortByStart(intervals: Interval[]): Interval[] {
  return [...intervals].sort((a, b) => a.start - b.start);
}
`,J=`import { motion } from "framer-motion";
import type { Interval, IntervalStep } from "./intervals";
import { intervalLabel } from "./intervals";

/**
 * Чистая отрисовка ОДНОГО кадра развёртки. Никакой логики — только текущий
 * шаг (\`step\`) превращается в картинку: временная шкала с барами встреч,
 * вертикальная «линия развёртки» (Framer Motion плавно ведёт её по времени)
 * и счётчики текущей загрузки и пика (= минимум комнат).
 */
export function IntervalsVisualizer({
  intervals,
  step,
}: {
  intervals: Interval[];
  step: IntervalStep;
}) {
  // Временная ось: от самого раннего начала до самого позднего конца.
  const minT = Math.min(...intervals.map((it) => it.start));
  const maxT = Math.max(...intervals.map((it) => it.end));
  const span = Math.max(1, maxT - minT);

  // Перевод момента времени в проценты ширины шкалы.
  const pct = (t: number) => ((t - minT) / span) * 100;

  const activeSet = new Set(step.activeIds);

  return (
    <div className="space-y-6">
      {/* Счётчики: текущая загрузка и пик (ответ). */}
      <div className="flex flex-wrap gap-3">
        <Counter label="Активно сейчас" value={step.active} tone="sky" />
        <Counter
          label="Пик = нужно комнат"
          value={step.maxActive}
          tone="emerald"
          big
        />
      </div>

      {/* Шкала с барами и линией развёртки. */}
      <div className="relative overflow-x-auto">
        <div className="relative min-w-[480px] py-2">
          {/* Линия развёртки. */}
          <motion.div
            className="absolute top-0 bottom-6 z-10 w-0.5 bg-amber-400"
            style={{ left: \`\${pct(step.time)}%\` }}
            animate={{ left: \`\${pct(step.time)}%\` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <span className="absolute -top-1 left-1 whitespace-nowrap rounded bg-amber-400 px-1.5 text-[10px] font-bold text-slate-900">
              t = {step.time}
            </span>
          </motion.div>

          {/* По бару на каждую встречу. */}
          <div className="space-y-2">
            {intervals.map((it) => {
              const isActive = activeSet.has(it.id);
              const isTriggered = it.id === step.intervalId;
              const finished = step.time >= it.end && !isActive;

              return (
                <div key={it.id} className="relative h-9">
                  {/* Фоновая дорожка. */}
                  <div className="absolute inset-0 rounded bg-slate-900" />
                  <motion.div
                    className={[
                      "absolute top-0 flex h-9 items-center justify-center rounded border text-xs font-semibold",
                      isActive
                        ? "border-sky-400 bg-sky-500/25 text-white"
                        : finished
                          ? "border-slate-800 bg-slate-800/40 text-slate-600"
                          : "border-slate-700 bg-slate-800 text-slate-300",
                      isTriggered ? "ring-2 ring-amber-400" : "",
                    ].join(" ")}
                    style={{
                      left: \`\${pct(it.start)}%\`,
                      width: \`\${pct(it.end) - pct(it.start)}%\`,
                    }}
                    animate={isTriggered ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {intervalLabel(it.id)} [{it.start}, {it.end})
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Подписи краёв оси. */}
          <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-600">
            <span>{minT}</span>
            <span>{maxT}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Маленькое табло-счётчик. */
function Counter({
  label,
  value,
  tone,
  big = false,
}: {
  label: string;
  value: number;
  tone: "sky" | "emerald";
  big?: boolean;
}) {
  const tones = {
    sky: "border-sky-700 bg-sky-950/40 text-sky-300",
    emerald: "border-emerald-600 bg-emerald-950/40 text-emerald-300",
  };
  return (
    <div
      className={[
        "rounded-lg border px-4 py-2",
        tones[tone],
        big ? "min-w-[10rem]" : "",
      ].join(" ")}
    >
      <p className="text-[10px] uppercase tracking-wider opacity-70">{label}</p>
      <p
        className={[
          "font-mono font-bold tabular-nums",
          big ? "text-2xl text-white" : "text-xl",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}
`,U=`import { motion } from "framer-motion";
import type { Interval } from "./intervals";
import { intervalLabel } from "./intervals";
import type { MergeStep } from "./merge";
import { sortByStart } from "./merge";

/**
 * Чистая отрисовка ОДНОГО кадра слияния. Сверху — входные отрезки,
 * отсортированные по началу (бегунок подсвечивает текущий), снизу на той же
 * временной шкале растут «острова». Framer Motion плавно тянет границы
 * последнего острова, когда он впитывает очередной отрезок.
 */
export function MergeVisualizer({
  intervals,
  step,
}: {
  intervals: Interval[];
  step: MergeStep;
}) {
  const sorted = sortByStart(intervals);

  // Общая временная ось для обеих лент.
  const minT = Math.min(...intervals.map((it) => it.start));
  const maxT = Math.max(...intervals.map((it) => it.end));
  const span = Math.max(1, maxT - minT);
  const pct = (t: number) => ((t - minT) / span) * 100;

  // id отрезков, уже впитанных в острова (для приглушения «обработанных»).
  const consumed = new Set(step.merged.flatMap((isl) => isl.sourceIds));
  const lastIslandIndex = step.merged.length - 1;

  return (
    <div className="space-y-6">
      {/* Вход: отрезки в порядке сортировки по началу. */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
          отрезки, отсортированные по началу
        </p>
        <div className="relative overflow-x-auto">
          <div className="relative min-w-[480px] space-y-2 py-1">
            {sorted.map((it) => {
              const isCurrent = it.id === step.intervalId;
              const isConsumed = consumed.has(it.id) && !isCurrent;

              return (
                <div key={it.id} className="relative h-9">
                  <div className="absolute inset-0 rounded bg-slate-900" />
                  <motion.div
                    className={[
                      "absolute top-0 flex h-9 items-center justify-center rounded border text-xs font-semibold",
                      isCurrent
                        ? "border-amber-400 bg-amber-500/25 text-white ring-2 ring-amber-400"
                        : isConsumed
                          ? "border-slate-800 bg-slate-800/40 text-slate-600"
                          : "border-slate-700 bg-slate-800 text-slate-300",
                    ].join(" ")}
                    style={{
                      left: \`\${pct(it.start)}%\`,
                      width: \`\${pct(it.end) - pct(it.start)}%\`,
                    }}
                    animate={isCurrent ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {intervalLabel(it.id)} [{it.start}, {it.end}]
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Результат: собранные острова. */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
          результат — слитые острова
        </p>
        <div className="relative overflow-x-auto">
          <div className="relative min-w-[480px] py-1">
            {/* Одна общая дорожка-ось. */}
            <div className="relative h-9">
              <div className="absolute inset-0 rounded bg-slate-900" />
              {step.merged.map((isl, idx) => {
                const isLast = idx === lastIslandIndex;
                return (
                  <motion.div
                    key={idx}
                    layout
                    className={[
                      "absolute top-0 flex h-9 items-center justify-center rounded border text-xs font-semibold",
                      isLast
                        ? "border-emerald-400 bg-emerald-500/25 text-white"
                        : "border-emerald-700 bg-emerald-900/40 text-emerald-200",
                    ].join(" ")}
                    style={{
                      left: \`\${pct(isl.start)}%\`,
                      width: \`\${pct(isl.end) - pct(isl.start)}%\`,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  >
                    [{isl.start}, {isl.end}]
                  </motion.div>
                );
              })}
            </div>

            {/* Подписи краёв оси. */}
            <div className="mt-1 flex justify-between font-mono text-[10px] text-slate-600">
              <span>{minT}</span>
              <span>{maxT}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`,Y=`import { useEffect, useMemo, useState } from "react";
import { minMeetingRooms, type Interval } from "./intervals";
import { mergeIntervalsTrace } from "./merge";
import { IntervalsVisualizer } from "./IntervalsVisualizer";
import { MergeVisualizer } from "./MergeVisualizer";

// Два режима: считаем переговорки (метод точек) и сливаем отрезки (merge).
type Mode = "rooms" | "merge";

// У каждого режима свои наборы данных — у пары [start, end].
const PRESETS: Record<
  Mode,
  { label: string; intervals: [number, number][] }[]
> = {
  rooms: [
    { label: "Классика (3 комнаты)", intervals: [[0, 30], [5, 10], [10, 20], [15, 25], [16, 40]] },
    { label: "Встык — не пересекаются", intervals: [[0, 10], [10, 20], [20, 30]] },
    { label: "Всё внахлёст (4)", intervals: [[1, 8], [2, 9], [3, 7], [4, 6]] },
    { label: "Две комнаты", intervals: [[0, 5], [3, 9], [6, 12]] },
  ],
  merge: [
    { label: "Классика (LC 56)", intervals: [[1, 3], [2, 6], [8, 10], [15, 18]] },
    { label: "Касание сливается", intervals: [[1, 4], [4, 5]] },
    { label: "Один поглощает всех", intervals: [[1, 20], [3, 5], [7, 9], [12, 15]] },
    { label: "Без пересечений", intervals: [[1, 2], [4, 6], [8, 10]] },
  ],
};

const MODE_LABEL: Record<Mode, string> = {
  rooms: "Meeting Rooms · метод точек",
  merge: "Merge Intervals · слияние",
};

const PLAY_INTERVAL = 900;

// Превращает пары [start, end] в объекты Interval с устойчивыми id.
const toIntervals = (pairs: [number, number][]): Interval[] =>
  pairs.map(([start, end], id) => ({ id, start, end }));

export function Demo() {
  const [mode, setMode] = useState<Mode>("rooms");
  const [pairs, setPairs] = useState<[number, number][]>(
    PRESETS.rooms[0].intervals,
  );
  const [draft, setDraft] = useState(
    PRESETS.rooms[0].intervals.map((p) => p.join("-")).join(", "),
  );
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const intervals = useMemo(() => toIntervals(pairs), [pairs]);
  // История шагов своя для каждого режима; считается один раз на набор.
  const steps = useMemo(
    () =>
      mode === "rooms"
        ? minMeetingRooms(intervals)
        : mergeIntervalsTrace(intervals),
    [mode, intervals],
  );
  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const atEnd = stepIndex >= steps.length - 1;

  // Автопроигрывание: пока playing и не дошли до конца — листаем дальше.
  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), PLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const load = (next: [number, number][]) => {
    setPairs(next);
    setDraft(next.map((p) => p.join("-")).join(", "));
    setStepIndex(0);
    setPlaying(false);
  };

  // Переключение режима сбрасывает данные на первый пресет этого режима.
  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
    load(PRESETS[next][0].intervals);
  };

  // Свой ввод: пары вида "0-30, 5-10". Берём только корректные start < end.
  const applyDraft = () => {
    const parsed = draft
      .split(",")
      .map((chunk) => chunk.trim().split(/[\\s-]+/).map(Number))
      .filter(
        ([a, b]) =>
          a !== undefined &&
          b !== undefined &&
          Number.isFinite(a) &&
          Number.isFinite(b) &&
          a < b,
      )
      .map(([a, b]) => [a, b] as [number, number]);
    if (parsed.length > 0) load(parsed);
  };

  return (
    <div className="space-y-6">
      {/* Тумблер режима. */}
      <div className="inline-flex rounded-lg border border-slate-700 p-1">
        {(Object.keys(MODE_LABEL) as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={[
              "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
              mode === m
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {MODE_LABEL[m]}
          </button>
        ))}
      </div>

      {/* Выбор примера. */}
      <div className="flex flex-wrap gap-2">
        {PRESETS[mode].map((preset) => {
          const isCurrent =
            JSON.stringify(preset.intervals) === JSON.stringify(pairs);
          return (
            <button
              key={preset.label}
              onClick={() => load(preset.intervals)}
              className={[
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                isCurrent
                  ? "border-indigo-500 bg-indigo-600 text-white"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
              ].join(" ")}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Свои встречи. */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="отрезки: 1-3, 2-6, 8-10"
          className="w-72 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"
        />
        <button
          onClick={applyDraft}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
        >
          Применить
        </button>
        <span className="text-xs text-slate-500">
          пары «начало-конец» через запятую
        </span>
      </div>

      {/* Сама визуализация текущего шага — своя для каждого режима. */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        {mode === "rooms" ? (
          <IntervalsVisualizer
            intervals={intervals}
            step={step as ReturnType<typeof minMeetingRooms>[number]}
          />
        ) : (
          <MergeVisualizer
            intervals={intervals}
            step={step as ReturnType<typeof mergeIntervalsTrace>[number]}
          />
        )}
      </div>

      {/* Пояснение шага. */}
      <p className="min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
        {step.description}
      </p>

      {/* Управление плеером. */}
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
          шаг {stepIndex + 1} / {steps.length}
        </span>
      </div>

      {/* Перемотка по шагам. */}
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
`,H={meta:{id:"intervals",title:"Интервалы",category:"algorithmic",summary:"Сортируем отрезки и проходим за один раз: метод точек (минимум переговорок) и слияние перекрытий в острова."},Demo:D,Explanation:O,code:[{filename:"solution.ts",language:"typescript",source:V},{filename:"intervals.ts",language:"typescript",source:B},{filename:"merge.ts",language:"typescript",source:F},{filename:"IntervalsVisualizer.tsx",language:"tsx",source:J},{filename:"MergeVisualizer.tsx",language:"tsx",source:U},{filename:"Demo.tsx",language:"tsx",source:Y}]};export{H as default};
