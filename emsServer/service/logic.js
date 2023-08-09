const db = require('./db')

const allEmployee = () => {
     return db.Employee.find().then(result => {
    if (result) {
        return {
            satusCode: 200,
            employees: result
        }
    }
    else {
        return {
            satusCode: 400,
            message: "no data found"

        }
    }

})
}
const addEmployee = (id,uname,age,designation,salary) => {
    return db.Employee.findOne({id}).then(result => {
   if (result) {
       return {
           satusCode: 400,
           message: "already exist"
       }
   }
   else {
    const newEmp=new db.Employee({

        //create object for new employee
        id,
        uname,
        age,
        designation,
        salary
    })
    //save the object in db
    newEmp.save()





       return {
           satusCode: 200,
           message: "employee added successfully"

       }
   }

})
}
const removeEmployee = (eid) => {
    return db.Employee.deleteOne({id:eid}).then(result => {
   if (result) {
       return {
           satusCode: 200,
          message:"employees removed"
       }
   }
   else {
       return {
           satusCode: 404,
           message: "employees not present"

       }
   }

})
}

const getAnEmp=(id)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"employees not present"
            }
        }
    })

}
const editEmp=(id,uname,age,desig,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.age=age
            result.designation=desig
            result.salary=salary
        result.save()
        return{
            statusCode:200,
            message:"employee data updated"
        }
        }
        else{
            return{
                statusCode:404,
                message:"employees not present"
            }
        }
    })

}


module.exports={
    allEmployee,addEmployee,removeEmployee,getAnEmp,editEmp
}