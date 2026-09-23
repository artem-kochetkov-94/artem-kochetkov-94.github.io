/* empty css              */import{a as t,_ as e}from"./_virtual_mf___mfe_internal__architectural__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-Ccdl6s1h.js";import{c as d}from"./_virtual_mf___mfe_internal__architectural__loadShare__react__loadShare__.js-CcWEvvOS.js";const a=[{id:"rest",label:"REST",hint:"Ресурс = URL. Чтобы собрать один экран, часто нужно несколько запросов — и каждый отдаёт объект целиком, лишние поля выбрасываются уже на клиенте."},{id:"graphql",label:"GraphQL",hint:"Один запрос с точным списком нужных полей — сервер отдаёт ровно то, что попросили, и ничего лишнего."}],o=[{id:1,label:"Запрос 1 из 2 — GET /users/42",request:"GET /users/42",response:`{
  "id": 42,
  "name": "Ирина",
  "email": "irina@example.com",
  "phone": "+7 900 000-00-00",
  "address": "Москва, ...",
  "bio": "Люблю читать и путешествовать..."
}`,description:"Экрану нужно только имя — но REST отдаёт весь объект пользователя целиком: email, телефон, адрес, био уйдут в мусор на клиенте."},{id:2,label:"Запрос 2 из 2 — GET /users/42/posts?limit=3",request:"GET /users/42/posts?limit=3",response:`[
  { "id": 1, "title": "Заголовок 1", "body": "...текст поста...", "createdAt": "...", "tags": [...] },
  { "id": 2, "title": "Заголовок 2", "body": "...текст поста...", "createdAt": "...", "tags": [...] },
  { "id": 3, "title": "Заголовок 3", "body": "...текст поста...", "createdAt": "...", "tags": [...] }
]`,description:"Второй отдельный запрос — и снова лишнее: нужен был только title, а прилетел весь текст поста, дата и теги для каждого из трёх постов."}],p=[{id:1,label:"Один запрос — POST /graphql",request:`query {
  user(id: 42) {
    name
    posts(limit: 3) {
      title
    }
  }
}`,response:`{
  "data": {
    "user": {
      "name": "Ирина",
      "posts": [
        { "title": "Заголовок 1" },
        { "title": "Заголовок 2" },
        { "title": "Заголовок 3" }
      ]
    }
  }
}`,description:"Один запрос, один ответ — ровно те поля, что были нужны экрану, и ни байтом больше. Клиент сам решает форму ответа прямо в запросе."}];function c(s){return s==="rest"?o:p}function m(){const[s,l]=d("rest"),r=a.find(n=>n.id===s),i=c(s);return t("div",{className:"space-y-6",children:[t("div",{className:"flex flex-wrap gap-2",children:[a.map(n=>e("button",{onClick:()=>l(n.id),className:["rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",n.id===s?"border-indigo-500 bg-indigo-600 text-white":"border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"].join(" "),children:n.label},n.id)),t("span",{className:"ml-auto rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-xs text-slate-300",children:[i.length," ",i.length===1?"запрос":"запроса"," на экран"]})]}),e("p",{className:"text-sm text-slate-400",children:r.hint}),e("p",{className:"text-xs uppercase tracking-wider text-slate-500",children:"Задача: получить имя пользователя и заголовки его 3 последних постов."}),e("div",{className:"space-y-4",children:i.map(n=>t("div",{className:"rounded-lg border border-slate-800 bg-slate-900/50 p-4",children:[e("p",{className:"font-mono text-xs text-indigo-300",children:n.label}),t("div",{className:"mt-3 grid grid-cols-1 gap-3 md:grid-cols-2",children:[t("div",{children:[e("p",{className:"mb-1 text-[10px] uppercase tracking-wider text-slate-500",children:"Запрос"}),e("pre",{className:"overflow-x-auto rounded-md bg-slate-950 p-3 font-mono text-xs text-sky-300",children:n.request})]}),t("div",{children:[e("p",{className:"mb-1 text-[10px] uppercase tracking-wider text-slate-500",children:"Ответ"}),e("pre",{className:"overflow-x-auto rounded-md bg-slate-950 p-3 font-mono text-xs text-slate-300",children:n.response})]})]}),e("p",{className:"mt-3 text-sm text-slate-300",children:n.description})]},n.id))})]})}function x(){return t("div",{className:"space-y-4 text-slate-300",children:[t("p",{children:[e("strong",{className:"text-white",children:"CRUD"})," — четыре базовые операции с данными: создание, чтение, модификация, удаление. Разные стили API — это разные способы описать эти операции по сети."]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"REST"}),e("p",{className:"mt-2",children:"Глагол (GET/POST/PUT/DELETE) + существительное (URI ресурса) + заголовки + тело в JSON + код ответа. Простой, повсеместный, хорошо кэшируется на уровне HTTP. Главная слабость — негибкая форма ответа: чтобы собрать один экран из нескольких связанных ресурсов, часто нужно несколько запросов (демо рядом), а каждый отдаёт объект целиком, даже если нужно одно поле."})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"GraphQL"}),t("p",{className:"mt-2",children:["Клиент сам описывает форму нужного ответа прямо в запросе — один запрос вместо нескольких, и сервер отдаёт ровно запрошенные поля. Кроме чтения (",e("code",{className:"rounded bg-slate-800 px-1",children:"query"}),") есть запись (",e("code",{className:"rounded bg-slate-800 px-1",children:"mutation"}),") и живые подписки на изменения (",e("code",{className:"rounded bg-slate-800 px-1",children:"subscription"}),'). Плата за гибкость — HTTP-кэширование "из коробки" уже не работает так же просто, как с REST (все запросы обычно идут на один и тот же URL).']})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"gRPC"}),t("p",{className:"mt-2",children:["RPC-класс: клиент вызывает функцию на удалённом сервисе так, будто она локальная. Контракт описывается в"," ",e("code",{className:"rounded bg-slate-800 px-1",children:".proto"}),"-файле, данные сериализуются в бинарный Protocol Buffers (компактнее и быстрее JSON), поверх HTTP/2 — со стримингом в обе стороны. Внутри инфраструктуры (сервис-сервис) — частый выбор именно из-за скорости и строгой типизации; для браузерных клиентов не так удобен, как REST/GraphQL."]})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"SOAP"}),e("p",{className:"mt-2",children:"Протокол поверх XML-конвертов с собственной спецификацией ошибок и типов. Многословный и тяжеловесный по сравнению с современными альтернативами — на новых проектах почти не встречается, живёт в основном в legacy-интеграциях (банки, госсектор, старые корпоративные системы)."})]}),t("div",{children:[e("h3",{className:"font-semibold text-white",children:"Итого"}),e("p",{className:"mt-2",children:"SOAP — фактически мёртв на новых проектах. REST — рабочая лошадка для клиент-серверного взаимодействия. gRPC — внутренняя связь между сервисами, где важна скорость. GraphQL — там, где клиенту нужна гибкость в форме ответа (мобильные приложения с разными экранами, агрегация нескольких источников за один запрос)."})]})]})}const h=`/**
 * REST vs GraphQL на одной и той же задаче: "получить имя пользователя и
 * заголовки его 3 последних постов". REST устроен вокруг ресурсов — чтобы
 * собрать экран, часто нужно несколько запросов, и каждый отдаёт объект
 * целиком (over-fetching). GraphQL — один запрос с точным списком полей.
 */

export type ApiStyle = "rest" | "graphql";

export const API_STYLES: { id: ApiStyle; label: string; hint: string }[] = [
  {
    id: "rest",
    label: "REST",
    hint: "Ресурс = URL. Чтобы собрать один экран, часто нужно несколько запросов — и каждый отдаёт объект целиком, лишние поля выбрасываются уже на клиенте.",
  },
  {
    id: "graphql",
    label: "GraphQL",
    hint: "Один запрос с точным списком нужных полей — сервер отдаёт ровно то, что попросили, и ничего лишнего.",
  },
];

export interface ApiStep {
  id: number;
  label: string;
  request: string;
  response: string;
  description: string;
}

const REST_STEPS: ApiStep[] = [
  {
    id: 1,
    label: "Запрос 1 из 2 — GET /users/42",
    request: "GET /users/42",
    response: \`{
  "id": 42,
  "name": "Ирина",
  "email": "irina@example.com",
  "phone": "+7 900 000-00-00",
  "address": "Москва, ...",
  "bio": "Люблю читать и путешествовать..."
}\`,
    description:
      "Экрану нужно только имя — но REST отдаёт весь объект пользователя целиком: email, телефон, адрес, био уйдут в мусор на клиенте.",
  },
  {
    id: 2,
    label: "Запрос 2 из 2 — GET /users/42/posts?limit=3",
    request: "GET /users/42/posts?limit=3",
    response: \`[
  { "id": 1, "title": "Заголовок 1", "body": "...текст поста...", "createdAt": "...", "tags": [...] },
  { "id": 2, "title": "Заголовок 2", "body": "...текст поста...", "createdAt": "...", "tags": [...] },
  { "id": 3, "title": "Заголовок 3", "body": "...текст поста...", "createdAt": "...", "tags": [...] }
]\`,
    description:
      "Второй отдельный запрос — и снова лишнее: нужен был только title, а прилетел весь текст поста, дата и теги для каждого из трёх постов.",
  },
];

const GRAPHQL_STEPS: ApiStep[] = [
  {
    id: 1,
    label: "Один запрос — POST /graphql",
    request: \`query {
  user(id: 42) {
    name
    posts(limit: 3) {
      title
    }
  }
}\`,
    response: \`{
  "data": {
    "user": {
      "name": "Ирина",
      "posts": [
        { "title": "Заголовок 1" },
        { "title": "Заголовок 2" },
        { "title": "Заголовок 3" }
      ]
    }
  }
}\`,
    description:
      "Один запрос, один ответ — ровно те поля, что были нужны экрану, и ни байтом больше. Клиент сам решает форму ответа прямо в запросе.",
  },
];

export function getApiSteps(style: ApiStyle): ApiStep[] {
  return style === "rest" ? REST_STEPS : GRAPHQL_STEPS;
}
`,u=`import { useState } from "react";
import { API_STYLES, getApiSteps, type ApiStyle } from "./api";

export function Demo() {
  const [style, setStyle] = useState<ApiStyle>("rest");
  const info = API_STYLES.find((s) => s.id === style)!;
  const steps = getApiSteps(style);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {API_STYLES.map((s) => (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              s.id === style
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white",
            ].join(" ")}
          >
            {s.label}
          </button>
        ))}
        <span className="ml-auto rounded-md bg-slate-800/60 px-3 py-1.5 font-mono text-xs text-slate-300">
          {steps.length} {steps.length === 1 ? "запрос" : "запроса"} на экран
        </span>
      </div>

      <p className="text-sm text-slate-400">{info.hint}</p>

      <p className="text-xs uppercase tracking-wider text-slate-500">
        Задача: получить имя пользователя и заголовки его 3 последних постов.
      </p>

      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <p className="font-mono text-xs text-indigo-300">{step.label}</p>

            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">
                  Запрос
                </p>
                <pre className="overflow-x-auto rounded-md bg-slate-950 p-3 font-mono text-xs text-sky-300">
                  {step.request}
                </pre>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">
                  Ответ
                </p>
                <pre className="overflow-x-auto rounded-md bg-slate-950 p-3 font-mono text-xs text-slate-300">
                  {step.response}
                </pre>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
`,f={meta:{id:"api-styles",title:"Типы API: REST vs GraphQL",category:"architectural",summary:"Одна и та же задача — получить пользователя и заголовки его постов — двумя способами: REST (несколько запросов, over-fetching) и GraphQL (один запрос, точные поля)."},Demo:m,Explanation:x,code:[{filename:"api.ts",language:"typescript",source:h},{filename:"Demo.tsx",language:"tsx",source:u}]};export{f as default};
