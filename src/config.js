const config = {
  s3: {
    REGION: "sa-east-1",
    BUCKET: "igor-notes",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://vx89vinljg.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6q7hcgLCr",
    APP_CLIENT_ID: "1n0je6o755ihol3g8ombl6cf7q",
    IDENTITY_POOL_ID: "us-east-1:108810e6-17f7-4241-a3e6-3ed1e4a76e2f",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'pk_test_51Hp2uHDynU6nV36kWi7SRYf7ILs0tltP5CEggq5eW561PQtIn6RFRYXeOBPFjn61aDZVfVNLzP4Mm3ChQ7J0kiD000zpPg5bHk',
}

export default config;