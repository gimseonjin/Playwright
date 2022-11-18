export class BookReqeustDto{
    constructor(
        private readonly bookName: string,
        private readonly link: string,
        private readonly quantity: string,
        private readonly price: string,
        private readonly reason: string
    ){}

    getInfo() : Map<string, string>{
        return new Map<string, string>([
            ["제품명" , this.bookName],
            ["제품 구매 링크" , this.link],
            ["구매 수량" , this.quantity],
            ["구매 금액" , this.price],
            ["구매 사유" , this.reason]
        ])
    }
}