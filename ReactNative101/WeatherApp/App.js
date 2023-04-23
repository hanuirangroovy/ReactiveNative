import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from "react-native";
import { Fontisto } from "@expo/vector-icons";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SCREEN_WIDTH = Dimensions.get("window").width;

const API_KEY = "15ead4225fc7c792234304db576dde5e";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmoshphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(
      json.list.filter((weather) => {
        if (weather.dt_txt.includes("00:00:00")) {
          return weather;
        }
      })
    );
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator color="white" style={{ marginTop: 10 }} size="large" />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  WIDTH: 1000 % "",
                }}
              >
                <Text style={styles.temp}>{parseFloat(day.main.temp).toFixed(1)}</Text>
                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    padding: 15,
  },
  temp: {
    marginTop: 50,
    fontSize: 108,
  },
  description: {
    marginTop: -30,
    fontSize: 50,
  },
  tinyText: {
    fontSize: 20,
  },
});
