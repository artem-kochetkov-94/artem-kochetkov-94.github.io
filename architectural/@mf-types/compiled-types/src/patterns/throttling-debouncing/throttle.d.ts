/**
 * Throttling и debouncing решают одну проблему — "события сыпятся чаще,
 * чем имеет смысл на них реагировать" (быстрый ввод в поиске, resize окна,
 * скролл), — но по-разному:
 *  - throttle — реагировать не чаще, чем раз в N миллисекунд, независимо
 *    от того, сколько событий пришло за это время;
 *  - debounce — реагировать только после того, как события ПЕРЕСТАЛИ
 *    приходить хотя бы на N миллисекунд (лучше для «пользователь закончил
 *    печатать»).
 */
export declare const THROTTLE_MS = 700;
export declare const DEBOUNCE_MS = 700;
/** Не чаще одного вызова onFire раз в intervalMs — лишние вызовы trigger() просто игнорируются. */
export declare function createThrottler(intervalMs: number, onFire: () => void): {
    trigger(): void;
    reset(): void;
};
/** onFire вызывается один раз, только если trigger() не вызывали ещё delayMs. Каждый новый trigger() сбрасывает таймер. */
export declare function createDebouncer(delayMs: number, onFire: () => void): {
    trigger(): void;
    cancel(): void;
};
