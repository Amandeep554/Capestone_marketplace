const admin = require("firebase-admin");
module.exports = function () {
  admin.initializeApp({
    credential: admin.credential.cert({
      "type": "service_account",
      "project_id": "rnative-d44cc",
      "private_key_id": "71d5dd5e50af645bca109981a9d94188cbc48a6c",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQ/yv6Zck3Vqh6\n2CKWXG7z2FUfBz+rZTPIk/ZPLXJJT/bMP+QNTMARIBqUGN+bHQtpHaetzMmaUg2V\nCFVJu+NKdVXCs0fk0XnfYoTVx+6ZmZwaeEjeJRI5bzJGz0uDpySnopVOh92iTDtq\n3ik8RDOVV6V0rAy/zOt8nEpVcPAFaBDdf5rkB0e7hN0C1oqFGam1YGGQxiHTxvZ7\nFM1wF034r0KYCU4V5uBYEpRZKzhUe4NagAzkjdOwCCb3QxSoMhiAQUtYZNyuMNCX\nyC35Gcuuw2seETuk4R84VxAB9j2RlNVXrlnwGHR6bRcNVxlJgmKpvwwzFGi3gB/t\no8FoKnQhAgMBAAECggEACLNk2O/xnm+JxFJ47yZSOq3aDliCiK/GBf7N8WookL+G\n3GY5B+o28UeTP7Dg5z/gbJv+0fQdfQKXPOn7xf3v1pbXrwtAbhjf8GI1OkKwbt3X\nozz4eKIVtgUodEz3PXgBBUcWHO64VgRDMX3l/NOwi5I6acbrYXVGJPoLOK8i2PCy\nxJOy+giKQ+VO3gGrfk9+8C0FH2RTs3k3QVxOH7CujOwuInqy/lFQcyThl6rf18am\n8uqDR5s9gUEe32d1x2VUOTPXjvpD/77SDkBhhUp9Or0zo2CJX2edW6a6JDvasXik\nAxyDXd7FYH1JpmptF2jT8EWCf1cf1EhWDfz4fJuA4QKBgQDvlpS20FHwj5BHmjPL\nhlsPdL1i3KM4beLyJItNseuQhYs5d6gZUkItIieaBB90QeD+hhXA7VduaAa+z8Al\n1PmMDjg/ejpp6z5GaBedGbsuiCffByOwWnsM1HoGdc3CP7lXh5UzC/qV6NhvZc83\ncXLazS4j23/FkHdzZzRXLTjysQKBgQDfUCOp/KX7tNg8AeDHUwD2ilfVZF/8Sbz2\ndLiIORrRCdfgY8ytgi5AWD1oXYRhvN43+kRZHS0Sm19OR1vKBcXR7zVeICrZaLx9\nWTQBlHVIh/Mc2SMSy+szr6JF5Q+uvhe7JzpDiBHKCuvGBixjA8Ha0gDg8ZbNjGB6\nS9w5NYmUcQKBgQCwNjbwci0h2eUK1J4tnYaRypGUCaS+Vwuofjo6jZYsuBuay6fF\n39suKMWpoEimD+H0MRgEyksYt8fmRRQUfxx+5uJ1xWb7CfrGe76KXCdwZNG2ViDo\njtObrxaEc9Y+fPHLL7wLTE8kPJoa7G1IYNdRl8DMvJ6v5r4EEa7MQ0V0MQKBgQCE\nUGiBPLhgNlv02iwEDjNA4OGAB5Qz2MEEyk3YMPWprApj4t4QZFThPSdNYjOg8ZY9\nVqUOpBHjt3m12OQTBG6cn/5gAfFBliQwpR0CXqNLUXoDushkR7zZiBQ/E6TCJdHL\ny0djYgkgTG48i8Xa+QvwioOIxLxUl/tGGxKmNwmIkQKBgEQ+UbpO7Di5jtHfTQdq\nt9h90tzFhFeLpfVCimmnt21O4Dvo+ypORtkRi6yENlt+tg7MEBuK8U4og1gS5Moz\nz6TQvYCUQjjfZXDvGjdFrNIKM7O1s3zBlu9cR5POeftem2SD69IjKBrhvWGyD/zr\nLO6xRdNErvMqgSGF1zGTVPFT\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-twawk@rnative-d44cc.iam.gserviceaccount.com",
      "client_id": "107913273217431391492",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-twawk%40rnative-d44cc.iam.gserviceaccount.com"
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
};
