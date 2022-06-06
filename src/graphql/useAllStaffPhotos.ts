import { graphql, useStaticQuery } from 'gatsby'
import { AllStaffPhotosQuery } from '../types/generated-gatsby'

export const useAllStaffPhotos = (): AllStaffPhotosQuery => {
  const data = useStaticQuery<AllStaffPhotosQuery>(
    graphql`
      query AllStaffPhotos {
        photos: allFile(filter: { relativeDirectory: { eq: "staff" } }) {
          edges {
            node {
              name
              id
              publicURL
              childImageSharp {
                thumb: gatsbyImageData(layout: FIXED, width: 300, height: 350)
                full: gatsbyImageData(layout: FULL_WIDTH)
                # bio: gatsbyImageData(layout: CONSTRAINED)
                bio: gatsbyImageData(layout: FIXED, width: 370, height: 520)
              }
            }
          }
        }
      }
    `
  )

  return data
}
