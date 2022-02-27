import { graphql, useStaticQuery } from 'gatsby'
import { AboutDataQuery } from '../types/generated-gatsby'

export const useAboutData = (): AboutDataQuery => {
  const data = useStaticQuery<AboutDataQuery>(
    graphql`
      query AboutData {
        aboutData: dataYaml(about: { main: { nin: ["", null] } }) {
          about {
            dream
            goal
            main
            secondary
          }
        }
      }
    `
  )

  return data
}
