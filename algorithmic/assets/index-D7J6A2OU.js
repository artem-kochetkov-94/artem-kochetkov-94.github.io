import{m as S}from"./proxy-CG6_1RCV.js";import{a,_ as e}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as N,d as $,e as E}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react__loadShare__.js-C3muBDPt.js";function C(l){const c=[],m=[...l],p=m.length,r=t=>({array:[...m],lo:0,mid:0,hi:p,phase:"split",depth:0,left:null,right:null,i:null,j:null,result:null,picked:null,description:"",done:!1,...t});c.push(r({phase:"start",description:p<=1?"Массив из 0–1 элемента уже отсортирован — делать нечего.":`Сортируем ${p} элементов слиянием. Стратегия «разделяй и властвуй»: рекурсивно делим пополам, затем сливаем отсортированные половины.`,done:p<=1}));function u(t,s,i){if(s-t<=1)return;const o=t+s>>1;c.push(r({phase:"split",lo:t,mid:o,hi:s,depth:i,description:`Делим отрезок [${t}, ${s}) пополам: [${t}, ${o}) и [${o}, ${s}).`})),u(t,o,i+1),u(o,s,i+1),g(t,o,s,i)}function g(t,s,i,o){const x=m.slice(t,s),b=m.slice(s,i),n=[];let d=0,h=0;const v=()=>({lo:t,mid:s,hi:i,depth:o,left:[...x],right:[...b]});for(;d<x.length&&h<b.length;){c.push(r({...v(),phase:"compare",i:d,j:h,result:[...n],description:`Сравниваем головы половин: ${x[d]} и ${b[h]}. Меньший уйдёт в результат.`}));const f=x[d]<=b[h],k=f?x[d]:b[h];n.push(k),c.push(r({...v(),phase:"copy",i:d,j:h,result:[...n],picked:f?"left":"right",description:`${k} ${f?"из левой":"из правой"} половины меньше — дописываем его в результат.`})),f?d++:h++}for(;d<x.length;)n.push(x[d]),c.push(r({...v(),phase:"copy",i:d,j:h,result:[...n],picked:"left",description:`Правая половина кончилась — переносим остаток левой: ${x[d]}.`})),d++;for(;h<b.length;)n.push(b[h]),c.push(r({...v(),phase:"copy",i:d,j:h,result:[...n],picked:"right",description:`Левая половина кончилась — переносим остаток правой: ${b[h]}.`})),h++;for(let f=0;f<n.length;f++)m[t+f]=n[f];c.push(r({lo:t,mid:s,hi:i,depth:o,phase:"merged",description:`Слили половины: отрезок [${t}, ${i}) отсортирован → [${n.join(", ")}].`}))}return u(0,p,0),c.push(r({phase:"done",description:`Готово: массив отсортирован за O(n·log n) — [${m.join(", ")}].`,done:!0})),c}const w="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";function M({step:l}){const{array:c,lo:m,hi:p,phase:r}=l,u=l.left!==null&&l.right!==null,g=t=>t>=m&&t<p;return a("div",{className:"space-y-6",children:[e("div",{className:"overflow-x-auto",children:e("div",{className:"flex gap-2",children:c.map((t,s)=>{let i="border-slate-700 bg-slate-800 text-slate-200";return r==="done"?i="border-emerald-400 bg-emerald-500/25 text-white":r==="merged"&&g(s)?i="border-emerald-400 bg-emerald-500/20 text-emerald-100":g(s)?i="border-indigo-500 bg-indigo-500/15 text-white":i="border-slate-800 bg-slate-900 text-slate-500",a("div",{className:"flex flex-col items-center",children:[e(S.div,{layout:!0,className:[w,i].join(" "),animate:r==="merged"&&g(s)||r==="done"?{scale:[1,1.12,1]}:{scale:1},transition:{duration:.3},children:t}),e("span",{className:"mt-1 text-[10px] text-slate-600",children:s})]},s)})})}),u&&a("div",{className:"space-y-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4",children:[e(j,{label:"левая",values:l.left,pointer:l.i,picked:l.picked==="left"?l.i:null,accent:"sky"}),e(j,{label:"правая",values:l.right,pointer:l.j,picked:l.picked==="right"?l.j:null,accent:"rose"}),e("div",{className:"h-px bg-slate-800"}),e(P,{values:l.result??[],justAdded:l.phase==="copy"})]})]})}const L={sky:{ptr:"bg-sky-500",cell:"border-sky-400 bg-sky-500/20 text-white"},rose:{ptr:"bg-rose-500",cell:"border-rose-400 bg-rose-500/20 text-white"}};function j({label:l,values:c,pointer:m,picked:p,accent:r}){const u=L[r];return a("div",{className:"flex items-center gap-3",children:[e("span",{className:"w-14 shrink-0 text-right text-xs text-slate-500",children:l}),e("div",{className:"flex gap-2",children:c.map((g,t)=>{const s=t===m,i=m!==null&&t<m;let o="border-slate-700 bg-slate-800 text-slate-300";return t===p||s?o=u.cell:i&&(o="border-slate-800 bg-slate-900 text-slate-600"),a("div",{className:"flex flex-col items-center",children:[e("div",{className:[w,"h-10 w-10 text-xs",o].join(" "),children:g}),e("div",{className:"mt-1 h-4",children:s&&e("span",{className:["rounded px-1.5 text-[10px] font-bold text-white",u.ptr].join(" "),children:r==="sky"?"i":"j"})})]},t)})})]})}function P({values:l,justAdded:c}){return a("div",{className:"flex items-center gap-3",children:[e("span",{className:"w-14 shrink-0 text-right text-xs text-slate-500",children:"результат"}),a("div",{className:"flex min-h-[2.5rem] gap-2",children:[l.length===0&&e("span",{className:"self-center text-xs text-slate-600",children:"пусто"}),l.map((m,p)=>{const r=p===l.length-1;return e(S.div,{layout:!0,initial:r&&c?{scale:.4,opacity:0}:!1,animate:{scale:1,opacity:1},transition:{duration:.25},className:[w,"h-10 w-10 text-xs","border-emerald-500 bg-emerald-500/20 text-emerald-100"].join(" "),children:m},p)})]})]})}const y=[{label:"Случайный",nums:[5,2,8,1,9,3,7,4]},{label:"Почти отсортирован",nums:[1,2,4,3,5,6]},{label:"Обратный порядок",nums:[8,7,6,5,4,3,2,1]},{label:"Дубликаты",nums:[4,2,4,1,2,4]}],T=750;function I(){const[l,c]=N(y[0].nums),[m,p]=N(y[0].nums.join(", ")),[r,u]=N(0),[g,t]=N(!1),s=$(()=>C(l),[l]),i=s[Math.min(r,s.length-1)],o=r>=s.length-1;E(()=>{if(!g)return;if(o){t(!1);return}const n=setTimeout(()=>u(d=>d+1),T);return()=>clearTimeout(n)},[g,o,r]);const x=n=>{c(n),p(n.join(", ")),u(0),t(!1)},b=()=>{const n=m.split(/[\s,]+/).map(Number).filter(d=>Number.isFinite(d)).slice(0,16);n.length>0&&x(n)};return a("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:y.map(n=>{const d=n.nums.join(",")===l.join(",");return e("button",{onClick:()=>x(n.nums),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",d?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:n.label},n.label)})}),a("div",{className:"flex flex-wrap items-center gap-2",children:[e("input",{value:m,onChange:n=>p(n.target.value),onKeyDown:n=>n.key==="Enter"&&b(),placeholder:"числа через запятую",className:"w-72 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"}),e("button",{onClick:b,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"Применить"}),e("span",{className:"text-xs text-slate-500",children:"до 16 чисел"})]}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:e(M,{step:i})}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:i.description}),a("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{u(0),t(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{t(!1),u(n=>Math.max(0,n-1))},disabled:r===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>t(n=>!n),disabled:o,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:g?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{t(!1),u(n=>Math.min(s.length-1,n+1))},disabled:o,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),a("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["шаг ",r+1," / ",s.length]})]}),e("input",{type:"range",min:0,max:s.length-1,value:r,onChange:n=>{t(!1),u(Number(n.target.value))},className:"w-full accent-indigo-500"})]})}function _(){return a("div",{className:"space-y-4 text-slate-300",children:[a("p",{children:[e("strong",{className:"text-white",children:"Сортировка слиянием (Merge Sort)"})," ","— классический алгоритм по стратегии"," ",e("strong",{children:"«разделяй и властвуй»"}),". Массив рекурсивно делится пополам до кусочков из одного элемента (такой кусок уже отсортирован), а потом соседние отсортированные половины ",e("strong",{children:"сливаются"})," в одну большую отсортированную — за один линейный проход."]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Идея решения"}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:[e("strong",{className:"text-indigo-400",children:"Разделение."})," Отрезок"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[lo, hi)"})," делим по середине на ",e("code",{className:"rounded bg-slate-800 px-1",children:"[lo, mid)"})," ","и ",e("code",{className:"rounded bg-slate-800 px-1",children:"[mid, hi)"})," и сортируем каждую половину тем же приёмом."]}),a("li",{children:[e("strong",{className:"text-emerald-400",children:"Слияние."})," Идём двумя указателями ",e("strong",{className:"text-sky-400",children:"i"})," и"," ",e("strong",{className:"text-rose-400",children:"j"})," по головам половин и каждый раз забираем ",e("strong",{children:"меньший"})," элемент в результат. Когда одна половина кончилась — дописываем хвост второй (он уже отсортирован)."]})]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Сложность"}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:["Глубина деления —"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"log n"})," уровней, на каждом уровне суммарно ",e("code",{className:"rounded bg-slate-800 px-1",children:"n"})," ","работы на слияния. Итог —"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n·log n)"})," и в худшем, и в среднем случае (в отличие от быстрой сортировки, у которой худший случай ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n²)"}),")."]}),a("li",{children:["Память — ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"})," под буфер результата: это плата за стабильное время."]})]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Устойчивость (stable)"}),a("p",{className:"mt-2",children:["При слиянии равные элементы берём из левой половины первыми (сравнение нестрогое ",e("code",{className:"rounded bg-slate-800 px-1",children:"left[i] <= right[j]"}),"), поэтому относительный порядок равных значений сохраняется. На пресете «Дубликаты» это особенно заметно. Устойчивость важна, когда сортируешь объекты по одному полю, не ломая прежнюю сортировку по другому."]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где применяется"}),a("p",{className:"mt-2",children:["Внешняя сортировка больших файлов (данные не влезают в память), сортировка связных списков (слияние не требует случайного доступа), подсчёт «инверсий» в массиве. Гибрид merge sort и вставок — это"," ",e("strong",{children:"Timsort"}),", стандартная сортировка в Python и в"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"Array.prototype.sort"})," ","у V8."]})]})]})}const R=`// Сортировка слиянием (Merge Sort) — чистый, «боевой» вариант.
//
// Дано: массив чисел. Нужно вернуть НОВЫЙ отсортированный по возрастанию массив.
//
// Идея — «разделяй и властвуй» (divide & conquer):
//   1. Делим массив пополам, пока в куске не останется 0–1 элемент
//      (такой кусок уже отсортирован по определению).
//   2. Сливаем (merge) две уже отсортированные половины в один
//      отсортированный массив за один линейный проход.
// Глубина деления — log n уровней, на каждом уровне суммарно n работы на слияние,
// поэтому время всегда O(n·log n) — и в худшем, и в среднем случае. Расплата —
// O(n) дополнительной памяти под результат.
//
// Рядом mergeSort.ts — тот же алгоритм, но с записью каждого шага для плеера.

/** Рекурсивно сортирует массив слиянием, не мутируя вход. */
export function mergeSort(nums: number[]): number[] {
  // База рекурсии: пустой массив или один элемент уже отсортированы.
  if (nums.length <= 1) return nums.slice();

  const mid = nums.length >> 1; // середина (Math.floor(n/2))
  const left = mergeSort(nums.slice(0, mid)); // сортируем левую половину
  const right = mergeSort(nums.slice(mid)); // сортируем правую половину

  return merge(left, right); // сливаем две отсортированные половины
}

/**
 * Сливает два УЖЕ отсортированных массива в один отсортированный.
 * Идём двумя указателями и каждый раз берём меньший из «голов».
 * Сравнение нестрогое (left[i] <= right[j]) делает сортировку устойчивой:
 * при равных значениях элемент из левой половины (он был раньше) идёт первым.
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  // Одна из половин кончилась — «хвост» второй уже отсортирован, дописываем как есть.
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}
`,A=`// Сортировка слиянием — тот же приём, что в solution.ts, но с записью КАЖДОГО
// шага для пошагового плеера. Логика отделена от отрисовки: трейсер возвращает
// массив «снимков» (Step[]), а плеер их листает.
//
// Что показываем:
//   • «split»   — текущий отрезок [lo, hi) делится пополам на [lo, mid) и [mid, hi);
//   • «compare» — сравниваем «головы» двух отсортированных половин;
//   • «copy»    — меньший элемент уезжает в результат слияния;
//   • «merged»  — половины слиты, отрезок массива стал отсортированным.
//
// Чтобы основной массив во время слияния не «дёргался», результат собираем в
// отдельном буфере и записываем его в массив целиком на шаге «merged».

export type MergePhase = "start" | "split" | "compare" | "copy" | "merged" | "done";

/** Один «снимок» состояния сортировки — кадр визуализации. */
export interface MergeSortStep {
  /** Состояние всего массива на этот момент. */
  array: number[];
  /** Границы текущего отрезка: полуинтервал [lo, hi). */
  lo: number;
  mid: number;
  hi: number;
  /** Фаза шага. */
  phase: MergePhase;
  /** Глубина рекурсии (0 — весь массив) — для отступа/оттенка. */
  depth: number;
  /** Левая половина слияния (значения), null вне слияния. */
  left: number[] | null;
  /** Правая половина слияния (значения), null вне слияния. */
  right: number[] | null;
  /** Указатель в левой половине. */
  i: number | null;
  /** Указатель в правой половине. */
  j: number | null;
  /** Уже слитые значения (длина = сколько записано в результат). */
  result: number[] | null;
  /** Какая сторона победила в сравнении/копировании: для подсветки. */
  picked: "left" | "right" | null;
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном кадре. */
  done: boolean;
}

/** Прогоняет сортировку слиянием и возвращает ПОЛНУЮ историю шагов. */
export function mergeSortTrace(input: number[]): MergeSortStep[] {
  const steps: MergeSortStep[] = [];
  const a = [...input]; // рабочая копия, мутируется по ходу
  const n = a.length;

  // Заготовка кадра: общие поля + перекрытие конкретными значениями.
  const frame = (over: Partial<MergeSortStep>): MergeSortStep => ({
    array: [...a],
    lo: 0,
    mid: 0,
    hi: n,
    phase: "split",
    depth: 0,
    left: null,
    right: null,
    i: null,
    j: null,
    result: null,
    picked: null,
    description: "",
    done: false,
    ...over,
  });

  steps.push(
    frame({
      phase: "start",
      description:
        n <= 1
          ? "Массив из 0–1 элемента уже отсортирован — делать нечего."
          : \`Сортируем \${n} элементов слиянием. Стратегия «разделяй и властвуй»: рекурсивно делим пополам, затем сливаем отсортированные половины.\`,
      done: n <= 1,
    }),
  );

  function sort(lo: number, hi: number, depth: number) {
    if (hi - lo <= 1) return; // отрезок из 0–1 элемента уже отсортирован

    const mid = (lo + hi) >> 1;
    steps.push(
      frame({
        phase: "split",
        lo,
        mid,
        hi,
        depth,
        description: \`Делим отрезок [\${lo}, \${hi}) пополам: [\${lo}, \${mid}) и [\${mid}, \${hi}).\`,
      }),
    );

    sort(lo, mid, depth + 1); // сортируем левую половину
    sort(mid, hi, depth + 1); // сортируем правую половину
    merge(lo, mid, hi, depth); // сливаем две отсортированные половины
  }

  function merge(lo: number, mid: number, hi: number, depth: number) {
    const left = a.slice(lo, mid);
    const right = a.slice(mid, hi);
    const result: number[] = [];
    let i = 0;
    let j = 0;

    const base = () => ({ lo, mid, hi, depth, left: [...left], right: [...right] });

    while (i < left.length && j < right.length) {
      steps.push(
        frame({
          ...base(),
          phase: "compare",
          i,
          j,
          result: [...result],
          description: \`Сравниваем головы половин: \${left[i]} и \${right[j]}. Меньший уйдёт в результат.\`,
        }),
      );

      const takeLeft = left[i] <= right[j];
      const value = takeLeft ? left[i] : right[j];
      result.push(value);
      steps.push(
        frame({
          ...base(),
          phase: "copy",
          i,
          j,
          result: [...result],
          picked: takeLeft ? "left" : "right",
          description: \`\${value} \${takeLeft ? "из левой" : "из правой"} половины меньше — дописываем его в результат.\`,
        }),
      );
      if (takeLeft) i++;
      else j++;
    }

    // Хвост одной из половин (вторая кончилась) — он уже отсортирован.
    while (i < left.length) {
      result.push(left[i]);
      steps.push(
        frame({
          ...base(),
          phase: "copy",
          i,
          j,
          result: [...result],
          picked: "left",
          description: \`Правая половина кончилась — переносим остаток левой: \${left[i]}.\`,
        }),
      );
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      steps.push(
        frame({
          ...base(),
          phase: "copy",
          i,
          j,
          result: [...result],
          picked: "right",
          description: \`Левая половина кончилась — переносим остаток правой: \${right[j]}.\`,
        }),
      );
      j++;
    }

    // Записываем собранный результат обратно в массив — отрезок отсортирован.
    for (let t = 0; t < result.length; t++) a[lo + t] = result[t];
    steps.push(
      frame({
        lo,
        mid,
        hi,
        depth,
        phase: "merged",
        description: \`Слили половины: отрезок [\${lo}, \${hi}) отсортирован → [\${result.join(", ")}].\`,
      }),
    );
  }

  sort(0, n, 0);

  steps.push(
    frame({
      phase: "done",
      description: \`Готово: массив отсортирован за O(n·log n) — [\${a.join(", ")}].\`,
      done: true,
    }),
  );

  return steps;
}
`,D=`import { motion } from "framer-motion";
import type { MergeSortStep } from "./mergeSort";

const CELL =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";

/**
 * Чистая отрисовка ОДНОГО кадра. Сверху — весь массив с подсвеченным активным
 * отрезком [lo, hi). Во время слияния снизу появляется «стол слияния»: левая и
 * правая половины с указателями i / j и строка результата, которая наполняется
 * (новые ячейки плавно въезжают через Framer Motion).
 */
export function MergeSortVisualizer({ step }: { step: MergeSortStep }) {
  const { array, lo, hi, phase } = step;
  const merging = step.left !== null && step.right !== null;
  const active = (idx: number) => idx >= lo && idx < hi;

  return (
    <div className="space-y-6">
      {/* Весь массив. */}
      <div className="overflow-x-auto">
        <div className="flex gap-2">
          {array.map((value, idx) => {
            let tone = "border-slate-700 bg-slate-800 text-slate-200";
            if (phase === "done")
              tone = "border-emerald-400 bg-emerald-500/25 text-white";
            else if (phase === "merged" && active(idx))
              tone = "border-emerald-400 bg-emerald-500/20 text-emerald-100";
            else if (active(idx))
              tone = "border-indigo-500 bg-indigo-500/15 text-white";
            else tone = "border-slate-800 bg-slate-900 text-slate-500";

            return (
              <div key={idx} className="flex flex-col items-center">
                <motion.div
                  layout
                  className={[CELL, tone].join(" ")}
                  animate={
                    (phase === "merged" && active(idx)) || phase === "done"
                      ? { scale: [1, 1.12, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {value}
                </motion.div>
                <span className="mt-1 text-[10px] text-slate-600">{idx}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Стол слияния — только во время merge. */}
      {merging && (
        <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <Row
            label="левая"
            values={step.left!}
            pointer={step.i}
            picked={step.picked === "left" ? step.i : null}
            accent="sky"
          />
          <Row
            label="правая"
            values={step.right!}
            pointer={step.j}
            picked={step.picked === "right" ? step.j : null}
            accent="rose"
          />
          <div className="h-px bg-slate-800" />
          <ResultRow values={step.result ?? []} justAdded={step.phase === "copy"} />
        </div>
      )}
    </div>
  );
}

const ACCENT = {
  sky: { ptr: "bg-sky-500", cell: "border-sky-400 bg-sky-500/20 text-white" },
  rose: { ptr: "bg-rose-500", cell: "border-rose-400 bg-rose-500/20 text-white" },
} as const;

/** Строка одной из половин: указатель показывает текущую «голову». */
function Row({
  label,
  values,
  pointer,
  picked,
  accent,
}: {
  label: string;
  values: number[];
  pointer: number | null;
  picked: number | null;
  accent: keyof typeof ACCENT;
}) {
  const a = ACCENT[accent];
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-right text-xs text-slate-500">
        {label}
      </span>
      <div className="flex gap-2">
        {values.map((value, idx) => {
          const isHead = idx === pointer;
          const consumed = pointer !== null && idx < pointer;
          let tone = "border-slate-700 bg-slate-800 text-slate-300";
          if (idx === picked) tone = a.cell;
          else if (isHead) tone = a.cell;
          else if (consumed) tone = "border-slate-800 bg-slate-900 text-slate-600";
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className={[CELL, "h-10 w-10 text-xs", tone].join(" ")}>
                {value}
              </div>
              <div className="mt-1 h-4">
                {isHead && (
                  <span
                    className={[
                      "rounded px-1.5 text-[10px] font-bold text-white",
                      a.ptr,
                    ].join(" ")}
                  >
                    {accent === "sky" ? "i" : "j"}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Строка результата слияния — наполняется слева направо. */
function ResultRow({
  values,
  justAdded,
}: {
  values: number[];
  justAdded: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-right text-xs text-slate-500">
        результат
      </span>
      <div className="flex min-h-[2.5rem] gap-2">
        {values.length === 0 && (
          <span className="self-center text-xs text-slate-600">пусто</span>
        )}
        {values.map((value, idx) => {
          const isLast = idx === values.length - 1;
          return (
            <motion.div
              key={idx}
              layout
              initial={isLast && justAdded ? { scale: 0.4, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className={[
                CELL,
                "h-10 w-10 text-xs",
                "border-emerald-500 bg-emerald-500/20 text-emerald-100",
              ].join(" ")}
            >
              {value}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
`,V=`import { useEffect, useMemo, useState } from "react";
import { mergeSortTrace } from "./mergeSort";
import { MergeSortVisualizer } from "./MergeSortVisualizer";

// Примеры подобраны под разные ситуации слияния: общий случай, уже
// отсортированный вход, обратный порядок и наличие дубликатов (видно
// устойчивость — равные элементы не меняют относительный порядок).
const PRESETS: { label: string; nums: number[] }[] = [
  { label: "Случайный", nums: [5, 2, 8, 1, 9, 3, 7, 4] },
  { label: "Почти отсортирован", nums: [1, 2, 4, 3, 5, 6] },
  { label: "Обратный порядок", nums: [8, 7, 6, 5, 4, 3, 2, 1] },
  { label: "Дубликаты", nums: [4, 2, 4, 1, 2, 4] },
];

const PLAY_INTERVAL = 750;

export function Demo() {
  const [nums, setNums] = useState<number[]>(PRESETS[0].nums);
  const [draft, setDraft] = useState(PRESETS[0].nums.join(", "));
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // История шагов пересчитывается заново на каждый новый массив.
  const steps = useMemo(() => mergeSortTrace(nums), [nums]);
  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const atEnd = stepIndex >= steps.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), PLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const load = (next: number[]) => {
    setNums(next);
    setDraft(next.join(", "));
    setStepIndex(0);
    setPlaying(false);
  };

  // Свой ввод: числа через запятую/пробел. В отличие от поиска вход НЕ сортируем —
  // в этом весь смысл демо.
  const applyDraft = () => {
    const parsed = draft
      .split(/[\\s,]+/)
      .map(Number)
      .filter((x) => Number.isFinite(x))
      .slice(0, 16); // ограничиваем, чтобы визуализация влезала
    if (parsed.length > 0) load(parsed);
  };

  return (
    <div className="space-y-6">
      {/* Выбор примера. */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => {
          const isCurrent = preset.nums.join(",") === nums.join(",");
          return (
            <button
              key={preset.label}
              onClick={() => load(preset.nums)}
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

      {/* Свой массив. */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="числа через запятую"
          className="w-72 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"
        />
        <button
          onClick={applyDraft}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
        >
          Применить
        </button>
        <span className="text-xs text-slate-500">до 16 чисел</span>
      </div>

      {/* Визуализация текущего шага. */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <MergeSortVisualizer step={step} />
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
`,F={meta:{id:"merge-sort",title:"Сортировка слиянием",category:"algorithmic",summary:"«Разделяй и властвуй»: массив рекурсивно делится пополам, а затем отсортированные половины сливаются за один проход — гарантированные O(n·log n)."},Demo:I,Explanation:_,code:[{filename:"solution.ts",language:"typescript",source:R},{filename:"mergeSort.ts",language:"typescript",source:A},{filename:"MergeSortVisualizer.tsx",language:"tsx",source:D},{filename:"Demo.tsx",language:"tsx",source:V}]};export{F as default};
