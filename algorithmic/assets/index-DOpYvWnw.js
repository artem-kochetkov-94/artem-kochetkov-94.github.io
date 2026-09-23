import{m as g}from"./proxy-CG6_1RCV.js";import{a as s,_ as e}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as f,d as w,e as S}from"./_virtual_mf___mfe_internal__algorithmic__loadShare__react__loadShare__.js-C3muBDPt.js";function I(c){const r=[],m=c.length,o=new Array(m).fill(null);let t=0,l=m-1,a=m-1;for(r.push({left:t,right:l,writeIndex:a,result:[...o],picked:null,done:m===0,description:m===0?"Массив пуст — возвращать нечего.":`Ставим указатели на концы: L = ${t}, R = ${l}. Результат заполняем справа налево, начиная с позиции ${a}.`});t<=l;){const i=c[t],d=c[l],u=i*i,p=d*d,h=a;let b,n;u>p?(o[h]=u,b="left",n=`|${i}|² = ${u} больше, чем |${d}|² = ${p}: кладём ${u} в позицию ${h} и сдвигаем L вправо.`,t++):(o[h]=p,b="right",n=`|${d}|² = ${p} не меньше, чем |${i}|² = ${u}: кладём ${p} в позицию ${h} и сдвигаем R влево.`,l--),a--;const x=t>l;r.push({left:t,right:l,writeIndex:a,result:[...o],picked:b,done:x,description:x?n+" Указатели сошлись — массив собран.":n})}return r}const v="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";function k({nums:c,step:r}){const m=r.picked?r.writeIndex+1:-1;return s("div",{className:"space-y-8 overflow-x-auto",children:[s("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"nums (отсортирован по возрастанию)"}),e("div",{className:"flex gap-2",children:c.map((o,t)=>{const l=t<r.left||t>r.right,a=t===r.left&&!r.done,i=t===r.right&&!r.done;return s("div",{className:"flex flex-col items-center",children:[e("div",{className:[v,l?"border-slate-800 bg-slate-900 text-slate-600":a||i?"border-indigo-500 bg-indigo-500/15 text-white":"border-slate-700 bg-slate-800 text-slate-200"].join(" "),children:o}),e("span",{className:"mt-1 text-[10px] text-slate-600",children:t}),s("div",{className:"mt-1 flex h-5 items-center gap-1",children:[a&&e(g.span,{layoutId:"ptr-left",className:"rounded bg-sky-500 px-1.5 text-[10px] font-bold text-white",children:"L"}),i&&e(g.span,{layoutId:"ptr-right",className:"rounded bg-rose-500 px-1.5 text-[10px] font-bold text-white",children:"R"})]})]},t)})})]}),s("div",{children:[e("p",{className:"mb-2 text-xs uppercase tracking-wider text-slate-500",children:"результат (квадраты по возрастанию)"}),e("div",{className:"flex gap-2",children:r.result.map((o,t)=>{const l=o!==null,a=t===m;return s("div",{className:"flex flex-col items-center",children:[e(g.div,{className:[v,a?"border-emerald-400 bg-emerald-500/20 text-white":l?"border-emerald-700 bg-emerald-900/30 text-emerald-200":"border-dashed border-slate-700 bg-slate-900 text-slate-700"].join(" "),animate:a?{scale:[1,1.18,1]}:{scale:1},transition:{duration:.35},children:l?o:"·"}),e("span",{className:"mt-1 text-[10px] text-slate-600",children:t})]},t)})})]})]})}const N=[{label:"−4 −1 0 3 10",nums:[-4,-1,0,3,10]},{label:"−7 −3 2 3 11",nums:[-7,-3,2,3,11]},{label:"−5 −2 −1",nums:[-5,-2,-1]},{label:"1 2 3 4",nums:[1,2,3,4]}],P=900;function A(){const[c,r]=f(N[0].nums),[m,o]=f(N[0].nums.join(", ")),[t,l]=f(0),[a,i]=f(!1),d=w(()=>I(c),[c]),u=d[Math.min(t,d.length-1)],p=t>=d.length-1;S(()=>{if(!a)return;if(p){i(!1);return}const n=setTimeout(()=>l(x=>x+1),P);return()=>clearTimeout(n)},[a,p,t]);const h=n=>{r(n),o(n.join(", ")),l(0),i(!1)},b=()=>{const n=m.split(/[\s,]+/).map(Number).filter(x=>Number.isFinite(x)).sort((x,y)=>x-y);n.length>0&&h(n)};return s("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:N.map(n=>e("button",{onClick:()=>h(n.nums),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",n.nums.join(",")===c.join(",")?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:n.label},n.label))}),s("div",{className:"flex flex-wrap items-center gap-2",children:[e("input",{value:m,onChange:n=>o(n.target.value),onKeyDown:n=>n.key==="Enter"&&b(),placeholder:"свои числа через запятую",className:"w-64 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"}),e("button",{onClick:b,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"Применить"}),e("span",{className:"text-xs text-slate-500",children:"вход автоматически сортируется по возрастанию"})]}),e("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-6",children:e(k,{nums:c,step:u})}),e("p",{className:"min-h-[2.5rem] rounded-md bg-slate-800/60 px-4 py-2 text-sm text-slate-300",children:u.description}),s("div",{className:"flex flex-wrap items-center gap-3",children:[e("button",{onClick:()=>{l(0),i(!1)},className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white",children:"⏮ Сброс"}),e("button",{onClick:()=>{i(!1),l(n=>Math.max(0,n-1))},disabled:t===0,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>i(n=>!n),disabled:p,className:"rounded-md border border-indigo-500 bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-40",children:a?"⏸ Пауза":"▶ Авто"}),e("button",{onClick:()=>{i(!1),l(n=>Math.min(d.length-1,n+1))},disabled:p,className:"rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white disabled:opacity-40",children:"Вперёд ▶"}),s("span",{className:"ml-auto font-mono text-xs text-slate-500",children:["шаг ",t+1," / ",d.length]})]}),e("input",{type:"range",min:0,max:d.length-1,value:t,onChange:n=>{i(!1),l(Number(n.target.value))},className:"w-full accent-indigo-500"})]})}function $(){return s("div",{className:"space-y-4 text-slate-300",children:[s("p",{children:[e("strong",{className:"text-white",children:"Два указателя (Two Pointers)"})," — алгоритмический приём, в котором по структуре данных (чаще массиву или строке) одновременно движутся два индекса. Грамотно выбрав направление и правило их сдвига, многие задачи удаётся решить за один проход"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"})," и без дополнительной памяти — там, где «в лоб» получаются вложенные циклы"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n²)"})," или лишняя сортировка."]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Задача: Squares of a Sorted Array (LeetCode 977)"}),e("p",{className:"mt-2",children:"Дан массив, отсортированный по возрастанию (возможны отрицательные числа). Нужно вернуть массив квадратов его элементов, тоже отсортированный по возрастанию."}),s("p",{className:"mt-2",children:["Сложность в том, что после возведения в квадрат отрицательные числа «переворачивают» порядок: у ",e("code",{className:"rounded bg-slate-800 px-1",children:"[-4, -1, 0, 3, 10]"})," ","самый большой квадрат даёт ",e("strong",{children:"крайний левый"})," элемент (−4), а не правый."]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Идея решения"}),s("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[s("li",{children:["Наибольший квадрат всегда находится на одном из"," ",e("strong",{children:"краёв"})," массива — либо самое отрицательное число слева, либо самое большое справа."]}),s("li",{children:["Ставим указатель ",e("strong",{className:"text-sky-400",children:"L"})," в начало,"," ",e("strong",{className:"text-rose-400",children:"R"})," в конец и сравниваем их модули."]}),s("li",{children:["Больший по модулю элемент возводим в квадрат и кладём в"," ",e("strong",{children:"конец"})," результата, после чего сдвигаем соответствующий указатель внутрь."]}),e("li",{children:"Повторяем, пока указатели не сойдутся. Результат заполняется справа налево — сразу в нужном порядке."})]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Сложность"}),s("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[s("li",{children:["Время — ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"}),": каждый элемент просматривается ровно один раз (против"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n·log n)"})," у наивного «возвести и пересортировать»)."]}),s("li",{children:["Память — ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(n)"})," под ответ (или ",e("code",{className:"rounded bg-slate-800 px-1",children:"O(1)"})," ","сверх ответа)."]})]})]}),s("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где ещё применяется приём"}),e("p",{className:"mt-2",children:"Two Sum на отсортированном массиве, проверка палиндрома, разворот массива/строки на месте, слияние двух отсортированных массивов, удаление дубликатов, контейнер с наибольшей водой. Близкий родственник — «скользящее окно» (sliding window), где оба указателя двигаются в одну сторону."})]})]})}const E=`// Приём «Два указателя» на задаче LeetCode 977 — «Squares of a Sorted Array».
//
// Дано: массив \`nums\`, отсортированный по возрастанию (может содержать
// отрицательные числа). Нужно вернуть массив квадратов его элементов,
// тоже отсортированный по возрастанию.
//
// Наивное решение — возвести всё в квадрат и заново отсортировать: O(n·log n).
// Приём «два указателя» решает задачу за один проход O(n): самый большой
// квадрат всегда даёт один из КРАЯ массива (либо самое отрицательное число
// слева, либо самое большое справа), поэтому результат удобно заполнять
// с конца, на каждом шаге сравнивая модули крайних элементов.

/**
 * Один «снимок» состояния алгоритма — всё, что нужно UI, чтобы нарисовать
 * текущий кадр визуализации. Алгоритм специально отделён от отрисовки:
 * трейсер возвращает массив шагов, а плеер просто листает их вперёд/назад.
 */
export interface TwoPointersStep {
  /** Индекс левого указателя. */
  left: number;
  /** Индекс правого указателя. */
  right: number;
  /** Позиция в результате, которую заполним следующей (идём с конца). */
  writeIndex: number;
  /** Снимок массива результата: \`null\` — ячейка ещё не заполнена. */
  result: (number | null)[];
  /** Какой указатель «победил» в сравнении на этом шаге. */
  picked: "left" | "right" | null;
  /** Человекочитаемое пояснение шага. */
  description: string;
  /** \`true\` на финальном шаге, когда указатели разошлись. */
  done: boolean;
}

/**
 * Прогоняет алгоритм и возвращает ПОЛНУЮ историю его шагов.
 * Это и есть «ядро» паттерна: чистая функция, без React и без сайд-эффектов —
 * её легко протестировать и переиспользовать.
 */
export function squaresOfSortedArray(nums: number[]): TwoPointersStep[] {
  const steps: TwoPointersStep[] = [];
  const n = nums.length;
  const result: (number | null)[] = new Array(n).fill(null);

  let left = 0;
  let right = n - 1;
  let writeIndex = n - 1;

  // Стартовый кадр: указатели на концах, результат пуст.
  steps.push({
    left,
    right,
    writeIndex,
    result: [...result],
    picked: null,
    done: n === 0,
    description:
      n === 0
        ? "Массив пуст — возвращать нечего."
        : \`Ставим указатели на концы: L = \${left}, R = \${right}. \` +
          \`Результат заполняем справа налево, начиная с позиции \${writeIndex}.\`,
  });

  // Пока указатели не пересеклись, берём больший по модулю крайний элемент:
  // после возведения в квадрат он и есть наибольший из оставшихся.
  while (left <= right) {
    const leftVal = nums[left];
    const rightVal = nums[right];
    const leftSq = leftVal * leftVal;
    const rightSq = rightVal * rightVal;
    const placeAt = writeIndex;

    let picked: "left" | "right";
    let description: string;

    if (leftSq > rightSq) {
      // Слева модуль больше — его квадрат и будет максимальным.
      result[placeAt] = leftSq;
      picked = "left";
      description =
        \`|\${leftVal}|² = \${leftSq} больше, чем |\${rightVal}|² = \${rightSq}: \` +
        \`кладём \${leftSq} в позицию \${placeAt} и сдвигаем L вправо.\`;
      left++;
    } else {
      // Справа модуль не меньше — берём его (заодно покрывает равенство).
      result[placeAt] = rightSq;
      picked = "right";
      description =
        \`|\${rightVal}|² = \${rightSq} не меньше, чем |\${leftVal}|² = \${leftSq}: \` +
        \`кладём \${rightSq} в позицию \${placeAt} и сдвигаем R влево.\`;
      right--;
    }

    writeIndex--;
    const done = left > right;

    steps.push({
      left,
      right,
      writeIndex,
      result: [...result],
      picked,
      done,
      description: done
        ? description + " Указатели сошлись — массив собран."
        : description,
    });
  }

  return steps;
}
`,L=`import { motion } from "framer-motion";
import type { TwoPointersStep } from "./twoPointers";

// Общий стиль ячейки массива (вход и результат).
const CELL =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-md border text-sm font-semibold";

/**
 * Чистая отрисовка ОДНОГО кадра алгоритма. Никакой логики — только текущий
 * шаг (\`step\`) превращается в картинку. Framer Motion плавно перемещает
 * маркеры L/R между ячейками (через общий \`layoutId\`) и «подсвечивает»
 * только что записанную клетку результата.
 */
export function ArrayVisualizer({
  nums,
  step,
}: {
  nums: number[];
  step: TwoPointersStep;
}) {
  // Какую ячейку результата заполнили на этом шаге (writeIndex уже сдвинут).
  const placedIndex = step.picked ? step.writeIndex + 1 : -1;

  return (
    <div className="space-y-8 overflow-x-auto">
      {/* Входной массив. */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
          nums (отсортирован по возрастанию)
        </p>
        <div className="flex gap-2">
          {nums.map((value, i) => {
            const consumed = i < step.left || i > step.right;
            const isLeft = i === step.left && !step.done;
            const isRight = i === step.right && !step.done;
            const isActive = isLeft || isRight;

            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={[
                    CELL,
                    consumed
                      ? "border-slate-800 bg-slate-900 text-slate-600"
                      : isActive
                        ? "border-indigo-500 bg-indigo-500/15 text-white"
                        : "border-slate-700 bg-slate-800 text-slate-200",
                  ].join(" ")}
                >
                  {value}
                </div>
                <span className="mt-1 text-[10px] text-slate-600">{i}</span>

                {/* Дорожка для маркеров под ячейкой. */}
                <div className="mt-1 flex h-5 items-center gap-1">
                  {isLeft && (
                    <motion.span
                      layoutId="ptr-left"
                      className="rounded bg-sky-500 px-1.5 text-[10px] font-bold text-white"
                    >
                      L
                    </motion.span>
                  )}
                  {isRight && (
                    <motion.span
                      layoutId="ptr-right"
                      className="rounded bg-rose-500 px-1.5 text-[10px] font-bold text-white"
                    >
                      R
                    </motion.span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Массив результата. */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-wider text-slate-500">
          результат (квадраты по возрастанию)
        </p>
        <div className="flex gap-2">
          {step.result.map((value, i) => {
            const filled = value !== null;
            const justPlaced = i === placedIndex;

            return (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  className={[
                    CELL,
                    justPlaced
                      ? "border-emerald-400 bg-emerald-500/20 text-white"
                      : filled
                        ? "border-emerald-700 bg-emerald-900/30 text-emerald-200"
                        : "border-dashed border-slate-700 bg-slate-900 text-slate-700",
                  ].join(" ")}
                  animate={justPlaced ? { scale: [1, 1.18, 1] } : { scale: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {filled ? value : "·"}
                </motion.div>
                <span className="mt-1 text-[10px] text-slate-600">{i}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
`,C=`import { useEffect, useMemo, useState } from "react";
import { squaresOfSortedArray } from "./twoPointers";
import { ArrayVisualizer } from "./ArrayVisualizer";

// Готовые примеры. Главное — наличие отрицательных чисел: именно из-за них
// наивная сортировка и проигрывает приёму «два указателя».
const PRESETS: { label: string; nums: number[] }[] = [
  { label: "−4 −1 0 3 10", nums: [-4, -1, 0, 3, 10] },
  { label: "−7 −3 2 3 11", nums: [-7, -3, 2, 3, 11] },
  { label: "−5 −2 −1", nums: [-5, -2, -1] },
  { label: "1 2 3 4", nums: [1, 2, 3, 4] },
];

const PLAY_INTERVAL = 900;

export function Demo() {
  const [nums, setNums] = useState<number[]>(PRESETS[0].nums);
  const [draft, setDraft] = useState(PRESETS[0].nums.join(", "));
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Вся история шагов считается один раз на каждый входной массив.
  const steps = useMemo(() => squaresOfSortedArray(nums), [nums]);
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

  const load = (next: number[]) => {
    setNums(next);
    setDraft(next.join(", "));
    setStepIndex(0);
    setPlaying(false);
  };

  // Свой ввод: парсим числа и сортируем — приём требует отсортированный вход.
  const applyDraft = () => {
    const parsed = draft
      .split(/[\\s,]+/)
      .map(Number)
      .filter((x) => Number.isFinite(x))
      .sort((a, b) => a - b);
    if (parsed.length > 0) load(parsed);
  };

  return (
    <div className="space-y-6">
      {/* Выбор примера. */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => load(preset.nums)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              preset.nums.join(",") === nums.join(",")
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Свой массив. */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && applyDraft()}
          placeholder="свои числа через запятую"
          className="w-64 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-200 outline-none focus:border-indigo-500"
        />
        <button
          onClick={applyDraft}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-slate-500 hover:text-white"
        >
          Применить
        </button>
        <span className="text-xs text-slate-500">
          вход автоматически сортируется по возрастанию
        </span>
      </div>

      {/* Сама визуализация текущего шага. */}
      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
        <ArrayVisualizer nums={nums} step={step} />
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
`,q={meta:{id:"two-pointers",title:"Два указателя",category:"algorithmic",summary:"Два индекса идут по массиву навстречу друг другу — решает задачу за один проход без вложенных циклов."},Demo:A,Explanation:$,code:[{filename:"twoPointers.ts",language:"typescript",source:E},{filename:"ArrayVisualizer.tsx",language:"tsx",source:L},{filename:"Demo.tsx",language:"tsx",source:C}]};export{q as default};
