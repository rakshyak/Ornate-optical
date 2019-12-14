const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'
const { Cart, User, Category, Item, Review } = require('../models')


const signUp = async(req, res) => {
    try {

        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await User.create({
            username: username,
            email: email,
            password: password_digest
        })
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email
        }
        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {

        return res.status(400).json({ error: error.message })
    }
}

const signIn = async(req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({
            where: {
                username
            }
        })
        if (await bcrypt.compare(password, user.dataValues.password)) {
            const payload = {
                id: user.id,
                username: user.username,
                email: user.email
            }
            const token = jwt.sign(payload, TOKEN_KEY)
            return res.status(200).json({ user, token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async(req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                    model: Cart
                },
                { model: Review }
            ]
        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserById = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            include: [{
                    model: Cart
                },
                { model: Review }
            ],
            where: { id: id }
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createItem = async(req, res) => {
    try {
        const createdItem = await Item.create(req.body)

        return res.status(201).json({
            item: {
                createdItem
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

const getAllItems = async(req, res) => {
    try {
        const items = await Item.findAll({
            attributes: ['id', 'name', 'price', 'quantity', 'image'],
            include: [{
                    model: Review
                },
                {
                    model: Category,
                    attributes: ['name']
                }
            ]

        })
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getItemsWomen = async(req, res) => {
    try {
        const items = await Item.findAll({
            attributes: ['id', 'name', 'price', 'quantity', 'image'],
            include: [{
                    model: Review
                },
                {
                    model: Category,
                    attributes: ['name']
                }
            ],
            where: {
                categoryId: 2
            }

        })
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getItemsMen = async(req, res) => {
    try {
        const items = await Item.findAll({
            attributes: ['id', 'name', 'price', 'quantity', 'image'],
            include: [{
                    model: Review
                },
                {
                    model: Category,
                    attributes: ['name']
                }
            ],
            where: {
                categoryId: 1
            }

        })
        return res.status(200).json({ items })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getItemById = async(req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findOne({
            attributes: ['id', 'name', 'price', 'quantity', 'image'],
            include: [{
                    model: Review
                },
                {
                    model: Category,
                    attributes: ['name']
                }
            ],
            where: { id: id }
        })
        if (item) {
            return res.status(200).json({ item })
        }
        return res.status(404).send('Item with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateItem = async(req, res) => {
    try {
        const { id } = req.params
        const { item } = req.body
        const [updated] = await Item.create(item, {
            where: { id: id }
        })
        if (updated) {
            const updatedItem = await Item.findOne({ where: { id: id } })
            return res.status(202).json({ item: updatedItem })
        }
        throw new Error('Item not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteItem = async(req, res) => {
    try {
        const { id } = req.params
        const deleted = await Item.destroy({
            where: { id: id }
        })
        if (deleted) {
            return res.status(202).send('Item deleted')
        }
        throw new Error('Item not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const createReview = async(req, res) => {
    try {
        const { id } = req.params
        const created = await Review.create(req.body, {
            where: { id: id }
        })
        return res.status(201).json({
            review: {
                created
            }
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const updateReview = async(req, res) => {
    try {
        const { id, ...review } = req.body
        const [updated] = await Review.update(review, {
            where: { id: id }
        })
        if (updated) {
            const updatedReview = await Review.findOne({ where: { id: id } })
            return res.status(202).json({ item: updatedItem })
        }
        throw new Error('Review not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    signIn,
    signUp,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
    createReview,
    getItemsMen,
    getItemsWomen,
    updateReview

}