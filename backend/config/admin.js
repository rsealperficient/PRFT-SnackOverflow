module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38649dacbce07318c628afdf15c84df4'),
  },
});
