import React from 'react';
import { TextField, ThemeProvider, createMuiTheme, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './EmotionDetection.css';
import DataGridComponent from './components/DataGridComponent';
import { Col, Container, Row } from 'react-bootstrap';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Averta',
		fontWeightRegular: 500
	},
	overrides: {
		MuiOutlinedInput: {
			root: {
				fontSize: '20px'
			},
			input: {
				padding: '16px 14px',
				height: 56,
				boxSizing: 'border-box'
			}
		},
		MuiInputLabel: {
			root: {
				fontSize: '20px'
			},
			outlined: {
				transform: 'translate(14px, 10px) scale(1)'
			}
		}
	}
});



//    handleChange = event => {
// 	this.setState({ selected: event.target.value});
//   };
function EmotionDetection() {
	const handleChange = (event) => {
		console.log('event.target.value: ' + event.target.value);
		selectedValue= event.target.value;
	};
	let rows = [
		{ col1: 'cell-1-1', col2: 'cell-1-2', col3: 'cell-1-3', Result: 'cell-1-3' },
		{ col1: 'cell-2-1', col2: 'cell-2-2', col3: 'cell-2-3', Result: 'cell-2-3' },
		{ col1: 'cell-3-1', col2: 'cell-3-2', col3: 'cell-3-3', Result: 'cell-3-3' }
	];
	let selectedValue = 'Sad';
	return (
		<Container fluid>
			<Row>
				<Col>
					<div className="mui-textfield-form">
						<ul className="form-container">
							<li>
								<h2>Data Sience Learn</h2>
								<div className="myli">
									<ThemeProvider theme={theme}>
										<TextField
											className="mui-textfield"
											label="Enter Your Text"
											variant="outlined"
										/>
									</ThemeProvider>
									<ThemeProvider theme={theme}>
										<FormControl style={{ width: 100, marginLeft: 20 }}>
											<InputLabel id="demo-controlled-open-select-label">emotion</InputLabel>
											<Select
												value={selectedValue}
												onChange={handleChange}
												// onChange={this.handleChange(e.target.value)}
												labelId="demo-controlled-open-select-label"
												id="demo-controlled-open-select"
												defaultValue="true"
											>
												<MenuItem value="'Joy'">Joy</MenuItem>
												<MenuItem value="'Sad'">Sad</MenuItem>
												<MenuItem value="'Disgust'">Disgust</MenuItem>
												<MenuItem value="'Anger'">Anger</MenuItem>
											</Select>
										</FormControl>
										<Button
											variant="contained"
											color="primary"
											size="large"
											label="Send"
											style={{ width: 100, marginLeft: 20 }}
										>
											Send
										</Button>
									</ThemeProvider>
								</div>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<DataGridComponent rows={rows} selectedValue={selectedValue} />
				</Col>
			</Row>
		</Container>
	);
}

export default EmotionDetection;
