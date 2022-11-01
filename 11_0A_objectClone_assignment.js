console.log("========Q-1 Create the object bank_sbi at list 4 properties==========");
const bank_sbi={
    bankName:`SBI`,
    IFSCcode:1234,
    branch:`Pandharpur`,
    type: `Goverment`,
}
console.log(bank_sbi);

console.log("========Q-2 Create the object bank_location propertie are street,city,pin_code==========");

const bank_location={
    street:`Gandhi Road`,
    city:`Pandharpur`,
    pin_code: `413304`,
}
console.log(bank_location);
console.log("========Q-3.I Clone the step 1 (SBI bank) and step 2 (Bank location)==========");
var cloneobj=Object.assign({},bank_sbi,bank_location);
console.table(cloneobj);

console.log("========Q-3.II Clone the step 1 (SBI bank) and step 2 (Bank location)==========");
const cloneSpredObj={...bank_sbi,...bank_location};
console.table(cloneSpredObj);

console.log("========Q-4 create an object rate of interest =================");

const rateOfInterest={
  home_loan_interest: `10%`,
  personal_loan_interest: `12%`,
  interest_due_interest:`5%`,
}

console.log(rateOfInterest);

console.log("========Q-5 Mearge the step 1,2 and step 4 objects into new object sbi_details");
const sbi_details=Object.assign({},bank_sbi,bank_location,rateOfInterest);
console.log("Find into below table mearge the bank_sbi,bank_location and step rateOfInterest objects into new object sbi_details");
console.table(sbi_details);
// console.log("==================Q-6 Travels this merged object===========================");

// for (let index = 0; index < sbi_details.length; index++) {
//     console.log(index);
    
// }