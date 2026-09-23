import "../../index.css";
import type { PatternModule } from "@patterns-lab/core";
/**
 * "Разъём" (PatternModule), который host получит через Module Federation.
 * Именно этот файл указан в exposes vite.config.
 */
declare const serviceDiscovery: PatternModule;
export default serviceDiscovery;
