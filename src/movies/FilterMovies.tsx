import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";

export default function FilterMovies(){

    const initialValues: filterMoviesForm = {
        title: '',
        genreId: 0,
        upcomingReleases: false,
        inTheaters: false
    };

    const genres:genreDTO[] = [{ id: 1, name: 'Drama'},{id: 2, name: 'Comédia'}];

    //Neste cenário se demonstra uma forma alternativa de usar Formik
    return (
        <>
            <h3>Procurar filmes</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align-items-center">
                            <div className="col-auto">
                                <input type="text" className="form-control" id="title" 
                                 placeholder="Título do filme" {...formikProps.getFieldProps("title")} />
                            </div>
                            <div className="col-auto">
                                <select className="form-select" {...formikProps.getFieldProps("genreId")} >
                                    <option value="0">Escolha um gênero</option>
                                    {genres.map(g => 
                                        <option key={g.id} value={g.id}>{g.name}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="upcomingReleases" 
                                      name="upcomingReleases" type="checkbox"
                                    />
                                    <label className="form-check-label"  htmlFor="upcomingReleases">Lançamentos</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-input" id="inTheaters" 
                                      name="inTheaters" type="checkbox"
                                    />
                                    <label className="form-check-label"  htmlFor="inTheaters">Em cartaz</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Button className="btn btn-primary" onClick={() => formikProps.submitForm()}>Procurar</Button>
                                <Button className="btn btn-danger ms-3" onClick={() => formikProps.setValues(initialValues)}>Limpar filtro</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
interface filterMoviesForm{
    title: string;
    genreId: number;
    upcomingReleases: boolean;
    inTheaters: boolean;
}