import{m as j}from"./proxy-CG6_1RCV.js";import{a as o,_ as e}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as C,d as R,e as E}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react__loadShare__.js-C3muBDPt.js";function $(x){return x.map(n=>[...n])}function L(x,n){const i=[],g=x.length,c=g>0?x[0].length:0,d=Array.from({length:g+1},(l,s)=>Array.from({length:c+1},(P,N)=>s===0||N===0?0:null)),b={rect:null,terms:null,activeTerm:-1,runningSum:0};i.push({phase:"build",prefix:$(d),buildCell:null,contributors:null,...b,description:`Строим таблицу префиксов P размера ${g+1}×${c+1}. Нулевые строка и столбец — это «пустые» суммы (0), они убирают проверки границ. Каждую внутреннюю клетку считаем по формуле: число + сверху + слева − угол.`,done:!1});for(let l=1;l<=g;l++)for(let s=1;s<=c;s++){const P=d[l-1][s],N=d[l][s-1],v=d[l-1][s-1],a=x[l-1][s-1];d[l][s]=a+P+N-v,i.push({phase:"build",prefix:$(d),buildCell:{row:l,col:s},contributors:{top:{row:l-1,col:s},left:{row:l,col:s-1},diag:{row:l-1,col:s-1},source:{row:l-1,col:s-1}},...b,description:`P[${l}][${s}] = ${a} (matrix[${l-1}][${s-1}]) + ${P} (сверху) + ${N} (слева) − ${v} (угол) = ${d[l][s]}.`,done:!1})}if(!n)return i[i.length-1]={...i[i.length-1],done:!0,description:i[i.length-1].description+" Таблица готова — теперь любой запрос суммы считается за O(1)."},i;const{r1:t,c1:u,r2:r,c2:p}=n,m=[{sign:1,prefixCell:{row:r+1,col:p+1},covers:{r1:0,c1:0,r2:r,c2:p},value:d[r+1][p+1]},{sign:-1,prefixCell:{row:t,col:p+1},covers:t>0?{r1:0,c1:0,r2:t-1,c2:p}:null,value:d[t][p+1]},{sign:-1,prefixCell:{row:r+1,col:u},covers:u>0?{r1:0,c1:0,r2:r,c2:u-1}:null,value:d[r+1][u]},{sign:1,prefixCell:{row:t,col:u},covers:t>0&&u>0?{r1:0,c1:0,r2:t-1,c2:u-1}:null,value:d[t][u]}],f=[`+P[${r+1}][${p+1}] = ${m[0].value}: берём весь блок от угла до (${r},${p}).`,`−P[${t}][${p+1}] = ${m[1].value}: вычитаем полосу сверху над прямоугольником.`,`−P[${r+1}][${u}] = ${m[2].value}: вычитаем полосу слева от прямоугольника.`,`+P[${t}][${u}] = ${m[3].value}: верхне-левый угол вычли дважды — возвращаем его.`];i.push({phase:"query",prefix:$(d),buildCell:null,contributors:null,rect:n,terms:m,activeTerm:-1,runningSum:0,description:`Запрос: сумма прямоугольника (${t},${u})…(${r},${p}). Считаем её четырьмя обращениями к P по формуле включений-исключений.`,done:!1});let h=0;return m.forEach((l,s)=>{h+=l.sign*l.value;const P=s===m.length-1;i.push({phase:"query",prefix:$(d),buildCell:null,contributors:null,rect:n,terms:m,activeTerm:s,runningSum:h,description:P?`${f[s]} Итог: сумма прямоугольника = ${h}.`:`${f[s]} Накоплено: ${h}.`,done:P})}),i}const k="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border text-[11px] font-semibold tabular-nums",w=(x,n,i)=>x.row===n&&x.col===i,T=(x,n,i)=>!!x&&n>=x.r1&&n<=x.r2&&i>=x.c1&&i<=x.c2;function q({matrix:x,step:n,selection:i,pending:g,onCellClick:c}){const d=n.phase==="query"&&n.terms&&n.activeTerm>=0?n.terms[n.activeTerm]:null;return o("div",{className:"space-y-6",children:[o("div",{className:"flex flex-wrap gap-8",children:[o("div",{children:[o("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:["матрица",c?" · кликни две клетки = углы":""]}),e("div",{className:"inline-flex flex-col gap-1",children:x.map((b,t)=>e("div",{className:"flex gap-1",children:b.map((u,r)=>{const p=n.contributors&&w(n.contributors.source,t,r),m=T(n.rect,t,r),f=T((d==null?void 0:d.covers)??null,t,r),h=(g==null?void 0:g.row)===t&&(g==null?void 0:g.col)===r,l=T(i,t,r);let s="border-slate-700 bg-slate-800 text-slate-200";return p?s="border-emerald-400 bg-emerald-500/25 text-white":f?s=d.sign===1?"border-emerald-500 bg-emerald-500/20 text-emerald-100":"border-rose-500 bg-rose-500/20 text-rose-100":(m||l)&&(s="border-indigo-500 bg-indigo-500/15 text-white"),e(j.button,{type:"button",disabled:!c,onClick:()=>c==null?void 0:c(t,r),className:[k,s,h?"ring-2 ring-amber-400":"",c?"cursor-pointer hover:brightness-125":""].join(" "),animate:p?{scale:[1,1.15,1]}:{scale:1},transition:{duration:.3},children:u},r)})},t))})]}),o("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"префиксы P (на 1 больше по каждой стороне)"}),e("div",{className:"inline-flex flex-col gap-1",children:n.prefix.map((b,t)=>e("div",{className:"flex gap-1",children:b.map((u,r)=>{var a;const p=n.buildCell&&w(n.buildCell,t,r),m=n.contributors,f=m&&w(m.top,t,r),h=m&&w(m.left,t,r),l=m&&w(m.diag,t,r),s=t===0||r===0,P=(a=n.terms)==null?void 0:a.find(y=>w(y.prefixCell,t,r)),N=d&&w(d.prefixCell,t,r);let v=s?"border-slate-800 bg-slate-900 text-slate-600":u===null?"border-dashed border-slate-700 bg-slate-900 text-slate-700":"border-slate-700 bg-slate-800 text-slate-300";return p?v="border-amber-400 bg-amber-500/25 text-white":l?v="border-rose-500 bg-rose-500/20 text-rose-100":f||h?v="border-sky-500 bg-sky-500/20 text-sky-100":N?v=d.sign===1?"border-emerald-400 bg-emerald-500/25 text-white":"border-rose-400 bg-rose-500/25 text-white":P&&(v="border-indigo-600 bg-indigo-900/40 text-indigo-200"),e(j.div,{className:[k,v].join(" "),animate:p?{scale:[1,1.15,1]}:{scale:1},transition:{duration:.3},children:u===null?"·":u},r)})},t))})]})]}),n.phase==="query"&&n.terms&&e("div",{className:"rounded-md bg-slate-800/60 px-4 py-3",children:o("div",{className:"flex flex-wrap items-center gap-2 font-mono text-sm",children:[n.terms.map((b,t)=>o("span",{className:["rounded px-2 py-1",t===n.activeTerm?b.sign===1?"bg-emerald-600 text-white":"bg-rose-600 text-white":t<n.activeTerm?"bg-slate-700 text-slate-300":"bg-slate-900 text-slate-500"].join(" "),children:[b.sign===1?"+":"−",b.value]},t)),e("span",{className:"ml-2 text-slate-400",children:"="}),e("span",{className:"rounded bg-indigo-600 px-2 py-1 font-bold text-white",children:n.runningSum})]})})]})}const S=[{label:"LeetCode 304 (5×5)",matrix:[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]],rect:{r1:2,c1:1,r2:4,c2:3}},{label:"С отрицательными (3×4)",matrix:[[1,-2,3,0],[-4,5,-6,7],[8,-9,1,2]],rect:{r1:0,c1:1,r2:2,c2:2}},{label:"Однородная (4×4)",matrix:[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]],rect:{r1:1,c1:1,r2:2,c2:2}}],M=700;function _(x,n){let i=0;for(let g=n.r1;g<=n.r2;g++)for(let c=n.c1;c<=n.c2;c++)i+=x[g][c];return i}function I(){const[x,n]=C(0),[i,g]=C(S[0].matrix),[c,d]=C(S[0].rect),[b,t]=C(null),[u,r]=C(0),[p,m]=C(!1),f=R(()=>L(i,c),[i,c]),h=f[Math.min(u,f.length-1)],l=u>=f.length-1,s=!p&&h.phase==="build";E(()=>{if(!p)return;if(l){m(!1);return}const a=setTimeout(()=>r(y=>y+1),M);return()=>clearTimeout(a)},[p,l,u]);const P=a=>{n(a),g(S[a].matrix),d(S[a].rect),t(null),r(0),m(!1)},N=(a,y)=>{s&&(b?(d({r1:Math.min(b.row,a),c1:Math.min(b.col,y),r2:Math.max(b.row,a),c2:Math.max(b.col,y)}),t(null),r(0)):(t({row:a,col:y}),d(null)))},v=c?_(i,c):null;return o("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:S.map((a,y)=>e("button",{onClick:()=>P(y),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",y===x?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:a.label},a.label))}),e("p",{className:"text-xs text-slate-500",children:c?`Прямоугольник (${c.r1},${c.c1})…(${c.r2},${c.c2}). Кликни по матрице (на фазе построения), чтобы выбрать новый.`:b?`Угол (${b.row},${b.col}) выбран — кликни вторую клетку.`:"Кликни две клетки матрицы, чтобы задать прямоугольник запроса."}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:e(q,{matrix:i,step:h,selection:c,pending:b,onCellClick:s?N:void 0})}),o("div",{className:"space-y-2",children:[e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:h.description}),h.phase==="query"&&h.done&&v!==null&&o("p",{className:"text-sm text-emerald-400",children:["Проверка прямым перебором: сумма = ",v," ",v===h.runningSum?"✓ совпало":"✗ расхождение"]})]}),o("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{r(0),m(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{m(!1),r(a=>Math.max(0,a-1))},disabled:u===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>m(a=>!a),disabled:l,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:p?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{m(!1),r(a=>Math.min(f.length-1,a+1))},disabled:l,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),o("span",{className:"ml-auto font-mono text-xs text-slate-500",children:[h.phase==="build"?"построение":"запрос"," · шаг"," ",u+1," / ",f.length]})]}),e("input",{type:"range",min:0,max:f.length-1,value:u,onChange:a=>{m(!1),r(Number(a.target.value))},className:"w-full accent-indigo-500"})]})}function A(){return o("div",{className:"space-y-4 text-slate-300",children:[o("p",{children:[e("strong",{className:"text-white",children:"Префиксные суммы (Prefix Sums)"})," — приём, в котором заранее считают «накопленные суммы», чтобы потом отвечать на запросы суммы на отрезке (или в прямоугольнике) за"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(1)"}),". Предподсчёт делается один раз, а запросов может быть сколько угодно."]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Сначала одномерный случай"}),o("p",{className:"mt-2",children:["Для массива строим"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"P[i] = a[0] + … + a[i−1]"})," ","(с нулём в начале). Тогда сумма на отрезке"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"[l, r]"})," — это просто"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"P[r+1] − P[l]"}),", без цикла."]})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Задача: Range Sum Query 2D (LeetCode 304)"}),o("p",{className:"mt-2",children:["Та же идея в двух измерениях. Строим таблицу"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"P"})," размера"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"(m+1)×(n+1)"}),", где"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"P[i][j]"})," — сумма всего прямоугольника от угла ",e("code",{className:"rounded bg-slate-800 px-1",children:"(0,0)"})," ","до ",e("code",{className:"rounded bg-slate-800 px-1",children:"(i−1,j−1)"}),"."]})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Построение таблицы"}),e("p",{className:"mt-2",children:"Каждая клетка собирается из трёх соседних:"}),e("pre",{className:"mt-2 overflow-x-auto rounded bg-slate-800 p-3 text-xs text-slate-200",children:`P[i][j] = matrix[i-1][j-1]
        + P[i-1][j]      // сумма сверху
        + P[i][j-1]      // сумма слева
        - P[i-1][j-1]    // угол посчитан дважды`}),e("p",{className:"mt-2",children:"Лишние нулевые строка и столбец сверху/слева убирают проверки границ — поэтому таблица на единицу больше матрицы по каждой стороне."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Запрос суммы — включения-исключения"}),o("p",{className:"mt-2",children:["Сумма прямоугольника"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"(r1,c1)…(r2,c2)"})," ","берётся четырьмя обращениями к ",e("code",{className:"rounded bg-slate-800 px-1",children:"P"}),":"]}),e("pre",{className:"mt-2 overflow-x-auto rounded bg-slate-800 p-3 text-xs text-slate-200",children:`sum = P[r2+1][c2+1]   // весь блок
    - P[r1][c2+1]     // минус полоса сверху
    - P[r2+1][c1]     // минус полоса слева
    + P[r1][c1]       // угол вычли дважды — вернуть`}),e("p",{className:"mt-2",children:"Это и есть формула включений-исключений: вычли две полосы, их общий угол ушёл в минус дважды, поэтому его прибавляем обратно."})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Сложность"}),o("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[o("li",{children:["Предподсчёт —"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(m·n)"}),", память —"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(m·n)"}),"."]}),o("li",{children:["Каждый запрос — ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(1)"})," ","(против ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(площади)"})," у наивного перебора)."]})]})]}),o("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где ещё применяется приём"}),e("p",{className:"mt-2",children:"Subarray Sum Equals K, Range Sum Query 1D, разностный массив (difference array) для пакетных прибавлений на отрезках, подсчёт подмассивов с заданной суммой. Двумерный вариант — основа для задач на суммы подматриц и «максимальную сумму прямоугольника»."})]})]})}const Q=`// Префиксные суммы по матрице — задача LeetCode 304 «Range Sum Query 2D».
//
// Нужно много раз отвечать на вопрос «какова сумма чисел в прямоугольнике
// матрицы от (r1,c1) до (r2,c2)?». Наивно каждый запрос — O(площади). Приём
// префиксных сумм делает предподсчёт за O(m·n) один раз, после чего любой
// запрос — за O(1).
//
// Идея: строим таблицу P размера (m+1)×(n+1), где P[i][j] — сумма всех чисел
// в прямоугольнике от левого верхнего угла (0,0) до (i-1,j-1) включительно.
// Тогда сумма произвольного прямоугольника берётся по формуле включений-
// исключений (вычитаем верхнюю и левую полосы, возвращаем дважды вычтенный угол).
//
// Чистый, «боевой» вариант. Рядом prefixSum.ts — тот же алгоритм, но с записью
// каждого шага для пошагового плеера.

export class NumMatrix {
  private prefix: number[][];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = m > 0 ? matrix[0].length : 0;

    // Лишние строка и столбец из нулей сверху/слева убирают проверки границ.
    this.prefix = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        this.prefix[i][j] =
          matrix[i - 1][j - 1] + // само число
          this.prefix[i - 1][j] + // сумма сверху
          this.prefix[i][j - 1] - // сумма слева
          this.prefix[i - 1][j - 1]; // дважды учтённый угол — вычитаем
      }
    }
  }

  /** Сумма прямоугольника (r1,c1)…(r2,c2) включительно — за O(1). */
  sumRegion(r1: number, c1: number, r2: number, c2: number): number {
    const P = this.prefix;
    return (
      P[r2 + 1][c2 + 1] - // весь блок от (0,0) до (r2,c2)
      P[r1][c2 + 1] - // минус полоса сверху
      P[r2 + 1][c1] + // минус полоса слева
      P[r1][c1] // плюс дважды вычтенный угол
    );
  }
}
`,O=`// Префиксные суммы по матрице (LeetCode 304) — тот же приём, что в solution.ts,
// но с записью КАЖДОГО шага для пошагового плеера. Демо состоит из двух фаз:
//   1) build — строим таблицу префиксных сумм P, клетка за клеткой;
//   2) query — отвечаем на запрос суммы прямоугольника по включениям-исключениям.
//
// Логика отделена от отрисовки: трейсер отдаёт массив шагов, а плеер их листает.

/** Координата клетки в какой-либо сетке (матрице или таблице P). */
export interface Cell {
  row: number;
  col: number;
}

/** Запрос: прямоугольник матрицы (0-индексация, обе границы включительно). */
export interface Rect {
  r1: number;
  c1: number;
  r2: number;
  c2: number;
}

/** Один член формулы включений-исключений на фазе запроса. */
export interface QueryTerm {
  /** Знак: +1 добавляем, −1 вычитаем. */
  sign: 1 | -1;
  /** Клетка таблицы P, чьё значение берём. */
  prefixCell: Cell;
  /** Прямоугольник матрицы (0,0)…(row-1,col-1), который накрывает этот P. */
  covers: Rect | null;
  /** Значение P в этой клетке. */
  value: number;
}

/** Один «снимок» состояния алгоритма — кадр визуализации. */
export interface PrefixStep {
  /** Текущая фаза. */
  phase: "build" | "query";
  /** Снимок таблицы P: \`null\` — клетка ещё не вычислена. */
  prefix: (number | null)[][];

  // --- поля фазы build ---
  /** Клетка P, которую вычисляем на этом шаге. */
  buildCell: Cell | null;
  /** Клетки-слагаемые: сверху, слева, угол (diag) и исходная клетка матрицы. */
  contributors: {
    top: Cell;
    left: Cell;
    diag: Cell;
    source: Cell;
  } | null;

  // --- поля фазы query ---
  /** Запрашиваемый прямоугольник матрицы. */
  rect: Rect | null;
  /** Все члены формулы (для показа справа). */
  terms: QueryTerm[] | null;
  /** Индекс активного члена на этом шаге (−1 — итог). */
  activeTerm: number;
  /** Накопленная сумма после применения активного члена. */
  runningSum: number;

  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном кадре. */
  done: boolean;
}

/** Глубокая копия таблицы P для снимка кадра. */
function snapshot(p: (number | null)[][]): (number | null)[][] {
  return p.map((row) => [...row]);
}

/**
 * Прогоняет приём и возвращает ПОЛНУЮ историю шагов: сначала построение
 * таблицы P, затем (если задан \`rect\`) разбор запроса суммы прямоугольника.
 */
export function tracePrefixSum(
  matrix: number[][],
  rect: Rect | null,
): PrefixStep[] {
  const steps: PrefixStep[] = [];
  const m = matrix.length;
  const n = m > 0 ? matrix[0].length : 0;

  // P размера (m+1)×(n+1): нулевые строка и столбец уже «вычислены» (= 0),
  // остальное — null, пока не дойдём.
  const P: (number | null)[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 || j === 0 ? 0 : null)),
  );

  const baseQuery = {
    rect: null,
    terms: null,
    activeTerm: -1,
    runningSum: 0,
  } as const;

  // Стартовый кадр фазы build.
  steps.push({
    phase: "build",
    prefix: snapshot(P),
    buildCell: null,
    contributors: null,
    ...baseQuery,
    description:
      \`Строим таблицу префиксов P размера \${m + 1}×\${n + 1}. \` +
      "Нулевые строка и столбец — это «пустые» суммы (0), они убирают проверки границ. " +
      "Каждую внутреннюю клетку считаем по формуле: число + сверху + слева − угол.",
    done: false,
  });

  // --- Фаза build ---
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const top = P[i - 1][j] as number;
      const left = P[i][j - 1] as number;
      const diag = P[i - 1][j - 1] as number;
      const src = matrix[i - 1][j - 1];
      P[i][j] = src + top + left - diag;

      steps.push({
        phase: "build",
        prefix: snapshot(P),
        buildCell: { row: i, col: j },
        contributors: {
          top: { row: i - 1, col: j },
          left: { row: i, col: j - 1 },
          diag: { row: i - 1, col: j - 1 },
          source: { row: i - 1, col: j - 1 },
        },
        ...baseQuery,
        description:
          \`P[\${i}][\${j}] = \${src} (matrix[\${i - 1}][\${j - 1}]) + \${top} (сверху) + \` +
          \`\${left} (слева) − \${diag} (угол) = \${P[i][j]}.\`,
        done: false,
      });
    }
  }

  // Если запрос не задан — на построении и заканчиваем.
  if (!rect) {
    steps[steps.length - 1] = {
      ...steps[steps.length - 1],
      done: true,
      description:
        steps[steps.length - 1].description +
        " Таблица готова — теперь любой запрос суммы считается за O(1).",
    };
    return steps;
  }

  // --- Фаза query: сумма прямоугольника по включениям-исключениям ---
  const { r1, c1, r2, c2 } = rect;
  const terms: QueryTerm[] = [
    {
      sign: 1,
      prefixCell: { row: r2 + 1, col: c2 + 1 },
      covers: { r1: 0, c1: 0, r2, c2 },
      value: P[r2 + 1][c2 + 1] as number,
    },
    {
      sign: -1,
      prefixCell: { row: r1, col: c2 + 1 },
      covers: r1 > 0 ? { r1: 0, c1: 0, r2: r1 - 1, c2 } : null,
      value: P[r1][c2 + 1] as number,
    },
    {
      sign: -1,
      prefixCell: { row: r2 + 1, col: c1 },
      covers: c1 > 0 ? { r1: 0, c1: 0, r2, c2: c1 - 1 } : null,
      value: P[r2 + 1][c1] as number,
    },
    {
      sign: 1,
      prefixCell: { row: r1, col: c1 },
      covers: r1 > 0 && c1 > 0 ? { r1: 0, c1: 0, r2: r1 - 1, c2: c1 - 1 } : null,
      value: P[r1][c1] as number,
    },
  ];

  const termText = [
    \`+P[\${r2 + 1}][\${c2 + 1}] = \${terms[0].value}: берём весь блок от угла до (\${r2},\${c2}).\`,
    \`−P[\${r1}][\${c2 + 1}] = \${terms[1].value}: вычитаем полосу сверху над прямоугольником.\`,
    \`−P[\${r2 + 1}][\${c1}] = \${terms[2].value}: вычитаем полосу слева от прямоугольника.\`,
    \`+P[\${r1}][\${c1}] = \${terms[3].value}: верхне-левый угол вычли дважды — возвращаем его.\`,
  ];

  // Вводный кадр запроса.
  steps.push({
    phase: "query",
    prefix: snapshot(P),
    buildCell: null,
    contributors: null,
    rect,
    terms,
    activeTerm: -1,
    runningSum: 0,
    description:
      \`Запрос: сумма прямоугольника (\${r1},\${c1})…(\${r2},\${c2}). \` +
      "Считаем её четырьмя обращениями к P по формуле включений-исключений.",
    done: false,
  });

  let running = 0;
  terms.forEach((term, k) => {
    running += term.sign * term.value;
    const isLast = k === terms.length - 1;
    steps.push({
      phase: "query",
      prefix: snapshot(P),
      buildCell: null,
      contributors: null,
      rect,
      terms,
      activeTerm: k,
      runningSum: running,
      description: isLast
        ? \`\${termText[k]} Итог: сумма прямоугольника = \${running}.\`
        : \`\${termText[k]} Накоплено: \${running}.\`,
      done: isLast,
    });
  });

  return steps;
}
`,D=`import { motion } from "framer-motion";
import type { Cell, PrefixStep, Rect } from "./prefixSum";

const CELL =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border text-[11px] font-semibold tabular-nums";

const eqCell = (a: Cell, r: number, c: number) => a.row === r && a.col === c;
const inRect = (rect: Rect | null, r: number, c: number) =>
  !!rect && r >= rect.r1 && r <= rect.r2 && c >= rect.c1 && c <= rect.c2;

/**
 * Чистая отрисовка ОДНОГО кадра. Слева — исходная матрица, справа — таблица
 * префиксов P. На фазе build подсвечиваются текущая клетка P и её слагаемые;
 * на фазе query — запрашиваемый прямоугольник и активный член формулы.
 * Матрица кликабельна (когда передан \`onCellClick\`) — так выбирают прямоугольник.
 */
export function MatrixVisualizer({
  matrix,
  step,
  selection,
  pending,
  onCellClick,
}: {
  matrix: number[][];
  step: PrefixStep;
  selection: Rect | null;
  pending: Cell | null;
  onCellClick?: (row: number, col: number) => void;
}) {
  const activeTerm =
    step.phase === "query" && step.terms && step.activeTerm >= 0
      ? step.terms[step.activeTerm]
      : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-8">
        {/* Матрица. */}
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
            матрица{onCellClick ? " · кликни две клетки = углы" : ""}
          </p>
          <div className="inline-flex flex-col gap-1">
            {matrix.map((row, r) => (
              <div key={r} className="flex gap-1">
                {row.map((value, c) => {
                  const isSource =
                    step.contributors && eqCell(step.contributors.source, r, c);
                  const inQuery = inRect(step.rect, r, c);
                  const inTerm = inRect(activeTerm?.covers ?? null, r, c);
                  const isPending = pending?.row === r && pending?.col === c;
                  const inSelection = inRect(selection, r, c);

                  let tone =
                    "border-slate-700 bg-slate-800 text-slate-200";
                  if (isSource)
                    tone = "border-emerald-400 bg-emerald-500/25 text-white";
                  else if (inTerm)
                    tone =
                      activeTerm!.sign === 1
                        ? "border-emerald-500 bg-emerald-500/20 text-emerald-100"
                        : "border-rose-500 bg-rose-500/20 text-rose-100";
                  else if (inQuery || inSelection)
                    tone = "border-indigo-500 bg-indigo-500/15 text-white";

                  return (
                    <motion.button
                      key={c}
                      type="button"
                      disabled={!onCellClick}
                      onClick={() => onCellClick?.(r, c)}
                      className={[
                        CELL,
                        tone,
                        isPending ? "ring-2 ring-amber-400" : "",
                        onCellClick ? "cursor-pointer hover:brightness-125" : "",
                      ].join(" ")}
                      animate={isSource ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value}
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Таблица префиксов P. */}
        <div>
          <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
            префиксы P (на 1 больше по каждой стороне)
          </p>
          <div className="inline-flex flex-col gap-1">
            {step.prefix.map((row, i) => (
              <div key={i} className="flex gap-1">
                {row.map((value, j) => {
                  const isBuild =
                    step.buildCell && eqCell(step.buildCell, i, j);
                  const ct = step.contributors;
                  const isTop = ct && eqCell(ct.top, i, j);
                  const isLeft = ct && eqCell(ct.left, i, j);
                  const isDiag = ct && eqCell(ct.diag, i, j);
                  const padding = i === 0 || j === 0;

                  // Член запроса, чья клетка P здесь.
                  const term = step.terms?.find((t) =>
                    eqCell(t.prefixCell, i, j),
                  );
                  const isActiveTermCell =
                    activeTerm && eqCell(activeTerm.prefixCell, i, j);

                  let tone = padding
                    ? "border-slate-800 bg-slate-900 text-slate-600"
                    : value === null
                      ? "border-dashed border-slate-700 bg-slate-900 text-slate-700"
                      : "border-slate-700 bg-slate-800 text-slate-300";
                  if (isBuild)
                    tone = "border-amber-400 bg-amber-500/25 text-white";
                  else if (isDiag)
                    tone = "border-rose-500 bg-rose-500/20 text-rose-100";
                  else if (isTop || isLeft)
                    tone = "border-sky-500 bg-sky-500/20 text-sky-100";
                  else if (isActiveTermCell)
                    tone =
                      activeTerm!.sign === 1
                        ? "border-emerald-400 bg-emerald-500/25 text-white"
                        : "border-rose-400 bg-rose-500/25 text-white";
                  else if (term)
                    tone = "border-indigo-600 bg-indigo-900/40 text-indigo-200";

                  return (
                    <motion.div
                      key={j}
                      className={[CELL, tone].join(" ")}
                      animate={isBuild ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {value === null ? "·" : value}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Формула запроса с накоплением (только на фазе query). */}
      {step.phase === "query" && step.terms && (
        <div className="rounded-md bg-slate-800/60 px-4 py-3">
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
            {step.terms.map((t, k) => (
              <span
                key={k}
                className={[
                  "rounded px-2 py-1",
                  k === step.activeTerm
                    ? t.sign === 1
                      ? "bg-emerald-600 text-white"
                      : "bg-rose-600 text-white"
                    : k < step.activeTerm
                      ? "bg-slate-700 text-slate-300"
                      : "bg-slate-900 text-slate-500",
                ].join(" ")}
              >
                {t.sign === 1 ? "+" : "−"}
                {t.value}
              </span>
            ))}
            <span className="ml-2 text-slate-400">=</span>
            <span className="rounded bg-indigo-600 px-2 py-1 font-bold text-white">
              {step.runningSum}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
`,V=`import { useEffect, useMemo, useState } from "react";
import { tracePrefixSum, type Cell, type Rect } from "./prefixSum";
import { MatrixVisualizer } from "./MatrixVisualizer";

// Матрицы-примеры. Первая — каноническая из LeetCode 304.
const PRESETS: { label: string; matrix: number[][]; rect: Rect }[] = [
  {
    label: "LeetCode 304 (5×5)",
    matrix: [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    rect: { r1: 2, c1: 1, r2: 4, c2: 3 },
  },
  {
    label: "С отрицательными (3×4)",
    matrix: [
      [1, -2, 3, 0],
      [-4, 5, -6, 7],
      [8, -9, 1, 2],
    ],
    rect: { r1: 0, c1: 1, r2: 2, c2: 2 },
  },
  {
    label: "Однородная (4×4)",
    matrix: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    rect: { r1: 1, c1: 1, r2: 2, c2: 2 },
  },
];

const PLAY_INTERVAL = 700;

// Прямая проверка ответа простым двойным циклом — чтобы сверить с приёмом.
function bruteSum(matrix: number[][], rect: Rect): number {
  let s = 0;
  for (let r = rect.r1; r <= rect.r2; r++)
    for (let c = rect.c1; c <= rect.c2; c++) s += matrix[r][c];
  return s;
}

export function Demo() {
  const [preset, setPreset] = useState(0);
  const [matrix, setMatrix] = useState<number[][]>(PRESETS[0].matrix);
  const [rect, setRect] = useState<Rect | null>(PRESETS[0].rect);
  const [pending, setPending] = useState<Cell | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // История шагов: построение P + (если выбран прямоугольник) разбор запроса.
  const steps = useMemo(() => tracePrefixSum(matrix, rect), [matrix, rect]);
  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const atEnd = stepIndex >= steps.length - 1;

  // Кликаем по клеткам матрицы только когда плеер стоит на месте (на построении
  // или в самом начале) — иначе выбор мешал бы анимации запроса.
  const canSelect = !playing && step.phase === "build";

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStepIndex((i) => i + 1), PLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, atEnd, stepIndex]);

  const loadPreset = (idx: number) => {
    setPreset(idx);
    setMatrix(PRESETS[idx].matrix);
    setRect(PRESETS[idx].rect);
    setPending(null);
    setStepIndex(0);
    setPlaying(false);
  };

  // Выбор прямоугольника: первый клик — один угол, второй — противоположный.
  const handleCellClick = (row: number, col: number) => {
    if (!canSelect) return;
    if (!pending) {
      setPending({ row, col });
      setRect(null);
    } else {
      setRect({
        r1: Math.min(pending.row, row),
        c1: Math.min(pending.col, col),
        r2: Math.max(pending.row, row),
        c2: Math.max(pending.col, col),
      });
      setPending(null);
      setStepIndex(0);
    }
  };

  const answer = rect ? bruteSum(matrix, rect) : null;

  return (
    <div className="space-y-6">
      {/* Выбор матрицы. */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p, idx) => (
          <button
            key={p.label}
            onClick={() => loadPreset(idx)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              idx === preset
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Подсказка по выбору. */}
      <p className="text-xs text-slate-500">
        {rect
          ? \`Прямоугольник (\${rect.r1},\${rect.c1})…(\${rect.r2},\${rect.c2}). \` +
            "Кликни по матрице (на фазе построения), чтобы выбрать новый."
          : pending
            ? \`Угол (\${pending.row},\${pending.col}) выбран — кликни вторую клетку.\`
            : "Кликни две клетки матрицы, чтобы задать прямоугольник запроса."}
      </p>

      {/* Визуализация текущего шага. */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <MatrixVisualizer
          matrix={matrix}
          step={step}
          selection={rect}
          pending={pending}
          onCellClick={canSelect ? handleCellClick : undefined}
        />
      </div>

      {/* Пояснение шага + сверка ответа. */}
      <div className="space-y-2">
        <p className="min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300">
          {step.description}
        </p>
        {step.phase === "query" && step.done && answer !== null && (
          <p className="text-sm text-emerald-400">
            Проверка прямым перебором: сумма = {answer}{" "}
            {answer === step.runningSum ? "✓ совпало" : "✗ расхождение"}
          </p>
        )}
      </div>

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
          {step.phase === "build" ? "построение" : "запрос"} · шаг{" "}
          {stepIndex + 1} / {steps.length}
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
`,K={meta:{id:"prefix-sum",title:"Префиксные суммы",category:"algorithmic",summary:"Предподсчёт накопленных сумм: сумма любого прямоугольника матрицы — за O(1) по формуле включений-исключений."},Demo:I,Explanation:A,code:[{filename:"solution.ts",language:"typescript",source:Q},{filename:"prefixSum.ts",language:"typescript",source:O},{filename:"MatrixVisualizer.tsx",language:"tsx",source:D},{filename:"Demo.tsx",language:"tsx",source:V}]};export{K as default};
