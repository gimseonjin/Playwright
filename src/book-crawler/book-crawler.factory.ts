import { Injectable } from "@nestjs/common"
import { Browser, chromium } from "@playwright/test"
import { InjectBrowser } from "nestjs-playwright"
import { AbstractBot } from "./bot/abstract.bot"
import { AladinBot } from "./bot/aladin/Aladin.bot"
import { InterparkBot } from "./bot/interpark/interpark.bot"
import { KyoboBot } from "./bot/kyobo/kyobo.bot"
import { Yes24Bot } from "./bot/yes24/yes24.bot"

export class BookCrawlerFactory{

    static createRobot = async (site: string) => {

        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();

        if(site.includes("aladin")){
            return new AladinBot(site, page)

        }else if(site.includes("kyobo")){
            return new KyoboBot(site, page)

        }else if(site.includes("interpark")){
            return new InterparkBot(site, page)

        }else if(site.includes("yes24")){
            return new Yes24Bot(site, page)

        }else{
            throw new Error("지원하지 않는 웹사이트 입니다.")
        }
    }

}