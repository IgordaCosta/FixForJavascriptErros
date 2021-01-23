function getClima() {
    

    


    let {PythonShell} = require("python-shell")
    let path = require("path")

    

    let cidade = document.getElementById("cidade").value
    document.getElementById("cidade").value = ""

    // console.log(cidade)

    let opcoes = {
        scriptPath : path.join(__dirname, '../_engine/'),
        pythonPath: 'C:\\ProgramData\\Anaconda3\\python',
        args : [cidade]
    }

    console.log(path.join(__dirname, '../_engine/'))

    
    let clima = new PythonShell('clima.py', opcoes);

    clima.on('message', function(message) {
        swal(message);
    })
}