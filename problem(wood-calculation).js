/* 
fixed : per item wood requirements;
1. chair => 3 cft
2. table => 10 cft
3. bed => 50 cft
*/

function WoodQuantity(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 6;
    const perTableWood = 2;
    const perBedWood = 5;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood

}
const totalWood = WoodQuantity(3, 10, 50);
console.log(totalWood);