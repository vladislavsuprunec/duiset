// Define a type alias for a user object
type User = {
  id: number;
  name: string;
  email: string;
};

// Function to create a new user
function createUser(id: number, name: string, email: string): User {
  // Ensure the email is in lowercase for consistency
  const normalizedEmail = email.toLowerCase();

  // Return the new user object
  return { id, name, email: normalizedEmail };
}

// Example usage of the createUser function
const newUser = createUser(1, 'Alice', 'ALICE@example.com');
console.log(newUser);
