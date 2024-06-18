# Database of users
user_db = {
    "iamsaravanan@gmail.com": "omkar",
    "iammithunsai@gmail.com": "mithun",
    "preethi@gmail.com": "pre123*"
}

def login(username, password):
    if username in user_db:
        if user_db[username] == password:
            return "Successfully logged in"
        else:
            return "Error: Incorrect password"
    else:
        return "Error: Username not found"

def main():
    # Ask for user input
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check login credentials
    result = login(username, password)
    print(result)

if __name__ == "__main__":
    main()
