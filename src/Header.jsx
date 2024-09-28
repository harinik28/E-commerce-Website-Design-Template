import SearchInput from "./SearchInput"

const Header=()=>{
    return(
        <div className="header d-flex justify-content-around align-items-center bg-secondary">
            <h1>Brand</h1>
            <SearchInput />
            <p style={{fontSize:"20px",marginBottom:0}}>Profile</p>
        </div>
    )
}
export default Header