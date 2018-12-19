

// await para poderlo usar debo estar dentro de una async función
// para poder manejar los errores mi código lo pongo dentro de un try-catch
async function requestHandler(req, res) {
    try {
        // como User.findById me va a devolver algo si se hace correctamente lo que me devuelve lo
        // guardo en la constante user
        const user =  await User.findById(req.userId)
        const tasks =  await tasks.findById(user.tasksId)
        tasks.completed = true
        await tasks.save()
        res.send('Task Completed')
        
    } catch (err) {
        res.send(err)
    }
}