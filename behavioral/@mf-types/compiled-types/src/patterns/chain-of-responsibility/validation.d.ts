/**
 * Chain of Responsibility — стратегия "pipeline" (цепочка проверок).
 * Чистый TypeScript, без привязки к React. Это "ядро" примера.
 *
 * Та же механика, что и в `approval.ts` (звенья связаны через setNext,
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
export declare class Validator {
    /** Что проверяем, напр. "Имя заполнено". */
    readonly title: string;
    /** Проверка: вернёт текст ошибки или null, если всё хорошо. */
    private readonly check;
    private next;
    constructor(
    /** Что проверяем, напр. "Имя заполнено". */
    title: string, 
    /** Проверка: вернёт текст ошибки или null, если всё хорошо. */
    check: (form: Form) => string | null);
    /** Назначить следующее звено. Возвращает его — для fluent-сборки цепочки. */
    setNext(next: Validator): Validator;
    /**
     * Прогнать форму через это звено и (в зависимости от режима) дальше.
     * `result` копит маршрут и ошибки по мере прохождения цепочки.
     */
    handle(form: Form, mode: Mode, result: ValidationResult): ValidationResult;
}
/** Собрать цепочку валидаторов по порядку и вернуть её начало. */
export declare function buildChain(validators: Validator[]): Validator;
/** Запустить проверку формы по цепочке в выбранном режиме. */
export declare function validate(head: Validator, form: Form, mode: Mode): ValidationResult;
