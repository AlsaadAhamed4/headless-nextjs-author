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