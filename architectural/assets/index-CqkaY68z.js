/* empty css              */import{a as t,_ as n}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as w}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";const b=[{id:"functional",label:"Функциональное"},{id:"non-functional",label:"Нефункциональное"}],c=[{id:1,prompt:"Пользователь может добавить товар в корзину.",answer:"functional",explanation:"Конкретное действие, которое пользователь выполняет в системе, — классическая функция."},{id:2,prompt:"Страница должна открываться не дольше 200мс на 95-м перцентиле запросов.",answer:"non-functional",explanation:"Про то, НАСКОЛЬКО ХОРОШО работает система (производительность), а не про то, что она делает."},{id:3,prompt:"Система должна выдерживать 10 000 одновременных пользователей без деградации.",answer:"non-functional",explanation:"Ограничение на масштабируемость и нагрузочную способность — свойство системы, не функция."},{id:4,prompt:"Администратор может заблокировать учётную запись пользователя.",answer:"functional",explanation:"Снова конкретное действие, доступное определённой роли пользователей."},{id:5,prompt:"Покрытие кода тестами должно быть не ниже 80%.",answer:"non-functional",explanation:"Требование к сопровождаемости и качеству кода, а не к поведению системы для пользователя."},{id:6,prompt:"Доступность сервиса — не менее 99.9% в месяц (SLA).",answer:"non-functional",explanation:"Требование к надёжности — сколько времени система обязана быть доступна, а не что именно она делает."},{id:7,prompt:"Пользователь может восстановить пароль через письмо на email.",answer:"functional",explanation:"Конкретный, видимый пользователю сценарий использования системы."},{id:8,prompt:"Все пароли пользователей должны храниться в захешированном виде.",answer:"non-functional",explanation:"Ограничение на то, КАК устроена система внутри (безопасность), а не что пользователь может сделать."}];function h(){const[s,m]=w({}),p=Object.keys(s).length,u=c.filter(e=>s[e.id]===e.answer).length;return t("div",{className:"space-y-4",children:[t("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[n("p",{className:"text-sm text-slate-400",children:"Каждое требование — функциональное (что делает система) или нефункциональное (каким свойством обладает)?"}),t("span",{className:"rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300",children:["верно: ",u," / ",p||"?"]})]}),n("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:c.map(e=>{const a=s[e.id],o=a!==void 0,l=a===e.answer;return t("div",{className:["rounded-lg border p-4 transition-colors",o?l?"border-emerald-500 bg-emerald-950/20":"border-rose-500 bg-rose-950/20":"border-slate-700 bg-slate-900/50"].join(" "),children:[n("p",{className:"text-sm text-slate-200",children:e.prompt}),n("div",{className:"mt-3 flex flex-wrap gap-2",children:b.map(r=>{const x=a===r.id,d=r.id===e.answer;let i="border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";return o&&d?i="border-emerald-500 bg-emerald-600/20 text-emerald-300":x&&!d&&(i="border-rose-500 bg-rose-600/20 text-rose-300"),n("button",{onClick:()=>m(f=>({...f,[e.id]:r.id})),className:`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${i}`,children:r.label},r.id)})}),o&&t("p",{className:"mt-3 text-xs text-slate-400",children:[l?"✅ ":"❌ ",e.explanation]})]},e.id)})})]})}function N(){return t("div",{className:"space-y-4 text-slate-300",children:[n("p",{children:"Прежде чем проектировать систему, нужно понять, чего от неё ждут. Требования делятся на две категории с принципиально разным содержанием."}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Функциональные требования"}),n("p",{className:"mt-2",children:"Заявление о том, КАК ДОЛЖНА ВЕСТИ СЕБЯ система. Определяют, что она должна делать, чтобы удовлетворить ожидания пользователя. Функциональные требования можно рассматривать как функции, которые обнаруживает пользователь: «добавить в корзину», «оформить заказ», «восстановить пароль»."})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Нефункциональные требования"}),n("p",{className:"mt-2",children:"Требования, определяющие свойства, которые система должна демонстрировать, или ограничения, которые она должна соблюдать, — но НЕ ОТНОСЯЩИЕСЯ К ПОВЕДЕНИЮ системы. Например: производительность, удобство сопровождения, расширяемость, надёжность, безопасность, масштабируемость."})]}),t("div",{children:[n("h3",{className:"font-semibold text-white",children:"Практический тест"}),n("p",{className:"mt-2",children:"Если требование можно переформулировать как «пользователь может [сделать что-то]» — это функциональное требование. Если оно про ЧИСЛА, СВОЙСТВА или ОГРАНИЧЕНИЯ («не дольше», «не менее», «должно быть зашифровано», «должно выдерживать») — нефункциональное. Оба типа одинаково важны при проектировании: без функциональных требований непонятно, что строить, без нефункциональных — непонятно, выдержит ли построенное реальную нагрузку."})]})]})}const g=`/**
 * Требования к системе делятся на две категории с принципиально разным
 * содержанием:
 *  - Функциональные — ЧТО система должна делать: конкретные действия и
 *    возможности, которые видит и использует пользователь.
 *  - Нефункциональные — КАКИМИ свойствами система должна обладать, не
 *    относящимися к конкретному поведению: производительность,
 *    масштабируемость, надёжность, безопасность, сопровождаемость.
 */

export type RequirementType = "functional" | "non-functional";

export const REQUIREMENT_OPTIONS: { id: RequirementType; label: string }[] = [
  { id: "functional", label: "Функциональное" },
  { id: "non-functional", label: "Нефункциональное" },
];

export interface RequirementQuizItem {
  id: number;
  prompt: string;
  answer: RequirementType;
  explanation: string;
}

export const REQUIREMENTS_QUIZ: RequirementQuizItem[] = [
  {
    id: 1,
    prompt: "Пользователь может добавить товар в корзину.",
    answer: "functional",
    explanation: "Конкретное действие, которое пользователь выполняет в системе, — классическая функция.",
  },
  {
    id: 2,
    prompt: "Страница должна открываться не дольше 200мс на 95-м перцентиле запросов.",
    answer: "non-functional",
    explanation: "Про то, НАСКОЛЬКО ХОРОШО работает система (производительность), а не про то, что она делает.",
  },
  {
    id: 3,
    prompt: "Система должна выдерживать 10 000 одновременных пользователей без деградации.",
    answer: "non-functional",
    explanation: "Ограничение на масштабируемость и нагрузочную способность — свойство системы, не функция.",
  },
  {
    id: 4,
    prompt: "Администратор может заблокировать учётную запись пользователя.",
    answer: "functional",
    explanation: "Снова конкретное действие, доступное определённой роли пользователей.",
  },
  {
    id: 5,
    prompt: "Покрытие кода тестами должно быть не ниже 80%.",
    answer: "non-functional",
    explanation: "Требование к сопровождаемости и качеству кода, а не к поведению системы для пользователя.",
  },
  {
    id: 6,
    prompt: "Доступность сервиса — не менее 99.9% в месяц (SLA).",
    answer: "non-functional",
    explanation: "Требование к надёжности — сколько времени система обязана быть доступна, а не что именно она делает.",
  },
  {
    id: 7,
    prompt: "Пользователь может восстановить пароль через письмо на email.",
    answer: "functional",
    explanation: "Конкретный, видимый пользователю сценарий использования системы.",
  },
  {
    id: 8,
    prompt: "Все пароли пользователей должны храниться в захешированном виде.",
    answer: "non-functional",
    explanation: "Ограничение на то, КАК устроена система внутри (безопасность), а не что пользователь может сделать.",
  },
];
`,E=`import { useState } from "react";
import { REQUIREMENTS_QUIZ, REQUIREMENT_OPTIONS, type RequirementType } from "./requirements";

export function Demo() {
  const [answers, setAnswers] = useState<Record<number, RequirementType>>({});
  const answeredCount = Object.keys(answers).length;
  const correctCount = REQUIREMENTS_QUIZ.filter((item) => answers[item.id] === item.answer).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-400">
          Каждое требование — функциональное (что делает система) или нефункциональное (каким свойством обладает)?
        </p>
        <span className="rounded-md bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300">
          верно: {correctCount} / {answeredCount || "?"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {REQUIREMENTS_QUIZ.map((item) => {
          const selected = answers[item.id];
          const answered = selected !== undefined;
          const isCorrect = selected === item.answer;
          return (
            <div
              key={item.id}
              className={[
                "rounded-lg border p-4 transition-colors",
                !answered
                  ? "border-slate-700 bg-slate-900/50"
                  : isCorrect
                    ? "border-emerald-500 bg-emerald-950/20"
                    : "border-rose-500 bg-rose-950/20",
              ].join(" ")}
            >
              <p className="text-sm text-slate-200">{item.prompt}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {REQUIREMENT_OPTIONS.map((opt) => {
                  const isSelected = selected === opt.id;
                  const isTheAnswer = opt.id === item.answer;
                  let tone = "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white";
                  if (answered && isTheAnswer) {
                    tone = "border-emerald-500 bg-emerald-600/20 text-emerald-300";
                  } else if (isSelected && !isTheAnswer) {
                    tone = "border-rose-500 bg-rose-600/20 text-rose-300";
                  }
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setAnswers((prev) => ({ ...prev, [item.id]: opt.id }))}
                      className={\`rounded-full border px-3 py-1 text-xs font-medium transition-colors \${tone}\`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <p className="mt-3 text-xs text-slate-400">
                  {isCorrect ? "✅ " : "❌ "}
                  {item.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
`,T={meta:{id:"requirements",title:"Функциональные vs нефункциональные требования",category:"architectural",summary:"ЧТО система должна делать (функциональные) против КАКИМИ свойствами она должна обладать (нефункциональные) — квиз по восьми сценариям."},Demo:h,Explanation:N,code:[{filename:"requirements.ts",language:"typescript",source:g},{filename:"Demo.tsx",language:"tsx",source:E}]};export{T as default};
