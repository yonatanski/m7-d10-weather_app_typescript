export interface ICity {
    cod:     string;
    message: number;
    cnt:     number;
    list:    IList[];
    city:    ICityClass;
}

export interface ICityClass {
    id:         number;
    name:       string;
    coord:      ICoord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}

export interface ICoord {
    lat: number;
    lon: number;
}

export interface IList {
    dt:         number;
    main:       IMainClass;
    weather:    IWeather[];
    clouds:     IClouds;
    wind:       IWind;
    visibility: number;
    pop:        number;
    sys:        ISys;
    dt_txt:     string;
}

export interface IClouds {
    all: number;
}

export interface IMainClass {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}

export interface ISys {
    pod: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export interface IWeather {
    id:          number;
    main:        MainEnum;
    description: Description;
    icon:        string;
}

export enum Description {
    BrokenClouds = "broken clouds",
    ClearSky = "clear sky",
    FewClouds = "few clouds",
    OvercastClouds = "overcast clouds",
    ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
}

export interface IWind {
    speed: number;
    deg:   number;
    gust:  number;
}
