export class Inventory {
    constructor(
        public id: number,
        public name: string,
        public stock: number,
        public price: number,
        public vendor: string 
    ) { }
}