import React, {useState} from 'react';

type WeatherAPIResponse = {
    "coord": { "lon": number,"lat": number},
    "weather": [
        {
        "id": number,
        "main": string,
        "description": string,
        "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "wind": {
        "speed": number,
        "deg": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "message": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}

const api = {
	key: '5b6878cb6e4e855206685e98133becff',
	url: 'https://api.openweathermap.org/data/2.5/'
};

const Home: React.FC = () => {
    const dateBuild = () => {
		let date = String(new window.Date());
		date = date.slice(3,15);
		return date;
	}

	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({} as WeatherAPIResponse);

	const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then(res => res.json())
				.then(result => {
					setQuery("");
					setWeather(result);
                    console.log(result);
				})
		}
	};

    return (
        <div className={
            typeof weather.main != 'undefined'
                ? weather.main.temp > 18
                    ? 'App hot'
                    : 'App cold'
                : 'App'
        }>
          <main>
            <div className='search-container'>
                <input type='text'
                       placeholder='Search...'
                       className='search-bar'
                       onChange={(e) => setQuery(e.target.value)}
                       value={query}
                       onKeyPress={search} />
            </div>
            {typeof weather.main != 'undefined' 
            ? (
                <div>
                    <div className="location-container">
                        <div className="location">
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div className="date">{dateBuild()}</div>
                    </div>
                    <div className="weather-container">
                        <div className="temperature">
                            {Math.round(weather.main.temp)}°C
                        </div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                </div>
              ) 
            : ("")}
          </main>  
        </div>
    )
};

export default Home;