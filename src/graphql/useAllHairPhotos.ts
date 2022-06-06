import { graphql, useStaticQuery } from 'gatsby'
import { AllHairPhotosQuery } from '../types/generated-gatsby'

export const useAllHairPhotos = (): AllHairPhotosQuery => {
  const data = useStaticQuery<AllHairPhotosQuery>(
    graphql`
      query AllHairPhotos {
        hairPhotos: allFile(
          filter: { relativeDirectory: { eq: "gallery-2/hair" } }
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
