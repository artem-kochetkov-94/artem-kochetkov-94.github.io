import "../../index.css";
import type { PatternModule } from "@patterns-lab/core";
/**
 * "Разъём" (PatternModule), который host получит через Module Federation.
 * Именно этот файл указан в exposes vite.config. В демо — две задачи на стек
 * (переключатель): парность скобок (LC 1249) и монотонный стек (LC 739).
 */
declare const stack: PatternModule;
export default stack;
