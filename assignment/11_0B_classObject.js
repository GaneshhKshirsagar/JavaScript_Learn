
// Q-1 Data member: bankName, location, accountNo,ifsc,interestRate

console.log("=========Q-1 Data member: bankName, location, accountNo,ifsc,interestRate===================");
class bank{
    constructor(bank_name,location,account_no,ifsc,interes_rate){
    this.bankName=bank_name;
    this.bankLocation=location;
    this.accountNo=account_no;
    this.ifscCode=ifsc;
    this.interestRate=interes_rate;
}
}
console.log(` ${this.bankName="SBI"} ${this.bankLocation="Pandharpur"} ${this.accountNo=12345} ${this.ifscCode=98765} ${this.interestRate="5%"} `);
//Q-2 create object sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
console.log("Q-2 create object sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank");

var sbi_bank= new bank('SBI','Pandharpur',12345,5555,'5%');
var icici_bank=new bank('icici_bank','Sangola',2345,1111,'10%');
var kotak_bank=new bank('kotak_bank','Pune',34567,222,'9%');
var hdfc_bank=new bank('hdfc_bank','Mumbai',4567,5345,'10%');
var panjab_bank=new bank('panjab_bank','Nagpur',98686,34322,'7%');
console.table(sbi_bank);
console.table(icici_bank);
console.table(kotak_bank);
console.table(hdfc_bank);
console.table(panjab_bank);

// Q-3  Add all object element in a array and just log on console bank_name and location

console.log("Q 3 Add all object element in a array and just lon on console bank_name and location");
 
var arrayOfObj=[sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];
for (let index = 0; index < arrayOfObj.length; index++) {
    const element = arrayOfObj[index];
    console.log(`${element.bankName}  ${element.bankLocation}`);
}

//Q-4 from the array(Step A) find the object which has name kotak bank using for of loop

console.log("Q-4 from the array(Step A) find the object which has name kotak bank using for of loop");
var arrayOfObj2=[sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];
for (let index = 0; index < arrayOfObj2.length; index++)
if (arrayOfObj2[index]==kotak_bank) {
    console.table(kotak_bank.bankName);
}
