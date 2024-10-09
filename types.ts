export type HeroQueryType = {
    heroCollection: {
        items: {
            title: string
            subTitle: string
            preTitle: string
            callToActionsCollection: {
                items: {
                    link: string
                    label: string
                }[]
            }
        }[]
    }
}

export type ClientLogoType = {
    assetCollection: {
        items: {
            url: string
            width: number
            title: string
            height: number
        }[]
    }
}