import "./App.css";
import movies from "./assets/movies.json";
import Section from "./components/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App = () => {
  return (
    <>
      <Header />
      {/* Affichage Affiches */}

      {/* {movies.map((elem) => {
        return (
          <>
            <h2>{elem.category}</h2>
            {elem.images.map((url) => {
              return <img src={url} alt="" />;
            })}
          </>
        );
      })} */}

      {/* Section qui est la page principale pour récupérer les catégories ainsi que les affiches 
      et le code id des films */}

      {/* {movies.map((elem, id) => {
        return (
          <>
            <Section
              key={id}
              category={elem.category}
              movies={elem.images}
            />
          </>
        );
      })} */}

      <Sections data={movies} />

      <Footer />
    </>
  );
};
{
  /*{movies.map((elem, id) => {
        return (
          <div key={id}>
            <h1>{elem.category}</h1>
            {elem.images.map((elemUrl, idImg) => {
              return <img key={idImg} src={elemUrl} alt="" />;
            })}
          </div>
        );
      })}
    </>
  );
};
*/
}
export default App;
