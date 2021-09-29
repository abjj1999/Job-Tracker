const User = require('./User');
const Application = require('./Application');

User.hasMany(Application, {
    foreignKey: 'user_id'
});

Application.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Application };