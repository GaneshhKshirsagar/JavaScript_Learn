class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");


// Find out the 'TCS' employee details and log only name and company on console
console.log("============Q 1 Find out the 'TCS' employee details and log only name and company on console");
const array1=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
       array1.filter((Employee)=>{
     if (Employee.emp_company=="TCS") {
        console.log(`${Employee.emp_name} ${Employee.emp_company}`);
     }
});
 
console.log("==============Q 2 Find the finance department employee log only department and employee name on console");

array1.filter((Employee)=>{
    if(Employee.emp_dept== "Finance"){
        console.log(`${Employee.emp_dept} ${Employee.emp_name}`);
    }
 });

 console.log("===============Q 4 Find the employee who's salary > 70000,and emp name, company and salary on console");

array1.filter((Employee)=>{
    if(Employee.emp_salary>70000){
        console.log(`${Employee.emp_name} ${Employee.emp_dept}  ${Employee.emp_salary}`);
    }
 });
 
 console.log("===============Q 5 Find the employee who's salary => 50000, and from IT department log complite emp details");

array1.filter((Employee)=>{
    if(Employee.emp_salary >= 50000 && Employee.emp_dept=="IT" ){
        console.log(`${Employee.emp_id} ${Employee.emp_name} ${Employee.emp_dept}  ${Employee.emp_salary} ${Employee.emp_company}`);
    }
 });

// //  console.log("Q 3 Find the employee who's name start with R and complite employee details on console");

//  let res=array1.filter((Employee)=>{
//     Employee.emp_name==
// });
// console.log(res);