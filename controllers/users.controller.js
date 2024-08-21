import User from '../models/user.model.js'
import { encryptPassword, comparePassword, createAccessToken } from '../utils/protect-data.js'

const register = async (req, res) => {
    const { username, dni, email, password } = req.body

    console.log('[register]', { username, dni, email, password })

    const encryptedPassword = await encryptPassword(password)
    console.log('[register]', { encryptedPassword })

    const newUser = new User({
        username,
        dni,
        email,
        password: encryptedPassword
    })

    console.log('[register]', { newUser })

    const userSaved = await newUser.save()


    res.status(201).json(userSaved)

    // Error handling

}
const login = async (req, res) => {
    const { email, password } = req.body
    console.log({ email, password })

    // 0 - Debo recibir el email y la contraseña sino, devolver un error
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' })
    }

    // 1 - Debo corroborar que el email exista en la base de datos
    const userFound = await User.findOne({ email })
    console.log({ userFound })
    // 1.1 - Si no existe, devolver un error
    if (!userFound) {
        return res.status(400).json({ message: 'User not found. Already have an account?' })
    }
    // 1.1 - Si existe, continuar con el proceso - Punto 2
    // 2 - Debo corroborar que la contraseña sea la correcta
    const isPasswordCorrect = await comparePassword(password, userFound.password)

    console.log({ isPasswordCorrect })
    // 2.1 - Si no es correcta, devolver un error
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Email or Password is incorrect' })
    }

    // 2.1 - Si es correcta, continuar con el proceso - Punto 3
    // 3 - Debo generar un token de acceso y devolverlo
    const accessToken = createAccessToken(userFound._id)
    console.log({ accessToken })

    res.status(200).json({ message: 'Login', userFound, accessToken })
}
const logout = async (req, res) => { }

export {
    register,
    login,
    logout
}