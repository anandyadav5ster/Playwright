

class GenericFunction{

    constructor(page){
        this.page = page;
    }

    async click_function(locator){
        await this.page.click(locator)
    }

 



}
module.exports = GenericFunction;