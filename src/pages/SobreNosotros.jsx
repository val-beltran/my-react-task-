import React from "react";
import htmllogo from "../assets/Images/Html.png";
import Csslogo from "../assets/Images/CSS.png";
import Jslogo from "../assets/Images/JS.png";
import Reactlogo from "../assets/Images/React.png";
import {
    Card, 
    CardHeader,
    CardBody,
    Text,
    Flex,
    Image,
    Stack,
} from "@chakra-ui/react";

export default function SobreNosotros() {
    return (
        <Flex fontSize="medium" alignItems={"center"} justifyContent={"center"}>
            <Card width="80%" padding="0vh 1.5vh 0vh 1.5vh">
                <CardHeader fontSize="5vh" color="#C95D40" fontWeight="bold">
                    Sobre nosotros
                </CardHeader>
                <CardBody>
                    <Text>
                        Esta aplicación de tareas fue desarrollada por Valentina Beltran, estudiante de 
                        ADA School.
                    </Text>
                    <Text>
                        Esta aplicación tiene varias funciones como lo son ingresar tareas, eliminar las tareas,
                        editar las tareas, cambiar el estado de pendiente a completado. Tendrás
                        la oportunidad de manejar mejor tu tiempo y no dejar tareas importantes sin hacerlas.
                    </Text>
                    <Stack direction="row" justifyContent="space-around" padding="5vh">
                        <Text fontWeight="black">Los lenguajes usados en esta aplicación:</Text>
                        <Image boxSize="10vh" src={htmllogo}></Image>
                        <Image boxSize="10vh" src={Csslogo}></Image>
                        <Image boxSize="10vh" src={Jslogo}></Image>
                        <Image boxSize="10vh" src={Reactlogo}></Image>
                    </Stack>
                </CardBody>
            </Card>
        </Flex>
    );
}