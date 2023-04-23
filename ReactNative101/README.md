# React Native

## 목차

1. [Requirements](#1-Requirements)
   1. [Software Requirements](#11-Software-Requirements)
   2. [Installing Requirements](#12-Installing-Requirements)
   3. [How Does React Native Work](#13-How-Does-React-Native-Work)
   4. [Creating The App](#14-Creating-The-App)
2. [WEATHER APP](#2-WEATHER-APP)
   1. [Snack](#21-Snack)
   2. [The Rules of Native](#22-The-Rules-of-Native)
   3. [React Native Packages](#23-React-Native-Packages)
   4. [Third Party Packages](#24-Third-Party-Packages)
   5. [Layout System](#25-Layout-System)
   6. [Styles](#26-Styles)
   7. [Styles part Two](#27-Styles-part-Two)
   8. [Location](#28-Location)
   9. [Weather](#29-Weather)
   10. [Recap](#210-Recap)
   11. [Icons](#211-Icons)
3. [WORK HARD TRAVEL HARD APP](#3-WORK-HARD-TRAVEL-HARD-APP)
   1. [Introduction](#31-Introduction)
   2. [Touchables](#32-Touchables)
   3. [TextInput](#33-TextInput)
   4. [To Docs](#34-To-Docs)
   5. [Paint To Dos](#35-Paint-To-Dos)
   6. [Persist](#36-Persist)
   7. [Delete](#37-Delete)

4. [PUBLISHING OUR APPS](#4-PUBLISHING-OUR-APPS)

## 1. Requirements

### 1.1 Software Requirements

- 안드로이드 앱
  - Android Studio
  - Java
  - 안드로이드 SDK (Android Software Development Kit)
  - 시뮬레이터
- iOS 앱
  - MacOS
    - Xcode
    - 시뮬레이터
- Expo (시뮬레이터 설치를 건너뛰고 테스트를 원한다면)
  - VSCode를 쓰고 핸드폰에서 앱 바로 테스트 가능

  - Requirements
    - 터미널에서 `node -v`
    - 사용하는 버전이 14.17보다 높으면 계속 진행
    - node.js, npm이 설치되어있으면 계속 진행


### 1.2 Installing Requirements

![React-Native-Interpreted-approach-architecture](img\React-Native-Interpreted-approach-architecture.png)

- Java, Xcode를 설치해야하는 이유
  - React Native 앱은 JavaScript로만 이루어지지 않음
  - React Native앱에서 가장 중요한 부분은 Bridge들을 통해서 코드가 운영체제와 통신을 할 수 있도록 하는 인프라 시설
  - 그렇기에 JavaScript 코드만 다운받는 것이 아니고 이 모든 기본시설이 있는 앱을 다운받는 것
  - React Native 앱은 shell하고 같음
    - JavaScript 코드를 넣으면 그 코드는 운영체제와 이야기 할 수 있음
- 위 모든 인프라시설들은 안드로이드의 경우 apk, iOS의 경우 ipa가 됨
  - Java, Xcode로 위 인프라를 가져와서 apk, ipa 안에 넣어줌 -> 그 후에 app store로 보내짐
- Expo 사용
  - 안드로이드나 iOS에 설치할 앱에는 JavaScript, Markup/Styling 부분만 없음. 컴퓨터와 핸드폰에 있는 앱을 연결시켜 앱에 코드를 전송해야 함
  - React Native 앱은 위 인프라 구조와 JavaScript 코드의 조합.
    - JavaScript가 운영 체제와 통신을 할 수 있도록 만들어짐.
  - 이 강좌는 앱 스토어에 compile된 앱이 있기에 코드만 작성해서 코드를 전송시키기에 1.0에 있는 Software Requirements가 모두 필요없음

- Expo 설치
  - https://expo.dev/
  - `npm install --global expo-cli`
  - Mac 사용자의 경우
    - https://docs.expo.dev/get-started/installation/
    - Watchman 다운로드
      - `brew update`
      - `brew install watchman`

### 1.3 How Does React Native Work

![how-does-react-native-work](img\how-does-react-native-work.png)

- ReactNative앱을 만든 후 테스트할 때 시뮬레이터와 모든 소프트웨어를 다운받아야하는 이유
  - Reactive Native는 인터페이스로 우리와 운영 체제(iOS, 안드로이드) 사이에 있어서 React Native 코드를 만들면 그 코드는 iOS, Java 안드로이드 코드로 번역됨.

![how-does-react-native-work2](img\how-does-react-native-work2.png)

- React Native가 실제로 작동하는 방법

  - JavaScript 부분이 코드를 쓰게 될 유일한 부분

- 사용자가 화면에서 버튼을 누르는 event

  - Native 1, 2

    - Native에서 기록이 되며 iOS와 인드로이드는 터치 event 감지  (iOS, 안드로이드가 화면을 통제하기에 여기서 감지하는 코드를 가지고 있음)

    - iOS와 인드로이드는 이 event에 관한 데이터 수집 
      - 화면의 어디에서 event가 발생했는가
      - 어디서 눌렸는가
      - 눌려진 시간은 어느정도 인가

  - Bridge 3

    - React Native는 위 정보를 가지고 JSON 메시지 생성
    - event 발생 시 iOS와 안드로이드는 bridge를 통해서 JavaScript에 메시지 전달

  - JavaScript 4,5 (우리 코드가 있는 곳)

    - 우리의 코드는 위의 메시지를 받아서 코드 실행하고 다시 native에 메시지 보냄

- JavaScript는 개발자들이 메시지를 주고 받기 위해 쓰는 레이어일 뿐

  - 앱에서는 JavaScript interface를 실행시켜서 운영체제와 이야기 함

- 코드가 작동하기 위해서는 위 인프라, 즉 기본 바탕 시설들이 필요한데 이 것은 안드로이드에서는 Java로 iOS에서는 Objective-c 혹은 swift로 만들어짐



### 1.4 Creating The App

- `npx create-expo-app`
  - PSSecurityException 발생 시
    - PowerShell을 관리자로 실행
    - `Set-ExecutionPolicy -ExecutionPolicy Unrestricted` 입력 후 `A` 입력
- `expo login`



## 2. WEATHER APP

### 2.1 Snack

- Snack은 브라우저에서 React 어플리케이션을 만들 수 있게 해주는 온라인 Code Editor
- https://snack.expo.dev/ 에서 브라우저를 통해 바로 react 어플리케이션을 만들 수 있음
- 브라우저에서 iOS, Android 어플리케이션을 만들고 미리보기까지 할 수 있음



### 2.2 The Rules of Native

- React Native는 웹사이트, HTML이 아니기에 div,span,p 쓸 수 없음.

  - 대신에 View가 있음
  - View는 container. 항상 import 해야함.

- 모든 text는 text component에 들어가야 함.

- View에는 style이 있음 (98%정도 사용 가능)

  - 일부 style은 사용할 수 없음
    - border가 유요한 style property가 아님

- StyleSheet.create는 object를 생성하는데 사용

  - ```
    const styles = StyleSheet.create({
    	container : {
    	flex : 1,
    	backgroundColor: "#fff",
    	alignItems: "center",
    	justifyContent: "center",
    	},
    	text: {
    	fontSize: 28,
    	color : "red",
    	}
    })
    ```

    - styels의 object

  - StyleSheet.create 쓰는 이유

    - 자동 완성 기능 제공
    - 스타일 component 정리하는데 유용

  - 위 코드의 container 부분 이름은 아무거나 쓸 수 있음

    - CSS에 있는 class 이름처럼 생각
    - 특정한 네이밍 패턴을 따를 필요는 없음

- Styles를 분리하려는 경우

  - StyleSheet.create 가 꼭 필요하지는 않음

  - ```
    const styles = {
    container : {
    	flex : 1,
    	backgroundColor: "#fff",
    	alignItems: "center",
    	justifyContent: "center",
    	},
    }
    ```

    - styles.container의 유무에 상관없이 잘 작동
    - 자동 완성이 지원되지는 않음

- Status bar(상태표시줄)

  - React Native에서 import하지 않음
  - status-bar는 third-party(제 3자) 패키지
  - status-bar component는 시계, 배터리, Wi-Fi 의미
  - 이 component는 상태바와 소통할 수 있는 방법

- CSS에서 에러를 내면 오류를 표시해줌.



### 2.3 React Native Packages

- https://reactnative.dev/docs/components-and-apis
- Core Components and APIs
  - 과거에는 많은 Components가 있었지만 모든 components를 지원하는 게 어렵기에 필수적인 중요한 기능만 남기고 규모를 줄임



### 2.4 Third Party Packages

- API와 Component를 사용해서 폰과 앱이 작동하는 방식을 변경할 수 있음

- Component
  - 화면에 렌더링할 항목
    - View의 경우 정말 기본적인 Component
    - StatusBar
- Api
  -  자바스크립트 코드(운영체제와 소통)
    - Vibration (디바이스 진동)
- reactnative.directory
  - https://reactnative.directory/?search=storage
  - 커뮤니티가 만든 third-party 패키지와 api 있음
- Expo SDK
  - Expo 팀에서 자체적으로 만든 Packages와 APIs
  - React Native Packages를 찾을 수 없다면 Expo Packages를 쓰면 됨
  - Expo StatusBar와 React Native StatusBar가 있는 이유
    - Expo가 React Native의 일부 Components와 APIs를 복제하고 개선하고 있기에\
    - Expo가 제공하는 StatusBar는 React Native에서 제공하는 StatusBar와 같지만 function이름 같은 게 다름
    - Expo는 우리가 사용할 수 있는 모든 API와 Packages를 만들고 지원하는 곳



### 2.5 Layout System

- 레이아웃을 만드려면 Flexbox 사용
- 예외
  - display : block, inline-block, grid
- 기본적으로 모든 View는 Flex Container
  - Flex 부모를 만들고 부모와 자식에 Flex Size를 주어 비율로 조정
- Flex Direction 기본값은 모두 Column
- Overflow가 있다고 해서 스크롤할 수 있다는 의미는 아님
- 스크린 사이즈에 따라 다르게 보이기에 너비와 높이에 기반해서 레이아웃을 만드는 건 좋은 생각이 아님



### 2.6 Styles

- Expo가 실행되고 있는 console에서 r을 누르면 보여지는 화면이 refreshed됨

- d를 누르면 개발자 도구 확인 가능

- ```
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, View } from "react-native";
  
  export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
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
    weather: {
      flex: 3,
    },
    day: {
      flex: 1,
      alignItems: "center",
    },
    temp: {
      marginTop: 50,
      fontSize: 178,
    },
    description: {
      marginTop: -30,
      fontSize: 80,
    },
  });
  ```



### 2.7 Styles part Two

- ScrollView 사용 시 ScrollView의 style을 만들고 싶다면 style prop을 쓰면 안됨 -> Container Style을 써야함

  - 스크롤링이 멈춘다면?
    - ScrollView에서는 Flex사이즈를 줄 필요가 없음
    - ScrollVIew는 스크린보다 커야하기 때문

- 전체 화면 사이즈를 가져오고 싶다면

  - Dimensions API 호출

- ```
  import { StatusBar } from "expo-status-bar";
  import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
  
  // const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const SCREEN_WIDTH = Dimensions.get("window").width;
  
  export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weather}
        >
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
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
      alignItems: "center",
    },
    temp: {
      marginTop: 50,
      fontSize: 178,
    },
    description: {
      marginTop: -30,
      fontSize: 80,
    },
  });
  ```



### 2.8 Location

- 유저 위치 정보
  - Expo Location 설치
    - `expo install expo-location`
  - API Methods
    - requestPermissionAsync() - 권한 요청
    - getLstKnownPositionAsync() - 유저의 마지막 위치 받기
    - getCurrentPositionAsync() - 현재 위치 얻기
    - WatchPositionAsync() - 위치 관찰
    - getcodeAsync() - 주소를 받아서 위도와 경도로 변환
    - reverseGeocodeAsync() - 위도와 경도를 도시와 구역으로 반환
    - Geofencing Methods - 유저가 특정 지역을 벗어났을 때 알려줌

- ```
  import * as Location from "expo-location";
  import { StatusBar } from "expo-status-bar";
  import { useState, useEffect } from "react";
  import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
  
  // const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const SCREEN_WIDTH = Dimensions.get("window").width;
  
  export default function App() {
    const [city, setCity] = useState("Loading...");
    const [location, setLocation] = useState();
    const [ok, setOk] = useState(true);
    const ask = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setOk(false);
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
      setCity(location[0].city);
    };
    useEffect(() => {
      ask();
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
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
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
      alignItems: "center",
    },
    temp: {
      marginTop: 50,
      fontSize: 178,
    },
    description: {
      marginTop: -30,
      fontSize: 80,
    },
  });
  
  ```

  

### 2.9 Weather

- ```
  import * as Location from "expo-location";
  import { StatusBar } from "expo-status-bar";
  import { useState, useEffect } from "react";
  import { ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from "react-native";
  
  // const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const SCREEN_WIDTH = Dimensions.get("window").width;
  
  const API_KEY = "15ead4225fc7c792234304db576dde5e";
  
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
            <View style={styles.day}>
              <ActivityIndicator color="white" style={{ marginTop: 10 }} size="large" />
            </View>
          ) : (
            days.map((day, index) => (
              <View key={index} style={styles.day}>
                <Text style={styles.temp}>{parseFloat(day.main.temp).toFixed(1)}</Text>
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
      alignItems: "center",
    },
    temp: {
      marginTop: 50,
      fontSize: 178,
    },
    description: {
      marginTop: -30,
      fontSize: 80,
    },
    tinyText: {
      fontSize: 20,
    },
  });
  
  ```



### 2.10 Recap

- getWeather이라는 function 만듦
  - component가 마운트되면 위 function을 호출 
- city, days, ok를 위한 3개의 state 만듦
-  getWeather function을 호출했을 때 유저에게 location을 받을 수 있게 허락해달라고 요청
  - 허락하지 않으면 ok의 state를 false로 설정
  - 허락을 받으면 유저의 현재 위치를 알 수 있음
- 유저가 있는 도시 이름을 알아야 하기 때문에 reverseGeocode라는 함수를 이용
  -  reverseGeocode는 위도와 경도를 가져다 주소를 알려줌.
- 알아낸 위도와 경도를 바탕으로 api 호출
  - 응답을 받은 순간 response 안에서 days를 가져다 state 안에 넣음.
- array가 비어있다면 ActivityIndicator가 나오도록 함. => 무언가를 로딩할 때 표시



### 2.11 Icons

- expo/vector-icons

  - 많은 아이콘이 있는 엄청 큰 라이브러리에 접근할 수 있음.
  - https://icons.expo.fyi/
  - 패밀리
    - 아이콘의 종류

- 날씨에 따라 아이콘 넣기

  - hashmap 만들기

- ```
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
  
  ```



## 3. WORK HARD TRAVEL HARD APP

### 3.1 Introduction

- WorkHardTravelHardApp
  - React Native에서 버튼 클릭을 다루는 법
  - 어플에 데이터 input하는 법
  - web에서 사용하는 React와 React Native에서 input이 어떻게 다른지
    - React Native에는 form 같은 것이 없음
    - 폰과 어플을 껐다 켜더라도 데이터가 그대로 유지되고 있어야 함



### 3.2 Touchables

- 버튼의 흥미로운 3가지 컴포넌트

  - TouchableOpacity

    - View와 비슷한 종류로 box 와 비슷
    - 누르는 이벤트를 listen할 준비가 된 view
    - 이름에 Opacity가 들어있는 이유는 애니메이션 효과가 있기 때문
    - 누른 요소를 투명하게 만듦.

  -  TouchableHighlight

    - style이 있어서 클릭해씅ㄹ 때의 투명도를 설정할 수 있음.

      - 요소를 클릭하거나 누를 때 0의 투명도를 원한다면

        - ```
                  <TouchableOpacity activeOpacity={0}>
                    <Text style={styles.btnText}>Work</Text>
                  </TouchableOpacity>
          ```

      - TouchableHighlight는 요소를 클릭했을 때 배경색이 바뀌도록 해줌

        - underlayColor 설정해야함

        - ```
           <TouchableHighlight
                    underlayColor="red"
                    activeOpacity={0.5}
                    onPress={() => {
                      console.log("pressed");
                    }}
                  >
                    <Text style={styles.btnText}>Travel</Text>
                  </TouchableHighlight>
          ```

  - TouchableWithoutFeedback
    - 화면의 가장 위에서 일어나는 탭 이벤트를 listen
    - 그래픽이나 다른 UI 반응을 보여주진 않기에 어플리케이션의 생김새는 변하는 게 없음
  - pressable
    - 더 확장성있고 미래에도 사용가능한 터치기반의 input을 다루길 원할 때 사용. 좀 더 많은 속성들이 있음
    - hitSlope
      - 요소 바깥 어디까지 탭 누르는 것을 감지할 지 정함
  - onPress -  유저가 Touchable을 눌렀을 때 실행되는 이벤트
    - onPressIn - 손가락이 그 영역 안에 들어갈 때
    - onPressOut - 손가락이 그 영역에서 벗어날 때
    - onLongPress - 손가락이 영역에 들어가서 오랫동안 머무를 때

- ```
  import { StatusBar } from "expo-status-bar";
  import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Pressable,
  } from "react-native";
  import { theme } from "./colors";
  
  export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0}>
            <Text style={styles.btnText}>Work</Text>
          </TouchableOpacity>
          <TouchableHighlight
            underlayColor="red"
            activeOpacity={0.5}
            onPress={() => {
              console.log("pressed");
            }}
          >
            <Text style={styles.btnText}>Travel</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 100,
    },
    btnText: {
      fontSize: 44,
      fontWeight: "600",
      color: theme.grey,
    },
  });
  
  ```



### 3.3 TextInput

- React Native에는 HTML, CSS에 있는 textarea가 없는 대신 textInput이 있음
- https://reactnative.dev/docs/textinput
-  TextInput은 React Native에서 유저가 text를 쓸 수 있는 유일한 방법
- props
  - onFocus - 화면을 터치하면 쓸 준비가 된 상태
  - onChangeText - 입력한 Text를 받을 수 있음
  - keyboardType - 유저가 이메일이나 폰번호를 쳐야 할 때 키보드 타입을 바꿀 수 있게 해줌
  - returnKeyType - return의 모양을 바꿀 수 있음
  - returnKeyLable - 안드로이드에서만 작동. return을 원하는 걸로 바꿀 수 있음.
  - secureTextEntry - 비밀번호 입력시 사용.
  - multiline - 한 줄 이상 쓰는 경우 텍스트처럼 글을 쓸 수 있음. 사용안하면 한 줄로만 작성됨.
  - autoCorrect - 잘못입력시 자동수정
  - autoCapitalize - 대문자로 만들고 싶은 것 지정. 모든 단어의 싲가을 대문자로 만들 수 있음.

- ```
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
  import { theme } from "./colors";
  import { useState } from "react";
  
  export default function App() {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity onPress={work}>
            <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={travel}>
            <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
          </TouchableOpacity>
        </View>
  
        <TextInput
          style={styles.input}
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 100,
    },
    btnText: {
      fontSize: 44,
      fontWeight: "600",
    },
    input: {
      backgroundColor: "white",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginTop: 20,
      fontSize: 18,
    },
  });
  
  ```



### 3.4 To Dos

- submit을 누르면 onSubmitEditing 이벤트 발생

- object assign

  - object를 가져다가 다른 object와 합쳐줌

  - ```
    const newToDos = Object.assign({}, toDos, { [Date.now()]: { text, work: working } });=
    ```

  - ```
    // 이렇게도 가능
    const newToDos = {...toDos, [Date.now()]: { text, work: working } };
    ```

- ```
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
  import { theme } from "./colors";
  import { useState } from "react";
  
  export default function App() {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);
    const addToDo = () => {
      if (text === "") {
        return;
      }
      // const newToDos = Object.assign({}, toDos, { [Date.now()]: { text, work: working } });
      const newToDos = { ...toDos, [Date.now()]: { text, work: working } };
      setToDos(newToDos);
      setText("");
    };
    console.log(toDos);
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity onPress={work}>
            <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={travel}>
            <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
          </TouchableOpacity>
        </View>
  
        <TextInput
          style={styles.input}
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"}
          onChangeText={onChangeText}
          onSubmitEditing={addToDo}
          returnKeyType="done"
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 100,
    },
    btnText: {
      fontSize: 44,
      fontWeight: "600",
    },
    input: {
      backgroundColor: "white",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginTop: 20,
      fontSize: 18,
    },
  });
  ```



### 3.5 Paint To Dos

- paint
  - 스크롤뷰를 만든 다음  todo 나타내기

- ```
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";
  import { theme } from "./colors";
  import { useState } from "react";
  
  export default function App() {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);
    const addToDo = () => {
      if (text === "") {
        return;
      }
      // const newToDos = Object.assign({}, toDos, { [Date.now()]: { text, work: working } });
      const newToDos = { ...toDos, [Date.now()]: { text, work: working } };
      setToDos(newToDos);
      setText("");
    };
    console.log(toDos);
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity onPress={work}>
            <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={travel}>
            <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
          </TouchableOpacity>
        </View>
  
        <TextInput
          style={styles.input}
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"}
          onChangeText={onChangeText}
          onSubmitEditing={addToDo}
          returnKeyType="done"
        />
        <ScrollView>
          {Object.keys(toDos).map((key) => (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}> {toDos[key].text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 100,
    },
    btnText: {
      fontSize: 44,
      fontWeight: "600",
    },
    input: {
      backgroundColor: "white",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginVertical: 20,
      fontSize: 18,
    },
    toDo: {
      backgroundColor: theme.grey,
      marginBottom: 10,
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
    },
    toDoText: {
      color: "white",
      fontSize: 16,
      fontWeight: "500",
    },
  });
  ```

  

### 3.6 Persist

- Work와 Travel 분류 후 저장소에 저장
- AsyncStorage
  - https://docs.expo.dev/versions/latest/sdk/async-storage/?redirected
  - `npx expo install @react-native-async-storage/async-storage`

- SaveToDos fuction
  - 현재 있는 toDos를 string으로 바꿔주고 await AsnyncStorage.setItem 해줌
  - toSave 형태의 toDos를 받고 toSave는 addToDo function을 통해 saveToDos에 전해짐

- ```
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";
  import { theme } from "./colors";
  import { useState, useEffect } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const STORAGE_KEY = "@toDos";
  
  export default function App() {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);
    const saveToDos = async (toSave) => {
      await AsyncStorage.setItem(STORAGE_KEY, SJSON.stringify(toSave));
    };
  
    const loadToDos = async () => {
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      s !== null ? setToDos(JSON.parse(s)) : null;
    };
  
    useEffect(() => {
      loadToDos();
    }, []);
  
    const addToDo = async () => {
      if (text === "") {
        return;
      }
      // const newToDos = Object.assign({}, toDos, { [Date.now()]: { text, work: working } });
      const newToDos = { ...toDos, [Date.now()]: { text, working } };
      setToDos(newToDos);
      await saveToDos(newToDos);
      setText("");
    };
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity onPress={work}>
            <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={travel}>
            <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
          </TouchableOpacity>
        </View>
  
        <TextInput
          style={styles.input}
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"}
          onChangeText={onChangeText}
          onSubmitEditing={addToDo}
          returnKeyType="done"
        />
        <ScrollView>
          {Object.keys(toDos).map((key) =>
            toDos[key].working === working ? (
              <View style={styles.toDo} key={key}>
                <Text style={styles.toDoText}> {toDos[key].text}</Text>
              </View>
            ) : null
          )}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 100,
    },
    btnText: {
      fontSize: 44,
      fontWeight: "600",
    },
    input: {
      backgroundColor: "white",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginVertical: 20,
      fontSize: 18,
    },
    toDo: {
      backgroundColor: theme.grey,
      marginBottom: 10,
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
    },
    toDoText: {
      color: "white",
      fontSize: 16,
      fontWeight: "500",
    },
  });
  ```

  

### 3.7 Delete

- 앞 코드 loadToDos에서 await를 사용하고 있는데 error가 발생할 수 있기에 try catch 문으로 변경

- 모든 폰의 로딩 속도가 다르기에 로딩을 위한 state 추가

- ```
  import { StatusBar } from "expo-status-bar";
  import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Alert } from "react-native";
  import { theme } from "./colors";
  import { useState, useEffect } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { Fontisto } from "@expo/vector-icons";
  const STORAGE_KEY = "@toDos";
  
  export default function App() {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    const travel = () => setWorking(false);
    const work = () => setWorking(true);
    const onChangeText = (payload) => setText(payload);
    const saveToDos = async (toSave) => {
      await AsyncStorage.setItem(STORAGE_KEY, SJSON.stringify(toSave));
    };
  
    const loadToDos = async () => {
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      s !== null ? setToDos(JSON.parse(s)) : null;
    };
  
    useEffect(() => {
      loadToDos();
    }, []);
  
    const addToDo = async () => {
      if (text === "") {
        return;
      }
      // const newToDos = Object.assign({}, toDos, { [Date.now()]: { text, work: working } });
      const newToDos = { ...toDos, [Date.now()]: { text, working } };
      setToDos(newToDos);
      await saveToDos(newToDos);
      setText("");
    };
  
    const deleteToDo = (key) => {
      Alert.alert("Delete To Do", "Are you sure?", [
        { text: "Cancel" },
        {
          text: "I'm Sure",
          style: "destructive",
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
            saveToDos(newToDos);
          },
        },
      ]);
      return;
    };
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <TouchableOpacity onPress={work}>
            <Text style={{ ...styles.btnText, color: working ? "white" : theme.grey }}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={travel}>
            <Text style={{ ...styles.btnText, color: !working ? "white" : theme.grey }}>Travel</Text>
          </TouchableOpacity>
        </View>
  
        <TextInput
          style={styles.input}
          value={text}
          placeholder={working ? "Add a To Do" : "Where do you want to go?"}
          onChangeText={onChangeText}
          onSubmitEditing={addToDo}
          returnKeyType="done"
        />
        <ScrollView>
          {Object.keys(toDos).map((key) =>
            toDos[key].working === working ? (
              <View style={styles.toDo} key={key}>
                <Text style={styles.toDoText}> {toDos[key].text}</Text>
                <TouchableOpacity onPress={() => deleteToDo(key)}>
                  <Fontisto name="trash" size={18} color={theme.grey} />
                </TouchableOpacity>
              </View>
            ) : null
          )}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.bg,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 100,
    },
    btnText: {
      fontSize: 44,
      fontWeight: "600",
    },
    input: {
      backgroundColor: "white",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      marginVertical: 20,
      fontSize: 18,
    },
    toDo: {
      backgroundColor: theme.toDoBg,
      marginBottom: 10,
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    toDoText: {
      color: "white",
      fontSize: 16,
      fontWeight: "500",
    },
  });
  ```



## 4. PUBLISHING OUR APPS



