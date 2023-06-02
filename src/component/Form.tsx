import { log } from 'console';
import React, { useState } from 'react'
import "../global.css"
import users from '../mock/Users'

interface Props {
    firstName: string;
    lastName : string;
    age: number
}

const Form = () => {
    const [user, setUser] = useState<Props>({
        firstName:"",
        lastName:"",
        age:-1
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        
        setUser({...user, [e.target.name]: value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        users.push(user);
        // Perform form submission logic here
        console.log(users);
        setUser({
            firstName:"",
            lastName:"",
            age:-1
        });
      };
      
      
  return (
    <div>
        <div className=' ms-6 h-screen bg-white shadow w-1/2 flex items-center justify-center'>
            <form className='' onSubmit={handleSubmit}>
            <p className="mb-6 font-bold text-xl">Create User</p>
                {/* --- First Name --- */}
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                    <input type="text" name='firstName' value={user.firstName} onChange={handleChange}
                    className="global-input"/>
                </div>
                {/* --- Last Name --- */}
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                    <input type="text" name='lastName' value={user.lastName} onChange={handleChange}
                    className="global-input"/>
                </div>
                {/* ---  Age --- */}
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
                    <input type="number" name='age' value={user.age === -1 ? '' : user.age} onChange={handleChange}
                    className="global-input"/>
                </div>
                <button type="submit" className={'py-3 px-5 mr-2 mb-2 mt-3 text-sm text-white font-medium rounded-lg bg-blue-700 hover:bg-blue-400 w-full'}>
                    Save
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form