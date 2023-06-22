import Navbar from '../Navbar'

import Cookies from 'js-cookie'

import './index.css'

const token = Cookies.get('pa_token')

console.log(token)

const Home = () => (
<div>
    <Navbar/>
</div>
)

export default Home