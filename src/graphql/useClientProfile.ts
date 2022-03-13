import { graphql, useStaticQuery } from 'gatsby'
import { ClientProfileQuery } from '../types/generated-gatsby'

export const useClientProfile = (): ClientProfileQuery => {
  const data = useStaticQuery<ClientProfileQuery>(
    graphql`
      query ClientProfile {
        clientProfile: dataYaml(siteUrl: { ne: null }) {
          description
          name
          phoneNumber
          siteUrl
          emailAddress
          contactName
          address
          id
        }
        image: file(name: { regex: "/sign/i" }) {
          base
          publicURL
        }
      }
    `
  )

  return data
}
