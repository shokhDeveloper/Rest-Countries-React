import "./loader.scss";
import { TailSpin as LoaderSpinner } from "react-loader-spinner";
export const Loader = () => {
  return (
    <section className="loader">
      <div className="container">
        <LoaderSpinner
          color="#202C36"
          height={80}
          width={80}
          ariaLabel="loader-rest-countries"
        />
      </div>
    </section>
  );
};
