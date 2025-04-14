const User = require('../models/User');

// see all users
getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// see a single user by id
getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create a new user (register)
createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

createAnonymousUser = async (req, res) => {
  usernameUrl = 'https://usernameapiv1.vercel.app/api/random-usernames?count=1';
  generatedMindTag = usernameUrl[0].username;

  const anonymousUser = new User({
    mindtag: generatedMindTag,
    isAnonymous: true,
  });

  try {
    const savedAnonymousUser = await anonymousUser.save();

    setTimeout(async () => {
      await User.findByIdAndDelete(savedAnonymousUser._id);
    }, 24 * 60 * 60 * 1000);

    res.status(201).json(savedAnonymousUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
