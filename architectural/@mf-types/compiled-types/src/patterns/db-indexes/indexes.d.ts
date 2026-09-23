/**
 * Индексы ускоряют чтение ценой более медленной записи и лишней памяти —
 * поэтому важно понимать не "индекс — это всегда хорошо", а какой ТИП
 * индекса реально решает конкретный характер запроса.
 */
export type IndexType = "btree" | "hash" | "bitmap" | "spatial" | "reversed";
export declare const INDEX_TYPES: {
    id: IndexType;
    label: string;
    hint: string;
}[];
export interface IndexQuizItem {
    id: number;
    prompt: string;
    answer: IndexType;
    explanation: string;
}
export declare const INDEX_QUIZ: IndexQuizItem[];
