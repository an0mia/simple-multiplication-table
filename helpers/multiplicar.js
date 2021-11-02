const fs = require("fs");
const colors = require("colors");

const crearArchivo = async(num, lis, hasta) => {
    
    try {
        
        let salida = "";

        for (let i = 1; i <= hasta; i++) {
            let res = num * i;
            salida += `${num} x ${i} = ${res}\n`;
        }

        if (lis) {

            console.log("================================".rainbow);
            console.log(`\t TABLA DEL ${num}`);
            console.log("================================\n".rainbow);
          
            console.log(salida);
            
        }

        fs.writeFileSync(`./output/tabla-${num}.txt`, salida);

        return `tabla-${num}.txt`; 
        
    } catch (err){
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}

