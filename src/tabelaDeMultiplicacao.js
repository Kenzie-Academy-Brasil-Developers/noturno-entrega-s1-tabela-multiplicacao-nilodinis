function multiplication(number) { 
   let myTable=[]
   for (let indicator=0; indicator <=number; indicator+=1){//Primeiro loop
       myTable.push([])
       for(let counter=0; counter<= number; counter+=1){//Segundo loop
           myTable[indicator].push(indicator*counter)  //Alimentar tabela
        }
    }
        console.table(myTable)
 }
