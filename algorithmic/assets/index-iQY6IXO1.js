import{m as y}from"./proxy-CG6_1RCV.js";import{a,_ as e}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as w,d as C,e as I}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react__loadShare__.js-C3muBDPt.js";function k(d,i,n){return n==="exact"?L(d,i):B(d,i,n)}function L(d,i){const n=[];let r=0,o=d.length-1;for(n.push({mode:"exact",low:r,high:o,mid:null,highlight:null,found:null,answer:null,description:d.length===0?"Массив пуст — искать негде.":`Ищем ${i}. Ставим границы: low = 0, high = ${o}. Каждый шаг смотрим середину диапазона.`,done:d.length===0});r<=o;){const s=r+o>>1,m=d[s];if(m===i)return n.push({mode:"exact",low:r,high:o,mid:s,highlight:"eq",found:s,answer:null,description:`mid = ${s}, nums[${s}] = ${m} — это target. Нашли на индексе ${s}.`,done:!0}),n;const u=m<i;n.push({mode:"exact",low:r,high:o,mid:s,highlight:"scan",found:null,answer:null,description:u?`mid = ${s}, nums[${s}] = ${m} < ${i}: target правее. low = ${s+1}, левая половина отброшена.`:`mid = ${s}, nums[${s}] = ${m} > ${i}: target левее. high = ${s-1}, правая половина отброшена.`,done:!1}),u?r=s+1:o=s-1}return n.push({mode:"exact",low:r,high:o,mid:null,highlight:null,found:null,answer:null,description:`low (${r}) обогнал high (${o}) — диапазон пуст. ${i} в массиве нет.`,done:!0}),n}function B(d,i,n){const r=[],o=d.length;let s=0,m=o;const u=n==="lower"?"≥":">";if(r.push({mode:n,low:s,high:m,mid:null,highlight:null,found:null,answer:null,description:`Ищем границу: первый индекс с nums[i] ${u} ${i}. Диапазон полуоткрытый [0, ${o}); ответ может оказаться и за концом массива.`,done:o===0}),o===0)return r[0]={...r[0],answer:0},r;for(;s<m;){const l=s+m>>1,c=d[l],h=n==="lower"?c<i:c<=i;r.push({mode:n,low:s,high:m,mid:l,highlight:"scan",found:null,answer:null,description:h?`mid = ${l}, nums[${l}] = ${c} ${n==="lower"?"<":"≤"} ${i}: граница правее. low = ${l+1}.`:`mid = ${l}, nums[${l}] = ${c} ${n==="lower"?"≥":">"} ${i}: mid — кандидат на границу. high = ${l}.`,done:!1}),h?s=l+1:m=l}const x=s===o;return r.push({mode:n,low:s,high:s,mid:null,highlight:null,found:null,answer:s,description:x?`Диапазон схлопнулся: граница = ${s} (за концом массива). Все элементы не дотягивают до условия «${u} ${i}».`:`Диапазон схлопнулся: граница = ${s}. nums[${s}] = ${d[s]} — первый элемент с условием «${u} ${i}».`,done:!0}),r}const D="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";function _({nums:d,target:i,step:n}){const r=d.length,o=n.mode!=="exact",s=o?r+1:r,m=x=>o?x<n.low||x>=n.high:x<n.low||x>n.high,u=!n.done;return a("div",{className:"space-y-6",children:[a("div",{className:"flex flex-wrap items-center gap-2 text-sm",children:[e("span",{className:"text-slate-500",children:"target ="}),e("span",{className:"rounded-md border border-indigo-500 bg-indigo-500/15 px-3 py-1 font-mono font-bold text-white",children:i}),n.found!==null&&a("span",{className:"ml-2 rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white",children:["найден на индексе ",n.found]}),n.mode==="exact"&&n.done&&n.found===null&&e("span",{className:"ml-2 rounded bg-rose-600 px-2 py-1 text-xs font-semibold text-white",children:"не найден"}),n.answer!==null&&a("span",{className:"ml-2 rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white",children:["граница = ",n.answer,n.answer===r?" (за концом)":""]})]}),e("div",{className:"overflow-x-auto",children:e("div",{className:"flex gap-2",children:Array.from({length:s},(x,l)=>{const c=l===r,h=c?null:d[l],N=l===n.mid,g=l===n.found,p=n.answer!==null&&l===n.answer;let f="border-slate-700 bg-slate-800 text-slate-200";return c?f=p?"border-emerald-400 bg-emerald-500/20 text-emerald-200":"border-dashed border-slate-800 bg-slate-900/40 text-slate-600":g||p?f="border-emerald-400 bg-emerald-500/25 text-white":N?f=n.highlight==="eq"?"border-emerald-400 bg-emerald-500/25 text-white":"border-amber-400 bg-amber-500/25 text-white":m(l)&&(f="border-slate-800 bg-slate-900 text-slate-600"),a("div",{className:"flex flex-col items-center",children:[e(y.div,{className:[D,f].join(" "),animate:N||g||p?{scale:[1,1.15,1]}:{scale:1},transition:{duration:.3},children:c?"∅":h}),e("span",{className:"mt-1 text-[10px] text-slate-600",children:c?"n":l}),a("div",{className:"mt-1 flex h-5 items-center gap-1",children:[u&&l===n.low&&e(y.span,{layoutId:"bs-low",className:"rounded bg-sky-500 px-1.5 text-[10px] font-bold text-white",children:"L"}),l===n.mid&&e(y.span,{layoutId:"bs-mid",className:"rounded bg-amber-500 px-1.5 text-[10px] font-bold text-white",children:"M"}),u&&l===n.high&&e(y.span,{layoutId:"bs-high",className:"rounded bg-rose-500 px-1.5 text-[10px] font-bold text-white",children:"H"}),p&&n.done&&e(y.span,{layoutId:"bs-ans",className:"rounded bg-emerald-500 px-1.5 text-[10px] font-bold text-white",children:"ans"})]})]},l)})})})]})}const v=[{label:"Есть в середине",nums:[1,3,5,7,9,11,13],target:9},{label:"Дубликаты: 4",nums:[2,4,4,4,6,8],target:4},{label:"Нет в массиве",nums:[1,4,6,8,15,23,42],target:7},{label:"За концом",nums:[1,2,3,5],target:10}],R=[{id:"exact",label:"Точный поиск"},{id:"lower",label:"Левая граница ≥"},{id:"upper",label:"Правая граница >"}],j=900;function A(){const[d,i]=w("exact"),[n,r]=w(v[0].nums),[o,s]=w(v[0].target),[m,u]=w(v[0].nums.join(", ")),[x,l]=w(String(v[0].target)),[c,h]=w(0),[N,g]=w(!1),p=C(()=>k(n,o,d),[n,o,d]),f=p[Math.min(c,p.length-1)],S=c>=p.length-1;I(()=>{if(!N)return;if(S){g(!1);return}const t=setTimeout(()=>h(b=>b+1),j);return()=>clearTimeout(t)},[N,S,c]);const T=(t,b)=>{r(t),s(b),u(t.join(", ")),l(String(b)),h(0),g(!1)},M=t=>{t!==d&&(i(t),h(0),g(!1))},$=()=>{const t=m.split(/[\s,]+/).map(Number).filter(E=>Number.isFinite(E)).sort((E,P)=>E-P),b=Number(x);t.length>0&&Number.isFinite(b)&&T(t,b)};return a("div",{className:"space-y-6",children:[e("div",{className:"inline-flex rounded-lg border border-slate-700 p-1",children:R.map(t=>e("button",{onClick:()=>M(t.id),className:["rounded-md px-4 py-1.5 text-sm font-medium transition-colors",d===t.id?"bg-indigo-600 text-white":"text-slate-400 hover:text-white"].join(" "),children:t.label},t.id))}),e("div",{className:"flex flex-wrap gap-2",children:v.map(t=>{const b=t.nums.join(",")===n.join(",")&&t.target===o;return e("button",{onClick:()=>T(t.nums,t.target),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",b?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:t.label},t.label)})}),a("div",{className:"flex flex-wrap items-center gap-2",children:[e("input",{value:m,onChange:t=>u(t.target.value),onKeyDown:t=>t.key==="Enter"&&$(),placeholder:"числа через запятую",className:"w-56 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"}),e("input",{value:x,onChange:t=>l(t.target.value),onKeyDown:t=>t.key==="Enter"&&$(),placeholder:"target",className:"w-24 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"}),e("button",{onClick:$,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"Применить"}),e("span",{className:"text-xs text-slate-500",children:"вход автоматически сортируется"})]}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:e(_,{nums:n,target:o,step:f})}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:f.description}),a("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{h(0),g(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{g(!1),h(t=>Math.max(0,t-1))},disabled:c===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>g(t=>!t),disabled:S,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:N?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{g(!1),h(t=>Math.min(p.length-1,t+1))},disabled:S,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),a("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["шаг ",c+1," / ",p.length]})]}),e("input",{type:"range",min:0,max:p.length-1,value:c,onChange:t=>{g(!1),h(Number(t.target.value))},className:"w-full accent-indigo-500"})]})}function O(){return a("div",{className:"space-y-4 text-slate-300",children:[a("p",{children:[e("strong",{className:"text-white",children:"Бинарный поиск (Binary Search)"})," — приём поиска в ",e("strong",{children:"отсортированных"})," данных: на каждом шаге смотрим середину диапазона и по одному сравнению отбрасываем целую половину кандидатов. Диапазон сокращается вдвое за шаг, поэтому всего"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(log n)"})," сравнений вместо ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"})," у линейного перебора."]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Задача: Binary Search (LeetCode 704)"}),a("p",{className:"mt-2",children:["Дан отсортированный по возрастанию массив и число"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"target"}),". Нужно вернуть его индекс или ",e("code",{className:"rounded bg-slate-800 px-1",children:"−1"}),", если такого числа нет."]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Идея решения"}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:["Держим границы диапазона"," ",e("strong",{className:"text-sky-400",children:"low"})," и"," ",e("strong",{className:"text-rose-400",children:"high"}),"; берём середину"," ",e("strong",{className:"text-amber-400",children:"mid"}),"."]}),a("li",{children:[e("code",{className:"rounded bg-slate-800 px-1",children:"nums[mid] === target"})," ","— нашли, выходим."]}),a("li",{children:[e("code",{className:"rounded bg-slate-800 px-1",children:"nums[mid] < target"})," ","— target правее, сдвигаем"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"low = mid + 1"}),"."]}),a("li",{children:[e("code",{className:"rounded bg-slate-800 px-1",children:"nums[mid] > target"})," ","— target левее, сдвигаем"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"high = mid − 1"}),"."]}),a("li",{children:["Повторяем, пока ",e("code",{className:"rounded bg-slate-800 px-1",children:"low ≤ high"}),". Как только границы разошлись — числа нет."]})]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Подводные камни"}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:["Середину берут как"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"low + (high − low) / 2"})," ","(или сдвигом ",e("code",{className:"rounded bg-slate-800 px-1",children:"(low + high) >> 1"}),"), чтобы не переполнить сумму в языках с фиксированным int."]}),a("li",{children:["Главный источник багов — границы: строгое или нестрогое сравнение,",e("code",{className:"rounded bg-slate-800 px-1",children:"mid"})," или"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"mid ± 1"}),". Диапазон на каждом шаге обязан сокращаться, иначе цикл зависнет."]})]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Варианты: левая и правая граница (переключатель в демо)"}),a("p",{className:"mt-2",children:["Куда полезнее на интервью — искать не точное совпадение, а"," ",e("strong",{children:"границу"})," на полуинтервале"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[low, high)"})," (ответ — индекс от ",e("code",{className:"rounded bg-slate-800 px-1",children:"0"})," до"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"n"}),", может быть и за концом массива):"]}),a("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[a("li",{children:[e("strong",{className:"text-white",children:"lower bound"})," — первый индекс с"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"nums[i] ≥ target"}),". Сравнение строгое (",e("code",{className:"rounded bg-slate-800 px-1",children:"<"}),"): равные target элементы остаются справа от границы."]}),a("li",{children:[e("strong",{className:"text-white",children:"upper bound"})," — первый индекс с"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"nums[i] > target"}),". Сравнение нестрогое (",e("code",{className:"rounded bg-slate-800 px-1",children:"≤"}),"): равные target уходят влево."]})]}),a("p",{className:"mt-2",children:["Разница ровно в одном символе сравнения, но именно из неё растёт куча задач. Например, на пресете «Дубликаты: 4» видно, что"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"upperBound − lowerBound"})," ","= ",e("strong",{children:"количество вхождений"})," target в массив. Через границы решаются Search Insert Position и First/Last Position of Element."]})]}),a("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где ещё применяется приём"}),e("p",{className:"mt-2",children:"Search Insert Position, First/Last Position of Element, поиск в повёрнутом массиве, «бинпоиск по ответу» (минимальная скорость/размер, при которой условие выполнимо — Koko Eating Bananas, Capacity to Ship Packages), извлечение квадратного корня."})]})]})}const F=`// Бинарный поиск (LeetCode 704) — чистый, «боевой» вариант.
//
// Дано: массив, отсортированный по возрастанию, и число target. Нужно вернуть
// индекс target в массиве или −1, если его нет.
//
// Идея: на каждом шаге смотрим середину текущего диапазона. Так как массив
// отсортирован, сравнение с серединой сразу отбрасывает ПОЛОВИНУ кандидатов:
// если середина меньше target — target правее, иначе левее. Диапазон
// сокращается вдвое за шаг, поэтому всего O(log n) сравнений вместо O(n).
//
// Рядом binarySearch.ts — тот же алгоритм, но с записью каждого шага для плеера.

/** Точный поиск: индекс target или −1. */
export function binarySearch(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    // (low + high) >> 1 — то же, что Math.floor((low+high)/2), но без переполнения
    // знаковой границы и быстрее. Берём середину текущего диапазона.
    const mid = (low + high) >> 1;

    if (nums[mid] === target) return mid; // попали
    if (nums[mid] < target)
      low = mid + 1; // target правее — отбрасываем левую половину
    else high = mid - 1; // target левее — отбрасываем правую половину
  }

  return -1; // диапазон схлопнулся — числа нет
}

/**
 * Левая граница (lower bound): индекс ПЕРВОГО элемента ≥ target.
 * Возвращает значение в диапазоне [0, n] — это самый полезный на интервью
 * вариант: через него делаются «вставить позицию», count, поиск диапазона.
 *
 * Тонкость в инвариантах: ищем в полуинтервале [low, high), и при попадании
 * НЕ выходим сразу, а продолжаем сжимать диапазон влево.
 */
export function lowerBound(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length; // полуинтервал [low, high)

  while (low < high) {
    const mid = (low + high) >> 1;
    if (nums[mid] < target)
      low = mid + 1; // mid точно меньше — ответ строго правее
    else high = mid; // mid подходит как кандидат — оставляем его в диапазоне
  }

  return low;
}

/**
 * Правая граница (upper bound): индекс ПЕРВОГО элемента строго &gt; target.
 * Отличается от lowerBound ровно одним символом — нестрогим сравнением: так
 * элементы, равные target, тоже уходят влево от границы. Поэтому количество
 * вхождений target в массив = upperBound − lowerBound.
 */
export function upperBound(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (nums[mid] <= target)
      low = mid + 1; // mid ≤ target — граница строго правее
    else high = mid; // mid строго больше — кандидат, оставляем в диапазоне
  }

  return low;
}
`,V=`// Бинарный поиск (LeetCode 704) — тот же приём, что в solution.ts, но с записью
// КАЖДОГО шага для пошагового плеера. Поддерживает три режима:
//   exact — точный поиск индекса target (диапазон [low, high], включительно);
//   lower — левая граница: первый индекс с nums[i] ≥ target (полуинтервал [low, high));
//   upper — правая граница: первый индекс с nums[i] > target (тот же полуинтервал).
//
// Логика отделена от отрисовки: трейсер возвращает массив шагов, плеер их листает.

export type SearchMode = "exact" | "lower" | "upper";

/** Один «снимок» состояния поиска — кадр визуализации. */
export interface BinarySearchStep {
  /** Режим, в котором снят кадр (влияет на трактовку границ). */
  mode: SearchMode;
  /** Левая граница текущего диапазона. */
  low: number;
  /** Правая граница: включительно для exact, исключительно для lower/upper. */
  high: number;
  /** Проверяемая середина (или \`null\` на старте/в финале). */
  mid: number | null;
  /** Подсветка середины: точное совпадение или обычный шаг сужения. */
  highlight: "eq" | "scan" | null;
  /** Индекс точного совпадения (только режим exact). */
  found: number | null;
  /** Найденная граница 0…n (только режимы lower/upper, на финале). */
  answer: number | null;
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном кадре. */
  done: boolean;
}

/** Прогоняет выбранный режим и возвращает ПОЛНУЮ историю шагов. */
export function binarySearchTrace(
  nums: number[],
  target: number,
  mode: SearchMode,
): BinarySearchStep[] {
  return mode === "exact"
    ? exactTrace(nums, target)
    : boundaryTrace(nums, target, mode);
}

/** Точный поиск: индекс target или −1. Диапазон [low, high] включительно. */
function exactTrace(nums: number[], target: number): BinarySearchStep[] {
  const steps: BinarySearchStep[] = [];
  let low = 0;
  let high = nums.length - 1;

  steps.push({
    mode: "exact",
    low,
    high,
    mid: null,
    highlight: null,
    found: null,
    answer: null,
    description:
      nums.length === 0
        ? "Массив пуст — искать негде."
        : \`Ищем \${target}. Ставим границы: low = 0, high = \${high}. \` +
          "Каждый шаг смотрим середину диапазона.",
    done: nums.length === 0,
  });

  while (low <= high) {
    const mid = (low + high) >> 1;
    const value = nums[mid];

    if (value === target) {
      steps.push({
        mode: "exact",
        low,
        high,
        mid,
        highlight: "eq",
        found: mid,
        answer: null,
        description: \`mid = \${mid}, nums[\${mid}] = \${value} — это target. Нашли на индексе \${mid}.\`,
        done: true,
      });
      return steps;
    }

    const goRight = value < target;
    steps.push({
      mode: "exact",
      low,
      high,
      mid,
      highlight: "scan",
      found: null,
      answer: null,
      description: goRight
        ? \`mid = \${mid}, nums[\${mid}] = \${value} < \${target}: target правее. low = \${mid + 1}, левая половина отброшена.\`
        : \`mid = \${mid}, nums[\${mid}] = \${value} > \${target}: target левее. high = \${mid - 1}, правая половина отброшена.\`,
      done: false,
    });
    if (goRight) low = mid + 1;
    else high = mid - 1;
  }

  steps.push({
    mode: "exact",
    low,
    high,
    mid: null,
    highlight: null,
    found: null,
    answer: null,
    description: \`low (\${low}) обогнал high (\${high}) — диапазон пуст. \${target} в массиве нет.\`,
    done: true,
  });

  return steps;
}

/**
 * Граница (lower/upper) на полуинтервале [low, high). Результат — индекс в
 * диапазоне 0…n. Отличие режимов ровно в одном: строгое (<) или нестрогое (≤)
 * сравнение с target определяет, уходят ли равные target элементы влево.
 */
function boundaryTrace(
  nums: number[],
  target: number,
  mode: "lower" | "upper",
): BinarySearchStep[] {
  const steps: BinarySearchStep[] = [];
  const n = nums.length;
  let low = 0;
  let high = n; // полуинтервал [low, high)

  const goalSign = mode === "lower" ? "≥" : ">";

  steps.push({
    mode,
    low,
    high,
    mid: null,
    highlight: null,
    found: null,
    answer: null,
    description:
      \`Ищем границу: первый индекс с nums[i] \${goalSign} \${target}. \` +
      \`Диапазон полуоткрытый [0, \${n}); ответ может оказаться и за концом массива.\`,
    done: n === 0 ? true : false,
  });

  if (n === 0) {
    steps[0] = { ...steps[0], answer: 0 };
    return steps;
  }

  while (low < high) {
    const mid = (low + high) >> 1;
    const value = nums[mid];
    // lower: уходим вправо, пока nums[mid] < target.
    // upper: уходим вправо, пока nums[mid] ≤ target (равные тоже отбрасываем).
    const goRight = mode === "lower" ? value < target : value <= target;

    steps.push({
      mode,
      low,
      high,
      mid,
      highlight: "scan",
      found: null,
      answer: null,
      description: goRight
        ? \`mid = \${mid}, nums[\${mid}] = \${value} \${mode === "lower" ? "<" : "≤"} \${target}: граница правее. low = \${mid + 1}.\`
        : \`mid = \${mid}, nums[\${mid}] = \${value} \${mode === "lower" ? "≥" : ">"} \${target}: mid — кандидат на границу. high = \${mid}.\`,
      done: false,
    });
    if (goRight) low = mid + 1;
    else high = mid;
  }

  const atEnd = low === n;
  steps.push({
    mode,
    low,
    high: low,
    mid: null,
    highlight: null,
    found: null,
    answer: low,
    description: atEnd
      ? \`Диапазон схлопнулся: граница = \${low} (за концом массива). Все элементы не дотягивают до условия «\${goalSign} \${target}».\`
      : \`Диапазон схлопнулся: граница = \${low}. nums[\${low}] = \${nums[low]} — первый элемент с условием «\${goalSign} \${target}».\`,
    done: true,
  });

  return steps;
}
`,H=`import { motion } from "framer-motion";
import type { BinarySearchStep } from "./binarySearch";

const CELL =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";

/**
 * Чистая отрисовка ОДНОГО кадра. Клетки вне диапазона показаны «отброшенными»,
 * середина подсвечена, маркеры L / M / H плавно перемещаются (Framer Motion).
 *
 * Для режимов границ (lower/upper) диапазон полуоткрытый [low, high), а ответ
 * может оказаться за концом массива — поэтому рисуем фантомный слот «n».
 */
export function BinarySearchVisualizer({
  nums,
  target,
  step,
}: {
  nums: number[];
  target: number;
  step: BinarySearchStep;
}) {
  const n = nums.length;
  const halfOpen = step.mode !== "exact";
  // Для границ показываем дополнительный слот в самом конце — позицию n.
  const positions = halfOpen ? n + 1 : n;

  const isEliminated = (i: number) =>
    halfOpen ? i < step.low || i >= step.high : i < step.low || i > step.high;

  // Маркеры L/H рисуем, пока поиск не закончен; на финале границы — маркер ans.
  const showLH = !step.done;

  return (
    <div className="space-y-6">
      {/* Цель и итог. */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-slate-500">target =</span>
        <span className="rounded-md border border-indigo-500 bg-indigo-500/15 px-3 py-1 font-mono font-bold text-white">
          {target}
        </span>
        {step.found !== null && (
          <span className="ml-2 rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
            найден на индексе {step.found}
          </span>
        )}
        {step.mode === "exact" && step.done && step.found === null && (
          <span className="ml-2 rounded bg-rose-600 px-2 py-1 text-xs font-semibold text-white">
            не найден
          </span>
        )}
        {step.answer !== null && (
          <span className="ml-2 rounded bg-emerald-600 px-2 py-1 text-xs font-semibold text-white">
            граница = {step.answer}
            {step.answer === n ? " (за концом)" : ""}
          </span>
        )}
      </div>

      {/* Массив (+ фантомный слот для границ). */}
      <div className="overflow-x-auto">
        <div className="flex gap-2">
          {Array.from({ length: positions }, (_, i) => {
            const isPhantom = i === n; // только в halfOpen
            const value = isPhantom ? null : nums[i];

            const isMid = i === step.mid;
            const isFound = i === step.found;
            const isAnswer = step.answer !== null && i === step.answer;

            let tone = "border-slate-700 bg-slate-800 text-slate-200";
            if (isPhantom)
              tone = isAnswer
                ? "border-emerald-400 bg-emerald-500/20 text-emerald-200"
                : "border-dashed border-slate-800 bg-slate-900/40 text-slate-600";
            else if (isFound || isAnswer)
              tone = "border-emerald-400 bg-emerald-500/25 text-white";
            else if (isMid)
              tone =
                step.highlight === "eq"
                  ? "border-emerald-400 bg-emerald-500/25 text-white"
                  : "border-amber-400 bg-amber-500/25 text-white";
            else if (isEliminated(i))
              tone = "border-slate-800 bg-slate-900 text-slate-600";

            return (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  className={[CELL, tone].join(" ")}
                  animate={
                    isMid || isFound || isAnswer
                      ? { scale: [1, 1.15, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {isPhantom ? "∅" : value}
                </motion.div>
                <span className="mt-1 text-[10px] text-slate-600">
                  {isPhantom ? "n" : i}
                </span>

                {/* Дорожка маркеров под ячейкой. */}
                <div className="mt-1 flex h-5 items-center gap-1">
                  {showLH && i === step.low && (
                    <motion.span
                      layoutId="bs-low"
                      className="rounded bg-sky-500 px-1.5 text-[10px] font-bold text-white"
                    >
                      L
                    </motion.span>
                  )}
                  {i === step.mid && (
                    <motion.span
                      layoutId="bs-mid"
                      className="rounded bg-amber-500 px-1.5 text-[10px] font-bold text-white"
                    >
                      M
                    </motion.span>
                  )}
                  {showLH && i === step.high && (
                    <motion.span
                      layoutId="bs-high"
                      className="rounded bg-rose-500 px-1.5 text-[10px] font-bold text-white"
                    >
                      H
                    </motion.span>
                  )}
                  {isAnswer && step.done && (
                    <motion.span
                      layoutId="bs-ans"
                      className="rounded bg-emerald-500 px-1.5 text-[10px] font-bold text-white"
                    >
                      ans
                    </motion.span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
`,z=`import { useEffect, useMemo, useState } from "react";
import { binarySearchTrace, type SearchMode } from "./binarySearch";
import { BinarySearchVisualizer } from "./BinarySearchVisualizer";

// Примеры: массив всегда отсортирован, target подобран под разные исходы.
// «Дубликаты» специально показывают разницу lower/upper.
const PRESETS: { label: string; nums: number[]; target: number }[] = [
  { label: "Есть в середине", nums: [1, 3, 5, 7, 9, 11, 13], target: 9 },
  { label: "Дубликаты: 4", nums: [2, 4, 4, 4, 6, 8], target: 4 },
  { label: "Нет в массиве", nums: [1, 4, 6, 8, 15, 23, 42], target: 7 },
  { label: "За концом", nums: [1, 2, 3, 5], target: 10 },
];

const MODES: { id: SearchMode; label: string }[] = [
  { id: "exact", label: "Точный поиск" },
  { id: "lower", label: "Левая граница ≥" },
  { id: "upper", label: "Правая граница >" },
];

const PLAY_INTERVAL = 900;

export function Demo() {
  const [mode, setMode] = useState<SearchMode>("exact");
  const [nums, setNums] = useState<number[]>(PRESETS[0].nums);
  const [target, setTarget] = useState<number>(PRESETS[0].target);
  const [draftNums, setDraftNums] = useState(PRESETS[0].nums.join(", "));
  const [draftTarget, setDraftTarget] = useState(String(PRESETS[0].target));
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // История шагов считается заново на каждую тройку (массив, target, режим).
  const steps = useMemo(
    () => binarySearchTrace(nums, target, mode),
    [nums, target, mode],
  );
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

  const load = (nextNums: number[], nextTarget: number) => {
    setNums(nextNums);
    setTarget(nextTarget);
    setDraftNums(nextNums.join(", "));
    setDraftTarget(String(nextTarget));
    setStepIndex(0);
    setPlaying(false);
  };

  const switchMode = (next: SearchMode) => {
    if (next === mode) return;
    setMode(next);
    setStepIndex(0);
    setPlaying(false);
  };

  // Свой ввод: числа парсим и сортируем (поиск требует отсортированный вход).
  const applyDraft = () => {
    const parsed = draftNums
      .split(/[\\s,]+/)
      .map(Number)
      .filter((x) => Number.isFinite(x))
      .sort((a, b) => a - b);
    const t = Number(draftTarget);
    if (parsed.length > 0 && Number.isFinite(t)) load(parsed, t);
  };

  return (
    <div className="space-y-6">
      {/* Тумблер режима. */}
      <div className="inline-flex rounded-lg border border-slate-700 p-1">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => switchMode(m.id)}
            className={[
              "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
              mode === m.id
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white",
            ].join(" ")}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Выбор примера. */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => {
          const isCurrent =
            preset.nums.join(",") === nums.join(",") && preset.target === target;
          return (
            <button
              key={preset.label}
              onClick={() => load(preset.nums, preset.target)}
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

      {/* Свой массив и цель. */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draftNums}
          onChange={(e) => setDraftNums(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="числа через запятую"
          className="w-56 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"
        />
        <input
          value={draftTarget}
          onChange={(e) => setDraftTarget(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="target"
          className="w-24 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"
        />
        <button
          onClick={applyDraft}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
        >
          Применить
        </button>
        <span className="text-xs text-slate-500">
          вход автоматически сортируется
        </span>
      </div>

      {/* Визуализация текущего шага. */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <BinarySearchVisualizer nums={nums} target={target} step={step} />
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
`,G={meta:{id:"binary-search",title:"Бинарный поиск",category:"algorithmic",summary:"Каждый шаг отбрасывает половину отсортированного массива — поиск за O(log n) вместо O(n)."},Demo:A,Explanation:O,code:[{filename:"solution.ts",language:"typescript",source:F},{filename:"binarySearch.ts",language:"typescript",source:V},{filename:"BinarySearchVisualizer.tsx",language:"tsx",source:H},{filename:"Demo.tsx",language:"tsx",source:z}]};export{G as default};
