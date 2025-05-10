import Header from "./components/Header";
import Entry from "./components/Entry";
import myData from "./data";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
  const entryElements = myData.map((article) => {
    return (
      <Entry
        img={article.img}
        title={article.title}
        country={article.country}
        googleMapsLink={article.googleMapsLink}
        dates={article.dates}
        text={article.text}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
