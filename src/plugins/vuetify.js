import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

// Custom Icons
import {
	EyeIcon,
	EyeOffIcon,
	MailIcon,
	FileTextIcon,
	CreditCardIcon,
	DollarSignIcon,
	PercentIcon,
	BoxIcon,
	RefreshCwIcon,
	HomeIcon,
	StarIcon,
	BookmarkIcon,
	PhoneIcon,
	MapPinIcon,
	UsersIcon,
	LayoutIcon,
	MessageSquareIcon,
	CopyIcon
} from "vue-feather-icons";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: '#007BFF',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			},
		},
	},
	icons: {
		values: {
			EyeIcon: {
				component: EyeIcon
			},
			EyeOfIcon: {
				component: EyeOffIcon
			},
			MailIcon: {
				component: MailIcon
			},
			FileTextIcon: {
				component: FileTextIcon
			},
			CreditCardIcon: {
				component: CreditCardIcon
			},
			DollarSignIcon: {
				component: DollarSignIcon
			},
			PercentIcon: {
				component: PercentIcon
			},
			BoxIcon: {
				component: BoxIcon
			},
			RefreshCwIcon: {
				component: RefreshCwIcon
			},
			HomeIcon: {
				component: HomeIcon
			},
			StarIcon: {
				component: StarIcon
			},
			BookmarkIcon: {
				component: BookmarkIcon
			},
			PhoneIcon: {
				component: PhoneIcon
			},
			MapPinIcon: {
				component: MapPinIcon
			},
			UsersIcon: {
				component: UsersIcon
			},
			LayoutIcon: {
				component: LayoutIcon
			},
			MessageSquareIcon: {
				component: MessageSquareIcon
			},
			CopyIcon: {
				component: CopyIcon
			},
		}
	},
	lang: {
		locales: { ru },
		current: 'ru',
	},
});
