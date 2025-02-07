import './ResForms.css'
import PropTypes from 'prop-types';

export const ResForms = ({ results, btnEdit,  btnRemove }) => {
  return (
    <div className={'results-steps'}>
      {results.map((result) =>
        <div className={'steps-columns'} key={result.date}>
          <div className={'steps-column-1'}>{result.date}</div>
          <div className={'steps-column-2'}>{result.distance}</div>
          <div className={'results-steps_actions'}>
            <button
              className={'results-steps_btn results-steps_btn-edit'}
              onClick={() => btnEdit(result)}>
            </button>
            <button
              className={'results-steps_btn results-steps_btn-remove'}
              onClick={() => btnRemove(result.date)}>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

ResForms.propTypes = {
  results: PropTypes.array.isRequired,
  btnEdit: PropTypes.func.isRequired,
  btnRemove: PropTypes.func.isRequired,
}
