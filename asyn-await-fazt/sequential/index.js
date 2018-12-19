
const {taskOne, taskTwo} = require('./tasks')


async function main() {
    try {
        console.time('Measuring time')
        /* Código que se ejecuta de forma secuencial
        const valueOne = await taskOne()
        const valueTwo = await taskTwo() */
        // Código que se ejecuta de forma paralela
        // con Promise.all puede ejecutar varias tareas de forma paralela pasandolas como un array
        // y los resultados de esas promesas los guardo en results el cual se convierte en un array 
        // de resultados
        const results = await Promise.all([taskOne(), taskTwo()])
        console.timeEnd('Measuring time')
        
        console.log('Task One returned', results[0])
        console.log('Task Two returned', results[1])
        
    } catch (err) {
        
    }


}


main()
