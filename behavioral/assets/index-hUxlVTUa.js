/* empty css              */import{a as t,_ as e}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{d as v,c as u}from"./_virtual_mf___mfe_internal__behavioral__loadShare__react__loadShare__.js-CXaPNXH0.js";class N{text=""}class y{constructor(n,a){this.doc=n,this.chunk=a,this.label=`Ввод «${a}»`}label;execute(){this.doc.text+=this.chunk}undo(){this.doc.text=this.doc.text.slice(0,-this.chunk.length)}}class w{constructor(n){this.doc=n}label="Стереть символ";removed="";execute(){this.removed=this.doc.text.slice(-1),this.doc.text=this.doc.text.slice(0,-1)}undo(){this.doc.text+=this.removed}}class C{constructor(n){this.doc=n}label="Очистить всё";previous="";execute(){this.previous=this.doc.text,this.doc.text=""}undo(){this.doc.text=this.previous}}class k{done=[];undone=[];execute(n){n.execute(),this.done.push(n),this.undone=[]}undo(){const n=this.done.pop();n&&(n.undo(),this.undone.push(n))}redo(){const n=this.undone.pop();n&&(n.execute(),this.done.push(n))}get canUndo(){return this.done.length>0}get canRedo(){return this.undone.length>0}get log(){return this.done.map(n=>n.label)}}const D=["React","паттерн","команда","undo","история","👍"];function R(){const i=v(new N),n=v(new k),[,a]=u(0),d=()=>a(r=>r+1),o=i.current,l=n.current,m=r=>{l.execute(r),d()},h=()=>{l.undo(),d()},b=()=>{l.redo(),d()};return t("div",{className:"space-y-6",children:[t("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-5",children:[e("p",{className:"text-sm font-semibold text-white",children:"Документ"}),e("p",{className:"text-xs text-slate-500",children:"получатель команд — сам не знает ни про историю, ни про кнопки"}),t("div",{className:"mt-3 min-h-16 rounded border border-slate-700 bg-slate-950 p-3 font-mono text-sm break-words text-emerald-200",children:[o.text||e("span",{className:"text-slate-600",children:"пусто — введите что-нибудь…"}),e("span",{className:"animate-pulse text-emerald-400",children:"▍"})]})]}),t("div",{className:"space-y-3",children:[e("p",{className:"text-xs font-semibold tracking-wide text-slate-400 uppercase",children:"Команды"}),t("div",{className:"flex flex-wrap gap-2",children:[D.map(r=>t("button",{onClick:()=>m(new y(o,r+" ")),className:"rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-indigo-500 hover:text-white",children:["+ ",r]},r)),e("button",{onClick:()=>m(new w(o)),disabled:o.text.length===0,className:"rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-amber-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40",children:"⌫ стереть"}),e("button",{onClick:()=>m(new C(o)),disabled:o.text.length===0,className:"rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-rose-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40",children:"🗑 очистить"})]}),t("div",{className:"flex flex-wrap gap-2",children:[e("button",{onClick:h,disabled:!l.canUndo,className:"rounded bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40",children:"↶ Отменить"}),e("button",{onClick:b,disabled:!l.canRedo,className:"rounded bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40",children:"↷ Повторить"})]})]}),t("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-5",children:[e("p",{className:"text-sm font-semibold text-white",children:"История команд"}),l.log.length===0?e("p",{className:"mt-2 text-xs text-slate-500",children:"пока пусто — каждая команда добавит сюда запись"}):e("ol",{className:"mt-3 space-y-1",children:l.log.map((r,x)=>t("li",{className:"flex items-center gap-2 text-sm text-slate-300",children:[e("span",{className:"w-5 text-right text-xs text-slate-600",children:x+1}),e("span",{className:"rounded bg-slate-800 px-2 py-0.5",children:r})]},x))})]})]})}class S{state={light:!1,door:!1,music:!1,ac:!1};isOn(n){return this.state[n]}set(n,a){this.state[n]=a}}class T{constructor(n,a,d,o){this.label=n,this.home=a,this.device=d,this.on=o}previous=!1;execute(){this.previous=this.home.isOn(this.device),this.home.set(this.device,this.on)}undo(){this.home.set(this.device,this.previous)}}class E{constructor(n,a){this.label=n,this.commands=a}execute(){this.commands.forEach(n=>n.execute())}undo(){[...this.commands].reverse().forEach(n=>n.undo())}}const I=[{id:"light",name:"Свет",icon:"💡"},{id:"door",name:"Дверь",icon:"🚪"},{id:"music",name:"Музыка",icon:"🎵"},{id:"ac",name:"Кондиционер",icon:"❄️"}],M=[{device:"light",on:!0,label:"Включить свет"},{device:"light",on:!1,label:"Выключить свет"},{device:"door",on:!0,label:"Открыть дверь"},{device:"door",on:!1,label:"Закрыть дверь"},{device:"music",on:!0,label:"Включить музыку"},{device:"music",on:!1,label:"Выключить музыку"},{device:"ac",on:!0,label:"Включить кондиционер"},{device:"ac",on:!1,label:"Выключить кондиционер"}];function q(){const i=v(new S),[,n]=u(0),a=()=>n(s=>s+1),[d,o]=u([]),[l,m]=u(null),h=i.current,b=(s,c,g)=>{o(f=>[...f,new T(g,h,s,c)])},r=()=>{if(d.length===0)return;const s=new E("Сценарий",d);s.execute(),m(s),o([]),a()},x=()=>{l&&(l.undo(),m(null),a())};return t("div",{className:"space-y-6",children:[e("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-4",children:I.map(s=>{const c=h.isOn(s.id);return t("div",{className:["rounded-lg border p-4 text-center transition-colors duration-300",c?"border-emerald-500 bg-emerald-950":"border-slate-700 bg-slate-900"].join(" "),children:[e("div",{className:"text-2xl",children:s.icon}),e("p",{className:"mt-1 text-sm font-semibold text-white",children:s.name}),e("p",{className:["text-xs",c?"text-emerald-400":"text-slate-500"].join(" "),children:c?"вкл":"выкл"})]},s.id)})}),t("div",{className:"space-y-3",children:[e("p",{className:"text-xs font-semibold tracking-wide text-slate-400 uppercase",children:"Собрать сценарий"}),e("div",{className:"flex flex-wrap gap-2",children:M.map(s=>e("button",{onClick:()=>b(s.device,s.on,s.label),className:"rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-indigo-500 hover:text-white",children:s.label},s.label))})]}),t("div",{className:"rounded-lg border border-slate-700 bg-slate-900 p-5",children:[t("div",{className:"flex items-center justify-between",children:[e("p",{className:"text-sm font-semibold text-white",children:"Очередь команд"}),t("span",{className:"text-xs text-slate-500",children:[d.length," в очереди"]})]}),d.length===0?e("p",{className:"mt-2 text-xs text-slate-500",children:"пусто — соберите сценарий из команд выше"}):e("ol",{className:"mt-3 space-y-1",children:d.map((s,c)=>t("li",{className:"flex items-center gap-2 text-sm text-slate-300",children:[e("span",{className:"w-5 text-right text-xs text-slate-600",children:c+1}),e("span",{className:"rounded bg-slate-800 px-2 py-0.5",children:s.label})]},c))}),t("div",{className:"mt-4 flex flex-wrap gap-2",children:[e("button",{onClick:r,disabled:d.length===0,className:"rounded bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40",children:"▶ Запустить сценарий"}),e("button",{onClick:()=>o([]),disabled:d.length===0,className:"rounded border border-slate-700 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40",children:"Очистить очередь"}),e("button",{onClick:x,disabled:!l,className:"rounded bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40",children:"↶ Отменить сценарий"})]})]})]})}const p=[{id:"undo-redo",label:"Undo / Redo",hint:"Редактор: каждое действие — команда, поэтому его можно отменить и повторить.",render:R},{id:"queue",label:"Очередь и макрос",hint:"Умный дом: команды копятся в очередь и запускаются одним сценарием.",render:q}];function A(){const[i,n]=u(p[0].id),a=p.find(o=>o.id===i)??p[0],d=a.render;return t("div",{className:"space-y-6",children:[e("div",{className:"flex flex-wrap gap-2",children:p.map(o=>e("button",{onClick:()=>n(o.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",o.id===i?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:o.label},o.id))}),e("p",{className:"text-sm text-slate-400",children:a.hint}),e("div",{children:e(d,{})},a.id)]})}function _(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[e("strong",{className:"text-white",children:"Command (Команда)"})," — поведенческий паттерн, который превращает запрос (действие) в самостоятельный объект. Этот объект хранит всё необходимое для вызова: что сделать и над кем. Раз действие стало объектом, его можно передавать как параметр, складывать в очередь, логировать и — главное — отменять."]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Когда применять"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[e("li",{children:"Когда нужны отмена и повтор действий (Undo/Redo) — каждая команда знает, как откатить саму себя."}),e("li",{children:"Когда операции нужно ставить в очередь, выполнять отложенно, повторять или объединять в макросы/сценарии."}),e("li",{children:"Когда хочется отделить объект, инициирующий операцию (кнопку, пункт меню), от объекта, который знает, как её выполнить."})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Из чего состоит"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Command"})," — интерфейс с методами"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"execute"})," и"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"undo"}),"."]}),t("li",{children:[e("strong",{children:"ConcreteCommand"})," — конкретная команда. Хранит ссылку на получателя и параметры, а для отмены — состояние, нужное для отката (стёртый текст, прежнее значение)."]}),t("li",{children:[e("strong",{children:"Receiver (Получатель)"})," — тот, кто реально выполняет работу (документ, умный дом). Не знает про команды."]}),t("li",{children:[e("strong",{children:"Invoker (Отправитель)"})," — вызывает команды и хранит их историю/очередь. Работает только через интерфейс, не зная их деталей."]}),t("li",{children:[e("strong",{children:"Client"})," — создаёт команды и связывает их с получателем."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Две грани (см. вкладку «Демо»)"}),t("ul",{className:"mt-2 list-disc space-y-1 pl-5",children:[t("li",{children:[e("strong",{children:"Undo/Redo"})," — Invoker держит две стопки: выполненных и отменённых команд. Отмена снимает команду с одной стопки и кладёт на другую. Так работают редакторы, графические инструменты, формы."]}),t("li",{children:[e("strong",{children:"Очередь и макрос"})," — команды не выполняются сразу, а копятся, переставляются и запускаются пачкой. Несколько команд объединяются в составную (MacroCommand) и применяются как одна."]})]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Где встречается на практике"}),t("p",{className:"mt-2",children:["История изменений в Redux/redux-undo, action-объекты в Redux,"," ",e("code",{className:"rounded bg-slate-800 px-1",children:"undo/redo"})," в редакторах, очереди задач и оптимистичные обновления, кнопки и пункты меню, привязанные к командам, а не к коду напрямую."]})]})]})}const L=`/**
 * Command (Команда) — пример с Undo/Redo. Чистый TypeScript, без React.
 * Это "ядро" примера.
 *
 * Идея: каждое действие над документом упаковано в объект-команду с двумя
 * методами — execute() и undo(). Раз действие — это объект, его можно
 * сложить в историю, а значит отменить и повторить.
 *
 * Получатель (TextDocument) не знает про историю, а отправитель (кнопки UI)
 * не знает, как именно меняется документ — он лишь отдаёт команду Invoker'у.
 */

/**
 * Команда: знает, как выполнить действие и как откатить его назад.
 * \`label\` нужен только для наглядной истории в демо.
 */
export interface Command {
  /** Человекочитаемое имя для журнала истории. */
  readonly label: string;
  /** Выполнить действие над получателем. */
  execute(): void;
  /** Отменить действие — вернуть получателя в состояние до execute(). */
  undo(): void;
}

/**
 * Получатель (Receiver) — документ, который хранит текст.
 * Сам по себе ничего не знает о командах: умеет лишь менять свой текст.
 */
export class TextDocument {
  text = "";
}

/**
 * Команда "дописать текст в конец".
 * Для отмены достаточно отрезать ровно столько символов, сколько добавили.
 */
export class AppendText implements Command {
  readonly label: string;

  constructor(
    private readonly doc: TextDocument,
    private readonly chunk: string,
  ) {
    this.label = \`Ввод «\${chunk}»\`;
  }

  execute(): void {
    this.doc.text += this.chunk;
  }

  undo(): void {
    this.doc.text = this.doc.text.slice(0, -this.chunk.length);
  }
}

/**
 * Команда "стереть последний символ".
 * Чтобы уметь отменить удаление, команда ЗАПОМИНАЕТ стёртый символ —
 * это и есть состояние, нужное для отката.
 */
export class DeleteLast implements Command {
  readonly label = "Стереть символ";
  private removed = "";

  constructor(private readonly doc: TextDocument) {}

  execute(): void {
    this.removed = this.doc.text.slice(-1);
    this.doc.text = this.doc.text.slice(0, -1);
  }

  undo(): void {
    this.doc.text += this.removed;
  }
}

/**
 * Команда "очистить документ".
 * Запоминает весь прежний текст, чтобы восстановить его при отмене.
 */
export class ClearAll implements Command {
  readonly label = "Очистить всё";
  private previous = "";

  constructor(private readonly doc: TextDocument) {}

  execute(): void {
    this.previous = this.doc.text;
    this.doc.text = "";
  }

  undo(): void {
    this.doc.text = this.previous;
  }
}

/**
 * Invoker (отправитель + история). Он один знает о порядке действий и
 * умеет откатывать/повторять их. О деталях команд он ничего не знает —
 * работает только через интерфейс execute()/undo().
 *
 * Две стопки:
 *  - done   — выполненные команды (их можно отменить);
 *  - undone — отменённые команды (их можно повторить).
 * Новая команда очищает стопку undone — повторять стало нечего.
 */
export class History {
  private done: Command[] = [];
  private undone: Command[] = [];

  /** Выполнить новую команду и положить её в историю. */
  execute(command: Command): void {
    command.execute();
    this.done.push(command);
    this.undone = [];
  }

  /** Отменить последнюю выполненную команду. */
  undo(): void {
    const command = this.done.pop();
    if (!command) return;
    command.undo();
    this.undone.push(command);
  }

  /** Повторить последнюю отменённую команду. */
  redo(): void {
    const command = this.undone.pop();
    if (!command) return;
    command.execute();
    this.done.push(command);
  }

  get canUndo(): boolean {
    return this.done.length > 0;
  }

  get canRedo(): boolean {
    return this.undone.length > 0;
  }

  /** Список названий выполненных команд по порядку — для журнала в демо. */
  get log(): string[] {
    return this.done.map((command) => command.label);
  }
}
`,H=`import { useRef, useState } from "react";
import {
  AppendText,
  ClearAll,
  DeleteLast,
  History,
  TextDocument,
  type Command,
} from "./editor";

/**
 * Пример с Undo/Redo. Каждая кнопка не меняет текст напрямую — она
 * создаёт команду и отдаёт её Invoker'у (History). Поэтому любое действие
 * можно отменить и повторить, а история сама ведёт журнал.
 *
 * Документ и история живут в ref (это изменяемые объекты из "ядра"),
 * а перерисовку запускаем счётчиком \`tick\` после каждого действия.
 */
const WORDS = ["React", "паттерн", "команда", "undo", "история", "👍"];

export function EditorDemo() {
  // Получатель и Invoker создаются один раз и переживают перерисовки.
  const docRef = useRef(new TextDocument());
  const historyRef = useRef(new History());
  const [, setTick] = useState(0);
  const rerender = () => setTick((n) => n + 1);

  const doc = docRef.current;
  const history = historyRef.current;

  /** Выполнить команду через Invoker и обновить экран. */
  const run = (command: Command) => {
    history.execute(command);
    rerender();
  };

  const undo = () => {
    history.undo();
    rerender();
  };

  const redo = () => {
    history.redo();
    rerender();
  };

  return (
    <div className="space-y-6">
      {/* Документ — получатель команд. */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <p className="text-sm font-semibold text-white">Документ</p>
        <p className="text-xs text-slate-500">
          получатель команд — сам не знает ни про историю, ни про кнопки
        </p>
        <div className="mt-3 min-h-16 rounded border border-slate-700 bg-slate-950 p-3 font-mono text-sm break-words text-emerald-200">
          {doc.text || (
            <span className="text-slate-600">пусто — введите что-нибудь…</span>
          )}
          <span className="animate-pulse text-emerald-400">▍</span>
        </div>
      </div>

      {/* Пульт: каждая кнопка отправляет команду, не трогая документ напрямую. */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
          Команды
        </p>
        <div className="flex flex-wrap gap-2">
          {WORDS.map((word) => (
            <button
              key={word}
              onClick={() => run(new AppendText(doc, word + " "))}
              className="rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-indigo-500 hover:text-white"
            >
              + {word}
            </button>
          ))}
          <button
            onClick={() => run(new DeleteLast(doc))}
            disabled={doc.text.length === 0}
            className="rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-amber-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            ⌫ стереть
          </button>
          <button
            onClick={() => run(new ClearAll(doc))}
            disabled={doc.text.length === 0}
            className="rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-rose-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            🗑 очистить
          </button>
        </div>

        {/* Управление историей — здесь и раскрывается сила паттерна. */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={undo}
            disabled={!history.canUndo}
            className="rounded bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ↶ Отменить
          </button>
          <button
            onClick={redo}
            disabled={!history.canRedo}
            className="rounded bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ↷ Повторить
          </button>
        </div>
      </div>

      {/* Журнал истории — список выполненных команд по порядку. */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <p className="text-sm font-semibold text-white">История команд</p>
        {history.log.length === 0 ? (
          <p className="mt-2 text-xs text-slate-500">
            пока пусто — каждая команда добавит сюда запись
          </p>
        ) : (
          <ol className="mt-3 space-y-1">
            {history.log.map((label, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className="w-5 text-right text-xs text-slate-600">
                  {i + 1}
                </span>
                <span className="rounded bg-slate-800 px-2 py-0.5">{label}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
`,U=`/**
 * Command (Команда) — пример "очередь и макрос". Чистый TypeScript, без React.
 *
 * Здесь раскрывается другая сторона паттерна: раз действие — это ОБЪЕКТ,
 * команды можно не выполнять сразу, а складывать в очередь, переставлять,
 * сохранять и запускать пачкой. Несколько команд легко объединяются в одну
 * составную команду (MacroCommand) — "сценарий".
 *
 * Интерфейс Command тот же, что и в \`editor.ts\` — паттерн один, меняется
 * лишь получатель и способ применения команд.
 */

/** Команда: знает, как выполнить действие и как откатить его назад. */
export interface Command {
  /** Человекочитаемое имя для очереди/журнала. */
  readonly label: string;
  /** Выполнить действие над получателем. */
  execute(): void;
  /** Отменить действие. */
  undo(): void;
}

/** Идентификаторы устройств умного дома. */
export type DeviceId = "light" | "door" | "music" | "ac";

/** Получатель (Receiver) — умный дом, хранит состояние устройств. */
export class SmartHome {
  private state: Record<DeviceId, boolean> = {
    light: false,
    door: false,
    music: false,
    ac: false,
  };

  isOn(id: DeviceId): boolean {
    return this.state[id];
  }

  set(id: DeviceId, on: boolean): void {
    this.state[id] = on;
  }
}

/**
 * Команда "перевести устройство в заданное состояние".
 * Перед изменением запоминает прежнее состояние — чтобы уметь откатиться.
 */
export class SetDeviceCommand implements Command {
  private previous = false;

  constructor(
    readonly label: string,
    private readonly home: SmartHome,
    private readonly device: DeviceId,
    private readonly on: boolean,
  ) {}

  execute(): void {
    this.previous = this.home.isOn(this.device);
    this.home.set(this.device, this.on);
  }

  undo(): void {
    this.home.set(this.device, this.previous);
  }
}

/**
 * Составная команда (Macro) — сама является командой, но внутри хранит
 * список других команд. execute() прогоняет их по порядку, undo() —
 * откатывает в обратном порядке. Клиент работает с ней как с одной командой.
 */
export class MacroCommand implements Command {
  constructor(
    readonly label: string,
    private readonly commands: Command[],
  ) {}

  execute(): void {
    this.commands.forEach((command) => command.execute());
  }

  undo(): void {
    // Откатываем в обратном порядке — как разбирают стопку: сверху вниз.
    [...this.commands].reverse().forEach((command) => command.undo());
  }
}
`,O=`import { useRef, useState } from "react";
import {
  MacroCommand,
  SetDeviceCommand,
  SmartHome,
  type Command,
  type DeviceId,
} from "./remote";

/** Описание устройств — только для отрисовки карточек. */
const DEVICES: { id: DeviceId; name: string; icon: string }[] = [
  { id: "light", name: "Свет", icon: "💡" },
  { id: "door", name: "Дверь", icon: "🚪" },
  { id: "music", name: "Музыка", icon: "🎵" },
  { id: "ac", name: "Кондиционер", icon: "❄️" },
];

/** Палитра доступных команд — что можно положить в очередь сценария. */
const PALETTE: { device: DeviceId; on: boolean; label: string }[] = [
  { device: "light", on: true, label: "Включить свет" },
  { device: "light", on: false, label: "Выключить свет" },
  { device: "door", on: true, label: "Открыть дверь" },
  { device: "door", on: false, label: "Закрыть дверь" },
  { device: "music", on: true, label: "Включить музыку" },
  { device: "music", on: false, label: "Выключить музыку" },
  { device: "ac", on: true, label: "Включить кондиционер" },
  { device: "ac", on: false, label: "Выключить кондиционер" },
];

/**
 * Пример "очередь и макрос". Кнопки палитры не управляют домом напрямую —
 * они создают команды и складывают их в очередь. Команды копятся, не
 * выполняясь. По кнопке «Запустить» очередь сворачивается в одну составную
 * команду (MacroCommand) и выполняется целиком; отменить сценарий тоже можно
 * целиком — это и есть выгода от того, что действие стало объектом.
 */
export function RemoteDemo() {
  const homeRef = useRef(new SmartHome());
  const [, setTick] = useState(0);
  const rerender = () => setTick((n) => n + 1);

  // Очередь запланированных команд (ещё не выполнены).
  const [queue, setQueue] = useState<Command[]>([]);
  // Последний выполненный сценарий — его можно отменить.
  const [lastMacro, setLastMacro] = useState<MacroCommand | null>(null);

  const home = homeRef.current;

  const enqueue = (device: DeviceId, on: boolean, label: string) => {
    setQueue((q) => [...q, new SetDeviceCommand(label, home, device, on)]);
  };

  const runScenario = () => {
    if (queue.length === 0) return;
    // Сворачиваем очередь в одну составную команду и выполняем её.
    const macro = new MacroCommand("Сценарий", queue);
    macro.execute();
    setLastMacro(macro);
    setQueue([]);
    rerender();
  };

  const undoScenario = () => {
    if (!lastMacro) return;
    lastMacro.undo();
    setLastMacro(null);
    rerender();
  };

  return (
    <div className="space-y-6">
      {/* Устройства — получатели команд. */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {DEVICES.map((device) => {
          const on = home.isOn(device.id);
          return (
            <div
              key={device.id}
              className={[
                "rounded-lg border p-4 text-center transition-colors duration-300",
                on
                  ? "border-emerald-500 bg-emerald-950"
                  : "border-slate-700 bg-slate-900",
              ].join(" ")}
            >
              <div className="text-2xl">{device.icon}</div>
              <p className="mt-1 text-sm font-semibold text-white">
                {device.name}
              </p>
              <p
                className={[
                  "text-xs",
                  on ? "text-emerald-400" : "text-slate-500",
                ].join(" ")}
              >
                {on ? "вкл" : "выкл"}
              </p>
            </div>
          );
        })}
      </div>

      {/* Палитра команд: добавляют команду в очередь, дом пока не трогают. */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
          Собрать сценарий
        </p>
        <div className="flex flex-wrap gap-2">
          {PALETTE.map((item) => (
            <button
              key={item.label}
              onClick={() => enqueue(item.device, item.on, item.label)}
              className="rounded border border-slate-700 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-indigo-500 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Очередь запланированных команд. */}
      <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Очередь команд</p>
          <span className="text-xs text-slate-500">
            {queue.length} в очереди
          </span>
        </div>

        {queue.length === 0 ? (
          <p className="mt-2 text-xs text-slate-500">
            пусто — соберите сценарий из команд выше
          </p>
        ) : (
          <ol className="mt-3 space-y-1">
            {queue.map((command, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className="w-5 text-right text-xs text-slate-600">
                  {i + 1}
                </span>
                <span className="rounded bg-slate-800 px-2 py-0.5">
                  {command.label}
                </span>
              </li>
            ))}
          </ol>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={runScenario}
            disabled={queue.length === 0}
            className="rounded bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ▶ Запустить сценарий
          </button>
          <button
            onClick={() => setQueue([])}
            disabled={queue.length === 0}
            className="rounded border border-slate-700 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-slate-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Очистить очередь
          </button>
          <button
            onClick={undoScenario}
            disabled={!lastMacro}
            className="rounded bg-slate-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ↶ Отменить сценарий
          </button>
        </div>
      </div>
    </div>
  );
}
`,V={meta:{id:"command",title:"Command",category:"behavioral",summary:"Превращает действие в объект — его можно отменить, поставить в очередь и логировать."},Demo:A,Explanation:_,code:[{filename:"editor.ts",language:"typescript",source:L},{filename:"EditorDemo.tsx",language:"tsx",source:H},{filename:"remote.ts",language:"typescript",source:U},{filename:"RemoteDemo.tsx",language:"tsx",source:O}]};export{V as default};
