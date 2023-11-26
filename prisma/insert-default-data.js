db = connect(
	'mongodb://root:rootUser%40123@localhost:27017/mywl?retryWrites=true&w=majority&authSource=admin',
);

db.users.insertOne({
	userId: 'sampleUserId',
	firstName: 'Martin',
	lastName: 'Bikathi',
	roles: ['ROLE_ADMIN', 'ROLE_EDITOR'],
	emailAddress: 'martbikathi@gmail.com',
	phoneNumber: 254700000000,
	password: '$2a$10$ECSdXj3U3WpBNbReTdbNM.7P0HGQsK/yJyq6EVrEDKZU1Xhkekqz6', //adminDefaultPassword
	sessions: null,
});
