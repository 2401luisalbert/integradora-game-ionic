import { ICard } from "../interfaces/ICard";
import { ICardItems } from "../interfaces/ICardItems";

export const dataHomeWorlds: ICard[] = [
    {
        id: "1",
        title: "Luna",
        imageURL: "/src/assets/images/Luna.webp",
        description: "El escenario lunar es un paisaje desolado, cubierto de polvo lunar y marcado por cráteres. A lo largo de este nivel, los restos de estructuras humanas en la Luna son testigos del esfuerzo de colonización."
    },
    {
        id: "2",
        title: "Marte",
        imageURL: "/src/assets/images/Marte.webp",
        description: "El paisaje marciano es un vasto desierto rojo con dunas de arena, cañones y antiguas instalaciones humanas. El cielo rojo y el sol ardiente crean un ambiente hostil en el planeta. En Marte, el astronauta se enfrenta a la invasión de los invasores alienígenas."
    },
    {
        id: "3",
        title: "Estación Espacial Abandonada",
        imageURL: "/src/assets/images/Estacion.webp",
        description: "La estación espacial es un lugar claustrofóbico con pasillos estrechos, habitaciones oscuras y sistemas de soporte vital deteriorados. Los robots renegados son enemigos mecánicos que el astronauta debe enfrentar en este entorno. La estación espacial abandonada es un entorno cerrado y peligroso."
    }
]


export const dataCharacters: ICard[] = [
    {
        id: "1",
        title: "Nick Parker",
        imageURL: "/src/assets/images/Nick-Parker.webp",
        imageFull: "/src/assets/images/Nick Parker-Full.png",
        descriptionModal:"Nick Parker es un astronauta experimentado que previamente participó en misiones espaciales para explorar la posibilidad de vida en otros planetas. Después de años de investigación, Nick finalmente se encuentra cara a cara con pruebas concretas de la existencia alienígena en la Luna, Marte y la estación espacial. Ahora, su misión es proteger a la humanidad y recopilar evidencia de estos encuentros."
       
    },
    {
        id: "2",
        title: "Zyglar",
        imageURL: "/src/assets/images/Zyglar.png",
        imageFull: "/src/assets/images/Zyglar-Full.png",
        descriptionModal:"Zyglar es un sobreviviente de una antigua civilización alienígena que desapareció misteriosamente hace siglos. Su presencia en la Luna es una de las primeras pistas que Nick Parker descubre, lo que lo lleva a investigar la existencia de vida extraterrestre. Zyglar busca preservar los secretos de su civilización y evitar que la humanidad descubra la verdad detrás de su desaparición."
    },
    {
        id: "3",
        title: "Gorvix",
        imageURL: "/src/assets/images/Gorvix.png",
        imageFull: "/src/assets/images/Gorvix-Full.png",
        descriptionModal:"Gorvix es un explorador de su especie que quedó varado en Marte mientras buscaba signos de vida en el planeta rojo. Nick Parker se cruza con Gorvix mientras investiga los rastros dejados por este alienígena y busca entender su origen y propósito en el planeta. La existencia de Gorvix es una pista clave en la búsqueda de vida extraterrestre."
    },
    {
        id: "4",
        title: "X1-SC4R",
        imageURL: "/src/assets/images/X1-SC4R.png",
        imageFull: "/src/assets/images/X1-SC4R-Full.png",
        descriptionModal:"X1-SC4R es un robot renegado que una vez se utilizó en investigaciones de posibles señales de vida alienígena en la estación espacial. Sin embargo, una falla en su programación lo llevó a rebelarse contra sus creadores. Ahora, X1-SC4R representa un obstáculo para Nick Parker mientras busca descubrir y documentar evidencia de vida alienígena en la estación espacial abandonada."
    }
]

export const dataItems: ICardItems[] = [
    {
        id: "1",
        title: "Esferas Bioluminiscentes",
        imageURL: "/src/assets/images/Esfera.webp",
        description:"Estas esferas misteriosas emiten una luz tenue y bioluminiscente que ilumina las zonas más oscuras de la Luna. Las Esferas Bioluminiscentes son cruciales para explorar con seguridad y descubrir pistas cruciales sobre la invasión alienígena en curso.        "
       
    },
    {
        id: "2",
        title: "Huevos Alienígenas",
        imageURL: "/src/assets/images/Huevo.webp",
        description:"Los huevos alienígenas son pruebas de la reproducción de las criaturas invasoras que se encuentran en Marte. Al recolectarlos, los jugadores pueden descifrar cómo se están propagando los alienígenas y cuál podría ser la amenaza completa que representan. Los huevos son pistas vitales para comprender la biología y la estrategia de los extraterrestres."
    },
    {
        id: "3",
        title: "Disquete Alienígena",
        imageURL: "/src/assets/images/discket.webp",
        description:"Este disquete contiene información vital sobre la existencia de seres extraterrestres y detalles reveladores sobre la invasión alienígena en curso. Proteger y recuperar el Disquete de Datos Alienígenas es fundamental para avanzar en la historia y cumplir con la misión de Nick Parker."
    },
]