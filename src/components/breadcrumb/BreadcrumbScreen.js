import React from 'react'
export const BreadcrumbScreen = (props) => {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }


  return (
    <>
      <nav aria-label="breadcrumb" className="alert alert-secondary" role="alert" >
        <ol className="breadcrumb" >
          {
            props.crumbs.map((crumb, ci) => {
              const disabled = isLast(ci) ? 'disabled' : '';

              return (
                <li
                  key={ci}
                  className="breadcrumb-item align-items-center"
                >
                  <button className={`btn btn-link ${disabled}`} onClick={() => props.selected(crumb)}>
                    {crumb}
                  </button>
                </li>
              );
            })
          }
        </ol>
      </nav>
    </>
  )
}
