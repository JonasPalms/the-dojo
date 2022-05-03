import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/confiq";

export const useDocuments = (collection, id) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    // real time data 
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id);

        const unsubscribe = ref.onSnapshot((snapshot) => {
            if (snapshot.data()) {

                setDocument({ ...snapshot.data(), id: snapshot.id })
                setError(null)

            } else {
                setError('No such document exists')
            }
        }, (error) => {
            console.log(error.message)
            setError('Failed to get document')
        })

        // unsub on unmount
        return () => {
            unsubscribe()
        }

    }, [collection, id])

    return { document, error }
}