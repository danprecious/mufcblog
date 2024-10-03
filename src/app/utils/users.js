const users = [
    {
        name: "Dan",
        email: "kdpcoder@gmail.com",
        password: "kaydanpre222",
    },
    {
        name: "Test Kay",
        email: "testuser@gmail.com",
        password: "kaydan222",
    },
    {
        name: "Precious",
        email: "danprecious@gmail.com",
        password: "danpre222",
    },
]


export const getUserByEmail = (email) => {
    const found = users.find(user => email === user.email)
    return found;
}