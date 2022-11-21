class Notebook{
    // class는 javascript에서 함수이다.
    constructor(title, company, price, size){
        this.title = title;
        this.company = company;
        this.price = price;
        this.size = size;
    }
    // getter setter(예외처리)
    get title(){
        return this.title + 'won';
    }
    set setPrice(price){
        price < 100000 ? console.log('가격이 올바르지 않습니다.') : this.price = price; 
    }
    // method
    intro = () => {
        // 노트북 사양소개 시켜주는 메서드.
        console.log(`title >> ${this.title}, company >> ${this.company}, price >> ${this.price}, size >> ${this.size}`);
    }
}