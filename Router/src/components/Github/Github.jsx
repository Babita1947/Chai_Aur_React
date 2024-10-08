import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
        <div className='flex justify-center items-center p-4'>
            <img src={data?.avatar_url} alt="Git picture" width={300} style={{ borderRadius: '50%' }} />
        </div>
    </div>
  )
}

export default Github

export const githubInFolder = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}