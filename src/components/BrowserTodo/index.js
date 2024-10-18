import './index.css'

const BrowserTodo = props => {
  const {searchDetails, onDeleteBtn} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = searchDetails

  const browserDeleteTransaction = () => {
    onDeleteBtn(id)
  }

  return (
    <li className="search-list-item">
      <div className="browser-start-items">
        <p className="browser-time">{timeAccessed}</p>
        <div className="browser-middle">
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          type="button"
          className="delete-button"
          onClick={browserDeleteTransaction}
          data-testid="delete
          "
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserTodo
