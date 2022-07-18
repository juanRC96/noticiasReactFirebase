import firebase from "../config/firebase";

export async function getAllNews(){
    const querySnapshot = await firebase.firestore().collection("noticias").orderBy("fecha","desc").get()
    return querySnapshot.docs
}

export async function getNewsByCat(categoria){
    const querySnapshot = await firebase.firestore().collection("noticias").where("categoria","==",categoria).get()
    return querySnapshot.docs
}

export async function getFeaturedNews(){
    const querySnapshot = await firebase.firestore().collection("noticias").where("destacada","==","on").get()
    return querySnapshot.docs
}

export async function createNew(form){
    const querySnapshot = await firebase.firestore().collection("noticias").add(
        {
            categoria:form.categoria,
            titulo:form.titulo,
            subtitulo:form.subtitulo,
            cuerpo:form.cuerpo,
            epigrafe:form.epigrafe,
            autor:form.autor,
            urlImagen:form.url,
            destacada:form.destacada,
            fecha:form.fecha,
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