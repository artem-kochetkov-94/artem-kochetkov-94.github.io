/* empty css              */import{a as e,_ as t}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{d as g,c,e as u}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react__loadShare__.js-CXaPNXH0.js";class x{constructor(n){this.value=n}observers=new Set;subscribe(n){return this.observers.add(n),n.update(this.value),()=>{this.observers.delete(n)}}setValue(n){this.value=n,this.observers.forEach(r=>r.update(n))}getValue(){return this.value}get observerCount(){return this.observers.size}}function f({title:s,subject:n}){const[r,l]=c(()=>n.getValue());return u(()=>n.subscribe({update:l}),[n]),e("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-4",children:[t("p",{className:"text-xs uppercase tracking-wider text-slate-500",children:s}),e("p",{className:"mt-1 text-3xl font-bold text-white",children:[r,"°C"]})]})}function N({subject:s}){const[n,r]=c(()=>s.getValue());u(()=>s.subscribe({update:r}),[s]);const l=(n+10)/50,i=Math.min(100,Math.max(0,l*100));return e("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-4",children:[t("p",{className:"text-xs uppercase tracking-wider text-slate-500",children:"Шкала"}),e("p",{className:"mt-1 text-3xl font-bold text-white",children:[n,"°C"]}),t("div",{className:"mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-700",children:t("div",{className:"h-full rounded-full bg-indigo-500 transition-[width] duration-200",style:{width:`${i}%`}})})]})}function w(){const s=g(null);s.current===null&&(s.current=new x(20));const n=s.current,[r,l]=c(20),[i,b]=c(!0),[d,p]=c(!0),[h,v]=c(0);u(()=>{v(n.observerCount)});const o=a=>{const m=Math.min(40,Math.max(-10,a));l(m),n.setValue(m)};return e("div",{className:"space-y-6",children:[e("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-5",children:[e("div",{className:"flex items-center justify-between",children:[e("div",{children:[t("p",{className:"text-sm font-semibold text-white",children:"Метеостанция"}),e("p",{className:"text-xs text-slate-500",children:["источник (Subject) · подписчиков: ",h]})]}),e("div",{className:"flex items-center gap-2",children:[t("button",{onClick:()=>o(r-1),className:"h-9 w-9 rounded bg-slate-800 text-lg text-white hover:bg-slate-700",children:"−"}),e("span",{className:"w-16 text-center text-xl font-bold text-white",children:[r,"°C"]}),t("button",{onClick:()=>o(r+1),className:"h-9 w-9 rounded bg-slate-800 text-lg text-white hover:bg-slate-700",children:"+"})]})]}),t("input",{type:"range",min:-10,max:40,value:r,onChange:a=>o(Number(a.target.value)),className:"mt-4 w-full accent-indigo-500"})]}),e("div",{className:"flex flex-wrap gap-4 text-sm text-slate-300",children:[e("label",{className:"flex items-center gap-2",children:[t("input",{type:"checkbox",checked:i,onChange:a=>b(a.target.checked),className:"accent-indigo-500"}),"Табло «температура»"]}),e("label",{className:"flex items-center gap-2",children:[t("input",{type:"checkbox",checked:d,onChange:a=>p(a.target.checked),className:"accent-indigo-500"}),"Табло «шкала»"]})]}),e("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[i&&t(f,{title:"Температура",subject:n}),d&&t(N,{subject:n})]})]})}function C(){return e("div",{className:"space-y-4 text-slate-300",children:[e("p",{children:[t("strong",{className:"text-white",children:"Observer (Наблюдатель)"})," — это поведенческий паттерн, который задаёт связь «один ко многим»: один объект (",t("em",{children:"субъект"}),") при изменении своего состояния автоматически уведомляет всех зависимых от него объектов (",t("em",{children:"наблюдателей"}),")."]}),e("div",{children:[t("h3",{className:"font-semibold text-white",children:"Когда применять"}),e("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:"Когда изменение одного объекта должно повлечь изменения в других, но вы не хотите жёстко связывать их между собой."}),t("li",{children:"Когда набор объектов-слушателей заранее неизвестен или меняется во время работы."})]})]}),e("div",{children:[t("h3",{className:"font-semibold text-white",children:"Из чего состоит"}),e("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:[t("strong",{children:"Subject"})," — хранит состояние и список подписчиков, умеет уведомлять их об изменениях."]}),e("li",{children:[t("strong",{children:"Observer"})," — интерфейс с методом"," ",t("code",{className:"rounded bg-slate-800 px-1",children:"update()"}),", который субъект вызывает при изменениях."]})]})]}),e("div",{children:[t("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),e("p",{className:"mt-2",children:["DOM-события (",t("code",{className:"rounded bg-slate-800 px-1",children:"addEventListener"}),"), RxJS-потоки, реактивность в MobX и Vue, паттерн pub/sub в шинах событий."]})]})]})}const j=`/**
 * Реализация паттерна "Наблюдатель" (Observer) — чистый TypeScript,
 * без привязки к React. Это "ядро" паттерна, которое мы потом покажем в демо.
 */

/** Наблюдатель: умеет принимать обновлённое значение от субъекта. */
export interface Observer<T> {
  update(value: T): void;
}

/**
 * Субъект (источник событий). Хранит состояние и список подписчиков.
 * При изменении состояния уведомляет всех наблюдателей.
 */
export class Subject<T> {
  private observers = new Set<Observer<T>>();

  constructor(private value: T) {}

  /**
   * Подписать наблюдателя. Сразу отдаёт ему текущее состояние.
   * Возвращает функцию отписки (удобно для useEffect-cleanup).
   */
  subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    observer.update(this.value);
    return () => {
      this.observers.delete(observer);
    };
  }

  /** Изменить состояние и уведомить ВСЕХ подписчиков. */
  setValue(value: T): void {
    this.value = value;
    this.observers.forEach((observer) => observer.update(value));
  }

  /** Текущее состояние. */
  getValue(): T {
    return this.value;
  }

  /** Сколько сейчас активных подписчиков. */
  get observerCount(): number {
    return this.observers.size;
  }
}
`,T=`import { useEffect, useRef, useState } from "react";
import { Subject } from "./observer";

/**
 * Табло-наблюдатель. Оно НЕ получает температуру через props —
 * вместо этого подписывается на субъект и обновляет себя само.
 * В этом вся суть паттерна: источник не знает, кто и как его слушает.
 */
function TemperatureDisplay({
  title,
  subject,
}: {
  title: string;
  subject: Subject<number>;
}) {
  const [temp, setTemp] = useState(() => subject.getValue());

  useEffect(() => {
    // subscribe возвращает функцию отписки — отдаём её как cleanup.
    return subject.subscribe({ update: setTemp });
  }, [subject]);

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
      <p className="mt-1 text-3xl font-bold text-white">{temp}°C</p>
    </div>
  );
}

/** Шкала-наблюдатель: показывает ту же температуру в виде полоски. */
function TemperatureBar({ subject }: { subject: Subject<number> }) {
  const [temp, setTemp] = useState(() => subject.getValue());

  useEffect(() => subject.subscribe({ update: setTemp }), [subject]);

  // переводим диапазон -10..40 °C в проценты ширины (0..100)
  const ratio = (temp + 10) / 50;
  const percent = Math.min(100, Math.max(0, ratio * 100));

  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">Шкала</p>
      <p className="mt-1 text-3xl font-bold text-white">{temp}°C</p>
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-700">
        <div
          className="h-full rounded-full bg-indigo-500 transition-[width] duration-200"
          style={{ width: \`\${percent}%\` }}
        />
      </div>
    </div>
  );
}

export function Demo() {
  // Субъект создаём один раз и храним в ref, чтобы он не пересоздавался.
  const subjectRef = useRef<Subject<number>>(null);
  if (subjectRef.current === null) {
    subjectRef.current = new Subject<number>(20);
  }
  const subject = subjectRef.current;

  // temp — состояние "пульта управления". Табло получают значение НЕ отсюда,
  // а через подписку — поэтому setTemp дергает и subject.setValue.
  const [temp, setTemp] = useState(20);
  const [showCard, setShowCard] = useState(true);
  const [showBar, setShowBar] = useState(true);

  // Счётчик подписчиков. Синхронизируем ПОСЛЕ рендера: к этому моменту
  // эффекты табло уже отработали (подписались/отписались), поэтому
  // subject.observerCount показывает актуальное число.
  const [observerCount, setObserverCount] = useState(0);
  useEffect(() => {
    setObserverCount(subject.observerCount);
  });

  const changeTemp = (next: number) => {
    const clamped = Math.min(40, Math.max(-10, next));
    setTemp(clamped);
    subject.setValue(clamped); // уведомляем всех подписчиков
  };

  return (
    <div className="space-y-6">
      {/* Пульт управления (субъект) */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Метеостанция</p>
            <p className="text-xs text-slate-500">
              источник (Subject) · подписчиков: {observerCount}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeTemp(temp - 1)}
              className="h-9 w-9 rounded bg-slate-800 text-lg text-white hover:bg-slate-700"
            >
              −
            </button>
            <span className="w-16 text-center text-xl font-bold text-white">
              {temp}°C
            </span>
            <button
              onClick={() => changeTemp(temp + 1)}
              className="h-9 w-9 rounded bg-slate-800 text-lg text-white hover:bg-slate-700"
            >
              +
            </button>
          </div>
        </div>

        <input
          type="range"
          min={-10}
          max={40}
          value={temp}
          onChange={(e) => changeTemp(Number(e.target.value))}
          className="mt-4 w-full accent-indigo-500"
        />
      </div>

      {/* Тумблеры: добавить/убрать табло = подписать/отписать наблюдателя */}
      <div className="flex flex-wrap gap-4 text-sm text-slate-300">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showCard}
            onChange={(e) => setShowCard(e.target.checked)}
            className="accent-indigo-500"
          />
          Табло «температура»
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showBar}
            onChange={(e) => setShowBar(e.target.checked)}
            className="accent-indigo-500"
          />
          Табло «шкала»
        </label>
      </div>

      {/* Наблюдатели. Появление/исчезновение = подписка/отписка. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {showCard && (
          <TemperatureDisplay title="Температура" subject={subject} />
        )}
        {showBar && <TemperatureBar subject={subject} />}
      </div>
    </div>
  );
}
`,_={meta:{id:"observer",title:"Observer",category:"behavioral",summary:"Объект-источник уведомляет всех подписчиков об изменениях своего состояния."},Demo:w,Explanation:C,code:[{filename:"observer.ts",language:"typescript",source:j},{filename:"Demo.tsx",language:"tsx",source:T}]};export{_ as default};
