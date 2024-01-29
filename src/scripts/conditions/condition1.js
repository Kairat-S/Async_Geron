"use strict";
let initialCost = 1000;
let productCondition = 'previouslyUsed';
let totalCost = 0;
let productConditionRu = 'новый';
if (productCondition === 'new') {
    totalCost = initialCost;
    productConditionRu = 'новый';
}
else if (productCondition === 'previouslyUsed') {
    totalCost = initialCost * 85 / 100;
    productConditionRu = 'б/у';
}
else {
    totalCost = initialCost * 25 / 100;
    productConditionRu = 'аварийное';
}
console.log(`Стоимость товара с учетом надбавки - ${totalCost} теңге при состоянии: ${productConditionRu}.`);
