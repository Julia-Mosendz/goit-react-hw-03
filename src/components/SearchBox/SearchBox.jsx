import css from "./SearchBox.module.css";

function SearchBox(props) {
  return (
    <div>
      <fieldset className={css.box}>
        <legend className={css.label}>Find contacts by name</legend>
        <input className={css.field} type="search" name="searchContact" value={props.value} onChange={(event) => {props.onSearchChange(event.target.value.trim())}}/>
      </fieldset>
    </div>
  );
}

export default SearchBox;
