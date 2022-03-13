import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useClientProfile } from '../../graphql/useClientProfile'

export interface SEOProps {}

export const SEO: React.FC<SEOProps> = () => {
  const data = useClientProfile()
  const clientProfile = data?.clientProfile
  const image = data?.image?.publicURL
  const description = clientProfile?.description
  const title = clientProfile?.name
  const keywords =
    'Hair, Nail, Salon, Blonding, Balayage, Highlighting, Manicure, Pedicure, Waxing, Styling, Stylist Eyebrow, brow, London On, Ontario'
  const url = clientProfile?.siteUrl
  const siteAuthor = 'Sean Campbell'
  const robots = 'index, follow'

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="canonical" href={url} />
      <meta name="color-scheme" content="only light" />
      <meta name="application-name" content={title} />
      <meta name="copyright" content={siteAuthor} />
      <meta name="author" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords} />
      <meta name="creator" content={siteAuthor} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  )
}
