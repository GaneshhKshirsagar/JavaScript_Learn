let teacher={
    teacher_name: "Ramdas satpute",
    collage_name: "sangola college sangola",
    gender: "Female",
    subject: "english",
        degrees:{
            deploma: "civil",
            engi: "Computer",
            phd: "Adv computing",
        },
        certificates:{
         hack_rank_part: 1,
         certi_IFE: "yes",
         certi_adv_pro: "yes",
        },
        dgr: function(){
            console.log("Acess the teacher property --> " + this.teacher_name,this.collage_name,this.gender,this.subject);
           },
           
    }
    console.log("Update the address is Mumbai as following tabal");
    teacher.teacher_address="Mumbai";
    console.table(teacher);
    console.log("Update the subject is Math as following tabal");
    teacher.subject="math";
    console.table(teacher.subject);
    console.table(teacher.degrees);
    console.table(teacher.certificates);
    console.log("delete the porperty is certi_adv_pro as follow");
   delete teacher.certificates.certi_adv_pro;
   console.table(teacher.certificates);
   console.log("add certificate- compition ran as follow");
   teacher.certificates.compition_rank=2;
   console.table(teacher.certificates);
   teacher.dgr();