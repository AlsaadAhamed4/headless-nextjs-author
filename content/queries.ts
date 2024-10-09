import { HeroQueryType } from "@/types";
import { contentGqlFetcher } from "./fetch";


export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
  heroCollection {
    items {
      title
      subTitle
      preTitle
      callToActionsCollection {
        items {
          link
          label
        }
      }
    }
  }
}
  `
  const data = await contentGqlFetcher<HeroQueryType>({query})
  if(!data){
    throw 'oops'
  }
  return data;
}
