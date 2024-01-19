const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

const createJWT = user => {
  return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(createJWT(user));
  } catch (error) {
    res.status(400).json(error);
  }
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) throw new Error();
    res.json(createJWT(user));
  } catch (error) {
    res.status(400).json('Invalid credentials');
  }
}

const checkToken = (req, res) => {
  console.log('req.user', req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken
};
