class employee{
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new employee(22,"anil","IT",50000,"TCS");
const emp_radha= new employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new employee(99,"Mahesh","HR",85000,"Infy");


console.log("==================Q 1 Employee working in TCS ========================");

let empdetails=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
for (const employee of empdetails) {
if (employee.emp_company=="TCS") {
    console.log(`Employee Name ${employee.emp_name} Employee Company ${employee.emp_company}`);
}
}

console.log("============Q 2 finance department employee =============");

for (const employee of empdetails) {
    if (employee.emp_dept=="Finance") {
        console.log(`Employee department ${employee.emp_dept} Employee Name ${employee.emp_name}`);
    }
    }

    console.log("==========Q 3 find the emp who's salary is >70000===========");
    for (const employee of empdetails) {
     if (employee.emp_salary>70000) {
         console.log(`Employee Name ${employee.emp_name} Employee company ${employee.emp_company} Employee salary ${employee.emp_salary} `);
     }
    }
    
    console.log("==========Q 4  find the emp who's salary is >70000===========");
    for (const employee of empdetails) {
     if (employee.emp_salary>50000 && employee.emp_dept=="IT") {
         console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_dept} ${employee.emp_salary} ${employee.emp_company} `);
     }
    }

    console.log("==========Q 5  find the emp from company infy ===========");
    for (const employee of empdetails) {
     if (employee.emp_company=="Infy") {
         console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_dept} ${employee.emp_salary} ${employee.emp_company} `);
     }
    }

    let empdetails3=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];