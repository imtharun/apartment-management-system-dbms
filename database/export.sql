-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: app
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `user_id` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL DEFAULT '12345678',
  `id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES ('a-123','12345678',101),('a-124','12345678',102),('a-909','12345678',103),('e-123','12345678',701),('e-456','12345678',702),('e-909','12345678',703),('o-123','12345678',501),('o-124','12345678',502),('o-456','12345678',503),('o-909','12345678',504),('t-123','12345678',601),('t-124','12345678',602),('t-145','12345678',603),('t-190','12345678',604),('t-345','12345678',605);
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `avt`
--

DROP TABLE IF EXISTS `avt`;
/*!50001 DROP VIEW IF EXISTS `avt`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `avt` AS SELECT 
 1 AS `tenant_id`,
 1 AS `room_no`,
 1 AS `dob`,
 1 AS `name`,
 1 AS `age`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `block`
--

DROP TABLE IF EXISTS `block`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block` (
  `block_no` int NOT NULL,
  `block_name` varchar(10) DEFAULT NULL,
  `complaints` varchar(100) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  PRIMARY KEY (`block_no`),
  KEY `fk_r` (`room_no`),
  CONSTRAINT `fk_r` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block`
--

LOCK TABLES `block` WRITE;
/*!40000 ALTER TABLE `block` DISABLE KEYS */;
INSERT INTO `block` VALUES (1,'kaveri','Water problem',11),(2,'Narmadha','Plumbing work',12),(3,'yamuna','tenant issue',13),(4,'jamuna',NULL,21);
/*!40000 ALTER TABLE `block` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `block_admin`
--

DROP TABLE IF EXISTS `block_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block_admin` (
  `admin_id` int NOT NULL,
  `admin_name` varchar(20) DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `block_no` (`block_no`),
  CONSTRAINT `block_admin_ibfk_1` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_admin`
--

LOCK TABLES `block_admin` WRITE;
/*!40000 ALTER TABLE `block_admin` DISABLE KEYS */;
INSERT INTO `block_admin` VALUES (101,'shiva',1),(102,'rajaa',NULL);
/*!40000 ALTER TABLE `block_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `emp_id` int NOT NULL,
  `emp_name` varchar(30) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `emp_type` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `block_no` (`block_no`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (701,'Muthu',20000,'Plumber',20,4),(702,'krishanan',5000,'Gardener',30,3),(703,'raman surya',4000,'Electrician ',21,NULL);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity`
--

DROP TABLE IF EXISTS `identity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `identity` (
  `proof` varchar(15) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  `tenant_id` int DEFAULT NULL,
  UNIQUE KEY `proof` (`proof`),
  KEY `owner_id` (`owner_id`),
  KEY `fk_t` (`tenant_id`),
  CONSTRAINT `fk_t` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`),
  CONSTRAINT `identity_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity`
--

LOCK TABLES `identity` WRITE;
/*!40000 ALTER TABLE `identity` DISABLE KEYS */;
INSERT INTO `identity` VALUES ('1234567890',501,NULL),('987654321',502,NULL),('2764724628',503,NULL),('9876543456',504,NULL),('6789876987',NULL,601),('4567898769',NULL,602),('9876567888',NULL,603),('2345676543',NULL,604),('7657876788',NULL,605);
/*!40000 ALTER TABLE `identity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `o`
--

DROP TABLE IF EXISTS `o`;
/*!50001 DROP VIEW IF EXISTS `o`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `o` AS SELECT 
 1 AS `complaints`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `oo`
--

DROP TABLE IF EXISTS `oo`;
/*!50001 DROP VIEW IF EXISTS `oo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `oo` AS SELECT 
 1 AS `complaints`,
 1 AS `room_no`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `owner_id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `aggrement_status` varchar(20) NOT NULL,
  `room_no` int DEFAULT NULL,
  `dob` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`owner_id`),
  KEY `FK_rrno` (`room_no`),
  CONSTRAINT `FK_rrno` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (501,'yuvarraj S',19,'yes',11,'17-aug-2002'),(502,'Tharun',19,'yes',13,'21-may-2002'),(503,'Surya DK',20,'no',21,'23-sep-2001'),(504,'Shivanesh',21,'no',31,'24-jan-2002');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental`
--

DROP TABLE IF EXISTS `rental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental` (
  `doj` varchar(20) DEFAULT NULL,
  `monthly_rent` int DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `tenant_id` int DEFAULT NULL,
  KEY `tenant_id` (`tenant_id`),
  KEY `FK_rno` (`room_no`),
  CONSTRAINT `FK_rno` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`),
  CONSTRAINT `rental_ibfk_1` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental`
--

LOCK TABLES `rental` WRITE;
/*!40000 ALTER TABLE `rental` DISABLE KEYS */;
INSERT INTO `rental` VALUES ('02-jan-2021',25000,11,601),('03-jan-2021',25000,12,602),('03-jan-2021',35000,13,603),('06-jan-2021',15000,21,604),('07-jan-2021',15000,31,605);
/*!40000 ALTER TABLE `rental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `room_no` int NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `parking_slot` varchar(10) DEFAULT NULL,
  `reg_no` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`room_no`),
  UNIQUE KEY `parking_slot` (`parking_slot`),
  UNIQUE KEY `reg_no` (`reg_no`),
  KEY `block_no` (`block_no`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (11,'3bhk',2,'B-123',1234,1),(12,'2bhk',2,'B-124',12345,2),(13,'3bhk',2,'B-125',123,1),(21,'1bhk',3,'B-234',456,4),(31,'4bhk',4,'B-789',2345,4),(67,'1bhk',7,'B-890',654,3);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `tav`
--

DROP TABLE IF EXISTS `tav`;
/*!50001 DROP VIEW IF EXISTS `tav`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `tav` AS SELECT 
 1 AS `tenant_id`,
 1 AS `room_no`,
 1 AS `dob`,
 1 AS `name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tenant`
--

DROP TABLE IF EXISTS `tenant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenant` (
  `tenant_id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `stat` varchar(10) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`tenant_id`),
  KEY `fk_rn` (`room_no`),
  CONSTRAINT `fk_rn` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tenant`
--

LOCK TABLES `tenant` WRITE;
/*!40000 ALTER TABLE `tenant` DISABLE KEYS */;
INSERT INTO `tenant` VALUES (601,'nithin','01-apr-02','no',11,19),(602,'rohith','23-aug-02','not paid',12,23),(603,'mothi','12-jun-02','not paid',13,41),(604,'abu danish','23-apr-02','not paid',21,35),(605,'Hari','30-sep-02','not paid',31,56);
/*!40000 ALTER TABLE `tenant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'app'
--

--
-- Dumping routines for database 'app'
--

--
-- Final view structure for view `avt`
--

/*!50001 DROP VIEW IF EXISTS `avt`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `avt` AS select `tenant`.`tenant_id` AS `tenant_id`,`tenant`.`room_no` AS `room_no`,`tenant`.`dob` AS `dob`,`tenant`.`name` AS `name`,`tenant`.`age` AS `age` from `tenant` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `o`
--

/*!50001 DROP VIEW IF EXISTS `o`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `o` AS select `block`.`complaints` AS `complaints` from `block` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `oo`
--

/*!50001 DROP VIEW IF EXISTS `oo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `oo` AS select `block`.`complaints` AS `complaints`,`block`.`room_no` AS `room_no` from `block` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `tav`
--

/*!50001 DROP VIEW IF EXISTS `tav`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `tav` AS select `tenant`.`tenant_id` AS `tenant_id`,`tenant`.`room_no` AS `room_no`,`tenant`.`dob` AS `dob`,`tenant`.`name` AS `name` from `tenant` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-11 12:14:42
