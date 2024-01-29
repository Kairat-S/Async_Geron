type TProductCondition = 'новый' | 'б/у' | 'аварийное';
let initialCost: number = 1000;

let productCondition: string = 'previouslyUsed';
let totalCost: number = 0;
let productConditionRu: TProductCondition = 'новый'; 

if (productCondition === 'new') {
    totalCost = initialCost;
    productConditionRu = 'новый'
}
else if (productCondition === 'previouslyUsed') {
    totalCost = initialCost*85/100;
    productConditionRu = 'б/у';
}
else {
    totalCost = initialCost*25/100;
    productConditionRu = 'аварийное';
}

console.log(`Стоимость товара с учетом надбавки - ${totalCost} теңге при состоянии: ${productConditionRu}.`);