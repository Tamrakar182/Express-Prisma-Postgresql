import bcrypt from "bcrypt";

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await req.db.user.findUnique({
        where: { email },
    });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Incorrect password" });
    }
    return res.status(200).json({ message: "Login successful" });
};

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await req.db.user.findUnique({
        where: { email },
    });
    if (user) {
        return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await req.db.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });
    return res.status(201).json({ message: "User created", data: newUser });
}

export default {
    login,
    register,
};