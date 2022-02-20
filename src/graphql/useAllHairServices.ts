import { graphql, useStaticQuery } from 'gatsby'
import { AllHairServicesQuery } from '../types/generated-gatsby'

export const useAllHairServices = (): AllHairServicesQuery => {
  const data = useStaticQuery<AllHairServicesQuery>(
    graphql`
      query AllHairServices {
        allHairServicesYaml {
          edges {
            node {
              title
              items {
                description
                title
              }
            }
          }
        }
      }
    `
  )

  return data
}
