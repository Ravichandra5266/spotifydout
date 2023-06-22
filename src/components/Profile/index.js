import { useEffect } from 'react'

import Cookies from 'js-cookie'

// import { useState } from 'react'

import Navbar from '../Navbar'

import './index.css'

const Profile = () => {

// const [profileDate , setProfileData] = useState([])

const getProfileData = async () => {
    const token = Cookies.get('pa_token')
    // console.log(token)
    const url = 'https://api.spotify.com/v1/me'
    const options = {
        method:'get',
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const reqprofileData = await fetch(url ,options)
    // console.log(reqprofileData)
    const resProfileData = await reqprofileData.json()
    // console.log(resProfileData)

}

useEffect(() => {
getProfileData()
},[])
    return(
        <div className='profile-container'>
       <Navbar/>
       </div>
    )
}

export default Profile