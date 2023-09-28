-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sports_players
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sport_id` int NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `src` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_players_sports_idx` (`sport_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (3,1,'Lebron','James','Male','2023-09-21 15:43:26','2023-09-21 15:43:26','https://d3hjzzsa8cr26l.cloudfront.net/b8d8d998-a875-11e9-9161-db0e399b9f79.jpg?zcw=950&zch=950&zct=0&zcl=215&pw=264'),(20,1,'Kevin','Durant','Male','2023-09-21 16:08:58','2023-09-21 16:08:58','https://d3hjzzsa8cr26l.cloudfront.net/712528a9-0fe8-11e8-b59b-05eace202d51.jpg?pw=264'),(21,1,'Stephen','Curry','Male','2023-09-21 16:08:58','2023-09-21 16:08:58','https://d3hjzzsa8cr26l.cloudfront.net/82d92da7-2d0b-11e6-8fa2-87887d182df9.jpg?pw=264'),(22,1,'Lisa','Leslie','Female','2023-09-21 16:08:58','2023-09-21 16:08:58','https://www.sportingfree.com/wp-content/uploads/2021/02/Lisa-Leslie.jpg'),(23,1,'Diana','Taurasi','Female','2023-09-21 16:08:58','2023-09-21 16:08:58','https://www.sportingfree.com/wp-content/uploads/2021/02/Diana-Taurasi.jpg'),(24,1,'Alanna','Smith','Female','2023-09-21 16:08:58','2023-09-21 16:08:58','https://images.sportsbrief.com/images/1120/7ad794096485071f.webp?v=1'),(25,2,'Maksim','Mikhaylov','Male','2023-09-21 17:08:42','2023-09-21 17:08:42','https://volleybox.net/media/upload/players/16832007779zpQD.png'),(26,2,'Wilfredo','Leon','Male','2023-09-21 17:08:42','2023-09-21 20:46:49','https://volleybox.net/media/upload/players/16814834516vsss.png'),(27,2,'Sergio Dutra','Santos','Male','2023-09-21 17:08:42','2023-09-21 17:08:42','https://volleybox.net/media/upload/players/1671820879GI2du.png'),(28,2,'Zehra','Gunes','Female','2023-09-21 17:08:42','2023-09-21 17:08:42','https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2022/02/wp9621609.jpg?resize=768%2C1225&ssl=1'),(29,2,'Klara','Peric','Female','2023-09-21 17:08:42','2023-09-21 17:08:42','https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/08/klara-peric.jpg_1902800913.jpg?resize=768%2C576&ssl=1'),(30,2,'Daniela','Ospina','Female','2023-09-21 17:08:42','2023-09-21 17:08:42','https://i0.wp.com/listas.uachatec.xyz/wp-content/uploads/2021/08/1420926833_733124_1420927103_album_grande.jpg?resize=768%2C1020&ssl=1');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sports`
--

DROP TABLE IF EXISTS `sports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sports`
--

LOCK TABLES `sports` WRITE;
/*!40000 ALTER TABLE `sports` DISABLE KEYS */;
INSERT INTO `sports` VALUES (1,'Basketball','2023-09-21 15:32:08','2023-09-21 15:32:08'),(2,'Volleyball','2023-09-21 15:32:08','2023-09-21 15:32:08'),(3,'Baseball','2023-09-21 15:32:08','2023-09-21 15:32:08'),(4,'Soccer','2023-09-21 15:32:08','2023-09-21 15:32:08'),(5,'Football','2023-09-21 15:32:08','2023-09-21 15:32:08');
/*!40000 ALTER TABLE `sports` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-21 20:51:46
