import css from "./SearchBox.module.css"

function SearchBox () {
    return <div>SearchBox
        <fieldset>
            <legend>Find contacts by name</legend>
            <input type="search" name="searchContact"/>
        </fieldset>
    </div>;

}

export default SearchBox