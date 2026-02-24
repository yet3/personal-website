import { UNO_CONFIG } from "@repo/lib";
import { mergeConfigs } from "unocss";

export default mergeConfigs([
  UNO_CONFIG,
  {
    safelist: ["bg-base", "text-secondary-300"],
    rules: [["w-content", { width: "var(--content-width)" }]],
  },
]);
