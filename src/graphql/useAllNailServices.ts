import { graphql, useStaticQuery } from 'gatsby'
import { AllNailServicesQuery } from '../types/generated-gatsby'

export const useAllNailServices = (): AllNailServicesQuery => {
  const data = useStaticQuery<AllNailServicesQuery>(
    graphql`
      query AllNailServies {
        allNailServicesYaml {
          edges {
            node {
              title
              items {
                item
                price
              }
            }
          }
        }
      }
    `
  )

  return data
}
