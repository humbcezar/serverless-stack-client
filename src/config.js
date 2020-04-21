export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_gHNDOdkJ7PO8VfK1dajtm9qR00n969Nr1J",
  s3: {
    REGION: "us-east-2",
    BUCKET: "betoncios-notes-apps-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://6h7xe9zo36.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_u1xyrx7lJ",
    APP_CLIENT_ID: "5d7bp55e7fdljmtdvlrjqni4vq",
    IDENTITY_POOL_ID: "us-east-2:26adfc4e-2a5c-4fd5-9593-a466a05047d7"
  }
};
