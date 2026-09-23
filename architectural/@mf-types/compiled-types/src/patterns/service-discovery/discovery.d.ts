/**
 * Как LB узнаёт, какие бэкенды сейчас живы, — не хардкодом в конфиге, а
 * двумя механизмами, работающими вместе:
 *  - Heartbeat — каждый клиент/бэкенд периодически подтверждает, что жив;
 *    пропустил несколько подтверждений подряд — считается упавшим;
 *  - Service Discovery — реестр, в котором бэкенды сами регистрируются при
 *    запуске (Register) и который сам уведомляет LB (Notify) об изменениях
 *    состава — LB не нужно ничего перезапускать или редеплоить.
 */
export type BackendState = "starting" | "up" | "warning" | "down";
export interface DiscoveryStep {
    id: number;
    label: string;
    backendStates: Record<string, BackendState>;
    /** Активный перегон на этом шаге — для одиночного импульса. */
    activeLeg: {
        from: string;
        to: string;
    } | null;
    description: string;
}
export declare const DISCOVERY_STEPS: DiscoveryStep[];
