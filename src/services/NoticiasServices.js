import firebase from "../config/firebase";

export async function getAllNews(){
    const querySnapshot = await firebase.firestore().collection("noticias").get()
    return querySnapshot.docs
}

export async function createNew(form){
    const querySnapshot = await firebase.firestore().collection("noticias").add(
        {
            categoria:form.categoria,
            titulo:form.titulo,
            subtitulo:form.subtitulo,
            cuerpo:form.cuerpo,
            urlImagen:form.url
        }
    )
    return querySnapshot.docs
}

export async function getByIdNews(id){
    return await firebase.firestore().doc("noticias/"+id).get()
}

export async function updateNew(id,data){
    return await firebase.firestore().doc("noticias/"+id).set(data)
}

export async function deleteNew(id){
    return await firebase.firestore().doc("noticias/"+id).delete();
}

export async function deleteImageNew(url){
    return await firebase.storage().refFromURL(url).delete();
}