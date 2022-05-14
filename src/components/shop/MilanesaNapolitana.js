import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function MilanesaNapolitana() {
  
  const [milanesa, setMilanesa] = useState({})

  useEffect(() => {
    getMilanesaNapolitana()
  }, [])

  const getMilanesaNapolitana = () => {

    const db = getFirestore()
    const milanesaDoc = doc(db,'items','4vHeXXWPfoduC3e1Aawf')
    getDoc(milanesaDoc).then(result => {
      if(result.exists()){
        console.log('Result:', result);
        console.log('id:', result.id);
        console.log('data:', result.data());
        setMilanesa({id: result.id})
      }
    })
  }

  return (
    <div>
      {milanesa.title}
      {milanesa.price}
      {milanesa.stock}
    </div>
  )
}

export default MilanesaNapolitana
