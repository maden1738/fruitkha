module.exports = (error, req, res, next) => {
     let status = 500;
     let message = "Sever Error";
     let errors = [];

     if (error.name === "ValidationError") {
          status = 400;
          message = "Bad Reqeuest";
          let errorsArray = Object.entries(error.errors); // { name: erroObject , email: errorObject } // =>  [ [name,nameErrorObject],[email,emailErrorObject] ]

          errorsArray.forEach((validationError) => {
               errors.push({
                    field: validationError[0],
                    message: validationError[1].message,
               });
          });
     }

     //    console.log(errorsArray);
     //    console.log(errorsArray[0][1].message);

     res.status(status).send({
          error: error.message,
          msg: message,
          errors: errors,
          errorStack: error.stack,
     });
};
