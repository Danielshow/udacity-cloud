export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET,
    "jwt_secret": process.env.JWT_SECRET,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres"
  },
}
