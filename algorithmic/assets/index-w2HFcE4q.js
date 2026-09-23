import{m as u}from"./proxy-CG6_1RCV.js";import{a,_ as e,b as w}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m,d as x,e as T}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react__loadShare__.js-C3muBDPt.js";function S(l){const s=[],r=[],o=new Set;if(s.push({pos:null,stack:[],removed:[],action:"init",description:l.length===0?"Строка пустая — удалять нечего.":"Идём по строке слева направо. Стек хранит индексы открытых «(», ждущих свою «)».",result:l.length===0?"":null,done:l.length===0}),l.length===0)return s;for(let n=0;n<l.length;n++){const c=l[n];if(c==="(")r.push(n),s.push({pos:n,stack:[...r],removed:[...o],action:"push",description:`[${n}] «(» — кладём индекс ${n} на стек, ждём для неё «)».`,result:null,done:!1});else if(c===")")if(r.length>0){const d=r.pop();s.push({pos:n,stack:[...r],removed:[...o],action:"pop",description:`[${n}] «)» — на стеке есть открытая (индекс ${d}). Пара нашлась, снимаем её с вершины.`,result:null,done:!1})}else o.add(n),s.push({pos:n,stack:[...r],removed:[...o],action:"mark",description:`[${n}] «)» — стек пуст, закрывать нечего. Эта «)» лишняя — помечаем индекс ${n} на удаление.`,result:null,done:!1});else s.push({pos:n,stack:[...r],removed:[...o],action:"skip",description:`[${n}] «${c}» — буква, на баланс скобок не влияет. Идём дальше.`,result:null,done:!1})}if(r.length>0){for(const n of r)o.add(n);s.push({pos:null,stack:[],removed:[...o],action:"sweep",description:`Конец строки, но на стеке остались открытые без пары: ${r.join(", ")}. Все они лишние — на удаление.`,result:null,done:!1})}let t="";for(let n=0;n<l.length;n++)o.has(n)||(t+=l[n]);return s.push({pos:null,stack:[],removed:[...o],action:"final",description:o.size===0?`Удалять нечего — строка уже валидна. Результат: «${t}».`:`Собираем строку, пропуская помеченные индексы (${o.size} шт.). Результат: «${t}».`,result:t,done:!0}),s}const P="flex h-12 w-10 shrink-0 items-center justify-center rounded-md border text-base font-semibold";function E({s:l,step:s}){const r=new Set(s.stack),o=new Set(s.removed);return a("div",{className:"space-y-6",children:[e("div",{className:"overflow-x-auto",children:e("div",{className:"flex gap-1.5",children:Array.from(l).map((t,n)=>{const c=n===s.pos,d=r.has(n),p=o.has(n);let i="border-slate-700 bg-slate-800 text-slate-200";return p?i="border-rose-500/60 bg-rose-950/40 text-rose-400 line-through":c?i="border-amber-400 bg-amber-500/25 text-white":d&&(i="border-sky-500 bg-sky-500/15 text-sky-200"),a("div",{className:"flex flex-col items-center",children:[e(u.div,{className:[P,i].join(" "),animate:c?{scale:[1,1.15,1]}:{scale:1},transition:{duration:.3},children:t===" "?"␣":t}),e("span",{className:"mt-1 text-[10px] text-slate-600",children:n})]},n)})})}),a("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"Стек — индексы открытых «(» без пары"}),e("div",{className:"flex min-h-[3.25rem] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 p-3",children:s.stack.length===0?e("span",{className:"text-sm text-slate-600",children:"пусто"}):s.stack.map((t,n)=>a(u.div,{layout:!0,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.25},className:"flex flex-col items-center",children:[e("div",{className:"flex h-10 w-10 items-center justify-center rounded-md border border-sky-500 bg-sky-500/15 font-mono text-sm font-bold text-sky-200",children:t}),n===s.stack.length-1&&e("span",{className:"mt-1 text-[10px] text-sky-400",children:"вершина"})]},t))})]}),s.result!==null&&a("div",{className:"flex flex-wrap items-center gap-2 text-sm",children:[e("span",{className:"text-slate-500",children:"результат ="}),e("span",{className:"rounded-md border border-emerald-500 bg-emerald-500/15 px-3 py-1 font-mono font-bold text-white",children:s.result===""?"«пусто»":s.result})]})]})}function $(l){const s=[],r=l.length,o=new Array(r).fill(null),t=[];if(s.push({pos:null,stack:[],answer:[...o],resolved:null,action:"init",description:r===0?"Массив пуст — считать нечего.":"Идём по дням слева направо. На стеке — индексы дней, что ещё ждут потепления; их температуры убывают от дна к вершине.",done:r===0}),r===0)return s;for(let n=0;n<r;n++){for(;t.length>0&&l[n]>l[t[t.length-1]];){const d=t.pop();o[d]=n-d,s.push({pos:n,stack:[...t],answer:[...o],resolved:d,action:"resolve",description:`День ${n} (${l[n]}°) теплее дня ${d} (${l[d]}°) на вершине. Для дня ${d} потепление через ${n-d} дн. — снимаем его со стека.`,done:!1})}t.push(n);const c=t.length>1?t[t.length-2]:null;s.push({pos:n,stack:[...t],answer:[...o],resolved:null,action:"push",description:c===null?`Стек пуст — кладём день ${n} (${l[n]}°), он ждёт своего потепления.`:`День ${n} (${l[n]}°) не теплее дня ${c} (${l[c]}°) под ним — кладём ${n} на стек ждать потепления.`,done:!1})}for(let n=0;n<r;n++)o[n]===null&&(o[n]=0);return s.push({pos:null,stack:[...t],answer:[...o],resolved:null,action:"final",description:t.length>0?`Конец. Дни ${t.join(", ")} остались на стеке — потепления впереди нет, у них 0.`:"Конец. Каждый день дождался потепления.",done:!0}),s}const C="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";function L({temps:l,step:s}){const r=new Set(s.stack);return a("div",{className:"space-y-6",children:[a("div",{className:"overflow-x-auto",children:[e("div",{className:"flex gap-2",children:l.map((o,t)=>{const n=t===s.pos,c=r.has(t),d=t===s.resolved;let p="border-slate-700 bg-slate-800 text-slate-200";d?p="border-emerald-400 bg-emerald-500/25 text-white":n?p="border-amber-400 bg-amber-500/25 text-white":c&&(p="border-sky-500 bg-sky-500/15 text-sky-200");const i=s.answer[t];return a("div",{className:"flex flex-col items-center",children:[a(u.div,{className:[C,p].join(" "),animate:n||d?{scale:[1,1.15,1]}:{scale:1},transition:{duration:.3},children:[o,"°"]}),e("span",{className:"mt-1 text-[10px] text-slate-600",children:t}),e("div",{className:"mt-1 flex h-6 items-center",children:e("span",{className:["rounded px-1.5 font-mono text-[11px] font-bold",i===null?"text-slate-600":i===0?"bg-slate-700 text-slate-300":"bg-emerald-600 text-white"].join(" "),children:i===null?"·":i})})]},t)})}),e("p",{className:"mt-1 text-[10px] text-slate-600",children:"снизу — ответ: через сколько дней станет теплее (· ещё не посчитан)"})]}),a("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"Монотонный стек — индексы дней, ждущих потепления"}),e("div",{className:"flex min-h-[3.5rem] items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 p-3",children:s.stack.length===0?e("span",{className:"text-sm text-slate-600",children:"пусто"}):s.stack.map((o,t)=>a(u.div,{layout:!0,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.25},className:"flex flex-col items-center",children:[a("div",{className:"flex h-10 items-center gap-1 rounded-md border border-sky-500 bg-sky-500/15 px-2 font-mono text-xs font-bold text-sky-200",children:[a("span",{className:"text-sky-400",children:["#",o]}),a("span",{children:[l[o],"°"]})]}),t===s.stack.length-1&&e("span",{className:"mt-1 text-[10px] text-sky-400",children:"вершина"})]},o))})]})]})}const _=900,I=[{id:"parens",label:"Скобки · LC 1249"},{id:"temps",label:"Температуры · LC 739"}];function D(){const[l,s]=m("parens");return a("div",{className:"space-y-6",children:[e("div",{className:"inline-flex rounded-lg border border-slate-700 p-1",children:I.map(r=>e("button",{onClick:()=>s(r.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",l===r.id?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:r.label},r.id))}),l==="parens"?e(R,{}):e(A,{})]})}function f(l){const[s,r]=m(0),[o,t]=m(!1),n=s>=l-1;return T(()=>{if(!o)return;if(n){t(!1);return}const d=setTimeout(()=>r(p=>p+1),_);return()=>clearTimeout(d)},[o,n,s]),{stepIndex:s,setStepIndex:r,playing:o,setPlaying:t,atEnd:n,reset:()=>{r(0),t(!1)}}}function g({player:l,stepsLength:s}){const{stepIndex:r,setStepIndex:o,playing:t,setPlaying:n,atEnd:c,reset:d}=l;return a(w,{children:[a("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:d,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{n(!1),o(p=>Math.max(0,p-1))},disabled:r===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>n(p=>!p),disabled:c,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:t?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{n(!1),o(p=>Math.min(s-1,p+1))},disabled:c,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),a("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["шаг ",r+1," / ",s]})]}),e("input",{type:"range",min:0,max:s-1,value:r,onChange:p=>{n(!1),o(Number(p.target.value))},className:"w-full accent-indigo-500"})]})}const y=l=>["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",l?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),v="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500",k="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",h=[{label:"Лишняя «)»",s:"a)b(c)d"},{label:"Лишние «(»",s:"(a(b(c)"},{label:"Скобки по краям",s:"))(("},{label:"Уже валидна",s:"(a(b)c)"}];function R(){const[l,s]=m(h[0].s),[r,o]=m(h[0].s),t=x(()=>S(l),[l]),n=f(t.length),c=t[Math.min(n.stepIndex,t.length-1)],d=i=>{s(i),o(i),n.reset()},p=()=>{r.length>0&&d(r)};return a("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:h.map(i=>e("button",{onClick:()=>d(i.s),className:y(i.s===l),children:i.label},i.label))}),a("div",{className:"flex flex-wrap items-center gap-2",children:[e("input",{value:r,onChange:i=>o(i.target.value),onKeyDown:i=>i.key==="Enter"&&p(),placeholder:"строка из ( ) и букв",className:`w-72 font-mono ${v}`}),e("button",{onClick:p,className:k,children:"Применить"})]}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:e(E,{s:l,step:c})}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:c.description}),e(g,{player:n,stepsLength:t.length})]})}const b=[{label:"Классика LC",temps:[73,74,75,71,69,72,76,73]},{label:"Только теплеет",temps:[30,40,50,60]},{label:"Только холодает",temps:[60,50,40,30]},{label:"Плато и скачок",temps:[55,55,55,80]}];function A(){const[l,s]=m(b[0].temps),[r,o]=m(b[0].temps.join(", ")),t=x(()=>$(l),[l]),n=f(t.length),c=t[Math.min(n.stepIndex,t.length-1)],d=i=>{s(i),o(i.join(", ")),n.reset()},p=()=>{const i=r.split(/[\s,]+/).map(Number).filter(N=>Number.isFinite(N));i.length>0&&d(i)};return a("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:b.map(i=>e("button",{onClick:()=>d(i.temps),className:y(i.temps.join(",")===l.join(",")),children:i.label},i.label))}),a("div",{className:"flex flex-wrap items-center gap-2",children:[e("input",{value:r,onChange:i=>o(i.target.value),onKeyDown:i=>i.key==="Enter"&&p(),placeholder:"температуры через запятую",className:`w-72 ${v}`}),e("button",{onClick:p,className:k,children:"Применить"})]}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:e(L,{temps:l,step:c})}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:c.description}),e(g,{player:n,stepsLength:t.length})]})}function j(){return a("div",{className:"space-y-4 text-slate-300",children:[a("p",{children:[e("strong",{className:"text-white",children:"Стек (Stack)"})," — структура «последним пришёл, первым ушёл» (",e("strong",{children:"LIFO"}),"): кладём и снимаем элементы только с одного конца — вершины. Он незаменим там, где есть"," ",e("strong",{children:"вложенность"})," или нужно помнить «ещё не закрытые» элементы: скобки, теги, вызовы функций, поиск ближайшего большего. В демо — две классические задачи на стек (переключатель сверху)."]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Задача 1: Minimum Remove to Make Valid Parentheses (LeetCode 1249)"}),a("p",{className:"mt-2",children:["Дана строка из ",e("code",{className:"rounded bg-slate-800 px-1",children:"("}),","," ",e("code",{className:"rounded bg-slate-800 px-1",children:")"})," и строчных букв. Нужно удалить ",e("strong",{children:"минимум"})," скобок так, чтобы оставшиеся были корректно сбалансированы, и вернуть любую такую строку."]}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:["На стеке держим"," ",e("strong",{className:"text-sky-400",children:"индексы открытых «(»"})," без пары."]}),a("li",{children:["Встретили ",e("code",{className:"rounded bg-slate-800 px-1",children:"("})," — кладём индекс на стек; встретили"," ",e("code",{className:"rounded bg-slate-800 px-1",children:")"})," — снимаем вершину (пара нашлась) либо, если стек пуст, помечаем эту"," ",e("code",{className:"rounded bg-slate-800 px-1",children:")"})," на удаление."]}),a("li",{children:["После прохода всё, что осталось на стеке, —"," ",e("strong",{className:"text-rose-400",children:"«(» без пары"}),": тоже на удаление. Собираем строку, пропуская помеченные индексы."]})]}),a("p",{className:"mt-2 text-sm text-slate-400",children:["Почему стек: скобки вложены по LIFO — в пару к"," ",e("code",{className:"rounded bg-slate-800 px-1",children:")"})," идёт самая последняя из открытых, ровно та, что на вершине."]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Задача 2: Daily Temperatures (LeetCode 739) — монотонный стек"}),a("p",{className:"mt-2",children:["Дан массив дневных температур. Для каждого дня нужно узнать, через сколько дней станет ",e("strong",{children:"теплее"})," (или"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"0"}),", если потепления впереди нет)."]}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:["На стеке — индексы дней, ",e("strong",{children:"ждущих потепления"}),"; их температуры идут по убыванию от дна к вершине. Такой стек называют"," ",e("strong",{className:"text-white",children:"монотонным"}),"."]}),a("li",{children:["Пришёл день теплее вершины — значит для неё потепление наступило именно сегодня: снимаем день со стека и пишем"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"i − day"}),". Повторяем, пока вершина холоднее текущего дня."]}),e("li",{children:"Затем кладём текущий день на стек — теперь уже он ждёт своего потепления."})]}),a("p",{className:"mt-2 text-sm text-slate-400",children:["Каждый день кладётся и снимается со стека ровно один раз — отсюда"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"})," вместо"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n²)"})," у наивного поиска первого большего справа."]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Подводные камни"}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:[e("strong",{children:"Скобки:"})," не удалять лишние «на лету» — индексы поедут; помечаем позиции и собираем результат одним проходом в конце. И не забыть второй источник лишних — открытые «(», оставшиеся на стеке."]}),a("li",{children:[e("strong",{children:"Монотонный стек:"})," важна строгость сравнения. Здесь"," ",e("code",{className:"rounded bg-slate-800 px-1",children:">"})," (строго теплее) — при равных температурах день остаётся ждать; для других задач знак подбирают под условие."]})]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где ещё применяется приём"}),e("p",{className:"mt-2",children:"Парность и вложенность — Valid Parentheses (LC 20), Generate Parentheses, обратная польская запись (LC 150), Basic Calculator. Монотонный стек — Next Greater Element, Largest Rectangle in Histogram, Trapping Rain Water. Также стек лежит в основе обхода в глубину (DFS) без рекурсии и истории «отмен» (Undo)."})]})]})}const M=`// Минимальное удаление скобок для валидности (LeetCode 1249) — «боевой» вариант.
//
// Дано: строка из «(», «)» и строчных букв. Нужно удалить МИНИМУМ скобок так,
// чтобы оставшиеся были корректно сбалансированы (у каждой «(» своя «)» правее),
// и вернуть любую такую строку.
//
// Идея — классический стек: он хранит ИНДЕКСЫ ещё не закрытых «(». Идём по
// строке слева направо:
//   «(» — кладём её индекс на стек (ждём для неё пару);
//   «)» — если на стеке есть открытая, снимаем её (пара нашлась); иначе закрывать
//         нечего, эта «)» лишняя — помечаем её индекс на удаление.
// После прохода всё, что осталось на стеке, — это «(» без пары: тоже лишние.
// Стек идеально подходит, потому что пары скобок вложены по принципу LIFO:
// закрывается всегда самая последняя из открытых.
//
// Рядом stack.ts — тот же алгоритм, но с записью каждого шага для плеера.

export function minRemoveToMakeValid(s: string): string {
  const open: number[] = []; // стек индексов незакрытых «(»
  const remove = new Set<number>(); // индексы под удаление

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") {
      open.push(i); // ждём закрывающую
    } else if (ch === ")") {
      if (open.length > 0)
        open.pop(); // пара нашлась — снимаем открытую с вершины
      else remove.add(i); // закрывать нечего — лишняя «)»
    }
    // буквы пропускаем — на баланс скобок они не влияют
  }

  // Открытые, что так и не закрылись, — тоже лишние.
  for (const i of open) remove.add(i);

  // Собираем результат, пропуская помеченные индексы.
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!remove.has(i)) result += s[i];
  }
  return result;
}
`,V=`// Минимальное удаление скобок (LeetCode 1249) — тот же приём, что в solution.ts,
// но с записью КАЖДОГО шага для пошагового плеера. Логика отделена от отрисовки:
// трейсер возвращает массив шагов, плеер их листает.
//
// Стек хранит индексы ещё не закрытых «(». Каждый шаг — это «снимок» состояния:
// что сейчас под курсором, что лежит на стеке и какие индексы уже под удаление.

/** Что произошло на шаге — задаёт подсветку и подпись. */
export type StackAction =
  | "init" // старт, ещё ничего не сделали
  | "push" // встретили «(» — положили её индекс на стек
  | "pop" // встретили «)» — нашли пару, сняли «(» с вершины
  | "mark" // встретили лишнюю «)» — пометили на удаление
  | "skip" // буква — скобки не трогаем
  | "sweep" // конец строки — открытые без пары идут на удаление
  | "final"; // собрали результат

/** Один «снимок» состояния разбора — кадр визуализации. */
export interface StackStep {
  /** Сканируемый индекс строки (или \`null\` на init/sweep/финале). */
  pos: number | null;
  /** Индексы «(» на стеке В ЭТОТ момент (вершина — последний элемент). */
  stack: number[];
  /** Индексы, помеченные на удаление к этому шагу. */
  removed: number[];
  /** Тип шага. */
  action: StackAction;
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** Итоговая строка (только на финальном кадре, иначе \`null\`). */
  result: string | null;
  /** \`true\` на финальном кадре. */
  done: boolean;
}

/** Прогоняет алгоритм и возвращает ПОЛНУЮ историю шагов. */
export function minRemoveTrace(s: string): StackStep[] {
  const steps: StackStep[] = [];
  const open: number[] = [];
  const remove = new Set<number>();

  steps.push({
    pos: null,
    stack: [],
    removed: [],
    action: "init",
    description:
      s.length === 0
        ? "Строка пустая — удалять нечего."
        : "Идём по строке слева направо. Стек хранит индексы открытых «(», " +
          "ждущих свою «)».",
    result: s.length === 0 ? "" : null,
    done: s.length === 0,
  });

  if (s.length === 0) return steps;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "(") {
      open.push(i);
      steps.push({
        pos: i,
        stack: [...open],
        removed: [...remove],
        action: "push",
        description: \`[\${i}] «(» — кладём индекс \${i} на стек, ждём для неё «)».\`,
        result: null,
        done: false,
      });
    } else if (ch === ")") {
      if (open.length > 0) {
        const matched = open.pop()!;
        steps.push({
          pos: i,
          stack: [...open],
          removed: [...remove],
          action: "pop",
          description: \`[\${i}] «)» — на стеке есть открытая (индекс \${matched}). Пара нашлась, снимаем её с вершины.\`,
          result: null,
          done: false,
        });
      } else {
        remove.add(i);
        steps.push({
          pos: i,
          stack: [...open],
          removed: [...remove],
          action: "mark",
          description: \`[\${i}] «)» — стек пуст, закрывать нечего. Эта «)» лишняя — помечаем индекс \${i} на удаление.\`,
          result: null,
          done: false,
        });
      }
    } else {
      steps.push({
        pos: i,
        stack: [...open],
        removed: [...remove],
        action: "skip",
        description: \`[\${i}] «\${ch}» — буква, на баланс скобок не влияет. Идём дальше.\`,
        result: null,
        done: false,
      });
    }
  }

  // Подметаем стек: всё, что осталось, — открытые «(» без пары.
  if (open.length > 0) {
    for (const i of open) remove.add(i);
    steps.push({
      pos: null,
      stack: [],
      removed: [...remove],
      action: "sweep",
      description: \`Конец строки, но на стеке остались открытые без пары: \${open.join(", ")}. Все они лишние — на удаление.\`,
      result: null,
      done: false,
    });
  }

  let result = "";
  for (let i = 0; i < s.length; i++) if (!remove.has(i)) result += s[i];

  steps.push({
    pos: null,
    stack: [],
    removed: [...remove],
    action: "final",
    description:
      remove.size === 0
        ? \`Удалять нечего — строка уже валидна. Результат: «\${result}».\`
        : \`Собираем строку, пропуская помеченные индексы (\${remove.size} шт.). Результат: «\${result}».\`,
    result,
    done: true,
  });

  return steps;
}
`,z=`// Daily Temperatures (LeetCode 739) — «боевой» вариант, монотонный стек.
//
// Дано: массив дневных температур. Для каждого дня нужно узнать, через сколько
// дней станет ТЕПЛЕЕ. Если потепления впереди не будет — 0.
//
// Наивно — для каждого дня бежать вправо до первого большего: O(n²). Монотонный
// стек делает это за O(n). На стеке держим ИНДЕКСЫ дней, для которых ответ ещё
// не найден; их температуры идут по УБЫВАНИЮ от дна к вершине (поэтому стек и
// зовётся монотонным). Как только приходит день теплее вершины — он и есть
// искомое потепление для всех более холодных дней, что лежат сверху.
//
// Рядом dailyTemperaturesTrace.ts — тот же алгоритм с записью каждого шага.

export function dailyTemperatures(temps: number[]): number[] {
  const answer = new Array<number>(temps.length).fill(0);
  const stack: number[] = []; // индексы дней, ждущих потепления

  for (let i = 0; i < temps.length; i++) {
    // Текущий день закрывает все более холодные дни с вершины стека.
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const day = stack.pop()!;
      answer[day] = i - day; // через столько дней стало теплее
    }
    stack.push(i); // сам встаёт ждать своего потепления
  }

  // Дни, оставшиеся на стеке, потепления не дождались — у них уже 0.
  return answer;
}
`,O=`// Daily Temperatures (LeetCode 739) — тот же монотонный стек, что в
// dailyTemperatures.ts, но с записью КАЖДОГО шага для пошагового плеера.
// Логика отделена от отрисовки: трейсер возвращает массив шагов, плеер их листает.

/** Что произошло на шаге — задаёт подсветку и подпись. */
export type TempAction =
  | "init" // старт
  | "resolve" // текущий день закрыл более холодный с вершины стека
  | "push" // текущий день встал на стек ждать потепления
  | "final"; // все дни обработаны

/** Один «снимок» состояния — кадр визуализации. */
export interface TempStep {
  /** Сканируемый индекс дня (или \`null\` на init/финале). */
  pos: number | null;
  /** Индексы дней на монотонном стеке (вершина — последний элемент). */
  stack: number[];
  /** Ответы, посчитанные к этому шагу (\`null\` — ещё не известен). */
  answer: (number | null)[];
  /** Индекс дня, который ИМЕННО сейчас закрыли (для вспышки), иначе \`null\`. */
  resolved: number | null;
  /** Тип шага. */
  action: TempAction;
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном кадре. */
  done: boolean;
}

/** Прогоняет алгоритм и возвращает ПОЛНУЮ историю шагов. */
export function dailyTemperaturesTrace(temps: number[]): TempStep[] {
  const steps: TempStep[] = [];
  const n = temps.length;
  const answer: (number | null)[] = new Array(n).fill(null);
  const stack: number[] = [];

  steps.push({
    pos: null,
    stack: [],
    answer: [...answer],
    resolved: null,
    action: "init",
    description:
      n === 0
        ? "Массив пуст — считать нечего."
        : "Идём по дням слева направо. На стеке — индексы дней, что ещё ждут потепления; их температуры убывают от дна к вершине.",
    done: n === 0,
  });

  if (n === 0) return steps;

  for (let i = 0; i < n; i++) {
    // Снимаем все более холодные дни — для них потепление наступило сегодня.
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const day = stack.pop()!;
      answer[day] = i - day;
      steps.push({
        pos: i,
        stack: [...stack],
        answer: [...answer],
        resolved: day,
        action: "resolve",
        description: \`День \${i} (\${temps[i]}°) теплее дня \${day} (\${temps[day]}°) на вершине. Для дня \${day} потепление через \${i - day} дн. — снимаем его со стека.\`,
        done: false,
      });
    }

    stack.push(i);
    const below = stack.length > 1 ? stack[stack.length - 2] : null;
    steps.push({
      pos: i,
      stack: [...stack],
      answer: [...answer],
      resolved: null,
      action: "push",
      description:
        below === null
          ? \`Стек пуст — кладём день \${i} (\${temps[i]}°), он ждёт своего потепления.\`
          : \`День \${i} (\${temps[i]}°) не теплее дня \${below} (\${temps[below]}°) под ним — кладём \${i} на стек ждать потепления.\`,
      done: false,
    });
  }

  // Финал: оставшиеся на стеке дни потепления не дождались — у них 0.
  for (let k = 0; k < n; k++) if (answer[k] === null) answer[k] = 0;
  steps.push({
    pos: null,
    stack: [...stack],
    answer: [...answer],
    resolved: null,
    action: "final",
    description:
      stack.length > 0
        ? \`Конец. Дни \${stack.join(", ")} остались на стеке — потепления впереди нет, у них 0.\`
        : "Конец. Каждый день дождался потепления.",
    done: true,
  });

  return steps;
}
`,B=`import { useEffect, useMemo, useState } from "react";
import { minRemoveTrace } from "./stack";
import { StackVisualizer } from "./StackVisualizer";
import { dailyTemperaturesTrace } from "./dailyTemperaturesTrace";
import { TemperaturesVisualizer } from "./TemperaturesVisualizer";

const PLAY_INTERVAL = 900;

type Task = "parens" | "temps";

const TASKS: { id: Task; label: string }[] = [
  { id: "parens", label: "Скобки · LC 1249" },
  { id: "temps", label: "Температуры · LC 739" },
];

export function Demo() {
  const [task, setTask] = useState<Task>("parens");

  return (
    <div className="space-y-6">
      {/* Переключатель задачи: смена размонтирует под-демо, состояние сбрасывается. */}
      <div className="inline-flex rounded-lg border border-slate-700 p-1">
        {TASKS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTask(t.id)}
            className={[
              "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
              task === t.id
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {task === "parens" ? <ParensDemo /> : <TempsDemo />}
    </div>
  );
}

/** Общая логика плеера: индекс шага, автопроигрывание, сброс. */
function useStepPlayer(stepsLength: number) {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const atEnd = stepIndex >= stepsLength - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), PLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const reset = () => {
    setStepIndex(0);
    setPlaying(false);
  };

  return { stepIndex, setStepIndex, playing, setPlaying, atEnd, reset };
}

/** Кнопки «сброс / назад / авто / вперёд» + счётчик + перемотка. Общие для задач. */
function PlayerControls({
  player,
  stepsLength,
}: {
  player: ReturnType<typeof useStepPlayer>;
  stepsLength: number;
}) {
  const { stepIndex, setStepIndex, playing, setPlaying, atEnd, reset } = player;
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={reset}
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
            setStepIndex((i) => Math.min(stepsLength - 1, i + 1));
          }}
          disabled={atEnd}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40"
        >
          Вперёд ▶
        </button>
        <span className="ml-auto font-mono text-xs text-slate-500">
          шаг {stepIndex + 1} / {stepsLength}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={stepsLength - 1}
        value={stepIndex}
        onChange={(e) => {
          setPlaying(false);
          setStepIndex(Number(e.target.value));
        }}
        className="w-full accent-indigo-500"
      />
    </>
  );
}

const PRESET_BTN = (active: boolean) =>
  [
    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
    active
      ? "border-indigo-500 bg-indigo-600 text-white"
      : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
  ].join(" ");

const INPUT =
  "rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500";

const APPLY_BTN =
  "rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white";

/* ── Задача 1: Minimum Remove to Make Valid Parentheses (LC 1249) ───────── */

const PARENS_PRESETS: { label: string; s: string }[] = [
  { label: "Лишняя «)»", s: "a)b(c)d" },
  { label: "Лишние «(»", s: "(a(b(c)" },
  { label: "Скобки по краям", s: "))((" },
  { label: "Уже валидна", s: "(a(b)c)" },
];

function ParensDemo() {
  const [s, setS] = useState(PARENS_PRESETS[0].s);
  const [draft, setDraft] = useState(PARENS_PRESETS[0].s);

  const steps = useMemo(() => minRemoveTrace(s), [s]);
  const player = useStepPlayer(steps.length);
  const step = steps[Math.min(player.stepIndex, steps.length - 1)];

  const load = (next: string) => {
    setS(next);
    setDraft(next);
    player.reset();
  };
  const applyDraft = () => {
    if (draft.length > 0) load(draft);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {PARENS_PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => load(p.s)}
            className={PRESET_BTN(p.s === s)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="строка из ( ) и букв"
          className={\`w-72 font-mono \${INPUT}\`}
        />
        <button onClick={applyDraft} className={APPLY_BTN}>
          Применить
        </button>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <StackVisualizer s={s} step={step} />
      </div>

      <p className="min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
        {step.description}
      </p>

      <PlayerControls player={player} stepsLength={steps.length} />
    </div>
  );
}

/* ── Задача 2: Daily Temperatures (LC 739), монотонный стек ──────────────── */

const TEMP_PRESETS: { label: string; temps: number[] }[] = [
  { label: "Классика LC", temps: [73, 74, 75, 71, 69, 72, 76, 73] },
  { label: "Только теплеет", temps: [30, 40, 50, 60] },
  { label: "Только холодает", temps: [60, 50, 40, 30] },
  { label: "Плато и скачок", temps: [55, 55, 55, 80] },
];

function TempsDemo() {
  const [temps, setTemps] = useState(TEMP_PRESETS[0].temps);
  const [draft, setDraft] = useState(TEMP_PRESETS[0].temps.join(", "));

  const steps = useMemo(() => dailyTemperaturesTrace(temps), [temps]);
  const player = useStepPlayer(steps.length);
  const step = steps[Math.min(player.stepIndex, steps.length - 1)];

  const load = (next: number[]) => {
    setTemps(next);
    setDraft(next.join(", "));
    player.reset();
  };
  const applyDraft = () => {
    const parsed = draft
      .split(/[\\s,]+/)
      .map(Number)
      .filter((x) => Number.isFinite(x));
    if (parsed.length > 0) load(parsed);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {TEMP_PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => load(p.temps)}
            className={PRESET_BTN(p.temps.join(",") === temps.join(","))}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="температуры через запятую"
          className={\`w-72 \${INPUT}\`}
        />
        <button onClick={applyDraft} className={APPLY_BTN}>
          Применить
        </button>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <TemperaturesVisualizer temps={temps} step={step} />
      </div>

      <p className="min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
        {step.description}
      </p>

      <PlayerControls player={player} stepsLength={steps.length} />
    </div>
  );
}
`,U={meta:{id:"stack",title:"Стек",category:"algorithmic",summary:"LIFO-структура: на стеке решаем парность скобок (минимум удалений, LC 1249) и «следующий тёплый день» через монотонный стек (LC 739) — за один проход O(n)."},Demo:D,Explanation:j,code:[{filename:"solution.ts",language:"typescript",source:M},{filename:"dailyTemperatures.ts",language:"typescript",source:z},{filename:"stack.ts",language:"typescript",source:V},{filename:"dailyTemperaturesTrace.ts",language:"typescript",source:O},{filename:"Demo.tsx",language:"tsx",source:B}]};export{U as default};
