import { graphql, useStaticQuery } from 'gatsby'
import { AllSalonPhotos } from '../types/generated-gatsby'

export const useAllSalonPhotos = (): AllSalonPhotos => {
  const data = useStaticQuery<AllSalonPhotos>(
    graphql`
      query AllSalonPhotos {
        photos: allFile(
          filter: { relativeDirectory: { eq: "gallery-2/salon" } }
          sort: { order: ASC, fields: name }
        ) {
          edges {
            node {
              name
              id
              publicURL
              childImageSharp {
                thumb: gatsbyImageData(layout: FIXED, width: 300, height: 350)
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    `
  )

  return data
}
