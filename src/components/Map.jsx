import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position: {lat},{lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 }); // Make sure tp pass in a new object
        }}
      >
        Change position
      </button>
    </div>
  );
}

export default Map;
