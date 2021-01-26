//BASIC CSS IMPORT
import './App.css';

//NODE SASS
//note: React17 node sass https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0
import './App.scss';

//JSS IMPORT
import { createUseStyles } from 'react-jss';
import theme from './theme';

const useStyles = createUseStyles((theme) => ({
	baseStyles: {
		fontWeight: ({ fontWeight }) => `${fontWeight === 'bold' ? 'bold' : 'normal'}`,
		color: ({ statusColor, statusColorCodes }) => statusColorCodes[statusColor],
		textShadow: '1px 1px 6px rgb(163, 163, 163)'
	}
}));

const DummyComp = ({ statusColor = 'primary', fontWeight = 'normal' }) => {
	const statusColorCodes = {
		primary: theme.colors.blue,
		warning: theme.colors.yellow,
		success: theme.colors.green,
		secondary: theme.colors.darkGrey,
		light: theme.colors.lightGrey,
		danger: theme.colors.red,
		xLightGrey: theme.colors.xLightGrey,
		black: theme.colors.black
	};

	const classes = useStyles({ statusColor, statusColorCodes, fontWeight });
	return (
		<p className={classes.baseStyles}>
			This is a great JSS example: programmatic value load based on component properties
		</p>
	);
};

function App() {
	return (
		<div className="App">
			<h2>
				Main styling components options:<br />
			</h2>
			<ul>
				<li>
					<b>CSS modules</b>: natively supported, it is the simplest, less flexible way to integrate styles on
					React. It permits to import directly CSS into the project, in an easy way.
				</li>
				<li>
					<b>SASS / SCSS</b>: typical way to use SCSS preprocessor, allows to spread all the power of SASS
					through the CSS of the application.<br />
					Could be integrated with: <br />
					node-sass (https://www.npmjs.com/package/node-sass) - now deprecated but still suggested on the
					react and create react app sites - MIT license <br />
					(https://www.npmjs.com/package/dart-sass) - suggested - MIT license sass <br />
					(https://www.npmjs.com/package/sass) - MIT license <br />
				</li>

				<li>
					<b>JS in CSS</b>: main advantage: css is loaded only when component is loaded
				</li>
				<li>JS in CSS: Option 1 - JSS (https://www.npmjs.com/package/jss) MIT license </li>
				<li>
					JS in CSS: Option 2 - Styled Components (https://www.npmjs.com/package/styled-components) MIT
					license
				</li>
				<li>JS in CSS: Option 3 - Emotion (https://www.npmjs.com/package/@emotion/css) MIT license</li>
			</ul>
			<hr />
			<h1>Some examples</h1>
			<p className="css-modules">
				CSS modules: style is inside a simple css with no preprocessor. Easy to use css but no SASS power
			</p>
			<p className="node-sass">SASS: style is defined with a SASS preprocessor. Full SCSS power</p>
			<DummyComp />
		</div>
	);
}

export default App;
