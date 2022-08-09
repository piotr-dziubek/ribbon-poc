import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as l from "leaflet";
import data from "../data/providerByNpi.json";
import { Root, Location } from "./types";
import { CustomProvider } from "./types/provider";

function App() {
  const mapRef = useRef<l.Map>(null);
  const [npi, setNpi] = useState("");
  const [providers, setProviders] = useState<CustomProvider[]>([]);
  const [places, setPlaces] = useState<Location[]>([]);
  const handleNpiChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setNpi(e.target.value);
  };

  useEffect(() => {
    console.log(mapRef.current);
  }, []);

  useEffect(() => {
    mapRef.current?.setView([places[0].latitude, places[0].longitude], 13);
  }, [places]);

  const handleBlur = async () => {
    //const data = await axios.get('http://127.0.0.1:3005/providers');
    const b = data as Root;
    const locations: Location[] = [];
    const providers: CustomProvider[] = [];
    for (const bElement of b.data) {
      providers.push({
        npi: bElement.npi,
        age: bElement.age,
        degrees: bElement.degrees,
        gender: bElement.gender === "m" ? "Male" : "Female",
        provider_types: bElement.provider_types,
        first_name: bElement.first_name,
        languages: bElement.languages,
        middle_name: bElement.middle_name,
        last_name: bElement.last_name,
        ratings_avg: bElement.ratings_avg,
        ratings_count: bElement.ratings_count,
      });
      locations.push(...bElement.locations);
    }

    setPlaces(locations);
    setProviders(providers);
  };

  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Box h="8vh">
        <Header />
      </Box>
      <Box flex="1">
        <main>
          <Flex p="3rem" gap="1rem">
            <Box flexBasis="fit-content">
              <FormControl>
                <FormLabel>Npi Number {npi}</FormLabel>
                <Input
                  value={npi}
                  onChange={handleNpiChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Provide npi number"
                />
              </FormControl>
            </Box>
            <Box flexBasis="30vw">
              <Accordion allowToggle>
                {providers.map((provider) => {
                  return (
                    <AccordionItem key={provider.npi}>
                      <h4>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {provider.first_name} {provider.middle_name}{" "}
                            {provider.last_name} : {provider.npi}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h4>
                      <AccordionPanel pb={4}>
                        <ul>
                          <li>Age: {provider.age}</li>
                          <li>Gender: {provider.gender}</li>
                          <li>Degrees: {provider.degrees.join(", ")}</li>
                          <li>Languages: {provider.languages.join(", ")}</li>
                          <li>
                            Providers: {provider.provider_types.join(", ")}
                          </li>
                          <li>Rating: {provider.ratings_avg}</li>
                          <li>number of raters: {provider.ratings_count}</li>
                        </ul>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Box>
            <Box flexBasis="fit-content" flexGrow="1">
              <MapContainer
                ref={mapRef}
                center={[0, 0]}
                style={{ width: "inherit", height: "300px" }}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {places.map((place) => {
                  return (
                    <Marker
                      key={place.uuid}
                      position={[place.latitude, place.longitude]}
                    >
                      <Popup>
                        <p>{place.name}</p>
                        <Link isExternal href={place.google_maps_link}>
                          Google map Link
                        </Link>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </Box>
          </Flex>
        </main>
      </Box>
      <Box h="10vh">
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
