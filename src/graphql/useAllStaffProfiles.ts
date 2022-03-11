import { graphql, useStaticQuery } from 'gatsby'
import { AllStaffProfilesQuery } from '../types/generated-gatsby'

export const useAllStaffProfiles = (): AllStaffProfilesQuery => {
  const data = useStaticQuery<AllStaffProfilesQuery>(
    graphql`
      query AllStaffProfiles {
        allStaffProfilesYaml {
          totalCount
          group(field: businessRole) {
            edges {
              node {
                businessRole
                description
                id
                name
                jobRole
                social {
                  instagram
                }
              }
            }
          }
        }
      }
    `
  )

  return data
}
