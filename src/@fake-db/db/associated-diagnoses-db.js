import mock from '../mock';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
const associatedDiagnosesDB = [
	{
		id: '1',
		GroupName: 'Proident tempor est nulla irure ad est?',
		icd10s: [
			'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
			'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
			'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
			'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
			'Id nulla nulla proident deserunt deserunt proident in quis. Cillum reprehenderit labore id anim laborum.',
		]
	},
	{
		id: '2',
		GroupName: 'Ullamco duis commodo sint ad aliqua aute?',
		icd10s: [
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
			'Sunt laborum enim nostrud ea fugiat cillum mollit aliqua exercitation ad elit.',
		]
	},
	{
		id: '3',
		GroupName: 'Eiusmod non occaecat pariatur Lorem in ex?',
		icd10s: [
			'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.',
			'Nostrud anim mollit incididunt qui qui sit commodo duis. Anim amet irure aliquip duis nostrud sit quis fugiat ullamco non dolor labore. Lorem sunt voluptate laboris culpa proident. Aute eiusmod aliqua exercitation irure exercitation qui laboris mollit occaecat eu occaecat fugiat.',
		]
	},
	{
		id: '4',
		GroupName: 'Lorem magna cillum consequat consequat mollit?',
		icd10s: [
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
			'Velit ipsum proident ea incididunt et. Consectetur eiusmod laborum voluptate duis occaecat ullamco sint enim proident.',
		]
	},
	{
		id: '5',
		GroupName: 'Quis irure cupidatat ad consequat reprehenderit excepteur?',
		icd10s: [
			'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.',
			'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.',
			'Esse nisi mollit aliquip mollit aute consequat adipisicing. Do excepteur dolore proident cupidatat pariatur irure consequat incididunt.',
		]
	},
	{
		id: '6',
		GroupName: 'Officia voluptate tempor ut mollit ea cillum?',
		icd10s: [
			'Deserunt veniam reprehenderit do elit magna ut.',
			'Deserunt veniam reprehenderit do elit magna ut.',
			'Deserunt veniam reprehenderit do elit magna ut.',
		]
	},
	{
		id: '7',
		GroupName: 'Sunt fugiat officia nisi minim sunt duis?',
		icd10s: [
			'Eiusmod eiusmod sint aliquip exercitation cillum. Magna nulla officia ex consectetur ea ad excepteur in qui.'
		]
	},
	{
		id: '8',
		GroupName: 'Non cupidatat enim quis aliquip minim laborum?',
		icd10s: [
			'Qui cillum eiusmod nostrud sunt dolore velit nostrud labore voluptate ad dolore. Eu Lorem anim pariatur aliqua. Ullamco ut dolor velit esse occaecat dolore eu cillum commodo qui. Nulla dolor consequat voluptate magna ut commodo magna consectetur non aute proident.'
		]
	},
	{
		id: '9',
		GroupName: 'Dolor ex occaecat magna labore laboris qui?',
		icd10s: [
			'Incididunt qui excepteur eiusmod elit cillum occaecat voluptate cillum nostrud. Dolor ullamco ullamco eiusmod do sunt adipisicing pariatur. In esse esse labore id reprehenderit sint do. Pariatur culpa dolor tempor qui excepteur duis do anim minim ipsum.'
		]
	},
	{
		id: '10',
		GroupName: 'Nisi et ullamco minim ea proident tempor?',
		icd10s: [
			'Dolor veniam dolor cillum Lorem magna nisi in occaecat nulla dolor ea eiusmod.'
		]
	},
	{
		id: '11',
		GroupName: 'Amet sunt et quis amet commodo quis?',
		icd10s: [
			'Nulla dolore consequat aliqua sint consequat elit qui occaecat et.'
		]
	},
	{
		id: '12',
		GroupName: 'Ut eiusmod ex ea eiusmod culpa incididunt?',
		icd10s: [
			'Fugiat non incididunt officia ex incididunt occaecat. Voluptate nostrud culpa aliquip mollit incididunt non dolore.'
		]
	},
	{
		id: '13',
		GroupName: 'Proident reprehenderit laboris pariatur ut et nisi?',
		icd10s: [
			'Reprehenderit proident ut ad cillum quis velit quis aliqua ut aliquip tempor ullamco.'
		]
	},
	{
		id: '14',
		GroupName: 'Aliqua aliquip aliquip aliquip et exercitation aute?',
		icd10s: [
			'Adipisicing Lorem tempor ex anim. Labore tempor laboris nostrud dolore voluptate ullamco. Fugiat ex deserunt anim minim esse velit laboris aute ea duis incididunt. Elit irure id Lorem incididunt laborum aliquip consectetur est irure sunt. Ut labore anim nisi aliqua tempor laborum nulla cillum. Duis irure consequat cillum magna cillum eiusmod ut. Et exercitation voluptate quis deserunt elit quis dolor deserunt ex ex esse ex.'
		]
	}
];
var data = [];
axios.defaults.headers.common['Authorization'] = "Bearer "+ localStorage.getItem('token')

axios({
	url:`http://localhost:5183/api/associated-diagnoses/filter-diagnoses/?page=1`,
	method:'GET'
})
.then(function (response) {
	data = response.data.associatedDiagnoses;
})
.catch(function (error) {
  console.log(error);
});

mock.onGet('/api/associated-diagnoses/filter-diagnoses/').reply(config => {
	return [200, data];
});
