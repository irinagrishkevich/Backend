import {UrlManager} from "../utils/url-manager.js";

export class Product {
    constructor() {
        this.productElement = document.getElementById('product');

        this.id = UrlManager.getQueryParams()['id'];
        this.getProduct(this.id)
            .then(product => this.fillProduct(product))

    }

    async getProduct(id) {
        const response = await fetch('http://localhost:3001/api/products/' + id)
        return await response.json()
    }

    fillProduct(product) {
        if (product) {
            const titleElement = document.createElement('div')
            titleElement.className = 'title'
            titleElement.innerHTML = product.title
            console.log(titleElement)
            console.log(this.productElement)

            const descriptionElement = document.createElement('div')
            descriptionElement.className = 'description'
            descriptionElement.innerHTML = product.description

            const priceElement = document.createElement('div')
            priceElement.className = 'price'
            priceElement.innerHTML = product.price + ' $'

            this.productElement.appendChild(titleElement)

            this.productElement.appendChild(descriptionElement)
            this.productElement.appendChild(priceElement)

        }
    }
}