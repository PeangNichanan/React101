import React from 'react'
import users from '../mock/Users'

// interface user {
//     firstName: string;
//     lastName: string;
//     age: number;
//   }
  
//   interface users {
//     users: user[];
//   }

const UserList = () => {
  return ( 
    <div> 
        <p className='mb-2 font-bold text-xl'>User</p>
        <table className="text-center">
            <thead className="text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        first name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        last name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        age
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <>
                        <tr className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {index+1}
                            </th>
                            <td className="px-6 py-4">
                                {user.firstName}
                            </td>
                            <td className="px-6 py-4">
                                {user.lastName}
                            </td>
                            <td className="px-6 py-4">
                                {user.age}
                            </td>
                        </tr>
                        </>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserList;