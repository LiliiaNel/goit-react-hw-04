import css from './SearchBar.module.css';
import { Formik, Field, Form } from 'formik';
import toast from 'react-hot-toast';

export default function SearchBar({onSearch}) {
    return <header className={css.header}>
        <Formik initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast("Type something and let's find it!",
              {
                icon: '🔍',
                style: {
                  borderRadius: '10px',
                  background: '#ffe3b3',
                  color: '#2b2d42',
                },
              }
            );
            return;
          }
          onSearch(values.query.trim());
          actions.resetForm();
        }}>
           <Form className={css.form}>
                <Field id="searchInput"
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
         <button className={css.button} type="submit">Search</button>
            </Form>
            </Formik>
</header>
};