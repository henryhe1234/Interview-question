const transactions = [{type:'invoice', price: '200', expenses: '30'},
{type:'payable', price: '400', expenses: '1'},
{type:'consignment', price: '200', expenses: '180'},
{type:'invoice', price: '600', expenses: '300'}]

const netPrice = (transactions,searchType)=>{
  let numOfTransactions = 0;
  let netPrice = 0;
  let typeFinded = false;
  for(let i = 0;i<transactions.length;i++){
    numOfTransactions++;
    if(transactions[i].type === searchType){
      typeFinded = true;
      netPrice += (Number(transactions[i].price) - Number(transactions[i].expenses));
    }
  }
  if(typeFinded === true){
    return netPrice;
  }else{
    return numOfTransactions;
  }


}
// const transactions = []
const searchType = 'invoice11';
console.log(netPrice(transactions,searchType))