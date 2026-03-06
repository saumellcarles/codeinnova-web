import type { Metadata } from "next";
import { getService } from "@/lib/services-data";
import { buildServiceMetadata, buildServiceSchema } from "@/lib/seo";
import { ServicePageContent } from "@/components/sections/ServicePageContent";

const service = getService("sitios-web")!;

export const metadata: Metadata = buildServiceMetadata(service);

export default function Page() {
  return (
    <ServicePageContent
      service={service}
      serviceSchema={buildServiceSchema(service)}
    />
  );
}
