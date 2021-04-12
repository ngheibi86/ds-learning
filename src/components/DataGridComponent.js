import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import '../EmotionDetection.css';


function DataGridComponent({ rows }) {

	return (
		<div>
		{rows?(
		<div >
			<TableContainer component={Paper}>
				<Table className="dataGrid"  aria-label="caption table">
					<caption>A basic table example with a caption</caption>
					<TableHead>
						
						<TableRow >
						{rows.columns.map((row)=>(
							<TableCell style={{backgroundColor:'darkgrey', fontWeight:'bold'}} align="center">{row}</TableCell>
							))}
						</TableRow>
					
					</TableHead>
				
					<TableBody>
						{rows.results.map((item,index) => (

						
							<TableRow key={index}>
								<TableCell align="center" >{item[0]}</TableCell>
								<TableCell align="center">{item[1]}</TableCell>
								<TableCell align="center">{item[2]}</TableCell>
								<TableCell align="center" style={{color:item[1]===item[2]?'blue':'red'}}>{item[3]}</TableCell>
							</TableRow>
							
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
		): <div>Loading...</div>}
		</div>

	);
}

export default DataGridComponent;
