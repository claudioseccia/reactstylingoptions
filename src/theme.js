import { jss } from 'react-jss';
import defaultUnit from 'jss-plugin-default-unit';
import { reset, typography } from 'jss-reset';
// import fontLight from './assets/font/HelveticaNowDisplay-Light.woff2';
// import fontRegular from './assets/font/HelveticaNowDisplay-Regular.woff2';
// import fontMedium from './assets/font/HelveticaNowDisplay-Medium.woff2';
// import fontBold from './assets/font/HelveticaNowDisplay-Bold.woff2';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file

jss.use(
	defaultUnit({
		'grid-column-gap': 'px',
		'grid-row-gap': 'px'
	})
);

const spacing = 8;
const headerHeight = 60;
const bigSubHeader = 165;
const smallSubHeader = 105;
const carSubHeader = 286;
const s = '@media only screen and (max-width: 575px)';
const mUp = '@media only screen and (min-width: 764px)';

const colors = {
	body: 'rgba(227,227,227,0.50)',
	white: '#fff',
	black: '#000000',
	lightBlack: '#2C2C2C',
	alto: '#e0e0e0',
	darkGrey: '#737373',
	grey: '#C6C6C6',
	lightGrey: '#E3E3E3',
	xLightGrey: '#E8E8E8',
	smokeWhite: '#efefef',
	overlay: 'rgba(23,29,41,0.72)',
	red: '#E41B13',
	darkRed: '#BD1711',
	redLight: 'rgba(255,57,33,0.08)',
	purple: '#E91E63',
	green: '#4DCC4E',
	greenLight: '#e6ffe9',
	yellow: '#FF9F00',
	yellowLight: 'rgba(255,159,0,0.08)',
	orange: '#FF3921',
	orangeLight: 'rgba(255,57,33,0.08)',
	blue: '#4ac5ff',
	lightBlue: '#e5f4ff',
	navGrey: '#989898'
};

jss.createStyleSheet(reset, { index: 1, meta: 'reset' }).attach();
jss.createStyleSheet(typography, { index: 2, meta: 'typography' }).attach();
jss
	.createStyleSheet(
		{
			'@global html, body': {
				fontFamily: 'Helvetica Now Display',
				'font-size': 16,
				'background-color': colors.smokeWhite
			},
			'@global label, input, textarea, select, button': {
				'font-family': 'inherit'
			},
			'@global .rdrDay': {
				height: '2em'
			},
			'@global .rdrDayToday .rdrDayNumber span:after': {
				bottom: '0px'
			},
			'@font-face': [
				{
					fontFamily: 'Helvetica Now Display',
					'font-weight': '300'
				},
				{
					fontFamily: 'Helvetica Now Display',
					'font-weight': '400'
				},
				{
					fontFamily: 'Helvetica Now Display',
					'font-weight': '500'
				},
				{
					fontFamily: 'Helvetica Now Display',
					'font-weight': 'bold'
				}
			],
			// if icon has data-color then color can be overwritten
			'@global svg[viewBox="0 0 24 24"]': {
				width: 24,
				height: 'auto',
				cursor: 'pointer'
			},
			'@global svg[viewBox="0 0 24 24"]:not([data-color])': {
				fill: colors.darkGrey
			},
			'@global h1, h2, h3,h4, p, span, small': {
				'margin-bottom': 0
			},
			'@global a[data-anchor-unstyled]': {
				'text-decoration': 'none'
			},
			//todo: che roba è questa che ho commentato??? Marco
			/*'@global a:visited': {
				color: colors.black
			},*/
			'@global a': {
				color: colors.black
			},
			'@global h1': {
				fontSize: 48
			},
			'@global h2': {
				fontSize: 38
			},
			'@global h3': {
				fontSize: 32
			},
			'@global h4': {
				fontSize: 24
			},
			'@global h5': {
				fontSize: 16
			},
			'@global p': {
				fontSize: 16
			},
			'@global small': {
				fontSize: 12
			}
		},
		{ index: 3, meta: 'globals' }
	)
	.attach();

const paper = {
	'background-color': colors.white
};

const border = {
	border: 'solid 1px rgba(46, 91, 255, 0.08)'
};

const shadow = {
	'box-shadow': '0 0 12px 0 rgba(23,29,41,0.08)'
};

const card = {
	borderRadius: '4px',
	...shadow
};

const divisor = {
	width: '100%',
	height: '1px',
	display: 'grid',
	backgroundColor: colors.lightGrey
};

const columns = {
	display: 'grid',
	'align-items': 'center',
	'grid-auto-flow': 'column',
	'grid-auto-columns': 'minmax(0, max-content)',
	'grid-column-gap': spacing,
	'grid-row-gap': spacing,
	'align-content': 'center',
	'justify-items': 'center'
};

const rows = {
	display: 'grid',
	'align-items': 'center',
	'grid-auto-flow': 'row',
	'grid-auto-columns': 'minmax(0, max-content)',
	'grid-column-gap': spacing,
	'grid-row-gap': spacing,
	'align-content': 'center',
	'justify-items': 'center'
};

const grid = {
	table: {
		...paper,
		'user-select': 'none',
		'margin-top': 24,
		'margin-bottom': 40,
		borderRadius: '4px',
		border: 'solid 1px #e4e7eb',
		'background-color': colors.white
	},
	thead: {
		background: '#fff',
		borderTopLeftRadius: '16px',
		height: 'auto',
		padding: '16px',
		borderTopRightRadius: '16px',
		marginBottom: '8px',

		'text-transform': 'uppercase',
		'padding-top': spacing * 2,
		'padding-bottom': spacing * 2,
		// 'height': "auto",
		fontSize: '12px',
		fontWeight: 'bold',
		color: colors.white
	},
	// meant to be used without grid
	row: {
		'min-height': 75,
		display: 'grid',
		'align-items': 'center',
		padding: [ spacing, spacing * 2 ],
		'&:nth-child(even)': {
			'background-color': colors.white
		}
	},
	actions: {
		...columns,
		'align-items': 'center',
		'text-decoration': 'underline',
		cursor: 'pointer',
		color: 'blue'
	},
	doubleRow: {
		'& span': {
			display: 'block'
		},
		'& small': {
			display: 'block',
			color: colors.darkGrey,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			width: '160px'
		}
	}
};

const label = {
	'font-size': 12,
	'font-weight': 600,
	'text-transform': 'capitalize',
	color: colors.smokeGrey,
	marginBottom: spacing / 2
};

const input = {
	width: '100%',
	fontSize: 15,
	lineHeight: 0,
	border: `1px solid`,
	'border-color': colors.darkGrey,
	borderRadius: 8,
	boxSizing: 'border-box',
	position: 'relative',
	/*'background-color': colors.smokeWhite,*/
	color: colors.black,
	backgroundColor: colors.white,
	padding: [ spacing, 12 ],
	'&:focus': {
		'border-color': colors.blue
		//'background-color': 'transparent'
	},
	'&[readonly], &[disabled]': {
		cursor: 'default',
		border: `none`,
		'background-color': colors.lightGrey,
		color: colors.darkGrey
	}
};

const reactSelectsStyle = {
	control: (defaults, { isDisabled, isFocused }) => ({
		...defaults,
		fontSize: 15,
		height: 40,
		borderRadius: 8,
		boxSizing: 'border-box',
		boxShadow: 'unset',
		cursor: isDisabled ? 'not-allowed' : 'pointer',
		width: '100%',
		minWidth: 140,
		minHeight: '40px',
		border: isDisabled
			? `1px solid ${colors.lightGrey}`
			: isFocused ? `1px solid ${colors.blue}` : `1px solid ${colors.darkGrey}`,
		backgroundColor: isDisabled ? colors.lightGrey : colors.white
	}),
	indicatorsContainer: (defaults) => ({
		...defaults,
		'& svg': {
			fill: colors.grey
		}
	}),
	indicatorSeparator: (defaults) => ({
		...defaults,
		width: 0,
		padding: '0'
	}),
	clearIndicator: (defaults) => ({
		...defaults,
		borderRadius: '50px',
		marginRight: 4,
		padding: 0,
		backgroundColor: colors.lightGrey,
		'& svg': {
			fill: colors.darkGrey
		}
	}),
	menu: (defaults) => ({
		...defaults,
		zIndex: 20,
		border: 'none'
	})
	/* // hide pipe between clean and dropdown icons
     indicatorSeparator: Function.prototype,*/
};

const inputError = {
	'background-color': colors.redLight,
	borderColor: colors.red
};

const textarea = {
	...input,
	resize: 'none',
	'min-height': 40,
	outline: 'none',
	lineHeight: 'auto'
};

const select = {
	...input,
	padding: [ 10, 15 ], // we must account for svg icon space
	'padding-right': 25,
	appearance: 'none',
	outline: 'none',
	'background-image': `url("data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'><path fill='%23444' d='M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z'></path></svg>")`,
	'background-position': '98% 50%',
	'background-origin': 'border-box',
	'background-repeat': 'no-repeat',
	'&[readonly], &[disabled]': {
		cursor: 'default',
		'background-color': colors.white,
		'background-image': 'none !important'
	}
};

const checkbox = {};

const control = { label, input, inputError, textarea, select, checkbox };

const linkWithIcon = {
	...columns,
	'grid-column-gap': spacing / 2,
	'text-decoration': 'underline',
	color: colors.primaryBlue,

	'& svg': {
		fill: colors.primaryBlue + ' !important'
	}
};

const theme = {
	paper,
	spacing,
	headerHeight,
	bigSubHeader,
	smallSubHeader,
	carSubHeader,
	divisor,
	grid,
	columns,
	rows,
	colors,
	border,
	contentWidth: 1400,
	control,
	reactSelectsStyle,
	card,
	shadow,
	linkWithIcon,
	// breakpoints
	s,
	mUp
};

export default theme;
