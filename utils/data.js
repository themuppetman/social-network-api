const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    friends: ['jane_doe', 'jim_smith'] // List of friends' usernames
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    friends: ['john_doe'] // List of friends' usernames
  },
  {
    username: 'jim_smith',
    email: 'jimsmith@idk.com',
    friends: ['john_doe'] // List of friends' usernames
  }
  // Add more users as needed
];

const thoughts = [
  {
    thoughtText: 'This is a sample thought',
    username: 'john_doe',
  },
  {
    thoughtText: 'Another example thought',
    username: 'jane_doe',
  },
  {
    thoughtText: 'I disagree with the above thoughts',
    username: 'jim_smith',
  }
  // Add more thoughts as needed
];

const reactions = [
  {
    reactionBody: 'I agree!',
    username: 'john_doe',
  },
  {
    reactionBody: 'I disagree :(',  
    username: 'jane_doe',
  },
  {
    reactionBody: 'I have no opinion',
    username : 'jim_smith',
  }
];

module.exports = { users, thoughts, reactions };