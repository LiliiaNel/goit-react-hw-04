import css from './SearchBar.module.css';
import { Formik, Field, Form } from 'formik';

export default function SearchBar({onSearch}) {
    return <header className={css.header}>
        <Formik initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}>
  {() => (<Form>
                <Field id="searchInput"
                    name="query"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
     <button type="submit">Search</button>
            </Form>)}
            </Formik>
</header>

};