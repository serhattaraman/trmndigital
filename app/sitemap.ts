import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trmndigital.com'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/hakkimizda`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hizmetler`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/projeler`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/iletisim`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/teklif-al`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    // Lokasyon Sayfaları
    { url: `${baseUrl}/diyarbakir-web-tasarim`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/diyarbakir-ozel-yazilim`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    // Hizmet Alt Sayfaları
    { url: `${baseUrl}/kurumsal-web-tasarim`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/google-ads`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/hizmetler/ozel-yazilim`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/hizmetler/otomasyon`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
  ]
}
