import { useState, useEffect } from 'react'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import MilanesaCard from './MilanesaCard'

const Milanesas = () => {

  const [milanesas, setMilanesas] = useState([])

  useEffect(() => {
    getMilanesas()
  }, [])

  const getMilanesas = () => {
    const db = getFirestore()
    const milanesasCollection = collection(db, 'items')
    getDocs(milanesasCollection).then(snapshot => {
      if(snapshot.size > 0) {
        const ids = snapshot.docs.map( d => d.id ).join(',')
        console.log('ids:', ids);
        const milanesasData = snapshot.docs.map( d => ({'id': d.id, ...d.data()}) )
        setMilanesas(milanesasData)
      }
    })
  }

  return (
    <>
      <div>Milanesas</div>
      { milanesas.map( m => <MilanesaCard key={m.id} item={m} />)})
    </>
  )
}

export default Milanesas
