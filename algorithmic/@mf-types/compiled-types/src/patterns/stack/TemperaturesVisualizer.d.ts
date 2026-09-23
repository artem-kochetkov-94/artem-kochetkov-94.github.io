import type { TempStep } from "./dailyTemperaturesTrace";
/**
 * Чистая отрисовка ОДНОГО кадра. Сверху — ряд температур: курсор подсвечен
 * (янтарный), дни на стеке обведены голубым, только что закрытый день вспыхивает
 * зелёным. Под каждым днём — его ответ (· пока не посчитан). Снизу — сам
 * монотонный стек индексов.
 */
export declare function TemperaturesVisualizer({ temps, step, }: {
    temps: number[];
    step: TempStep;
}): import("react").JSX.Element;
