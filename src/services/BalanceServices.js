import firebase from "../config/firebase";

export async function getAllMovements(){
    const querySnapshot = await firebase.firestore().collection("balance").get()
    return querySnapshot.docs
}

export async function deleteMovement(id){
    return await firebase.firestore().doc("balance/"+id).delete();
}

export async function createMove(form){
    const querySnapshot = await firebase.firestore().collection("balance").add(
        {
            tipo:form.tipo,
            detalle:form.detalle,
            valor:form.valor,
        }
    )
    return querySnapshot.docs
}