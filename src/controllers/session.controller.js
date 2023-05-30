import { createUser, findUserByEmail} from "./userServices"
import validatePassword from '../utils/bcrypt.js'


export const loginUser = async (req, res, next)=> {
    try {
        if (user){
            const { email, password } = req.body
                const userBDD = await findUserByEmail(email)
        if (!userBDD) {
             // UserBDD no encontrado en mi aplicacion
             return res.redirect('http://localhost:3000/register/') //(401).send("User no encontrado")
            }       
        if (!validatePassword(password, userBDD.password)){
                    //Contraseña invalida
                    return res.status(401)
        }
        
        }
    } catch (error) {
        res.status(500).send(`Ocurrio un error en Session, ${error}`)
    }
}

export const registerUser = async (req, res, next) =>{
   try{ const {first_name, last_name, email, age, password} = req.body
    const userBDD = await findUserByEmail(email)

    if(userBDD){
        res.status(401).send("Usuario ya registrado")
    }
    else{
        const handPassword = createHash(password)
        const newUser = await createUser ( {first_name, last_name, email, age, password} )
        console.log(newUser)
    }
    } catch{
        res.status(500).send(`Ocurrio un error en Registro User, ${error}`)
    }
}