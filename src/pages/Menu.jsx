import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import bannerimage from "../assets/Images/banner.jpg";

import {
    Box,
    Flex,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const Home = lazy(() => import("./Home"));
const SobreNosotros = lazy(() => import("./SobreNosotros"));
const Tareas = lazy(() => import("./Tareas"));

export default function Menu() {
    const { colorMode, toggleColorMode } = useColorMode();

    const bg = useColorModeValue("red.500", "red.200");
    const color = useColorModeValue("white", "black");
    const colormoon = useColorModeValue("black", "white");


    return (
        <Box>
            <Box
            height="28vh"
            bg="grey"
            byImage="bannerimage"
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            >
                <Flex
                direction={"column"}
                alignItems={"flex-star"}
                justifyContent={"center"}
                h={"100%"}
                padding={"10px"}
                >
                    <Heading
                    color="white"
                    textTransform="uppercase"
                    letterSpacing="5px"
                    padding="4vh"
                    size="2x1"
                    alignItems={"center"}
                    > Lista de tareas</Heading>
                </Flex>
            </Box>
            <Flex
            height="5vh"
            padding="4vh"
            justifyContent="space-between"
            w={"100%"}
            fontSize="2.5vh"
            color="#C95D40"
            >
                <Breadcrumb>
                <BreadcrumbItem>
                <Link to="/">Inicio</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <Link to="/SobreNosotros">Sobre nosotros</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <Link to="/Tareas">Tareas</Link>
                </BreadcrumbItem>
                </Breadcrumb>

                <BiSolidMoon size="30px" color={colormoon} onClick={toggleColorMode}>
                    Toggle {colorMode === "ligth" ? "Dark" : "Dark"}
                </BiSolidMoon>
            </Flex>

            <div>
                <Routes>
                    <Route
                    exact
                    path="/"
                    element={
                        <Suspense fallback={<h5>Cargando...</h5>}>
                            <Home />
                        </Suspense>
                    }
                    ></Route>
                    <Route
                    exact
                    path="/SobreNosotros"
                    element={
                        <Suspense fallback={<h5>Cargando...</h5>}>
                            <SobreNosotros />
                        </Suspense>
                    }
                    ></Route>
                    <Route
                    exact
                    path="/Tareas"
                    element={
                        <Suspense fallback={<h5>Cargando...</h5>}>
                            <Tareas />
                        </Suspense>
                    }
                    ></Route>
                    <Route path="*" element={"Error 404 - Page Not Found"}></Route>
                </Routes>
            </div>
        </Box>
    );
}