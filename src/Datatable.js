import React from 'react';

export default function Datatable({ data }) {
	const columns = data[0] && Object.keys(data[0]);
  
   
	return (
        <div className="datatable">
         <table>
			<thead>
				<tr>
					{columns.map((heading) => {
						return <th>{heading}</th>;
					})}
				</tr>
			</thead>

			<tbody>
				{data.map((row) => { 
					return (
						<tr key={row.id} >
							{columns.map((column) => {
								return column === 'shipping_tracking_code' ? (
									<a
										href='https://www.fedex.com/apps/fedextrack/?action=track&trackingnumber={row[column]}'
										target='_blank'>
										{row[column]}
									</a>
								) : (
									<td>{row[column]}</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>   
        </div>
		
	);
}
