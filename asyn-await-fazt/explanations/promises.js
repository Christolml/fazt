// una promesa esta conformada por un metodo then (ocurre cuando la ejecucion salio bien y se tiene el dato esperado) 
// y otro llamado catch (el cual recibe errores, manejar el error)
// las tareas se van ejecutando una tras otra conforme van terminando y con el return me estoy dirigiendo a mi siguiente
// promesa, por ejemplo, return Tasks.findById(user.tasksId) en el return anterior ese Tasks.findById se llevara acabo en la 
// siguiente promesa y para manejar los errores de las distintas promesas solamente se ocupa un catch el cual maneja los errores
// de todas las promesas
function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function(user){
                return Tasks.findById(user.tasksId)
        })
        .then(function(tasks) {
            tasks.completed = true
            return tasks.save()
        })
        .then(function() {
            res.send('Tasks Completed')
        })

        .catch(function(errors) {
            res.send(errors)
        })
}