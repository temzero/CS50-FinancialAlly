const User = require("../models/user.model");

const userControllers = {
  getHome: async (req, res) => {
    try {
      res.send("Welcome Home");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getRegister: async (req, res) => {
    try {
      res.send("Register: Username - Password");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  postRegister: async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getLogin: async (req, res) => {
    try {
      res.send("Login: Username - Password");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  postLogin: async (req, res) => {
    try {
      const loginEmail = req.body.email
      const loginPassword = req.body.password
      console.log('Login Email: ', loginEmail)
      console.log('Login Password: ', loginPassword)

      const matchedUser = await User.findOne({email: loginEmail});
      console.log('User actual password: ', matchedUser.password)

      if(loginPassword !== matchedUser.password) {
        console.log('Invalid email or password!');
        return res.status(401).json('Invalid email or password!');
      }
      
      console.log('Login success');
      res.status(200).json(matchedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const userID = req.params.id;
      const user = await User.findById(userID);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const userID = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(userID, req.body, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "Product not found!" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const userID = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userID);

      if (!deletedUser) {
        return res.status(404).json({ message: "Product not found!" });
      }

      res.status(200).json(deletedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userControllers;
