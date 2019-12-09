const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req,res) => {
    try {
        console.log(req.body)
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await user.create ({
            username,
            email,
            password_digest
        })
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email
        }
        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log(
            'You made it to the signUp controller, but there was an error ;('
        )
        return res.status(400).json ({ error: error.message })
    }
}

const signIn = async (req,res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body
        const user = await User.findOne({
            where: {
                username
            }
        })
        if(await bcrypt.compare(password, user.dataValues.password_digest)) {
            const payload = {
                id: user.id,
                username: user.username,
                email: user.email
            }
            const token = jwt.sign(payload, TOKEN_KEY)
            return res.status(201).json({ user, token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}