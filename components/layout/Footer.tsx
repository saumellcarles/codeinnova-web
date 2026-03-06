import Link from "next/link";
import Image from "next/image";

// Footer corporativo oscuro (gray-900) que contrasta con las secciones claras del cuerpo.
// Cuatro columnas: marca, servicios, empresa y contacto.
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="CodeInnova — ir al inicio">
              <Image
                src="/logo-white.png"
                alt="CodeInnova"
                width={140}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-4 text-xs text-gray-400 md:text-sm">
              Transformamos ideas en productos digitales que generan impacto
              real y valor de negocio medible.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Servicios
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/servicios/aplicaciones-web" className="transition hover:text-gray-200">
                  Aplicaciones web
                </Link>
              </li>
              <li>
                <Link href="/servicios/sitios-web" className="transition hover:text-gray-200">
                  Sitios web
                </Link>
              </li>
              <li>
                <Link href="/servicios/servidores-cloud" className="transition hover:text-gray-200">
                  Servidores Cloud
                </Link>
              </li>
              <li>
                <Link href="/servicios/e-commerce" className="transition hover:text-gray-200">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Empresa
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/#nosotros" className="transition hover:text-gray-200">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="transition hover:text-gray-200">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#metodologia" className="transition hover:text-gray-200">
                  Metodología
                </Link>
              </li>
              <li>
                <Link href="/consultoria-gratuita" className="transition hover:text-gray-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto + redes */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Contacto
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href="mailto:info@codeinnova.es"
                  className="transition hover:text-gray-200"
                >
                  info@codeinnova.es
                </a>
              </li>
              <li className="text-gray-500">Tarragona, España</li>
            </ul>
            <div className="mt-4 flex gap-3 text-xs">
              <a
                href="https://www.linkedin.com/company/codeinnova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeInnova en LinkedIn"
                className="transition hover:text-gray-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/codeinnova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeInnova en GitHub"
                className="transition hover:text-gray-200"
              >
                GitHub
              </a>
              <a
                href="https://x.com/codeinnova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code Innova en X (Twitter)"
                className="transition hover:text-gray-200"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-[11px] text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} CodeInnova. Todos los derechos
            reservados.
          </p>
          <p>Especialistas en desarrollo web y software a medida en Tarragona</p>
        </div>
      </div>
    </footer>
  );
}
