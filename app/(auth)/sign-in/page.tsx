'use client';

import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signInSchema} from "@/lib/validations"

const page = () => (
  <AuthForm 
    type= "SIGN_IN"
    schema = {signInSchema}
    defaultValues ={{
      email: "",
      password: "",
    }}
    onSubmit ={() => {}}
  />
  )

export default page;




//if u use the ()--> this brackets in ur arrow function means, u dotn need the return to write becoz javascript knows if use this () means in that matter will be automatically return 1:29:33


//if u use the {}--> this brackets in ur arrow fucntion means, u need to write the return keyword, becoz javascript will think like a fucntion code, the fuction code needed to be return