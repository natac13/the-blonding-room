import { graphql, useStaticQuery } from 'gatsby'
import { AllNailPhotosQuery } from '../types/generated-gatsby'

export const useAllNailPhotos = (): AllNailPhotosQuery => {
  const data = useStaticQuery<AllNailPhotosQuery>(
    graphql`
      query AllNailPhotos {
        photos: allFile(
          filter: { relativeDirectory: { eq: "gallery-2/nail" } }
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
