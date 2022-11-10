-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: wb
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `clienteprodutos`
--

DROP TABLE IF EXISTS `clienteprodutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clienteprodutos` (
  `IdProduto` int NOT NULL,
  `IdCliente` int NOT NULL,
  `Genero` int DEFAULT NULL,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  `NomeCliente` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienteprodutos`
--

LOCK TABLES `clienteprodutos` WRITE;
/*!40000 ALTER TABLE `clienteprodutos` DISABLE KEYS */;
INSERT INTO `clienteprodutos` VALUES (3,16,2,'Esmalte',1.99,'eloisa'),(6,15,1,'Gel',20.99,'everton');
/*!40000 ALTER TABLE `clienteprodutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(500) DEFAULT NULL,
  `NomeSocial` varchar(500) DEFAULT NULL,
  `Cpf` int DEFAULT NULL,
  `DataEmissaoCpf` date DEFAULT NULL,
  `Rg` int DEFAULT NULL,
  `DataEmissaoRg` date DEFAULT NULL,
  `DDD` int DEFAULT NULL,
  `Telefone` int DEFAULT NULL,
  `Genero` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (15,'everton','ricardo',321243,NULL,12,NULL,123,123214314,1),(16,'eloisa','maria',3243,NULL,12323,NULL,123,213213213,2);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clienteservicos`
--

DROP TABLE IF EXISTS `clienteservicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clienteservicos` (
  `IdServico` int NOT NULL,
  `IdCliente` int NOT NULL,
  `Genero` int DEFAULT NULL,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  `NomeCliente` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienteservicos`
--

LOCK TABLES `clienteservicos` WRITE;
/*!40000 ALTER TABLE `clienteservicos` DISABLE KEYS */;
INSERT INTO `clienteservicos` VALUES (3,16,2,'Escova',100.00,'eloisa'),(4,16,2,'Unha',100.00,'eloisa'),(3,16,2,'Escova',100.00,'eloisa'),(3,15,1,'Escova',100.00,'everton'),(4,16,2,'Unha',100.00,'eloisa'),(6,16,2,'teste',2132.00,'eloisa');
/*!40000 ALTER TABLE `clienteservicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (3,'Esmalte',1.99),(4,'Alicate',10.00),(6,'Gel',20.99);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(500) DEFAULT NULL,
  `Preco` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
INSERT INTO `servicos` VALUES (3,'Escova',100.00),(6,'teste',2132.00);
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-10 11:22:34
