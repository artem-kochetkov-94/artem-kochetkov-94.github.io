/* empty css              */import{a as t,_ as e,b as V}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as h,d as C,e as S}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react__loadShare__.js-CXaPNXH0.js";class y{constructor(r,n){this.title=r,this.limit=n}next=null;setNext(r){return this.next=r,r}handle(r,n=[]){const a=r.amount<=this.limit;return n.push({handler:this.title,limit:this.limit,action:a?"approved":"passed"}),a?{approvedBy:this.title,steps:n}:this.next?this.next.handle(r,n):{approvedBy:null,steps:n}}}function k(s){return s.reduce((r,n)=>r.setNext(n)),s[0]}const _=[new y("Тимлид",5e3),new y("Менеджер",5e4),new y("Финдиректор",5e5)],T=k(_),v=s=>`${s.toLocaleString("ru-RU")} ₽`;function F(){const[s,r]=h(3e4),[n,a]=h(null),[i,x]=h(-1),m=C([]),f=()=>{m.current.forEach(clearTimeout),m.current=[]};S(()=>f,[]);const g=()=>{f();const d=T.handle({amount:s,purpose:"Закупка"});a(d),x(-1),d.steps.forEach((u,l)=>{const c=window.setTimeout(()=>x(l),(l+1)*600);m.current.push(c)})},N=n!==null&&i>=n.steps.length-1;return t("div",{className:"space-y-6",children:[t("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-5",children:[e("p",{className:"text-sm font-semibold text-white",children:"Заявка на расход"}),e("p",{className:"text-xs text-slate-500",children:"отправитель не знает, кто одобрит — просто отдаёт запрос в цепочку"}),t("div",{className:"mt-4 flex items-center gap-3",children:[e("span",{className:"w-28 text-right text-2xl font-bold text-white",children:v(s)}),e("input",{type:"range",min:1e3,max:7e5,step:1e3,value:s,onChange:d=>r(Number(d.target.value)),className:"w-full accent-indigo-500"})]}),e("button",{onClick:g,className:"mt-4 rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500",children:"Отправить на согласование"})]}),e("div",{className:"space-y-3",children:_.map((d,u)=>{const l=n==null?void 0:n.steps[u],c=l!==void 0&&i>=u,o=c&&l.action==="approved",p=c&&l.action==="passed";return e("div",{children:e("div",{className:["rounded-lg border p-4 transition-colors duration-300",o?"border-emerald-500 bg-emerald-950":p?"border-slate-600 bg-slate-800/60":"border-slate-700 bg-slate-900"].join(" "),children:t("div",{className:"flex items-center justify-between",children:[t("div",{children:[e("p",{className:"text-sm font-semibold text-white",children:d.title}),t("p",{className:"text-xs text-slate-500",children:["одобряет до ",v(d.limit)]})]}),o&&e("span",{className:"text-sm font-semibold text-emerald-400",children:"✓ согласовал"}),p&&e("span",{className:"text-sm text-slate-400",children:"передал дальше ↓"})]})})},d.title)})}),N&&n&&e("div",{className:["rounded-lg border p-4 text-sm",n.approvedBy?"border-emerald-600 bg-emerald-950 text-emerald-200":"border-rose-600 bg-rose-950 text-rose-200"].join(" "),children:n.approvedBy?`Заявку на ${v(s)} согласовал «${n.approvedBy}».`:`Заявку на ${v(s)} никто в цепочке не вправе одобрить — нужен уровень выше.`})]})}class w{constructor(r,n){this.title=r,this.check=n}next=null;setNext(r){return this.next=r,r}handle(r,n,a){const i=this.check(r);if(i){if(a.errors.push(i),a.steps.push({title:this.title,status:"error",message:i}),n==="fail-fast")return a.valid=!1,a}else a.steps.push({title:this.title,status:"ok",message:null});return this.next?this.next.handle(r,n,a):(a.valid=a.errors.length===0,a)}}function M(s){return s.reduce((r,n)=>r.setNext(n)),s[0]}function D(s,r,n){return s.handle(r,n,{valid:!0,errors:[],steps:[]})}const E=[new w("Имя заполнено",s=>s.name.trim()===""?"Укажите имя":null),new w("E-mail корректный",s=>/.+@.+\..+/.test(s.email)?null:"E-mail выглядит неправильно"),new w("Возраст 18+",s=>s.age>=18?null:"Возраст должен быть не меньше 18")],P=M(E),O={"fail-fast":{caption:"Идём по цепочке и обрываемся на ПЕРВОЙ непройденной проверке — остальные не выполняются."},"collect-all":{caption:"Проходим цепочку до конца, даже если проверки падают, и собираем ВСЕ ошибки сразу."}};function R({mode:s}){const[r,n]=h({name:"",email:"petya",age:16}),[a,i]=h(null),[x,m]=h(0),f=C([]),g=()=>{f.current.forEach(clearTimeout),f.current=[]};S(()=>g,[]),S(()=>{g(),i(null),m(0)},[s]);const N=()=>{g();const l=D(P,r,s);i(l),m(0),l.steps.forEach((c,o)=>{const p=window.setTimeout(()=>m(o+1),(o+1)*600);f.current.push(p)})},d=a!==null&&x>=a.steps.length,u=l=>n(c=>({...c,...l}));return t("div",{className:"space-y-6",children:[e("p",{className:"text-sm text-slate-400",children:O[s].caption}),t("div",{className:"grid grid-cols-1 gap-3 rounded-lg border border-slate-700 bg-slate-900 p-5 sm:grid-cols-3",children:[t("label",{className:"text-xs text-slate-400",children:["Имя",e("input",{value:r.name,onChange:l=>u({name:l.target.value}),className:"mt-1 w-full rounded bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"})]}),t("label",{className:"text-xs text-slate-400",children:["E-mail",e("input",{value:r.email,onChange:l=>u({email:l.target.value}),className:"mt-1 w-full rounded bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"})]}),t("label",{className:"text-xs text-slate-400",children:["Возраст",e("input",{type:"number",value:r.age,onChange:l=>u({age:Number(l.target.value)}),className:"mt-1 w-full rounded bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"})]})]}),e("button",{onClick:N,className:"rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500",children:"Проверить форму"}),e("div",{className:"space-y-3",children:E.map((l,c)=>{const o=a==null?void 0:a.steps[c],p=o!==void 0&&x>c,A=d&&o===void 0;return t("div",{className:["flex items-center justify-between rounded-lg border p-4 transition-colors duration-300",p&&o.status==="ok"?"border-emerald-500 bg-emerald-950":p&&o.status==="error"?"border-rose-500 bg-rose-950":A?"border-slate-800 bg-slate-900/40 opacity-50":"border-slate-700 bg-slate-900"].join(" "),children:[e("p",{className:"text-sm font-semibold text-white",children:l.title}),p&&o.status==="ok"&&e("span",{className:"text-sm font-semibold text-emerald-400",children:"✓ пройдено"}),p&&o.status==="error"&&t("span",{className:"text-sm text-rose-300",children:["✕ ",o.message]}),A&&e("span",{className:"text-xs text-slate-500",children:"не выполнялось"})]},l.title)})}),d&&a&&e("div",{className:["rounded-lg border p-4 text-sm",a.valid?"border-emerald-600 bg-emerald-950 text-emerald-200":"border-rose-600 bg-rose-950 text-rose-200"].join(" "),children:a.valid?"Форма прошла все проверки ✓":t(V,{children:[t("p",{className:"font-semibold",children:["Форма не прошла проверку (",a.errors.length," ",s==="fail-fast"?"— остановились на первой":"ошибок","):"]}),e("ul",{className:"mt-1 list-disc pl-5",children:a.errors.map(l=>e("li",{children:l},l))})]})})]})}const b=[{id:"first-match",label:"First-match",hint:"Согласование расхода: обрабатывает первый, кто может, — потом стоп.",render:F},{id:"fail-fast",label:"Fail-fast",hint:"Валидация формы: останавливаемся на первой же ошибке.",render:()=>e(R,{mode:"fail-fast"})},{id:"collect-all",label:"Собрать всё",hint:"Валидация формы: проходим до конца и собираем все ошибки.",render:()=>e(R,{mode:"collect-all"})}];function j(){const[s,r]=h(b[0].id),n=b.find(i=>i.id===s)??b[0],a=n.render;return t("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:b.map(i=>e("button",{onClick:()=>r(i.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",i.id===s?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:i.label},i.id))}),e("p",{className:"text-sm text-slate-400",children:n.hint}),e("div",{children:e(a,{})},n.id)]})}function B(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[e("strong",{className:"text-white",children:"Chain of Responsibility (Цепочка обязанностей)"})," ","— поведенческий паттерн, который позволяет передавать запрос по цепочке обработчиков. Каждый обработчик решает сам: обработать запрос или передать его следующему звену. Отправитель не знает заранее, кто именно справится с запросом."]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Когда применять"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:"Когда запрос могут обработать разные объекты, а конкретный обработчик заранее неизвестен и определяется в рантайме."}),e("li",{children:"Когда набор и порядок обработчиков должны легко меняться — звенья можно добавлять, убирать и переставлять, не трогая отправителя."}),e("li",{children:"Когда важно избежать жёсткой привязки отправителя запроса к его получателю."})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Из чего состоит"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Handler (Approver)"})," — звено цепочки. Хранит ссылку на следующее звено (",e("code",{className:"rounded bg-slate-800 px-1",children:"setNext"}),") и умеет либо обработать запрос, либо делегировать его дальше (",e("code",{className:"rounded bg-slate-800 px-1",children:"handle"}),")."]}),t("li",{children:[e("strong",{children:"Request"})," — запрос, который путешествует по цепочке."]}),t("li",{children:[e("strong",{children:"Client"})," — собирает цепочку и отдаёт запрос её первому звену, не зная, кто его в итоге обработает."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Стратегии (см. вкладку «Демо»)"}),t("p",{className:"mt-2",children:["Цепочка всегда устроена одинаково (звенья связаны, запрос идёт по ним), а вот ",e("em",{children:"когда звено передаёт запрос дальше и когда цепочка останавливается"})," — это решение и задаёт поведение:"]}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"First-match"})," — первый, кто способен обработать запрос, обрабатывает его и обрывает цепочку. Так работают обработка исключений, выдача купюр в банкомате, эскалация тикета."]}),t("li",{children:[e("strong",{children:"Fail-fast"})," — запрос проходит проверки, но на первой же неудаче цепочка прерывается. Типично для валидации, где нет смысла продолжать после первой ошибки."]}),t("li",{children:[e("strong",{children:"Collect-all (пайплайн)"})," — запрос проходит цепочку до конца независимо от результата; звенья копят итог или обогащают запрос. Так устроены middleware и валидация, собирающая все ошибки."]})]}),e("p",{className:"mt-2 text-sm text-slate-400",children:"Замечание: «чистым» Chain of Responsibility обычно называют именно first-match; collect-all-вариант часто выделяют в отдельный паттерн Pipeline / Intercepting Filter."})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),t("p",{className:"mt-2",children:["Middleware в Express/Koa и Redux (",e("code",{className:"rounded bg-slate-800 px-1",children:"next()"}),"), пайплайны обработки HTTP-запросов, всплытие DOM-событий по дереву, цепочки валидаторов и interceptor-ы в HTTP-клиентах."]})]})]})}const I=`/**
 * Chain of Responsibility — стратегия "first-match" (первый, кто справился).
 * Чистый TypeScript, без привязки к React. Это "ядро" примера.
 *
 * Идея: запрос идёт по цепочке обработчиков. Первое звено, которое может
 * его обработать, делает это и ОСТАНАВЛИВАЕТ цепочку — дальше не передаём.
 * Отправитель не знает, кто именно справится с запросом.
 *
 * Сравните с \`validation.ts\`: там цепочка собрана так же (setNext + handle),
 * но звено передаёт запрос дальше иначе — отсюда другое поведение.
 */

/** Запрос на согласование расхода. */
export interface ExpenseRequest {
  /** Сумма расхода. */
  amount: number;
  /** На что просят денег (для наглядности в демо). */
  purpose: string;
}

/** Что сделал конкретный обработчик с запросом. */
export type StepAction = "approved" | "passed";

/** Один шаг прохождения запроса по цепочке (для визуализации). */
export interface ChainStep {
  /** Имя обработчика. */
  handler: string;
  /** Лимит, в рамках которого он может одобрять. */
  limit: number;
  /** Согласовал сам или передал дальше. */
  action: StepAction;
}

/** Итог прохождения запроса по всей цепочке. */
export interface Resolution {
  /** Кто согласовал; null — никто в цепочке не смог. */
  approvedBy: string | null;
  /** Путь запроса: через кого прошёл и что каждый сделал, по порядку. */
  steps: ChainStep[];
}

/**
 * Звено цепочки — согласующий с собственным лимитом.
 *
 * Ключевая механика паттерна — два метода:
 *  - setNext: связывает звено со следующим (и возвращает его, чтобы
 *    цепочку можно было собирать "по-цепочке": a.setNext(b).setNext(c));
 *  - handle: либо обрабатывает запрос сам, либо делегирует следующему.
 */
export class Approver {
  private next: Approver | null = null;

  constructor(
    /** Имя согласующего, напр. "Тимлид". */
    public readonly title: string,
    /** Максимальная сумма, которую он вправе одобрить. */
    public readonly limit: number,
  ) {}

  /** Назначить следующее звено. Возвращает его — для fluent-сборки цепочки. */
  setNext(next: Approver): Approver {
    this.next = next;
    return next;
  }

  /**
   * Обработать запрос. Если сумма в пределах лимита — согласовываем здесь.
   * Иначе передаём дальше по цепочке. Если следующего нет — запрос отклонён.
   *
   * \`steps\` накапливает маршрут запроса — это нужно только демо для анимации,
   * к самому паттерну отношения не имеет.
   */
  handle(request: ExpenseRequest, steps: ChainStep[] = []): Resolution {
    const canApprove = request.amount <= this.limit;

    steps.push({
      handler: this.title,
      limit: this.limit,
      action: canApprove ? "approved" : "passed",
    });

    if (canApprove) {
      return { approvedBy: this.title, steps };
    }

    if (this.next) {
      return this.next.handle(request, steps);
    }

    // Дошли до конца цепочки, но никто не справился.
    return { approvedBy: null, steps };
  }
}

/**
 * Собрать цепочку из списка согласующих по порядку и вернуть её начало
 * (первое звено), которому и отдаётся запрос.
 */
export function buildChain(approvers: Approver[]): Approver {
  approvers.reduce((prev, curr) => prev.setNext(curr));
  return approvers[0];
}
`,$=`import { useEffect, useRef, useState } from "react";
import { Approver, buildChain, type Resolution } from "./approval";

/**
 * Пример стратегии "first-match": заявку одобряет ПЕРВЫЙ согласующий,
 * у которого хватает лимита, — дальше цепочка не идёт.
 *
 * Согласующие выстроены по возрастанию лимита.
 */
const APPROVERS = [
  new Approver("Тимлид", 5_000),
  new Approver("Менеджер", 50_000),
  new Approver("Финдиректор", 500_000),
];

/** Цепочку собираем один раз на модуль — она неизменна. */
const chainHead = buildChain(APPROVERS);

const formatMoney = (value: number) => \`\${value.toLocaleString("ru-RU")} ₽\`;

export function ApprovalDemo() {
  const [amount, setAmount] = useState(30_000);

  // Итог прохождения по цепочке (заполняется после "Отправить").
  const [resolution, setResolution] = useState<Resolution | null>(null);
  // Индекс звена, до которого "дошла" анимация. -1 — ещё не запускали.
  const [activeStep, setActiveStep] = useState(-1);

  // Чистим таймеры анимации при размонтировании / новом запуске.
  const timers = useRef<number[]>([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  const send = () => {
    clearTimers();

    // Прогоняем запрос по цепочке — получаем готовый маршрут...
    const result = chainHead.handle({ amount, purpose: "Закупка" });
    setResolution(result);
    setActiveStep(-1);

    // ...и проигрываем его шаг за шагом, чтобы видеть передачу по цепочке.
    result.steps.forEach((_, i) => {
      const id = window.setTimeout(() => setActiveStep(i), (i + 1) * 600);
      timers.current.push(id);
    });
  };

  // Анимация завершена, когда подсветили последний пройденный шаг.
  const finished =
    resolution !== null && activeStep >= resolution.steps.length - 1;

  return (
    <div className="space-y-6">
      {/* Пульт: задаём сумму заявки и отправляем в цепочку. */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <p className="text-sm font-semibold text-white">Заявка на расход</p>
        <p className="text-xs text-slate-500">
          отправитель не знает, кто одобрит — просто отдаёт запрос в цепочку
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="w-28 text-right text-2xl font-bold text-white">
            {formatMoney(amount)}
          </span>
          <input
            type="range"
            min={1_000}
            max={700_000}
            step={1_000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>

        <button
          onClick={send}
          className="mt-4 rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Отправить на согласование
        </button>
      </div>

      {/* Сама цепочка согласующих. */}
      <div className="space-y-3">
        {APPROVERS.map((approver, i) => {
          const step = resolution?.steps[i];
          // Подсвечиваем звено, только когда анимация до него дошла.
          const reached = step !== undefined && activeStep >= i;
          const isApprover = reached && step.action === "approved";
          const isPassed = reached && step.action === "passed";

          return (
            <div key={approver.title}>
              <div
                className={[
                  "rounded-lg border p-4 transition-colors duration-300",
                  isApprover
                    ? "border-emerald-500 bg-emerald-950"
                    : isPassed
                      ? "border-slate-600 bg-slate-800/60"
                      : "border-slate-700 bg-slate-900",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {approver.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      одобряет до {formatMoney(approver.limit)}
                    </p>
                  </div>
                  {isApprover && (
                    <span className="text-sm font-semibold text-emerald-400">
                      ✓ согласовал
                    </span>
                  )}
                  {isPassed && (
                    <span className="text-sm text-slate-400">
                      передал дальше ↓
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Итог: кто согласовал или отказ. */}
      {finished && resolution && (
        <div
          className={[
            "rounded-lg border p-4 text-sm",
            resolution.approvedBy
              ? "border-emerald-600 bg-emerald-950 text-emerald-200"
              : "border-rose-600 bg-rose-950 text-rose-200",
          ].join(" ")}
        >
          {resolution.approvedBy
            ? \`Заявку на \${formatMoney(amount)} согласовал «\${resolution.approvedBy}».\`
            : \`Заявку на \${formatMoney(amount)} никто в цепочке не вправе одобрить — нужен уровень выше.\`}
        </div>
      )}
    </div>
  );
}
`,H=`/**
 * Chain of Responsibility — стратегия "pipeline" (цепочка проверок).
 * Чистый TypeScript, без привязки к React. Это "ядро" примера.
 *
 * Та же механика, что и в \`approval.ts\` (звенья связаны через setNext,
 * запрос обрабатывается в handle), но звено НЕ "забирает" запрос себе —
 * каждый валидатор проверяет форму и передаёт её дальше по цепочке.
 *
 * Один и тот же набор валидаторов работает в двух режимах — разница
 * ровно в одном решении "когда остановиться":
 *  - "fail-fast"   — прерываемся на ПЕРВОЙ непройденной проверке;
 *  - "collect-all" — проходим цепочку до конца и собираем ВСЕ ошибки.
 */

/** Форма, которую проверяем. */
export interface Form {
  name: string;
  email: string;
  age: number;
}

/** Режим прохождения цепочки. */
export type Mode = "fail-fast" | "collect-all";

/** Что произошло на конкретном звене (для визуализации). */
export interface CheckStep {
  title: string;
  /** ok — проверка пройдена, error — провалена, skipped — не дошли (fail-fast). */
  status: "ok" | "error" | "skipped";
  /** Текст ошибки, если status === "error". */
  message: string | null;
}

/** Итог прохождения цепочки. */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  steps: CheckStep[];
}

/**
 * Звено цепочки — валидатор. Концептуально то же, что Approver:
 * хранит ссылку на следующее звено и решает в handle, передавать ли дальше.
 */
export class Validator {
  private next: Validator | null = null;

  constructor(
    /** Что проверяем, напр. "Имя заполнено". */
    public readonly title: string,
    /** Проверка: вернёт текст ошибки или null, если всё хорошо. */
    private readonly check: (form: Form) => string | null,
  ) {}

  /** Назначить следующее звено. Возвращает его — для fluent-сборки цепочки. */
  setNext(next: Validator): Validator {
    this.next = next;
    return next;
  }

  /**
   * Прогнать форму через это звено и (в зависимости от режима) дальше.
   * \`result\` копит маршрут и ошибки по мере прохождения цепочки.
   */
  handle(form: Form, mode: Mode, result: ValidationResult): ValidationResult {
    const message = this.check(form);

    if (message) {
      result.errors.push(message);
      result.steps.push({ title: this.title, status: "error", message });

      // Вот всё различие между стратегиями: в fail-fast обрываем цепочку
      // прямо здесь — следующие звенья просто не вызываются.
      if (mode === "fail-fast") {
        result.valid = false;
        return result;
      }
    } else {
      result.steps.push({ title: this.title, status: "ok", message: null });
    }

    // Передаём дальше по цепочке.
    if (this.next) {
      return this.next.handle(form, mode, result);
    }

    // Дошли до конца: форма валидна, если ни одно звено не дало ошибку.
    result.valid = result.errors.length === 0;
    return result;
  }
}

/** Собрать цепочку валидаторов по порядку и вернуть её начало. */
export function buildChain(validators: Validator[]): Validator {
  validators.reduce((prev, curr) => prev.setNext(curr));
  return validators[0];
}

/** Запустить проверку формы по цепочке в выбранном режиме. */
export function validate(
  head: Validator,
  form: Form,
  mode: Mode,
): ValidationResult {
  return head.handle(form, mode, { valid: true, errors: [], steps: [] });
}
`,L=`import { useEffect, useRef, useState } from "react";
import {
  Validator,
  buildChain,
  validate,
  type Form,
  type Mode,
  type ValidationResult,
} from "./validation";

/**
 * Цепочка валидаторов формы. Один и тот же набор — оба примера ниже
 * (fail-fast и collect-all) используют его, меняется только режим.
 */
const VALIDATORS = [
  new Validator("Имя заполнено", (f) =>
    f.name.trim() === "" ? "Укажите имя" : null,
  ),
  new Validator("E-mail корректный", (f) =>
    /.+@.+\\..+/.test(f.email) ? null : "E-mail выглядит неправильно",
  ),
  new Validator("Возраст 18+", (f) =>
    f.age >= 18 ? null : "Возраст должен быть не меньше 18",
  ),
];

const chainHead = buildChain(VALIDATORS);

/** Подписи и формулировки, зависящие от режима. */
const MODE_INFO: Record<Mode, { caption: string }> = {
  "fail-fast": {
    caption:
      "Идём по цепочке и обрываемся на ПЕРВОЙ непройденной проверке — остальные не выполняются.",
  },
  "collect-all": {
    caption:
      "Проходим цепочку до конца, даже если проверки падают, и собираем ВСЕ ошибки сразу.",
  },
};

export function ValidationDemo({ mode }: { mode: Mode }) {
  const [form, setForm] = useState<Form>({ name: "", email: "petya", age: 16 });

  const [result, setResult] = useState<ValidationResult | null>(null);
  // Сколько шагов цепочки уже "проиграла" анимация.
  const [shownSteps, setShownSteps] = useState(0);

  const timers = useRef<number[]>([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  // Сбрасываем результат при смене режима — чтобы примеры не путались.
  useEffect(() => {
    clearTimers();
    setResult(null);
    setShownSteps(0);
  }, [mode]);

  const run = () => {
    clearTimers();
    const res = validate(chainHead, form, mode);
    setResult(res);
    setShownSteps(0);

    // Проигрываем пройденные звенья по одному.
    res.steps.forEach((_, i) => {
      const id = window.setTimeout(() => setShownSteps(i + 1), (i + 1) * 600);
      timers.current.push(id);
    });
  };

  const finished = result !== null && shownSteps >= result.steps.length;

  const set = (patch: Partial<Form>) => setForm((f) => ({ ...f, ...patch }));

  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-400">{MODE_INFO[mode].caption}</p>

      {/* Форма — её и прогоняем по цепочке проверок. */}
      <div className="grid grid-cols-1 gap-3 rounded-lg border border-slate-700 bg-slate-900 p-5 sm:grid-cols-3">
        <label className="text-xs text-slate-400">
          Имя
          <input
            value={form.name}
            onChange={(e) => set({ name: e.target.value })}
            className="mt-1 w-full rounded bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </label>
        <label className="text-xs text-slate-400">
          E-mail
          <input
            value={form.email}
            onChange={(e) => set({ email: e.target.value })}
            className="mt-1 w-full rounded bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </label>
        <label className="text-xs text-slate-400">
          Возраст
          <input
            type="number"
            value={form.age}
            onChange={(e) => set({ age: Number(e.target.value) })}
            className="mt-1 w-full rounded bg-slate-800 px-2 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </label>
      </div>

      <button
        onClick={run}
        className="rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
      >
        Проверить форму
      </button>

      {/* Цепочка проверок. */}
      <div className="space-y-3">
        {VALIDATORS.map((validator, i) => {
          // steps[i] есть только у звеньев, до которых дошла цепочка.
          const step = result?.steps[i];
          const shown = step !== undefined && shownSteps > i;
          // Звено, которого нет в steps (fail-fast оборвался раньше).
          const skipped = finished && step === undefined;

          return (
            <div
              key={validator.title}
              className={[
                "flex items-center justify-between rounded-lg border p-4 transition-colors duration-300",
                shown && step.status === "ok"
                  ? "border-emerald-500 bg-emerald-950"
                  : shown && step.status === "error"
                    ? "border-rose-500 bg-rose-950"
                    : skipped
                      ? "border-slate-800 bg-slate-900/40 opacity-50"
                      : "border-slate-700 bg-slate-900",
              ].join(" ")}
            >
              <p className="text-sm font-semibold text-white">
                {validator.title}
              </p>
              {shown && step.status === "ok" && (
                <span className="text-sm font-semibold text-emerald-400">
                  ✓ пройдено
                </span>
              )}
              {shown && step.status === "error" && (
                <span className="text-sm text-rose-300">✕ {step.message}</span>
              )}
              {skipped && (
                <span className="text-xs text-slate-500">не выполнялось</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Итог. */}
      {finished && result && (
        <div
          className={[
            "rounded-lg border p-4 text-sm",
            result.valid
              ? "border-emerald-600 bg-emerald-950 text-emerald-200"
              : "border-rose-600 bg-rose-950 text-rose-200",
          ].join(" ")}
        >
          {result.valid ? (
            "Форма прошла все проверки ✓"
          ) : (
            <>
              <p className="font-semibold">
                Форма не прошла проверку ({result.errors.length}{" "}
                {mode === "fail-fast" ? "— остановились на первой" : "ошибок"}):
              </p>
              <ul className="mt-1 list-disc pl-5">
                {result.errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
`,X={meta:{id:"chain-of-responsibility",title:"Chain of Responsibility",category:"behavioral",summary:"Запрос идёт по цепочке обработчиков, пока один из них его не обработает."},Demo:j,Explanation:B,code:[{filename:"approval.ts",language:"typescript",source:I},{filename:"ApprovalDemo.tsx",language:"tsx",source:$},{filename:"validation.ts",language:"typescript",source:H},{filename:"ValidationDemo.tsx",language:"tsx",source:L}]};export{X as default};
