import { Page } from "@playwright/test"

export abstract class AbstractBot{

    constructor(
        private site : string,
        protected page : Page
    ){
    }

    run = async () => {
        await this.goToSite()
        const title = await this.getTitle()
        const writer = await this.getWriter()
        const img = await this.getImg()

        return {"title" : title, "writer" : writer, "img" : img}
    }

    goToSite = async (): Promise<void> => {
        await this.page.goto(this.site);
    }

    abstract getTitle () : Promise<string>
    abstract getWriter () : Promise<string>
    abstract getImg () : Promise<string>
}