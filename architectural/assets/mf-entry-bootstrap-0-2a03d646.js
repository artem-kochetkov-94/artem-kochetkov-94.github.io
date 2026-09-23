
const __mfCacheGlobalKey = "__mf_module_cache__";
globalThis[__mfCacheGlobalKey] ||= { share: {}, remote: {} };
globalThis[__mfCacheGlobalKey].share ||= {};
globalThis[__mfCacheGlobalKey].remote ||= {};
const __mfModuleCache = globalThis[__mfCacheGlobalKey];

const __mfImport = (src) =>
  globalThis.System && typeof globalThis.System.import === 'function'
    ? globalThis.System.import(src)
    : import(src);


(async () => {
  const __mfHostInit = await __mfImport("./hostInit-C9LxAcoa.js");
  await __mfHostInit.__tla;
  const { initHost } = __mfHostInit;
  await initHost();
})().then(() => __mfImport("./index-8g0B8N2-.js"));
