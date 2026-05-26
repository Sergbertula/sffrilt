export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sffrilt.ru/#organization",
  name: "SFFRILT",
  url: "https://sffrilt.ru",
  logo: "https://sffrilt.ru/assets/logo.png",
  telephone: "+79534428998",
  email: "tehprom-tula@mail.ru",
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
