export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sffrilt.ru/#organization",
  name: "SFFRILT",
  alternateName: "ООО Техпром",
  url: "https://sffrilt.ru",
  logo: "https://sffrilt.ru/assets/logo-3d-Dl58St4t.png",
  telephone: "+79534210256",
  email: "tehprom-tula@mail.ru",
  sameAs: [
    "https://t.me/tehprom1",
    "https://instagram.com/tehpromtula",
    "https://i.max.ru/tehprom",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Красноармейский пр-т, д. 7",
    addressLocality: "Тула",
    postalCode: "300048",
    addressCountry: "RU",
  },
};

export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": "https://sffrilt.ru/#organization" },
    areaServed: [
      { "@type": "Country", name: "Россия" },
      { "@type": "Place", name: "СНГ" },
    ],
  };
}

export function ldScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
