import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id : 'dashboard',
		title : 'Desktop / Dashboard',
		icon : 'apps',
		type: 'group',
		children : [
			{
				id : 'calendar',
				title : 'Calendar',
				type : 'item',
				url : '/dashboard/calendar',
				icon : 'calendar_today'
			},
			{
				id : 'task_manager',
				title : 'Task Manager',
				type : 'item',
				url : '/dashboard/task_manager',
				icon : 'attachment'
			},
			{
				id : 'file_manager',
				title : 'File Manager',
				type : 'item',
				url : '/dashboard/file_manager',
				icon : 'folder'
			}
		]
	},
	{
		id : 'alerts',
		title : 'Alerts',
		icon : 'apps',
		type: 'group',
		children : [
			{
				id : 'all',
				title : 'All',
				type : 'item',
				url : '/alerts/all',
				icon : 'notifications_active',
				badge: {
					title: 10,
					bg: 'rgb(9, 210, 97)',
					fg: '#FFFFFF'
				}
			},
			{
				id : 'chat',
				title : 'Chat',
				type : 'item',
				url : '/alerts/chat',
				icon : 'chat',
				badge: {
					title: 5,
					bg: '#ffb300',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'mail',
				title: 'Mail',
				type: 'item',
				icon: 'email',
				url: '/alerts/mail',
				badge: {
					title: 3,
					bg: '#F44336',
					fg: '#FFFFFF'
				}
			},
			{
				id: 'todo',
				title: 'Tasks',
				type: 'item',
				icon: 'assignment',
				url: '/alerts/todo',
				badge: {
					title: 2,
					bg: 'rgb(236, 12, 142)',
					fg: '#FFFFFF'
				}
			},
		]
	},
	{
		id : 'charting',
		title : 'Charting',
		icon : 'table_chart',
		type: 'group',
		url : '/charting/location',
		children : [
			{
				id : 'cc',
				title : 'CC',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_cc'
			},
			{
				id : 'hpi',
				title : 'HPI',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_hpi'
			},
			{
				id : 'pmh',
				title : 'PMH',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_pmh'
			},
			{
				id : 'psh',
				title : 'PSH',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_psh'
			},
			{
				id : 'meds',
				title : 'MEDS',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_med'
			},
			{
				id : 'adr',
				title : 'ADR',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_adr'
			},
			{
				id : 'sh',
				title : 'SH',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_sh'
			},
			{
				id : 'fh',
				title : 'FH',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_fh'
			},
			{
				id : 'ros',
				title : 'ROS',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_ros'
			},
			{
				id : 'pe',
				title : 'PE',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_pe'
			},
			{
				id : 'data',
				title : 'DATA',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_dd'
			},
			{
				id : 'assessment',
				title : 'ASSESSMENT',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_ass'
			},
			{
				id : 'ord',
				title : 'PLAN/ORDERS',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_ord'
			},
			{
				id : 'em',
				title : 'E & M',
				type : 'item',
				icon : 'lens',
				url : '/charting/charting_em'
			}
		]
		// children : [
		// 	{
		// 		id : 'note_sidebar',
		// 		title : 'Note',
		// 		type : 'collapse',
		// 		icon : 'note',
				
		// 		children : [
		// 			{
		// 				id : 'location',
		// 				title : 'Location',
		// 				type : 'item',
		// 				url : '/charting/location',
		// 				icon : 'room' 
		// 			},
		// 			{
		// 				id : 'somr_pomr',
		// 				title : 'SOMR/POMR',
		// 				type : 'collapse',
		// 				icon : 'receipt',
		// 				children : [
		// 					{
		// 						id : 'somr',
		// 						title : 'SOMR',
		// 						type : 'item',
		// 						icon : 'work',
		// 						url : '/charting/somr',
		// 					},
		// 					{
		// 						id : 'pomr',
		// 						title : 'POMR',
		// 						type : 'item',
		// 						icon : 'question_answer',
		// 						url : '/charting/pomr',
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id : 'free_text',
		// 				title : 'Free text',
		// 				type : 'item',
		// 				url : '/charting/free-text',
		// 				icon : 'text_fields'
		// 			},
		// 			{
		// 				id : 'type_of_note',
		// 				title : 'Type of note',
		// 				type : 'item',
		// 				url : '/charting/type-of-note',
		// 				icon : 'speakers_note'
		// 			},
		// 			{
		// 				id : 'new_notes',
		// 				title : 'New note',
		// 				type : 'item',
		// 				url : '/charting/new-note',
		// 				icon : 'note_add'
		// 			},
		// 			{
		// 				id : 'load_notes',
		// 				title : 'Old notes',
		// 				type : 'item',
		// 				url : '/charting/old-notes',
		// 				icon : 'note'
		// 			},
		// 			{
		// 				id : 'dates',
		// 				title : 'Date',
		// 				type : 'item',
		// 				url : '/charting/dates',
		// 				icon : 'access_alarms'
		// 			},
		// 			{
		// 				id : 'save_icon',
		// 				title : 'Save',
		// 				type : 'collapse',
		// 				// url : 'charting/save-icon',
		// 				icon : 'save',
		// 				children : [
		// 					{
		// 						id : 'save_complete',
		// 						title : 'Save complete',
		// 						type : 'item',
		// 						icon : '',
		// 						url : '/charting/save-complete',
		// 					},
		// 					{
		// 						id : 'save_incomplete',
		// 						title : 'Save Incomplete',
		// 						type : 'item',
		// 						icon : '',
		// 						url : '/charting/save-incomplete',
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id : 'preview',
		// 				title : 'Preview',
		// 				type : 'item',
		// 				url : '/charting/preview',
		// 				icon : 'visibility'
		// 			},
		// 			{
		// 				id : 'send',
		// 				title : 'Send',
		// 				type : 'item',
		// 				url : '/charting/send',
		// 				icon : 'send'
		// 			},
		// 			{
		// 				id : 'psg',
		// 				title : 'PSG',
		// 				type : 'item',
		// 				url : '/charting/problem',
		// 				icon : 'grid_on'
		// 			},
		// 			{
		// 				id : 'template',
		// 				title : 'Template',
		// 				type : 'item',
		// 				url : '/charting/templates',
		// 				icon : 'filter_frames'
		// 			}
		// 		]
		// 	},
		// 	{
		// 		id : 'note_navigation',
		// 		title : 'Navigation',
		// 		type : 'collapse',
		// 		icon : 'navigation',
		// 		children : [
		// 			{
		// 				id : 'cc',
		// 				title : 'CC',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_cc'
		// 			},
		// 			{
		// 				id : 'hpi',
		// 				title : 'HPI',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_hpi'
		// 			},
		// 			{
		// 				id : 'pmh',
		// 				title : 'PMH',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_pmh'
		// 			},
		// 			{
		// 				id : 'psh',
		// 				title : 'PSH',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_psh'
		// 			},
		// 			{
		// 				id : 'meds',
		// 				title : 'MEDS',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_med'
		// 			},
		// 			{
		// 				id : 'adr',
		// 				title : 'ADR',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_adr'
		// 			},
		// 			{
		// 				id : 'sh',
		// 				title : 'SH',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_sh'
		// 			},
		// 			{
		// 				id : 'fh',
		// 				title : 'FH',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_fh'
		// 			},
		// 			{
		// 				id : 'ros',
		// 				title : 'ROS',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_ros'
		// 			},
		// 			{
		// 				id : 'pe',
		// 				title : 'PE',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_pe'
		// 			},
		// 			{
		// 				id : 'data',
		// 				title : 'DATA',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_dd'
		// 			},
		// 			{
		// 				id : 'assessment',
		// 				title : 'ASSESSMENT',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_ass'
		// 			},
		// 			{
		// 				id : 'ord',
		// 				title : 'PLAN/ORDERS',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_ord'
		// 			},
		// 			{
		// 				id : 'em',
		// 				title : 'E & M',
		// 				type : 'item',
		// 				icon : 'lens',
		// 				url : '/charting/charting_em'
		// 			}
		// 		]
		// 	},
		// 	{
		// 		id: 'view_record',
		// 		title: 'View Record',
		// 		type: 'item',
		// 		icon: 'view',
		// 		url: '/charting/view_record',
		// 	},
		// ]
	},
	{
		id : 'reports',
		title : 'Reports',
		icon : 'report',
		type: 'group',
		children : [
			{
				id : 'standards',
				title : 'Standards of Care',
				type : 'item',
				url : '/reports/standards',
				icon : 'child_care'
			},
			{
				id : 'flowsheets',
				title : 'Flowsheets',
				type : 'item',
				url : '/reports/flowsheet',
				icon : 'grid_on'
			},
			{
				id : 'billing',
				title : 'Billing',
				type : 'item',
				url : '/reports/billing',
				icon : 'description'
			},
		]
	},
	{
		id : 'admin',
		title : 'Administration',
		icon : 'verified_user',
		type : 'group',
		children: [
			{
				id : 'editors',
				title : 'Editors',
				type : 'collapse',
				icon : 'save',
				children : [
					{
						id : 'dynamic_elements',
						title : 'Dynamic Elements',
						type : 'item',
						icon : 'save',
						url : '/admin/dynamic-elements',
					},
					{
						id : 'macro_editor',
						title : 'Macro Editor',
						type : 'item',
						icon : 'save',
						url : '/admin/macro-editor',
					},
					{
						id : 'template_editor',
						title : 'Template Editor',
						type : 'item',
						icon : 'save',
						url : '/admin/template-editor',
					}
				]
			},
			{
				id : 'associated_diagnoses',
				title : 'Associated Diagnoses',
				type : 'item',
				icon : 'save',
				url : '/admin/associated-diagnoses',
			}
		]
	}
];

export default navigationConfig;
