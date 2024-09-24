const SearchInput=()=>{
    return(
        <div className="search d-flex justify-content-center flex-nowrap gap-2">
            <input className="input-group rounded border-0 flex-grow-1 ps-3 pe-2" type="search" />
            <button className="btn btn-primary">Search</button>
        </div>
    )
}
export default SearchInput