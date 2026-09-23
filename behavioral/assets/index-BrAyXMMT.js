/* empty css              */import{a as t,_ as e}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as m,f as b,e as N}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react__loadShare__.js-CXaPNXH0.js";class S{stack;constructor(n){this.stack=n?[n]:[]}hasNext(){return this.stack.length>0}next(){const n=this.stack.pop();return n.right&&this.stack.push(n.right),n.left&&this.stack.push(n.left),n.value}}class I{stack=[];constructor(n){this.pushLeftSpine(n)}pushLeftSpine(n){for(;n;)this.stack.push(n),n=n.left}hasNext(){return this.stack.length>0}next(){const n=this.stack.pop();return this.pushLeftSpine(n.right),n.value}}class O{stack=[];current;lastVisited;constructor(n){this.current=n}hasNext(){return!!this.current||this.stack.length>0}next(){for(;this.current||this.stack.length>0;){if(this.current){this.stack.push(this.current),this.current=this.current.left;continue}const n=this.stack[this.stack.length-1];if(n.right&&this.lastVisited!==n.right)this.current=n.right;else return this.lastVisited=this.stack.pop(),n.value}throw new Error("Итератор исчерпан: вызов next() без hasNext()")}}class q{queue;constructor(n){this.queue=n?[n]:[]}hasNext(){return this.queue.length>0}next(){const n=this.queue.shift();return n.left&&this.queue.push(n.left),n.right&&this.queue.push(n.right),n.value}}class C{constructor(n){this.root=n}createIterator(n){switch(n){case"pre-order":return new S(this.root);case"in-order":return new I(this.root);case"post-order":return new O(this.root);case"level-order":return new q(this.root)}}toArray(n){const r=this.createIterator(n),o=[];for(;r.hasNext();)o.push(r.next());return o}}const B={value:"D",left:{value:"B",left:{value:"A"},right:{value:"C"}},right:{value:"F",left:{value:"E"},right:{value:"G"}}},A=new C(B),p={D:{x:50,y:40},B:{x:25,y:140},F:{x:75,y:140},A:{x:12.5,y:240},C:{x:37.5,y:240},E:{x:62.5,y:240},G:{x:87.5,y:240}},D=[["D","B"],["D","F"],["B","A"],["B","C"],["F","E"],["F","G"]],y=[{id:"pre-order",label:"Прямой (pre-order)",hint:"корень → левое → правое"},{id:"in-order",label:"Симметричный (in-order)",hint:"левое → корень → правое — для BST выходит по порядку"},{id:"post-order",label:"Обратный (post-order)",hint:"левое → правое → корень"},{id:"level-order",label:"По уровням (BFS)",hint:"сверху вниз, слева направо"}];function R(){const[s,n]=m("in-order"),[r,o]=m(0),[l,d]=m(!1),i=b(()=>A.toArray(s),[s]);N(()=>{o(0),d(!1)},[s]),N(()=>{if(!l)return;if(r>=i.length){d(!1);return}const a=setTimeout(()=>o(c=>c+1),800);return()=>clearTimeout(a)},[l,r,i.length]);const h=i.slice(0,r),f=r>0?i[r-1]:void 0,x=r>=i.length,u=y.find(a=>a.id===s);return t("div",{className:"space-y-5",children:[e("div",{className:"flex flex-wrap gap-2",children:y.map(a=>e("button",{onClick:()=>n(a.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",a.id===s?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:a.label},a.id))}),t("p",{className:"text-sm text-slate-400",children:["Одна коллекция, разные итераторы. Сейчас:"," ",e("span",{className:"text-slate-200",children:u.hint}),"."]}),t("div",{className:"relative h-[290px] rounded-xl border border-slate-800 bg-slate-900/40",children:[e("svg",{viewBox:"0 0 100 290",preserveAspectRatio:"none",className:"absolute inset-0 h-full w-full",children:D.map(([a,c])=>e("line",{x1:p[a].x,y1:p[a].y,x2:p[c].x,y2:p[c].y,stroke:"currentColor",strokeWidth:.4,className:"text-slate-700"},`${a}-${c}`))}),Object.entries(p).map(([a,c])=>{const w=a===f,v=h.includes(a),k=h.indexOf(a);return t("div",{className:"absolute -translate-x-1/2 -translate-y-1/2",style:{left:`${c.x}%`,top:c.y},children:[e("div",{className:["flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg font-semibold transition-colors duration-300",w?"border-indigo-400 bg-indigo-500 text-white shadow-lg shadow-indigo-500/30":v?"border-emerald-500/60 bg-emerald-600/20 text-emerald-300":"border-slate-700 bg-slate-800 text-slate-300"].join(" "),children:a}),v&&e("span",{className:"absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 text-[10px] font-bold text-slate-300 ring-1 ring-slate-700",children:k+1})]},a)})]}),t("div",{className:"flex items-center gap-2 text-sm",children:[e("span",{className:"text-slate-500",children:"next() →"}),e("div",{className:"flex flex-wrap gap-1.5",children:h.length===0?e("span",{className:"text-slate-600",children:"— ещё ни одного вызова —"}):h.map((a,c)=>e("span",{className:"rounded-md bg-slate-800 px-2 py-0.5 font-mono text-slate-200",children:a},c))})]}),t("div",{className:"flex flex-wrap items-center gap-2",children:[e("button",{onClick:()=>o(a=>Math.max(0,a-1)),disabled:r===0,className:"rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-40",children:"◀ Назад"}),e("button",{onClick:()=>{if(x){o(0);return}o(a=>Math.min(i.length,a+1))},className:"rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-slate-500",children:x?"⟲ Заново":"Вперёд ▶"}),e("button",{onClick:()=>d(a=>!a),disabled:x,className:"rounded-lg border border-indigo-500 bg-indigo-600/20 px-3 py-1.5 text-sm font-medium text-indigo-200 transition-colors hover:bg-indigo-600/30 disabled:cursor-not-allowed disabled:opacity-40",children:l?"❚❚ Пауза":"▶ Авто"}),t("span",{className:"ml-auto text-sm text-slate-500",children:["шаг ",r," / ",i.length]})]})]})}class E{constructor(n,r,o=1){this.from=n,this.to=r,this.step=o}[Symbol.iterator](){let n=this.from;const{to:r,step:o}=this;return{next(){if(n<r){const l=n;return n+=o,{value:l,done:!1}}return{value:void 0,done:!0}}}}}function*F(){let s=1;for(;;)yield s++}function*T(s,n){for(const r of s)yield n(r)}function*L(s,n){for(const r of s)n(r)&&(yield r)}function V(s,n){const r=[];if(n<=0)return r;for(const o of s)if(r.push(o),r.length>=n)break;return r}function _(){const[s,n]=m(5),{values:r,pulled:o}=b(()=>{let d=0;const i=T(F(),u=>(d++,u)),h=L(i,u=>u%2===1),f=T(h,u=>u*u);return{values:V(f,s),pulled:d}},[s]),l=b(()=>[...new E(0,10,2)],[]);return t("div",{className:"space-y-6",children:[t("div",{className:"space-y-2",children:[e("h3",{className:"text-sm font-semibold text-white",children:"Свой итерируемый объект"}),t("p",{className:"text-sm text-slate-400",children:["Класс ",e("code",{className:"rounded bg-slate-800 px-1",children:"Range"})," ","реализует ",e("code",{className:"rounded bg-slate-800 px-1",children:"[Symbol.iterator]"})," ","— и сразу работает со spread, ",e("code",{className:"rounded bg-slate-800 px-1",children:"for…of"}),","," ","деструктуризацией."]}),t("div",{className:"rounded-lg border border-slate-800 bg-slate-900/40 p-3 font-mono text-sm",children:[t("span",{className:"text-slate-500",children:["[...new Range(0, 10, 2)]"," → "]}),t("span",{className:"text-emerald-300",children:["[",l.join(", "),"]"]})]})]}),t("div",{className:"space-y-3",children:[e("h3",{className:"text-sm font-semibold text-white",children:"Ленивый конвейер над бесконечным источником"}),t("div",{className:"rounded-lg border border-slate-800 bg-slate-900/40 p-3 font-mono text-xs leading-relaxed text-slate-300",children:[t("div",{children:[e("span",{className:"text-indigo-300",children:"naturals()"})," ",e("span",{className:"text-slate-500",children:"// 1, 2, 3, … ∞"})]}),t("div",{children:[".",e("span",{className:"text-indigo-300",children:"filter"}),"(n => n % 2 === 1)"," ",e("span",{className:"text-slate-500",children:"// нечётные"})]}),t("div",{children:[".",e("span",{className:"text-indigo-300",children:"map"}),"(n => n * n)"," ",e("span",{className:"text-slate-500",children:"// квадраты"})]}),t("div",{children:[".",e("span",{className:"text-indigo-300",children:"take"}),"(",e("span",{className:"text-amber-300",children:s}),")"]})]}),t("label",{className:"flex items-center gap-3 text-sm text-slate-300",children:[e("span",{className:"whitespace-nowrap",children:"Взять элементов:"}),e("input",{type:"range",min:1,max:8,value:s,onChange:d=>n(Number(d.target.value)),className:"flex-1 accent-indigo-500"}),e("span",{className:"w-6 text-right font-mono text-indigo-300",children:s})]}),e("div",{className:"flex flex-wrap gap-1.5",children:r.map((d,i)=>e("span",{className:"rounded-md bg-indigo-600/20 px-2.5 py-1 font-mono text-sm text-indigo-200 ring-1 ring-indigo-500/40",children:d},i))}),t("p",{className:"text-sm text-slate-400",children:["Источник бесконечен, но из него реально вычислено лишь"," ",e("span",{className:"font-semibold text-emerald-300",children:o})," ","чисел — ровно столько, сколько понадобилось, чтобы выдать"," ",e("span",{className:"font-semibold text-indigo-300",children:s}),". Остальных «не существует», пока их не запросят."]})]})]})}const g=[{id:"tree",label:"Обход дерева",hint:"Одно дерево — четыре итератора. Стратегия обхода меняется, код-потребитель — нет.",render:R},{id:"protocol",label:"Протокол итерации JS",hint:"Тот же паттерн в самом языке: Symbol.iterator, генераторы и ленивые конвейеры.",render:_}];function G(){const[s,n]=m(g[0].id),r=g.find(l=>l.id===s)??g[0],o=r.render;return t("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:g.map(l=>e("button",{onClick:()=>n(l.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",l.id===s?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:l.label},l.id))}),e("p",{className:"text-sm text-slate-400",children:r.hint}),e("div",{children:e(o,{})},r.id)]})}function j(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[e("strong",{className:"text-white",children:"Iterator (Итератор)"})," — поведенческий паттерн, который даёт единый способ последовательно перебирать элементы коллекции, ",e("strong",{children:"не раскрывая"})," её внутреннее устройство (массив это, дерево, связный список или вообще бесконечный поток). Логика обхода выносится из коллекции в отдельный объект-итератор."]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Когда применять"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:"Когда нужно обходить сложную структуру (дерево, граф), скрыв от клиента детали её устройства."}),e("li",{children:"Когда у одной коллекции должно быть несколько способов обхода — и возможность идти по ней несколькими итераторами одновременно."}),e("li",{children:"Когда хочется единый интерфейс перебора для разных структур данных, чтобы клиентский код не зависел от их типа."})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Из чего состоит"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Iterator"})," — интерфейс обхода:"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"hasNext"})," и"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"next"}),"."]}),t("li",{children:[e("strong",{children:"ConcreteIterator"})," — конкретная стратегия обхода. Хранит позицию обхода (стек, очередь, индекс) и знает, как добраться до следующего элемента."]}),t("li",{children:[e("strong",{children:"Aggregate (Коллекция)"})," — интерфейс с фабричным методом ",e("code",{className:"rounded bg-slate-800 px-1",children:"createIterator"}),"."]}),t("li",{children:[e("strong",{children:"ConcreteAggregate"})," — конкретная коллекция (наше дерево), которая умеет выдавать подходящие итераторы."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Две грани (см. вкладку «Демо»)"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Обход дерева"})," — одно двоичное дерево и четыре итератора (pre-/in-/post-order и BFS). Коллекция одна, а порядок выдачи задаёт выбранный итератор; код, который крутит"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"hasNext/next"}),", при этом не меняется."]}),t("li",{children:[e("strong",{children:"Протокол итерации JS"})," — тот же паттерн встроен в язык: объект с ",e("code",{className:"rounded bg-slate-800 px-1",children:"[Symbol.iterator]"})," ","работает с ",e("code",{className:"rounded bg-slate-800 px-1",children:"for…of"}),", spread и деструктуризацией. Генераторы дают ",e("em",{children:"ленивый"})," обход: из бесконечного источника вычисляется ровно столько, сколько запросили."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),t("p",{className:"mt-2",children:["Встроенный протокол итерации JS (",e("code",{className:"rounded bg-slate-800 px-1",children:"Symbol.iterator"}),", генераторы, ",e("code",{className:"rounded bg-slate-800 px-1",children:"for…of"}),"), обход ",e("code",{className:"rounded bg-slate-800 px-1",children:"Map"}),"/",e("code",{className:"rounded bg-slate-800 px-1",children:"Set"})," и DOM-коллекций (",e("code",{className:"rounded bg-slate-800 px-1",children:"NodeList"}),"), ленивые последовательности и пагинация (постраничная подгрузка как поток элементов), курсоры в базах данных."]})]})]})}const M=`/**
 * Реализация паттерна "Итератор" (Iterator) в классическом виде GoF —
 * чистый TypeScript, без React. Это "ядро", которое крутится в демо.
 *
 * Суть паттерна: дать единый способ последовательно перебирать элементы
 * коллекции, НЕ раскрывая её внутреннее устройство. Бонус — у одной и той же
 * коллекции может быть НЕСКОЛЬКО итераторов с разными стратегиями обхода.
 */

/** Узел двоичного дерева: значение и (необязательно) две ветви. */
export interface TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

/**
 * Iterator (GoF) — минимальный контракт обхода: "есть ли ещё" + "дай следующий".
 * Тот, кто им пользуется, ничего не знает про устройство коллекции под ним.
 */
export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

/**
 * Aggregate (коллекция) — умеет выдавать итератор для себя.
 * Здесь ключевая мысль паттерна: один метод, но разные \`order\` дают
 * РАЗНЫЕ итераторы поверх одних и тех же данных.
 */
export interface IterableCollection<T> {
  createIterator(order: TraversalOrder): Iterator<T>;
}

/** Стратегии обхода дерева — каждой соответствует свой ConcreteIterator. */
export type TraversalOrder =
  | "pre-order" // корень → левое → правое
  | "in-order" // левое → корень → правое
  | "post-order" // левое → правое → корень
  | "level-order"; // по уровням сверху вниз (BFS)

/**
 * Прямой обход (pre-order): сначала узел, потом его потомки.
 * Лениво идём с помощью стека: кладём правого раньше левого,
 * чтобы левый вышел первым.
 */
class PreOrderIterator<T> implements Iterator<T> {
  private stack: TreeNode<T>[];

  constructor(root?: TreeNode<T>) {
    this.stack = root ? [root] : [];
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  next(): T {
    const node = this.stack.pop()!;
    if (node.right) this.stack.push(node.right);
    if (node.left) this.stack.push(node.left);
    return node.value;
  }
}

/**
 * Симметричный обход (in-order): левое поддерево → узел → правое.
 * Для дерева поиска (BST) выдаёт элементы в отсортированном порядке.
 */
class InOrderIterator<T> implements Iterator<T> {
  private stack: TreeNode<T>[] = [];

  constructor(root?: TreeNode<T>) {
    this.pushLeftSpine(root);
  }

  /** Спускаемся по левым рёбрам, складывая узлы в стек. */
  private pushLeftSpine(node?: TreeNode<T>): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  next(): T {
    const node = this.stack.pop()!;
    // Узел отдан — теперь его правое поддерево по тем же правилам.
    this.pushLeftSpine(node.right);
    return node.value;
  }
}

/**
 * Обратный обход (post-order): сначала оба потомка, потом сам узел.
 * Узел возвращаем, только когда его правое поддерево уже пройдено —
 * для этого помним последний отданный узел (lastVisited).
 */
class PostOrderIterator<T> implements Iterator<T> {
  private stack: TreeNode<T>[] = [];
  private current?: TreeNode<T>;
  private lastVisited?: TreeNode<T>;

  constructor(root?: TreeNode<T>) {
    this.current = root;
  }

  hasNext(): boolean {
    return Boolean(this.current) || this.stack.length > 0;
  }

  next(): T {
    while (this.current || this.stack.length > 0) {
      if (this.current) {
        // Спускаемся максимально влево.
        this.stack.push(this.current);
        this.current = this.current.left;
        continue;
      }
      const peek = this.stack[this.stack.length - 1];
      if (peek.right && this.lastVisited !== peek.right) {
        // Есть непройденное правое поддерево — идём в него.
        this.current = peek.right;
      } else {
        // Оба потомка пройдены — можно отдать сам узел.
        this.lastVisited = this.stack.pop();
        return peek.value;
      }
    }
    throw new Error("Итератор исчерпан: вызов next() без hasNext()");
  }
}

/**
 * Обход по уровням (level-order / BFS): слева направо, сверху вниз.
 * В отличие от трёх предыдущих использует очередь, а не стек.
 */
class LevelOrderIterator<T> implements Iterator<T> {
  private queue: TreeNode<T>[];

  constructor(root?: TreeNode<T>) {
    this.queue = root ? [root] : [];
  }

  hasNext(): boolean {
    return this.queue.length > 0;
  }

  next(): T {
    const node = this.queue.shift()!;
    if (node.left) this.queue.push(node.left);
    if (node.right) this.queue.push(node.right);
    return node.value;
  }
}

/**
 * Конкретная коллекция — двоичное дерево. Снаружи о его устройстве
 * (узлы, ссылки, стек/очередь обхода) знать не нужно: достаточно
 * попросить итератор нужной стратегии и крутить hasNext/next.
 */
export class BinaryTree<T> implements IterableCollection<T> {
  constructor(private root?: TreeNode<T>) {}

  createIterator(order: TraversalOrder): Iterator<T> {
    switch (order) {
      case "pre-order":
        return new PreOrderIterator(this.root);
      case "in-order":
        return new InOrderIterator(this.root);
      case "post-order":
        return new PostOrderIterator(this.root);
      case "level-order":
        return new LevelOrderIterator(this.root);
    }
  }

  /**
   * Утилита для демо: собрать весь обход в массив, пользуясь ТОЛЬКО
   * публичным контрактом итератора (hasNext/next) — как это сделал бы
   * любой внешний код.
   */
  toArray(order: TraversalOrder): T[] {
    const iterator = this.createIterator(order);
    const result: T[] = [];
    while (iterator.hasNext()) {
      result.push(iterator.next());
    }
    return result;
  }
}
`,P=`import { useEffect, useMemo, useState } from "react";
import { BinaryTree, type TraversalOrder, type TreeNode } from "./iterator";

/**
 * Дерево поиска (BST) для демонстрации. Картинка:
 *
 *            D
 *         /     \\
 *        B       F
 *       / \\     / \\
 *      A   C   E   G
 *
 * Выбрано BST намеренно: in-order обход выдаёт значения по алфавиту —
 * наглядное "ага" про симметричный обход.
 */
const ROOT: TreeNode<string> = {
  value: "D",
  left: {
    value: "B",
    left: { value: "A" },
    right: { value: "C" },
  },
  right: {
    value: "F",
    left: { value: "E" },
    right: { value: "G" },
  },
};

const tree = new BinaryTree(ROOT);

/** Координаты узлов на холсте: x в процентах ширины, y — в пикселях. */
const LAYOUT: Record<string, { x: number; y: number }> = {
  D: { x: 50, y: 40 },
  B: { x: 25, y: 140 },
  F: { x: 75, y: 140 },
  A: { x: 12.5, y: 240 },
  C: { x: 37.5, y: 240 },
  E: { x: 62.5, y: 240 },
  G: { x: 87.5, y: 240 },
};

/** Рёбра дерева (родитель → потомок) для отрисовки линий. */
const EDGES: [string, string][] = [
  ["D", "B"],
  ["D", "F"],
  ["B", "A"],
  ["B", "C"],
  ["F", "E"],
  ["F", "G"],
];

const ORDERS: { id: TraversalOrder; label: string; hint: string }[] = [
  { id: "pre-order", label: "Прямой (pre-order)", hint: "корень → левое → правое" },
  {
    id: "in-order",
    label: "Симметричный (in-order)",
    hint: "левое → корень → правое — для BST выходит по порядку",
  },
  {
    id: "post-order",
    label: "Обратный (post-order)",
    hint: "левое → правое → корень",
  },
  {
    id: "level-order",
    label: "По уровням (BFS)",
    hint: "сверху вниз, слева направо",
  },
];

export function TreeDemo() {
  const [order, setOrder] = useState<TraversalOrder>("in-order");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Весь обход, собранный через ПУБЛИЧНЫЙ контракт итератора (hasNext/next).
  const sequence = useMemo(() => tree.toArray(order), [order]);

  // Сменили стратегию — начинаем обход заново.
  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [order]);

  // Автопроигрывание: подсвечиваем по одному узлу в секунду.
  useEffect(() => {
    if (!playing) return;
    if (step >= sequence.length) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStep((s) => s + 1), 800);
    return () => clearTimeout(timer);
  }, [playing, step, sequence.length]);

  const visited = sequence.slice(0, step);
  const currentValue = step > 0 ? sequence[step - 1] : undefined;
  const finished = step >= sequence.length;

  const activeOrder = ORDERS.find((o) => o.id === order)!;

  return (
    <div className="space-y-5">
      {/* Выбор стратегии обхода = выбор конкретного итератора. */}
      <div className="flex flex-wrap gap-2">
        {ORDERS.map((o) => (
          <button
            key={o.id}
            onClick={() => setOrder(o.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              o.id === order
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {o.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-400">
        Одна коллекция, разные итераторы. Сейчас:{" "}
        <span className="text-slate-200">{activeOrder.hint}</span>.
      </p>

      {/* Холст дерева. */}
      <div className="relative h-[290px] rounded-xl border border-slate-800 bg-slate-900/40">
        <svg
          viewBox="0 0 100 290"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {EDGES.map(([from, to]) => (
            <line
              key={\`\${from}-\${to}\`}
              x1={LAYOUT[from].x}
              y1={LAYOUT[from].y}
              x2={LAYOUT[to].x}
              y2={LAYOUT[to].y}
              stroke="currentColor"
              strokeWidth={0.4}
              className="text-slate-700"
            />
          ))}
        </svg>

        {Object.entries(LAYOUT).map(([value, pos]) => {
          const isCurrent = value === currentValue;
          const isVisited = visited.includes(value);
          const orderIndex = visited.indexOf(value);
          return (
            <div
              key={value}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: \`\${pos.x}%\`, top: pos.y }}
            >
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg font-semibold transition-colors duration-300",
                  isCurrent
                    ? "border-indigo-400 bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                    : isVisited
                      ? "border-emerald-500/60 bg-emerald-600/20 text-emerald-300"
                      : "border-slate-700 bg-slate-800 text-slate-300",
                ].join(" ")}
              >
                {value}
              </div>
              {/* Порядковый номер выдачи итератором. */}
              {isVisited && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 text-[10px] font-bold text-slate-300 ring-1 ring-slate-700">
                  {orderIndex + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Накопленная последовательность — то, что вернул итератор. */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500">next() →</span>
        <div className="flex flex-wrap gap-1.5">
          {visited.length === 0 ? (
            <span className="text-slate-600">— ещё ни одного вызова —</span>
          ) : (
            visited.map((value, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-800 px-2 py-0.5 font-mono text-slate-200"
              >
                {value}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Плеер шагов. */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ◀ Назад
        </button>
        <button
          onClick={() => {
            if (finished) {
              setStep(0);
              return;
            }
            setStep((s) => Math.min(sequence.length, s + 1));
          }}
          className="rounded-lg border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-slate-500"
        >
          {finished ? "⟲ Заново" : "Вперёд ▶"}
        </button>
        <button
          onClick={() => setPlaying((p) => !p)}
          disabled={finished}
          className="rounded-lg border border-indigo-500 bg-indigo-600/20 px-3 py-1.5 text-sm font-medium text-indigo-200 transition-colors hover:bg-indigo-600/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {playing ? "❚❚ Пауза" : "▶ Авто"}
        </button>
        <span className="ml-auto text-sm text-slate-500">
          шаг {step} / {sequence.length}
        </span>
      </div>
    </div>
  );
}
`,U=`/**
 * Та же идея "Итератора", но уже встроенная в сам язык — протокол итерации
 * JavaScript. Объект итерируемый, если у него есть метод \`[Symbol.iterator]()\`,
 * возвращающий итератор с \`next()\`, который выдаёт \`{ value, done }\`.
 *
 * На этом протоколе держатся \`for...of\`, spread \`[...x]\`, деструктуризация,
 * \`Array.from\`, \`Map\`/\`Set\`. Реализовав его, наш объект "из коробки"
 * работает со всеми этими конструкциями.
 */

/**
 * Числовой диапазон [from, to) с шагом step — собственная, "ручная"
 * реализация протокола итерации (без генераторов), чтобы было видно
 * сам контракт: метод-фабрика итератора + next() с { value, done }.
 */
export class Range implements Iterable<number> {
  constructor(
    private from: number,
    private to: number,
    private step = 1,
  ) {}

  [Symbol.iterator](): Iterator<number> {
    let current = this.from;
    const { to, step } = this;
    return {
      next(): IteratorResult<number> {
        if (current < to) {
          const value = current;
          current += step;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

/**
 * Бесконечный источник натуральных чисел. Сам по себе он ничего не считает —
 * значения появляются ТОЛЬКО когда их запрашивают через next() (лень).
 * Поэтому бесконечность не страшна: мы возьмём ровно столько, сколько нужно.
 */
export function* naturals(): Generator<number> {
  let n = 1;
  while (true) {
    yield n++;
  }
}

/** Ленивое преобразование: пробрасывает значения источника через fn. */
export function* map<T, U>(
  source: Iterable<T>,
  fn: (value: T) => U,
): Generator<U> {
  for (const value of source) {
    yield fn(value);
  }
}

/** Ленивый фильтр: пропускает только значения, прошедшие предикат. */
export function* filter<T>(
  source: Iterable<T>,
  predicate: (value: T) => boolean,
): Generator<T> {
  for (const value of source) {
    if (predicate(value)) {
      yield value;
    }
  }
}

/**
 * Берёт первые \`count\` элементов из ЛЮБОГО итерируемого — даже бесконечного.
 * Как только набрали нужное число, прекращаем тянуть из источника:
 * именно здесь "ленивый конвейер" обрывается и больше ничего не вычисляется.
 */
export function take<T>(source: Iterable<T>, count: number): T[] {
  const result: T[] = [];
  if (count <= 0) return result;
  for (const value of source) {
    result.push(value);
    if (result.length >= count) break;
  }
  return result;
}
`,Y=`import { useMemo, useState } from "react";
import { filter, map, naturals, Range, take } from "./sequence";

/**
 * Демонстрирует протокол итерации JS на двух уровнях:
 *  1. Range — собственный итерируемый объект, работающий со spread/for...of.
 *  2. Ленивый конвейер поверх БЕСКОНЕЧНОГО источника: видно, что значения
 *     вычисляются по требованию, и лишнего не считается.
 */
export function SequenceDemo() {
  const [count, setCount] = useState(5);

  // Конвейер: натуральные → только нечётные → возводим в квадрат → берём count.
  // Источник бесконечен, но take() обрывает его, как только наберёт нужное.
  // Заодно считаем, сколько чисел РЕАЛЬНО вытянули из источника.
  const { values, pulled } = useMemo(() => {
    let pulledFromSource = 0;
    const counted = map(naturals(), (n) => {
      pulledFromSource++;
      return n;
    });
    const odds = filter(counted, (n) => n % 2 === 1);
    const squares = map(odds, (n) => n * n);
    const result = take(squares, count);
    return { values: result, pulled: pulledFromSource };
  }, [count]);

  // Range — тот же протокол, но без бесконечности: показываем spread.
  const rangeValues = useMemo(() => [...new Range(0, 10, 2)], []);

  return (
    <div className="space-y-6">
      {/* Блок 1: собственный итерируемый объект. */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white">
          Свой итерируемый объект
        </h3>
        <p className="text-sm text-slate-400">
          Класс <code className="rounded bg-slate-800 px-1">Range</code>{" "}
          реализует <code className="rounded bg-slate-800 px-1">[Symbol.iterator]</code>{" "}
          — и сразу работает со spread, <code className="rounded bg-slate-800 px-1">for…of</code>,{" "}
          деструктуризацией.
        </p>
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 font-mono text-sm">
          <span className="text-slate-500">{"[...new Range(0, 10, 2)]"} → </span>
          <span className="text-emerald-300">[{rangeValues.join(", ")}]</span>
        </div>
      </div>

      {/* Блок 2: ленивый конвейер над бесконечным источником. */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-white">
          Ленивый конвейер над бесконечным источником
        </h3>
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 font-mono text-xs leading-relaxed text-slate-300">
          <div>
            <span className="text-indigo-300">naturals()</span>{" "}
            <span className="text-slate-500">// 1, 2, 3, … ∞</span>
          </div>
          <div>
            .<span className="text-indigo-300">filter</span>(n =&gt; n % 2 === 1){" "}
            <span className="text-slate-500">// нечётные</span>
          </div>
          <div>
            .<span className="text-indigo-300">map</span>(n =&gt; n * n){" "}
            <span className="text-slate-500">// квадраты</span>
          </div>
          <div>
            .<span className="text-indigo-300">take</span>(
            <span className="text-amber-300">{count}</span>)
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm text-slate-300">
          <span className="whitespace-nowrap">Взять элементов:</span>
          <input
            type="range"
            min={1}
            max={8}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="flex-1 accent-indigo-500"
          />
          <span className="w-6 text-right font-mono text-indigo-300">{count}</span>
        </label>

        <div className="flex flex-wrap gap-1.5">
          {values.map((v, i) => (
            <span
              key={i}
              className="rounded-md bg-indigo-600/20 px-2.5 py-1 font-mono text-sm text-indigo-200 ring-1 ring-indigo-500/40"
            >
              {v}
            </span>
          ))}
        </div>

        <p className="text-sm text-slate-400">
          Источник бесконечен, но из него реально вычислено лишь{" "}
          <span className="font-semibold text-emerald-300">{pulled}</span>{" "}
          чисел — ровно столько, сколько понадобилось, чтобы выдать{" "}
          <span className="font-semibold text-indigo-300">{count}</span>.
          Остальных «не существует», пока их не запросят.
        </p>
      </div>
    </div>
  );
}
`,X={meta:{id:"iterator",title:"Iterator",category:"behavioral",summary:"Даёт единый способ перебирать элементы коллекции, не раскрывая её внутреннее устройство."},Demo:G,Explanation:j,code:[{filename:"iterator.ts",language:"typescript",source:M},{filename:"TreeDemo.tsx",language:"tsx",source:P},{filename:"sequence.ts",language:"typescript",source:U},{filename:"SequenceDemo.tsx",language:"tsx",source:Y}]};export{X as default};
