import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const encryptPassword = async (password) => {
    console.log('[encryptPassword]', { password })
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
}
const comparePassword = async (receivedPassword, password) => {
    console.log('[comparePassword]', { password, receivedPassword })
    return await bcrypt.compare(receivedPassword, password)
}
const createAccessToken = (userId) => {
    console.log('[createAccessToken]', { userId })
    const token = jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
    console.log('[createAccessToken]', { token })

    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

export {
    encryptPassword,
    comparePassword,
    createAccessToken
}