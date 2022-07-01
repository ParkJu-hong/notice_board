import react from 'react';
// import styles from '../styles/Home.module.css'
import { useBoolean } from '@chakra-ui/react'

const Home = () => {
  const [flag, setFlag] = useBoolean()
  return (
    <>
      <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
        {flag ? 'The flag is ON!' : 'Hover me to turn ON'}
      </div>
    </>
  )
}

export default Home
