module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a23874b68ba35bb2838793f372e0998'),
  },
});
