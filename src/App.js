import logo from "./logo.svg";
import "./App.css";
import { Box, Heading, Image, Grid } from "@chakra-ui/react";
import CallToActionWithAnnotation from "./LandingPage";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Box
        w={"100vw"}
        h={"100%"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Image
          src="/heartgif1.webp"
          w={"100vw"}
          h={"100%"}
          objectFit={"cover"}
          position={"absolute"}
        />

        <CallToActionWithAnnotation />
        <Grid templateColumns="repeat(3, 1fr)" w={"75%"} h={"100%"} zIndex={1}>
          <Card
            image={"/IMG_0401.jpg"}
            title={"Across the Island"}
            text={
              "Driving from Kona to Hilo which is about 2 hours. Always a dope view 🏝️"
            }
          />
          <Card
            image={"/IMG_0404.jpg"}
            title={"Katsu"}
            text={
              "My grandfathers dog! didnt get a chance to see the poodles 🐕"
            }
          />
          <Card
            image={"/IMG_0406.jpg"}
            title={"Matt the Artist"}
            text={
              "I was high as shit as a kid gawh damn. Untitled is the perfect title 💰"
            }
          />
          <Card
            image={"/IMG_0419.jpg"}
            title={"Building a Rig"}
            text={"We throwing a boiler room set with rig? 🚨"}
          />
          <Card
            image={"/IMG_0442.jpg"}
            title={"Concrete roots"}
            text={"Tennis in an unconvetial spot with the convential OGs ⚡"}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
