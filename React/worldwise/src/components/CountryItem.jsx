import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span role="img">{country.emoji}</span> {country.country}
    </li>
  );
}

export default CountryItem;
