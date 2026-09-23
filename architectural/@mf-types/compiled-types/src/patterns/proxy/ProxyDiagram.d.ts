import { type ProxyMode, type ProxyStep } from "./scenarios";
/** Сколько секунд пакет летит через ОДИН перегон — и для Demo.tsx тоже. */
export declare const PACKET_LEG_DURATION = 1.1;
export declare function ProxyDiagram({ mode, step, }: {
    mode: ProxyMode;
    step: ProxyStep;
}): import("react").JSX.Element;
