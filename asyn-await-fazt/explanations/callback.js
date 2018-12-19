
// los callbacks se puede ver en findById en el cual el metodo de findById
// me devuelve dos cosas en el segundo "parametro" la cual es una funcion que va a 
// manejar esas dos cosas que me devuelve findById y dentro de esa función puedo hacer uso
// de lo que me devuelve y así sucesivamente hasta construir la piramide de la muerte
function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId, function(err, tasks) {
                if (err) {
                    return res.send(err)
                } else {
                    tasks.completed = true
                    tasks.save(function(err) {
                        if (err) {
                            return res.send(err)
                        } else {
                            res.send('Task Completed')
                        }
                    })
                }
            })
        }
    })
}