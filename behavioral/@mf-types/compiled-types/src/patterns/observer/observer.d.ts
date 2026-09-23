/**
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
export declare class Subject<T> {
    private value;
    private observers;
    constructor(value: T);
    /**
     * Подписать наблюдателя. Сразу отдаёт ему текущее состояние.
     * Возвращает функцию отписки (удобно для useEffect-cleanup).
     */
    subscribe(observer: Observer<T>): () => void;
    /** Изменить состояние и уведомить ВСЕХ подписчиков. */
    setValue(value: T): void;
    /** Текущее состояние. */
    getValue(): T;
    /** Сколько сейчас активных подписчиков. */
    get observerCount(): number;
}
