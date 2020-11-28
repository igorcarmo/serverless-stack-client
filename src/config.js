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
}

export default config;