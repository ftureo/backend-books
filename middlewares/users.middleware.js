const verifyToken = (req, res, next) => {
    console.log('[verifyToken]', { body: req.body })

    const token = null
    if (!token) {
        return res.status(401).json({ message: 'Access denied' })
    }
    next()
}

export {
    verifyToken
}