import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Consulta la política de cookies de CodeInnova. Información sobre los tipos de cookies que utilizamos y cómo puedes gestionarlas.",
  alternates: { canonical: "https://codeinnova.es/politica-de-cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <PageLayout>
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs font-semibold uppercase text-orange-500">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Política de cookies
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Última actualización: {new Date().getFullYear()}
          </p>

          <div className="prose prose-sm mt-10 max-w-none text-gray-700 [&_h2]:mt-8 [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-gray-900 [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
            <h2>¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu
              dispositivo cuando los visitas. Se utilizan para que el sitio funcione correctamente,
              recordar tus preferencias y obtener información sobre cómo se utiliza la web.
            </p>

            <h2>¿Qué cookies utiliza este sitio web?</h2>
            <p>
              <strong>Cookies estrictamente necesarias</strong> — Son imprescindibles para el
              funcionamiento básico del sitio (navegación, seguridad). No requieren tu
              consentimiento.
            </p>
            <p>
              <strong>Cookies analíticas</strong> — Nos permiten conocer cómo los usuarios
              interactúan con el sitio (páginas visitadas, tiempo de permanencia) para mejorar la
              experiencia. Solo se activan si aceptas las cookies.
            </p>
            <p>
              <strong>Cookies de terceros</strong> — Este sitio puede incluir funcionalidades de
              terceros como el chat de soporte (Tidio) y el sistema de reservas (Cal.eu), que
              pueden establecer sus propias cookies. Consulta sus políticas de privacidad para más
              información.
            </p>

            <h2>Tabla de cookies</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-[480px] w-full text-xs">
                <thead className="bg-gray-50 text-gray-600">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Nombre</th>
                    <th className="px-4 py-3 text-left font-semibold">Proveedor</th>
                    <th className="px-4 py-3 text-left font-semibold">Finalidad</th>
                    <th className="px-4 py-3 text-left font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-mono">ci_cookie_consent</td>
                    <td className="px-4 py-3">codeinnova.es</td>
                    <td className="px-4 py-3">Guarda tu preferencia de cookies (cookie de navegador)</td>
                    <td className="px-4 py-3">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">tidio_*</td>
                    <td className="px-4 py-3">Tidio</td>
                    <td className="px-4 py-3">Chat de soporte en directo</td>
                    <td className="px-4 py-3">Sesión / 1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono">cal_*</td>
                    <td className="px-4 py-3">Cal.eu</td>
                    <td className="px-4 py-3">Sistema de reservas de consultoría</td>
                    <td className="px-4 py-3">Sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>¿Cómo puedo gestionar las cookies?</h2>
            <p>
              Puedes cambiar tu preferencia en cualquier momento haciendo clic en el aviso de
              cookies que aparece en la parte inferior de la página, o borrando las cookies de tu
              navegador. También puedes configurar tu navegador para bloquear o eliminar cookies:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Safari
                </a>
              </li>
            </ul>

            <h2>Más información</h2>
            <p>
              Si tienes cualquier duda sobre el uso de cookies en este sitio, puedes contactarnos
              en{" "}
              <a
                href="mailto:info@codeinnova.es"
                className="text-indigo-600 hover:underline"
              >
                info@codeinnova.es
              </a>
              .
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:border-gray-400 hover:text-gray-900"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
