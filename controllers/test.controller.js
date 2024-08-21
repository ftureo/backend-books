const postTest = (request, response) => {
    console.log({ body: request.body })

    // Pide una conexión a MongoDB
    // Realiza una consulta a la base de datos respetando el modelo de la colección
    // Realiza una acción en la base de datos - Crear
    // Si todo sale bien, devuelve un status 200 y un mensaje

    response.status(200)
    response.json({ message: 'Solicitud completa. Se recibieron los siguientes datos', body: [request.body] })
}
const putTest = (request, response) => {
    response.status(404)
    response.json({ message: 'No se encontró la solicitud o la ruta está en desarrollo' })
}

export { postTest, putTest }