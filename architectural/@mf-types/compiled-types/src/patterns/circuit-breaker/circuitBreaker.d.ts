/**
 * Circuit Breaker — защищает вызывающего от бесполезных походов к упавшему
 * сервису. Три состояния:
 *  - closed     — всё как обычно, запросы идут к backend, считаем отказы.
 *  - open       — backend признан недоступным, запросы отбиваются сразу
 *                 (fast fail), backend не трогаем вообще.
 *  - half-open  — после паузы пускаем ОДИН пробный запрос: получилось —
 *                 закрываем цепь, снова упал — опять открываем и ждём ещё.
 */
export type CircuitState = "closed" | "open" | "half-open";
export interface CircuitConfig {
    /** Сколько отказов подряд в closed-состоянии размыкают цепь. */
    failureThreshold: number;
    /** Сколько "тиков" цепь остаётся разомкнутой, прежде чем дать пробный запрос. */
    openDurationTicks: number;
}
export declare const DEFAULT_CONFIG: CircuitConfig;
/** Заранее известный (авторский) исход запроса — что случится, ЕСЛИ он дойдёт до backend. */
export interface RequestOutcomeDef {
    id: number;
    tick: number;
    willSucceed: boolean;
}
export type RequestOutcome = "success" | "failure" | "short-circuited";
export interface CircuitStep {
    id: number;
    tick: number;
    stateBefore: CircuitState;
    stateAfter: CircuitState;
    /** true — запрос реально дошёл до backend (closed или пробный half-open). */
    attempted: boolean;
    outcome: RequestOutcome;
    consecutiveFailures: number;
    description: string;
}
/**
 * Прогоняет таймлайн запросов через state machine автомата защиты.
 * Переход open → half-open происходит "лениво": проверяется перед
 * обработкой ближайшего запроса, а не по таймеру в реальном времени —
 * этого достаточно для дискретной модели.
 */
export declare function simulateCircuitBreaker(requests: RequestOutcomeDef[], config?: CircuitConfig): CircuitStep[];
/**
 * Сценарий: сервис работает → начинает отказывать → цепь размыкается →
 * первая попытка восстановления удаётся → сервис снова ломается → цепь
 * размыкается ещё раз → первая пробная попытка не удаётся (ещё не готов) →
 * вторая пробная попытка удаётся → всё стабильно.
 */
export declare const DEFAULT_REQUESTS: RequestOutcomeDef[];
