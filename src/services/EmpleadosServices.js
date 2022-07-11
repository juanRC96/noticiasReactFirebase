import firebase from "../config/firebase";

export async function getAllEmp(){
    const querySnapshot = await firebase.firestore().collection("empleados").get()
    return querySnapshot.docs
}

export async function createEmp(form){
    const querySnapshot = await firebase.firestore().collection("empleados").add(
        {
            apellido:form.apellido,
            nombre:form.nombre,
            cargo:form.cargo,
            salario:form.salario,
            urlImagen:form.url
        }
    )
    return querySnapshot.docs
}

export async function getByIdEmp(id){
    return await firebase.firestore().doc("empleados/"+id).get()
}

export async function updateEmp(id,data){
    return await firebase.firestore().doc("empleados/"+id).set(data)
}

export async function deleteEmp(id){
    return await firebase.firestore().doc("empleados/"+id).delete();
}

export async function deleteImageEmp(url){
    return await firebase.storage().refFromURL(url).delete();
}