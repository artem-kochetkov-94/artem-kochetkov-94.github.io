import type { StackStep } from "./stack";
/**
 * Чистая отрисовка ОДНОГО кадра разбора. Сверху — входная строка: курсор
 * подсвечен, открытые «(» на стеке обведены голубым, помеченные на удаление —
 * красные и зачёркнуты. Снизу — сам стек индексов, элементы которого плавно
 * появляются и исчезают (Framer Motion, `layout`).
 */
export declare function StackVisualizer({ s, step }: {
    s: string;
    step: StackStep;
}): import("react").JSX.Element;
