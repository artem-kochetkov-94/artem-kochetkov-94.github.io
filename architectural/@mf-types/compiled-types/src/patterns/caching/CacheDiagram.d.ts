import { type CacheStep } from "./strategies";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и плеером
 * (Demo.tsx), чтобы автопрокрутка не переключала шаг раньше, чем все импульсы
 * шага доиграют. */
export declare const PACKET_LEG_DURATION = 1.1;
export declare function CacheDiagram({ step }: {
    step: CacheStep;
}): import("react").JSX.Element;
