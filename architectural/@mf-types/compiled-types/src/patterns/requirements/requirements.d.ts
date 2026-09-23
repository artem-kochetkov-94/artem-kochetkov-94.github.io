/**
 * Требования к системе делятся на две категории с принципиально разным
 * содержанием:
 *  - Функциональные — ЧТО система должна делать: конкретные действия и
 *    возможности, которые видит и использует пользователь.
 *  - Нефункциональные — КАКИМИ свойствами система должна обладать, не
 *    относящимися к конкретному поведению: производительность,
 *    масштабируемость, надёжность, безопасность, сопровождаемость.
 */
export type RequirementType = "functional" | "non-functional";
export declare const REQUIREMENT_OPTIONS: {
    id: RequirementType;
    label: string;
}[];
export interface RequirementQuizItem {
    id: number;
    prompt: string;
    answer: RequirementType;
    explanation: string;
}
export declare const REQUIREMENTS_QUIZ: RequirementQuizItem[];
