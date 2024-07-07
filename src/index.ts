interface Product {
  id: string
  price: number
  tags: string[]
  details: {
    title: string
    description: string
  }
}

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
console.log(`Title : ${product.details.title} and Description : ${product.details.description}`);

for (const tag of product.tags) {
  console.log(tag);
}