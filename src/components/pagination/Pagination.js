import React from 'react'
import PropTypes from 'prop-types'
import { LeftArrow, RightArrow } from '../../images/buttom/Arrow'

const Pagination =(props)=>{
  const { onLeftClick, onRightClick, page, totalPages } = props
  return(
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} of {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  )
}

Pagination.propTypes = {
  onRightClick:PropTypes.func,
  onLeftClick:PropTypes.func,
  page:PropTypes.number,
  totalPages:PropTypes.number
}
export default Pagination