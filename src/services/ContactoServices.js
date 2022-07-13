import firebase from "../config/firebase";

export async function createMessage(form){
    const querySnapshot = await firebase.firestore().collection("mensajes").add(
        {
            nombre:form.nombre,
            email:form.email,
            telefono:form.telefono,
            mensaje:form.mensaje
        }
    )
    return querySnapshot.docs
}

export async function getAllMessages(){
    const querySnapshot = await firebase.firestore().collection("mensajes").get()
    return querySnapshot.docs
}

export async function deleteMessage(id){
    console.log("entro aca")
    return await firebase.firestore().doc("mensajes/"+id).delete();
}