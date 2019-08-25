export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: process.env.MONGODB_URI || process.env.DB_URL || 'mongodb://localhost:27017/tipe-devapi-testing'
}
