"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useLoaderContext } from "../../contexts/LoaderContext";

export function CalEmbed() {
  const loaderCtx = useLoaderContext();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consutoria-gratuita" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      // Señal al PageLoader cuando el calendario está listo
      cal("on", {
        action: "linkReady",
        callback: () => loaderCtx?.setCalendarLoaded(true),
      });
    })();
  }, [loaderCtx]);
  return (
    <Cal
      namespace="consutoria-gratuita"
      calOrigin="https://cal.eu"
      embedJsUrl="https://cal.eu/embed/embed.js"
      calLink="codeinnova/consutoria-gratuita"
      style={{ width: "100%", height: "100%", overflow: "auto", minWidth: 0 }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
