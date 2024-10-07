export function parseName(fullName) {
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : '';
  
    return {
      firstName,
      middleName,
      lastName
    };
  }
  
//   const user = { name: "John Michael Doe" };
//   const parsedName = parseName(user.name);
//   console.log(parsedName);
  