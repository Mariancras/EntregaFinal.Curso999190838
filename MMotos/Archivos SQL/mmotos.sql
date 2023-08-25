-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-08-2023 a las 03:38:55
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mmotos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(17, '¿China o italiana? Esta superbike tiene lo mejor de MV Agusta pero habla mandarín', 'Te mostramos una superbike que posee una gran herencia de MV Agusta, pero fue fabricada en su totalidad muy lejos de Italia. Conocela.', 'QJ Motor marca un hito con el lanzamiento de su tan esperada superbike, la SRK 1000 RR. Un ambicioso proyecto que promete desafiar las expectativas y establecer nuevos estándares en el mundo de las motos chinas de alto rendimiento. En colaboración con el reconocido fabricante italiano MV Agusta, QJ Motor se prepara para presentar al mundo una creación que fusiona la destreza italiana con la innovación china.\r\n\r\nLa QJ SRK 1000 RR es el resultado de choque de culturas. Ya hace años que existe un acuerdo entre QJ Motor y MV Agusta, dos titanes en la industria de las motocicletas de Oriente y Occidente, que trasciende fronteras y reúne lo mejor de ambos mundos: la pasión y la artesanía italiana con la ingeniería y la innovación china. La base para esta joya de dos ruedas es la famosa MV Agusta Brutale 1000 RR, una moto reconocida por su poder y elegancia.', 'l5hueamswuchntddmi4c'),
(18, '70 años de Kawasaki: De barcos y trenes a ser ícono de las motos japonesas', 'En septiembre próximo se cumplirán 70 años del nacimiento de Kawasaki y te contamos lo que la firma de Akashi tiene preparado para festejar.', 'En el próximo mes de septiembre, el mundo de las dos ruedas se viste de gala para conmemorar un hito significativo: los 70 años de venta de motocicletas por parte de Kawasaki. Este aniversario no solo representa siete décadas de trayectoria, sino que también rinde homenaje al lanzamiento de su primer modelo plenamente identificado con la marca, la legendaria Kawasaki B8. Para celebrar el 70º aniversario, la firma de Akashi preparó una serie de eventos globales y modelos conmemorativos que nos invitan a recorrer el apasionante camino que ha recorrido Kawasaki en la industria de las dos ruedas.', 'oobw5sqn6wrgl47zkf1s'),
(19, '¿Nueva Kawasaki Z900? Así sería el rediseño de la naked japonesa', 'La Kawasaki Z900 es, sin dudas, referente de su segmento. Pero siempre hay algo para mejorar y este rediseño de Kar Lee lo confirma.', 'En el apasionante mundo de las motos, pocos nombres resuenan con tanta potencia como la Kawasaki Z900. Su éxito en ventas se debe, sin lugar a dudas, a su impresionante rendimiento. Sin embargo, en búsqueda constante de la perfección, el diseñador Kar Lee ha decidido explorar una nueva dirección para la Z900, enfocándose en abordar su problema de peso pero imprimiendo un rediseño total.\r\nEl corazón de la Kawasaki Z900 late al ritmo de su motor de cuatro cilindros de 948cc que desarrolla una potencia máxima de 125 caballos a 9.500 rpm y un par máximo de 101 Nm 7.700 rpm. Esta hazaña de ingeniería ofrece una experiencia de conducción electrizante, donde el rugido del motor y la respuesta del acelerador se unen en una sinfonía de emociones.', 'm4b1pwbhbgqqpoh4kepn'),
(20, 'Royal Enfield 450: ¿Qué variante le sigue a la nueva Himalayan?', 'Las primeras imágenes de la próxima Royal Enfield 450 no tardaron en llegar, y te contamos qué variante seguirá luego de la nueva Himalayan.', 'En el calendario de lanzamientos de Royal Enfield, la nueva Himalayan 450 ya marcó su protagonismo al confirmarse que la conoceremos en unos pocos meses. Sin embargo, parece que no será la única en untilizar la plataforma 450 y ya conocemos a la que será su sucesora: la Scram 450. Esta creación es parte de la renovada alineación de la marca y se ubicaría como una opción de mayor prestación a la actual 411 que ya probamos en LaMoto.', 'xk3vmy346guykixylxzp'),
(24, 'sad', 'asd', 'asd', 'ohdfqc3thcmrqdssrs31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'mariancras', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'profe', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
