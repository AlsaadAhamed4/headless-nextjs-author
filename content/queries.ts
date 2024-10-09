import { ClientLogoType, HeroQueryType } from "@/types";
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
    const data = await contentGqlFetcher<HeroQueryType>({ query })
    if (!data) {
        throw 'oops'
    }
    return data;
}

export const getClientLogos = async () => {
    const query = `#graphql
     query Asset($where: AssetFilter) {
  assetCollection(where: $where) {
    items {
      url
      width
      title
      height
    }
  }
}
    `
    const data = await contentGqlFetcher<ClientLogoType>({
        query, variables: {
            "where": {
                "title_contains": "client"
            }
        }
    });
    if (!data) {
        throw 'oops'
    }
    return data;
}
