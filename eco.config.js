module.exports = [
  {
    name: 'skill-mask',
    script: './dist/main.js',
    env: {
      NODE_ENV: 'production',
      port: 5000,
      api_url: 'http://localhost:5000/api',
      api_key: 'tHZo7YINsWRVZfLUOSbFt3JGAD4pjt1s',
      db_url: "mongodb+srv://jamilur:keepaway1147@test-skill-sm.kqcbr.mongodb.net/skillMask?retryWrites=true&w=majority"
    },
  },
];
