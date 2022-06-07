import { graphql, useStaticQuery } from 'gatsby'
import { AllStaffGroupPhotos } from '../types/generated-gatsby'

export const useAllStaffGroupPhotos = (): AllStaffGroupPhotos => {
  const data = useStaticQuery<AllStaffGroupPhotos>(
    graphql`
      query AllStaffGroupPhotos {
        photos: allFile(
          filter: { relativeDirectory: { eq: "gallery-2/staff" } }
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
