import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mock from '../mock';

const contactsDB = {
	contacts: [
		{
			id: '5725a6801146cce777df2a08',
			priority: 1,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'chat',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a6808a178bfd034d6ecf',
			priority: 2,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'mail',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a680653c265f5c79b5a9',
			priority: 1,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'task',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a680bbcec3cc32a8488a',
			priority: 3,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'task',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a6803d87f1b77e17b62b',
			priority: 2,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'chat',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a680e87cb319bd9bd673',
			priority: 4,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'mail',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a6802d10e277a0f35775',
			priority: 2,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'chat',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a680aef1e5cf26dd3d1f',
			priority: 1,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'chat',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a680cd7efa56a45aea5d',
			priority: 1,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'chat',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a680fb65c91a82cb35e2',
			priority: 1,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'mail',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a68018c663044be49cbf',
			priority: 1,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'task',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		},
		{
			id: '5725a6809413bf8a0a5272b1',
			priority: 3,
			Date: '10/12/1965',
			name: 'James Smith',
			type: 'mail',
			subject: 'Lorem ipsum dolor sit amet.',
			patient: 'James Smith'
		}
	],
	
};

mock.onGet('/api/alert').reply(config => {
	const { id } = config.params;
	let response = [];
	switch (id) {
		case 'frequent': {
			response = contactsDB.contacts.filter(contact => contactsDB.user[0].frequentContacts.includes(contact.id));
			break;
		}
		case 'starred': {
			response = contactsDB.contacts.filter(contact => contactsDB.user[0].starred.includes(contact.id));
			break;
		}
		default: {
			response = contactsDB.contacts;
		}
	}
	return [200, response];
});

mock.onGet('/api/contacts-app/user').reply(config => {
	return [200, contactsDB.user[0]];
});

mock.onPost('/api/contacts-app/add-contact').reply(request => {
	const data = JSON.parse(request.data);
	contactsDB.contacts = [
		...contactsDB.contacts,
		{
			...data.newContact,
			id: FuseUtils.generateGUID()
		}
	];
	return [200, contactsDB.contacts];
});

mock.onPost('/api/contacts-app/update-contact').reply(request => {
	const data = JSON.parse(request.data);

	contactsDB.contacts = contactsDB.contacts.map(contact => {
		if (data.contact.id === contact.id) {
			return data.contact;
		}
		return contact;
	});

	return [200, contactsDB.contacts];
});

mock.onPost('/api/contacts-app/remove-contact').reply(request => {
	const data = JSON.parse(request.data);

	contactsDB.contacts = contactsDB.contacts.filter(contact => data.contactId !== contact.id);

	return [200, contactsDB.contacts];
});

mock.onPost('/api/contacts-app/remove-contacts').reply(request => {
	const data = JSON.parse(request.data);
	contactsDB.contacts = contactsDB.contacts.filter(contact => !data.contactIds.includes(contact.id));
	return [200, contactsDB.contacts];
});

mock.onPost('/api/contacts-app/toggle-starred-contact').reply(request => {
	const data = JSON.parse(request.data);
	contactsDB.user[0].starred = _.xor(contactsDB.user[0].starred, [data.contactId]);
	return [200, contactsDB.user[0]];
});

mock.onPost('/api/contacts-app/toggle-starred-contacts').reply(request => {
	const data = JSON.parse(request.data);
	contactsDB.user[0].starred = _.xor(contactsDB.user[0].starred, data.contactIds);
	return [200, contactsDB.user[0]];
});

mock.onPost('/api/contacts-app/set-contacts-starred').reply(request => {
	const data = JSON.parse(request.data);

	contactsDB.user[0].starred = [...contactsDB.user[0].starred, ...data.contactIds];

	return [200, contactsDB.user[0]];
});

mock.onPost('/api/contacts-app/set-contacts-unstarred').reply(request => {
	const data = JSON.parse(request.data);

	contactsDB.user[0].starred = contactsDB.user[0].starred.filter(contactId => !data.contactIds.includes(contactId));

	return [200, contactsDB.user[0]];
});
