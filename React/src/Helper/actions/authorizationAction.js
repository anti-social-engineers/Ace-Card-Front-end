export const createAcc = (account) => {
    return (object, getState , {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('accounts').add({
            account, 
            createdAt: new Date()
        }).then( () => {
            object({type: 'CREATE_ACCOUNT', account});
        })
    }
}