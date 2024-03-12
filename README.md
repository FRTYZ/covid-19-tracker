# Covid 19 Tracker - Case Study

Merhaba,
Ben Fırat YILDIZ,
Case Study görevini mailde istenilen şekilde tamamlanmıştır.

Projede kullanılan teknolojiler
* React
* Typescript
* Redux & Redux Saga
* Material UI
* Unit testler


![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/home.png?raw=true)

## Canlı Demo (Vercel)

https://covid-19-tracker-lovat.vercel.app/

## Proje kurulumu için gereklilikler
* NodeJS (version minimum v20.10.0)

## Proje nasıl kurulur (Git ile)

* #### Terminali açıp bu komutu kullanabilirsiniz

```
(HTTPS)

git clone https://github.com/FRTYZ/covid-19-tracker.git

(SSH)

git clone git@github.com:FRTYZ/covid-19-tracker.git
```

* #### Projeyi localinize klonladıktan sonra projenin dizininden terminali açıp sırasıyla bu komutları kullanabilirisiniz

```
npm install
```
```
npm run dev
```
## Proje nasıl kurulur (Docker ile)
* #### Projenin olduğu dizinde terminali açınız.
* #### locale image oluşturup ve başlatmak için
```
docker-compose up --build --no-recreate -d
```
```
docker-compose up -d
```

* #### Container test etmek için
```
docker-compose ps
```

#### komutlar böyle görünmekte
![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/1-docker-compose.png?raw=true)

* #### Container çalıştırmak için

```
docker exec -it covid19-tracker sh
```
* #### Container çalıştırdık şimdide node paketlerini yükleyip başlatmak için

```
npm i && npm run dev
```

### komutlar böyle görünmekte
![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/2-docker-start.png?raw=true)

### terminalde yazan adresle projeye erişebilirsiniz.


## Proje nasıl kurulur (Dowload)

* #### Seçeneklerden "Dowload Zip" ile indiriniz.

![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/home.png?raw=true)

* #### Zip formatında indirdiğiniz projeyi localnizde extract ediniz.

![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/extract-zip.png?raw=true)

* #### Projeyi extract ettikten sonra projeyi kendi dizininden terminalini açıp sırasıyla bu komutları kullanabilirisiniz

```
npm install
```
```
npm run dev
```

## Projenin ekran görüntüleri

* ### Map sayfası

![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/home.png?raw=true)

* ### Navbar (Haritadan seçmek yerine select inputuyla dilediğiniz ülkeyi seçebilirsiniz)

![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/select.png?raw=true)

* ### Detay sayfası (Haritadan veya select inputla seçilen ülkenin covid 19 verileri listelenir)

![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/detail.png?raw=true)

* ### Loader (API sorun oluştuğunda kullanıcının bilgilendirilmesi)
![alt text](https://github.com/FRTYZ/covid-19-tracker/blob/main/public/loader.png?raw=true)


### Package.json
```
{
  "name": "covid-19-tracker",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  },
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.0",
    "@fontsource/roboto": "^5.0.12",
    "@jest/types": "^29.6.3",
    "@mui/icons-material": "^5.15.12",
    "@mui/material": "^5.15.12",
    "@reduxjs/toolkit": "^2.2.1",
    "@testing-library/jest-dom": "^6.4.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.2",
    "react-slugify": "^3.0.3",
    "react-svg-worldmap": "^2.0.0-alpha.16",
    "recharts": "^2.12.2",
    "redux-saga": "^1.3.0",
    "styled-components": "^6.1.8"
  },
  "devDependencies": {
    "@testing-library/react": "^14.2.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@types/redux-mock-store": "^1.0.6",
    "@typescript-eslint/eslint-plugin": "^7.0.2",
    "@typescript-eslint/parser": "^7.0.2",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "redux-mock-store": "^1.5.4",
    "ts-jest": "^29.1.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}
```