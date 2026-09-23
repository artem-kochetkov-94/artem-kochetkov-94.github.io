import "../../index.css";
import type { PatternModule } from "@patterns-lab/core";
/**
 * Это и есть "разъём" (PatternModule), который host получит через
 * Module Federation. Именно этот файл указан в exposes vite.config.
 */
declare const observer: PatternModule;
export default observer;
