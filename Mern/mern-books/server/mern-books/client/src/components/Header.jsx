import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <div className="p-3 border border-black border-2 d-flex justify-content-between">
      <div className="d-flex flex-column gap-2">
        <Link to={`/`} className="btn btn-primary btn-sm">Catalog</Link>
        <Link to={`/create`} className="btn btn-primary btn-sm">Add Book</Link>
      </div>
      <div className="d-flex align-items-center">
        <h2>Name of page</h2>
      </div>
    </div>
  )
}

export default Header
