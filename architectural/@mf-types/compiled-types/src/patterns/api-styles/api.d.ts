/**
 * REST vs GraphQL на одной и той же задаче: "получить имя пользователя и
 * заголовки его 3 последних постов". REST устроен вокруг ресурсов — чтобы
 * собрать экран, часто нужно несколько запросов, и каждый отдаёт объект
 * целиком (over-fetching). GraphQL — один запрос с точным списком полей.
 */
export type ApiStyle = "rest" | "graphql";
export declare const API_STYLES: {
    id: ApiStyle;
    label: string;
    hint: string;
}[];
export interface ApiStep {
    id: number;
    label: string;
    request: string;
    response: string;
    description: string;
}
export declare function getApiSteps(style: ApiStyle): ApiStep[];
