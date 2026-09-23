/**
 * Топология — "кто пишет". Синхронность — "когда клиент получает ACK".
 * Этот паттерн — третья, независимая ось: КАК ИМЕННО изменение физически
 * передаётся с мастера на реплику. Три отдельных вопроса:
 *  - кто инициирует передачу (push/pull);
 *  - что именно передаётся — готовые запросы или готовые строки
 *    (statement-based / row-based / mixed);
 *  - на каком уровне работает репликация — с кортежами или со страницами
 *    на диске (логическая / физическая).
 * Формат — классификация сценариев, а не диаграмма с движением пакетов:
 * тут нечего анимировать, есть только "какой вариант к какой ситуации".
 */
export interface QuizItem<T extends string> {
    id: number;
    prompt: string;
    answer: T;
    explanation: string;
}
export type SourceAxis = "push" | "pull";
export declare const SOURCE_OPTIONS: {
    id: SourceAxis;
    label: string;
}[];
export declare const SOURCE_QUIZ: QuizItem<SourceAxis>[];
export type FormatAxis = "statement" | "row" | "mixed";
export declare const FORMAT_OPTIONS: {
    id: FormatAxis;
    label: string;
}[];
export declare const FORMAT_QUIZ: QuizItem<FormatAxis>[];
export type LevelAxis = "logical" | "physical";
export declare const LEVEL_OPTIONS: {
    id: LevelAxis;
    label: string;
}[];
export declare const LEVEL_QUIZ: QuizItem<LevelAxis>[];
