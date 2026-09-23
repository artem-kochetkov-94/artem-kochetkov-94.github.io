/**
 * Виды баз данных — семь моделей хранения из FAQ слайда: у каждой свой
 * "родной" паттерн доступа к данным, и часто именно характер обращений
 * (а не любовь к конкретной технологии) должен определять выбор. Формат —
 * тот же, что и в "Классах БД": сценарий → какой вид базы ему на самом деле
 * нужен.
 */
export type DatabaseType = "relational" | "document" | "graph" | "key-value" | "columnar" | "time-series" | "blob";
export declare const DATABASE_TYPES: {
    id: DatabaseType;
    label: string;
    examples: string;
}[];
export interface TypeQuizItem {
    id: number;
    prompt: string;
    answer: DatabaseType;
    explanation: string;
}
export declare const TYPE_QUIZ: TypeQuizItem[];
