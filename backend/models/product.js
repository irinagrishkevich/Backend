const fs = require('fs');
const path = require('path');

class ProductModel {
    static path = path.join(__dirname, '../db', 'products.json')

    static async findAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            })
        })
    }

    static async find(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const products = JSON.parse(data);
                        const product = products.find(item => parseInt(item.id) === parseInt(id))
                        if (product) {
                            resolve(product);
                        } else {
                            reject(err)
                        }

                    } catch (e) {
                        reject('Not a valid product or data object');
                    }

                    resolve();
                }
            })
        })
    }
    static async find(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const products = JSON.parse(data);
                        const product = products.find(item => parseInt(item.id) === parseInt(id))
                        if (product) {
                            resolve(product);
                        } else {
                            reject(err)
                        }

                    } catch (e) {
                        reject('Not a valid product or data object');
                    }

                    resolve();
                }
            })
        })
    }
    static async create(newProduct) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const products = JSON.parse(data);
                       products.push(newProduct)
                        const newJSON = JSON.stringify(products)
                        fs.writeFile(this.path,newJSON,'utf-8', (error, data)=>{
                            if (error){
                                reject(error)
                            } else {
                                resolve(newProduct)
                            }
                        })

                    } catch (e) {
                        reject('Not a valid product or data object');
                    }

                    resolve();
                }
            })
        })
    }
    static async change(id,newProduct) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const products = JSON.parse(data);
                        const productIndex = products.findIndex(item => parseInt(item.id) === parseInt(id))
                        if (productIndex > -1) {
                            products[productIndex] = newProduct

                            const newJSON = JSON.stringify(products)
                            fs.writeFile(this.path,newJSON,'utf-8', (error, data)=>{
                                if (error){
                                    reject(error)
                                } else {
                                    resolve(newProduct)
                                }
                            })
                        } else {
                            reject(err)
                        }


                    } catch (e) {
                        reject('Not a valid product or data object');
                    }

                    resolve();
                }
            })
        })
    }
    static async delete(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const products = JSON.parse(data);
                        const productIndex = products.findIndex(item => parseInt(item.id) === parseInt(id))
                        if (productIndex > -1) {
                            products.splice(productIndex, 1)
                            const newJSON = JSON.stringify(products)
                            fs.writeFile(this.path,newJSON,'utf-8', (error, data)=>{
                                if (error){
                                    reject(error)
                                } else {
                                    resolve()
                                }
                            })
                        } else {
                            reject(err)
                        }


                    } catch (e) {
                        reject('Not a valid product or data object');
                    }

                    resolve();
                }
            })
        })
    }
}

module.exports = ProductModel;