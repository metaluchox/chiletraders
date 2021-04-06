import React from 'react'
import './ContentCenter.css'

export const ContentCenter = () => {
    return (
        <>
		

<div className="card">
  <div className="card-body">
  	<h1 className="text-center">Ultimos Temas creados </h1>
  </div>
</div>		

<table className="table table-filter">
	<tbody>
		<tr data-status="pagado">
			<td>
				<div className="media">
					<a href="/" className="pull-left">
						<img src="../assets/image/avatar7.png" className="media-photo" alt="HOLA mnduo" />
					</a>
					<div className="media-body">
						<span className="media-meta pull-right">Febrero 13, 2016</span>
						<h4 className="title">
							Lorem Impsum
							<span className="pull-right pagado">(Pagado)</span>
						</h4>
						<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
					</div>
				</div>
			</td>
		</tr>
		<tr data-status="pendiente">
			<td>
				<div className="media">
					<a href="/" className="pull-left">
						<img src="../assets/image/avatar7.png" className="media-photo" alt="HOLA mnduo" />
					</a>
					<div className="media-body">
						<span className="media-meta pull-right">Febrero 13, 2016</span>
						<h4 className="title">
							Lorem Impsum
							<span className="pull-right pendiente">(Pagado)</span>
						</h4>
						<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
					</div>
				</div>
			</td>
		</tr>	
		<tr data-status="cancelado">
			<td>
				<div className="media">
					<a href="/" className="pull-left">
						<img src="../assets/image/avatar7.png" className="media-photo" alt="HOLA mnduo" />
					</a>
					<div className="media-body">
						<span className="media-meta pull-right">Febrero 13, 2016</span>
						<h4 className="title">
							Lorem Impsum
							<span className="pull-right pagado">(Pagado)</span>
						</h4>
						<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
					</div>
				</div>
			</td>
		</tr>			
	</tbody>
</table>

        </>
    )
}
